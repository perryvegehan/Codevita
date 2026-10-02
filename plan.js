/* =========================================================
   TCS CodeVita Season 14 — 20-Day Plan data
   Edit this file to change videos / questions. Everything
   on the page is rendered from the objects below.
   ========================================================= */

const PYQ_URL = "https://www.lets-code.co.in/previousyearcodingquestion/tcs-codevita-previous-year-coding-questions/";
const OFFICIAL_URL = "https://codevita.tcsapps.com/";

// helpers ---------------------------------------------------
const v = (id, t) => ({ id, t });
const lc = (n, slug, t, d) => ({ kind: "lc", t: `LC ${n} · ${t}`, url: `https://leetcode.com/problems/${slug}/`, d });
const pyq = (t, d, topic) => ({ kind: "pyq", t, d, topic, url: `${PYQ_URL}#:~:text=${encodeURIComponent(t)}` });
const off = (t, d, topic) => ({ kind: "official", t, d, topic, url: `${OFFICIAL_URL}#:~:text=SAMPLE%20QUESTIONS` });
const ext = (t, url, d, kind = "ext") => ({ kind, t, url, d });

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

// 20 days ----------------------------------------------------
const PLAN = [
  {
    day: 1, phase: 1, title: "Kickoff: Exam Format, I/O & Complexity", hours: "4–5 h",
    goal: "Register, lock in ONE language, and build a contest template that parses CodeVita-style input (comma-separated values, multiple lines).",
    tasks: [
      "Register on codevita.tcsapps.com and set up Microsoft Authenticator",
      "Pick one language (C++ / Java / Python) — don't switch after today",
      "Write a template: fast input, reading comma-separated numbers, printing with 2 decimals",
      "Read the official 'On A Cube' statement on the portal just to see how long CodeVita questions are",
    ],
    videos: [
      v("qH2VQY48mg4", "The Best Way To Learn DSA in 2025 | DSA Patterns"),
      v("oFwHwCkSoGw", "Master Time Complexity in Just 30 Minutes (DSA Patterns Ep 6)"),
    ],
    optional: [
      v("mjuMIHHbkT8", "DSA Basics Day 1 | C++ / Java / Python"),
      v("1bXdrfP5vwA", "DSA Basics Day 2 | If-else, Loops"),
      v("pPOjiA1NEPw", "DSA Basics Day 3 | Functions"),
      v("jk_A6Aue98I", "DSA Basics Day 4 | Arrays and Linked List"),
    ],
    questions: [
      pyq("String Pair", "Easy", "Strings"),
      pyq("Bank Compare", "Easy", "Implementation / Math"),
      lc(8, "string-to-integer-atoi", "String to Integer (atoi)", "Medium"),
      lc(54, "spiral-matrix", "Spiral Matrix", "Medium"),
    ],
  },
  {
    day: 2, phase: 1, title: "Arrays I: Prefix Sum & Kadane", hours: "5 h",
    goal: "Range queries and best-subarray questions show up in almost every CodeVita set — make prefix sums automatic.",
    videos: [
      v("F86WfZ5RUC8", "Prefix Sum Pattern Introduction (Ep 26)"),
      v("XLtRoHIDGs0", "Master LeetCode With Prefix Sum Patterns (Ep 27)"),
      v("sh0Ng7sjscE", "Prefix Sum Interview Questions (Lecture 28)"),
      v("N8vJ8RyQEes", "Kadane's Algorithm Pattern — Intuition (Ep 22)"),
      v("JUV-Hdtuzsw", "Kadane's Algorithm — Most Important Questions (Ep 23)"),
      v("jIz4zcFuUU8", "Kadane With One Deletion — Best Explanation"),
    ],
    questions: [
      lc(303, "range-sum-query-immutable", "Range Sum Query – Immutable", "Easy"),
      lc(560, "subarray-sum-equals-k", "Subarray Sum Equals K", "Medium"),
      lc(525, "contiguous-array", "Contiguous Array", "Medium"),
      lc(53, "maximum-subarray", "Maximum Subarray", "Medium"),
      lc(152, "maximum-product-subarray", "Maximum Product Subarray", "Medium"),
      lc(1186, "maximum-subarray-sum-with-one-deletion", "Max Subarray Sum with One Deletion", "Medium"),
      pyq("Counting Rock Sample", "Medium", "Range counting"),
    ],
  },
  {
    day: 3, phase: 1, title: "Hashing & Two Pointers", hours: "5 h",
    goal: "Count, pair and de-duplicate fast. Hash maps turn most CodeVita brute-force ideas from O(n²) into O(n).",
    videos: [
      v("9a4A6CbrLCo", "The Only Video You Need To Master HASHMAPS"),
      v("ICggOtnixBk", "4 Questions to Master HASHMAPS"),
      v("Fu7LD_mIo00", "Two Pointers Technique (Ep 3)"),
      v("PvyEr3CeKzE", "Two Pointers Technique (Ep 4)"),
      v("nPdxCoVHC90", "Two Pointers Pattern (Ep 5)"),
      v("rM9EthMlXnw", "Two Pointers — More Interview Questions (Ep 7)"),
    ],
    questions: [
      lc(1, "two-sum", "Two Sum", "Easy"),
      lc(49, "group-anagrams", "Group Anagrams", "Medium"),
      lc(128, "longest-consecutive-sequence", "Longest Consecutive Sequence", "Medium"),
      lc(15, "3sum", "3Sum", "Medium"),
      lc(11, "container-with-most-water", "Container With Most Water", "Medium"),
      lc(75, "sort-colors", "Sort Colors", "Medium"),
      pyq("Count Pairs", "Medium", "Hashing / Sorting"),
    ],
  },
  {
    day: 4, phase: 1, title: "Sliding Window & String Handling", hours: "5 h",
    goal: "CodeVita loves string puzzles hidden in long stories. Practice extracting the real problem, then apply windows.",
    videos: [
      v("V6pRTnOZ7Mc", "Introduction to Sliding Window (Ep 10)"),
      v("DL8LSXUsfWE", "Sliding Window — Easy & Medium Questions (Ep 11)"),
      v("v4pIgiBQMh8", "Sliding Window — Core Interview Questions (Ep 12)"),
      v("2HZ12B2ZPAQ", "Sliding Window — Important Questions (Ep 13)"),
      v("9wc8HZH_sh4", "Sliding Window — Amazon Interview Questions (Ep 16)"),
    ],
    questions: [
      lc(3, "longest-substring-without-repeating-characters", "Longest Substring Without Repeating Characters", "Medium"),
      lc(424, "longest-repeating-character-replacement", "Longest Repeating Character Replacement", "Medium"),
      lc(567, "permutation-in-string", "Permutation in String", "Medium"),
      lc(438, "find-all-anagrams-in-a-string", "Find All Anagrams in a String", "Medium"),
      lc(76, "minimum-window-substring", "Minimum Window Substring", "Hard"),
      pyq("Greedy Hostel Owner", "Medium", "String encoding"),
    ],
  },
  {
    day: 5, phase: 1, title: "Math, Primes & Bit Tricks (CodeVita favourite)", hours: "5–6 h",
    goal: "Sieve, GCD, factors, fast power and modular arithmetic. Past CodeVita sets have had at least one pure number-theory question almost every season.",
    videos: [
      v("T56nhL8Y1po", "Master Bit Manipulation in One Video — XOR Tricks"),
    ],
    reading: [
      ext("Sieve of Eratosthenes (cp-algorithms)", "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html"),
      ext("Binary Exponentiation (cp-algorithms)", "https://cp-algorithms.com/algebra/binary-exp.html"),
      ext("Euclid's GCD (cp-algorithms)", "https://cp-algorithms.com/algebra/euclid-algorithm.html"),
    ],
    questions: [
      lc(204, "count-primes", "Count Primes", "Medium"),
      lc(1979, "find-greatest-common-divisor-of-array", "Find GCD of Array", "Easy"),
      lc(50, "powx-n", "Pow(x, n)", "Medium"),
      lc(136, "single-number", "Single Number", "Easy"),
      lc(172, "factorial-trailing-zeroes", "Factorial Trailing Zeroes", "Medium"),
      pyq("Consecutive Prime Sum", "Medium", "Sieve + prefix"),
      pyq("Prime Time Again", "Medium", "Primes / Simulation"),
      pyq("kth Largest Factor of N", "Easy", "Factors"),
      off("Square Free Numbers", "Medium", "Number theory"),
      off("Codu and Sum Love", "Medium", "Sequences / Math"),
    ],
  },
  {
    day: 6, phase: 1, title: "Simulation, Dates & Matrices (CodeVita special)", hours: "5 h",
    goal: "No new algorithm today — this is CodeVita's signature style: long statement, tricky rules, careful implementation. Read slowly, list every rule, then code.",
    tasks: [
      "For every problem: write the rules as bullet points BEFORE coding",
      "Create 3 edge-case inputs yourself (smallest, largest, weird format)",
    ],
    videos: [],
    questions: [
      lc(48, "rotate-image", "Rotate Image", "Medium"),
      lc(289, "game-of-life", "Game of Life", "Medium"),
      lc(36, "valid-sudoku", "Valid Sudoku", "Medium"),
      lc(1360, "number-of-days-between-two-dates", "Number of Days Between Two Dates", "Easy"),
      lc(1041, "robot-bounded-in-circle", "Robot Bounded In Circle", "Medium"),
      pyq("Date Time", "Medium", "Simulation"),
      pyq("Digital Time", "Medium", "Simulation"),
      pyq("Elections", "Medium", "Queue simulation"),
      pyq("Railway Station", "Medium", "Scheduling / Sorting"),
    ],
  },
  {
    day: 7, phase: 2, title: "Stack & Monotonic Stack", hours: "5 h",
    goal: "Next-greater / previous-smaller ideas solve a surprising number of 'skyline' and 'queue' style CodeVita stories.",
    videos: [
      v("V0wJuik3WSE", "Master STACK — Introduction"),
      v("K1idN2Rqcmw", "Master Stack With This Simple Trick"),
      v("YutYOZFt6sQ", "Most Important STACK Question for FAANG"),
      v("gFqOIPfAEjw", "Next Greater Element — Stack & Queue Pattern"),
      v("mMKZmo3iyyM", "Master Stack Pattern With 3 Questions"),
    ],
    questions: [
      lc(20, "valid-parentheses", "Valid Parentheses", "Easy"),
      lc(150, "evaluate-reverse-polish-notation", "Evaluate Reverse Polish Notation", "Medium"),
      lc(496, "next-greater-element-i", "Next Greater Element I", "Easy"),
      lc(739, "daily-temperatures", "Daily Temperatures", "Medium"),
      lc(901, "online-stock-span", "Online Stock Span", "Medium"),
      lc(84, "largest-rectangle-in-histogram", "Largest Rectangle in Histogram", "Hard"),
    ],
  },
  {
    day: 8, phase: 2, title: "Binary Search (incl. Binary Search on Answer)", hours: "5 h",
    goal: "When a question says 'find the minimum X such that…' think binary search on the answer first.",
    videos: [
      v("S0E1Ix67qbc", "Believe Me, You DON'T Know Binary Search"),
      v("zEEwwS9_fwA", "The Best Intro To Binary Search"),
      v("RuBcXYteHj0", "Most Important Binary Search Question — Mountain Peak"),
      v("0Kxg0LPGwFo", "One Video To Solve All Binary Search Interview Questions"),
      v("TF53eWL47ws", "Aggressive Cows — Binary Search on Answer"),
      v("stji3QvQ-OU", "Binary Search on 2D Array"),
    ],
    questions: [
      lc(704, "binary-search", "Binary Search", "Easy"),
      lc(162, "find-peak-element", "Find Peak Element", "Medium"),
      lc(74, "search-a-2d-matrix", "Search a 2D Matrix", "Medium"),
      lc(875, "koko-eating-bananas", "Koko Eating Bananas", "Medium"),
      lc(1011, "capacity-to-ship-packages-within-d-days", "Capacity To Ship Packages Within D Days", "Medium"),
      ext("SPOJ · Aggressive Cows (AGGRCOW)", "https://www.spoj.com/problems/AGGRCOW/", "Medium", "other"),
      lc(410, "split-array-largest-sum", "Split Array Largest Sum", "Hard"),
    ],
  },
  {
    day: 9, phase: 2, title: "Greedy, Intervals & Heaps", hours: "5–6 h",
    goal: "Sort + greedy and 'pick the best each time' with a heap. Several classic CodeVita PYQs are exactly this.",
    videos: [
      v("OaHw9ZZHknw", "Greedy Algorithms From Zero to Interview-Ready"),
      v("aH5aeejuJU8", "Master Merge Intervals (L31)"),
      v("_1AbrkD8pak", "Introduction To Heap DSA Pattern"),
      v("5Net0Dd7NAA", "Solve Any HEAP Question By This Template — Top K Frequent"),
      v("SCe8N_v-8Ls", "The HEAP Greedy DSA Pattern"),
      v("DYBWbmhisiM", "Google Interview Question on Heap — IPO"),
    ],
    questions: [
      lc(56, "merge-intervals", "Merge Intervals", "Medium"),
      lc(435, "non-overlapping-intervals", "Non-overlapping Intervals", "Medium"),
      lc(347, "top-k-frequent-elements", "Top K Frequent Elements", "Medium"),
      lc(1962, "remove-stones-to-minimize-the-total", "Remove Stones to Minimize the Total", "Medium"),
      lc(135, "candy", "Candy", "Hard"),
      lc(502, "ipo", "IPO", "Hard"),
      pyq("Minimum Gifts", "Medium", "Greedy (like LC 135)"),
      pyq("Minimize the Sum", "Medium", "Heap"),
      off("Sorting Boxes", "Medium", "Sorting / swap cost"),
    ],
  },
  {
    day: 10, phase: 2, mock: true, title: "MOCK TEST 1 — Full 3-Hour CodeVita Simulation", hours: "3 h + 2 h upsolve",
    goal: "Exact exam conditions: 3 hours, one language, no tutorials, phone away. Then upsolve everything you missed.",
    tasks: [
      "0:00–0:10 → read ALL problems, rank them easy → hard",
      "Solve in that order; if stuck for 25 min, move on",
      "After the mock: write an error log (what went wrong + the fix) — you'll use it on Day 20",
    ],
    videos: [],
    optional: [
      v("n7v0SokbF4I", "Two Pointers — Complete Revision in One Video (Ep 9)"),
      v("lyZp-49pdzQ", "Sliding Window Revision (Part 1)"),
      v("oZnLzJCOdPA", "Master Prefix Sum Pattern in 10 Minutes"),
    ],
    optionalLabel: "Post-mock revision",
    questions: [
      pyq("Constellation", "Medium", "Grid pattern matching"),
      pyq("Civil War", "Medium", "Team selection"),
      pyq("Seating Arrangement", "Medium", "Combinatorics / Simulation"),
      pyq("Possible Legal Subsets", "Hard", "Subsets / Ranking"),
    ],
  },
  {
    day: 11, phase: 2, title: "Recursion & Backtracking", hours: "5 h",
    goal: "Small constraints (N ≤ 10, N ≤ 15) in a CodeVita question = try every possibility. Learn the one template that does it.",
    videos: [
      v("HdPb_thlF5s", "Intro To Recursion DSA Pattern"),
      v("Qh_U6NYf99o", "Recursion Fixed Template For All Questions"),
      v("I081UkZCLlc", "Recursion & Backtracking Explained Once and For All"),
      v("j4wjZqzhMqc", "Learn Recursion Like A Pro"),
      v("-gC-QEdpvO4", "Master Recursion in 3 Easy Questions"),
      v("PqwlS4bcr1Y", "Start Learning Backtracking With This Question"),
      v("IKfIT6uFOcs", "5 Point Template To Crack any Recursion Question"),
      v("AflRvP5LFFc", "Combination Sum Explained Simply"),
    ],
    questions: [
      lc(78, "subsets", "Subsets", "Medium"),
      lc(46, "permutations", "Permutations", "Medium"),
      lc(39, "combination-sum", "Combination Sum", "Medium"),
      lc(17, "letter-combinations-of-a-phone-number", "Letter Combinations of a Phone Number", "Medium"),
      lc(79, "word-search", "Word Search", "Medium"),
      lc(51, "n-queens", "N-Queens", "Hard"),
    ],
  },
  {
    day: 12, phase: 2, title: "Graphs I: BFS / DFS on Grids", hours: "5–6 h",
    goal: "Most CodeVita 'maze', 'cave', 'island', 'obstacle' stories are BFS on a grid. Get the template perfect.",
    videos: [
      v("vcx1HWoHK1o", "Intro To Graphs — Master Graphs in 12 Days"),
      v("WR-hWofGb_U", "Graph Representation: Adjacency Matrix vs List"),
      v("O04KAy7cLBs", "Master DFS / BFS in Graphs"),
      v("mbSYZzBjs4U", "Number of Islands — Most Asked Graph Question"),
      v("4L4MYtxGh9s", "Rotten Oranges: Multi-Source BFS"),
      v("6ZtNHvGeEu4", "Surrounded Regions"),
      v("HBI6DQOT_qk", "Shortest Path in Unweighted Graph (Ep 10)"),
    ],
    questions: [
      lc(733, "flood-fill", "Flood Fill", "Easy"),
      lc(200, "number-of-islands", "Number of Islands", "Medium"),
      lc(994, "rotting-oranges", "Rotting Oranges", "Medium"),
      lc(130, "surrounded-regions", "Surrounded Regions", "Medium"),
      lc(542, "01-matrix", "01 Matrix", "Medium"),
      lc(1091, "shortest-path-in-binary-matrix", "Shortest Path in Binary Matrix", "Medium"),
    ],
  },
  {
    day: 13, phase: 2, title: "Graphs II: Cycles, Topo Sort, Bipartite, Dijkstra", hours: "5–6 h",
    goal: "Dependencies → topological sort. Weighted shortest path → Dijkstra. These two cover most of the graph questions you'll see.",
    videos: [
      v("D5jgZ4PnU5o", "DFS Cycle Detection — Basics to Advanced"),
      v("OSYgRvaWFSI", "Topological Sort Like Never Before"),
      v("LIGrIglQ7TY", "Bipartite Graph / Graph Colouring"),
      v("93copdtW4ZQ", "Dijkstra's Algorithm Explained"),
      v("Mb01XUSuLjE", "2 Most Important Dijkstra Questions"),
      v("HpsjPUwQHfw", "Word Ladder Explained Like a Pro"),
    ],
    questions: [
      lc(207, "course-schedule", "Course Schedule", "Medium"),
      lc(210, "course-schedule-ii", "Course Schedule II", "Medium"),
      lc(785, "is-graph-bipartite", "Is Graph Bipartite?", "Medium"),
      lc(743, "network-delay-time", "Network Delay Time", "Medium"),
      lc(1631, "path-with-minimum-effort", "Path With Minimum Effort", "Medium"),
      lc(127, "word-ladder", "Word Ladder", "Hard"),
    ],
  },
  {
    day: 14, phase: 2, title: "Graphs III: Bellman-Ford, MST & DSU", hours: "5 h",
    goal: "Finish graphs: negative edges, 'connect all cities at min cost', and union-find for connectivity questions.",
    videos: [
      v("A3sZWwalzz4", "Let's Study Bellman-Ford"),
      v("-AEEZEWOA-E", "Bellman-Ford: Cheapest Flights Within K Stops"),
      v("u0SH8wO85m0", "Prim's Algorithm — Minimum Spanning Tree"),
      v("Gq81OeJNTwI", "Swim in Rising Water (Hard)"),
    ],
    reading: [
      ext("Disjoint Set Union (cp-algorithms)", "https://cp-algorithms.com/data_structures/disjoint_set_union.html"),
      ext("Finding bridges in a graph (cp-algorithms)", "https://cp-algorithms.com/graph/bridge-searching.html"),
    ],
    questions: [
      lc(547, "number-of-provinces", "Number of Provinces", "Medium"),
      lc(684, "redundant-connection", "Redundant Connection", "Medium"),
      lc(787, "cheapest-flights-within-k-stops", "Cheapest Flights Within K Stops", "Medium"),
      lc(1584, "min-cost-to-connect-all-points", "Min Cost to Connect All Points", "Medium"),
      lc(778, "swim-in-rising-water", "Swim in Rising Water", "Hard"),
      lc(1192, "critical-connections-in-a-network", "Critical Connections in a Network", "Hard"),
    ],
  },
  {
    day: 15, phase: 3, title: "Dynamic Programming I: 1D, Grid & Knapsack", hours: "5–6 h",
    goal: "Recursion → memo → table. If you finished Day 11 properly, today will click.",
    videos: [
      v("cmSh2xbyX7g", "Introduction To Dynamic Programming (Ep 1)"),
      v("-CvRpL_iUKo", "When And How To Use DP (Ep 2)"),
      v("JLdrJE7udZo", "Climbing Stairs — 1D DP (Ep 3)"),
      v("FMhXZU-eUNQ", "House Robber (Ep 4)"),
      v("Yp1G_KY7-wY", "0/1 Knapsack (Ep 5)"),
      v("yEwnsPI_tUY", "Tabulation Like Never Before (Ep 6)"),
    ],
    questions: [
      lc(70, "climbing-stairs", "Climbing Stairs", "Easy"),
      lc(198, "house-robber", "House Robber", "Medium"),
      lc(213, "house-robber-ii", "House Robber II", "Medium"),
      lc(62, "unique-paths", "Unique Paths", "Medium"),
      lc(64, "minimum-path-sum", "Minimum Path Sum", "Medium"),
      lc(322, "coin-change", "Coin Change", "Medium"),
      ext("GFG · 0/1 Knapsack", "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1", "Medium", "other"),
    ],
  },
  {
    day: 16, phase: 3, title: "Dynamic Programming II: Subsets, LIS & LCS", hours: "5–6 h",
    goal: "Subset-sum, LIS and LCS families — the three DP shapes that keep coming back.",
    videos: [
      v("LWDYXNN4SHU", "0-1 Knapsack Tabulation (Ep 7)"),
      v("M0XjVs41H2s", "Subset Sum Equals to Target (Ep 8)"),
      v("QqDR0Fo9ayM", "3 Problems in 30 Minutes (Ep 9)"),
      v("CdGBURVBMn4", "Longest Increasing Subsequence Part 1 (Ep 10)"),
      v("w9qndpVOHks", "LIS: From Recursion to Tabulation (Ep 11)"),
      v("YkM-xfnZ4DY", "LCS in 20 Minutes (Ep 12)"),
    ],
    questions: [
      lc(416, "partition-equal-subset-sum", "Partition Equal Subset Sum", "Medium"),
      lc(494, "target-sum", "Target Sum", "Medium"),
      lc(518, "coin-change-ii", "Coin Change II", "Medium"),
      lc(300, "longest-increasing-subsequence", "Longest Increasing Subsequence", "Medium"),
      lc(1143, "longest-common-subsequence", "Longest Common Subsequence", "Medium"),
      lc(72, "edit-distance", "Edit Distance", "Medium"),
    ],
  },
  {
    day: 17, phase: 3, mock: true, title: "MOCK TEST 2 — 3 Hours + DP Wrap-up", hours: "3 h + 2–3 h",
    goal: "Second full simulation, harder set (graphs + geometry). Finish the DP series in the evening.",
    tasks: [
      "Morning: 3-hour mock, same rules as Mock 1",
      "Compare with Mock 1 — are you reading faster? Fewer wrong submissions?",
      "Evening: finish the DP series below",
    ],
    videos: [
      v("lAdOVqukPCI", "Easiest DP Question Ever! (Ep 14)"),
      v("6XSrjOmTJio", "Today You Will Know Why I Am The Best DSA Teacher (DP Ep 14)"),
      v("wKao8Ttesqk", "The HARD Problem Most Teachers Skip (Ep 15)"),
      v("dyG4JBKh6tA", "DP Full Revision and Next Steps (Ep 16)"),
    ],
    questions: [
      pyq("Critical Planets", "Hard", "Graph connectivity / bridges"),
      pyq("Polygon with Maximum Area", "Hard", "Geometry"),
      off("Sport Stadium", "Medium", "Optimisation"),
      off("Obstacle Game", "Medium", "Grid paths"),
      off("Water Cistern", "Hard", "Geometry"),
    ],
  },
  {
    day: 18, phase: 3, title: "Trees Fast-Track + Geometry Primer", hours: "5 h",
    goal: "Trees are rarer in CodeVita but recursion on trees is a must. Then a small geometry toolkit — CodeVita likes coordinate questions.",
    videos: [
      v("VdujirLGDDE", "Starting TREE Series!"),
      v("ZvYJT_QwnEw", "Tree Traversals: Preorder, Inorder, Postorder"),
      v("-g6h0Ok1Buk", "Level Order Traversal — Intuition & Template"),
      v("nkWopJZsqXc", "One Pattern To Solve Any Tree Question"),
      v("_UoIHF3KUpE", "LCA in Binary Tree"),
      v("_V7J7exlyzk", "Diameter of Binary Tree"),
      v("14NH9aD7XeY", "Construct Binary Tree from Preorder & Inorder"),
    ],
    reading: [
      ext("Basic geometry: points, lines, area (cp-algorithms)", "https://cp-algorithms.com/geometry/basic-geometry.html"),
      ext("Polygon area — Shoelace formula (cp-algorithms)", "https://cp-algorithms.com/geometry/area-of-simple-polygon.html"),
    ],
    questions: [
      lc(104, "maximum-depth-of-binary-tree", "Maximum Depth of Binary Tree", "Easy"),
      lc(102, "binary-tree-level-order-traversal", "Binary Tree Level Order Traversal", "Medium"),
      lc(543, "diameter-of-binary-tree", "Diameter of Binary Tree", "Easy"),
      lc(236, "lowest-common-ancestor-of-a-binary-tree", "LCA of a Binary Tree", "Medium"),
      lc(1232, "check-if-it-is-a-straight-line", "Check If It Is a Straight Line", "Easy"),
      lc(812, "largest-triangle-area", "Largest Triangle Area", "Easy"),
      off("On A Cube", "Hard", "3D geometry"),
    ],
  },
  {
    day: 19, phase: 3, mock: true, title: "MOCK TEST 3 — Final Dress Rehearsal", hours: "3 h + 2 h upsolve",
    goal: "If an official MockVita is live, take it (it's the real interface). Otherwise run a Codeforces Div. 3 virtual contest — similar difficulty spread, real judge, real clock.",
    tasks: [
      "Option A: Official MockVita on codevita.tcsapps.com (if scheduled)",
      "Option B: Codeforces → Contests → any recent Div. 3 → 'Virtual participation'",
      "Upsolve at least 2 problems you couldn't finish",
    ],
    videos: [],
    questions: [
      ext("Official MockVita (when live)", OFFICIAL_URL, "Mixed", "mock"),
      ext("Codeforces Div. 3 — Virtual Contest", "https://codeforces.com/contests", "Mixed", "mock"),
      ext("CodeChef Starters — practice contests", "https://www.codechef.com/contests", "Mixed", "mock"),
    ],
  },
  {
    day: 20, phase: 3, title: "Final Revision & Exam-Day Strategy", hours: "3–4 h (light day)",
    goal: "No new topics. Revise templates, re-solve your error-log problems, sleep early.",
    tasks: [
      "Re-solve 5 problems from your error log without looking at old code",
      "Keep your template file (I/O, sieve, BFS, DSU, Dijkstra) ready to paste",
      "Test login + Microsoft Authenticator one more time",
      "Read the exam-day checklist on this page",
    ],
    videos: [
      v("Bt9rgQgGf64", "Kadane's Algorithm — Quick Revision (Ep 24)"),
      v("XpHIIQwVxvI", "Revise Stack in 10 Minutes"),
      v("1yax0YQOb8w", "Revise HEAP With Task Scheduler"),
    ],
    questions: [
      lc(621, "task-scheduler", "Task Scheduler", "Medium"),
      pyq("String Pair", "Easy", "Warm-up re-solve"),
    ],
  },
];

const PHASES = {
  1: { name: "Foundations & CodeVita style", days: "Days 1–6" },
  2: { name: "Core patterns + Mock 1", days: "Days 7–14" },
  3: { name: "DP, Mocks & Revision", days: "Days 15–20" },
};

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
