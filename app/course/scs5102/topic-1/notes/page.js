import Link from "next/link";
const sections=[
["Propositions","A proposition is a declarative sentence that is either true or false, but not both.",["10 is greater than 5 → True","10 is less than 5 → False","Questions and commands are not propositions."]],
["Propositional variables","Letters such as p, q and r represent propositions and take truth values T or F.",["p: It is raining.","q: I have an umbrella."]],
["Logical connectives","Connectives combine propositions into compound propositions.",["¬p = NOT","p ∧ q = AND","p ∨ q = OR","p ⊕ q = XOR","p → q = conditional","p ↔ q = biconditional"]],
["Conditional statements","p → q is false only when p is true and q is false.",["Converse: q → p","Inverse: ¬p → ¬q","Contrapositive: ¬q → ¬p","p → q ≡ ¬q → ¬p"]],
["Biconditional","p ↔ q is true when p and q have the same truth value.",["p ↔ q ≡ (p → q) ∧ (q → p)"]],
["Precedence","Use standard precedence when parentheses are absent.",["¬, then ∧, then ∨, then ⊕, then →, then ↔","¬p ∨ q → r = ((¬p) ∨ q) → r"]],
["Tautology, contradiction, contingency","A tautology is always true; a contradiction always false; a contingency is sometimes true and sometimes false.",["p ∨ ¬p = tautology","p ∧ ¬p = contradiction","p ∧ q = contingency"]],
["Truth tables","A truth table evaluates every possible assignment. n variables require 2^n rows.",["2 variables → 4 rows","3 variables → 8 rows","4 variables → 16 rows"]],
["English-to-logic translation","Watch for words such as if, only if, both, either and unless.",["If p then q → p → q","p only if q → p → q","p if q → q → p","both → ∧","either/or → ∨","exactly one → ⊕"]],
["Real-life applications","Mathematical logic models rules used by software and automated systems.",["Access control: access → valid credentials","Two-factor authentication: password ∧ OTP","Fraud detection: high amount ∨ unusual location","Smart lighting: motion ∧ darkness","Exam system: timer zero → submit","Banking: sufficient funds → payment approval"]],
["Bitwise logic","Logical operations can be applied bit-by-bit to binary strings.",["1010 AND 1100 = 1000","1010 OR 1100 = 1110","1010 XOR 1100 = 0110","NOT(1010) = 0101"]]
];
export default function Notes(){return <main className="shell"><nav><Link href="/course/scs5102">← SCS5102</Link><Link href="/course/scs5102/topic-1">Quiz →</Link></nav><header className="notesHead"><small>SCS5102 • TOPIC 1</small><h1>Propositional Logic<br/>Notes</h1><p>Quick revision notes for the concepts and real-life applications covered in this topic.</p></header><div className="notesGrid">{sections.map(([t,b,ex])=><article className="note" key={t}><h2>{t}</h2><p>{b}</p><ul>{ex.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></main>}