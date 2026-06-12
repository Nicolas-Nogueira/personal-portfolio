// ============================================================
// PROJECTS DATA — your single source of truth
//
// To add a new project:
//   1. Copy one of the objects below
//   2. Fill in your details
//   3. Save — it appears on the site automatically
//
// Fields:
//   title       (required) — project name
//   description (required) — 1–2 sentences
//   tags        (required) — array of strings
//   links       (required) — at least one of: repo, live
//   year        (optional) — shown in the index column
// ============================================================

export const projects = [
    {
      title: "Counting Blackjack",
      description: "Python simulation comparing card-counting agents against random agents across thousands of hands. Implements Hi-Lo and other counting systems with configurable bankroll and bet-spread parameters.",
      tags: ["Python", "Algorithms", "Simulation", "Decision Trees"],
      links: {
        repo: "https://github.com/Nicolas-Nogueira/Counting-BJ",
      },
      year: "2024",
    },
    {
      title: "Predicting Premier League Table 2024–25",
      description: "Machine learning model predicting final EPL standings using historical match data, xG metrics, and team-level features. Evaluated against actual 2024–25 outcomes.",
      tags: ["Python", "Machine Learning", "Soccer Analytics", "pandas"],
      links: {
        repo: "https://github.com/Nicolas-Nogueira/Predicting-premier-league-table-for-2024-2025",
      },
      year: "2025",
    },
    {
      title: "Premier League 24/25 — Interactive Dashboard",
      description: "Team final project for CSC 321: Data Visualization. Interactive Vega-Lite dashboard exploring goal data across teams, players, and matchweeks through a user-centered design process.",
      tags: ["Vega-Lite", "Data Visualization", "Sports Analytics", "UX Design"],
      links: {
        live: "https://stonehill-csc321.github.io/assets/PremierLeague/final_vega_lite.html",
      },
      year: "2025",
    },
    {
      title: "BSU Professor Salary vs. Rating",
      description: "Statistical analysis of Bridgewater State professor salaries against Rate My Professors scores. R regression confirms no meaningful relationship (r²=0.0055, p=0.328), validating institutional salary structures.",
      tags: ["R", "Data Analytics", "Vega-Lite", "Statistics"],
      links: {
        repo: "https://github.com/Nicolas-Nogueira/BSU-Professors-Salary-vs-Professors-Rating",
      },
      year: "2025",
    },
  ];