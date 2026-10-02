/* =========================================================
   TCS CodeVita Season 14 — 8-Week (56-Day) Relaxed Plan
   Edit this file to change videos / questions. Everything
   on the page is rendered from the objects below.

   Day types:  learn · practice · mock · rest · final
   Stretch items (s: true) are optional and don't count
   toward progress.
   ========================================================= */

const PYQ_URL = "https://www.lets-code.co.in/previousyearcodingquestion/tcs-codevita-previous-year-coding-questions/";
const OFFICIAL_URL = "https://codevita.tcsapps.com/";
const TOTAL_DAYS = 56;

// helpers ---------------------------------------------------
const v = (id, t) => ({ id, t });
const lc = (n, slug, t, d, s = false) => ({ kind: "lc", t: `LC ${n} · ${t}`, url: `https://leetcode.com/problems/${slug}/`, d, s });
const pyq = (t, d, topic, s = false) => ({ kind: "pyq", t, d, topic, s, url: `${PYQ_URL}#:~:text=${encodeURIComponent(t)}` });
const off = (t, d, topic, s = false) => ({ kind: "official", t, d, topic, s, url: `${OFFICIAL_URL}#:~:text=SAMPLE%20QUESTIONS` });
const ext = (t, url, d, kind = "ext", s = false) => ({ kind, t, url, d, s });

// exam facts -------------------------------------------------
const EXAM = {
  season: "Season 14",
  regClose: "2026-11-13",
  lastChecked: "2 Oct 2026",
  facts: [
    ["Duration", "3 hours per round", "New this season (Season 13 rounds were 6 hours)"],
    ["Languages", "C, C++, Java, Python", "Only 4 allowed this season (was 8)"],
    ["Eligibility", "UG / PG, science or engineering", "Graduating in 2027, 2028, 2029 or 2030 · any recognised institute worldwide"],
    ["Advancement", "Solve more → go further", "Only the top coders in each round move on"],
    ["Rounds 2 & 3", "May go beyond classic coding", "Details to be revealed after Round 1"],
    ["Prize", "USD 20,000", "Shared by top 3 · finalists may travel to India for the Grand Finale"],
  ],
  timeline: [
    { k: "Registration", when: "Open now", st: "live", note: "Register on the official portal" },
    { k: "Registration closes", when: "13 Nov 2026", st: "confirmed", note: "As listed by university career centres — confirm on the portal" },
    { k: "MockVita", when: "TBA", st: "tba", note: "Practice rounds in the real contest UI. Not scored for advancement." },
    { k: "Round 1", when: "TBA", st: "tba", note: "Last season's pre-qualifier ran 24–25 Nov 2025 (Zone 1) and 8–9 Dec 2025 (Zone 2)" },
    { k: "Rounds 2 & 3", when: "TBA", st: "tba", note: "Top coders from each round only" },
    { k: "Grand Finale", when: "TBA", st: "tba", note: "In India · top 3 share USD 20,000" },
  ],
  rules: [
    "Questions can be attempted in any order — read all of them in the first 10 minutes and start with the easiest.",
    "The session expires after 15 minutes of inactivity.",
    "Closing the browser without logging out loses your code — keep a local copy of every solution.",
    "Login uses Microsoft Authenticator — set it up before contest day and don't delete the account.",
    "Used code from the internet? Declare it with the Code Attribution option before submitting.",
    "Each problem shows its own time limit (often 1 sec) — Python users must think about complexity early.",
  ],
};

const WEEKS = {
  1: { name: "Foundations", sub: "Language, complexity, arrays, two pointers, prefix sum" },
  2: { name: "Arrays & Strings", sub: "2D prefix, hashing, sliding window, Kadane" },
  3: { name: "CodeVita Specials", sub: "String parsing, number theory, bits, simulation" },
  4: { name: "Stack & Search", sub: "Stacks, intervals, binary search · Mock 1" },
  5: { name: "Greedy, Heaps, Recursion", sub: "Greedy, heaps, backtracking · Mock 2" },
  6: { name: "Trees & Graphs I", sub: "Trees, BST, BFS/DFS on grids · Mock 3" },
  7: { name: "Graphs II & DP I", sub: "Topo sort, shortest paths, MST, DSU, first DP · Mock 4" },
  8: { name: "DP II & Final Lap", sub: "Subsets, LIS/LCS, geometry · Mock 5 · exam eve" },
};

// rest-day helper
const rest = (day, week, title, videos, tasks, extra = {}) => Object.assign({
  day, week, type: "rest", title, hours: "1–1.5 h (light)",
  goal: "Rest day. Sleep properly, revise lightly, and catch up on anything you skipped this week. No new topics.",
  tasks, videos, questions: [],
}, extra);

