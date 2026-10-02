(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- storage (safe) ----------
  const KEY = "cv14-plan-v2";
  let state = { done: {}, start: null, exam: null, theme: null, open: {} };
  try { const raw = localStorage.getItem(KEY); if (raw) state = Object.assign(state, JSON.parse(raw)); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  // ---------- theme ----------
  const applyTheme = () => { if (state.theme) document.documentElement.setAttribute("data-theme", state.theme); };
  applyTheme();
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    state.theme = cur === "dark" ? "light" : "dark";
    applyTheme(); save();
  });

  // ---------- countdown ----------
  const deadline = new Date(EXAM.regClose + "T23:59:00+05:30");
  const tick = () => {
    const ms = deadline - new Date();
    if (ms <= 0) { $("#countdown").textContent = "Closed"; return; }
    const d = Math.floor(ms / 864e5), h = Math.floor((ms % 864e5) / 36e5), m = Math.floor((ms % 36e5) / 6e4);
    $("#countdown").textContent = `${d}d ${h}h ${m}m`;
  };
  tick(); setInterval(tick, 30000);

  // ---------- exam section ----------
  $("#lastChecked").textContent = `last checked ${EXAM.lastChecked}`;
  $("#facts").innerHTML = EXAM.facts.map(([k, val, n]) =>
    `<div class="fact"><div class="k">${esc(k)}</div><div class="v">${esc(val)}</div><div class="n">${esc(n)}</div></div>`).join("");
  $("#timeline").innerHTML = EXAM.timeline.map((t) =>
    `<li class="${t.st}"><div class="tl-top"><strong>${esc(t.k)}</strong><span class="pill ${t.st}">${esc(t.when)}</span></div><div class="tl-note">${esc(t.note)}</div></li>`).join("");
  $("#rules").innerHTML = EXAM.rules.map((r) => `<li>${esc(r)}</li>`).join("");
  $("#checklistList").innerHTML = CHECKLIST.map((c) => `<li>${esc(c)}</li>`).join("");

  // ---------- dates ----------
  const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const parseISO = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const daysBetween = (a, b) => Math.round((parseISO(toISO(b)) - parseISO(toISO(a))) / 864e5);
  const fmt = (d) => d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  const fmtLong = (d) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  if (!state.start) state.start = toISO(new Date());
  const startInput = $("#startDate"), examInput = $("#examDate");
  startInput.value = state.start;
  if (state.exam) examInput.value = state.exam;
  const dayDate = (n) => addDays(parseISO(state.start), n - 1);
  const todayIndex = () => daysBetween(parseISO(state.start), new Date()) + 1;

  startInput.addEventListener("change", () => { if (startInput.value) { state.start = startInput.value; save(); renderDays(); renderFit(); } });
  examInput.addEventListener("change", () => { state.exam = examInput.value || null; save(); renderFit(); });

  // fit-to-exam helper
  const renderFit = () => {
    const box = $("#fitNote");
    if (!state.exam) { box.hidden = true; return; }
    const exam = parseISO(state.exam), start = parseISO(state.start);
    const lastDay = dayDate(TOTAL_DAYS);
    const gap = daysBetween(lastDay, exam); // >=1 means plan ends before exam
    const idealStart = addDays(exam, -TOTAL_DAYS);
    const canShift = daysBetween(new Date(), idealStart) >= 0;
    let msg;
    if (gap >= 1) {
      msg = `Your plan ends on <b>${fmtLong(lastDay)}</b>, ${gap} day${gap === 1 ? "" : "s"} before Round 1. ` +
        (gap > 3 ? "Use the extra days for more mocks, or start later." : "Perfect timing.");
    } else {
      const examDay = daysBetween(start, exam) + 1;
      const short = TOTAL_DAYS - examDay + 1;
      const restLeft = PLAN.filter((d) => d.type === "rest" && d.day < examDay && d.day >= todayIndex()).length;
      msg = examDay < 1 ? "Round 1 is before your start date — check the dates." :
        `Round 1 lands on <b>Day ${examDay}</b> of the plan — you're ${short} day${short === 1 ? "" : "s"} short. ` +
        `Skip the stretch items and turn your ${restLeft} remaining rest day${restLeft === 1 ? "" : "s"} into learning days.` +
        (restLeft < short ? " That still leaves a gap — skip the optional videos too and combine Days 52 and 53." : "");
    }
    const btn = canShift && toISO(idealStart) !== state.start
      ? ` <button class="btn small" id="fitBtn">Start on ${fmtLong(idealStart)} so Day ${TOTAL_DAYS} is the day before</button>` : "";
    box.innerHTML = `<span>${msg}</span>${btn}`;
    box.hidden = false;
    const b = $("#fitBtn");
    if (b) b.addEventListener("click", () => { state.start = toISO(idealStart); startInput.value = state.start; save(); renderDays(); renderFit(); });
  };

  // ---------- item ids ----------
  const itemId = (day, kind, key) => `${day}|${kind}|${key}`;
  const tagLabel = { pyq: "PYQ", official: "Official", lc: "LeetCode", other: "Other", ext: "Read", mock: "Contest" };
  const typeLabel = { learn: "Learn", practice: "Practice", mock: "Mock", rest: "Rest", final: "Exam eve" };

  const countable = (d) => {
    const ids = [];
    (d.tasks || []).forEach((t, i) => ids.push(itemId(d.day, "task", i)));
    (d.videos || []).forEach((v) => ids.push(itemId(d.day, "vid", v.id)));
    (d.questions || []).forEach((q) => { if (!q.s) ids.push(itemId(d.day, "q", q.t)); });
    return ids;
  };

  const updateProgress = () => {
    let total = 0, done = 0;
    PLAN.forEach((d) => {
      const ids = countable(d);
      const dn = ids.filter((id) => state.done[id]).length;
      total += ids.length; done += dn;
      const card = document.querySelector(`.day[data-day="${d.day}"]`);
      if (card) {
        card.querySelector(".mini-progress").textContent = ids.length ? `${dn}/${ids.length}` : "";
        card.classList.toggle("done", ids.length > 0 && dn === ids.length);
      }
    });
    const pct = total ? Math.round((done / total) * 100) : 0;
    $("#progressPct").textContent = pct + "%";
    $("#progressBar").style.width = pct + "%";
    $("#progressText").textContent = `${done} of ${total} items done`;
  };

  // ---------- render lists ----------
  const checkbox = (id) => `<input type="checkbox" data-id="${esc(id)}" ${state.done[id] ? "checked" : ""} aria-label="Mark done">`;
  const li = (id, inner) => `<li class="item ${state.done[id] ? "checked" : ""}">${checkbox(id)}${inner}</li>`;

  const vidLink = (v) => `<a class="vid" href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener">
        <span class="thumb" style="background-image:url('https://i.ytimg.com/vi/${esc(v.id)}/mqdefault.jpg')"></span>
        <span class="item-text"><span class="vt">${esc(v.t)}</span><span class="sub">YouTube · Padho with Pratyush</span></span>
      </a>`;
  const videoList = (d, vids, kind) => vids.map((v, i) =>
    li(itemId(d.day, kind, v.id), `<span class="order">${String(i + 1).padStart(2, "0")}</span>${vidLink(v)}`)).join("");

  const qList = (d, qs, kind = "q") => qs.map((q) => {
    const id = itemId(d.day, kind, q.t);
    const tag = `<span class="tag ${q.kind}">${tagLabel[q.kind] || "Link"}</span>`;
    const diff = q.d ? `<span class="diff ${esc(q.d.split("–")[0])}">${esc(q.d)}</span>` : "";
    const stretch = q.s ? `<span class="tag stretch">Stretch</span>` : "";
    const sub = q.topic ? `<span class="sub">${esc(q.topic)}</span>` : "";
    return li(id, `<span class="item-text">${tag}<a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.t)}</a>${diff}${stretch}${sub}</span>`);
  }).join("");

  const taskList = (d) => (d.tasks || []).map((t, i) => li(itemId(d.day, "task", i), `<span class="item-text">${esc(t)}</span>`)).join("");

  // ---------- tabs (weeks) ----------
  let weekFilter = "all";
  const renderTabs = () => {
    const tabs = [["all", "All weeks"]].concat(Object.keys(WEEKS).map((k) => [k, `Week ${k}`]));
    $("#phaseTabs").innerHTML = tabs.map(([k, label]) =>
      `<button class="tab" role="tab" data-week="${k}" aria-selected="${weekFilter === k}">${esc(label)}</button>`).join("");
  };
  $("#phaseTabs").addEventListener("click", (e) => {
    const b = e.target.closest(".tab"); if (!b) return;
    weekFilter = b.dataset.week; renderTabs(); renderDays();
  });

  // ---------- days ----------
  const renderDays = () => {
    const tIdx = todayIndex();
    let html = "", lastWeek = 0;
    PLAN.filter((d) => weekFilter === "all" || String(d.week) === weekFilter).forEach((d) => {
      if (d.week !== lastWeek) {
        lastWeek = d.week;
        const w = WEEKS[d.week];
        const s = dayDate((d.week - 1) * 7 + 1), e = dayDate(Math.min(d.week * 7, TOTAL_DAYS));
        html += `<div class="week-head"><div><span class="wk">Week ${d.week}</span><h3>${esc(w.name)}</h3><p>${esc(w.sub)}</p></div><span class="wk-dates">${fmt(s)} – ${fmt(e)}</span></div>`;
      }
      const date = dayDate(d.day);
      const isToday = d.day === tIdx;
      const open = state.open[d.day] ?? isToday;
      const nVid = (d.videos || []).length, nQ = (d.questions || []).filter((q) => !q.s).length;
      let body = `<p class="goal">${esc(d.goal)}</p>`;
      if (d.tasks && d.tasks.length) body += `<div class="block-title">Do this</div><ul class="items">${taskList(d)}</ul>`;
      if (nVid) body += `<div class="block-title">Watch in this order</div><ul class="items">${videoList(d, d.videos, "vid")}</ul>`;
      else if (d.type === "learn") body += `<div class="block-title">Watch</div><p class="empty-note">No channel video for this topic yet — use the reading links and problems.</p>`;
      if (d.optional && d.optional.length) body += `<div class="block-title">${esc(d.optionalLabel || "Optional — only if your language basics are rusty")}</div><ul class="items">${videoList(d, d.optional, "opt")}</ul>`;
      if (d.reading && d.reading.length) body += `<div class="block-title">Quick reading</div><ul class="items">${qList(d, d.reading, "read")}</ul>`;
      if (d.questions && d.questions.length) body += `<div class="block-title">${d.type === "mock" ? "Mock (3 hours, timer on)" : d.type === "practice" ? "Practice" : "Solve in this order"}</div><ul class="items">${qList(d, d.questions)}</ul>`;
      const meta = [fmt(date) + (isToday ? " · Today" : ""), d.hours];
      const parts = [];
      if (nVid) parts.push(`${nVid} video${nVid === 1 ? "" : "s"}`);
      if (d.reading && d.reading.length) parts.push("reading");
      if (nQ) parts.push(`${nQ} problem${nQ === 1 ? "" : "s"}`);
      if (parts.length) meta.push(parts.join(" · "));
      html += `<article class="day t-${d.type} ${isToday ? "today" : ""} ${open ? "open" : ""}" data-day="${d.day}" id="day-${d.day}">
        <button class="day-head" aria-expanded="${open}">
          <span class="day-num"><span>Day</span><b>${d.day}</b></span>
          <span><span class="day-title"><span class="type-pill">${typeLabel[d.type]}</span>${esc(d.title)}</span>
            <span class="day-meta">${meta.map((m) => `<span>${esc(m)}</span>`).join("")}</span></span>
          <span class="day-right"><span class="mini-progress"></span><svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
        <div class="day-body">${body}</div>
      </article>`;
    });
    $("#days").innerHTML = html;
    updateProgress();
  };

  $("#days").addEventListener("click", (e) => {
    const head = e.target.closest(".day-head");
    if (head) {
      const card = head.parentElement; const n = +card.dataset.day;
      const open = !card.classList.contains("open");
      card.classList.toggle("open", open); head.setAttribute("aria-expanded", open);
      state.open[n] = open; save();
    }
  });
  const onCheck = (e) => {
    const cb = e.target.closest('input[type="checkbox"]'); if (!cb) return;
    const id = cb.dataset.id;
    if (cb.checked) state.done[id] = true; else delete state.done[id];
    cb.closest(".item").classList.toggle("checked", cb.checked);
    save(); updateProgress();
  };
  $("#days").addEventListener("change", onCheck);
  $("#bonusGrid").addEventListener("change", onCheck);

  const openDay = (n) => {
    weekFilter = "all"; renderTabs(); state.open[n] = true; renderDays();
    const el = document.getElementById(`day-${n}`); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  $("#todayBtn").addEventListener("click", () => openDay(Math.min(Math.max(todayIndex(), 1), PLAN.length)));
  $("#resetBtn").addEventListener("click", () => {
    if (confirm("Clear all ticked items? This can't be undone.")) { state.done = {}; save(); renderDays(); renderBonus(); }
  });

  // ---------- PYQ bank ----------
  const bank = new Map();
  PLAN.forEach((d) => (d.questions || []).forEach((q) => {
    if (q.kind !== "pyq" && q.kind !== "official") return;
    if (!bank.has(q.t)) bank.set(q.t, { ...q, days: [] });
    if (!bank.get(q.t).days.includes(d.day)) bank.get(q.t).days.push(d.day);
  }));
  const renderBank = (filter = "") => {
    const f = filter.trim().toLowerCase();
    const rows = [...bank.values()].filter((q) => !f || (q.t + " " + (q.topic || "")).toLowerCase().includes(f));
    $("#pyqBody").innerHTML = rows.map((q) => `<tr>
      <td><a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.t)}</a></td>
      <td><span class="tag ${q.kind}">${q.kind === "pyq" ? "PYQ" : "Official sample"}</span></td>
      <td>${esc(q.topic || "")}</td>
      <td><span class="diff ${esc(q.d)}" style="margin:0">${esc(q.d)}</span></td>
      <td>${q.days.map((n) => `<a class="daylink" href="#day-${n}" data-goto="${n}">Day ${n}</a>`).join(", ")}</td></tr>`).join("") ||
      `<tr><td colspan="5" class="muted">No match.</td></tr>`;
  };
  $("#pyqSearch").addEventListener("input", (e) => renderBank(e.target.value));
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-goto]"); if (!a) return;
    e.preventDefault(); openDay(+a.dataset.goto);
  });

  // ---------- mocks ----------
  $("#mockGrid").innerHTML = PLAN.filter((d) => d.type === "mock" || d.type === "practice").map((d) => `<div class="mock-card ${d.type}">
      <span class="tag ${d.type === "mock" ? "mock" : "other"}" style="align-self:flex-start">${d.type === "mock" ? esc(d.title.split(" — ")[0]) : "Weekend practice"} · Day ${d.day}</span>
      <h3>${esc(d.title.includes(" — ") ? d.title.split(" — ")[1] : d.title.replace("Weekend Practice: ", ""))}</h3>
      <p>${esc(d.goal)}</p>
      <ul>${d.questions.map((q) => `<li><a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.t)}</a></li>`).join("")}</ul>
      <a class="btn small" href="#day-${d.day}" data-goto="${d.day}">Open Day ${d.day}</a>
    </div>`).join("");

  // ---------- bonus ----------
  const renderBonus = () => {
    $("#bonusGrid").innerHTML = BONUS.map((b, bi) => `<div class="bonus-card">
      <h3>${esc(b.title)}</h3><p class="muted">${esc(b.note)}</p>
      <ul class="items">${b.videos.map((v) => li(itemId("bonus" + bi, "vid", v.id), vidLink(v))).join("")}</ul>
    </div>`).join("");
  };

  renderTabs(); renderDays(); renderBank(); renderBonus(); renderFit();
})();
