# TCS CodeVita Season 14 — 20-Day Plan

A static site by **Padho with Pratyush**: day-wise videos (in watch order), CodeVita previous-year questions, LeetCode practice and three 3-hour mock tests. Progress is saved in each student's browser (localStorage).

## Files

| File | What it is |
|---|---|
| `index.html` | Page layout |
| `style.css` | Styles (light + dark mode) |
| `plan.js` | **All content** — exam facts, timeline, the 20 days, checklist. Edit this to change anything. |
| `app.js` | Rendering, progress tracking, countdown |

## Host on GitHub Pages

1. Create a new public repo, e.g. `codevita-plan`.
2. Upload these 4 files to the repo root (or `git push` them).
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. Your site will be live at `https://<your-username>.github.io/codevita-plan/` in a minute or two.

## Updating

- **Round dates announced?** Edit `EXAM.timeline` in `plan.js` (set `st: "confirmed"` and fill `when`).
- **New video uploaded?** Add `v("VIDEO_ID", "Title")` to the right day's `videos` array.
- **Add a question:** `lc(number, "leetcode-slug", "Title", "Medium")`, `pyq("Name", "Medium", "Topic")`, or `ext("Title", "https://…", "Medium", "other")`.
- Bump `lastChecked` in `EXAM` whenever you re-verify the dates.

Note: changing a question's title resets that one checkbox for students (titles are used as IDs).
