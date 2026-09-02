export const questions = [
  {
    id: 1,
    concept: "Proposition",
    question: "Which statement is a proposition?",
    options: [
      "What is your name?",
      "Close the door.",
      "10 is greater than 5.",
      "Please study logic."
    ],
    answer: 2,
    explanation: "A proposition is a declarative sentence that has exactly one truth value: true or false."
  },
  {
    id: 2,
    concept: "Open sentence",
    question: "Why is n + 1 = 2 not a proposition when n is unspecified?",
    options: [
      "It is too short.",
      "It is a question.",
      "Its truth value depends on the value of n.",
      "It contains a number."
    ],
    answer: 2,
    explanation: "An open sentence contains an unspecified variable, so its truth value is not fixed."
  },
  {
    id: 3,
    concept: "Negation",
    question: "If p is true, what is the truth value of ¬p?",
    options: ["True", "False", "Both true and false", "Cannot be determined"],
    answer: 1,
    explanation: "Negation reverses the truth value: true becomes false and false becomes true."
  },
  {
    id: 4,
    concept: "Conjunction",
    question: "When is p ∧ q true?",
    options: [
      "Only when p is true.",
      "Only when q is true.",
      "When both p and q are true.",
      "When p and q have different truth values."
    ],
    answer: 2,
    explanation: "Conjunction (AND) is true exactly when both propositions are true."
  },
  {
    id: 5,
    concept: "Disjunction",
    question: "When is p ∨ q false?",
    options: [
      "When both are true.",
      "When p is true and q is false.",
      "When p is false and q is true.",
      "When both are false."
    ],
    answer: 3,
    explanation: "Inclusive OR is false only when both p and q are false."
  },
  {
    id: 6,
    concept: "XOR",
    question: "What does p ⊕ q mean?",
    options: [
      "Both p and q are true.",
      "At least one of p and q is true.",
      "Exactly one of p and q is true.",
      "Neither p nor q is true."
    ],
    answer: 2,
    explanation: "Exclusive OR is true when exactly one input is true."
  },
  {
    id: 7,
    concept: "Conditional",
    question: "When is p → q false?",
    options: [
      "p = T, q = T",
      "p = T, q = F",
      "p = F, q = T",
      "p = F, q = F"
    ],
    answer: 1,
    explanation: "A conditional is false only when the hypothesis is true and the conclusion is false."
  },
  {
    id: 8,
    concept: "Converse",
    question: "What is the converse of p → q?",
    options: ["¬p → ¬q", "¬q → ¬p", "q → p", "p ↔ q"],
    answer: 2,
    explanation: "The converse is formed by switching the hypothesis and conclusion: q → p."
  },
  {
    id: 9,
    concept: "Contrapositive",
    question: "Which is the contrapositive of p → q?",
    options: ["q → p", "¬p → ¬q", "¬q → ¬p", "p ↔ q"],
    answer: 2,
    explanation: "The contrapositive switches the propositions and negates both: ¬q → ¬p."
  },
  {
    id: 10,
    concept: "Biconditional",
    question: "When is p ↔ q true?",
    options: [
      "Only when both are true.",
      "Only when both are false.",
      "When p and q have the same truth value.",
      "When p and q have different truth values."
    ],
    answer: 2,
    explanation: "A biconditional is true when both propositions have the same truth value."
  },
  {
    id: 11,
    concept: "Equivalence",
    question: "Which expression is logically equivalent to p → q?",
    options: ["p ∧ q", "¬p ∨ q", "p ∨ q", "¬p ∧ q"],
    answer: 1,
    explanation: "The conditional p → q is logically equivalent to ¬p ∨ q."
  },
  {
    id: 12,
    concept: "Equivalence",
    question: "Which is logically equivalent to p → q?",
    options: ["q → p", "¬p → ¬q", "¬q → ¬p", "p ↔ q"],
    answer: 2,
    explanation: "A conditional is logically equivalent to its contrapositive: p → q ≡ ¬q → ¬p."
  },
  {
    id: 13,
    concept: "Precedence",
    question: "Using standard precedence, how should ¬p ∨ q → r be grouped?",
    options: [
      "¬(p ∨ (q → r))",
      "((¬p) ∨ q) → r",
      "(¬p) ∨ (q → r)",
      "¬((p ∨ q) → r)"
    ],
    answer: 1,
    explanation: "Negation has higher precedence than AND, OR, XOR, conditional and biconditional."
  },
  {
    id: 14,
    concept: "Tautology",
    question: "Which expression is a tautology?",
    options: ["p ∧ ¬p", "p ∨ ¬p", "p ∧ q", "p ⊕ p"],
    answer: 1,
    explanation: "p ∨ ¬p is always true, regardless of p."
  },
  {
    id: 15,
    concept: "Contradiction",
    question: "Which expression is a contradiction?",
    options: ["p ∨ ¬p", "p → q", "p ∧ ¬p", "p ↔ p"],
    answer: 2,
    explanation: "p ∧ ¬p can never be true because p cannot be both true and false."
  },
  {
    id: 16,
    concept: "Contingency",
    question: "An expression that is true for some assignments and false for others is called a:",
    options: ["Tautology", "Contradiction", "Contingency", "Biconditional"],
    answer: 2,
    explanation: "A contingency has a mixture of true and false values in its truth table."
  },
  {
    id: 17,
    concept: "Bitwise AND",
    question: "If A = 1010 and B = 1100, what is A AND B?",
    options: ["1110", "0110", "1000", "0100"],
    answer: 2,
    explanation: "Bitwise AND gives 1 only where both corresponding bits are 1."
  },
  {
    id: 18,
    concept: "Bitwise OR",
    question: "If A = 1010 and B = 1100, what is A OR B?",
    options: ["1000", "1110", "0110", "0010"],
    answer: 1,
    explanation: "Bitwise OR gives 1 where at least one corresponding bit is 1."
  },
  {
    id: 19,
    concept: "Bitwise XOR",
    question: "If A = 1010 and B = 1100, what is A XOR B?",
    options: ["1000", "1110", "0110", "0100"],
    answer: 2,
    explanation: "Bitwise XOR gives 1 where the corresponding bits are different."
  },
  {
    id: 20,
    concept: "Bit strings",
    question: "What is the length of the bit string 101101?",
    options: ["4", "5", "6", "8"],
    answer: 2,
    explanation: "The length of a bit string is the number of bits. 101101 contains six bits."
  },
  {
    id: 21,
    concept: "Translation",
    question: "Let p = 'can access the internet', q = 'is a CS student', and r = 'is a first-year'. 'You can access the internet only if you are a CS student and are not a first-year' translates to:",
    options: [
      "p ∧ q ∧ ¬r",
      "p → (q ∧ ¬r)",
      "(q ∧ ¬r) → p",
      "p ↔ (q ∧ ¬r)"
    ],
    answer: 1,
    explanation: "'P only if Q' means P → Q. Here the required condition is q ∧ ¬r."
  },
  {
    id: 22,
    concept: "Translation",
    question: "Let p = '16 or older', q = 'has 5 O levels', and r = 'can drive'. 'You cannot drive unless you are 16 or older and have 5 O levels' is best represented by:",
    options: [
      "(p ∧ q) → r",
      "r → (p ∧ q)",
      "r ↔ (p ∧ q)",
      "¬r → (p ∧ q)"
    ],
    answer: 1,
    explanation: "'R unless P' here means driving requires the conditions p and q, so r → (p ∧ q)."
  },
  {
    id: 23,
    concept: "Compound propositions",
    question: "What is a compound proposition?",
    options: [
      "A proposition containing only numbers.",
      "A proposition formed by combining propositions using logical connectives.",
      "Any sentence with a variable.",
      "A proposition that is always true."
    ],
    answer: 1,
    explanation: "Compound propositions are constructed from one or more propositions using logical connectives."
  },
  {
    id: 24,
    concept: "History",
    question: "Who is strongly associated with the development of graph theory through the Seven Bridges of Königsberg problem?",
    options: ["George Boole", "Leonhard Euler", "Georg Cantor", "Kurt Gödel"],
    answer: 1,
    explanation: "Euler's analysis of the Seven Bridges of Königsberg is a landmark in graph theory."
  },
  {
    id: 25,
    concept: "History",
    question: "Who is most closely associated with Boolean algebra?",
    options: ["Blaise Pascal", "Augustus De Morgan", "George Boole", "Alan Turing"],
    answer: 2,
    explanation: "George Boole developed Boolean algebra, which became foundational to logic and digital computing."
  },
  {
    id: 26,
    concept: "History",
    question: "Who is strongly associated with set theory and the mathematical study of infinity?",
    options: ["Georg Cantor", "Euclid", "Bertrand Russell", "Giuseppe Peano"],
    answer: 0,
    explanation: "Georg Cantor developed modern set theory and introduced rigorous ways to compare infinite sets."
  },
  {
    id: 27,
    concept: "History",
    question: "Who is associated with the incompleteness theorems?",
    options: ["Alan Turing", "Kurt Gödel", "Leonhard Euler", "Pierre de Fermat"],
    answer: 1,
    explanation: "Gödel's incompleteness theorems are central results in mathematical logic and foundations."
  },
  {
    id: 28,
    concept: "History",
    question: "Who is strongly associated with formal models of computation and the Turing machine?",
    options: ["Alan Turing", "George Boole", "Euclid", "Pascal"],
    answer: 0,
    explanation: "Alan Turing developed the Turing machine model and made foundational contributions to computability."
  }
];