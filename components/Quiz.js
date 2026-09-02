"use client";

import { useMemo, useState } from "react";

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => questions.reduce((total, q) => total + (answers[q.id] === q.answer ? 1 : 0), 0),
    [answers, questions]
  );

  const answered = Object.keys(answers).length;

  function choose(id, option) {
    if (!submitted) setAnswers((current) => ({ ...current, [id]: option }));
  }

  function submit() {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="quiz-container">
      <div className="quiz-heading">
        <div>
          <div className="section-kicker">SCS5102 • TOPIC 1</div>
          <h1>Foundations &amp; Propositional Logic</h1>
          <p>28 questions covering the concepts you have studied so far.</p>
        </div>
        <div className="progress-pill">{answered}/{questions.length} answered</div>
      </div>

      {submitted && (
        <div className="score-card">
          <div>
            <span className="score-label">YOUR SCORE</span>
            <strong>{score}/{questions.length}</strong>
          </div>
          <div className="score-message">
            {score >= questions.length * 0.8
              ? "Excellent work — you're in strong revision shape."
              : score >= questions.length * 0.5
              ? "Good start — review the explanations for the questions you missed."
              : "Keep practising — revisit the topic notes and try again."}
          </div>
          <button className="secondary-btn" onClick={reset}>Try again</button>
        </div>
      )}

      <div className="questions">
        {questions.map((q, index) => {
          const selected = answers[q.id];
          const correct = selected === q.answer;

          return (
            <article className="question-card" key={q.id}>
              <div className="question-meta">
                <span>QUESTION {String(index + 1).padStart(2, "0")}</span>
                <span>{q.concept}</span>
              </div>
              <h2>{q.question}</h2>

              <div className="options">
                {q.options.map((option, i) => {
                  let cls = "option";
                  if (selected === i) cls += " selected";
                  if (submitted && i === q.answer) cls += " correct";
                  if (submitted && selected === i && i !== q.answer) cls += " wrong";

                  return (
                    <button
                      key={option}
                      className={cls}
                      onClick={() => choose(q.id, i)}
                      disabled={submitted}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className={`explanation ${correct ? "good" : "needs-review"}`}>
                  <strong>{correct ? "Correct." : `Review this one. Correct answer: ${String.fromCharCode(65 + q.answer)}.`}</strong>
                  <span>{q.explanation}</span>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {!submitted && (
        <button
          className="submit-btn"
          onClick={submit}
          disabled={answered !== questions.length}
        >
          {answered === questions.length
            ? "Submit quiz →"
            : `Answer all questions (${questions.length - answered} remaining)`}
        </button>
      )}
    </section>
  );
}