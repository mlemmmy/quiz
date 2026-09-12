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
        <p>Study the lectures, then test whether you can actually apply the concepts.</p>
      </header>

      <Link className="card" href="/sids5101/week1.html">
        <div>
          <small>WEEK 1</small>
          <h2>Foundation Notes</h2>
          <p>Big Data, the Big Data ecosystem, analytics types, visualization fundamentals, chart design, history and perception.</p>
        </div>
        <span>→</span>
      </Link>

      <Link className="card" href="/sids5101/week1.html#test">
        <div>
          <small>30 QUESTIONS</small>
          <h2>Week 1 Foundation Test</h2>
          <p>Immediate right/wrong feedback with explanations.</p>
        </div>
        <span>→</span>
      </Link>

      <Link className="card" href="/sids5101/lecture2.html">
        <div>
          <small>LECTURE 2 · NEW</small>
          <h2>Data Gathering &amp; Preparation</h2>
          <p>Full lecture content: data life cycle, CRISP-DM, analytics methodology, cognitive ability, data formats, transformation and scalability.</p>
        </div>
        <span>→</span>
      </Link>

      <Link className="card" href="/sids5101/lecture2.html#quiz">
        <div>
          <small>36 QUESTIONS · NEW</small>
          <h2>Lecture 2 Application Quiz</h2>
          <p>Scenario-based questions on CRISP-DM, data types, transformation strategies and scalability.</p>
        </div>
        <span>→</span>
      </Link>

      <Link className="card" href="/sids5101/lecture3.html">
        <div>
          <small>LECTURE 3 · NEW</small>
          <h2>Data Analytics &amp; Visualisation</h2>
          <p>Full lecture content: data mining, mining tasks, classification, clustering, association and regression.</p>
        </div>
        <span>→</span>
      </Link>

      <Link className="card" href="/sids5101/lecture3.html#quiz">
        <div>
          <small>32 QUESTIONS · NEW</small>
          <h2>Lecture 3 Application Quiz</h2>
          <p>Apply the differences between description, estimation, prediction, classification, clustering, association and regression.</p>
        </div>
        <span>→</span>
      </Link>
    </main>
  );
}