// 56 days ---------------------------------------------------
const PLAN = [
  // ============ WEEK 1 ============
  {
    day: 1, week: 1, type: "learn", title: "Kickoff: Register, Pick a Language, Build Your Template", hours: "2.5–3 h",
    goal: "Register, lock in ONE language, and write a template that reads CodeVita-style input (comma-separated values, multiple lines).",
    tasks: [
      "Register on codevita.tcsapps.com and set up Microsoft Authenticator",
      "Pick one language (C++ / Java / Python) — don't switch after today",
      "Write a template: fast input, reading comma-separated numbers, printing with 2 decimals",
    ],
    videos: [
      v("DY649jWqidM", "The Best Way To Learn DSA in 2026 | DSA Patterns"),
      v("AS7-JGjeL-U", "All Your DSA Doubts Answered in 10 Minutes — Best Language"),
      v("S8tpzqrwnHk", "DSA Patterns Roadmap (Beginner to Advanced)"),
    ],
    optional: [
      v("mjuMIHHbkT8", "DSA Basics Day 1 | C++ / Java / Python"),
      v("1bXdrfP5vwA", "DSA Basics Day 2 | If-else, Loops"),
    ],
    questions: [
      lc(1480, "running-sum-of-1d-array", "Running Sum of 1d Array", "Easy"),
      lc(9, "palindrome-number", "Palindrome Number", "Easy"),
      pyq("String Pair", "Easy", "Strings"),
      pyq("Bank Compare", "Easy", "Implementation / Math"),
    ],
  },
  {
    day: 2, week: 1, type: "learn", title: "Time Complexity & Array Basics", hours: "2.5–3 h",
    goal: "Learn to look at constraints and know which complexity will pass in 1 second. This one skill decides half your CodeVita submissions.",
    videos: [
      v("oFwHwCkSoGw", "Master Time Complexity in Just 30 Minutes (DSA Patterns Ep 6)"),
      v("ks-aCN8dzv0", "If You Start DSA and Can't Move Past Arrays, Watch This!"),
    ],
    optional: [
      v("pPOjiA1NEPw", "DSA Basics Day 3 | Functions"),
      v("jk_A6Aue98I", "DSA Basics Day 4 | Arrays and Linked List"),
    ],
    questions: [
      lc(26, "remove-duplicates-from-sorted-array", "Remove Duplicates from Sorted Array", "Easy"),
      lc(283, "move-zeroes", "Move Zeroes", "Easy"),
      lc(121, "best-time-to-buy-and-sell-stock", "Best Time to Buy and Sell Stock", "Easy"),
      lc(189, "rotate-array", "Rotate Array", "Medium"),
    ],
  },
  {
    day: 3, week: 1, type: "learn", title: "Two Pointers I", hours: "2.5–3 h",
    goal: "Two indices moving towards each other (or together) — turns many O(n²) ideas into O(n).",
    videos: [
      v("Fu7LD_mIo00", "Master DSA Patterns with 2 Pointers Technique (Ep 3)"),
      v("PvyEr3CeKzE", "2 Pointer Technique (Ep 4)"),
      v("nPdxCoVHC90", "2 Pointer DSA Pattern (Ep 5)"),
    ],
    questions: [
      lc(344, "reverse-string", "Reverse String", "Easy"),
      lc(125, "valid-palindrome", "Valid Palindrome", "Easy"),
      lc(977, "squares-of-a-sorted-array", "Squares of a Sorted Array", "Easy"),
      lc(167, "two-sum-ii-input-array-is-sorted", "Two Sum II – Input Array Is Sorted", "Medium"),
    ],
  },
  {
    day: 4, week: 1, type: "learn", title: "Two Pointers II", hours: "2.5–3 h",
    goal: "Harder two-pointer questions and a full revision of the pattern.",
    videos: [
      v("rM9EthMlXnw", "Two Pointers — More Interview Questions (Ep 7)"),
      v("ljJJcYql6Bc", "Two Pointers — Most Important Questions (Ep 8)"),
      v("n7v0SokbF4I", "Two Pointers — Complete Revision in One Video (Ep 9)"),
    ],
    questions: [
      lc(75, "sort-colors", "Sort Colors", "Medium"),
      lc(11, "container-with-most-water", "Container With Most Water", "Medium"),
      lc(15, "3sum", "3Sum", "Medium"),
      lc(42, "trapping-rain-water", "Trapping Rain Water", "Hard", true),
    ],
  },
  {
    day: 5, week: 1, type: "learn", title: "Prefix Sum I", hours: "2.5–3 h",
    goal: "Pre-compute running totals so every range question becomes O(1). Shows up in almost every CodeVita set.",
    videos: [
      v("F86WfZ5RUC8", "Prefix Sum Pattern Introduction (Ep 26)"),
      v("XLtRoHIDGs0", "Master LeetCode With Prefix Sum Patterns (Ep 27)"),
      v("sh0Ng7sjscE", "Prefix Sum Interview Questions (Lecture 28)"),
    ],
    questions: [
      lc(303, "range-sum-query-immutable", "Range Sum Query – Immutable", "Easy"),
      lc(724, "find-pivot-index", "Find Pivot Index", "Easy"),
      lc(560, "subarray-sum-equals-k", "Subarray Sum Equals K", "Medium"),
      pyq("Counting Rock Sample", "Medium", "Range counting"),
    ],
  },
  {
    day: 6, week: 1, type: "practice", title: "Weekend Practice: Your First Timed Contest", hours: "2.5 h",
    goal: "Get used to a ticking clock. Codeforces Div. 4 rounds are beginner-friendly and judged instantly — perfect for a first contest.",
    tasks: [
      "Codeforces → Contests → pick any past Div. 4 round → 'Virtual participation'",
      "Solve as many as you can in 2 h 30 min, then read the editorial for one you missed",
    ],
    videos: [],
    questions: [
      ext("Codeforces Div. 4 — Virtual Contest", "https://codeforces.com/contests", "Easy–Medium", "mock"),
    ],
  },
  rest(7, 1, "Rest & Revise: Week 1", [
    v("TH9hWtklbNk", "DSA Bhool Jaate Ho? How to Revise DSA in 10 Minutes"),
  ], [
    "Start an error log (notebook or doc): every wrong submission → what went wrong + the fix",
    "Re-solve any 2 problems from this week without looking at your old code",
  ], { optional: [v("Y0LnY9ENVbg", "If You Are In A Tier 3 College, Watch This!")], optionalLabel: "Optional — motivation" }),

  // ============ WEEK 2 ============
  {
    day: 8, week: 2, type: "learn", title: "Prefix Sum II: Harder Questions & 2D Prefix", hours: "2.5–3 h",
    goal: "Prefix sum + hashmap tricks, and 2D prefix sums for matrix/grid range questions.",
    videos: [
      v("EYpv5sypVdE", "The ABSOLUTE BEST Prefix Sum Pattern (Hard) — Lecture 29"),
      v("oZnLzJCOdPA", "Master Prefix Sum Pattern in 10 Minutes (Lecture 30)"),
    ],
    questions: [
      lc(238, "product-of-array-except-self", "Product of Array Except Self", "Medium"),
      lc(525, "contiguous-array", "Contiguous Array", "Medium"),
      lc(974, "subarray-sums-divisible-by-k", "Subarray Sums Divisible by K", "Medium"),
      lc(304, "range-sum-query-2d-immutable", "Range Sum Query 2D – Immutable", "Medium"),
    ],
  },
  {
    day: 9, week: 2, type: "learn", title: "Hashing (HashMap / HashSet)", hours: "2.5–3 h",
    goal: "Counting and lookups in O(1). Most 'how many pairs / which appears most' CodeVita questions are hashing.",
    videos: [
      v("9a4A6CbrLCo", "The Only Video You Need To Master HASHMAPS"),
      v("ICggOtnixBk", "4 Questions to Master HASHMAPS"),
    ],
    questions: [
      lc(1, "two-sum", "Two Sum", "Easy"),
      lc(242, "valid-anagram", "Valid Anagram", "Easy"),
      lc(49, "group-anagrams", "Group Anagrams", "Medium"),
      lc(128, "longest-consecutive-sequence", "Longest Consecutive Sequence", "Medium"),
      pyq("Count Pairs", "Medium", "Hashing / Sorting"),
    ],
  },
  {
    day: 10, week: 2, type: "learn", title: "Sliding Window I", hours: "2.5–3 h",
    goal: "Fixed and variable windows over arrays and strings.",
    videos: [
      v("V6pRTnOZ7Mc", "Introduction to Sliding Window (Ep 10)"),
      v("DL8LSXUsfWE", "Sliding Window — Easy & Medium Questions (Ep 11)"),
      v("v4pIgiBQMh8", "Sliding Window — Core Interview Questions (Ep 12)"),
    ],
    questions: [
      lc(643, "maximum-average-subarray-i", "Maximum Average Subarray I", "Easy"),
      lc(1456, "maximum-number-of-vowels-in-a-substring-of-given-length", "Max Vowels in a Substring", "Medium"),
      lc(209, "minimum-size-subarray-sum", "Minimum Size Subarray Sum", "Medium"),
      lc(3, "longest-substring-without-repeating-characters", "Longest Substring Without Repeating Characters", "Medium"),
    ],
  },
  {
    day: 11, week: 2, type: "learn", title: "Sliding Window II", hours: "3 h",
    goal: "Harder windows with frequency maps, then revise the whole pattern.",
    videos: [
      v("2HZ12B2ZPAQ", "Sliding Window — Important Questions (Ep 13)"),
      v("lyZp-49pdzQ", "Sliding Window Revision (Part 1)"),
      v("IR3oL6ltbJ8", "Sliding Window Revision (Part 2)"),
      v("9wc8HZH_sh4", "Sliding Window — Amazon Interview Questions (Ep 16)"),
    ],
    questions: [
      lc(904, "fruit-into-baskets", "Fruit Into Baskets", "Medium"),
      lc(424, "longest-repeating-character-replacement", "Longest Repeating Character Replacement", "Medium"),
      lc(567, "permutation-in-string", "Permutation in String", "Medium"),
      lc(76, "minimum-window-substring", "Minimum Window Substring", "Hard", true),
    ],
  },
  {
    day: 12, week: 2, type: "learn", title: "Kadane's Algorithm", hours: "2.5–3 h",
    goal: "Best subarray sum in one pass, plus its common twists.",
    videos: [
      v("N8vJ8RyQEes", "Kadane's Algorithm Pattern — Intuition (Ep 22)"),
      v("JUV-Hdtuzsw", "Kadane's Algorithm — Most Important Questions (Ep 23)"),
      v("Bt9rgQgGf64", "Kadane's Algorithm — Quick Revision (Ep 24)"),
      v("jIz4zcFuUU8", "Kadane With One Deletion — Best Explanation"),
    ],
    questions: [
      lc(53, "maximum-subarray", "Maximum Subarray", "Medium"),
      lc(152, "maximum-product-subarray", "Maximum Product Subarray", "Medium"),
      lc(918, "maximum-sum-circular-subarray", "Maximum Sum Circular Subarray", "Medium"),
      lc(1186, "maximum-subarray-sum-with-one-deletion", "Max Subarray Sum with One Deletion", "Medium", true),
    ],
  },
  {
    day: 13, week: 2, type: "practice", title: "Weekend Practice: LeetCode Virtual Contest + 1 PYQ", hours: "2.5 h",
    goal: "A 90-minute LeetCode contest (4 problems), then one real CodeVita question untimed.",
    tasks: [
      "LeetCode → Contest → any past Weekly Contest → 'Virtual' (90 min)",
      "Then solve the CodeVita PYQ below — read the full statement twice before coding",
    ],
    videos: [],
    questions: [
      ext("LeetCode Weekly Contest — Virtual", "https://leetcode.com/contest/", "Mixed", "mock"),
      pyq("Civil War", "Medium", "Team selection"),
    ],
  },
  rest(14, 2, "Rest & Revise: Week 2", [], [
    "Re-solve 2 sliding-window problems and 1 prefix-sum problem from memory",
    "Update your error log — which mistakes repeated?",
    "Add a 'sliding window' and 'prefix sum' snippet to your template file",
  ]),

  // ============ WEEK 3 ============
  {
    day: 15, week: 3, type: "learn", title: "Strings & Input Parsing (CodeVita style)", hours: "2.5–3 h",
    goal: "CodeVita statements hide simple string work inside long stories. Practise splitting, building and comparing strings fast in your language.",
    tasks: [
      "For each problem: write the rules as bullet points BEFORE coding",
    ],
    videos: [],
    questions: [
      lc(14, "longest-common-prefix", "Longest Common Prefix", "Easy"),
      lc(151, "reverse-words-in-a-string", "Reverse Words in a String", "Medium"),
      lc(443, "string-compression", "String Compression", "Medium"),
      lc(8, "string-to-integer-atoi", "String to Integer (atoi)", "Medium"),
      pyq("Greedy Hostel Owner", "Medium", "String encoding"),
      lc(6, "zigzag-conversion", "Zigzag Conversion", "Medium", true),
    ],
  },
  {
    day: 16, week: 3, type: "learn", title: "Number Theory I: Primes, Sieve, Factors, GCD", hours: "3 h",
    goal: "Past CodeVita sets have had at least one number-theory question almost every season. Learn the sieve properly.",
    videos: [],
    reading: [
      ext("Sieve of Eratosthenes (cp-algorithms)", "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html"),
      ext("Euclid's GCD (cp-algorithms)", "https://cp-algorithms.com/algebra/euclid-algorithm.html"),
    ],
    questions: [
      lc(204, "count-primes", "Count Primes", "Medium"),
      lc(1979, "find-greatest-common-divisor-of-array", "Find GCD of Array", "Easy"),
      lc(1492, "the-kth-factor-of-n", "The kth Factor of n", "Medium"),
      pyq("kth Largest Factor of N", "Easy", "Factors"),
      pyq("Consecutive Prime Sum", "Medium", "Sieve + prefix"),
    ],
  },
  {
    day: 17, week: 3, type: "learn", title: "Number Theory II: Fast Power, Modulo, Counting", hours: "3 h",
    goal: "Binary exponentiation, (a·b) mod m without overflow, and nCr — the toolkit for 'print the answer modulo 10⁹+7'.",
    videos: [],
    reading: [
      ext("Binary Exponentiation (cp-algorithms)", "https://cp-algorithms.com/algebra/binary-exp.html"),
      ext("Binomial Coefficients (cp-algorithms)", "https://cp-algorithms.com/combinatorics/binomial-coefficients.html"),
    ],
    questions: [
      lc(50, "powx-n", "Pow(x, n)", "Medium"),
      lc(172, "factorial-trailing-zeroes", "Factorial Trailing Zeroes", "Medium"),
      lc(1922, "count-good-numbers", "Count Good Numbers", "Medium"),
      off("Square Free Numbers", "Medium", "Number theory"),
      off("Codu and Sum Love", "Medium", "Sequences / Math", true),
    ],
  },
  {
    day: 18, week: 3, type: "learn", title: "Bit Manipulation", hours: "2.5–3 h",
    goal: "XOR tricks, checking/setting bits, and generating all subsets with a bitmask (very handy when N ≤ 20).",
    videos: [
      v("T56nhL8Y1po", "Master Bit Manipulation in One Video — XOR Tricks"),
    ],
    questions: [
      lc(136, "single-number", "Single Number", "Easy"),
      lc(191, "number-of-1-bits", "Number of 1 Bits", "Easy"),
      lc(268, "missing-number", "Missing Number", "Easy"),
      lc(338, "counting-bits", "Counting Bits", "Easy"),
      lc(78, "subsets", "Subsets (try it with a bitmask)", "Medium"),
    ],
  },
  {
    day: 19, week: 3, type: "learn", title: "Simulation, Dates & Matrices", hours: "3 h",
    goal: "CodeVita's signature: long statement, tricky rules, careful implementation. Read slowly, list every rule, then code.",
    tasks: [
      "Make 3 edge-case inputs yourself for each problem (smallest, largest, weird format)",
    ],
    videos: [],
    questions: [
      lc(54, "spiral-matrix", "Spiral Matrix", "Medium"),
      lc(48, "rotate-image", "Rotate Image", "Medium"),
      lc(1360, "number-of-days-between-two-dates", "Number of Days Between Two Dates", "Easy"),
      pyq("Date Time", "Medium", "Simulation"),
      pyq("Digital Time", "Medium", "Simulation"),
      lc(289, "game-of-life", "Game of Life", "Medium", true),
    ],
  },
  {
    day: 20, week: 3, type: "practice", title: "Weekend Practice: CodeVita PYQ Set", hours: "2.5–3 h",
    goal: "Three real CodeVita questions plus one LeetCode problem in one sitting with a 2.5-hour timer. The PYQs have no judge — test with the samples and your own edge cases.",
    videos: [],
    questions: [
      pyq("Elections", "Medium", "Queue simulation"),
      pyq("Constellation", "Medium", "Grid pattern matching"),
      pyq("Seating Arrangement", "Medium", "Combinatorics / Simulation"),
      lc(36, "valid-sudoku", "Valid Sudoku", "Medium"),
    ],
  },
  rest(21, 3, "Rest & Revise: Week 3", [], [
    "Put sieve, GCD, fast power and nCr into your template file",
    "Re-read the 2 PYQs you found hardest this week and note what tricked you",
  ]),

  // ============ WEEK 4 ============
  {
    day: 22, week: 4, type: "learn", title: "Stack Basics", hours: "2.5–3 h",
    goal: "Last-in-first-out thinking: brackets, undo, expression evaluation.",
    videos: [
      v("V0wJuik3WSE", "Master STACK — Introduction"),
      v("K1idN2Rqcmw", "Master Stack With This Simple Trick"),
      v("YutYOZFt6sQ", "Most Important STACK Question for FAANG"),
    ],
    questions: [
      lc(20, "valid-parentheses", "Valid Parentheses", "Easy"),
      lc(1047, "remove-all-adjacent-duplicates-in-string", "Remove All Adjacent Duplicates In String", "Easy"),
      lc(155, "min-stack", "Min Stack", "Medium"),
      lc(150, "evaluate-reverse-polish-notation", "Evaluate Reverse Polish Notation", "Medium"),
    ],
  },
  {
    day: 23, week: 4, type: "learn", title: "Monotonic Stack", hours: "2.5–3 h",
    goal: "Next greater / previous smaller — solves many 'skyline' and 'who can see whom' CodeVita stories.",
    videos: [
      v("gFqOIPfAEjw", "Next Greater Element — Stack & Queue Pattern"),
      v("mMKZmo3iyyM", "Master Stack Pattern With 3 Questions"),
      v("XpHIIQwVxvI", "Revise Stack in 10 Minutes"),
    ],
    questions: [
      lc(496, "next-greater-element-i", "Next Greater Element I", "Easy"),
      lc(739, "daily-temperatures", "Daily Temperatures", "Medium"),
      lc(901, "online-stock-span", "Online Stock Span", "Medium"),
      lc(84, "largest-rectangle-in-histogram", "Largest Rectangle in Histogram", "Hard", true),
    ],
  },
  {
    day: 24, week: 4, type: "learn", title: "Sorting & Merge Intervals", hours: "3 h",
    goal: "Sort by start (or end), then sweep. Scheduling, platforms, meetings — classic CodeVita territory.",
    videos: [
      v("aH5aeejuJU8", "Master Merge Intervals (L31)"),
      v("yAopxaHmRn0", "Merge Interval LeetCode (L32)"),
      v("yoh0p_Ag7Q4", "Merge Intervals Master (L33)"),
      v("b-qtjXsGfqo", "Merge Overlapping Intervals (L34)"),
    ],
    optional: [
      v("o-ozvzzFpKA", "Master Merge Interval With Interview Questions (L35)"),
    ],
    optionalLabel: "Optional — extra practice video",
    questions: [
      lc(56, "merge-intervals", "Merge Intervals", "Medium"),
      lc(57, "insert-interval", "Insert Interval", "Medium"),
      lc(435, "non-overlapping-intervals", "Non-overlapping Intervals", "Medium"),
      pyq("Railway Station", "Medium", "Platform scheduling"),
      lc(452, "minimum-number-of-arrows-to-burst-balloons", "Minimum Arrows to Burst Balloons", "Medium", true),
    ],
  },
  {
    day: 25, week: 4, type: "learn", title: "Binary Search I", hours: "2.5–3 h",
    goal: "Classic binary search, bounds, and searching in rotated / 2D arrays.",
    videos: [
      v("S0E1Ix67qbc", "Believe Me, You DON'T Know Binary Search"),
      v("zEEwwS9_fwA", "The Best Intro To Binary Search"),
      v("RuBcXYteHj0", "Most Important Binary Search Question — Mountain Peak"),
      v("91qkzhmEO48", "I Will Make Binary Search Easy For You"),
    ],
    optional: [
      v("stji3QvQ-OU", "Binary Search on 2D Array"),
    ],
    optionalLabel: "Optional — 2D binary search",
    questions: [
      lc(704, "binary-search", "Binary Search", "Easy"),
      lc(35, "search-insert-position", "Search Insert Position", "Easy"),
      lc(34, "find-first-and-last-position-of-element-in-sorted-array", "First and Last Position in Sorted Array", "Medium"),
      lc(162, "find-peak-element", "Find Peak Element", "Medium"),
      lc(33, "search-in-rotated-sorted-array", "Search in Rotated Sorted Array", "Medium", true),
    ],
  },
  {
    day: 26, week: 4, type: "learn", title: "Binary Search II: Binary Search on the Answer", hours: "3 h",
    goal: "When a question asks 'the minimum X such that…', try binary search on X first.",
    videos: [
      v("0Kxg0LPGwFo", "One Video To Solve All Binary Search Interview Questions"),
      v("TF53eWL47ws", "Aggressive Cows — Binary Search on Answer"),
      v("TqxB7zruBm4", "Do Not Miss This Amazon Interview Question — Binary Search"),
      v("DSGtYGZKEZ4", "I Failed a 40 LPA Interview Because Of This Binary Search Question"),
    ],
    optional: [
      v("TIBZsd-Qlrg", "Don't Miss This Binary Search Interview Question"),
    ],
    optionalLabel: "Optional — one more question",
    questions: [
      lc(875, "koko-eating-bananas", "Koko Eating Bananas", "Medium"),
      lc(1011, "capacity-to-ship-packages-within-d-days", "Capacity To Ship Packages Within D Days", "Medium"),
      ext("SPOJ · Aggressive Cows (AGGRCOW)", "https://www.spoj.com/problems/AGGRCOW/", "Medium", "other"),
      lc(410, "split-array-largest-sum", "Split Array Largest Sum", "Hard", true),
    ],
  },
  {
    day: 27, week: 4, type: "mock", title: "MOCK 1 — Full 3-Hour Simulation", hours: "3 h + 1 h upsolve",
    goal: "Exact exam conditions: 3 hours, one language, phone away. Then upsolve one problem you missed.",
    tasks: [
      "0:00–0:10 → read ALL problems, rank them easy → hard",
      "Stuck for 25 min? Move on and come back later",
      "Part 1: Codeforces Div. 3 virtual contest (2 h 15 min)",
      "Part 2: the official CodeVita sample below (45 min)",
    ],
    videos: [],
    questions: [
      ext("Codeforces Div. 3 — Virtual Contest", "https://codeforces.com/contests", "Mixed", "mock"),
      off("Sport Stadium", "Medium", "Optimisation"),
    ],
  },
  rest(28, 4, "Rest & Revise: Week 4", [], [
    "Compare your mock result with Day 6 — what improved?",
    "Upsolve one more problem from the mock",
    "Add binary-search-on-answer to your template file",
  ]),

  // ============ WEEK 5 ============
  {
    day: 29, week: 5, type: "learn", title: "Greedy Algorithms", hours: "3 h",
    goal: "Sort, then always take the locally best choice — and learn when that's safe.",
    videos: [
      v("OaHw9ZZHknw", "Greedy Algorithms From Zero to Interview-Ready (1 h)"),
    ],
    questions: [
      lc(455, "assign-cookies", "Assign Cookies", "Easy"),
      lc(860, "lemonade-change", "Lemonade Change", "Easy"),
      lc(55, "jump-game", "Jump Game", "Medium"),
      lc(45, "jump-game-ii", "Jump Game II", "Medium"),
      pyq("Minimum Gifts", "Medium", "Greedy (like LC 135 Candy)"),
      lc(135, "candy", "Candy", "Hard", true),
    ],
  },
  {
    day: 30, week: 5, type: "learn", title: "Heaps I: Priority Queue & Top-K", hours: "2.5–3 h",
    goal: "Always get the smallest / largest element fast. Top-K questions become one template.",
    videos: [
      v("_1AbrkD8pak", "Introduction To Heap DSA Pattern"),
      v("zzu-k85RLGs", "The Best Video To Learn HEAP Data Structure"),
      v("I1-0ALAJxZI", "HEAP On Pairs Explained in One Shot"),
      v("5Net0Dd7NAA", "Solve Any HEAP Question By This Template — Top K Frequent"),
    ],
    questions: [
      lc(1046, "last-stone-weight", "Last Stone Weight", "Easy"),
      lc(215, "kth-largest-element-in-an-array", "Kth Largest Element in an Array", "Medium"),
      lc(347, "top-k-frequent-elements", "Top K Frequent Elements", "Medium"),
      lc(973, "k-closest-points-to-origin", "K Closest Points to Origin", "Medium"),
    ],
  },
  {
    day: 31, week: 5, type: "learn", title: "Heaps II: Heap + Greedy", hours: "3 h",
    goal: "The heap-greedy combo behind 'pick the best project / task each step'.",
    videos: [
      v("ks8rocoXbJk", "5 Step Template To Solve any HEAP Problem"),
      v("SCe8N_v-8Ls", "The HEAP Greedy DSA Pattern"),
      v("DYBWbmhisiM", "Google Interview Question on Heap — IPO"),
      v("55aenUfSIhQ", "Merge K Sorted Lists — Heap Pattern"),
    ],
    questions: [
      lc(1962, "remove-stones-to-minimize-the-total", "Remove Stones to Minimize the Total", "Medium"),
      lc(621, "task-scheduler", "Task Scheduler", "Medium"),
      pyq("Minimize the Sum", "Medium", "Heap"),
      off("Sorting Boxes", "Medium", "Sorting / swap cost"),
      lc(502, "ipo", "IPO", "Hard", true),
    ],
  },
  {
    day: 32, week: 5, type: "learn", title: "Recursion I", hours: "2.5–3 h",
    goal: "Trust the function call. One template handles most recursion questions.",
    videos: [
      v("HdPb_thlF5s", "Intro To Recursion DSA Pattern"),
      v("Qh_U6NYf99o", "Recursion Fixed Template For All Questions"),
      v("I081UkZCLlc", "Recursion & Backtracking Explained Once and For All"),
      v("j4wjZqzhMqc", "Learn Recursion Like A Pro"),
    ],
    questions: [
      lc(509, "fibonacci-number", "Fibonacci Number", "Easy"),
      lc(231, "power-of-two", "Power of Two (solve it recursively)", "Easy"),
      lc(77, "combinations", "Combinations", "Medium"),
      lc(46, "permutations", "Permutations", "Medium"),
    ],
  },
  {
    day: 33, week: 5, type: "learn", title: "Recursion II: Backtracking", hours: "3 h",
    goal: "Small constraints (N ≤ 10–15) in a CodeVita question usually mean: try every possibility with backtracking.",
    videos: [
      v("-gC-QEdpvO4", "Master Recursion in 3 Easy Questions"),
      v("PqwlS4bcr1Y", "Start Learning Backtracking With This Question"),
      v("IKfIT6uFOcs", "5 Point Template To Crack any Recursion Question"),
      v("AflRvP5LFFc", "Combination Sum Explained Simply"),
    ],
    questions: [
      lc(39, "combination-sum", "Combination Sum", "Medium"),
      lc(17, "letter-combinations-of-a-phone-number", "Letter Combinations of a Phone Number", "Medium"),
      lc(79, "word-search", "Word Search", "Medium"),
      pyq("Possible Legal Subsets", "Hard", "Subsets / Ranking"),
      lc(51, "n-queens", "N-Queens", "Hard", true),
    ],
  },
  {
    day: 34, week: 5, type: "mock", title: "MOCK 2 — Full 3-Hour Simulation", hours: "3 h + 1 h upsolve",
    goal: "Second full simulation. Track two numbers: problems solved, and wrong submissions.",
    tasks: [
      "Codeforces Div. 3 virtual contest (2 h 15 min) — pick a different round from Mock 1",
      "Then 45 min on the LeetCode problem below",
      "Upsolve one problem afterwards",
    ],
    videos: [],
    questions: [
      ext("Codeforces Div. 3 — Virtual Contest", "https://codeforces.com/contests", "Mixed", "mock"),
      lc(1376, "time-needed-to-inform-all-employees", "Time Needed to Inform All Employees", "Medium"),
    ],
  },
  rest(35, 5, "Rest & Revise: Week 5", [
    v("1yax0YQOb8w", "Revise HEAP With Task Scheduler"),
  ], [
    "Re-solve 1 greedy, 1 heap and 1 backtracking problem from memory",
    "Update your error log",
  ]),

  // ============ WEEK 6 ============
  {
    day: 36, week: 6, type: "learn", title: "Trees I: Traversals", hours: "2.5–3 h",
    goal: "Pre / in / post-order and level order — the base of every tree question.",
    videos: [
      v("VdujirLGDDE", "Starting TREE Series!"),
      v("ZvYJT_QwnEw", "Tree Traversals: Preorder, Inorder, Postorder"),
      v("-g6h0Ok1Buk", "Level Order Traversal — Intuition & Template"),
      v("nkWopJZsqXc", "One Pattern To Solve Any Tree Question"),
    ],
    questions: [
      lc(144, "binary-tree-preorder-traversal", "Binary Tree Preorder Traversal", "Easy"),
      lc(94, "binary-tree-inorder-traversal", "Binary Tree Inorder Traversal", "Easy"),
      lc(104, "maximum-depth-of-binary-tree", "Maximum Depth of Binary Tree", "Easy"),
      lc(102, "binary-tree-level-order-traversal", "Binary Tree Level Order Traversal", "Medium"),
    ],
  },
  {
    day: 37, week: 6, type: "learn", title: "Trees II: Height, Paths & LCA", hours: "3 h",
    goal: "Return-value recursion on trees: heights, diameters, path sums, common ancestors.",
    videos: [
      v("dXJdiFMLdZQ", "Check for Symmetrical Binary Trees (Ep 05)"),
      v("yj70M7NwVYE", "3 TREE HEIGHT Problems"),
      v("_UoIHF3KUpE", "LCA in Binary Tree"),
      v("_V7J7exlyzk", "Diameter of Binary Tree | Check Complete Binary Tree"),
      v("Sat-0sqezpM", "Path Sum Problem in 5 Minutes"),
    ],
    questions: [
      lc(101, "symmetric-tree", "Symmetric Tree", "Easy"),
      lc(110, "balanced-binary-tree", "Balanced Binary Tree", "Easy"),
      lc(543, "diameter-of-binary-tree", "Diameter of Binary Tree", "Easy"),
      lc(112, "path-sum", "Path Sum", "Easy"),
      lc(236, "lowest-common-ancestor-of-a-binary-tree", "LCA of a Binary Tree", "Medium"),
    ],
  },
  {
    day: 38, week: 6, type: "learn", title: "Binary Search Trees & Tree Construction", hours: "3 h",
    goal: "Use the BST ordering, and rebuild a tree from its traversals.",
    videos: [
      v("CDo0V5Jbb2o", "Introduction to Binary Search Tree"),
      v("QopDohCvJVA", "LCA in Binary Search Tree"),
      v("Zr2z8DD6TuQ", "Two Sum in Binary Search Tree"),
      v("5PrzZfhk1OQ", "The BST Validation Problem Everyone Gets Wrong"),
      v("14NH9aD7XeY", "Construct a Binary Tree from Preorder & Inorder"),
    ],
    questions: [
      lc(700, "search-in-a-binary-search-tree", "Search in a Binary Search Tree", "Easy"),
      lc(235, "lowest-common-ancestor-of-a-binary-search-tree", "LCA of a BST", "Medium"),
      lc(653, "two-sum-iv-input-is-a-bst", "Two Sum IV – Input is a BST", "Easy"),
      lc(98, "validate-binary-search-tree", "Validate Binary Search Tree", "Medium"),
      lc(105, "construct-binary-tree-from-preorder-and-inorder-traversal", "Construct Tree from Preorder & Inorder", "Medium", true),
    ],
  },
  {
    day: 39, week: 6, type: "learn", title: "Graphs I: Representation, BFS & DFS", hours: "3 h",
    goal: "Build an adjacency list from input and traverse it. Most CodeVita 'maze / island / network' stories start here.",
    videos: [
      v("vcx1HWoHK1o", "Intro To Graphs — Master Graphs in 12 Days"),
      v("WR-hWofGb_U", "Graph Representation: Adjacency Matrix vs List"),
      v("O04KAy7cLBs", "Master DFS / BFS in Graphs"),
      v("mbSYZzBjs4U", "Number of Islands — Most Asked Graph Question"),
    ],
    questions: [
      lc(733, "flood-fill", "Flood Fill", "Easy"),
      lc(200, "number-of-islands", "Number of Islands", "Medium"),
      lc(695, "max-area-of-island", "Max Area of Island", "Medium"),
      lc(547, "number-of-provinces", "Number of Provinces", "Medium"),
    ],
  },
  {
    day: 40, week: 6, type: "learn", title: "Graphs II: Multi-Source BFS & Grid Shortest Paths", hours: "3 h",
    goal: "BFS gives shortest paths when every step costs the same — the core of grid/maze questions.",
    videos: [
      v("4L4MYtxGh9s", "Rotten Oranges: Multi-Source BFS"),
      v("6ZtNHvGeEu4", "Surrounded Regions"),
      v("HBI6DQOT_qk", "Shortest Path in Unweighted Graph (Ep 10)"),
    ],
    questions: [
      lc(994, "rotting-oranges", "Rotting Oranges", "Medium"),
      lc(130, "surrounded-regions", "Surrounded Regions", "Medium"),
      lc(542, "01-matrix", "01 Matrix", "Medium"),
      lc(1091, "shortest-path-in-binary-matrix", "Shortest Path in Binary Matrix", "Medium"),
      off("Obstacle Game", "Medium", "Grid paths"),
    ],
  },
  {
    day: 41, week: 6, type: "mock", title: "MOCK 3 — Full 3-Hour Simulation", hours: "3 h + 1 h upsolve",
    goal: "Third simulation, this time on CodeChef so you get used to a different interface and problem style.",
    tasks: [
      "CodeChef → Compete → past Starters contest (Div 3 / Div 4) → practise it in one 3-hour sitting",
      "Upsolve one problem afterwards",
    ],
    videos: [],
    questions: [
      ext("CodeChef Starters — past contests", "https://www.codechef.com/contests", "Mixed", "mock"),
    ],
  },
  rest(42, 6, "Rest & Revise: Week 6", [], [
    "Write BFS-on-grid and DFS-on-adjacency-list templates from memory",
    "Re-solve 1 tree and 1 graph problem",
  ], { optional: [v("4RvxPipmBPU", "Never Fail Any Interview Again — Everything I Learnt After 12+ Interviews")], optionalLabel: "Optional — interview mindset" }),

  // ============ WEEK 7 ============
  {
    day: 43, week: 7, type: "learn", title: "Graphs III: Cycles, Topological Sort, Bipartite", hours: "3 h",
    goal: "Dependencies and ordering questions = topological sort. Two-group questions = bipartite check.",
    videos: [
      v("D5jgZ4PnU5o", "DFS Cycle Detection — Basics to Advanced"),
      v("OSYgRvaWFSI", "Topological Sort Like Never Before"),
      v("LIGrIglQ7TY", "Bipartite Graph / Graph Colouring"),
    ],
    questions: [
      lc(207, "course-schedule", "Course Schedule", "Medium"),
      lc(210, "course-schedule-ii", "Course Schedule II", "Medium"),
      lc(785, "is-graph-bipartite", "Is Graph Bipartite?", "Medium"),
      lc(802, "find-eventual-safe-states", "Find Eventual Safe States", "Medium", true),
    ],
  },
  {
    day: 44, week: 7, type: "learn", title: "Graphs IV: Dijkstra & Bellman-Ford", hours: "3 h",
    goal: "Weighted shortest paths. Dijkstra for non-negative weights, Bellman-Ford when there are limits or negatives.",
    videos: [
      v("93copdtW4ZQ", "Dijkstra's Algorithm Explained"),
      v("Mb01XUSuLjE", "2 Most Important Dijkstra Questions"),
      v("A3sZWwalzz4", "Let's Study Bellman-Ford"),
      v("-AEEZEWOA-E", "Bellman-Ford: Cheapest Flights Within K Stops"),
    ],
    questions: [
      lc(743, "network-delay-time", "Network Delay Time", "Medium"),
      lc(1631, "path-with-minimum-effort", "Path With Minimum Effort", "Medium"),
      lc(787, "cheapest-flights-within-k-stops", "Cheapest Flights Within K Stops", "Medium"),
    ],
  },
  {
    day: 45, week: 7, type: "learn", title: "Graphs V: MST, Union-Find & Bridges", hours: "3 h",
    goal: "'Connect everything at minimum cost' = MST. 'Are these connected?' = DSU. 'Which link is critical?' = bridges.",
    videos: [
      v("u0SH8wO85m0", "Prim's Algorithm — Minimum Spanning Tree"),
      v("Gq81OeJNTwI", "Swim in Rising Water (Hard)"),
      v("HpsjPUwQHfw", "Word Ladder Explained Like a Pro"),
    ],
    reading: [
      ext("Disjoint Set Union (cp-algorithms)", "https://cp-algorithms.com/data_structures/disjoint_set_union.html"),
      ext("Finding bridges in a graph (cp-algorithms)", "https://cp-algorithms.com/graph/bridge-searching.html"),
    ],
    questions: [
      lc(1584, "min-cost-to-connect-all-points", "Min Cost to Connect All Points", "Medium"),
      lc(684, "redundant-connection", "Redundant Connection", "Medium"),
      pyq("Critical Planets", "Hard", "Graph connectivity / bridges"),
      lc(778, "swim-in-rising-water", "Swim in Rising Water", "Hard", true),
      lc(127, "word-ladder", "Word Ladder", "Hard", true),
    ],
  },
  {
    day: 46, week: 7, type: "learn", title: "DP I: What DP Is + 1D DP", hours: "2.5–3 h",
    goal: "Recursion → memoisation → table. If recursion week went well, this will click.",
    videos: [
      v("cmSh2xbyX7g", "Introduction To Dynamic Programming (Ep 1)"),
      v("-CvRpL_iUKo", "When And How To Use DP (Ep 2)"),
      v("JLdrJE7udZo", "Climbing Stairs — 1D DP (Ep 3)"),
    ],
    questions: [
      lc(70, "climbing-stairs", "Climbing Stairs", "Easy"),
      lc(746, "min-cost-climbing-stairs", "Min Cost Climbing Stairs", "Easy"),
      lc(1137, "n-th-tribonacci-number", "N-th Tribonacci Number", "Easy"),
      lc(91, "decode-ways", "Decode Ways", "Medium", true),
    ],
  },
  {
    day: 47, week: 7, type: "learn", title: "DP II: House Robber & 0/1 Knapsack", hours: "3 h",
    goal: "Take-it-or-leave-it decisions — the most common DP shape in contests.",
    videos: [
      v("FMhXZU-eUNQ", "House Robber (Ep 4)"),
      v("Yp1G_KY7-wY", "0/1 Knapsack (Ep 5)"),
      v("yEwnsPI_tUY", "Tabulation Like Never Before (Ep 6)"),
    ],
    questions: [
      lc(198, "house-robber", "House Robber", "Medium"),
      lc(213, "house-robber-ii", "House Robber II", "Medium"),
      ext("GFG · 0/1 Knapsack", "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1", "Medium", "other"),
    ],
  },
  {
    day: 48, week: 7, type: "mock", title: "MOCK 4 — Full 3-Hour Simulation", hours: "3 h + 1 h upsolve",
    goal: "By now you've covered everything except advanced DP. Treat this as a dress rehearsal.",
    tasks: [
      "Codeforces Div. 3 virtual contest (2 h 15 min) — a round you haven't seen",
      "Then 45 min on the PYQ below",
      "Upsolve one problem afterwards",
    ],
    videos: [],
    questions: [
      ext("Codeforces Div. 3 — Virtual Contest", "https://codeforces.com/contests", "Mixed", "mock"),
      pyq("Prime Time Again", "Medium", "Primes / Simulation"),
    ],
  },
  rest(49, 7, "Rest & Revise: Week 7", [], [
    "Write Dijkstra and DSU from memory and add them to your template file",
    "Read your error log start to end",
  ]),

  // ============ WEEK 8 ============
  {
    day: 50, week: 8, type: "learn", title: "DP III: Subset Sum & Coin Change", hours: "3 h",
    goal: "Knapsack's cousins: can we make this sum? in how many ways? with the fewest coins?",
    videos: [
      v("LWDYXNN4SHU", "0-1 Knapsack Tabulation (Ep 7)"),
      v("M0XjVs41H2s", "Subset Sum Equals to Target (Ep 8)"),
      v("QqDR0Fo9ayM", "3 Problems in 30 Minutes (Ep 9)"),
    ],
    questions: [
      lc(416, "partition-equal-subset-sum", "Partition Equal Subset Sum", "Medium"),
      lc(494, "target-sum", "Target Sum", "Medium"),
      lc(322, "coin-change", "Coin Change", "Medium"),
      lc(518, "coin-change-ii", "Coin Change II", "Medium", true),
    ],
  },
  {
    day: 51, week: 8, type: "learn", title: "DP IV: LIS & LCS", hours: "3 h",
    goal: "Longest increasing subsequence and longest common subsequence — two shapes that keep coming back.",
    videos: [
      v("CdGBURVBMn4", "Longest Increasing Subsequence Part 1 (Ep 10)"),
      v("w9qndpVOHks", "LIS: From Recursion to Tabulation (Ep 11)"),
      v("YkM-xfnZ4DY", "LCS in 20 Minutes (Ep 12)"),
    ],
    questions: [
      lc(300, "longest-increasing-subsequence", "Longest Increasing Subsequence", "Medium"),
      lc(1143, "longest-common-subsequence", "Longest Common Subsequence", "Medium"),
      lc(72, "edit-distance", "Edit Distance", "Medium"),
    ],
  },
  {
    day: 52, week: 8, type: "learn", title: "DP V: Grid DP + Full DP Revision", hours: "3 h",
    goal: "Paths in grids, then revise the whole DP series.",
    videos: [
      v("lAdOVqukPCI", "Easiest DP Question Ever! (Ep 14)"),
      v("6XSrjOmTJio", "Today You Will Know Why I Am The Best DSA Teacher (DP Ep 14)"),
      v("wKao8Ttesqk", "The HARD Problem Most Teachers Skip (Ep 15)"),
      v("dyG4JBKh6tA", "DP Full Revision and Next Steps (Ep 16)"),
    ],
    questions: [
      lc(62, "unique-paths", "Unique Paths", "Medium"),
      lc(64, "minimum-path-sum", "Minimum Path Sum", "Medium"),
      lc(120, "triangle", "Triangle", "Medium"),
      lc(221, "maximal-square", "Maximal Square", "Medium", true),
    ],
  },
  {
    day: 53, week: 8, type: "learn", title: "Geometry & String Matching (hard-set prep)", hours: "3 h",
    goal: "CodeVita's hardest questions often use coordinates. Learn the basics: distance, slope, cross product, polygon area.",
    videos: [],
    reading: [
      ext("Basic geometry: points, lines, area (cp-algorithms)", "https://cp-algorithms.com/geometry/basic-geometry.html"),
      ext("Polygon area — Shoelace formula (cp-algorithms)", "https://cp-algorithms.com/geometry/area-of-simple-polygon.html"),
      ext("Prefix function / KMP (cp-algorithms)", "https://cp-algorithms.com/string/prefix-function.html"),
    ],
    questions: [
      lc(1232, "check-if-it-is-a-straight-line", "Check If It Is a Straight Line", "Easy"),
      lc(812, "largest-triangle-area", "Largest Triangle Area", "Easy"),
      lc(28, "find-the-index-of-the-first-occurrence-in-a-string", "Find the Index of the First Occurrence", "Easy"),
      pyq("Polygon with Maximum Area", "Hard", "Geometry"),
      off("On A Cube", "Hard", "3D geometry", true),
      off("Water Cistern", "Hard", "Geometry", true),
    ],
  },
  {
    day: 54, week: 8, type: "mock", title: "MOCK 5 — Final Dress Rehearsal", hours: "3 h + 1 h upsolve",
    goal: "If an official MockVita is live, take it — it's the real interface. Otherwise run one more Codeforces Div. 3 virtual contest.",
    tasks: [
      "Option A: official MockVita on codevita.tcsapps.com (if scheduled)",
      "Option B: Codeforces Div. 3 virtual contest + one hard PYQ you haven't solved yet",
      "Upsolve one problem afterwards",
    ],
    videos: [],
    questions: [
      ext("Official MockVita (when live)", OFFICIAL_URL, "Mixed", "mock"),
      ext("Codeforces Div. 3 — Virtual Contest", "https://codeforces.com/contests", "Mixed", "mock"),
    ],
  },
  {
    day: 55, week: 8, type: "rest", title: "Final Revision", hours: "2 h (light)",
    goal: "No new topics. Revise templates, re-solve your error-log problems, sleep early.",
    tasks: [
      "Re-solve 5 problems from your error log without looking at old code",
      "Keep your template file (I/O, sieve, fast power, BFS, DSU, Dijkstra) ready to paste",
      "Test your login + Microsoft Authenticator one more time",
    ],
    videos: [],
    optional: [
      v("TH9hWtklbNk", "DSA Bhool Jaate Ho? How to Revise DSA"),
      v("n7v0SokbF4I", "Two Pointers — Complete Revision"),
      v("XpHIIQwVxvI", "Revise Stack in 10 Minutes"),
      v("dyG4JBKh6tA", "DP Full Revision"),
    ],
    optionalLabel: "Optional — quick revision videos",
    questions: [],
  },
  {
    day: 56, week: 8, type: "final", title: "Exam Eve: Rules, Checklist, Sleep", hours: "1 h",
    goal: "Read the exam-day checklist below, watch one video on online-round integrity, and sleep on time.",
    tasks: [
      "Read the exam-day checklist on this page",
      "Keep water, charger and a stable internet connection ready",
      "Sleep by 11 pm",
    ],
    videos: [
      v("Wj5bX2uva4E", "How (NOT) To Cheat In Online Coding Rounds"),
    ],
    questions: [],
  },
];

