import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell">
      <header className="hero">
        <div className="badge">STUDY HUB</div>
        <h1>Discrete Mathematics<br />Quiz Hub</h1>
        <p>Build your revision course-by-course, topic-by-topic.</p>
      </header>

      <section className="content">
        <h2>Courses</h2>

        <Link className="course-card" href="/course/scs5102">
          <div>
            <span className="course-code">SCS5102</span>
            <h3>Discrete Mathematics</h3>
            <p>History, propositional logic, connectives, truth tables and more.</p>
          </div>
          <span className="arrow">→</span>
        </Link>

        <div className="empty-card">
          <span className="plus">＋</span>
          <div>
            <h3>More courses coming</h3>
            <p>Add your other modules here later.</p>
          </div>
        </div>
      </section>
    </main>
  );
}