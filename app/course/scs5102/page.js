import Link from "next/link";

export default function SCS5102() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <Link href="/">← All courses</Link>
        <span>SCS5102</span>
      </header>

      <section className="content">
        <div className="section-kicker">COURSE</div>
        <h1>SCS5102 — Discrete Mathematics</h1>
        <p className="lead">Choose a topic to revise.</p>

        <Link className="topic-card" href="/course/scs5102/topic-1">
          <div className="topic-number">01</div>
          <div>
            <span className="status">AVAILABLE</span>
            <h2>Foundations &amp; Propositional Logic</h2>
            <p>History • propositions • variables • connectives • conditionals • biconditionals • precedence • bit strings • tautologies</p>
          </div>
          <span className="arrow">→</span>
        </Link>

        <div className="topic-card muted">
          <div className="topic-number">02</div>
          <div>
            <span className="status">COMING SOON</span>
            <h2>Next topic</h2>
            <p>New material will appear here as you study it.</p>
          </div>
        </div>
      </section>
    </main>
  );
}