// Extra videos from the channel that aren't in the daily plan
const BONUS = [
  {
    title: "Linked List track", note: "Rarely needed in CodeVita (inputs are plain text), but asked a lot in TCS interviews afterwards.",
    videos: [
      v("NSh5oNElD84", "Linked List Basics for Beginners"),
      v("IxxlDYwMrZ8", "Linked List Slow–Fast Pointer Introduction"),
      v("jDP1NkjVjWQ", "Slow–Fast Pointer Important Questions (Ep 18)"),
      v("RNpZBhZBtJc", "Slow–Fast Pointer Important Questions (Ep 20)"),
      v("ftpI12-e3zs", "Slow–Fast Pointer Complete Revision (Ep 21)"),
      v("p8efFVGuqyI", "Start of Cycle Logic Explained (Ep 25)"),
      v("7gOCx1vbx0k", "Linked List Reversal in the Easiest Way"),
      v("BdpT6_jotcM", "Reverse Linked List Nodes in K Group"),
      v("5IV8CgWnf04", "Rotate a Linked List"),
    ],
  },
  {
    title: "After CodeVita: TCS & placements", note: "For the interview stage and beyond.",
    videos: [
      v("xcNWU0B9h9E", "TCS NQT 20 Days Plan — Crack a 12 LPA Job"),
      v("FIO31tYA8hU", "Crack Infosys in 20 Days — Complete Plan"),
      v("4RvxPipmBPU", "Never Fail Any Interview Again"),
      v("Y0LnY9ENVbg", "If You Are In A Tier 3 College, Watch This!"),
    ],
  },
];

const CHECKLIST = [
  "Read all problems in the first 10 minutes. Start with the one whose sample output you can work out by hand fastest.",
  "Copy the sample input exactly — CodeVita often uses commas, extra spaces or multi-line formats.",
  "Print exactly what is asked (decimal places, trailing spaces, 'None' / '-1' cases).",
  "Stuck for 25 minutes? Move on and come back. Solved count decides who advances.",
  "Before submitting: test N = minimum, N = maximum, and a case with equal values.",
  "Save every solution to a local file as you go — closing the tab loses code.",
  "Don't go idle for 15 minutes — the session expires.",
  "Only 3 hours this season: budget ~30–40 min for each easier problem, keep the last 30 min for fixes.",
];
