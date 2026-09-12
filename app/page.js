import Link from "next/link";

const days = Array.from({ length: 45 }, (_, i) => {
  const d = new Date(2026, 8, 4 + i);
  const module = (i % 5) + 1;
  return {
    day: i + 1,
    date: d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
    module,
    topic: Math.floor(i / 5) + 1,
  };
});

const moduleNames = {
  1: "Module 1",
  2: "Module 2",
  3: "Module 3",
  4: "Module 4",
  5: "Module 5",
};

const moduleLinks = {
  1: "/course/scs5102",
  2: "/course/sids5101",
  3: "/course/scs5103",
};

export default function Home() {
  return (
    <main className="shell">
      <header className="hero">
        <Link href="/" className="hubPill">STUDY HUB</Link>
        <h1>Study Hub</h1>
        <p>Build your revision course-by-course, topic-by-topic.</p>
      </header>

      <section>
        <h2>Courses</h2>
        <Link className="card" href="/course/scs5102"><div><small>SCS5102</small><h3>Discrete Mathematics</h3><p>Propositional logic, truth tables, applications and more.</p></div><span>→</span></Link>
        <Link className="card" href="/course/sids5101"><div><small>SIDS5101</small><h3>Big Data Analytics</h3><p>Big Data, analytics, data preparation, data mining, visualization and interactive lecture quizzes.</p></div><span>→</span></Link>
        <Link className="card" href="/course/scs5103"><div><small>SCS5103</small><h3>Pattern Recognition</h3><p>Measured patterns, classification, biometrics and Week 1 foundations.</p></div><span>→</span></Link>
        <Link className="card aiTutorCard" href="/ai-tutor"><div><small>AI STUDY TUTOR</small><h3>Study with AI</h3><p>Chat, get explanations, practise your reasoning and be quizzed one question at a time.</p></div><span>→</span></Link>
        <div className="card muted"><div><h3>More courses coming</h3><p>Add your other modules here later.</p></div></div>
      </section>

      <section className="studyPlan">
        <div className="planTop">
          <div>
            <small>45-DAY PLAN</small>
            <h2>3 hours a day · 1 topic a day</h2>
            <p>Each module returns every 5 days for spaced repetition.</p>
          </div>
          <span className="planDays">45 topics</span>
        </div>
        <div className="weekStrip">
          {days.slice(0, 5).map((x) => (
            <div className="dayChip" key={x.day}>
              <b>DAY {x.day}</b><span>{x.date}</span><strong>M{x.module} · T{x.topic}</strong>
            </div>
          ))}
        </div>
        <details className="fullPlan">
          <summary>View full 45-day calendar</summary>
          <div className="calendarGrid">
            {days.map((x) => {
              const href = moduleLinks[x.module];
              return href ? (
                <Link className="calendarDay" href={href} key={x.day}>
                  <b>DAY {x.day}</b><span>{x.date}</span><strong>M{x.module} · Topic {x.topic}</strong>
                </Link>
              ) : (
                <div className="calendarDay" key={x.day}>
                  <b>DAY {x.day}</b><span>{x.date}</span><strong>M{x.module} · Topic {x.topic}</strong>
                </div>
              );
            })}
          </div>
        </details>
      </section>


    </main>
  );
}
