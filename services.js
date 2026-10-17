(function () {
  var API_URL = "https://script.google.com/macros/s/AKfycbyk1khfq0I8XNYDgvPcIa0aTzYayAM7HekoRapfCZc7CEqfDR2Eh3AxUi8ceqemk4aK3A/exec";
  // 포트원(결제) 설정: /store/checkout 페이지 코드의 storeId·channelKey와 같은 값으로 채워 주세요 (또는 페이지에서 window.ALDOSA_PORTONE = {...} 로 지정)
  var PORTONE = window.ALDOSA_PORTONE || { storeId: "", channelKey: "" };
  var TAX = [{"n":"패션잡화","on":1,"sub":[{"n":"시계","sv":["오버홀","배터리 교체","유리 교체","줄·스트랩 교체","폴리싱","방수 점검","크라운·용두 교체"]},{"n":"가방","sv":["가죽 염색·복원","지퍼 교체","손잡이·스트랩 교체","세척·클리닝","안감 교체"]},{"n":"지갑·벨트","sv":["가죽 염색·복원","지퍼·버클 교체","세척·클리닝"]},{"n":"신발·구두","sv":["굽·밑창 교체","염색·복원","세척·클리닝","늘림·수선"]},{"n":"안경·선글라스","sv":["코받침 교체","테 수선·용접","렌즈 교체","나사·부품 교체"]},{"n":"의류·가죽","sv":["사이즈 수선","지퍼·단추 수선","염색·복원","세탁·클리닝"]},{"n":"주얼리","sv":["세척·광택","사이즈 조절","보석 교체·수선"]}]},{"n":"디지털 가전","on":1,"sub":[{"n":"디지털 카메라","sv":["센서·렌즈 청소","셔터·부품 수리","점검·펌웨어"]},{"n":"인터넷 공유기","sv":["설정·펌웨어 점검","안테나·부품 교체","고장 진단 수리"]},{"n":"노트북·PC","sv":["부품 교체","액정 수리","클리닝·점검"]},{"n":"게임 콘솔","sv":["HDMI·부품 교체","클리닝·점검","컨트롤러 수리"]}]},{"n":"음향 가전","on":1,"sub":[{"n":"수입 고가 오디오","sv":["앰프·스피커 점검","진공관 교체","부품 교체·수리"]},{"n":"헤드폰·이어폰","sv":["이어패드 교체","케이블·단자 수리","음향 점검"]},{"n":"턴테이블·LP","sv":["벨트·카트리지 교체","모터 점검","음향 점검"]}]},{"n":"스포츠·레저","on":1,"sub":[{"n":"자전거","sv":["변속기 정비","휠 조정","오버홀·세척"]},{"n":"골프","sv":["그립 교체","샤프트 교체","헤드 수리"]},{"n":"캠핑·아웃도어","sv":["원단 수선","지퍼 수리","방수 재코팅"]},{"n":"낚시","sv":["릴 정비","로드 수리"]}]},{"n":"가구·인테리어","on":1,"sub":[{"n":"수입 가구","sv":["가죽 복원","목재 스크래치 복원","다리·부품 교체"]},{"n":"수입 조명","sv":["소켓·전선 교체","유리갓 교체","점검·청소"]},{"n":"소파·가죽 가구","sv":["가죽 염색·복원","충전재 교체","프레임 보강"]},{"n":"인테리어 소품","sv":["파손 복원","도색·마감"]}]},{"n":"문구","on":1,"sub":[{"n":"수입 필기구","sv":["샤프 정비","만년필 닙 교정","부품 교체","세척·점검"]},{"n":"가죽 다이어리·노트","sv":["제본 수리","가죽 보수"]}]},{"n":"아트웍스","on":1,"sub":[{"n":"회화·평면 작품","sv":["작품 훼손 복원","작품 클리닝","캔버스 보강"]},{"n":"액자·프레임","sv":["작품 프레임 수리","프레임 교체·제작","유리·패널 교체"]},{"n":"아트 토이·피규어","sv":["아트 토이 수리","재도색·리페인팅","파츠 복원"]},{"n":"조각·입체 작품","sv":["작품 훼손 복원","접착·보강"]}]}];
  var ICON_PATHS = {
    "패션잡화": '<path d="M10 18h28l-2.5 22H12.5z"/><path d="M17 18v-3a7 7 0 0 1 14 0v3"/>',
    "디지털 가전": '<rect x="7" y="15" width="34" height="23" rx="3"/><circle cx="24" cy="26.5" r="7"/><path d="M17 15l2-4h10l2 4"/>',
    "음향 가전": '<path d="M9 28v-4a15 15 0 0 1 30 0v4"/><rect x="7" y="28" width="8" height="12" rx="2.5"/><rect x="33" y="28" width="8" height="12" rx="2.5"/>',
    "스포츠·레저": '<circle cx="13" cy="32" r="8"/><circle cx="35" cy="32" r="8"/><path d="M13 32l8-14h11l3 14M21 18l6 14M30 14h5"/>',
    "가구·인테리어": '<path d="M16 8h16l6 18H10z"/><path d="M24 26v12M17 40h14"/>',
    "문구": '<path d="M10 38l4-12L34 6l8 8-20 20z"/><path d="M14 26l8 8M30 10l8 8"/>',
    "아트웍스": '<rect x="8" y="8" width="32" height="32" rx="2"/><rect x="15" y="15" width="18" height="18"/>',
    "신규": '<path d="M24 7l4.5 11.5L40 24l-11.5 5.5L24 41l-4.5-11.5L8 24l11.5-5.5z"/>'
  };
  function ico(name) { return "<svg viewBox='0 0 48 48' aria-hidden='true'>" + (ICON_PATHS[name] || '<circle cx="24" cy="24" r="14"/><path d="M24 17v7l5 3"/>') + "</svg>"; }
  var ICONS = { "패션잡화": "👜", "디지털 가전": "📷", "음향 가전": "🎧", "스포츠·레저": "🚲", "가구·인테리어": "🛋", "문구": "✒️", "아트웍스": "🎨" };
  var METHODS = { courier: "택배 접수", visit: "출장 접수", walkin: "내방 접수" };
  var ROOT = document.getElementById("aldosa-store");
  if (!ROOT) return;
  var st = document.createElement("style"); st.textContent = "\n#aldosa-store, #aldosa-store * { box-sizing: border-box; }\n#aldosa-store { font-family: 'Helvetica Neue', Arial, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif; color: #141414; max-width: 980px; margin: 0 auto; padding: 28px 20px 80px; font-size: 15px; line-height: 1.6; }\n#aldosa-store h1 { font-size: 26px; font-weight: 500; margin: 0 0 6px; } #aldosa-store h2 { font-size: 18px; font-weight: 500; margin: 28px 0 10px; } #aldosa-store h3 { font-size: 15px; font-weight: 600; margin: 0 0 8px; }\n#aldosa-store .sub { color: #66665f; font-size: 14px; margin-bottom: 18px; }\n#aldosa-store input[type=text], #aldosa-store input[type=tel], #aldosa-store input[type=number], #aldosa-store select, #aldosa-store textarea { width: 100%; font-size: 16px; padding: 12px 14px; border: 1px solid #141414; border-radius: 0; background: #fff; font-family: inherit; }\n#aldosa-store textarea { min-height: 96px; resize: vertical; }\n#aldosa-store label.l { display: block; font-size: 13px; color: #66665f; margin: 14px 0 6px; }\n#aldosa-store .btn { display: inline-block; font-size: 15px; padding: 12px 22px; border: 1px solid #141414; background: #fff; color: #141414; cursor: pointer; text-decoration: none; font-family: inherit; }\n#aldosa-store .btn.pri { background: #141414; color: #fff; } #aldosa-store .btn:disabled { opacity: .4; cursor: default; } #aldosa-store .btn.sm { font-size: 13px; padding: 8px 14px; }\n#aldosa-store .row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; } #aldosa-store .row > * { flex: 1 1 auto; } #aldosa-store .row > .btn { flex: 0 0 auto; }\n#aldosa-store .chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0; } #aldosa-store .chip { border: 1px solid #141414; padding: 6px 14px; font-size: 13px; cursor: pointer; background: #fff; } #aldosa-store .chip.on { background: #141414; color: #fff; } #aldosa-store .chip.tag { cursor: default; border-color: #bdbdb7; color: #4a4a45; padding: 3px 10px; font-size: 12px; }\n#aldosa-store .cat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 10px; margin: 14px 0; } #aldosa-store .cat { border: 1px solid #dadad6; padding: 14px 6px; text-align: center; cursor: pointer; background: #fff; font-size: 13px; } #aldosa-store .cat.on { border-color: #141414; background: #141414; color: #fff; } #aldosa-store .cat .ic { font-size: 26px; display: block; } #aldosa-store .cat small { display: block; color: #8a8680; font-size: 11px; } #aldosa-store .cat.on small { color: #ddd; }\n#aldosa-store .card { border: 1px solid #dadad6; padding: 18px 20px; margin-bottom: 12px; background: #fff; } #aldosa-store .card a.name { font-size: 18px; font-weight: 600; color: #141414; text-decoration: none; } #aldosa-store .meta { color: #66665f; font-size: 13px; margin-top: 4px; }\n#aldosa-store .box { border: 1px solid #dadad6; background: #f5f5f3; padding: 16px 18px; margin: 12px 0; } #aldosa-store .box.warn { background: #fff7f6; border-color: #e7b4ae; } #aldosa-store .box.ok { background: #f2f8f4; border-color: #b7d4c1; }\n#aldosa-store table { width: 100%; border-collapse: collapse; font-size: 14px; } #aldosa-store th, #aldosa-store td { padding: 10px 8px; border-bottom: 1px solid #e6e6e2; text-align: left; } #aldosa-store th { color: #8a8680; font-weight: 500; font-size: 12px; }\n#aldosa-store .err { color: #b3261e; font-size: 14px; min-height: 20px; margin-top: 10px; } #aldosa-store .okmsg { color: #1e7b3c; font-size: 14px; margin-top: 10px; }\n#aldosa-store .steps { display: flex; gap: 6px; margin: 4px 0 22px; } #aldosa-store .steps i { flex: 1; height: 4px; background: #dadad6; } #aldosa-store .steps i.on { background: #141414; }\n#aldosa-store .opt { display: block; border: 1px solid #141414; padding: 14px 16px; margin-bottom: 10px; cursor: pointer; background: #fff; } #aldosa-store .opt.on { background: #141414; color: #fff; } #aldosa-store .opt small { display: block; opacity: .75; }\n#aldosa-store .opt input { width: auto; margin-right: 8px; }\n#aldosa-store .ck { display: flex; gap: 10px; align-items: flex-start; margin: 14px 0; font-size: 14px; } #aldosa-store .ck input { width: 22px; height: 22px; flex: none; margin-top: 2px; }\n#aldosa-store .tl { display: flex; gap: 6px; margin: 14px 0; flex-wrap: wrap; } #aldosa-store .tl span { padding: 6px 12px; font-size: 12px; border: 1px solid #dadad6; color: #8a8680; } #aldosa-store .tl span.on { background: #141414; color: #fff; border-color: #141414; }\n#aldosa-store .nav { display: flex; gap: 10px; margin-top: 24px; } #aldosa-store .nav .btn { flex: 1; text-align: center; }\n#aldosa-store .empty { padding: 36px 10px; text-align: center; color: #8a8680; }\n\n#aldosa-store .layout { display: grid; grid-template-columns: 210px 1fr; gap: 30px; margin-top: 8px; align-items: start; }\n#aldosa-store .filters { border-top: 2px solid #141414; padding-top: 6px; }\n#aldosa-store .filters h4 { font-size: 13px; margin: 18px 0 8px; font-weight: 600; }\n#aldosa-store .filters .fl { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; font-size: 13.5px; cursor: pointer; color: #333; border-bottom: 1px solid #eee; }\n#aldosa-store .filters .fl.on { font-weight: 600; color: #141414; } #aldosa-store .filters .fl i { font-style: normal; color: #8a8680; font-size: 12px; } #aldosa-store .filters .fl .bx { width: 14px; height: 14px; border: 1px solid #141414; margin-right: 8px; display: inline-block; vertical-align: -2px; } #aldosa-store .filters .fl.on .bx { background: #141414; }\n#aldosa-store .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 16px; }\n#aldosa-store .grid .card { padding: 0; margin: 0; display: flex; flex-direction: column; overflow: hidden; transition: box-shadow .15s; } #aldosa-store .grid .card:hover { box-shadow: 0 4px 16px rgba(0,0,0,.08); }\n#aldosa-store .thumb { background: #f2f2ef; height: 140px; display: flex; align-items: center; justify-content: center; position: relative; } #aldosa-store .thumb svg { width: 56px; height: 56px; stroke: #141414; fill: none; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }\n#aldosa-store .thumb .bd { position: absolute; left: 10px; top: 10px; display: flex; gap: 4px; flex-wrap: wrap; } #aldosa-store .thumb .bd .chip { cursor: default; }\n#aldosa-store .cbody { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 4px; flex: 1; } #aldosa-store .cbody .path { font-size: 12px; color: #8a8680; } #aldosa-store .cbody .price { font-size: 15px; font-weight: 600; margin-top: 6px; }\n#aldosa-store .cbody .foot { margin-top: auto; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #66665f; }\n#aldosa-store .cat .ic svg { width: 34px; height: 34px; stroke: currentColor; fill: none; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }\n#aldosa-store .cat .ic { background: #f2f2ef; width: 56px; height: 56px; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; } #aldosa-store .cat.on .ic { background: #333; }\n#aldosa-store .hero { background: #f2f2ef; padding: 26px 28px; display: flex; gap: 22px; align-items: center; margin: 12px 0 22px; } #aldosa-store .hero svg { width: 64px; height: 64px; stroke: #141414; fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; flex: none; } #aldosa-store .hero h1 { margin: 0 0 4px; }\n#aldosa-store .two { display: grid; grid-template-columns: 1fr 340px; gap: 30px; align-items: start; } #aldosa-store .side { position: sticky; top: 16px; border: 1px solid #141414; padding: 18px 20px; background: #fff; } #aldosa-store .side h3 { margin-top: 0; }\n#aldosa-store .side .btn { display: block; text-align: center; margin-bottom: 8px; }\n#aldosa-store .row > input, #aldosa-store .row > select { width: auto; } #aldosa-store .row > input { flex: 1 1 220px; min-width: 0; } #aldosa-store .row > select { flex: 0 0 170px; }\n@media (max-width: 820px) { #aldosa-store .layout, #aldosa-store .two { grid-template-columns: 1fr; } #aldosa-store .side { position: static; } #aldosa-store .filters { order: 2; } #aldosa-store .hero { flex-direction: column; align-items: flex-start; } }\n@media (max-width: 560px) { #aldosa-store h1 { font-size: 22px; } }\n"; document.head.appendChild(st);

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function $(sel, el) { return (el || ROOT).querySelector(sel); }
  function api(action, payload) {
    var body = { action: action };
    Object.keys(payload || {}).forEach(function (k) { body[k] = payload[k]; });
    return fetch(API_URL, { method: "POST", body: JSON.stringify(body) }).then(function (r) { return r.json(); });
  }
  function money(n) { return Number(n || 0).toLocaleString("ko-KR") + "원"; }
  function params() { var o = {}; new URLSearchParams(window.location.search).forEach(function (v, k) { o[k] = v; }); return o; }
  var P = params();

  // 로그인 정보: 기존 페이지처럼 주소의 member_id·email·name·phone, 없으면 이 창에 저장된 값
  var member = null;
  (function () {
    if (P.member_id && P.email) { member = { member_id: P.member_id, email: P.email, name: P.name || "", phone: P.phone || "" }; try { sessionStorage.setItem("aldosa_member", JSON.stringify(member)); } catch (e) {} }
    else { try { var s = sessionStorage.getItem("aldosa_member"); if (s) member = JSON.parse(s); } catch (e) {} }
  })();
  function memberQS() { return member ? "member_id=" + encodeURIComponent(member.member_id) + "&email=" + encodeURIComponent(member.email) + "&name=" + encodeURIComponent(member.name || "") + "&phone=" + encodeURIComponent(member.phone || "") : ""; }
  function link(path, q) { var a = []; if (q) a.push(q); var m = memberQS(); if (m) a.push(m); return path + (a.length ? "?" + a.join("&") : ""); }
  function mcred() { return member ? { member_id: member.member_id, email: member.email } : {}; }
  function go(url) { if (typeof window.ALDOSA_NAV === "function") { window.ALDOSA_NAV(url); return; } window.location.href = url; }

  // ── 휴대폰 형식 ──
  function fmtPhone(raw) {
    var d = String(raw || "").replace(/[^0-9]/g, ""); if (d.length === 10 && d.charAt(0) === "1") d = "0" + d; d = d.slice(0, 11);
    if (d.length <= 3) return d; if (d.length <= 7) return d.slice(0, 3) + "-" + d.slice(3); return d.slice(0, 3) + "-" + d.slice(3, 7) + "-" + d.slice(7);
  }
  function validMobile(v) { var d = String(v || "").replace(/[^0-9]/g, ""); if (d.length === 10 && d.charAt(0) === "1") d = "0" + d; return /^010\d{8}$/.test(d) || /^01[16789]\d{7,8}$/.test(d); }
  document.addEventListener("input", function (e) { var t = e.target; if (t && t.getAttribute && t.getAttribute("data-fmt") === "phone") { var v = fmtPhone(t.value); if (v !== t.value) t.value = v; } });

  // ── 휴대폰 인증 위젯 (스위치가 꺼져 있으면 나타나지 않음) ──
  function verifyHtml(V) {
    if (!V.required) return "<div class='box'>이 업체는 휴대폰 인증 없이 접수할 수 있어요.</div>";
    if (V.token) return "<div class='box ok'>휴대폰 인증이 완료되었어요. (" + esc(V.phone) + ")</div>";
    var h = "<div class='row' style='margin-top:10px;'><button type='button' class='btn' data-v='send'" + (V.busy ? " disabled" : "") + ">" + (V.sent ? "인증번호 다시 받기" : "인증번호 받기") + "</button></div>";
    if (V.sent) h += "<label class='l'>인증번호 6자리 (5분 안에 입력)</label><div class='row'><input type='tel' inputmode='numeric' maxlength='6' id='vCode' placeholder='000000' /><button type='button' class='btn pri' data-v='confirm'>확인</button></div>";
    return h + "<div class='err' id='vErr'>" + esc(V.err || "") + "</div>";
  }
  function bindVerify(V, S, purpose, slug, rerender) {
    ROOT.addEventListener("click", function h(e) {
      var b = e.target.closest ? e.target.closest("[data-v]") : null;
      if (!b) return;
      if (b.getAttribute("data-v") === "send") {
        var ph = ($("#fPhone") || {}).value || S.phone || "";
        if (!validMobile(ph)) { V.err = "휴대폰 번호(010-0000-0000)를 먼저 입력해 주세요."; rerender(); return; }
        V.busy = true; V.err = ""; S.phone = fmtPhone(ph);
        api("storeSendVerification", { phone: S.phone, slug: slug, purpose: purpose }).then(function (r) {
          V.busy = false;
          if (!r.success) { V.err = r.message || "인증번호를 보내지 못했습니다."; rerender(); return; }
          if (r.required === false) { V.required = false; rerender(); return; }
          V.sent = true; V.id = r.verification_id; V.phone = S.phone; V.err = ""; rerender();
        }).catch(function () { V.busy = false; V.err = "네트워크 오류가 발생했습니다."; rerender(); });
      } else if (b.getAttribute("data-v") === "confirm") {
        var code = ($("#vCode") || {}).value || "";
        api("storeVerifyCode", { phone: V.phone, verification_id: V.id, code: code }).then(function (r) {
          if (!r.success) { V.err = r.message || "인증에 실패했습니다."; rerender(); return; }
          V.token = r.token; V.err = ""; rerender();
        }).catch(function () { V.err = "네트워크 오류가 발생했습니다."; rerender(); });
      }
    });
  }

  // ═══ 서비스 찾기 (/services) ═══
  function pageServices() {
    var S = { q: "", c1: P.c1 || "", c2: "", method: "", sameDay: false, fresh: false, service: "", region: "" }, home = null, list = [], total = 0, facets = { categories: {}, regions: {}, services: [] };
    function load() {
      api("storeSearch", { q: S.q, category1: S.c1, category2: S.c2, method: S.method, same_day: S.sameDay, service: S.service, region: S.region, limit: 50 }).then(function (r) {
        list = r.success ? r.stores : []; total = r.success ? r.total : 0; if (r.success && r.facets) facets = r.facets;
        if (S.fresh && home) { var ids = (home.new_stores || []).map(function (x) { return x.slug; }); list = list.filter(function (x) { return ids.indexOf(x.slug) >= 0; }); total = list.length; }
        draw();
      });
    }
    function filterList(title, items, key, cur) {
      if (!items.length) return "";
      return "<h4>" + title + "</h4>" + items.map(function (it) { return "<div class='fl" + (cur === it.name ? " on" : "") + "' data-s='" + key + "' data-v=\"" + esc(it.name) + "\"><span><span class='bx'></span>" + esc(it.name) + "</span><i>" + it.count + "</i></div>"; }).join("");
    }
    function card(s) {
      var first = String((s.categories[0] || "")).split(">")[0], methods = Object.keys(s.intake_methods).filter(function (k) { return s.intake_methods[k]; });
      return "<div class='card'><div class='thumb'>" + ico(first) + "<div class='bd'>" + (s.sample ? "<span class='chip tag' style='background:#141414;color:#fff;border-color:#141414;'>시범 운영</span>" : "") + (s.same_day ? "<span class='chip tag' style='background:#fff;'>당일 수리</span>" : "") + "</div></div>" +
        "<div class='cbody'><div class='path'>" + esc(String(s.categories[0] || "").replace(">", " › ")) + "</div><a class='name' href='" + esc(link("/s", "b=" + encodeURIComponent(s.slug))) + "'>" + esc(s.name) + "</a><div class='meta'>" + esc(s.tagline) + "</div>" +
        "<div class='chips'>" + (s.service_names || []).map(function (n) { return "<span class='chip tag'>" + esc(n) + "</span>"; }).join("") + "</div>" +
        "<div class='price'>" + (s.price_from !== null ? "서비스 " + money(s.price_from) + "부터" : "가격 문의") + "</div><div class='chips'>" + methods.map(function (k) { return "<span class='chip tag'>" + METHODS[k] + "</span>"; }).join("") + "</div>" +
        "<div class='foot'>" + (s.regions.length ? esc(s.regions.join(" · ")) : "전국") + (s.round_trip_fee ? " · 왕복 물류비 " + money(s.round_trip_fee) : "") + "</div></div></div>";
    }
    function draw() {
      var counts = home ? home.category_counts : {};
      var h = "<h1>서비스 찾기</h1><div class='sub'>수리·관리가 필요한 제품을 맡길 업체를 찾아보세요. 둘러보기는 로그인 없이 할 수 있어요.</div>";
      h += "<div class='row'><select id='sCat' style='max-width:170px;'><option value=''>카테고리 전체</option>" + TAX.map(function (c) { return "<option" + (S.c1 === c.n ? " selected" : "") + ">" + esc(c.n) + "</option>"; }).join("") + "</select><input type='text' id='sQ' placeholder='업체·서비스 검색 (예: 오버홀, 가죽 복원)' value=\"" + esc(S.q) + "\" /><button class='btn pri' data-s='search'>검색</button></div>";
      h += "<div class='cat-grid'>" + TAX.map(function (c) { return "<div class='cat" + (S.c1 === c.n ? " on" : "") + "' data-s='cat' data-v='" + esc(c.n) + "'><span class='ic'>" + ico(c.n) + "</span>" + esc(c.n) + "<small>" + (counts[c.n] || 0) + "곳</small></div>"; }).join("") +
        "<div class='cat" + (S.fresh ? " on" : "") + "' data-s='fresh'><span class='ic'>" + ico("신규") + "</span>신규 입점<small>" + ((home && home.new_stores.length) || 0) + "곳</small></div></div>";
      var c1 = TAX.filter(function (c) { return c.n === S.c1; })[0];
      if (c1) h += "<div class='chips'><span class='chip" + (!S.c2 ? " on" : "") + "' data-s='c2' data-v=''>전체</span>" + c1.sub.map(function (s) { return "<span class='chip" + (S.c2 === s.n ? " on" : "") + "' data-s='c2' data-v='" + esc(s.n) + "'>" + esc(s.n) + "</span>"; }).join("") + "</div>";
      h += "<div class='chips'>" + [["", "접수 방식 전체"], ["courier", "택배"], ["visit", "출장"], ["walkin", "내방"]].map(function (m) { return "<span class='chip" + (S.method === m[0] ? " on" : "") + "' data-s='method' data-v='" + m[0] + "'>" + m[1] + "</span>"; }).join("") + "<span class='chip" + (S.sameDay ? " on" : "") + "' data-s='sameday'>당일 수리 가능</span></div>";
      var regions = Object.keys(facets.regions || {}).map(function (n) { return { name: n, count: facets.regions[n] }; });
      h += "<div class='layout'><div class='filters'>" + (filterList("서비스 유형", facets.services || [], "svc", S.service) + filterList("지역", regions, "reg", S.region) || "<div class='meta' style='margin-top:14px;'>입점 업체가 늘면 서비스 유형·지역으로 좁혀볼 수 있어요.</div>") + "</div><div>";
      h += "<div class='meta' style='margin:0 0 10px;'>" + (S.c1 || "전체") + " 업체 " + total + "곳</div>";
      h += list.length ? "<div class='grid'>" + list.map(card).join("") + "</div>" : "<div class='empty'><b>조건에 맞는 업체가 없어요.</b><br><span style='font-size:13px;'>알도사 스토어는 곧 입점 업체가 늘어날 예정이에요. 조건을 바꿔 보시거나, 입점·서비스 문의는 알도사에 남겨 주세요.</span></div>";
      ROOT.innerHTML = h + "</div></div>";
    }
    ROOT.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-s]") : null; if (!b) return;
      var a = b.getAttribute("data-s"), v = b.getAttribute("data-v");
      if (a === "search") S.q = $("#sQ").value.trim();
      if (a === "cat") { S.c1 = S.c1 === v ? "" : v; S.c2 = ""; S.fresh = false; }
      if (a === "fresh") { S.fresh = !S.fresh; S.c1 = ""; S.c2 = ""; }
      if (a === "c2") S.c2 = v;
      if (a === "method") S.method = v;
      if (a === "sameday") S.sameDay = !S.sameDay;
      if (a === "svc") S.service = S.service === v ? "" : v;
      if (a === "reg") S.region = S.region === v ? "" : v;
      load();
    });
    ROOT.addEventListener("change", function (e) { if (e.target.id === "sCat") { S.c1 = e.target.value; S.c2 = ""; S.fresh = false; load(); } });
    ROOT.addEventListener("keydown", function (e) { if (e.key === "Enter" && e.target.id === "sQ") { S.q = e.target.value.trim(); load(); } });
    ROOT.innerHTML = "<div class='empty'>불러오는 중...</div>";
    api("storeGetHome", {}).then(function (r) { home = r.success ? r : null; if (home && !home.enabled) { ROOT.innerHTML = "<h1>서비스 찾기</h1><div class='empty'>지금은 이용할 수 없어요. 잠시 후 다시 확인해 주세요.</div>"; return; } load(); });
  }

  // ═══ 업체 페이지 (/s?b=) ═══
  function pageStore() {
    var slug = P.b || "", data = null, V = { required: false, token: "", sent: false }, IQ = { name: "", phone: "", kind: "가격", message: "", done: "" };
    ROOT.innerHTML = "<div class='empty'>불러오는 중...</div>";
    api("storeGetProfile", { slug: slug }).then(function (r) {
      if (!r.success) { ROOT.innerHTML = "<h1>업체를 찾을 수 없어요</h1><div class='sub'>" + esc(r.message || "") + "</div><a class='btn' href='" + esc(link("/services")) + "'>서비스 찾기로</a>"; return; }
      data = r; V.required = r.verification_required; if (member) { IQ.name = member.name || ""; IQ.phone = member.phone || ""; }
      draw(); bindVerify(V, IQ, "inquiry", slug, draw);
    });
    function draw() {
      var s = data.store, first = String(s.categories[0] || "").split(">")[0], methods = Object.keys(s.intake_methods).filter(function (k) { return s.intake_methods[k]; });
      var h = "<a href='" + esc(link("/services")) + "' class='meta'>← 서비스 찾기</a>";
      h += "<div class='hero'>" + ico(first) + "<div><h1>" + esc(s.name) + "</h1><div class='sub' style='margin:0 0 6px;'>" + esc(s.tagline) + "</div><div class='chips' style='margin:0;'>" +
        (s.sample ? "<span class='chip tag' style='background:#141414;color:#fff;border-color:#141414;'>시범 운영</span>" : "") + methods.map(function (k) { return "<span class='chip tag'>" + METHODS[k] + "</span>"; }).join("") + (s.same_day ? "<span class='chip tag'>당일 수리 가능</span>" : "") + "</div></div></div>";
      h += "<div class='two'><div>";
      if (s.sample) h += "<div class='box warn'><b>시범 운영 중이에요.</b> 알도사 스토어는 정식 오픈 전 필드 테스트 단계라, 접수하거나 문의하시면 알도사 담당자가 확인한 뒤 직접 연락드려요. 운영 중 부족한 점이 있을 수 있으니 너그럽게 양해해 주세요.</div>";
      if (s.intro) h += "<p style='white-space:pre-wrap;margin:10px 0;'>" + esc(s.intro) + "</p>";
      h += "<h2>서비스</h2><table><tr><th>서비스</th><th>품목</th><th>시작 가격</th></tr>" + data.services.map(function (x) { return "<tr><td>" + esc(x.name) + (x.price_note ? "<div class='meta'>" + esc(x.price_note) + "</div>" : "") + "</td><td>" + esc(x.category2) + "</td><td>" + (x.price_from === null ? "가격 문의" : money(x.price_from) + "~") + "</td></tr>"; }).join("") + "</table>";
      h += "<h2>오시는 길</h2>";
      if (s.where.mode === "public") h += "<div class='box'><b>" + esc(s.where.name || s.name) + "</b><br>" + esc(s.where.address) + (s.where.zip ? " (" + esc(s.where.zip) + ")" : "") + (s.where.hours ? "<br>" + esc(s.where.hours) : "") + "</div>";
      else if (s.where.mode === "after_intake") h += "<div class='box'>방문 장소는 접수한 분께만 안내해 드려요. 접수 후 방문 안내를 받으세요.</div>";
      else h += "<div class='box'>이 업체는 택배 접수만 받아요. 보내실 곳은 택배 접수를 마친 뒤에 안내돼요.</div>";
      if (s.hours_text) h += "<div class='meta'>접수 가능 시간: " + esc(s.hours_text) + "</div>";
      if (s.branches.length > 1) h += "<div class='chips'>" + s.branches.map(function (b) { return "<span class='chip tag'>" + esc(b.name) + (b.region ? " · " + esc(b.region) : "") + "</span>"; }).join("") + "</div>";
      h += "</div><div class='side'><h3>접수하기</h3>" + methods.map(function (k) { return "<a class='btn pri' href='" + esc(link("/s/apply", "b=" + encodeURIComponent(slug) + "&m=" + k)) + "'>" + METHODS[k] + "</a>"; }).join("");
      if (s.intake_methods.courier) h += "<div class='box' style='font-size:13px;'>택배 접수는 <b>알도사 택배 연계</b>(왕복 물류비 " + money(s.round_trip_fee) + ", 접수할 때 결제)" + (s.allow_self_ship ? " 또는 <b>직접 발송</b>(물류비 없음)" : "") + "을 고를 수 있어요. 보내실 곳은 접수를 마친 분께만 안내해 드려요.</div>";
      if (data.inquiry_enabled) {
        h += "<h3 style='margin-top:22px;'>문의 남기기</h3>";
        if (IQ.done) h += "<div class='box ok'>문의를 남겼어요. " + (s.sample ? "알도사 담당자가 확인한 뒤 연락드려요." : "답변이 등록되면 문자로 알려 드려요.") + "<br><a href='" + esc(IQ.done) + "'>내 문의 보기</a></div>";
        else {
          h += "<input type='text' id='iqName' placeholder='이름' value=\"" + esc(IQ.name) + "\" /><div style='height:8px;'></div><input type='tel' id='fPhone' data-fmt='phone' placeholder='휴대폰 번호' value=\"" + esc(IQ.phone) + "\" />" +
            "<label class='l'>문의 유형</label><select id='iqKind'>" + ["가격", "일정", "수리 가능 여부", "기타"].map(function (k) { return "<option" + (IQ.kind === k ? " selected" : "") + ">" + k + "</option>"; }).join("") + "</select>" +
            "<label class='l'>문의 내용</label><textarea id='iqMsg' maxlength='1000' placeholder='궁금한 점을 적어 주세요'>" + esc(IQ.message) + "</textarea><input type='text' id='iqWeb' tabindex='-1' autocomplete='off' style='position:absolute;left:-9999px;' aria-hidden='true' />" +
            verifyHtml(V) + "<div style='margin-top:12px;'><button class='btn pri' data-iq='send' style='width:100%;'>문의 보내기</button></div><div class='err' id='iqErr'></div>";
        }
      }
      ROOT.innerHTML = h + "</div></div>";
    }
    ROOT.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-iq]") : null; if (!b) return;
      IQ.name = $("#iqName").value; IQ.phone = $("#fPhone").value; IQ.kind = $("#iqKind").value; IQ.message = $("#iqMsg").value;
      var err = $("#iqErr");
      if (V.required && !V.token) { err.textContent = "휴대폰 인증을 먼저 완료해 주세요."; return; }
      api("storeCreateInquiry", Object.assign({ slug: slug, name: IQ.name, phone: IQ.phone, kind: IQ.kind, message: IQ.message, website: $("#iqWeb").value, verification_token: V.token }, mcred())).then(function (r) {
        if (!r.success) { err.textContent = r.message || "문의를 보내지 못했습니다."; if (r.need_verification) { V.token = ""; V.sent = false; } return; }
        IQ.done = link("/s/status", "inq=" + r.inquiry_id + "&k=" + r.access_key); V.token = ""; draw();
      }).catch(function () { err.textContent = "네트워크 오류가 발생했습니다."; });
    });
  }

  // ═══ 접수 (/s/apply?b=&m=) ═══
  function pageApply() {
    var slug = P.b || "", data = null, addrs = [], V = { required: false, token: "", sent: false };
    var S = { step: 1, method: P.m || "", ship: "aldosa", name: member ? member.name : "", phone: member ? member.phone : "", brand: "", model: "", category: "", symptom: "", addrMode: "new", addrId: "", save: false, agree: false, err: "", busy: false,
      addr: { recipient_name: "", recipient_phone: "", zip: "", address1: "", address2: "", memo: "" }, result: null };
    ROOT.innerHTML = "<div class='empty'>불러오는 중...</div>";
    api("storeGetProfile", { slug: slug }).then(function (r) {
      if (!r.success) { ROOT.innerHTML = "<h1>접수할 수 없어요</h1><div class='sub'>" + esc(r.message || "") + "</div><a class='btn' href='" + esc(link("/services")) + "'>서비스 찾기로</a>"; return; }
      data = r; V.required = r.verification_required;
      var ms = Object.keys(r.store.intake_methods).filter(function (k) { return r.store.intake_methods[k]; });
      if (ms.indexOf(S.method) < 0) S.method = ""; else { S.fixed = true; S.step = S.method === "courier" ? 1 : 2; }
      if (member) api("memberGetAddresses", mcred()).then(function (a) { if (a.success) { addrs = a.addresses; var d0 = addrs.filter(function (x) { return x.is_default; })[0] || addrs[0]; if (d0) { S.addrMode = "saved"; S.addrId = d0.address_id; } } draw(); }); else draw();
      bindVerify(V, S, "request", slug, draw);
    });
    function needAddr() { return S.method === "courier"; }
    function feeApplies() { return S.method === "courier" && S.ship !== "self"; }
    function steps() { var n = needAddr() ? 5 : 4, cur = needAddr() ? S.step : (S.step >= 4 ? S.step - 1 : S.step); var h = "<div class='steps'>"; for (var i = 1; i <= n; i++) h += "<i class='" + (i <= cur ? "on" : "") + "'></i>"; return h + "</div>"; }
    function collect() {
      ["fName", "fPhone", "fBrand", "fModel", "fSymptom", "fCat"].forEach(function (id) { var e = $("#" + id); if (!e) return; var k = { fName: "name", fPhone: "phone", fBrand: "brand", fModel: "model", fSymptom: "symptom", fCat: "category" }[id]; S[k] = e.value; });
      Object.keys(S.addr).forEach(function (k) { var e = $("#a_" + k); if (e) S.addr[k] = e.value; });
      var ag = $("#fAgree"); if (ag) S.agree = ag.checked; var sv = $("#fSave"); if (sv) S.save = sv.checked;
    }
    function draw() {
      if (!data) return;
      var s = data.store, h = "<a href='" + esc(link("/s", "b=" + encodeURIComponent(slug))) + "' class='meta'>← " + esc(s.name) + "</a><h1 style='margin-top:10px;'>접수하기</h1>";
      if (S.result && S.result.need_payment) return drawPay(h);
      h += steps();
      if (S.step === 1) {
        if (!S.fixed) h += "<h3>접수 방식을 골라 주세요</h3>" + Object.keys(s.intake_methods).filter(function (k) { return s.intake_methods[k]; }).map(function (k) { return "<label class='opt" + (S.method === k ? " on" : "") + "' data-m='" + k + "'><input type='radio' name='m' " + (S.method === k ? "checked" : "") + " />" + METHODS[k] + (k === "courier" ? "<small>택배로 보내거나 알도사 택배 연계로 맡길 수 있어요</small>" : "<small>일정은 업체가 제안하고 직접 확정해요</small>") + "</label>"; }).join("");
        if (S.method === "courier") {
          h += "<h3 style='margin-top:18px;'>택배는 어떻게 보내실래요?</h3><label class='opt" + (S.ship !== "self" ? " on" : "") + "' data-ship='aldosa'><input type='radio' name='sh' " + (S.ship !== "self" ? "checked" : "") + " /><b>알도사 택배 연계</b><small>왕복 물류비 " + money(s.round_trip_fee) + " (접수할 때 결제) · 수거와 반송을 알도사가 연계해 드려요</small></label>" +
            (s.allow_self_ship ? "<label class='opt" + (S.ship === "self" ? " on" : "") + "' data-ship='self'><input type='radio' name='sh' " + (S.ship === "self" ? "checked" : "") + " /><b>제가 직접 보낼게요</b><small>왕복 물류비 없음 · 접수 후 안내되는 보내실 곳으로 직접 택배를 보내요. 수리 후 반송 방법과 비용은 업체가 안내해요</small></label>" : "");
        }
      }
      if (S.step === 2) {
        h += "<h3>연락처</h3><label class='l'>이름</label><input type='text' id='fName' maxlength='30' value=\"" + esc(S.name) + "\" /><label class='l'>휴대폰 번호</label><input type='tel' id='fPhone' data-fmt='phone' placeholder='010-0000-0000' value=\"" + esc(S.phone) + "\"" + (V.token ? " readonly" : "") + " />" + verifyHtml(V);
      }
      if (S.step === 3) {
        var cats = s.categories.map(function (c) { return String(c); });
        h += "<h3>맡기실 제품</h3><label class='l'>브랜드</label><input type='text' id='fBrand' list='brandList' maxlength='40' value=\"" + esc(S.brand) + "\" placeholder='예: Rolex' /><datalist id='brandList'>" + (s.brands || []).map(function (b) { return "<option value=\"" + esc(b) + "\"></option>"; }).join("") + "</datalist>" +
          "<label class='l'>모델명 (모르면 비워 두세요)</label><input type='text' id='fModel' maxlength='60' value=\"" + esc(S.model) + "\" />" + (cats.length ? "<label class='l'>품목</label><select id='fCat'><option value=''>선택 안 함</option>" + cats.map(function (c) { return "<option" + (S.category === c ? " selected" : "") + ">" + esc(c) + "</option>"; }).join("") + "</select>" : "") +
          "<label class='l'>증상·요청사항</label><textarea id='fSymptom' maxlength='500' placeholder='예: 시간이 자꾸 느려져요'>" + esc(S.symptom) + "</textarea>";
      }
      if (S.step === 4 && needAddr()) {
        h += "<h3>반송 받으실 주소</h3><div class='sub'>수리가 끝나거나 견적을 거절하면 이 주소로 돌려 드려요. 업체에는 제품이 입고된 뒤 반송이 필요할 때만 보여요.</div>";
        if (addrs.length) h += addrs.map(function (a) { return "<label class='opt" + (S.addrMode === "saved" && S.addrId === a.address_id ? " on" : "") + "' data-addr='" + esc(a.address_id) + "'><input type='radio' name='ad' " + (S.addrMode === "saved" && S.addrId === a.address_id ? "checked" : "") + " /><b>" + esc(a.label || "배송지") + "</b>" + (a.is_default ? " (기본)" : "") + "<small>" + esc(a.recipient_name) + " · " + esc(a.recipient_phone) + "<br>(" + esc(a.zip) + ") " + esc(a.address1) + " " + esc(a.address2) + "</small></label>"; }).join("") + "<label class='opt" + (S.addrMode === "new" ? " on" : "") + "' data-addr='new'><input type='radio' name='ad' " + (S.addrMode === "new" ? "checked" : "") + " />새 주소 입력 (이번만 쓰거나 주소록에 저장)</label>";
        if (S.addrMode === "new") {
          h += "<div class='row'><input type='text' id='a_recipient_name' placeholder='받는 분' value=\"" + esc(S.addr.recipient_name || S.name) + "\" /><input type='tel' id='a_recipient_phone' data-fmt='phone' placeholder='연락처' value=\"" + esc(S.addr.recipient_phone || S.phone) + "\" /></div>" +
            "<div class='row' style='margin-top:8px;'><input type='text' id='a_zip' maxlength='5' placeholder='우편번호 5자리' value=\"" + esc(S.addr.zip) + "\" style='max-width:180px;' /><input type='text' id='a_address1' placeholder='주소' value=\"" + esc(S.addr.address1) + "\" /></div>" +
            "<div class='row' style='margin-top:8px;'><input type='text' id='a_address2' placeholder='상세 주소' value=\"" + esc(S.addr.address2) + "\" /><input type='text' id='a_memo' placeholder='배송 메모(선택)' value=\"" + esc(S.addr.memo) + "\" /></div>" +
            (member ? "<label class='ck'><input type='checkbox' id='fSave' " + (S.save ? "checked" : "") + " /><span>이 주소를 내 배송지 주소록에 저장할게요 (선택). 저장하지 않으면 이번 접수에만 쓰여요.</span></label>" : "<div class='meta'>로그인하면 주소를 저장해 다음에 바로 고를 수 있어요.</div>");
        }
      }
      var last = needAddr() ? 5 : 4;
      if (S.step === last) {
        h += "<h3>접수 내용 확인</h3><div class='box'><b>" + esc(METHODS[S.method]) + "</b><br>" + esc(S.name) + " · " + esc(S.phone) + "<br>" + esc((S.brand + " " + S.model).trim()) + (S.category ? " · " + esc(S.category) : "") + "<br><span style='white-space:pre-wrap;'>" + esc(S.symptom || "증상 입력 없음") + "</span></div>" +
          (s.sample ? "<div class='box warn'><b>시범 운영 중이에요.</b> 알도사 담당자가 확인한 뒤 직접 연락드려요. 부족한 점이 있더라도 너그럽게 양해해 주세요.</div>" : "") + (S.method === "courier" ? (S.ship === "self" ? "<div class='box'><b>직접 발송</b>이에요. 접수가 끝나면 보내실 곳을 안내해 드려요. 왕복 물류비는 없고, 수리 후 반송 방법과 비용은 업체가 안내해요.</div>" : "<div class='box'><b>알도사 택배 연계</b> · 왕복 물류비 <b>" + money(s.round_trip_fee) + "</b>은 접수 다음 단계에서 결제해요.</div>") : "") +
          "<label class='ck'><input type='checkbox' id='fAgree' " + (S.agree ? "checked" : "") + " /><span><b>서비스 이용에 따른 개인정보 활용</b>에 동의합니다. (이름·연락처·제품·주소는 접수 처리와 안내 문자 발송, 업체 전달에 쓰여요" + (s.sample ? ". 시범 운영 중이라 알도사가 직접 연락드릴 수 있어요" : "") + ")</span></label><input type='text' id='fWeb' tabindex='-1' autocomplete='off' style='position:absolute;left:-9999px;' aria-hidden='true' />";
      }
      h += "<div class='err' id='aErr'>" + esc(S.err) + "</div><div class='nav'>" + (S.step > 1 ? "<button class='btn' data-n='back'>이전</button>" : "") + "<button class='btn pri' data-n='next'" + (S.busy ? " disabled" : "") + ">" + (S.step === last ? "접수하기" : "다음") + "</button></div>";
      ROOT.innerHTML = h;
    }
    function drawPay(h) {
      var r = S.result;
      ROOT.innerHTML = h + "<div class='box'><b>접수가 만들어졌어요 (" + esc(r.store_req_id) + ")</b><br>택배 접수는 왕복 물류비 <b>" + money(r.need_payment.amount) + "</b>을 결제하면 확정돼요. 결제 후에 보내실 곳을 안내해 드려요.</div><div class='nav'><button class='btn pri' data-n='pay'>물류비 결제하기</button></div><div class='err' id='aErr'>" + esc(S.err) + "</div><div class='meta'>결제하지 않으면 접수는 확정되지 않아요. 나중에 접수 현황 링크에서 이어서 결제할 수 있어요.</div>";
    }
    function validate() {
      var s = data.store;
      if (S.step === 1) { if (!S.method) return "접수 방식을 골라 주세요."; }
      if (S.step === 2) { if (S.name.trim().length < 2) return "이름을 2글자 이상 입력해 주세요."; if (!validMobile(S.phone)) return "휴대폰 번호(010-0000-0000)를 입력해 주세요."; if (V.required && !V.token) return "휴대폰 인증을 완료해 주세요."; }
      if (S.step === 3) { if (!S.brand.trim()) return "브랜드를 입력해 주세요."; }
      if (S.step === 4 && needAddr()) {
        if (S.addrMode === "saved") { if (!S.addrId) return "반송 받을 주소를 골라 주세요."; }
        else { var a = S.addr; if (a.recipient_name.trim().length < 2) return "받는 분 이름을 입력해 주세요."; if (!validMobile(a.recipient_phone) && String(a.recipient_phone).replace(/[^0-9]/g, "").length < 9) return "받는 분 연락처를 입력해 주세요."; if (String(a.zip).replace(/[^0-9]/g, "").length !== 5) return "우편번호 5자리를 입력해 주세요."; if (!a.address1.trim()) return "주소를 입력해 주세요."; }
      }
      if (S.step === (needAddr() ? 5 : 4) && !S.agree) return "개인정보 활용에 동의해 주세요.";
      return "";
    }
    function submit() {
      S.busy = true; S.err = ""; draw();
      var p = Object.assign({ slug: slug, method: S.method, name: S.name, phone: S.phone, brand: S.brand, model: S.model, category: S.category, symptom: S.symptom, agree: true, website: ($("#fWeb") || {}).value || "", verification_token: V.token }, mcred());
      if (needAddr()) { if (S.addrMode === "saved") p.address_id = S.addrId; else { p.address = S.addr; p.save_address = !!S.save; } p.ship_mode = S.ship === "self" ? "self" : "aldosa"; }
      api("storeCreateRequest", p).then(function (r) {
        S.busy = false;
        if (!r.success) { S.err = r.message || "접수하지 못했습니다."; if (r.need_verification) { V.token = ""; V.sent = false; S.step = 2; } draw(); return; }
        S.result = r; V.token = "";
        if (r.need_payment) { draw(); return; }
        go(link("/s/status", "id=" + r.store_req_id + "&k=" + r.access_key));
      }).catch(function () { S.busy = false; S.err = "네트워크 오류가 발생했습니다."; draw(); });
    }
    function pay() {
      var r = S.result; S.err = ""; var btn = $("[data-n='pay']"); if (btn) btn.disabled = true;
      api("storeStartFeePayment", { store_req_id: r.store_req_id, k: r.access_key }).then(function (o) {
        if (!o.success) { S.err = o.message || "결제를 시작하지 못했습니다."; drawPay(""); return; }
        return startPortone(o).then(function (res) {
          if (res && res.code) { S.err = res.message || "결제가 취소되었거나 실패했습니다."; if (btn) btn.disabled = false; drawPay(""); return; }
          return api("verifyPortonePayment", { payment_id: o.payment_id }).then(function () { go(link("/s/status", "id=" + r.store_req_id + "&k=" + r.access_key + "&paid=1")); });
        });
      }).catch(function () { S.err = "결제 중 오류가 발생했습니다."; if (btn) btn.disabled = false; drawPay(""); });
    }
    ROOT.addEventListener("click", function (e) {
      var m = e.target.closest ? e.target.closest("[data-m]") : null; if (m) { S.method = m.getAttribute("data-m"); draw(); return; }
      var sh = e.target.closest ? e.target.closest("[data-ship]") : null; if (sh) { S.ship = sh.getAttribute("data-ship"); draw(); return; }
      var ad = e.target.closest ? e.target.closest("[data-addr]") : null; if (ad) { collect(); var v = ad.getAttribute("data-addr"); if (v === "new") S.addrMode = "new"; else { S.addrMode = "saved"; S.addrId = v; } draw(); return; }
      var n = e.target.closest ? e.target.closest("[data-n]") : null; if (!n) return;
      var a = n.getAttribute("data-n");
      if (a === "pay") { pay(); return; }
      collect();
      if (a === "back") { S.err = ""; S.step -= 1; draw(); return; }
      var er = validate(); if (er) { S.err = er; draw(); return; }
      S.err = ""; var last = needAddr() ? 5 : 4;
      if (S.step === last) { submit(); return; }
      S.step += 1; if (S.step === 4 && S.method !== "courier") S.step = 4; draw();
    });
  }

  // 포트원 결제창 — SDK를 불러와 결제를 요청한다. 설정이 비어 있으면 안내만 한다
  function startPortone(o) {
    return new Promise(function (resolve, reject) {
      if (!PORTONE.storeId || !PORTONE.channelKey) { resolve({ code: "NO_CONFIG", message: "결제 설정이 아직 연결되지 않았어요. 잠시 후 다시 시도하거나 알도사에 문의해 주세요." }); return; }
      function run() {
        window.PortOne.requestPayment({ storeId: PORTONE.storeId, channelKey: PORTONE.channelKey, paymentId: o.payment_id, orderName: o.order_name, totalAmount: o.amount, currency: "CURRENCY_KRW", payMethod: "CARD",
          customer: { fullName: o.buyer.name, phoneNumber: String(o.buyer.phone).replace(/[^0-9]/g, "") }, redirectUrl: window.location.origin + "/s/status?id=" + encodeURIComponent(o.order_id) }).then(resolve, reject);
      }
      if (window.PortOne) { run(); return; }
      var sc = document.createElement("script"); sc.src = "https://cdn.portone.io/v2/browser-sdk.js"; sc.onload = run; sc.onerror = function () { reject(new Error("sdk")); }; document.head.appendChild(sc);
    });
  }

  // ═══ 접수·문의 현황 (/s/status?id=&k= / ?inq=&k=) ═══
  function pageStatus() {
    var S = { phone: "", err: "" }, reqData = null;
    function auth() { var a = { k: P.k || "" }; if (S.phone) a.phone = S.phone; Object.assign(a, mcred()); return a; }
    function load() {
      if (P.inq) { api("storeGetInquiry", Object.assign({ inquiry_id: P.inq }, auth())).then(function (r) { drawInquiry(r); }); return; }
      if (!P.id) { drawLookup(); return; }
      api("storeGetRequest", Object.assign({ store_req_id: P.id }, auth())).then(function (r) { if (!r.success) { S.err = r.message; drawLookup(); return; } reqData = r.request; draw(); });
    }
    function drawLookup() {
      ROOT.innerHTML = "<h1>접수 현황 확인</h1><div class='sub'>문자로 받은 링크를 열거나, 접수번호와 휴대폰 번호를 입력해 주세요.</div><label class='l'>접수번호</label><input type='text' id='lId' value=\"" + esc(P.id || "") + "\" placeholder='SR000001' /><label class='l'>휴대폰 번호</label><input type='tel' id='lPhone' data-fmt='phone' placeholder='010-0000-0000' /><div class='nav'><button class='btn pri' data-st='lookup'>확인</button></div><div class='err'>" + esc(S.err) + "</div>";
    }
    function drawInquiry(r) {
      if (!r.success) { ROOT.innerHTML = "<h1>문의를 확인할 수 없어요</h1><div class='sub'>" + esc(r.message || "") + "</div>"; return; }
      var q = r.inquiry; ROOT.innerHTML = "<h1>내 문의</h1><div class='sub'>" + esc(q.store_name) + " · " + esc(q.kind || "문의") + " · " + esc(q.status) + "</div><div class='box' style='white-space:pre-wrap;'>" + esc(q.message) + "</div>" + (q.answer ? "<h3>업체 답변</h3><div class='box ok' style='white-space:pre-wrap;'>" + esc(q.answer) + "</div>" : "<div class='box'>아직 답변이 없어요. 답변이 등록되면 문자로 알려 드려요.</div>");
    }
    function draw() {
      var r = reqData, flow = r.method === "courier" ? (r.ship_mode === "self" ? ["접수", "확인", "입고"] : ["결제", "접수", "확인", "입고"]) : ["접수", "일정 제안", "일정 확정", "입고"];
      var self = r.method === "courier" && r.ship_mode === "self", idx = self ? { "신규": 0, "확인": 1, "입고완료": 2 }[r.status] : { "결제대기": 0, "신규": r.method === "courier" ? 1 : 0, "확인": 2, "일정제안": 1, "일정확정": 2, "입고완료": 3 }[r.status];
      var h = "<h1>접수 현황</h1><div class='sub'>" + esc(r.store_name) + " · " + esc(r.store_req_id) + "</div>";
      if (["반려", "고객취소"].indexOf(r.status) >= 0) h += "<div class='box warn'><b>" + esc(r.status) + "</b>" + (r.reject_reason ? "<br>사유: " + esc(r.reject_reason) : "") + (r.refund_status === "환불완료" ? "<br>결제하신 물류비는 환불되었어요." : r.refund_status === "환불필요" ? "<br>결제하신 물류비는 별도로 환불 처리돼요. 문의가 필요하면 알도사에 알려 주세요." : "") + "</div>";
      else { if (r.sample) h += "<div class='box warn'><b>시범 운영 중에 접수하셨어요.</b><br>알도사 담당자가 확인한 뒤 직접 연락드려요. 부족한 점이 있더라도 너그럽게 양해해 주세요.</div>"; h += "<div class='tl'>" + flow.map(function (f, i) { return "<span class='" + (i <= idx ? "on" : "") + "'>" + f + "</span>"; }).join("") + "</div><div class='box'><b>현재 상태: " + esc(r.status) + "</b></div>"; }
      h += "<div class='card'><div><b>" + esc((r.brand + " " + r.model).trim()) + "</b>" + (r.category ? " <span class='chip tag'>" + esc(r.category) + "</span>" : "") + "</div><div class='meta' style='white-space:pre-wrap;'>" + esc(r.symptom || "증상 입력 없음") + "</div><div class='meta'>" + esc({ courier: "택배 접수", visit: "출장 접수", walkin: "내방 접수" }[r.method]) + (r.method === "courier" ? (r.ship_mode === "self" ? " · 직접 발송(물류비 없음)" : " · 알도사 택배 연계" + (r.fee_amount ? " · 왕복 물류비 " + money(r.fee_amount) : "")) : "") + "</div></div>";
      if (r.status === "결제대기") h += "<div class='box warn'>물류비 결제가 끝나지 않았어요. 결제하면 접수가 확정돼요.</div><button class='btn pri' data-st='pay'>물류비 결제하기</button>";
      if (r.status === "일정제안") h += "<h3>방문 일정을 골라 주세요</h3>" + r.proposals.map(function (p, i) { return "<button class='btn' style='display:block;width:100%;margin-bottom:8px;' data-st='pick' data-i='" + i + "'>" + esc(p) + "</button>"; }).join("");
      if (r.confirmed_schedule) h += "<div class='box ok'>확정된 일정: <b>" + esc(r.confirmed_schedule) + "</b></div>";
      if (r.tracking_no) h += "<div class='box'>송장번호: " + esc(r.tracking_no) + "</div>";
      if (r.inbound) h += "<h3>보내실 곳</h3><div class='box'><b>" + esc(r.inbound.name) + "</b>" + (r.inbound.phone ? " · " + esc(r.inbound.phone) : "") + "<br>(" + esc(r.inbound.zip) + ") " + esc(r.inbound.address) + (r.inbound.hours ? "<br>수령 가능 시간: " + esc(r.inbound.hours) : "") + "<br><button class='btn sm' style='margin-top:8px;' data-st='copy'>주소 복사</button>" + (r.inbound.contact ? "<br><span class='meta'>접수 후 문의: " + esc(r.inbound.contact) + "</span>" : "") + "</div><div class='meta'>제품을 보내실 때 접수번호(" + esc(r.store_req_id) + ")를 함께 적어 주세요.</div>";
      if (r.as_request_id) h += "<div class='box ok'>제품이 입고되었어요. 이후 진행 상황은 알도사 마이페이지에서 확인할 수 있어요.</div>";
      if (["결제대기", "신규", "확인", "일정제안", "일정확정"].indexOf(r.status) >= 0) h += "<div style='margin-top:22px;'><button class='btn sm' data-st='cancel'>접수 취소</button><div class='meta'>입고 전에는 취소할 수 있어요." + (r.ship_mode === "self" ? "" : " 결제한 물류비는 전액 환불돼요.") + "</div></div>";
      h += "<div class='err' id='stErr'></div>"; ROOT.innerHTML = h;
    }
    ROOT.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-st]") : null; if (!b) return;
      var a = b.getAttribute("data-st"), er = $("#stErr");
      if (a === "lookup") { P.id = $("#lId").value.trim(); S.phone = $("#lPhone").value; S.err = ""; load(); return; }
      if (a === "pick") { api("storeConfirmSchedule", Object.assign({ store_req_id: reqData.store_req_id, index: b.getAttribute("data-i") }, auth())).then(function (r) { if (!r.success) { er.textContent = r.message; return; } load(); }); return; }
      if (a === "cancel") { if (!confirm("접수를 취소할까요? 입고 전 취소는 결제한 물류비가 전액 환불돼요.")) return; api("storeCancelRequest", Object.assign({ store_req_id: reqData.store_req_id }, auth())).then(function (r) { if (!r.success) { er.textContent = r.message; return; } load(); }); return; }
      if (a === "copy") { var t = reqData.inbound; var txt = (t.name || "") + " " + (t.phone || "") + " (" + t.zip + ") " + t.address; if (navigator.clipboard) navigator.clipboard.writeText(txt); b.textContent = "복사했어요"; return; }
      if (a === "pay") { api("storeStartFeePayment", Object.assign({ store_req_id: reqData.store_req_id }, auth())).then(function (o) { if (!o.success) { er.textContent = o.message; return; } startPortone(o).then(function (res) { if (res && res.code) { er.textContent = res.message || "결제가 취소되었거나 실패했습니다."; return; } api("verifyPortonePayment", { payment_id: o.payment_id }).then(load); }); }); }
    });
    ROOT.innerHTML = "<div class='empty'>불러오는 중...</div>"; load();
  }

  // ═══ 배송지 관리 (/my/addresses) ═══
  function pageAddresses() {
    var list = [], max = 5, edit = null, err = "";
    function need() { ROOT.innerHTML = "<h1>배송지 관리</h1><div class='box'>로그인한 뒤에 이용할 수 있어요.</div><a class='btn pri' href='/login'>로그인</a>"; }
    if (!member) { need(); return; }
    function load() { api("memberGetAddresses", mcred()).then(function (r) { if (!r.success) { ROOT.innerHTML = "<h1>배송지 관리</h1><div class='box warn'>" + esc(r.message) + "</div>"; return; } list = r.addresses; max = r.max; draw(); }); }
    function form(a) {
      a = a || { recipient_name: member.name || "", recipient_phone: member.phone || "", zip: "", address1: "", address2: "", memo: "", label: "", address_id: "", is_default: false };
      return "<div class='card' data-form='" + esc(a.address_id) + "'><div class='row'><input type='text' class='f' data-k='label' maxlength='20' placeholder='이름표(예: 집, 회사)' value=\"" + esc(a.label) + "\" /><input type='text' class='f' data-k='recipient_name' maxlength='30' placeholder='받는 분' value=\"" + esc(a.recipient_name) + "\" /><input type='tel' class='f' data-k='recipient_phone' data-fmt='phone' placeholder='연락처' value=\"" + esc(a.recipient_phone) + "\" /></div>" +
        "<div class='row' style='margin-top:8px;'><input type='text' class='f' data-k='zip' maxlength='5' placeholder='우편번호' value=\"" + esc(a.zip) + "\" style='max-width:160px;' /><input type='text' class='f' data-k='address1' placeholder='주소' value=\"" + esc(a.address1) + "\" /></div><div class='row' style='margin-top:8px;'><input type='text' class='f' data-k='address2' placeholder='상세 주소' value=\"" + esc(a.address2) + "\" /><input type='text' class='f' data-k='memo' maxlength='100' placeholder='배송 메모(선택)' value=\"" + esc(a.memo) + "\" /></div>" +
        "<label class='ck'><input type='checkbox' class='f' data-k='is_default' " + (a.is_default ? "checked" : "") + " /><span>기본 배송지로 설정</span></label><div class='row'><button class='btn pri sm' data-ad='save'>저장</button><button class='btn sm' data-ad='cancel'>취소</button></div></div>";
    }
    function draw() {
      var h = "<h1>배송지 관리</h1><div class='sub'>수리 후 반송이나 택배 수령에 쓰는 주소예요. 최대 " + max + "개까지 저장할 수 있어요.</div>";
      h += list.map(function (a) {
        if (edit === a.address_id) return form(a);
        return "<div class='card' data-id='" + esc(a.address_id) + "'><b>" + esc(a.label || "배송지") + "</b>" + (a.is_default ? " <span class='chip tag'>기본</span>" : "") + "<div class='meta'>" + esc(a.recipient_name) + " · " + esc(a.recipient_phone) + "<br>(" + esc(a.zip) + ") " + esc(a.address1) + " " + esc(a.address2) + (a.memo ? "<br>메모: " + esc(a.memo) : "") + "</div><div class='row' style='margin-top:10px;'>" + (a.is_default ? "" : "<button class='btn sm' data-ad='default'>기본으로</button>") + "<button class='btn sm' data-ad='edit'>수정</button><button class='btn sm' data-ad='del'>삭제</button></div></div>";
      }).join("") || "<div class='empty'>저장된 배송지가 없어요.</div>";
      if (edit === "new") h += form(null); else if (list.length < max) h += "<button class='btn pri' data-ad='new'>+ 배송지 추가</button>";
      h += "<div class='err'>" + esc(err) + "</div><div class='meta' style='margin-top:18px;'>※ 배송지는 회원 탈퇴 시 삭제돼요. 접수에 쓴 주소는 접수 기록에 따로 보관되어, 주소록을 고치거나 지워도 이미 접수한 건은 바뀌지 않아요.</div>";
      ROOT.innerHTML = h;
    }
    ROOT.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-ad]") : null; if (!b) return;
      var a = b.getAttribute("data-ad"), card = b.closest("[data-id], [data-form]"), id = card ? (card.getAttribute("data-id") || card.getAttribute("data-form")) : "";
      err = "";
      if (a === "new") { edit = "new"; draw(); return; }
      if (a === "cancel") { edit = null; draw(); return; }
      if (a === "edit") { edit = id; draw(); return; }
      if (a === "default") { api("memberSetDefaultAddress", Object.assign({ address_id: id }, mcred())).then(function (r) { if (r.success) { list = r.addresses; } else err = r.message; draw(); }); return; }
      if (a === "del") { if (!confirm("이 배송지를 삭제할까요?")) return; api("memberDeleteAddress", Object.assign({ address_id: id }, mcred())).then(function (r) { if (r.success) list = r.addresses; else err = r.message; draw(); }); return; }
      if (a === "save") {
        var p = Object.assign({ address_id: edit === "new" ? "" : edit }, mcred());
        Array.prototype.forEach.call(card.querySelectorAll(".f"), function (f) { p[f.getAttribute("data-k")] = f.type === "checkbox" ? f.checked : f.value; });
        api("memberSaveAddress", p).then(function (r) { if (r.success) { list = r.addresses; edit = null; } else err = r.message; draw(); });
      }
    });
    ROOT.innerHTML = "<div class='empty'>불러오는 중...</div>"; load();
  }

  // ═══ 스토어 접수 내역 (/my/store-requests) ═══
  function pageMyRequests() {
    if (!member) { ROOT.innerHTML = "<h1>스토어 접수 내역</h1><div class='box'>로그인한 뒤에 이용할 수 있어요.</div><a class='btn pri' href='/login'>로그인</a>"; return; }
    ROOT.innerHTML = "<div class='empty'>불러오는 중...</div>";
    api("storeGetMyRequests", mcred()).then(function (r) {
      if (!r.success) { ROOT.innerHTML = "<h1>스토어 접수 내역</h1><div class='box warn'>" + esc(r.message) + "</div>"; return; }
      ROOT.innerHTML = "<h1>스토어 접수 내역</h1><div class='sub'>업체에 접수한 내역이에요.</div>" + (r.requests.map(function (q) {
        return "<div class='card'><a class='name' href='" + esc(link("/s/status", "id=" + q.store_req_id + "&k=" + q.access_key)) + "'>" + esc(q.store_name) + "</a><div class='meta'>" + esc((q.brand + " " + q.model).trim()) + " · " + esc({ courier: "택배", visit: "출장", walkin: "내방" }[q.method]) + " · <b>" + esc(q.status) + "</b> · " + esc(String(q.created_at).slice(0, 10)) + "</div></div>";
      }).join("") || "<div class='empty'>접수 내역이 없어요.</div>") + "<a class='btn' href='" + esc(link("/services")) + "'>서비스 찾기</a>";
    });
  }

  var path = window.location.pathname.replace(/\/+$/, "");
  var page = ROOT.getAttribute("data-page") || ({ "/services": "services", "/s": "store", "/s/apply": "apply", "/s/status": "status", "/my/addresses": "addresses", "/my/store-requests": "requests" }[path] || "services");
  // 대표 주소(/)에서 열릴 때: 제품 QR·AS 코드 링크(?code= 등)로 들어온 사람은 제품 등록 안내 페이지(/qr)로 그대로 넘긴다
  if (page === "home" && (P.code || P.token || P.claim)) { var dest = "/qr" + window.location.search; if (typeof window.ALDOSA_NAV === "function") window.ALDOSA_NAV(dest); else window.location.replace(dest); return; }
  ({ services: pageServices, home: pageServices, store: pageStore, apply: pageApply, status: pageStatus, addresses: pageAddresses, requests: pageMyRequests }[page] || pageServices)();
})();