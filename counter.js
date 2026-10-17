(function () {
  var API_URL = "https://script.google.com/macros/s/AKfycbyk1khfq0I8XNYDgvPcIa0aTzYayAM7HekoRapfCZc7CEqfDR2Eh3AxUi8ceqemk4aK3A/exec";
  var ROOT = document.getElementById("aldosa-counter");
  if (!ROOT) return;
  var st = document.createElement("style"); st.textContent = "\n#aldosa-counter, #aldosa-counter * { box-sizing: border-box; }\n#aldosa-counter { font-family: 'Helvetica Neue', Arial, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif; color: #141414; max-width: 640px; margin: 0 auto; padding: 26px 22px 60px; font-size: 19px; min-height: 100vh; background: #fff; }\n#aldosa-counter .top { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #dadad6; padding-bottom: 14px; margin-bottom: 22px; }\n#aldosa-counter .biz { font-size: 21px; font-weight: 500; } #aldosa-counter .br { font-size: 14px; color: #66665f; } #aldosa-counter .logo { font-size: 15px; letter-spacing: 0.35em; font-weight: 300; }\n#aldosa-counter .dots { display: flex; gap: 8px; justify-content: center; margin: 4px 0 26px; } #aldosa-counter .dots i { width: 10px; height: 10px; border-radius: 50%; background: #dadad6; } #aldosa-counter .dots i.on { background: #141414; }\n#aldosa-counter h1 { font-size: 28px; font-weight: 500; margin: 0 0 8px; line-height: 1.35; word-break: keep-all; } #aldosa-counter .sub { color: #66665f; font-size: 16px; margin-bottom: 20px; line-height: 1.7; }\n#aldosa-counter label.l { display: block; font-size: 17px; margin: 18px 0 8px; }\n#aldosa-counter input[type=text], #aldosa-counter input[type=tel], #aldosa-counter select { width: 100%; font-size: 24px; padding: 16px; border: 2px solid #141414; border-radius: 0; background: #fff; font-family: inherit; }\n#aldosa-counter select { font-size: 20px; }\n#aldosa-counter .chips button { font-size: 20px; padding: 16px 22px; border: 2px solid #141414; background: #fff; margin: 0 10px 10px 0; cursor: pointer; border-radius: 0; font-family: inherit; } #aldosa-counter .chips button.on { background: #141414; color: #fff; }\n#aldosa-counter .btn { width: 100%; font-size: 22px; padding: 18px; border: 2px solid #141414; background: #fff; cursor: pointer; border-radius: 0; font-family: inherit; } #aldosa-counter .btn.pri { background: #141414; color: #fff; } #aldosa-counter .btn:disabled { opacity: .4; }\n#aldosa-counter .acts { display: flex; gap: 12px; margin-top: 26px; } #aldosa-counter .acts .btn { flex: 1; }\n#aldosa-counter .err { color: #b3261e; font-size: 16px; margin-top: 14px; min-height: 22px; }\n#aldosa-counter .sum { border: 1px solid #dadad6; padding: 16px 18px; background: #f5f5f3; line-height: 2.1; font-size: 19px; } #aldosa-counter .sum .k { display: inline-block; width: 92px; color: #66665f; font-size: 15px; }\n#aldosa-counter .ck { display: flex; gap: 12px; align-items: flex-start; margin-top: 18px; font-size: 17px; line-height: 1.6; } #aldosa-counter .ck input { width: 26px; height: 26px; flex: none; margin-top: 2px; }\n#aldosa-counter .done { text-align: center; padding-top: 20px; } #aldosa-counter .done .ck2 { font-size: 56px; width: 96px; height: 96px; line-height: 96px; border: 3px solid #141414; border-radius: 50%; margin: 0 auto 18px; }\n#aldosa-counter .note { font-size: 13px; color: #8a8680; text-align: center; margin-top: 26px; line-height: 1.7; }\n"; document.head.appendChild(st);
  var token = new URLSearchParams(window.location.search).get("t") || "";
  var ctx = null, S = null, timer = null;

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function $(sel) { return ROOT.querySelector(sel); }
  function api(action, payload) { var b = { action: action, token: token }; Object.keys(payload || {}).forEach(function (k) { b[k] = payload[k]; }); return fetch(API_URL, { method: "POST", body: JSON.stringify(b) }).then(function (r) { return r.json(); }); }
  function fmtPhone(raw) { var d = String(raw || "").replace(/[^0-9]/g, ""); if (d.length === 10 && d.charAt(0) === "1") d = "0" + d; d = d.slice(0, 11); if (d.length <= 3) return d; if (d.length <= 7) return d.slice(0, 3) + "-" + d.slice(3); return d.slice(0, 3) + "-" + d.slice(3, 7) + "-" + d.slice(7); }
  function validMobile(v) { var d = String(v || "").replace(/[^0-9]/g, ""); if (d.length === 10 && d.charAt(0) === "1") d = "0" + d; return /^010\d{8}$/.test(d) || /^01[16789]\d{7,8}$/.test(d); }
  function fresh() { var m = ctx.mode === "both" ? "" : ctx.mode; return { step: m ? 1 : 0, mode: m, name: "", phone: "", brand: "", model: "", repairs: [], other: "", staffId: ctx.staff.length ? ctx.staff[0].staff_id : "", agree: false, err: "", busy: false, done: null, cnt: ctx.reset }; }
  ROOT.addEventListener("input", function (e) { if (e.target.id === "cPhone") { var v = fmtPhone(e.target.value); if (v !== e.target.value) e.target.value = v; } });

  function head() { return "<div class='top'><div><div class='biz'>" + esc(ctx.company_name) + "</div>" + (ctx.branch_name && ctx.branch_name !== ctx.company_name ? "<div class='br'>" + esc(ctx.branch_name) + "</div>" : "") + "</div><div class='logo'>ALDOSA</div></div>"; }
  function draw() {
    var h = head(), min = ctx.mode === "both" ? 0 : 1;
    if (S.step >= 1 && S.step <= 3) h += "<div class='dots'><i class='on'></i><i class='" + (S.step >= 2 ? "on" : "") + "'></i><i class='" + (S.step >= 3 ? "on" : "") + "'></i></div>";
    if (S.step === 0) h += "<h1>방문 접수</h1><div class='sub'>" + esc(ctx.msg) + "<br>입력은 1분이면 끝나요.</div><button class='btn pri' style='margin-bottom:12px;' data-c='cust'>제가 직접 입력할게요</button><button class='btn' data-c='staff'>직원이 대신 입력해 드릴게요</button>";
    if (S.step === 1) h += "<h1>" + (S.mode === "cust" ? "이름과 휴대폰 번호를 알려 주세요" : "손님의 이름과 휴대폰 번호") + "</h1><div class='sub'>접수 안내 문자를 보내 드려요.</div><label class='l'>이름</label><input type='text' id='cName' maxlength='30' value=\"" + esc(S.name) + "\" placeholder='예: 홍길동' autocomplete='off' /><label class='l'>휴대폰 번호</label><input type='tel' id='cPhone' inputmode='numeric' value=\"" + esc(S.phone) + "\" placeholder='010-0000-0000' autocomplete='off' />";
    if (S.step === 2) h += "<h1>맡기실 제품을 골라 주세요</h1><div class='sub'>브랜드를 눌러 주세요.</div><div class='chips'>" + ctx.brands.concat(["기타"]).map(function (b) { return "<button type='button' class='" + (S.brand === b ? "on" : "") + "' data-brand=\"" + esc(b) + "\">" + esc(b) + "</button>"; }).join("") + "</div><label class='l'>모델 <span style='color:#8a8680;font-size:15px'>(모르면 비워 두세요)</span></label><input type='text' id='cModel' maxlength='60' value=\"" + esc(S.model) + "\" placeholder='예: Presage SRPB41' autocomplete='off' />" +
      (ctx.repair_options && ctx.repair_options.length ? "<label class='l'>수리 요청 사항 <span style='color:#8a8680;font-size:15px'>(여러 개 선택할 수 있어요)</span></label><div class='chips'>" + ctx.repair_options.map(function (o) { return "<button type='button' class='" + (S.repairs.indexOf(o) >= 0 ? "on" : "") + "' data-repair=\"" + esc(o) + "\">" + esc(o) + "</button>"; }).join("") + "</div>" : "") +
      "<label class='l'>기타 요청 <span style='color:#8a8680;font-size:15px'>(직접 입력, 선택)</span></label><input type='text' id='cOther' maxlength='100' value=\"" + esc(S.other) + "\" placeholder='예: 용두가 헐거워요' autocomplete='off' />";
    if (S.step === 3) {
      h += "<h1>이대로 접수할까요?</h1><div class='sum'><div><span class='k'>이름</span> <b>" + esc(S.name) + "</b></div><div><span class='k'>휴대폰</span> <b>" + esc(S.phone) + "</b></div><div><span class='k'>제품</span> <b>" + esc(((S.brand === "기타" ? "" : S.brand) + " " + S.model).trim() || "기타 제품") + "</b></div><div><span class='k'>접수 장소</span> <b>" + esc(ctx.label) + "</b></div>" + ((S.repairs.length || S.other.trim()) ? "<div><span class='k'>요청</span> <b>" + esc(S.repairs.concat(S.other.trim() ? ["기타: " + S.other.trim()] : []).join(", ")) + "</b></div>" : "") + "</div>";
      if (S.mode === "staff" && ctx.staff.length) h += "<label class='l'>접수 담당자</label><select id='cStaff'>" + ctx.staff.map(function (s) { return "<option value='" + esc(s.staff_id) + "'" + (S.staffId === s.staff_id ? " selected" : "") + ">" + esc(s.staff_name) + "</option>"; }).join("") + "</select>";
      h += "<label class='ck'><input type='checkbox' id='cAgree' " + (S.agree ? "checked" : "") + " /><span>" + (S.mode === "cust" ? "<b>서비스 이용에 따른 개인정보 활용</b>에 동의합니다.<br><span style='font-size:14px;color:#66665f;'>수집 항목: 이름, 휴대폰 번호, 제품 정보 · 이용 목적: 접수 확인, 진행 안내 문자 발송, 알도사 회원 연결</span>" : "손님이 <b>서비스 이용에 따른 개인정보 활용</b>에 동의했습니다.") + "</span></label>";
    }
    if (S.step === 4) { h += "<div class='done'><div class='ck2'>✓</div><h1>접수가 완료되었어요</h1><div class='sub'>" + esc(S.name) + "님 휴대폰으로 <b>접수 안내 문자</b>를 보냈어요.<br>문자의 링크로 들어오시면 가입 또는 로그인 후<br>내 컬렉션에서 진행 상황을 볼 수 있어요.</div><div class='sum' style='text-align:left'><div><span class='k'>접수번호</span> <b>" + esc(S.done) + "</b></div></div><button class='btn pri' style='margin-top:22px;' data-c='new'>다음 접수 시작</button><div class='note'><span id='cCnt'>" + S.cnt + "</span>초 뒤에 처음 화면으로 돌아가요. 입력하신 내용은 이 화면에서 지워져요.</div></div>"; }
    else h += "<div class='err' id='cErr'>" + esc(S.err) + "</div><div class='acts'>" + (S.step > min ? "<button class='btn' data-c='back'>이전</button>" : "") + (S.step >= 1 ? "<button class='btn pri' data-c='next'" + (S.busy ? " disabled" : "") + ">" + (S.step === 3 ? "접수하기" : "다음") + "</button>" : "") + "</div>";
    ROOT.innerHTML = h + (S.step === 4 ? "" : "<div class='note'>도움이 필요하면 직원에게 말씀해 주세요.</div>");
  }
  function collect() {
    var e;
    if ((e = $("#cName"))) S.name = e.value; if ((e = $("#cPhone"))) S.phone = e.value; if ((e = $("#cModel"))) S.model = e.value;
    if ((e = $("#cOther"))) S.other = e.value; if ((e = $("#cStaff"))) S.staffId = e.value; if ((e = $("#cAgree"))) S.agree = e.checked;
  }
  function startTimer() {
    if (window.ALDOSA_NO_TIMER) return;
    clearInterval(timer); S.cnt = ctx.reset;
    timer = setInterval(function () { if (S.step !== 4) { clearInterval(timer); return; } S.cnt--; var el = $("#cCnt"); if (el) el.textContent = S.cnt; if (S.cnt <= 0) { clearInterval(timer); S = fresh(); draw(); } }, 1000);
  }
  function submit() {
    S.busy = true; S.err = ""; draw();
    api("counterCreateIntake", { mode: S.mode, name: S.name, phone: S.phone, brand: S.brand, model: S.model, repairs: S.repairs, repair_other: S.other.trim(), staff_id: S.mode === "staff" ? S.staffId : "", agree: S.agree }).then(function (r) {
      S.busy = false;
      if (!r.success) { S.err = r.message || "접수하지 못했습니다."; if (r.invalid) { ROOT.innerHTML = head() + "<h1>사용할 수 없는 링크예요</h1><div class='sub'>매장 관리자에게 새 링크를 요청해 주세요.</div>"; return; } draw(); return; }
      S.done = r.request_id; S.step = 4; draw(); startTimer();
    }).catch(function () { S.busy = false; S.err = "네트워크 오류가 발생했어요. 다시 시도해 주세요."; draw(); });
  }
  ROOT.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-c], [data-brand], [data-repair]") : null; if (!b) return;
    if (b.hasAttribute("data-brand")) { collect(); S.brand = b.getAttribute("data-brand"); draw(); return; }
    if (b.hasAttribute("data-repair")) { collect(); var rv = b.getAttribute("data-repair"), ri = S.repairs.indexOf(rv); if (ri >= 0) S.repairs.splice(ri, 1); else if (S.repairs.length < 10) S.repairs.push(rv); draw(); return; }
    var a = b.getAttribute("data-c");
    if (a === "cust" || a === "staff") { S.mode = a; S.step = 1; S.staffId = ctx.staff.length ? ctx.staff[0].staff_id : ""; draw(); return; }
    if (a === "new") { clearInterval(timer); S = fresh(); draw(); return; }
    collect();
    if (a === "back") { S.err = ""; S.step -= 1; if (S.step === 0) S.mode = ""; draw(); return; }
    if (a === "next") {
      S.err = "";
      if (S.step === 1) { if (S.name.trim().length < 2) S.err = "이름을 2글자 이상 입력해 주세요."; else if (!validMobile(S.phone)) S.err = "휴대폰 번호 11자리를 입력해 주세요. (예: 010-1234-5678)"; }
      else if (S.step === 2) { if (!S.brand) S.err = "맡기실 제품의 브랜드를 골라 주세요."; }
      else if (S.step === 3) { if (!S.agree) S.err = S.mode === "cust" ? "개인정보 활용에 동의해 주세요." : "손님께 동의를 받은 뒤 체크해 주세요."; }
      if (S.err) { draw(); return; }
      if (S.step === 3) { submit(); return; }
      S.step += 1; draw();
    }
  });
  ROOT.innerHTML = "<div style='padding:60px 0;text-align:center;color:#8a8680;'>불러오는 중...</div>";
  if (!token) { ROOT.innerHTML = "<h1 style='font-size:24px;'>사용할 수 없는 링크예요</h1><div style='color:#66665f;'>매장 관리자에게 링크를 다시 받아 주세요.</div>"; return; }
  api("counterGetContext", {}).then(function (r) {
    if (!r.success) { ROOT.innerHTML = "<div style='padding:40px 0;'><div class='logo' style='letter-spacing:.35em;font-weight:300;margin-bottom:18px;'>ALDOSA</div><h1 style='font-size:24px;font-weight:500;'>사용할 수 없는 링크예요</h1><div style='color:#66665f;margin-top:8px;'>" + esc(r.message || "") + "</div></div>"; return; }
    ctx = r; S = fresh(); draw();
  }).catch(function () { ROOT.innerHTML = "<div style='padding:40px 0;color:#b3261e;'>불러오지 못했어요. 새로고침해 주세요.</div>"; });
})();