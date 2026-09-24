"use client";
import { useState } from "react";

export default function Quiz({ questions }) {
  const [a, setA] = useState({});
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState({});
  const score = questions.filter((q) => a[q.id] === q.answer).length;

  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <section>
      <header className="quizHead">
        <small>SCS5102 • TOPIC 1</small>
        <h1>Propositional Logic & Real-Life Applications</h1>
        <p>{questions.length} questions • Click an answer for instant correction, then click the concept tag for the explanation.</p>
        {done && (
          <div className="score">
            <strong>{score}/{questions.length}</strong>
            <span>{score >= 48 ? "Excellent work." : score >= 30 ? "Good start — review missed questions." : "Keep practising and revisit the notes."}</span>
            <button onClick={() => { setA({}); setDone(false); setOpen({}); }}>Try again</button>
          </div>
        )}
      </header>

      {questions.map((q, i) => {
        const picked = a[q.id];
        const answered = picked !== undefined;
        const isOpen = !!open[q.id];
        return (
          <article className="question" key={q.id}>
            <button
              type="button"
              className={"conceptTag" + (answered ? " active" : "") + (isOpen ? " open" : "")}
              onClick={() => answered && toggle(q.id)}
              aria-expanded={isOpen}
              disabled={!answered}
            >
              QUESTION {String(i + 1).padStart(2, "0")} • {q.concept}
              {answered && <span className="chev">▾</span>}
            </button>
            <h2>{q.question}</h2>
            {q.options.map((o, j) => {
              const isCorrect = j === q.answer;
              const isPicked = picked === j;
              return (
                <button
                  disabled={done}
                  className={"option " + (isPicked ? "selected " : "") + (answered && isCorrect ? "correct " : "") + (answered && isPicked && !isCorrect ? "wrong" : "")}
                  onClick={() => setA({ ...a, [q.id]: j })}
                  key={o}
                >
                  <b>{String.fromCharCode(65 + j)}</b>{o}
                </button>
              );
            })}
            {answered && (
              <div className={"explainWrap" + (isOpen ? " open" : "")}>
                <div>
                  <p className="explain">
                    <b>{picked === q.answer ? "✓ Correct." : "✗ Incorrect — correct answer highlighted in green."}</b> {q.explanation}
                  </p>
                </div>
              </div>
            )}
          </article>
        );
      })}

      {!done && (
        <button className="submit" disabled={Object.keys(a).length !== questions.length} onClick={() => { setDone(true); scrollTo(0, 0); }}>
          Submit quiz →
        </button>
      )}
    </section>
  );
}
