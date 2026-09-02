import Link from "next/link";

export default function Course() {
  return (
    <main className="shell">
      <nav>
        <Link href="/">← All courses</Link>
        <span>SIDS5101</span>
      </nav>

      <header className="courseHead">
        <small>COURSE</small>
        <h1>SIDS5101 — Big Data Analytics</h1>
        <p>Choose a revision resource.</p>
      </header>

      <Link className="card" href="/sids5101/week1.html">
        <div>
          <small>WEEK 1</small>
          <h2>Foundation Notes</h2>
          <p>Big Data, the Big Data ecosystem, analytics types, data visualization fundamentals, chart design, history and perception.</p>
        </div>
        <span>→</span>
      </Link>

      <Link className="card" href="/sids5101/week1.html#test">
        <div>
          <small>30 QUESTIONS</small>
          <h2>Week 1 Foundation Test</h2>
          <p>Test the Week 1 concepts with active recall and review.</p>
        </div>
        <span>→</span>
      </Link>

      <div className="card muted">
        <div>
          <small>COMING SOON</small>
          <h2>Next topic</h2>
          <p>New Big Data Analytics material will be added as you study it.</p>
        </div>
      </div>
    </main>
  );
}
