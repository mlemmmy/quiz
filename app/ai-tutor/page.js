"use client";

import { useState } from "react";
import Link from "next/link";

const courses = [
  { value: "SCS5102 — Discrete Mathematics", topic: "Relations, logic and rules of inference" },
  { value: "SIDS5101 — Big Data Analytics", topic: "Big Data, analytics, data preparation, data mining and visualization" },
  { value: "SCS5103 — Pattern Recognition", topic: "Pattern recognition, classification and biometrics" },
];

function TutorMessage({ role, text }) {
  return (
    <div className={`tutorMessage ${role}`}>
      <small>{role === "assistant" ? "AI TUTOR" : "YOU"}</small>
      <div className="messageText">{text}</div>
    </div>
  );
}

export default function AITutor() {
  const [course, setCourse] = useState(courses[0].value);
  const [topic, setTopic] = useState(courses[0].topic);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey. I’m your Study Hub AI Tutor. I can teach, quiz you, challenge your reasoning, or help you revise. Pick a course, then tell me what you want to work on.\n\nTry: “Quiz me on antisymmetry. One question at a time, and don’t give me the answer until I reason it out.”",
    },
  ]);
  const [input, setInput] = useState("");
  const [previousResponseId, setPreviousResponseId] = useState("");
  const [loading, setLoading] = useState(false);

  const changeCourse = (value) => {
    const selected = courses.find((c) => c.value === value);
    setCourse(value);
    setTopic(selected?.topic || "General revision");
    setMessages([{ role: "assistant", text: `Switched to ${value}. What would you like to revise?` }]);
    setPreviousResponseId("");
  };

  async function sendMessage(text = input) {
    const clean = text.trim();
    if (!clean || loading) return;

    setMessages((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean, previousResponseId, course, topic }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Tutor request failed.");
      setMessages((m) => [...m, { role: "assistant", text: data.reply }]);
      setPreviousResponseId(data.responseId || "");
    } catch (error) {
      setMessages((m) => [...m, { role: "assistant", text: `⚠️ ${error.message}` }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell tutorPage">
      <header className="tutorHead">
        <Link href="/" className="backLink">← Study Hub</Link>
        <small>AI STUDY TUTOR</small>
        <h1>Study with me.</h1>
        <p>Ask questions, explain your reasoning, or let the tutor quiz you one question at a time.</p>
      </header>

      <section className="tutorPanel">
        <div className="tutorControls">
          <label>
            <span>COURSE</span>
            <select value={course} onChange={(e) => changeCourse(e.target.value)}>
              {courses.map((c) => <option key={c.value}>{c.value}</option>)}
            </select>
          </label>
          <label>
            <span>FOCUS</span>
            <input value={topic} onChange={(e) => setTopic(e.target.value)} />
          </label>
          <button className="resetTutor" onClick={() => { setMessages([{ role: "assistant", text: "Fresh session. What are we working on?" }]); setPreviousResponseId(""); }}>New session</button>
        </div>

        <div className="tutorChat" aria-live="polite">
          {messages.map((m, i) => <TutorMessage key={i} role={m.role} text={m.text} />)}
          {loading && <div className="tutorMessage assistant"><small>AI TUTOR</small><div className="messageText typing">Thinking…</div></div>}
        </div>

        <div className="quickPrompts">
          <button onClick={() => sendMessage("Quiz me on this topic. Ask one exam-style question at a time and wait for my answer.")}>Quiz me</button>
          <button onClick={() => sendMessage("Teach me this topic from the basics, then check my understanding with questions.")}>Teach me</button>
          <button onClick={() => sendMessage("Give me a difficult exam-style question and make me explain my reasoning.")}>Challenge me</button>
        </div>

        <form className="tutorComposer" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your answer, ask a question, or tell the tutor to quiz you…" rows={3} />
          <button disabled={loading || !input.trim()} type="submit">Send →</button>
        </form>
        <p className="tutorNote">The tutor uses the OpenAI API. Your API key stays on the server when deployed correctly.</p>
      </section>
    </main>
  );
}
