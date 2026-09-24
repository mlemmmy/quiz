import Link from "next/link";

export default function ModulePage() {
  return (
    <main className="shell" data-course="scs5107">
      <nav><Link href="/course/scs5107">← Enterprise Programming</Link><span>SCS5107</span></nav>
      <header className="courseHead">
        <small>MODULE 05</small>
        <h1>Data-Intensive Applications II: Databases, Batching & Caching at Scale</h1>
        <p>Detect and remove an N+1 access pattern, use keyset pagination, and add read-through caching.</p>
      </header>
      <section className="notesGrid">
        <article className="note"><strong>Core focus</strong><p>N+1 access; keyset pagination; read-through caching; scalable data access.</p></article>
        <article className="note"><strong>Hands-on approach</strong><p>Read the module README, inspect the activity code, run the supplied tests, implement the requested task, and rerun the tests until the module is complete.</p></article>
      </section>
      <section className="note" style={{marginTop:16}}>
        <strong>Source-grounded note</strong>
        <p>This page summarizes the module overview supplied in the Enterprise Python GitHub repositories. It does not replace the repository's activity instructions or tests.</p>
        <Link href="/course/scs5107">Back to all modules →</Link>
      </section>
    </main>
  );
}
