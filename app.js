(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- storage (safe) ----------
  const KEY = "cv14-plan-v1";
  let state = { done: {}, start: null, theme: null, open: {} };
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
  if (!state.start) state.start = toISO(new Date());
  const startInput = $("#startDate");
  startInput.value = state.start;
  startInput.addEventListener("change", () => { if (startInput.value) { state.start = startInput.value; save(); renderDays(); } });
  const dayDate = (n) => { const d = parseISO(state.start); d.setDate(d.getDate() + n - 1); return d; };
  const fmt = (d) => d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  const todayIndex = () => {
    const diff = Math.round((parseISO(toISO(new Date())) - parseISO(state.start)) / 864e5);
    return diff + 1; // day number
  };

  // ---------- item ids ----------
  const itemId = (day, kind, key) => `${day}|${kind}|${key}`;
  const tagLabel = { pyq: "PYQ", official: "Official", lc: "LeetCode", other: "Other", ext: "Read", mock: "Mock" };

  const countable = (d) => {
    const ids = [];
    (d.tasks || []).forEach((t, i) => ids.push(itemId(d.day, "task", i)));
    (d.videos || []).forEach((v) => ids.push(itemId(d.day, "vid", v.id)));
    (d.questions || []).forEach((q) => ids.push(itemId(d.day, "q", q.t)));
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
        card.querySelector(".mini-progress").textContent = `${dn}/${ids.length}`;
        card.classList.toggle("done", ids.length > 0 && dn === ids.length);
      }
    });
    const pct = total ? Math.round((done / total) * 100) : 0;
    $("#progressPct").textContent = pct + "%";
    $("#progressBar").style.width = pct + "%";
    $("#progressText").textContent = `${done} of ${total} items done`;
  };

  // ---------- render a list ----------
  const checkbox = (id) => `<input type="checkbox" data-id="${esc(id)}" ${state.done[id] ? "checked" : ""} aria-label="Mark done">`;
  const li = (id, inner, extraCls = "") => `<li class="item ${state.done[id] ? "checked" : ""} ${extraCls}">${checkbox(id)}${inner}</li>`;

  const videoList = (d, vids, kind) => vids.map((v, i) => {
    const id = itemId(d.day, kind, v.id);
    return li(id, `<span class="order">${String(i + 1).padStart(2, "0")}</span>
      <a class="vid" href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener">
        <span class="thumb" style="background-image:url('https://i.ytimg.com/vi/${esc(v.id)}/mqdefault.jpg')"></span>
        <span class="item-text"><span style="color:var(--ink);font-weight:600">${esc(v.t)}</span><span class="sub">YouTube · Padho with Pratyush</span></span>
      </a>`);
  }).join("");

  const qList = (d, qs, kind = "q") => qs.map((q) => {
    const id = itemId(d.day, kind, q.t);
    const tag = `<span class="tag ${q.kind}">${tagLabel[q.kind] || "Link"}</span>`;
    const diff = q.d ? `<span class="diff ${esc(q.d)}">${esc(q.d)}</span>` : "";
    const sub = q.topic ? `<span class="sub">${esc(q.topic)}</span>` : "";
    return li(id, `<span class="item-text">${tag}<a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.t)}</a>${diff}${sub}</span>`);
  }).join("");

  const taskList = (d) => (d.tasks || []).map((t, i) => li(itemId(d.day, "task", i), `<span class="item-text">${esc(t)}</span>`)).join("");

  // ---------- days ----------
  let phaseFilter = "all";
  const renderTabs = () => {
    const tabs = [["all", "All 20 days", ""]].concat(Object.entries(PHASES).map(([k, p]) => [k, `Phase ${k}`, p.name]));
    $("#phaseTabs").innerHTML = tabs.map(([k, label, sub]) =>
      `<button class="tab" role="tab" data-phase="${k}" aria-selected="${phaseFilter === k}">${esc(label)}${sub ? `<small>${esc(sub)}</small>` : ""}</button>`).join("");
  };
  $("#phaseTabs").addEventListener("click", (e) => {
    const b = e.target.closest(".tab"); if (!b) return;
    phaseFilter = b.dataset.phase; renderTabs(); renderDays();
  });

  const renderDays = () => {
    const tIdx = todayIndex();
    const html = PLAN.filter((d) => phaseFilter === "all" || String(d.phase) === phaseFilter).map((d) => {
      const date = dayDate(d.day);
      const isToday = d.day === tIdx;
      const open = state.open[d.day] ?? isToday;
      const nVid = (d.videos || []).length, nQ = (d.questions || []).length;
      let body = `<p class="goal">${esc(d.goal)}</p>`;
      if (d.tasks && d.tasks.length) body += `<div class="block-title">Do this</div><ul class="items">${taskList(d)}</ul>`;
      body += `<div class="block-title">Watch in this order</div>`;
      body += nVid ? `<ul class="items">${videoList(d, d.videos, "vid")}</ul>`
        : `<p class="empty-note">${d.mock ? "Mock day — no new videos before the test." : "No new video today — this is a hands-on practice day."}</p>`;
      if (d.optional && d.optional.length) body += `<div class="block-title">${esc(d.optionalLabel || "Optional — only if your language basics are rusty")}</div><ul class="items">${videoList(d, d.optional, "opt")}</ul>`;
      if (d.reading && d.reading.length) body += `<div class="block-title">Quick reading</div><ul class="items">${qList(d, d.reading, "read")}</ul>`;
      body += `<div class="block-title">${d.mock ? "Mock problems (3 hours, timer on)" : "Solve in this order"}</div><ul class="items">${qList(d, d.questions)}</ul>`;
      return `<article class="day ${d.mock ? "mock" : ""} ${isToday ? "today" : ""} ${open ? "open" : ""}" data-day="${d.day}" id="day-${d.day}">
        <button class="day-head" aria-expanded="${open}">
          <span class="day-num"><span>Day</span><b>${d.day}</b></span>
          <span><span class="day-title">${esc(d.title)}</span>
            <span class="day-meta"><span>${fmt(date)}${isToday ? " · Today" : ""}</span><span>${esc(d.hours)}</span><span>${nVid} video${nVid === 1 ? "" : "s"} · ${nQ} problem${nQ === 1 ? "" : "s"}</span></span></span>
          <span class="day-right"><span class="mini-progress"></span><svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
        <div class="day-body">${body}</div>
      </article>`;
    }).join("");
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
  $("#days").addEventListener("change", (e) => {
    const cb = e.target.closest('input[type="checkbox"]'); if (!cb) return;
    const id = cb.dataset.id;
    if (cb.checked) state.done[id] = true; else delete state.done[id];
    cb.closest(".item").classList.toggle("checked", cb.checked);
    save(); updateProgress();
  });

  $("#todayBtn").addEventListener("click", () => {
    const n = Math.min(Math.max(todayIndex(), 1), PLAN.length);
    phaseFilter = "all"; renderTabs();
    state.open[n] = true; renderDays();
    const el = document.getElementById(`day-${n}`); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#resetBtn").addEventListener("click", () => {
    if (confirm("Clear all ticked items? This can't be undone.")) { state.done = {}; save(); renderDays(); }
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
    const n = +a.dataset.goto; phaseFilter = "all"; renderTabs(); state.open[n] = true; renderDays();
  });

  // ---------- mocks ----------
  $("#mockGrid").innerHTML = PLAN.filter((d) => d.mock).map((d, i) => `<div class="mock-card">
      <span class="tag mock" style="align-self:flex-start">Mock ${i + 1} · Day ${d.day}</span>
      <h3>${esc(d.title.replace(/^MOCK TEST \d+ — /, ""))}</h3>
      <p>${esc(d.goal)}</p>
      <ul>${d.questions.map((q) => `<li><a href="${esc(q.url)}" target="_blank" rel="noopener">${esc(q.t)}</a></li>`).join("")}</ul>
      <a class="btn small" href="#day-${d.day}" data-goto="${d.day}">Open Day ${d.day}</a>
    </div>`).join("");

  renderTabs(); renderDays(); renderBank();
})();
