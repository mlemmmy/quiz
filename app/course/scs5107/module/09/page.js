import Link from "next/link";

export default function ModulePage() {
  return (
    <main className="shell">
      <nav><Link href="/course/scs5107">← Enterprise Programming</Link><span>SCS5107</span></nav>
      <header className="courseHead">
        <small>MODULE 09</small>
        <h1>Testing Strategies</h1>
        <p>Write a real test that catches a discount bug, then fix the implementation.</p>
      </header>
      <section className="notesGrid">
        <article className="note"><strong>Core focus</strong><p>Meaningful tests; regression detection; failing-test-first workflow; bug fixing.</p></article>
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
