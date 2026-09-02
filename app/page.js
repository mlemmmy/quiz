import Link from "next/link";

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

        <Link className="card" href="/course/scs5102">
          <div>
            <small>SCS5102</small>
            <h3>Discrete Mathematics</h3>
            <p>Propositional logic, truth tables, applications and more.</p>
          </div>
          <span>→</span>
        </Link>

        <Link className="card" href="/course/sids5101">
          <div>
            <small>SIDS5101</small>
            <h3>Big Data Analytics</h3>
            <p>Big Data, analytics types, visualization and Week 1 foundations.</p>
          </div>
          <span>→</span>
        </Link>

        <Link className="card" href="/course/scs5103">
          <div>
            <small>SCS5103</small>
            <h3>Pattern Recognition</h3>
            <p>Measured patterns, classification, biometrics and Week 1 foundations.</p>
          </div>
          <span>→</span>
        </Link>

        <div className="card muted">
          <div>
            <h3>More courses coming</h3>
            <p>Add your other modules here later.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
