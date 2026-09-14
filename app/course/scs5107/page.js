import Link from "next/link";

const modules = [
  ["01", "Foundations of Enterprise Application Architecture", "Refactor a tangled shop script into domain, infrastructure, and API layers with inward-directed dependencies."],
  ["02", "Design Patterns I: Creational & Structural", "Use Factory and Adapter so modern and legacy payment providers share one payment interface."],
  ["03", "Design Patterns II: Behavioral & Architectural", "Use Strategy, Observer, dependency injection, and repository ideas to make pricing and order reactions replaceable."],
  ["04", "Data-Intensive Applications I: Efficient Data Structures & Memory", "Replace eager CSV loading with streaming and batching so large inputs do not require all data in memory."],
  ["05", "Data-Intensive Applications II: Databases, Batching & Caching at Scale", "Detect and remove N+1 access, use keyset pagination, and add read-through caching."],
  ["06", "Concurrency Foundations", "Use ProcessPoolExecutor for CPU-oriented parallel work and ThreadPoolExecutor for concurrent notifications."],
  ["07", "Async Concurrency", "Implement bounded asynchronous concurrency with an asyncio Semaphore."],
  ["08", "Frontend Optimization", "Work with cache headers, slim payloads, and GZip compression."],
  ["09", "Testing Strategies", "Write a real test that exposes a discount bug, then fix the implementation."],
  ["10", "Performance Profiling", "Rewrite an O(n²) function as O(n) using sets."],
  ["11", "Application Security", "Use parameterized SQL queries and authorization checks."],
  ["12", "Microservices Architecture", "Build a FastAPI endpoint that validates and stores orders."],
  ["13", "Production Resilience", "Implement a circuit breaker for resilient cross-service calls."],
];

export default function EnterpriseProgramming() {
  return (
    <main className="shell">
      <nav><Link href="/">← Study Hub</Link><span>SCS5107</span></nav>
      <header className="courseHead">
        <small>SCS5107</small>
        <h1>Enterprise Programming</h1>
        <p>Hands-on Enterprise Python development, from architecture and design patterns through data-intensive systems, concurrency, testing, security, microservices and production resilience.</p>
      </header>

      <section>
        <h2>Modules 01–13</h2>
        {modules.map(([number, title, description]) => (
          <Link className="card" href={`/course/scs5107/module/${number}`} key={number}>
            <div><small>MODULE {number}</small><h3>{title}</h3><p>{description}</p></div>
            <span>→</span>
          </Link>
        ))}
      </section>

      <section className="note" style={{marginTop: 24}}>
        <strong>Study workflow</strong>
        <p>For each module, read the module README, inspect the activity, run the module tests, implement the requested task, rerun the tests, and explain the engineering trade-off. The repository uses intentionally unfinished starter activities and pre-written tests.</p>
        <p>Source: the course repositories supplied for this Study Hub.</p>
      </section>
    </main>
  );
}
