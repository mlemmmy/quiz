import Link from "next/link";

const modules = [
  { code: "SCS5102", name: "Discrete Mathematics", href: "/course/scs5102", short: "DM" },
  { code: "SCS5103", name: "Pattern Recognition", href: "/course/scs5103", short: "PR" },
  { code: "SIDS5101", name: "Big Data Analytics", href: "/course/sids5101", short: "BD" },
  { code: "MODULE 4", name: "Module 4 — add name", href: null, short: "M4" },
  { code: "MODULE 5", name: "Module 5 — add name", href: null, short: "M5" },
];

const startDate = new Date("2026-09-04T12:00:00");
const plan = Array.from({ length: 45 }, (_, i) => {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  const module = modules[i % modules.length];
  return {
    day: i + 1,
    date,
    module,
    topic: (Math.floor(i / modules.length) % 9) + 1,
  };
});

const formatDate = (date) =>
  date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });

export default function Home() {
  return (
    <main className="shell">
      <header className="hero">
        <Link href="/" className="hubPill">STUDY HUB</Link>
        <h1>Study Hub</h1>
        <p>Build your revision course-by-course, topic-by-topic.</p>
      </header>

      <section className="studyPlan">
        <div className="sectionIntro">
          <div>
            <small>45-DAY STUDY PLAN</small>
            <h2>One topic a day.</h2>
            <p>3 hours daily, rotating through all 5 modules so every module comes back every 5 days.</p>
          </div>
          <div className="planBadge"><strong>3h</strong><span>per day</span></div>
        </div>

        <div className="studyMethod">
          <div><strong>2h</strong><span>Learn the new topic</span></div>
          <div><strong>45m</strong><span>Questions + active practice</span></div>
          <div><strong>15m</strong><span>Review an older topic</span></div>
        </div>

        <div className="planLegend">
          {modules.map((m) => <span key={m.short}><b>{m.short}</b>{m.name}</span>)}
        </div>

        <div className="calendarGrid">
          {plan.map((item) => (
            <div className="calendarDay" key={item.day}>
              <div className="dayTop"><span>DAY {item.day}</span><time>{formatDate(item.date)}</time></div>
              <div className="dayTopic"><b>Topic {item.topic}</b><span>{item.module.name}</span></div>
              {item.module.href ? <Link href={item.module.href}>Open module →</Link> : <span className="coming">Module name pending</span>}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Courses</h2>

        <Link className="card" href="/course/scs5102">
          <div><small>SCS5102</small><h3>Discrete Mathematics</h3><p>Propositional logic, truth tables, relations, inference and more.</p></div>
          <span>→</span>
        </Link>

        <Link className="card" href="/course/sids5101">
          <div><small>SIDS5101</small><h3>Big Data Analytics</h3><p>Big Data, analytics types, visualization and Week 1 foundations.</p></div>
          <span>→</span>
        </Link>

        <Link className="card" href="/course/scs5103">
          <div><small>SCS5103</small><h3>Pattern Recognition</h3><p>Measured patterns, classification, biometrics and Week 1 foundations.</p></div>
          <span>→</span>
        </Link>

        <div className="card muted">
          <div><h3>More courses coming</h3><p>Add your other modules here later.</p></div>
        </div>
      </section>
    </main>
  );
}
