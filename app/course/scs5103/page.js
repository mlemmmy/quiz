import Link from "next/link";

export default function Course() {
  return (
    <main className="shell">
      <nav>
        <Link href="/">← All courses</Link>
        <span>SCS5103</span>
      </nav>

      <header className="courseHead">
        <small>COURSE</small>
        <h1>SCS5103 — Pattern Recognition</h1>
        <p>Choose a revision resource.</p>
      </header>

      <Link className="card" href="/scs5103/week1.html">
        <div>
          <small>WEEK 1</small>
          <h2>Foundation Notes</h2>
          <p>
            Pattern recognition, measured patterns, classes, classification,
            biometrics, feature vectors, pipelines, formulas, diagrams,
            memory anchors and more.
          </p>
        </div>
        <span>→</span>
      </Link>

      <Link className="card" href="/scs5103/week1.html#foundation-test">
        <div>
          <small>30 QUESTIONS</small>
          <h2>Week 1 Foundation Test</h2>
          <p>
            Test the complete Week 1 material, including classification,
            measured patterns and biometrics.
          </p>
        </div>
        <span>→</span>
      </Link>

      <div className="card muted">
        <div>
          <small>COMING SOON</small>
          <h2>Next topic</h2>
          <p>New Pattern Recognition material will be added as you study it.</p>
        </div>
      </div>
    </main>
  );
}
