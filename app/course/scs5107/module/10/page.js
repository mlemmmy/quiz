import Link from "next/link";

export default function ModulePage() {
  return (
    <main className="shell" data-course="scs5107">
      <nav><Link href="/course/scs5107">← Enterprise Programming</Link><span>SCS5107</span></nav>
      <header className="courseHead">
        <small>MODULE 10</small>
        <h1>Performance Profiling</h1>
        <p>Rewrite an O(n²) function to O(n) using sets.</p>
      </header>
      <section className="notesGrid">
        <article className="note"><strong>Core focus</strong><p>Complexity; profiling; algorithmic improvement; set-based lookup.</p></article>
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
