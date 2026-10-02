(function () {
// ── biz-app 마크업·스타일 주입 (admin.js와 동일한 패턴: Framer엔 빈 div만 남기고 전부 git biz.js로 관리, 2026-10-02) ──
var styleEl_biz_app = document.createElement('style');
styleEl_biz_app.textContent = "/* /biz 전용 — Framer 전역 커스텀코드가 삽입하는 고객용 헤더(#aldosa-global-header)는 기업 관리자 화면에 맞지 않으므로 이 페이지에서만 숨김 */\n#aldosa-global-header { display:none !important; }\n\n#biz-app {\n--biz-brown:#2B2420; --biz-gold:#C9A84C; --biz-sage:#7fae94;\n--biz-bg:#F6F5F3; --biz-muted:#8a8478; --biz-muted2:#a49c8c; --biz-border:#ECEAE5;\n--biz-red:#C4463A; --biz-red-bg:#FBEDEB; --biz-green:#4C6B3F; --biz-green-bg:#EEF3EA;\nfont-family: -apple-system, \"Pretendard\", \"Helvetica Neue\", Arial, sans-serif;\nbackground:var(--biz-bg); color:#1a1a1a; min-height:100vh;\n}\n#biz-app * { box-sizing: border-box; }\n#biz-app .biz-view { min-height:100vh; }\n#biz-app .biz-card { max-width:400px; margin:0 auto; padding:60px 32px; display:flex; flex-direction:column; gap:14px; }\n#biz-app .biz-logo { font-size:22px; font-weight:700; letter-spacing:0.5px; color:var(--biz-brown); text-align:center; }\n#biz-app .biz-logo span { color:var(--biz-gold); }\n#biz-app .biz-sub { font-size:13px; color:#666; text-align:center; margin-bottom:10px; line-height:1.5; }\n#biz-app .biz-field { margin-bottom:14px; }\n#biz-app .biz-field label { display:block; font-size:12px; color:#555; margin-bottom:6px; }\n#biz-app .biz-field input, #biz-app .biz-field select, #biz-app .biz-field textarea {\nwidth:100%; box-sizing:border-box; padding:11px 12px; border:1px solid #ddd; border-radius:6px; font-size:14px; font-family:inherit;\n}\n#biz-app .biz-field input:focus, #biz-app .biz-field select:focus, #biz-app .biz-field textarea:focus { outline:none; border-color:var(--biz-gold); }\n#biz-app .biz-btn-primary { background:var(--biz-brown); color:#fff; border:none; padding:13px; border-radius:6px; font-size:14px; font-weight:600; cursor:pointer; margin-top:6px; }\n#biz-app .biz-btn-primary:hover { background:#3d332c; }\n#biz-app .biz-btn-primary.biz-btn-inline { padding:10px 18px; margin-top:0; }\n#biz-app .biz-btn-secondary { background:#fff; color:var(--biz-brown); border:1px solid var(--biz-brown); padding:11px 16px; border-radius:6px; font-size:13.5px; font-weight:600; cursor:pointer; margin-top:10px; }\n#biz-app .biz-btn-secondary:hover { background:#f5f3ef; }\n#biz-app .biz-error { color:#c0392b; font-size:12.5px; text-align:center; }\n\n/* 상단바 */\n#biz-app .biz-topbar { display:flex; justify-content:space-between; align-items:center; padding:14px 28px; background:#fff; border-bottom:1px solid var(--biz-border); }\n#biz-app .biz-topbar-logo { font-weight:700; letter-spacing:1.5px; font-size:15px; color:var(--biz-brown); }\n#biz-app .biz-topbar-logo span { color:var(--biz-gold); }\n#biz-app .biz-topbar-right { display:flex; align-items:center; gap:16px; }\n#biz-app .biz-org-info { display:flex; align-items:center; gap:9px; }\n#biz-app .biz-org-name { font-size:13.5px; font-weight:700; color:#1a1a1a; }\n#biz-app .biz-plan-chip { font-size:11px; font-weight:700; background:var(--biz-gold); color:var(--biz-brown); padding:3px 10px; border-radius:10px; }\n#biz-app .biz-plan-chip-lg { font-size:15px; padding:8px 18px; border-radius:16px; }\n#biz-app .biz-logout-link { color:#999; text-decoration:none; cursor:pointer; font-size:12.5px; }\n#biz-app .biz-logout-link:hover { color:var(--biz-brown); }\n\n/* 레이아웃 셸 */\n#biz-app .biz-shell { display:flex; align-items:stretch; position:relative; min-height:calc(100vh - 53px); }\n\n/* 아이콘 레일 */\n#biz-app .biz-rail { width:74px; background:#FAF9F7; border-right:1px solid var(--biz-border); display:flex; flex-direction:column; align-items:center; padding:18px 0; flex-shrink:0; }\n#biz-app .biz-rail-item { width:52px; display:flex; flex-direction:column; align-items:center; gap:5px; padding:10px 0; border-radius:10px; cursor:pointer; color:#9a9186; margin-bottom:4px; }\n#biz-app .biz-rail-item svg { stroke:#9a9186; }\n#biz-app .biz-rail-item:hover { background:#F1EFEA; color:#5c554c; }\n#biz-app .biz-rail-item:hover svg { stroke:#5c554c; }\n#biz-app .biz-rail-item.active { background:#EFECE8; color:var(--biz-brown); }\n#biz-app .biz-rail-item.active svg { stroke:var(--biz-brown); }\n#biz-app .biz-ri-label { font-size:9.5px; font-weight:600; }\n#biz-app .biz-rail-customer.active { background:#FBF3E1; color:#a7801f; }\n#biz-app .biz-rail-customer.active svg { stroke:#a7801f; }\n#biz-app .biz-rail-insight.active { background:#EAEFF5; color:#4d6a8c; }\n#biz-app .biz-rail-insight.active svg { stroke:#4d6a8c; }\n#biz-app .biz-rail-platform.active { background:#E9F2ED; color:#3f7057; }\n#biz-app .biz-rail-platform.active svg { stroke:#3f7057; }\n\n/* 플라이아웃 */\n#biz-app .biz-subnav { background:#fff; border-bottom:1px solid var(--biz-border); padding:10px 28px; display:flex; flex-wrap:wrap; column-gap:26px; row-gap:8px; align-items:center; }\n#biz-app .biz-subnav[hidden] { display:none; }\n#biz-app .biz-subnav-group { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }\n#biz-app .biz-subnav-glabel { font-size:11px; color:var(--biz-muted2); font-weight:700; letter-spacing:.3px; margin-right:2px; }\n#biz-app .biz-subnav-item { padding:6px 13px; border-radius:16px; font-size:12.5px; cursor:pointer; color:#1a1a1a; white-space:nowrap; }\n#biz-app .biz-subnav-item:hover { background:#FAF8F5; }\n#biz-app .biz-subnav-item.biz-active { background:#F4EFE2; font-weight:700; color:#8a6a1f; }\n#biz-app .biz-subnav-item.biz-active.biz-insight-active { background:#EAEFF5; color:#4d6a8c; }\n#biz-app .biz-subnav-item.biz-active.biz-platform-active { background:#EAF3EE; color:#3f7057; }\n\n/* 메인 컨텐츠 */\n#biz-app .biz-main { flex:1; min-width:0; }\n#biz-app .biz-mainbar { background:#fff; border-bottom:1px solid var(--biz-border); padding:16px 28px; }\n#biz-app .biz-crumb { font-size:12px; color:var(--biz-muted); margin-bottom:4px; }\n#biz-app .biz-page-title { font-size:19px; font-weight:700; color:var(--biz-brown); }\n#biz-app .biz-content { padding:24px 28px 40px; }\n#biz-app .biz-screen[hidden] { display:none; }\n\n#biz-app .biz-section-label { font-size:13px; color:var(--biz-muted); margin:0 0 12px; font-weight:600; }\n#biz-app .biz-section-label:not(:first-child) { margin-top:28px; }\n\n#biz-app .biz-stat-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }\n#biz-app .biz-stat-card { background:#fff; border:1px solid var(--biz-border); border-radius:12px; padding:20px; box-shadow:0 1px 4px rgba(0,0,0,0.06); }\n#biz-app .biz-stat-card.biz-clickable { cursor:pointer; transition:box-shadow .15s, transform .15s; }\n#biz-app .biz-stat-card.biz-clickable:hover { box-shadow:0 3px 10px rgba(0,0,0,0.10); transform:translateY(-1px); }\n#biz-app .biz-icon-badge { width:32px; height:32px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:15px; margin-bottom:14px; }\n#biz-app .biz-badge-gold { background:#FBF3E1; color:#a7801f; }\n#biz-app .biz-badge-sage { background:#E9F2ED; color:#3f7057; }\n#biz-app .biz-badge-brown { background:#EFECE8; color:var(--biz-brown); }\n#biz-app .biz-badge-red { background:var(--biz-red-bg); color:var(--biz-red); }\n#biz-app .biz-channel-chip { font-size:10px; font-weight:600; padding:2px 8px; border-radius:10px; display:inline-block; white-space:nowrap; }\n#biz-app .biz-channel-online { background:#E9F2ED; color:#3f7057; }\n#biz-app .biz-channel-store { background:#EFECE8; color:var(--biz-brown); }\n#biz-app .biz-filter-btn.biz-filter-active { background:var(--biz-gold); border-color:var(--biz-gold); color:#fff; }\n#biz-app .biz-stat-label { font-size:12.5px; color:var(--biz-muted); }\n#biz-app .biz-stat-value { font-size:26px; font-weight:700; margin-top:4px; }\n\n#biz-app .biz-mini-stats { display:grid; grid-template-columns:repeat(4,1fr); background:#fff; border:1px solid var(--biz-border); border-radius:12px; box-shadow:0 1px 4px rgba(0,0,0,0.06); overflow:hidden; }\n#biz-app .biz-mini-stat { padding:16px 20px; border-right:1px solid var(--biz-border); border-top:1px solid transparent; }\n#biz-app .biz-mini-stat.biz-clickable { cursor:pointer; }\n#biz-app .biz-mini-stat.biz-clickable:hover { background:#FAF9F7; }\n#biz-app .biz-mini-stat:nth-child(4n) { border-right:none; }\n#biz-app .biz-mini-stat:nth-child(n+5) { border-top-color:var(--biz-border); }\n#biz-app .biz-ms-sub { font-size:11px; color:var(--biz-muted); margin-top:4px; min-height:14px; }\n#biz-app .biz-notice-item { border-top:1px solid var(--biz-border); }\n#biz-app .biz-notice-item:first-child { border-top:none; }\n#biz-app .biz-notice-head { display:flex; justify-content:space-between; align-items:center; gap:12px; padding:9px 0; cursor:pointer; font-size:13px; }\n#biz-app .biz-notice-head:hover .biz-notice-title { text-decoration:underline; }\n#biz-app .biz-notice-title { flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }\n#biz-app .biz-notice-date { flex-shrink:0; font-size:11.5px; color:var(--biz-muted); }\n#biz-app .biz-notice-body { font-size:12.5px; color:#555; line-height:1.6; white-space:pre-line; padding:0 0 12px; }\n#biz-app .biz-ms-label { font-size:12px; color:var(--biz-muted); margin-bottom:5px; }\n#biz-app .biz-ms-value { font-size:19px; font-weight:700; }\n\n#biz-app .biz-chart-card { background:#fff; border:1px solid var(--biz-border); border-radius:12px; padding:22px; box-shadow:0 1px 4px rgba(0,0,0,0.06); }\n#biz-app .biz-chart-note { font-size:12.5px; color:var(--biz-muted); }\n\n#biz-app .biz-bar-list { display:flex; flex-direction:column; }\n#biz-app .biz-bar-row { display:flex; align-items:center; gap:12px; padding:8px 0; }\n#biz-app .biz-bar-label { width:90px; flex-shrink:0; font-size:12.5px; color:var(--biz-muted); }\n#biz-app .biz-bar-track { flex:1; height:20px; background:#F1EFEA; border-radius:6px; overflow:hidden; }\n#biz-app .biz-bar-fill { height:100%; background:var(--biz-brown); border-radius:6px; transition:width .3s; }\n#biz-app .biz-bar-count { width:54px; text-align:right; font-size:12.5px; font-weight:700; color:#1a1a1a; flex-shrink:0; }\n\n#biz-app .biz-feed-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }\n#biz-app .biz-feed-card { background:#fff; border:1px solid var(--biz-border); border-radius:12px; padding:20px 22px; box-shadow:0 1px 4px rgba(0,0,0,0.06); }\n#biz-app .biz-feed-head { font-weight:700; font-size:14.5px; margin-bottom:10px; }\n#biz-app .biz-feed-empty { font-size:12.5px; color:var(--biz-muted); padding:8px 0; }\n\n#biz-app .biz-panel { margin-bottom:16px; background:#fff; border:1px solid var(--biz-border); border-radius:12px; padding:20px; box-shadow:0 1px 4px rgba(0,0,0,0.06); }\n#biz-app .biz-panel-title { font-size:14.5px; font-weight:700; margin-bottom:12px; color:var(--biz-brown); }\n#biz-app .biz-panel-note { font-size:11.5px; color:var(--biz-muted); margin-top:8px; }\n\n#biz-app .biz-stat-row { display:flex; gap:16px; flex-wrap:wrap; margin-bottom:16px; }\n#biz-app .biz-stat-box { flex:1; min-width:140px; background:#faf9f7; border:1px solid var(--biz-border); border-radius:8px; padding:14px 16px; }\n#biz-app .biz-sb-label { font-size:11.5px; color:var(--biz-muted); margin-bottom:6px; }\n#biz-app .biz-sb-value { font-size:17px; font-weight:700; color:var(--biz-brown); }\n\n#biz-app .biz-table { width:100%; border-collapse:collapse; font-size:13px; }\n#biz-app .biz-table th { text-align:left; color:var(--biz-muted); font-weight:500; padding:8px 6px; border-bottom:1px solid #eee; font-size:12px; }\n#biz-app .biz-table td { padding:9px 6px; border-bottom:1px solid #f2f2f2; }\n#biz-app .biz-empty-cell { color:#999; text-align:left; padding:16px 6px; }\n\n#biz-app .biz-status-tag { display:inline-block; font-size:11.5px; padding:2px 8px; border-radius:8px; background:#eee; color:#666; }\n#biz-app .biz-status-tag.biz-status-done { background:var(--biz-green-bg); color:var(--biz-green); }\n\n#biz-app .biz-shipment-actions { display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-top:16px; }\n#biz-app .biz-shipment-actions select, #biz-app .biz-shipment-actions input { padding:9px 10px; border:1px solid #ddd; border-radius:6px; font-size:13px; font-family:inherit; }\n\n#biz-app .biz-plan-grid { display:flex; gap:14px; flex-wrap:wrap; margin:14px 0 6px; }\n#biz-app .biz-plan-card { flex:1; min-width:150px; border:1px solid var(--biz-border); border-radius:8px; padding:14px; }\n#biz-app .biz-plan-card-name { font-size:13.5px; font-weight:700; color:var(--biz-brown); margin-bottom:6px; }\n#biz-app .biz-plan-card-desc { font-size:11.5px; color:var(--biz-muted); line-height:1.6; }\n\n#biz-app .biz-info-row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #f2f2f2; font-size:13.5px; }\n#biz-app .biz-info-label { color:var(--biz-muted); }\n#biz-app .biz-info-value { color:#1a1a1a; font-weight:500; }\n\n#biz-app .biz-table .biz-btn-link { background:none; border:1px solid var(--biz-brown); color:var(--biz-brown); border-radius:6px; padding:5px 12px; font-size:12px; font-weight:600; cursor:pointer; }\n#biz-app .biz-table .biz-btn-link:hover { background:#f5f3ef; }\n\n#biz-app .biz-modal-overlay { position:fixed; inset:0; background:rgba(20,17,14,0.45); z-index:200; display:flex; align-items:flex-start; justify-content:center; padding:40px 16px; overflow-y:auto; }\n#biz-app .biz-modal-overlay[hidden] { display:none; }\n#biz-app .biz-modal { background:#fff; border-radius:14px; width:100%; max-width:560px; box-shadow:0 12px 40px rgba(0,0,0,0.2); }\n#biz-app .biz-modal-head { display:flex; align-items:center; justify-content:space-between; padding:18px 22px; border-bottom:1px solid var(--biz-border); }\n#biz-app .biz-modal-title { font-size:15.5px; font-weight:700; color:var(--biz-brown); }\n#biz-app .biz-modal-close { background:none; border:none; font-size:22px; line-height:1; color:var(--biz-muted); cursor:pointer; padding:0 4px; }\n#biz-app .biz-modal-body { padding:20px 22px 26px; }\n#biz-app .biz-modal-balance { font-size:13.5px; color:#555; margin-bottom:18px; }\n#biz-app .biz-modal-balance b { color:var(--biz-brown); font-size:16px; }\n#biz-app .biz-modal-section { margin-bottom:20px; padding-bottom:18px; border-bottom:1px solid #f2f2f2; }\n#biz-app .biz-modal-section:last-child { border-bottom:none; margin-bottom:0; padding-bottom:0; }\n#biz-app .biz-modal-section-title { font-size:12.5px; font-weight:700; color:var(--biz-brown); margin-bottom:10px; }\n#biz-app .biz-field-row { display:flex; gap:8px; flex-wrap:wrap; align-items:center; }\n#biz-app .biz-field-row input, #biz-app .biz-field-row select { flex:1; min-width:100px; padding:9px 10px; border:1px solid #ddd; border-radius:6px; font-size:13px; font-family:inherit; }\n\n#biz-app .biz-modal-wide { max-width:720px; }\n#biz-app .biz-modal-meta { font-size:12.5px; color:#555; margin-bottom:18px; line-height:1.7; }\n#biz-app .biz-stage-row { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:8px; }\n#biz-app .biz-stage-btn { flex:1; min-width:90px; background:#fff; border:1px solid var(--biz-border); color:#666; padding:9px 8px; border-radius:6px; font-size:12px; font-weight:600; cursor:pointer; }\n#biz-app .biz-tag-mini { font-size:10.5px; font-weight:500; color:var(--biz-muted); background:#f2f0ec; border-radius:6px; padding:2px 7px; margin-left:6px; }\n#biz-app .biz-table .biz-btn-link.biz-btn-link-danger { border-color:var(--biz-red); color:var(--biz-red); }\n\n/* ── AS 진행 현황 · 출고 관리 인라인 테이블 (2026-09-16 정보량 매칭 / 출고관리 v2 개편) ── */\n#biz-app .biz-panel-scrollx { overflow-x:auto; }\n#biz-app .biz-table-as { min-width:980px; }\n#biz-app .biz-table-shipment { min-width:1020px; }\n#biz-app .biz-table-as td, #biz-app .biz-table-shipment td { vertical-align:top; }\n#biz-app .biz-as-reqid { font-size:10px; color:#888; white-space:nowrap; }\n#biz-app .biz-brand-name { font-size:10px; letter-spacing:.1em; color:var(--biz-gold); text-transform:uppercase; }\n#biz-app .biz-model-name { font-size:14px; margin:2px 0; }\n#biz-app .biz-as-store { font-size:13px; font-weight:700; white-space:nowrap; }\n#biz-app .biz-as-meta { font-size:11px; color:var(--biz-muted); line-height:1.6; }\n#biz-app .biz-meta-ellipsis { max-width:150px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }\n#biz-app .biz-btn-sm { padding:6px 9px; font-size:10.5px; border-radius:4px; cursor:pointer; border:none; white-space:nowrap; }\n#biz-app .biz-btn-xs { padding:5px 8px; font-size:10px; border-radius:4px; cursor:pointer; white-space:nowrap; }\n#biz-app .biz-info-icon { font-size:11px; color:var(--biz-muted); cursor:help; font-style:normal; font-weight:400; }\n#biz-app .biz-btn-dark { background:var(--biz-brown); color:#fff; }\n#biz-app .biz-btn-dark:disabled { background:#ddd8cf; color:#a49c8c; cursor:not-allowed; }\n#biz-app .biz-btn-outline { background:#fff; border:1px solid var(--biz-border); color:#1a1a1a; }\n#biz-app .biz-btn-outline-red { background:#fff; border:1px solid #FDA4AF; color:var(--biz-red); }\n#biz-app .biz-btn-outline-gold { background:#fff; border:1px solid var(--biz-gold); color:#8a6a1f; }\n#biz-app .biz-btn-disabled-sm { background:#f5f5f5; border:1px solid #eee; color:#ccc; cursor:default; }\n#biz-app .biz-stage-track { display:flex; gap:4px; }\n#biz-app .biz-stage-dot { width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; cursor:pointer; border:1px solid var(--biz-border); background:#fafafa; color:#bbb; flex-shrink:0; }\n#biz-app .biz-stage-dot.biz-done { background:var(--biz-gold); border-color:var(--biz-gold); color:#fff; }\n#biz-app .biz-stage-labels { display:flex; gap:4px; margin-top:4px; }\n#biz-app .biz-stage-labels span { width:24px; font-size:8px; text-align:center; color:#bbb; }\n#biz-app .biz-stage-labels span.biz-done { color:#a7801f; font-weight:600; }\n#biz-app .biz-stage-edit-link { font-size:9px; color:var(--biz-gold); cursor:pointer; border:none; background:none; padding:0; text-decoration:underline; display:block; margin-top:6px; }\n#biz-app .biz-payment-reminder { margin-top:8px; }\n/* ── AS 진행 관리 개편 (2026-10-02): 작업 컬럼 통합, 결제재알림 인라인화, 청구 안내문구 ── */\n#biz-app .biz-as-actions { display:flex; align-items:center; gap:5px; flex-wrap:nowrap; }\n#biz-app .biz-action-wrap { display:flex; flex-direction:column; gap:4px; }\n#biz-app .biz-reminder-sub { font-size:9px; color:var(--biz-muted); line-height:1.5; }\n#biz-app .biz-billing-note { font-size:9.5px; color:var(--biz-muted); margin-top:4px; line-height:1.5; }\n#biz-app .biz-date-edit-row { display:flex; gap:4px; flex-wrap:wrap; align-items:center; margin-top:6px; }\n#biz-app .biz-date-edit-item { display:flex; flex-direction:column; gap:2px; }\n#biz-app .biz-date-edit-item label { font-size:8px; color:var(--biz-muted); }\n#biz-app .biz-date-edit-item input[type=datetime-local] { font-size:10px; padding:3px; border:1px solid var(--biz-border); border-radius:3px; width:132px; }\n#biz-app .biz-date-edit-actions { display:flex; gap:4px; margin-top:6px; }\n#biz-app .biz-ship-box { margin-top:8px; padding-top:8px; border-top:1px dashed var(--biz-border); min-width:170px; }\n#biz-app .biz-sb-label { font-size:9.5px; color:var(--biz-muted); margin-bottom:4px; text-transform:uppercase; letter-spacing:.05em; }\n#biz-app .biz-ship-line { display:flex; align-items:center; gap:6px; font-size:11.5px; flex-wrap:wrap; }\n#biz-app .biz-badge-done { font-size:9.5px; background:var(--biz-green-bg); color:var(--biz-green); padding:1px 6px; border-radius:7px; font-weight:700; }\n#biz-app .biz-ship-wait { font-size:11px; color:var(--biz-muted); font-style:italic; }\n#biz-app .biz-billing-edit { display:flex; gap:4px; align-items:center; flex-wrap:nowrap; }\n#biz-app .biz-billing-edit input { width:56px; padding:4px 5px; font-size:10px; border:1px solid var(--biz-border); border-radius:3px; }\n#biz-app .biz-billing-edit input::-webkit-outer-spin-button, #biz-app .biz-billing-edit input::-webkit-inner-spin-button { -webkit-appearance:none; margin:0; }\n#biz-app .biz-billing-edit input[type=number] { -moz-appearance:textfield; }\n#biz-app .biz-billing-edit button { padding:4px 6px; font-size:9.5px; }\n#biz-app .biz-f { padding:6px 7px; border:1px solid var(--biz-border); border-radius:5px; font-size:11px; }\n#biz-app select.biz-f { width:112px; }\n#biz-app input.biz-f { width:120px; }\n#biz-app .biz-ship-id { font-weight:700; color:var(--biz-brown); white-space:nowrap; }\n\n@media (max-width: 860px) {\n#biz-app .biz-shell { flex-direction:column; }\n#biz-app .biz-rail { width:100%; flex-direction:row; padding:8px; }\n#biz-app .biz-subnav { padding:8px 12px; }\n#biz-app .biz-stat-grid { grid-template-columns:repeat(2,1fr); }\n#biz-app .biz-mini-stats { grid-template-columns:repeat(2,1fr); }\n#biz-app .biz-mini-stat:nth-child(4n) { border-right:1px solid var(--biz-border); }\n#biz-app .biz-mini-stat:nth-child(n+3) { border-top-color:var(--biz-border); }\n#biz-app .biz-mini-stat:nth-child(2n) { border-right:none; }\n#biz-app .biz-feed-row { grid-template-columns:1fr; }\n}";
document.head.appendChild(styleEl_biz_app);
document.getElementById('biz-app').innerHTML = "<div id=\"bizLoginView\" class=\"biz-view\">\n<div class=\"biz-card\">\n<div class=\"biz-logo\">ALDOSA <span>BIZ</span></div>\n<div class=\"biz-sub\">기업 회원 전용 관리자 페이지</div>\n<div class=\"biz-field\">\n<label>아이디</label>\n<input type=\"text\" id=\"bizLoginId\" autocomplete=\"username\" />\n</div>\n<div class=\"biz-field\">\n<label>비밀번호</label>\n<input type=\"password\" id=\"bizLoginPw\" autocomplete=\"current-password\" />\n</div>\n<div id=\"bizLoginError\" class=\"biz-error\" hidden></div>\n<button id=\"bizLoginBtn\" class=\"biz-btn-primary\">로그인</button>\n</div>\n</div>\n\n<div id=\"bizPwView\" class=\"biz-view\" hidden>\n<div class=\"biz-card\">\n<div class=\"biz-logo\">ALDOSA <span>BIZ</span></div>\n<div class=\"biz-sub\">임시 비밀번호로 로그인하셨습니다.<br>계속 이용하시려면 비밀번호를 변경해주세요.</div>\n<div class=\"biz-field\">\n<label>새 비밀번호 (8자 이상)</label>\n<input type=\"password\" id=\"bizNewPw1\" />\n</div>\n<div class=\"biz-field\">\n<label>새 비밀번호 확인</label>\n<input type=\"password\" id=\"bizNewPw2\" />\n</div>\n<div id=\"bizPwError\" class=\"biz-error\" hidden></div>\n<button id=\"bizPwSubmitBtn\" class=\"biz-btn-primary\">비밀번호 변경하고 시작하기</button>\n</div>\n</div>\n\n<div id=\"bizDashView\" class=\"biz-view\" hidden>\n<div class=\"biz-topbar\">\n<div class=\"biz-topbar-logo\">ALDOSA <span>BIZ</span></div>\n<div class=\"biz-topbar-right\">\n<div class=\"biz-org-info\">\n<span class=\"biz-org-name\" id=\"bizCompanyName\"></span>\n<span class=\"biz-plan-chip\" id=\"bizPlanTag\"></span>\n</div>\n<a id=\"bizLogoutBtn\" class=\"biz-logout-link\">로그아웃</a>\n</div>\n</div>\n\n<div class=\"biz-subnav\" id=\"bizSubnavCustomer\" hidden>\n<div class=\"biz-subnav-group\"><span class=\"biz-subnav-glabel\">고객 관리</span><span class=\"biz-subnav-item\" data-goto=\"customer-list\">고객 목록</span><span class=\"biz-subnav-item\" data-goto=\"customer-inquiry\">회원 문의</span></div>\n<div class=\"biz-subnav-group\"><span class=\"biz-subnav-glabel\">상품 관리</span><span class=\"biz-subnav-item\" data-goto=\"product-inventory\">재고 관리</span><span class=\"biz-subnav-item\" data-goto=\"product-qr\">QR 발행·활성화</span></div>\n<div class=\"biz-subnav-group\"><span class=\"biz-subnav-glabel\">주문 관리</span><span class=\"biz-subnav-item\" data-goto=\"order-intake\">입고 관리</span><span class=\"biz-subnav-item\" data-goto=\"as-status\">AS 진행 관리</span>\n<span class=\"biz-subnav-item\" data-goto=\"shipment\">출고 관리</span></div>\n<div class=\"biz-subnav-group\"><span class=\"biz-subnav-glabel\">정산 관리</span><span class=\"biz-subnav-item\" data-goto=\"settlement-summary\">정산 요약</span><span class=\"biz-subnav-item\" data-goto=\"settlement-history\">정산 내역</span></div>\n</div>\n\n<div class=\"biz-subnav\" id=\"bizSubnavInsight\" hidden>\n<div class=\"biz-subnav-group\"><span class=\"biz-subnav-glabel\">제품 피드백</span><span class=\"biz-subnav-item\" data-goto=\"insight-ranking\">모델별 AS 랭킹</span><span class=\"biz-subnav-item\" data-goto=\"insight-failure-type\">고장 유형 분석</span></div>\n<div class=\"biz-subnav-group\"><span class=\"biz-subnav-glabel\">처리 성과</span><span class=\"biz-subnav-item\" data-goto=\"insight-period\">처리 기간 분석</span><span class=\"biz-subnav-item\" data-goto=\"insight-cost\">처리 비용 분석</span></div>\n</div>\n\n<div class=\"biz-subnav\" id=\"bizSubnavPlatform\" hidden>\n<div class=\"biz-subnav-group\"><span class=\"biz-subnav-glabel\">이용 현황</span><span class=\"biz-subnav-item\" data-goto=\"usage\">사용량</span><span class=\"biz-subnav-item\" data-goto=\"billing\">이용료 결제</span></div>\n<div class=\"biz-subnav-group\"><span class=\"biz-subnav-glabel\">계정 설정</span><span class=\"biz-subnav-item\" data-goto=\"plan\">요금제</span><span class=\"biz-subnav-item\" data-goto=\"profile\">기업 정보</span><span class=\"biz-subnav-item\" data-goto=\"contact\">문의하기</span></div>\n</div>\n\n<div class=\"biz-shell\">\n<div class=\"biz-rail\">\n<div class=\"biz-rail-item active\" id=\"bizRailHome\" data-rail=\"home\">\n<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 11l9-8 9 8\"/><path d=\"M5 10v10h14V10\"/></svg>\n<div class=\"biz-ri-label\">홈</div>\n</div>\n<div class=\"biz-rail-item biz-rail-customer\" id=\"bizRailCustomer\" data-rail=\"customer\">\n<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 3h12v18l-3-2-3 2-3-2-3 2z\"/><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"/><line x1=\"9\" y1=\"12\" x2=\"15\" y2=\"12\"/></svg>\n<div class=\"biz-ri-label\">고객서비스</div>\n</div>\n<div class=\"biz-rail-item biz-rail-insight\" id=\"bizRailInsight\" data-rail=\"insight\">\n<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19V10M11 19V5M18 19v-7\"/></svg>\n<div class=\"biz-ri-label\">인사이트</div>\n</div>\n<div class=\"biz-rail-item biz-rail-platform\" id=\"bizRailPlatform\" data-rail=\"platform\">\n<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1\"/></svg>\n<div class=\"biz-ri-label\">알도사</div>\n</div>\n</div>\n\n<div class=\"biz-main\">\n<div class=\"biz-mainbar\">\n<div class=\"biz-crumb\" id=\"bizCrumb\">홈</div>\n<div class=\"biz-page-title\" id=\"bizPageTitle\">대시보드 홈</div>\n</div>\n\n<div class=\"biz-content\">\n\n<div class=\"biz-screen\" id=\"bizScreenHome\">\n<div class=\"biz-section-label\">주문 처리 현황</div>\n<div class=\"biz-stat-grid\">\n<div class=\"biz-stat-card biz-clickable\" data-goto=\"as-status\">\n<div class=\"biz-icon-badge biz-badge-gold\">📋</div>\n<div class=\"biz-stat-label\">견적 확인 대기</div>\n<div class=\"biz-stat-value\" id=\"bizFunnelQuote\">-</div>\n</div>\n<div class=\"biz-stat-card biz-clickable\" data-goto=\"as-status\">\n<div class=\"biz-icon-badge biz-badge-red\">💳</div>\n<div class=\"biz-stat-label\">결제 대기</div>\n<div class=\"biz-stat-value\" id=\"bizFunnelPayment\">-</div>\n</div>\n<div class=\"biz-stat-card biz-clickable\" data-goto=\"as-status\">\n<div class=\"biz-icon-badge biz-badge-brown\">🔧</div>\n<div class=\"biz-stat-label\">수리 진행중</div>\n<div class=\"biz-stat-value\" id=\"bizFunnelRepair\">-</div>\n</div>\n<div class=\"biz-stat-card biz-clickable\" data-goto=\"shipment\">\n<div class=\"biz-icon-badge biz-badge-sage\">📦</div>\n<div class=\"biz-stat-label\">출고 대기</div>\n<div class=\"biz-stat-value\" id=\"bizFunnelShipment\">-</div>\n</div>\n</div>\n\n<div class=\"biz-section-label\">전체 요약</div>\n<div class=\"biz-mini-stats\">\n<div class=\"biz-mini-stat biz-clickable\" data-goto=\"customer-list\"><div class=\"biz-ms-label\">연결된 고객수</div><div class=\"biz-ms-value\" id=\"bizSummaryCustomer\">-</div></div>\n<div class=\"biz-mini-stat\"><div class=\"biz-ms-label\">판매된 코드수</div><div class=\"biz-ms-value\" id=\"bizSummaryCode\">-</div></div>\n<div class=\"biz-mini-stat\"><div class=\"biz-ms-label\">등록된 자산수</div><div class=\"biz-ms-value\" id=\"bizSummaryAsset\">-</div></div>\n<div class=\"biz-mini-stat biz-clickable\" data-goto=\"as-status\"><div class=\"biz-ms-label\">누적 AS 처리건</div><div class=\"biz-ms-value\" id=\"bizSummaryAs\">-</div></div>\n<div class=\"biz-mini-stat biz-clickable\" data-goto=\"usage\"><div class=\"biz-ms-label\">문자 발송 (이번 달)</div><div class=\"biz-ms-value\" id=\"bizSummarySms\">-</div><div class=\"biz-ms-sub\" id=\"bizSummarySmsSub\"></div></div>\n<div class=\"biz-mini-stat biz-clickable\" data-goto=\"as-status\"><div class=\"biz-ms-label\">견적액 (이번 달)</div><div class=\"biz-ms-value\" id=\"bizSummaryQuote\">-</div><div class=\"biz-ms-sub\" id=\"bizSummaryQuoteSub\"></div></div>\n<div class=\"biz-mini-stat biz-clickable\" data-goto=\"as-status\"><div class=\"biz-ms-label\">입금액 (이번 달)</div><div class=\"biz-ms-value\" id=\"bizSummaryPaid\">-</div><div class=\"biz-ms-sub\" id=\"bizSummaryPaidSub\"></div></div>\n</div>\n\n<div class=\"biz-section-label\">AS 처리 추이</div>\n<div class=\"biz-chart-card\">\n<div class=\"biz-chart-note\">ⓘ 접수·완료 처리 완료 기준 그래프는 준비 중입니다. 위 요약 수치는 실시간 데이터입니다.</div>\n</div>\n\n<div class=\"biz-section-label\">공지 · 알림</div>\n<div class=\"biz-feed-row\">\n<div class=\"biz-feed-card\">\n<div class=\"biz-feed-head\">📢 공지사항</div>\n<div id=\"bizNoticeList\"><div class=\"biz-feed-empty\">등록된 공지사항이 없습니다.</div></div>\n</div>\n<div class=\"biz-feed-card\">\n<div class=\"biz-feed-head\">🔔 알림</div>\n<div class=\"biz-feed-empty\">알림 기능은 준비 중입니다.</div>\n</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenCustomerList\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">전체 고객 · 등록 자산</div>\n<div class=\"biz-field-row\" style=\"margin-bottom:8px;align-items:center;\">\n<label style=\"font-size:12.5px;color:var(--biz-muted);display:flex;align-items:center;gap:4px;white-space:nowrap;\"><input type=\"radio\" name=\"bizCustomerSearchField\" id=\"bizCustomerSearchFieldName\" value=\"name\" checked />이름</label>\n<label style=\"font-size:12.5px;color:var(--biz-muted);display:flex;align-items:center;gap:4px;white-space:nowrap;\"><input type=\"radio\" name=\"bizCustomerSearchField\" id=\"bizCustomerSearchFieldPhone\" value=\"phone\" />연락처</label>\n<label style=\"font-size:12.5px;color:var(--biz-muted);display:flex;align-items:center;gap:4px;white-space:nowrap;\"><input type=\"radio\" name=\"bizCustomerSearchField\" id=\"bizCustomerSearchFieldEmail\" value=\"email\" />이메일</label>\n<input type=\"text\" id=\"bizCustomerSearch\" placeholder=\"검색어 입력\" style=\"max-width:220px;\" />\n<button type=\"button\" class=\"biz-btn-primary biz-btn-inline\" id=\"bizCustomerSearchBtn\">검색</button>\n<button type=\"button\" class=\"biz-btn-secondary\" id=\"bizCustomerSearchResetBtn\" style=\"margin-top:0;\">초기화</button>\n</div>\n<div id=\"bizCustomerSearchResult\" class=\"biz-panel-note\" hidden></div>\n<table class=\"biz-table\">\n<thead><tr><th>고객명</th><th>연락처</th><th>이메일</th><th>등록자산수</th><th></th></tr></thead>\n<tbody id=\"bizAssetCustTbody\"></tbody>\n</table>\n<div class=\"biz-panel-note\">※ 직접 연결된 회원 기준, 1인당 1행으로 집계됩니다. \"세부사항 보기\"에서 등록 자산과 마일리지 조정·바우처 발급·결제 수동기록을 확인·처리하실 수 있습니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenCustomerDetail\" hidden>\n<div class=\"biz-panel\">\n<button type=\"button\" class=\"biz-btn-secondary\" id=\"bizCustomerDetailBackBtn\" style=\"margin-top:0;margin-bottom:14px;\">← 고객 목록으로</button>\n<div class=\"biz-panel-title\" id=\"bizCustomerDetailName\">-</div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">연락처</span><span class=\"biz-info-value\" id=\"bizCustomerDetailPhone\">-</span></div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">이메일</span><span class=\"biz-info-value\" id=\"bizCustomerDetailEmail\">-</span></div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">가입일</span><span class=\"biz-info-value\" id=\"bizCustomerDetailJoined\">-</span></div>\n<button type=\"button\" class=\"biz-btn-primary\" id=\"bizCustomerDetailManageBtn\" style=\"margin-top:14px;\">마일리지·바우처·결제 관리</button>\n</div>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">등록 자산 목록</div>\n<table class=\"biz-table\">\n<thead><tr><th>자산(브랜드/모델)</th><th>등록일</th></tr></thead>\n<tbody id=\"bizCustomerDetailAssetTbody\"></tbody>\n</table>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenCustomerInquiry\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">회원 문의 내역</div>\n<table class=\"biz-table\">\n<thead><tr><th>문의일</th><th>고객명</th><th>문의내용</th><th>상태</th></tr></thead>\n<tbody><tr><td colspan=\"4\" class=\"biz-empty-cell\">문의 내역 연동은 준비 중입니다.</td></tr></tbody>\n</table>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenProductInventory\" hidden>\n<div class=\"biz-panel biz-panel-scrollx\">\n<div class=\"biz-panel-title\">등록된 자산 목록</div>\n<table class=\"biz-table\">\n<thead><tr><th>브랜드/모델</th><th>시리얼</th><th>구분</th><th>상태</th><th>의뢰인/접수자</th><th>등록일</th></tr></thead>\n<tbody id=\"bizAssetTbody\"><tr><td colspan=\"6\" class=\"biz-empty-cell\">불러오는 중...</td></tr></tbody>\n</table>\n<div class=\"biz-panel-note\">※ 연결된 고객이 등록했거나, 이 매장 접수로 생성된 자산 전체입니다. \"구분\"은 고객 계정에 연결되어 소유자가 있는 자산(등록완료)과, 매장 접수로 생성되었지만 아직 고객이 알도사 코드를 등록하지 않은 자산(등록대기)을 구분합니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenProductQr\" hidden>\n<div class=\"biz-stat-row\">\n<div class=\"biz-stat-box\"><div class=\"biz-sb-label\">발행된 QR</div><div class=\"biz-sb-value\" id=\"bizQrTotalCount\">-</div></div>\n<div class=\"biz-stat-box\"><div class=\"biz-sb-label\">사용 가능(미사용)</div><div class=\"biz-sb-value\" id=\"bizQrActiveCount\">-</div></div>\n<div class=\"biz-stat-box\"><div class=\"biz-sb-label\">고객 등록 완료</div><div class=\"biz-sb-value\" id=\"bizQrClaimedCount\">-</div></div>\n</div>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">QR 신규 발행</div>\n<div class=\"biz-field-row\">\n<input type=\"text\" id=\"bizQrBrand\" placeholder=\"브랜드 *\" />\n<input type=\"text\" id=\"bizQrProductName\" placeholder=\"상품명 *\" />\n<input type=\"number\" id=\"bizQrCount\" placeholder=\"발행 수량 *\" min=\"1\" max=\"1000\" style=\"width:100px;\" />\n<button type=\"button\" class=\"biz-btn-primary biz-btn-inline\" id=\"bizQrGenerateBtn\">발행</button>\n</div>\n<div id=\"bizQrGenerateResult\" class=\"biz-panel-note\" hidden></div>\n</div>\n<div class=\"biz-panel\" style=\"margin-top:16px;\">\n<div class=\"biz-panel-title\">QR 발행·활성화 이력</div>\n<table class=\"biz-table\">\n<thead><tr><th>코드</th><th>상품</th><th>상태</th><th>발행일</th><th></th></tr></thead>\n<tbody id=\"bizQrTbody\"><tr><td colspan=\"5\" class=\"biz-empty-cell\">불러오는 중...</td></tr></tbody>\n</table>\n<div class=\"biz-panel-note\">※ \"미사용잠금\"은 발행 후 7일(재활성화 시 3일)이 지나 만료된 상태입니다. \"재활성화\"를 누르면 3일간 다시 사용 가능해집니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenOrderIntake\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">AS 신규 접수</div>\n<div class=\"biz-field-row\">\n<select id=\"bizIntakeBrand\">\n<option value=\"\">브랜드 선택</option>\n<option>A. Lange &amp; Söhne</option>\n<option>Audemars Piguet</option>\n<option>Blancpain</option>\n<option>Breguet</option>\n<option>Breitling</option>\n<option>Cartier</option>\n<option>Hublot</option>\n<option>IWC</option>\n<option>Jaeger-LeCoultre</option>\n<option>OMEGA</option>\n<option>Panerai</option>\n<option>Patek Philippe</option>\n<option>Richard Mille</option>\n<option>ROLEX</option>\n<option>TAG Heuer</option>\n<option>Vacheron Constantin</option>\n<option>기타</option>\n</select>\n<input type=\"text\" id=\"bizIntakeModel\" placeholder=\"모델명\" />\n<input type=\"text\" id=\"bizIntakeSerial\" placeholder=\"시리얼(선택)\" />\n</div>\n<div class=\"biz-field-row\" id=\"bizIntakeBrandCustomWrap\" style=\"margin-top:8px;\" hidden>\n<input type=\"text\" id=\"bizIntakeBrandCustom\" placeholder=\"브랜드명 직접 입력\" />\n</div>\n<div class=\"biz-field-row\" style=\"margin-top:8px;\">\n<select id=\"bizIntakeSymptom\"><option value=\"\">증상 선택</option></select>\n<input type=\"text\" id=\"bizIntakeRequestNote\" placeholder=\"요청사항 (고객이 실제 남긴 말, 자유입력)\" />\n<input type=\"text\" id=\"bizIntakeOfr\" placeholder=\"OFR 번호(선택)\" />\n</div>\n<div class=\"biz-field-row\" style=\"margin-top:8px;\">\n<input type=\"text\" id=\"bizIntakeName\" placeholder=\"의뢰인 성명 *\" />\n<input type=\"tel\" id=\"bizIntakePhone\" placeholder=\"의뢰인 연락처 *\" />\n<input type=\"date\" id=\"bizIntakePurchaseDate\" />\n</div>\n<div class=\"biz-field-row\" style=\"margin-top:12px;\">\n<button type=\"button\" class=\"biz-btn-primary\" id=\"bizIntakeSubmitBtn\">접수 등록</button>\n</div>\n<div id=\"bizIntakeResult\" class=\"biz-panel-note\" hidden></div>\n</div>\n<div class=\"biz-panel\" style=\"margin-top:16px;\">\n<div class=\"biz-panel-title\">입고 등록 현황</div>\n<div class=\"biz-field-row\" style=\"margin-bottom:10px;\">\n<button type=\"button\" class=\"biz-btn-sm biz-btn-outline-gold biz-filter-btn biz-filter-active\" id=\"bizIntakeFilterAll\">전체</button>\n<button type=\"button\" class=\"biz-btn-sm biz-btn-outline-gold biz-filter-btn\" id=\"bizIntakeFilterOnline\">온라인 접수</button>\n<button type=\"button\" class=\"biz-btn-sm biz-btn-outline-gold biz-filter-btn\" id=\"bizIntakeFilterStore\">매장 접수</button>\n</div>\n<table class=\"biz-table\">\n<thead><tr><th>접수번호</th><th>채널</th><th>브랜드/모델</th><th>의뢰인</th><th>증상</th><th>접수일시</th></tr></thead>\n<tbody id=\"bizIntakeListTbody\"><tr><td colspan=\"6\" class=\"biz-empty-cell\">불러오는 중...</td></tr></tbody>\n</table>\n<div class=\"biz-panel-note\">※ 온라인 고객접수와 이 화면의 매장 수기등록 건이 모두 새로고침해도 유지되는 전체 이력으로 표시됩니다. 견적입력·스테이지 변경·결제재알림 등 접수 이후 처리는 \"AS 진행 현황\"에서 합니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenAsStatus\" hidden>\n<div class=\"biz-panel biz-panel-scrollx\">\n<div class=\"biz-panel-title\">전체 AS 접수 내역</div>\n<table class=\"biz-table biz-table-as\">\n<thead><tr>\n<th>접수번호</th><th>브랜드</th><th>모델</th><th>시리얼</th><th>의뢰인</th>\n<th>진행단계</th><th>견적/청구 <span class=\"biz-info-icon\" title=\"선택 항목에 따라 청구금액이 견적과 다를 수 있습니다\">ⓘ</span></th><th>작업</th><th>접수일</th>\n</tr></thead>\n<tbody id=\"bizAsTbody\"></tbody>\n</table>\n<div class=\"biz-panel-note\">※ \"진행단계\"의 원을 클릭하면 완료/취소 토글되며, \"날짜 확인/수정\"에서 각 단계 일시를 직접 보정할 수 있습니다. 출고 정보는 \"출고 관리\"에서 발송 처리하면 자동으로 채워집니다. \"상세관리\"에서 견적 항목·수리처 배정·CS 메모를 관리합니다.</div>\n\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenShipment\" hidden>\n<div class=\"biz-panel biz-panel-scrollx\">\n<div class=\"biz-panel-title\">출고 대기 목록</div>\n<table class=\"biz-table biz-table-shipment\">\n<thead>\n<tr>\n<th><input type=\"checkbox\" id=\"bizShipmentSelectAll\" /></th>\n<th>출고번호</th><th>브랜드/모델</th><th>의뢰인</th><th>접수매장</th><th>택배사</th><th>운송장번호 / 수령인</th><th></th>\n</tr>\n</thead>\n<tbody id=\"bizShipmentTbody\"><tr><td colspan=\"8\" class=\"biz-empty-cell\">불러오는 중...</td></tr></tbody>\n</table>\n<div class=\"biz-shipment-actions\">\n<button type=\"button\" class=\"biz-btn-primary biz-btn-inline\" id=\"bizShipmentSubmitBtn\">선택 건 일괄 발송처리</button>\n</div>\n<div class=\"biz-panel-note\">※ 택배사와 운송장번호(방문출고는 수령인 성명)를 입력하면 버튼이 활성화됩니다. 처리 완료 건은 목록에서 사라지고, 이후 조회·수정은 \"AS 진행 현황\"에서 합니다.</div>\n<div id=\"bizShipmentResult\" class=\"biz-panel-note\" hidden></div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenSettlementSummary\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">정산 요약</div>\n<div class=\"biz-stat-row\">\n<div class=\"biz-stat-box\"><div class=\"biz-sb-label\">이번 주 정산 예정액</div><div class=\"biz-sb-value\">준비중</div></div>\n<div class=\"biz-stat-box\"><div class=\"biz-sb-label\">다음 정산일</div><div class=\"biz-sb-value\">준비중</div></div>\n<div class=\"biz-stat-box\"><div class=\"biz-sb-label\">누적 정산 완료액</div><div class=\"biz-sb-value\">준비중</div></div>\n</div>\n<div class=\"biz-panel-note\">※ 정산 데이터 연동은 준비 중입니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenSettlementHistory\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">정산 내역</div>\n<table class=\"biz-table\">\n<thead><tr><th>정산기간</th><th>건수</th><th>매출액</th><th>수수료</th><th>정산액</th><th>지급일</th><th>상태</th></tr></thead>\n<tbody><tr><td colspan=\"7\" class=\"biz-empty-cell\">정산 내역 연동은 준비 중입니다.</td></tr></tbody>\n</table>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenUsage\" hidden>\n<div class=\"biz-stat-grid\">\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-brown\">👥</div><div class=\"biz-stat-label\">연결된 고객수</div><div class=\"biz-stat-value\" id=\"bizUsageCustomer\">-</div></div>\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-gold\">🧾</div><div class=\"biz-stat-label\">누적 AS 처리건수</div><div class=\"biz-stat-value\" id=\"bizUsageAs\">-</div></div>\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-red\">💬</div><div class=\"biz-stat-label\">문자 발송</div><div class=\"biz-stat-value\">준비중</div></div>\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-sage\">✅</div><div class=\"biz-stat-label\">발송 성공률</div><div class=\"biz-stat-value\">준비중</div></div>\n</div>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">발송 크레딧 · 청구</div>\n<div class=\"biz-panel-note\">문자 발송 크레딧, 일일 발송 한도, 예상 청구액, 발송 추세 및 채널 구성 화면은 준비 중입니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenBilling\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">이용료 결제</div>\n<div class=\"biz-panel-note\">이용료 결제 및 결제수단 관리 기능은 준비 중입니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenPlan\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">현재 이용 중인 요금제</div>\n<span class=\"biz-plan-chip biz-plan-chip-lg\" id=\"bizCurrentPlanTag\">-</span>\n</div>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">요금제 안내</div>\n<div class=\"biz-plan-grid\">\n<div class=\"biz-plan-card\"><div class=\"biz-plan-card-name\">베이직</div><div class=\"biz-plan-card-desc\">위탁형 AS 연동 기업 대상<br>정산 · 진행 현황 모니터링 중심</div></div>\n<div class=\"biz-plan-card\"><div class=\"biz-plan-card-name\">라이트</div><div class=\"biz-plan-card-desc\">직영 AS센터 운영 기업 대상<br>견적/진행상태 등 AS 운영 관리 포함</div></div>\n<div class=\"biz-plan-card\"><div class=\"biz-plan-card-name\">프리미엄</div><div class=\"biz-plan-card-desc\">추가 기능(고객 커뮤니케이션·마케팅 도구 등)<br>순차 안내 예정</div></div>\n</div>\n<div class=\"biz-panel-note\">※ 고객 수 증가에 따른 트래픽 비용은 기본 이용료와 별도로 산정됩니다.</div>\n<button type=\"button\" class=\"biz-btn-secondary\" id=\"bizPlanChangeBtn\">요금제 변경 문의하기</button>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenProfile\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">기업 정보</div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">회사명</span><span class=\"biz-info-value\" id=\"bizInfoCompanyName\">-</span></div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">담당자명</span><span class=\"biz-info-value\" id=\"bizInfoContactName\">-</span></div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">로그인 아이디</span><span class=\"biz-info-value\" id=\"bizInfoLoginId\">-</span></div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">사업자등록번호</span><span class=\"biz-info-value\" id=\"bizInfoBizRegNo\">-</span></div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">주소</span><span class=\"biz-info-value\" id=\"bizInfoAddress\">-</span></div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">담당자 연락처</span><span class=\"biz-info-value\" id=\"bizInfoContactPhone\">-</span></div>\n<div class=\"biz-info-row\"><span class=\"biz-info-label\">담당자 이메일</span><span class=\"biz-info-value\" id=\"bizInfoContactEmail\">-</span></div>\n<button type=\"button\" class=\"biz-btn-secondary\" id=\"bizProfileEditBtn\">정보 수정 요청하기</button>\n<div id=\"bizProfileResult\" class=\"biz-panel-note\" hidden></div>\n<div class=\"biz-panel-note\">※ 정보 수정은 현재 준비 중입니다. 변경이 필요하시면 &quot;문의하기&quot; 메뉴를 이용해주세요.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenInsightRanking\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">모델별 AS 랭킹</div>\n<div class=\"biz-panel-note\">모델별 AS 접수 건수 랭킹 기능은 준비 중입니다. 데이터가 더 쌓인 후 순차 제공될 예정입니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenInsightFailureType\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">고장 유형 분석</div>\n<div class=\"biz-panel-note\">고장 유형 분석은 증상 입력 항목의 정형화 작업 이후 제공될 예정입니다. 현재는 준비 중입니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenInsightPeriod\" hidden>\n<div class=\"biz-stat-grid\">\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-brown\">⏱</div><div class=\"biz-stat-label\">평균 처리기간(접수~출고)</div><div class=\"biz-stat-value\" id=\"bizInsightAvgDays\">-</div></div>\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-sage\">✅</div><div class=\"biz-stat-label\">출고 완료 건수</div><div class=\"biz-stat-value\" id=\"bizInsightCompletedCount\">-</div></div>\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-gold\">🔧</div><div class=\"biz-stat-label\">진행중(미출고) 건수</div><div class=\"biz-stat-value\" id=\"bizInsightInProgressCount\">-</div></div>\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-red\">📈</div><div class=\"biz-stat-label\">최장 처리기간</div><div class=\"biz-stat-value\" id=\"bizInsightMaxDays\">-</div></div>\n</div>\n<div class=\"biz-section-label\">처리기간 분포 (접수~출고)</div>\n<div class=\"biz-panel\">\n<div class=\"biz-bar-list\" id=\"bizInsightPeriodBars\"></div>\n<div class=\"biz-panel-note\">※ 접수일과 출고일이 모두 기록된 건 기준입니다. 표본이 적을 경우 통계 신뢰도가 낮을 수 있습니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenInsightCost\" hidden>\n<div class=\"biz-stat-grid\">\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-gold\">💰</div><div class=\"biz-stat-label\">건당 평균 처리비용</div><div class=\"biz-stat-value\" id=\"bizInsightAvgCharge\">-</div></div>\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-brown\">🧾</div><div class=\"biz-stat-label\">청구 완료 건수</div><div class=\"biz-stat-value\" id=\"bizInsightBilledCount\">-</div></div>\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-sage\">📥</div><div class=\"biz-stat-label\">평균 견적금액</div><div class=\"biz-stat-value\" id=\"bizInsightAvgQuote\">-</div></div>\n<div class=\"biz-stat-card\"><div class=\"biz-icon-badge biz-badge-red\">Σ</div><div class=\"biz-stat-label\">누적 청구금액</div><div class=\"biz-stat-value\" id=\"bizInsightTotalCharge\">-</div></div>\n</div>\n<div class=\"biz-section-label\">처리비용 분포 (청구금액 기준)</div>\n<div class=\"biz-panel\">\n<div class=\"biz-bar-list\" id=\"bizInsightCostBars\"></div>\n<div class=\"biz-panel-note\">※ 청구금액이 입력된 건 기준입니다.</div>\n</div>\n</div>\n\n<div class=\"biz-screen\" id=\"bizScreenContact\" hidden>\n<div class=\"biz-panel\">\n<div class=\"biz-panel-title\">알도사에 문의하기</div>\n<div class=\"biz-field\">\n<label>문의 유형</label>\n<select id=\"bizContactType\">\n<option value=\"요금제\">요금제 관련</option>\n<option value=\"기술지원\">기술지원 / 오류 신고</option>\n<option value=\"정산\">정산 관련</option>\n<option value=\"기타\">기타</option>\n</select>\n</div>\n<div class=\"biz-field\">\n<label>문의 내용</label>\n<textarea id=\"bizContactContent\" rows=\"5\" placeholder=\"문의하실 내용을 입력해주세요.\"></textarea>\n</div>\n<div id=\"bizContactResult\" class=\"biz-panel-note\" hidden></div>\n<button type=\"button\" class=\"biz-btn-primary\" id=\"bizContactSubmitBtn\">문의 접수하기</button>\n<div class=\"biz-panel-note\">※ 문의 접수 기능은 현재 준비 중입니다. 급하신 사항은 알도사 고객센터로 직접 연락해주세요.</div>\n</div>\n</div>\n\n</div>\n</div>\n</div>\n\n<div id=\"bizMemberModal\" class=\"biz-modal-overlay\" hidden>\n<div class=\"biz-modal\">\n<div class=\"biz-modal-head\">\n<div class=\"biz-modal-title\" id=\"bizMemberModalName\">-</div>\n<button type=\"button\" class=\"biz-modal-close\" id=\"bizMemberModalCloseBtn\">&times;</button>\n</div>\n<div class=\"biz-modal-body\">\n<div class=\"biz-modal-balance\">보유 마일리지 <b id=\"bizMemberModalBalance\">-</b>P</div>\n\n<div class=\"biz-modal-section\">\n<div class=\"biz-modal-section-title\">마일리지 조정</div>\n<div class=\"biz-field-row\">\n<input type=\"number\" id=\"bizMileageAmount\" placeholder=\"지급: 양수 / 차감: 음수\" />\n<input type=\"text\" id=\"bizMileageReason\" placeholder=\"사유 (선택)\" />\n<button type=\"button\" class=\"biz-btn-primary biz-btn-inline\" id=\"bizMileageSubmitBtn\">적용</button>\n</div>\n</div>\n\n<div class=\"biz-modal-section\">\n<div class=\"biz-modal-section-title\">바우처 발급</div>\n<div class=\"biz-field-row\">\n<select id=\"bizVoucherType\"><option value=\"amount\">금액(원)</option><option value=\"percent\">할인율(%)</option></select>\n<input type=\"number\" id=\"bizVoucherValue\" placeholder=\"값\" />\n<input type=\"text\" id=\"bizVoucherTitle\" placeholder=\"바우처명\" />\n<input type=\"number\" id=\"bizVoucherMonths\" placeholder=\"유효기간(개월, 기본 6)\" />\n<button type=\"button\" class=\"biz-btn-primary biz-btn-inline\" id=\"bizVoucherSubmitBtn\">발급</button>\n</div>\n</div>\n\n<div class=\"biz-modal-section\">\n<div class=\"biz-modal-section-title\">결제 수동 기록</div>\n<div class=\"biz-field-row\">\n<input type=\"number\" id=\"bizPaymentAmount\" placeholder=\"결제금액\" />\n<input type=\"text\" id=\"bizPaymentReason\" placeholder=\"사유 (선택)\" />\n<button type=\"button\" class=\"biz-btn-primary biz-btn-inline\" id=\"bizPaymentSubmitBtn\">기록</button>\n</div>\n</div>\n\n<div id=\"bizMemberModalResult\" class=\"biz-panel-note\" hidden></div>\n\n<div class=\"biz-modal-section\">\n<div class=\"biz-modal-section-title\">보유 바우처</div>\n<table class=\"biz-table\">\n<thead><tr><th>바우처명</th><th>값</th><th>상태</th><th>만료일</th></tr></thead>\n<tbody id=\"bizMemberVoucherTbody\"><tr><td colspan=\"4\" class=\"biz-empty-cell\">불러오는 중...</td></tr></tbody>\n</table>\n</div>\n\n<div class=\"biz-modal-section\">\n<div class=\"biz-modal-section-title\">마일리지 최근 내역</div>\n<table class=\"biz-table\">\n<thead><tr><th>구분</th><th>금액</th><th>사유</th><th>일시</th></tr></thead>\n<tbody id=\"bizMemberMileageTbody\"></tbody>\n</table>\n</div>\n</div>\n</div>\n</div>\n\n<div id=\"bizAsModal\" class=\"biz-modal-overlay\" hidden>\n<div class=\"biz-modal biz-modal-wide\">\n<div class=\"biz-modal-head\">\n<div class=\"biz-modal-title\" id=\"bizAsModalTitle\">-</div>\n<button type=\"button\" class=\"biz-modal-close\" id=\"bizAsModalCloseBtn\">&times;</button>\n</div>\n<div class=\"biz-modal-body\">\n<div class=\"biz-modal-meta\" id=\"bizAsModalMeta\">-</div>\n<div class=\"biz-panel-note\">진행단계 변경·날짜 수정·견적/청구 입력·결제 재알림·출고 정보는 \"AS 진행 현황\" 표에서 바로 처리합니다. 이 창에서는 견적 항목, 수리처 배정, CS 메모만 관리합니다.</div>\n\n<div class=\"biz-modal-section\">\n<div class=\"biz-modal-section-title\">견적 항목</div>\n<table class=\"biz-table\">\n<thead><tr><th>항목명</th><th>비용</th><th>메모</th><th></th></tr></thead>\n<tbody id=\"bizAsItemTbody\"></tbody>\n</table>\n<div class=\"biz-field-row\" style=\"margin-top:10px;\">\n<select id=\"bizAsItemType\">\n<option>오버홀</option>\n<option>배터리교체</option>\n<option>폴리싱</option>\n<option>부품교체</option>\n<option>크리스탈교체</option>\n<option>가스켓·씰교체</option>\n<option>다이얼교체</option>\n<option>무브먼트수리</option>\n<option>케이스·브레이슬릿광택</option>\n<option>기타</option>\n</select>\n<input type=\"text\" id=\"bizAsItemName\" placeholder=\"항목명\" value=\"오버홀\" />\n<input type=\"number\" id=\"bizAsItemCost\" placeholder=\"비용(부가세 별도)\" />\n<input type=\"text\" id=\"bizAsItemNote\" placeholder=\"메모(선택)\" />\n<button type=\"button\" class=\"biz-btn-primary biz-btn-inline\" id=\"bizAsItemAddBtn\">추가</button>\n</div>\n<div class=\"biz-panel-note\">※ \"비용\"은 부가세 별도 금액으로 입력해주세요. 항목 추가·삭제 시 합계가 \"견적\"(부가세 포함)·\"청구\"(부가세 별도) 금액에 자동 반영됩니다.</div>\n<div id=\"bizAsItemResult\" class=\"biz-panel-note\" hidden></div>\n</div>\n\n<div class=\"biz-modal-section\">\n<div class=\"biz-modal-section-title\">수리처 배정</div>\n<div class=\"biz-field-row\">\n<select id=\"bizAsPartnerSelect\"><option value=\"\">불러오는 중...</option></select>\n<button type=\"button\" class=\"biz-btn-primary biz-btn-inline\" id=\"bizAsPartnerAssignBtn\">배정</button>\n</div>\n<div class=\"biz-panel-note\" id=\"bizAsPartnerCurrent\"></div>\n<div id=\"bizAsPartnerResult\" class=\"biz-panel-note\" hidden></div>\n</div>\n\n<div class=\"biz-modal-section\">\n<div class=\"biz-modal-section-title\">CS 메모 <span class=\"biz-tag-mini\">코스트코 전용, 알도사 메모와 별개</span></div>\n<table class=\"biz-table\">\n<thead><tr><th>내용</th><th>작성자</th><th>일시</th></tr></thead>\n<tbody id=\"bizAsNoteTbody\"></tbody>\n</table>\n<div class=\"biz-field-row\" style=\"margin-top:10px;\">\n<input type=\"text\" id=\"bizAsNoteInput\" placeholder=\"메모 내용\" />\n<button type=\"button\" class=\"biz-btn-primary biz-btn-inline\" id=\"bizAsNoteAddBtn\">추가</button>\n</div>\n<div id=\"bizAsNoteResult\" class=\"biz-panel-note\" hidden></div>\n</div>\n<div class=\"biz-modal-section\" style=\"border-bottom:none;padding-bottom:0;margin-bottom:0;\">\n<button type=\"button\" class=\"biz-btn-primary\" id=\"bizAsModalDoneBtn\" style=\"width:100%;\">확인 후 닫기</button>\n</div>\n</div>\n</div>\n</div>\n\n</div>";

var API_URL = "https://script.google.com/macros/s/AKfycbyk1khfq0I8XNYDgvPcIa0aTzYayAM7HekoRapfCZc7CEqfDR2Eh3AxUi8ceqemk4aK3A/exec";

var catNames = { home: "홈", customer: "고객서비스 관리", insight: "인사이트", platform: "알도사 서비스 관리" };
var pageNames = {
"home": "대시보드 홈",
"customer-list": "고객 목록", "customer-detail": "고객 상세정보", "customer-inquiry": "회원 문의",
"product-inventory": "재고 관리", "product-qr": "QR 발행·활성화",
"order-intake": "입고 관리", "as-status": "AS 진행 관리", "shipment": "출고 관리",
"settlement-summary": "정산 요약", "settlement-history": "정산 내역",
"insight-ranking": "모델별 AS 랭킹", "insight-failure-type": "고장 유형 분석",
"insight-period": "처리 기간 분석", "insight-cost": "처리 비용 분석",
"usage": "사용량", "billing": "이용료 결제",
"plan": "요금제", "profile": "기업 정보", "contact": "문의하기"
};
var catOf = {
"home": "home",
"customer-list": "customer", "customer-detail": "customer", "customer-inquiry": "customer",
"product-inventory": "customer", "product-qr": "customer",
"order-intake": "customer", "as-status": "customer", "shipment": "customer",
"settlement-summary": "customer", "settlement-history": "customer",
"insight-ranking": "insight", "insight-failure-type": "insight",
"insight-period": "insight", "insight-cost": "insight",
"usage": "platform", "billing": "platform",
"plan": "platform", "profile": "platform", "contact": "platform"
};

var screenIds = {
"home": "bizScreenHome",
"customer-list": "bizScreenCustomerList", "customer-detail": "bizScreenCustomerDetail", "customer-inquiry": "bizScreenCustomerInquiry",
"product-inventory": "bizScreenProductInventory", "product-qr": "bizScreenProductQr",
"order-intake": "bizScreenOrderIntake", "as-status": "bizScreenAsStatus", "shipment": "bizScreenShipment",
"settlement-summary": "bizScreenSettlementSummary", "settlement-history": "bizScreenSettlementHistory",
"insight-ranking": "bizScreenInsightRanking", "insight-failure-type": "bizScreenInsightFailureType",
"insight-period": "bizScreenInsightPeriod", "insight-cost": "bizScreenInsightCost",
"usage": "bizScreenUsage", "billing": "bizScreenBilling",
"plan": "bizScreenPlan", "profile": "bizScreenProfile", "contact": "bizScreenContact"
};

var els = {
loginView: document.getElementById("bizLoginView"),
pwView: document.getElementById("bizPwView"),
dashView: document.getElementById("bizDashView"),
loginId: document.getElementById("bizLoginId"),
loginPw: document.getElementById("bizLoginPw"),
loginError: document.getElementById("bizLoginError"),
loginBtn: document.getElementById("bizLoginBtn"),
newPw1: document.getElementById("bizNewPw1"),
newPw2: document.getElementById("bizNewPw2"),
pwError: document.getElementById("bizPwError"),
pwSubmitBtn: document.getElementById("bizPwSubmitBtn"),
companyName: document.getElementById("bizCompanyName"),
planTag: document.getElementById("bizPlanTag"),
logoutBtn: document.getElementById("bizLogoutBtn"),
crumb: document.getElementById("bizCrumb"),
pageTitle: document.getElementById("bizPageTitle"),
railHome: document.getElementById("bizRailHome"),
railCustomer: document.getElementById("bizRailCustomer"),
railInsight: document.getElementById("bizRailInsight"),
railPlatform: document.getElementById("bizRailPlatform"),
subnavCustomer: document.getElementById("bizSubnavCustomer"),
subnavInsight: document.getElementById("bizSubnavInsight"),
subnavPlatform: document.getElementById("bizSubnavPlatform"),
funnelQuote: document.getElementById("bizFunnelQuote"),
funnelPayment: document.getElementById("bizFunnelPayment"),
funnelRepair: document.getElementById("bizFunnelRepair"),
funnelShipment: document.getElementById("bizFunnelShipment"),
summaryCustomer: document.getElementById("bizSummaryCustomer"),
summaryCode: document.getElementById("bizSummaryCode"),
summaryAsset: document.getElementById("bizSummaryAsset"),
summaryAs: document.getElementById("bizSummaryAs"),
summarySms: document.getElementById("bizSummarySms"),
summarySmsSub: document.getElementById("bizSummarySmsSub"),
summaryQuote: document.getElementById("bizSummaryQuote"),
summaryQuoteSub: document.getElementById("bizSummaryQuoteSub"),
summaryPaid: document.getElementById("bizSummaryPaid"),
summaryPaidSub: document.getElementById("bizSummaryPaidSub"),
noticeList: document.getElementById("bizNoticeList"),
usageCustomer: document.getElementById("bizUsageCustomer"),
usageAs: document.getElementById("bizUsageAs"),
assetCustTbody: document.getElementById("bizAssetCustTbody"),
customerSearch: document.getElementById("bizCustomerSearch"),
customerSearchBtn: document.getElementById("bizCustomerSearchBtn"),
customerSearchResetBtn: document.getElementById("bizCustomerSearchResetBtn"),
customerSearchResult: document.getElementById("bizCustomerSearchResult"),
customerDetailBackBtn: document.getElementById("bizCustomerDetailBackBtn"),
customerDetailName: document.getElementById("bizCustomerDetailName"),
customerDetailPhone: document.getElementById("bizCustomerDetailPhone"),
customerDetailEmail: document.getElementById("bizCustomerDetailEmail"),
customerDetailJoined: document.getElementById("bizCustomerDetailJoined"),
customerDetailManageBtn: document.getElementById("bizCustomerDetailManageBtn"),
customerDetailAssetTbody: document.getElementById("bizCustomerDetailAssetTbody"),
asTbody: document.getElementById("bizAsTbody"),
shipmentTbody: document.getElementById("bizShipmentTbody"),
shipmentSelectAll: document.getElementById("bizShipmentSelectAll"),
shipmentSubmitBtn: document.getElementById("bizShipmentSubmitBtn"),
shipmentResult: document.getElementById("bizShipmentResult"),
insightAvgDays: document.getElementById("bizInsightAvgDays"),
insightCompletedCount: document.getElementById("bizInsightCompletedCount"),
insightInProgressCount: document.getElementById("bizInsightInProgressCount"),
insightMaxDays: document.getElementById("bizInsightMaxDays"),
insightPeriodBars: document.getElementById("bizInsightPeriodBars"),
insightAvgCharge: document.getElementById("bizInsightAvgCharge"),
insightBilledCount: document.getElementById("bizInsightBilledCount"),
insightAvgQuote: document.getElementById("bizInsightAvgQuote"),
insightTotalCharge: document.getElementById("bizInsightTotalCharge"),
insightCostBars: document.getElementById("bizInsightCostBars"),
currentPlanTag: document.getElementById("bizCurrentPlanTag"),
planChangeBtn: document.getElementById("bizPlanChangeBtn"),
contactType: document.getElementById("bizContactType"),
contactContent: document.getElementById("bizContactContent"),
contactResult: document.getElementById("bizContactResult"),
contactSubmitBtn: document.getElementById("bizContactSubmitBtn"),
infoCompanyName: document.getElementById("bizInfoCompanyName"),
infoContactName: document.getElementById("bizInfoContactName"),
infoLoginId: document.getElementById("bizInfoLoginId"),
infoBizRegNo: document.getElementById("bizInfoBizRegNo"),
infoAddress: document.getElementById("bizInfoAddress"),
infoContactPhone: document.getElementById("bizInfoContactPhone"),
infoContactEmail: document.getElementById("bizInfoContactEmail"),
profileEditBtn: document.getElementById("bizProfileEditBtn"),
profileResult: document.getElementById("bizProfileResult"),
memberModal: document.getElementById("bizMemberModal"),
memberModalCloseBtn: document.getElementById("bizMemberModalCloseBtn"),
memberModalName: document.getElementById("bizMemberModalName"),
memberModalBalance: document.getElementById("bizMemberModalBalance"),
memberModalResult: document.getElementById("bizMemberModalResult"),
memberVoucherTbody: document.getElementById("bizMemberVoucherTbody"),
memberMileageTbody: document.getElementById("bizMemberMileageTbody"),
mileageAmount: document.getElementById("bizMileageAmount"),
mileageReason: document.getElementById("bizMileageReason"),
mileageSubmitBtn: document.getElementById("bizMileageSubmitBtn"),
voucherType: document.getElementById("bizVoucherType"),
voucherValue: document.getElementById("bizVoucherValue"),
voucherTitle: document.getElementById("bizVoucherTitle"),
voucherMonths: document.getElementById("bizVoucherMonths"),
voucherSubmitBtn: document.getElementById("bizVoucherSubmitBtn"),
paymentAmount: document.getElementById("bizPaymentAmount"),
paymentReason: document.getElementById("bizPaymentReason"),
paymentSubmitBtn: document.getElementById("bizPaymentSubmitBtn"),
asModal: document.getElementById("bizAsModal"),
asModalCloseBtn: document.getElementById("bizAsModalCloseBtn"),
asModalTitle: document.getElementById("bizAsModalTitle"),
asModalMeta: document.getElementById("bizAsModalMeta"),
asItemTbody: document.getElementById("bizAsItemTbody"),
asItemType: document.getElementById("bizAsItemType"),
asItemName: document.getElementById("bizAsItemName"),
asItemCost: document.getElementById("bizAsItemCost"),
asItemNote: document.getElementById("bizAsItemNote"),
asItemAddBtn: document.getElementById("bizAsItemAddBtn"),
asItemResult: document.getElementById("bizAsItemResult"),
asPartnerSelect: document.getElementById("bizAsPartnerSelect"),
asPartnerAssignBtn: document.getElementById("bizAsPartnerAssignBtn"),
asPartnerCurrent: document.getElementById("bizAsPartnerCurrent"),
asPartnerResult: document.getElementById("bizAsPartnerResult"),
asNoteTbody: document.getElementById("bizAsNoteTbody"),
asNoteInput: document.getElementById("bizAsNoteInput"),
asNoteAddBtn: document.getElementById("bizAsNoteAddBtn"),
asNoteResult: document.getElementById("bizAsNoteResult"),
asModalDoneBtn: document.getElementById("bizAsModalDoneBtn"),
assetTbody: document.getElementById("bizAssetTbody"),
qrTotalCount: document.getElementById("bizQrTotalCount"),
qrActiveCount: document.getElementById("bizQrActiveCount"),
qrClaimedCount: document.getElementById("bizQrClaimedCount"),
qrBrand: document.getElementById("bizQrBrand"),
qrProductName: document.getElementById("bizQrProductName"),
qrCount: document.getElementById("bizQrCount"),
qrGenerateBtn: document.getElementById("bizQrGenerateBtn"),
qrGenerateResult: document.getElementById("bizQrGenerateResult"),
qrTbody: document.getElementById("bizQrTbody"),
intakeBrand: document.getElementById("bizIntakeBrand"),
intakeBrandCustomWrap: document.getElementById("bizIntakeBrandCustomWrap"),
intakeBrandCustom: document.getElementById("bizIntakeBrandCustom"),
intakeModel: document.getElementById("bizIntakeModel"),
intakeSerial: document.getElementById("bizIntakeSerial"),
intakeSymptom: document.getElementById("bizIntakeSymptom"),
intakeRequestNote: document.getElementById("bizIntakeRequestNote"),
intakeOfr: document.getElementById("bizIntakeOfr"),
intakeName: document.getElementById("bizIntakeName"),
intakePhone: document.getElementById("bizIntakePhone"),
intakePurchaseDate: document.getElementById("bizIntakePurchaseDate"),
intakeSubmitBtn: document.getElementById("bizIntakeSubmitBtn"),
intakeResult: document.getElementById("bizIntakeResult"),
intakeListTbody: document.getElementById("bizIntakeListTbody"),
intakeFilterAll: document.getElementById("bizIntakeFilterAll"),
intakeFilterOnline: document.getElementById("bizIntakeFilterOnline"),
intakeFilterStore: document.getElementById("bizIntakeFilterStore")
};

var session = null;
var pendingLoginPassword = "";
var dashboardCache = null;
var customerGroupsCache = [];
var currentDetailMemberId = "";
var shipmentListCache = [];
var currentModalMemberId = "";
var asListCache = [];
var currentAsRequestId = "";
var repairPartnersCache = [];
var assetListCache = [];
var codeListCache = [];
var intakeSymptomsLoaded = false;
var intakeListCache = [];
var intakeChannelFilter = "all";

function showView(name) {
els.loginView.hidden = name !== "login";
els.pwView.hidden = name !== "pw";
els.dashView.hidden = name !== "dash";
}

function callApi(payload) {
return fetch(API_URL, { method: "POST", body: JSON.stringify(payload) }).then(function (r) { return r.json(); });
}

function esc(s) {
return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
});
}

function fmtDate(iso) {
if (!iso) return "";
try { return String(iso).substring(0, 10); } catch (e) { return ""; }
}

function fmtDateDot(iso) {
return fmtDate(iso).replace(/-/g, ".");
}

// 공지사항 등록일 "YYYY.MM.DD" 표시용 (Asia/Seoul 고정)
function fmtDateKstDot(iso) {
if (!iso) return "";
var d = new Date(iso);
if (isNaN(d.getTime())) return "";
var parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(d);
var map = {};
parts.forEach(function (p) { map[p.type] = p.value; });
return map.year + "." + map.month + "." + map.day;
}

// 홈 공지사항 카드 — 제목+날짜 목록, 제목 클릭 시 본문 펼침/접힘 (전체 공지 목록 화면은 이번 범위 아님)
function renderNotices(list) {
if (!els.noticeList) return;
if (!list || !list.length) {
els.noticeList.innerHTML = "<div class='biz-feed-empty'>등록된 공지사항이 없습니다.</div>";
return;
}
els.noticeList.innerHTML = list.map(function (n) {
return "<div class='biz-notice-item'>" +
"<div class='biz-notice-head'><span class='biz-notice-title'>" + esc(n.title) + "</span><span class='biz-notice-date'>" + fmtDateKstDot(n.created_at) + "</span></div>" +
"<div class='biz-notice-body' hidden>" + esc(n.content) + "</div></div>";
}).join("");
}

// 결제재알림 발송이력 "MM.DD HH:mm" 표시용 (Asia/Seoul 고정 — 담당자 브라우저 시간대 무관하게 동일하게 보이도록)
function fmtDateTimeDot(iso) {
if (!iso) return "";
var d = new Date(iso);
if (isNaN(d.getTime())) return "";
var parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Seoul", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(d);
var map = {};
parts.forEach(function (p) { map[p.type] = p.value; });
return map.month + "." + map.day + " " + map.hour + ":" + map.minute;
}

// datetime-local input(브라우저 로컬시간 기준) ↔ ISO(UTC) 문자열 변환 — "날짜 확인/수정" 인라인 편집용
function isoToLocalInput(iso) {
if (!iso) return "";
var d = new Date(iso);
if (isNaN(d.getTime())) return "";
function p(n) { return String(n).length < 2 ? "0" + n : String(n); }
return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + "T" + p(d.getHours()) + ":" + p(d.getMinutes());
}
function localInputToIso(val) {
if (!val) return "";
var d = new Date(val);
return isNaN(d.getTime()) ? "" : d.toISOString();
}

// ── 서브 내비게이션 바 (카테고리 선택 시 상단에 계속 표시됨) ──
var subnavMap = { customer: els.subnavCustomer, insight: els.subnavInsight, platform: els.subnavPlatform };
var railDefaults = { customer: "customer-list", insight: "insight-period", platform: "usage" };

// 현재 보고 있는 화면의 카테고리를 레일 아이콘 강조로 표시
function setActiveRail(cat) {
els.railHome.classList.toggle("active", cat === "home");
els.railCustomer.classList.toggle("active", cat === "customer");
els.railInsight.classList.toggle("active", cat === "insight");
els.railPlatform.classList.toggle("active", cat === "platform");
}

// 현재 카테고리의 서브 내비게이션 바만 보이고 나머지는 숨김 (홈이면 전부 숨김)
function updateSubnav(cat) {
Object.keys(subnavMap).forEach(function (k) {
subnavMap[k].hidden = (k !== cat);
});
}

// ── 화면 전환 ────────────────────────────────────────
function goto(viewId) {
Object.keys(screenIds).forEach(function (key) {
var el = document.getElementById(screenIds[key]);
if (el) el.hidden = key !== viewId;
});

document.querySelectorAll("#biz-app .biz-subnav-item").forEach(function (b) {
b.classList.remove("biz-active", "biz-platform-active", "biz-insight-active");
});
var subBtn = document.querySelector('#biz-app .biz-subnav-item[data-goto="' + viewId + '"]');
if (subBtn) {
subBtn.classList.add("biz-active");
if (catOf[viewId] === "platform") subBtn.classList.add("biz-platform-active");
if (catOf[viewId] === "insight") subBtn.classList.add("biz-insight-active");
}

var cat = catOf[viewId];
setActiveRail(cat);
updateSubnav(cat);

els.crumb.innerHTML = catNames[cat] + (cat !== "home" ? " &nbsp;/&nbsp; <b>" + pageNames[viewId] + "</b>" : "");
els.pageTitle.textContent = pageNames[viewId];

if (viewId === "as-status") loadAsList();
if (viewId === "shipment") loadShipmentList();
if (viewId === "insight-period" || viewId === "insight-cost") loadInsightStats();
if (viewId === "product-inventory") loadAssetList();
if (viewId === "product-qr") loadCodeList();
if (viewId === "order-intake") { loadIntakeSymptoms(); loadIntakeList(); }
}

function goHome() {
goto("home");
}

// 레일 아이콘(고객서비스/인사이트/알도사) 클릭 시 해당 카테고리의 기본 화면으로 이동 + 서브 내비 표시
function gotoCategoryDefault(cat) {
goto(railDefaults[cat]);
}

// ── 세션 ─────────────────────────────────────────────
function restoreSession() {
try {
var saved = sessionStorage.getItem("aldosa_biz_session");
if (saved) {
session = JSON.parse(saved);
showView("dash");
goto("home");
loadDashboard();
return true;
}
} catch (e) {}
return false;
}

function saveSession() {
try { sessionStorage.setItem("aldosa_biz_session", JSON.stringify(session)); } catch (e) {}
}

function doLogin() {
var loginId = els.loginId.value.trim();
var pw = els.loginPw.value;
els.loginError.hidden = true;
if (!loginId || !pw) {
els.loginError.textContent = "아이디와 비밀번호를 입력해주세요.";
els.loginError.hidden = false;
return;
}
els.loginBtn.disabled = true;
callApi({ action: "enterpriseLogin", login_id: loginId, password: pw }).then(function (res) {
els.loginBtn.disabled = false;
if (!res.success) {
els.loginError.textContent = res.message || "로그인에 실패했습니다.";
els.loginError.hidden = false;
return;
}
session = res.enterprise;
pendingLoginPassword = pw;
if (session.temp_password_flag) {
showView("pw");
} else {
saveSession();
showView("dash");
goto("home");
loadDashboard();
}
}).catch(function () {
els.loginBtn.disabled = false;
els.loginError.textContent = "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
els.loginError.hidden = false;
});
}

function doChangePassword() {
var p1 = els.newPw1.value, p2 = els.newPw2.value;
els.pwError.hidden = true;
if (p1.length < 8) {
els.pwError.textContent = "비밀번호는 8자 이상이어야 합니다.";
els.pwError.hidden = false;
return;
}
if (p1 !== p2) {
els.pwError.textContent = "비밀번호가 일치하지 않습니다.";
els.pwError.hidden = false;
return;
}
els.pwSubmitBtn.disabled = true;
callApi({
action: "enterpriseChangePassword",
enterprise_id: session.enterprise_id,
current_password: pendingLoginPassword,
new_password: p1
}).then(function (res) {
els.pwSubmitBtn.disabled = false;
if (!res.success) {
els.pwError.textContent = res.message || "변경에 실패했습니다.";
els.pwError.hidden = false;
return;
}
session.temp_password_flag = false;
saveSession();
showView("dash");
goto("home");
loadDashboard();
}).catch(function () {
els.pwSubmitBtn.disabled = false;
els.pwError.textContent = "네트워크 오류가 발생했습니다.";
els.pwError.hidden = false;
});
}

function logout() {
session = null;
pendingLoginPassword = "";
try { sessionStorage.removeItem("aldosa_biz_session"); } catch (e) {}
els.loginId.value = "";
els.loginPw.value = "";
showView("login");
}

function planTierClass(tier) {
if (tier === "베이직") return "biz-tier-basic";
if (tier === "라이트") return "biz-tier-lite";
if (tier === "프리미엄") return "biz-tier-premium";
return "";
}

// ── 렌더링 ───────────────────────────────────────────
// 고객 목록: getEnterpriseDashboard가 내려주는 자산 단위(1자산=1행) 목록을 member_id 기준으로
// 프론트에서 회원 단위로 집계합니다. (2026-09-28 고객 목록 화면 개편 — 1차 프론트 집계, 백엔드는
// getEnterpriseDashboard에 email/phone/member_created_at 필드만 추가했습니다.)
function groupCustomers(list) {
var byId = {};
var order = [];
(list || []).forEach(function (r) {
if (!r.member_id) return;
if (!byId[r.member_id]) {
byId[r.member_id] = {
member_id: r.member_id, name: r.name || "", phone: r.phone || "", email: r.email || "",
member_created_at: r.member_created_at || "", assets: []
};
order.push(r.member_id);
}
byId[r.member_id].assets.push({ asset: r.asset, registered_at: r.registered_at });
});
return order.map(function (id) { return byId[id]; });
}

// 연락처 검색은 하이픈·공백 유무와 무관하게 매칭되도록 숫자만 남겨서 비교합니다.
function normalizePhoneDigits(v) {
return String(v || "").replace(/[^0-9]/g, "");
}

// 2026-09-29 고객 목록 검색 UX 개편 — 필드(이름/연락처/이메일) 선택 + 검색 버튼 방식으로 변경.
function filterCustomerGroups(groups, field, keyword) {
var kw = (keyword || "").trim();
if (!kw) return groups;
if (field === "phone") {
var kwDigits = normalizePhoneDigits(kw);
if (!kwDigits) return groups;
return groups.filter(function (g) { return normalizePhoneDigits(g.phone).indexOf(kwDigits) !== -1; });
}
var kwLower = kw.toLowerCase();
if (field === "email") {
return groups.filter(function (g) { return (g.email || "").toLowerCase().indexOf(kwLower) !== -1; });
}
return groups.filter(function (g) { return (g.name || "").toLowerCase().indexOf(kwLower) !== -1; });
}

function getSelectedCustomerSearchField() {
var checked = document.querySelector('#biz-app input[name="bizCustomerSearchField"]:checked');
return checked ? checked.value : "name";
}

function applyCustomerSearch() {
var field = getSelectedCustomerSearchField();
var keyword = els.customerSearch.value;
var filtered = filterCustomerGroups(customerGroupsCache, field, keyword);
renderCustomerGroups(filtered);
if (keyword.trim()) {
els.customerSearchResult.hidden = false;
els.customerSearchResult.textContent = filtered.length ? ("검색 결과: " + filtered.length + "명") : "일치하는 고객이 없습니다.";
} else {
els.customerSearchResult.hidden = true;
}
}

function renderCustomerGroups(groups) {
els.assetCustTbody.innerHTML = groups.map(function (g) {
return "<tr><td>" + esc(g.name) + "</td><td>" + esc(g.phone || "-") + "</td><td>" + esc(g.email || "-") + "</td><td>" + g.assets.length + "</td>" +
"<td><button type='button' class='biz-btn-link' data-member-id='" + esc(g.member_id) + "'>세부사항 보기</button></td></tr>";
}).join("") || "<tr><td colspan='5' class='biz-empty-cell'>등록된 고객·자산 내역이 없습니다.</td></tr>";
}

function openCustomerDetail(memberId) {
var g = customerGroupsCache.filter(function (x) { return x.member_id === memberId; })[0];
if (!g) return;
currentDetailMemberId = memberId;
els.customerDetailName.textContent = g.name || "-";
els.customerDetailPhone.textContent = g.phone || "-";
els.customerDetailEmail.textContent = g.email || "-";
els.customerDetailJoined.textContent = g.member_created_at ? fmtDate(g.member_created_at) : "-";
els.customerDetailAssetTbody.innerHTML = g.assets.map(function (a) {
return "<tr><td>" + esc(a.asset) + "</td><td>" + fmtDate(a.registered_at) + "</td></tr>";
}).join("") || "<tr><td colspan='2' class='biz-empty-cell'>등록된 자산이 없습니다.</td></tr>";
goto("customer-detail");
}

// ── 고객 관리 모달 (마일리지/바우처/결제) ──────────────
function openMemberModal(memberId, name) {
currentModalMemberId = memberId;
els.memberModalName.textContent = name || "-";
els.memberModalBalance.textContent = "-";
els.memberModalResult.hidden = true;
els.mileageAmount.value = "";
els.mileageReason.value = "";
els.voucherValue.value = "";
els.voucherTitle.value = "";
els.voucherMonths.value = "";
els.paymentAmount.value = "";
els.paymentReason.value = "";
els.memberVoucherTbody.innerHTML = "<tr><td colspan='4' class='biz-empty-cell'>불러오는 중...</td></tr>";
els.memberMileageTbody.innerHTML = "";
els.memberModal.hidden = false;
loadMemberDetail(memberId);
}

function closeMemberModal() {
els.memberModal.hidden = true;
currentModalMemberId = "";
}

function loadMemberDetail(memberId) {
callApi({ action: "enterpriseGetMemberDetail", enterprise_id: session.enterprise_id, member_id: memberId }).then(function (res) {
if (!res.success) {
els.memberVoucherTbody.innerHTML = "<tr><td colspan='4' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>";
return;
}
els.memberModalBalance.textContent = res.mileage_balance != null ? res.mileage_balance : "-";
renderMemberVouchers(res.coupons || []);
renderMemberMileage(res.mileage_history || []);
});
}

function renderMemberVouchers(list) {
els.memberVoucherTbody.innerHTML = list.map(function (c) {
var valueText = c.type === "percent" ? (c.value + "%") : (Number(c.value).toLocaleString() + "원");
return "<tr><td>" + esc(c.title || c.code) + "</td><td>" + esc(valueText) + "</td><td>" + esc(c.status) + "</td><td>" + fmtDate(c.expire_date) + "</td></tr>";
}).join("") || "<tr><td colspan='4' class='biz-empty-cell'>발급된 바우처가 없습니다.</td></tr>";
}

function renderMemberMileage(list) {
els.memberMileageTbody.innerHTML = list.map(function (h) {
return "<tr><td>" + esc(h.type) + "</td><td>" + esc(h.amount) + "</td><td>" + esc(h.reason || "-") + "</td><td>" + fmtDate(h.created_at) + "</td></tr>";
}).join("") || "<tr><td colspan='4' class='biz-empty-cell'>마일리지 내역이 없습니다.</td></tr>";
}

function showMemberModalResult(msg) {
els.memberModalResult.hidden = false;
els.memberModalResult.textContent = msg;
}

function submitMileageAdjust() {
var amount = parseInt(els.mileageAmount.value, 10);
if (!amount) { showMemberModalResult("조정할 마일리지 값을 입력해주세요."); return; }
els.mileageSubmitBtn.disabled = true;
callApi({
action: "enterpriseAdjustMileage", enterprise_id: session.enterprise_id, member_id: currentModalMemberId,
amount: amount, reason: els.mileageReason.value
}).then(function (res) {
els.mileageSubmitBtn.disabled = false;
showMemberModalResult(res.success ? ("마일리지가 조정되었습니다. (현재 잔액 " + res.balance + "P)") : (res.message || "처리에 실패했습니다."));
if (res.success) {
els.memberModalBalance.textContent = res.balance;
els.mileageAmount.value = "";
els.mileageReason.value = "";
loadMemberDetail(currentModalMemberId);
}
}).catch(function () {
els.mileageSubmitBtn.disabled = false;
showMemberModalResult("네트워크 오류가 발생했습니다.");
});
}

function submitVoucherIssue() {
var value = els.voucherValue.value;
if (!value) { showMemberModalResult("바우처 값을 입력해주세요."); return; }
els.voucherSubmitBtn.disabled = true;
callApi({
action: "enterpriseIssueVoucher", enterprise_id: session.enterprise_id, member_id: currentModalMemberId,
type: els.voucherType.value, value: value, title: els.voucherTitle.value, valid_months: els.voucherMonths.value
}).then(function (res) {
els.voucherSubmitBtn.disabled = false;
showMemberModalResult(res.success ? "바우처가 발급되었습니다." : (res.message || "처리에 실패했습니다."));
if (res.success) {
els.voucherValue.value = "";
els.voucherTitle.value = "";
els.voucherMonths.value = "";
loadMemberDetail(currentModalMemberId);
}
}).catch(function () {
els.voucherSubmitBtn.disabled = false;
showMemberModalResult("네트워크 오류가 발생했습니다.");
});
}

function submitPaymentRecord() {
var amount = els.paymentAmount.value;
if (!amount) { showMemberModalResult("결제금액을 입력해주세요."); return; }
els.paymentSubmitBtn.disabled = true;
callApi({
action: "enterpriseRecordPayment", enterprise_id: session.enterprise_id, member_id: currentModalMemberId,
amount: amount, reason: els.paymentReason.value
}).then(function (res) {
els.paymentSubmitBtn.disabled = false;
showMemberModalResult(res.success ? "결제가 기록되었습니다." : (res.message || "처리에 실패했습니다."));
if (res.success) {
els.paymentAmount.value = "";
els.paymentReason.value = "";
loadMemberDetail(currentModalMemberId);
}
}).catch(function () {
els.paymentSubmitBtn.disabled = false;
showMemberModalResult("네트워크 오류가 발생했습니다.");
});
}

// ── AS 진행 관리: 진행단계/견적/출고정보는 표에 인라인으로 처리하고,
//   이 모달은 견적 항목·수리처 배정·CS 메모("상세관리" 버튼 공용)만 담당합니다. (2026-09-16 정보량 매칭 개편, 2026-10-02 "상세관리" 통합)
var STAGE_KEYS = ["received", "quoted", "notified", "paid", "repaired", "shipped"];
var STAGE_SHORT = { received: "접수", quoted: "견적", notified: "안내", paid: "입금", repaired: "수리", shipped: "출고" };

function openAsModal(requestId) {
currentAsRequestId = requestId;
var cached = asListCache.filter(function (r) { return r.request_id === requestId; })[0];
els.asModalTitle.textContent = cached ? ((cached.brand + " " + cached.model).trim() + " (" + requestId + ")") : requestId;
els.asModalMeta.textContent = cached ?
("접수매장: " + (cached.store_name || "-") + " · 의뢰인: " + (cached.intake_name || "-") + " (" + (cached.intake_phone || "-") + ") · 시리얼: " + (cached.serial || "미등록")) : "-";
els.asItemResult.hidden = true;
els.asItemType.value = "오버홀";
els.asPartnerResult.hidden = true;
els.asNoteResult.hidden = true;
els.asNoteInput.value = "";
els.asItemName.value = "";
els.asItemCost.value = "";
els.asItemNote.value = "";
els.asPartnerCurrent.textContent = cached && cached.current_partner_name ? ("현재 배정: " + cached.current_partner_name) : "배정된 수리처가 없습니다.";
els.asModal.hidden = false;
loadAsItems(requestId);
loadAsNotes(requestId);
loadRepairPartners(cached ? cached.current_partner_id : "");
}

function closeAsModal() {
els.asModal.hidden = true;
currentAsRequestId = "";
}

// "확인 후 닫기" — 견적 항목/메모는 각자 "추가" 버튼을 누르는 즉시 이미 저장되므로 이 버튼 자체가 별도로 저장하지는 않음.
// 다만 입력칸에 타이핑만 해두고 "추가"를 안 누른 채 닫으면 그 내용은 저장되지 않으므로, 그런 경우만 확인을 한 번 거친다.
function hasUnsavedAsModalInput() {
return !!(els.asItemCost.value || (els.asNoteInput.value && els.asNoteInput.value.trim()));
}
function finishAsModal() {
if (hasUnsavedAsModalInput() && !confirm("입력 중인 견적 항목 비용 또는 메모가 있습니다. \"추가\"를 누르지 않으면 저장되지 않습니다. 그래도 닫으시겠습니까?")) return;
closeAsModal();
}

function loadAsItems(requestId) {
els.asItemTbody.innerHTML = "<tr><td colspan='4' class='biz-empty-cell'>불러오는 중...</td></tr>";
callApi({ action: "enterpriseGetASItems", enterprise_id: session.enterprise_id, request_id: requestId }).then(function (res) {
if (!res.success) { els.asItemTbody.innerHTML = "<tr><td colspan='4' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>"; return; }
renderAsItems(res.items || []);
});
}

function renderAsItems(list) {
els.asItemTbody.innerHTML = list.map(function (it) {
return "<tr><td>" + esc(it.item_name) + "</td><td>" + Number(it.cost || 0).toLocaleString() + "원</td><td>" + esc(it.note || "-") + "</td>" +
"<td><button type='button' class='biz-btn-link biz-btn-link-danger' data-item-id='" + esc(it.item_id) + "'>삭제</button></td></tr>";
}).join("") || "<tr><td colspan='4' class='biz-empty-cell'>등록된 견적 항목이 없습니다.</td></tr>";
}

function addAsItem() {
if (!els.asItemName.value) { els.asItemResult.hidden = false; els.asItemResult.textContent = "항목명을 입력해주세요."; return; }
els.asItemAddBtn.disabled = true;
callApi({
action: "enterpriseAddASItem", enterprise_id: session.enterprise_id, request_id: currentAsRequestId,
item_name: els.asItemName.value, cost: els.asItemCost.value || 0, note: els.asItemNote.value
}).then(function (res) {
els.asItemAddBtn.disabled = false;
els.asItemResult.hidden = false;
els.asItemResult.textContent = res.success ? ("항목이 추가되었습니다. (견적 " + Number(res.quote_amount || 0).toLocaleString() + "원 · 청구 " + Number(res.charge_amount || 0).toLocaleString() + "원으로 자동 반영)") : (res.message || "추가에 실패했습니다.");
if (res.success) {
els.asItemType.value = "오버홀"; els.asItemName.value = ""; els.asItemCost.value = ""; els.asItemNote.value = "";
loadAsItems(currentAsRequestId);
loadAsList();
}
}).catch(function () {
els.asItemAddBtn.disabled = false;
els.asItemResult.hidden = false;
els.asItemResult.textContent = "네트워크 오류가 발생했습니다.";
});
}

function deleteAsItem(itemId) {
callApi({ action: "enterpriseDeleteASItem", enterprise_id: session.enterprise_id, item_id: itemId }).then(function (res) {
els.asItemResult.hidden = false;
els.asItemResult.textContent = res.success ? ("삭제되었습니다. (견적 " + Number(res.quote_amount || 0).toLocaleString() + "원 · 청구 " + Number(res.charge_amount || 0).toLocaleString() + "원으로 자동 반영)") : (res.message || "삭제에 실패했습니다.");
if (res.success) { loadAsItems(currentAsRequestId); loadAsList(); }
});
}

function loadRepairPartners(currentPartnerId) {
callApi({ action: "enterpriseGetRepairPartners", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) return;
repairPartnersCache = res.partners || [];
els.asPartnerSelect.innerHTML = repairPartnersCache.map(function (p) {
return "<option value='" + esc(p.partner_id) + "'>" + esc(p.customer_display_name || p.partner_name) + "</option>";
}).join("") || "<option value=''>등록된 수리처가 없습니다</option>";
if (currentPartnerId) els.asPartnerSelect.value = currentPartnerId;
});
}

function assignPartner() {
var partnerId = els.asPartnerSelect.value;
if (!partnerId) { els.asPartnerResult.hidden = false; els.asPartnerResult.textContent = "배정할 수리처를 선택해주세요."; return; }
els.asPartnerAssignBtn.disabled = true;
callApi({ action: "enterpriseAssignRepairPartner", enterprise_id: session.enterprise_id, request_id: currentAsRequestId, partner_id: partnerId }).then(function (res) {
els.asPartnerAssignBtn.disabled = false;
els.asPartnerResult.hidden = false;
els.asPartnerResult.textContent = res.message || (res.success ? "배정되었습니다." : "배정에 실패했습니다.");
if (res.success) {
var p = repairPartnersCache.filter(function (x) { return x.partner_id === partnerId; })[0];
els.asPartnerCurrent.textContent = "현재 배정: " + (p ? (p.customer_display_name || p.partner_name) : partnerId);
loadAsList();
}
}).catch(function () {
els.asPartnerAssignBtn.disabled = false;
els.asPartnerResult.hidden = false;
els.asPartnerResult.textContent = "네트워크 오류가 발생했습니다.";
});
}

function loadAsNotes(requestId) {
els.asNoteTbody.innerHTML = "<tr><td colspan='3' class='biz-empty-cell'>불러오는 중...</td></tr>";
callApi({ action: "enterpriseGetNotes", enterprise_id: session.enterprise_id, request_id: requestId }).then(function (res) {
if (!res.success) { els.asNoteTbody.innerHTML = "<tr><td colspan='3' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>"; return; }
renderAsNotes(res.notes || []);
});
}

function renderAsNotes(list) {
els.asNoteTbody.innerHTML = list.map(function (n) {
return "<tr><td>" + esc(n.note) + "</td><td>" + esc(n.author || "BIZ") + "</td><td>" + fmtDate(n.created_at) + "</td></tr>";
}).join("") || "<tr><td colspan='3' class='biz-empty-cell'>등록된 메모가 없습니다.</td></tr>";
}

function addAsNote() {
if (!els.asNoteInput.value) { els.asNoteResult.hidden = false; els.asNoteResult.textContent = "메모 내용을 입력해주세요."; return; }
els.asNoteAddBtn.disabled = true;
callApi({ action: "enterpriseAddNote", enterprise_id: session.enterprise_id, request_id: currentAsRequestId, note: els.asNoteInput.value, author: session.contact_name || "BIZ" }).then(function (res) {
els.asNoteAddBtn.disabled = false;
els.asNoteResult.hidden = false;
els.asNoteResult.textContent = res.success ? "메모가 추가되었습니다." : (res.message || "추가에 실패했습니다.");
if (res.success) { els.asNoteInput.value = ""; loadAsNotes(currentAsRequestId); }
}).catch(function () {
els.asNoteAddBtn.disabled = false;
els.asNoteResult.hidden = false;
els.asNoteResult.textContent = "네트워크 오류가 발생했습니다.";
});
}

function handleReminder(btn) {
var requestId = btn.getAttribute("data-request-id");
btn.disabled = true;
callApi({ action: "enterpriseSendPaymentReminder", enterprise_id: session.enterprise_id, request_id: requestId })
.then(function (res) {
btn.disabled = false;
alert(res.message || (res.success ? "발송되었습니다." : "발송에 실패했습니다."));
if (res.success) loadAsList(); // 발송이력(발송 N회 · 최근 일시)을 바로 반영
})
.catch(function () { btn.disabled = false; alert("네트워크 오류가 발생했습니다."); });
}

function handleSerialFill(btn) {
var requestId = btn.getAttribute("data-request-id");
var serial = prompt("시리얼 번호를 입력해주세요.");
if (!serial) return;
callApi({ action: "enterpriseFillSerial", enterprise_id: session.enterprise_id, request_id: requestId, serial: serial })
.then(function (res) { alert(res.message || (res.success ? "등록되었습니다." : "등록에 실패했습니다.")); if (res.success) loadAsList(); })
.catch(function () { alert("네트워크 오류가 발생했습니다."); });
}

function handleStageToggle(dot) {
var requestId = dot.getAttribute("data-request-id");
var stage = dot.getAttribute("data-stage");
var isDone = dot.classList.contains("biz-done");
dot.style.pointerEvents = "none";
callApi({ action: "enterpriseUpdateASStage", enterprise_id: session.enterprise_id, request_id: requestId, stage: stage, clear: isDone ? "true" : "false" })
.then(function (res) {
dot.style.pointerEvents = "";
if (res.success) { loadAsList(); } else { alert(res.message || "처리에 실패했습니다."); }
}).catch(function () {
dot.style.pointerEvents = "";
alert("네트워크 오류가 발생했습니다.");
});
}

function handleBillingSave(btn) {
var requestId = btn.getAttribute("data-request-id");
var wrap = btn.closest(".biz-billing-edit");
var quote = wrap.querySelector(".biz-quote-input").value;
var charge = wrap.querySelector(".biz-charge-input").value;
btn.disabled = true;
callApi({ action: "enterpriseUpdateASBilling", enterprise_id: session.enterprise_id, request_id: requestId, quote_amount: quote, charge_amount: charge })
.then(function (res) {
btn.disabled = false;
if (res.success) { loadAsList(); } else { alert(res.message || "저장에 실패했습니다."); }
}).catch(function () { btn.disabled = false; alert("네트워크 오류가 발생했습니다."); });
}

function openDateEdit(td, r) {
if (!td || td.querySelector(".biz-date-edit-row")) return;
var editLink = td.querySelector(".biz-stage-edit-link");
var wrap = document.createElement("div");
wrap.className = "biz-date-edit-row";
wrap.innerHTML = STAGE_KEYS.map(function (s) {
return "<div class='biz-date-edit-item'><label>" + STAGE_SHORT[s] + "</label><input type='datetime-local' data-stage='" + s + "' value='" + isoToLocalInput(r["stage_" + s]) + "' /></div>";
}).join("") +
"<div class='biz-date-edit-actions'>" +
"<button type='button' class='biz-btn-sm biz-btn-dark' data-act='date-save' data-request-id='" + esc(r.request_id) + "'>저장</button>" +
"<button type='button' class='biz-btn-sm biz-btn-outline' data-act='date-cancel' data-request-id='" + esc(r.request_id) + "'>취소</button>" +
"</div>";
editLink.insertAdjacentElement("afterend", wrap);
}

function handleShipEdit(box, r) {
if (!box) return;
var isPickup = r.shipping_method === "방문출고";
box.innerHTML = "<div class='biz-sb-label'>출고 정보 수정</div>" +
"<div style='display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;'>" +
"<select class='biz-f biz-ship-edit-carrier'>" +
["우체국택배", "CJ대한통운", "한진택배", "로젠택배", "기타", "방문출고"].map(function (c) {
return "<option value='" + c + "'" + (r.shipping_method === c ? " selected" : "") + ">" + c + "</option>";
}).join("") +
"</select>" +
"<input class='biz-f biz-ship-edit-value' placeholder='" + (isPickup ? "수령인 성명" : "운송장번호") + "' value='" + esc(r.tracking_info || "") + "' />" +
"</div>" +
"<div class='biz-date-edit-actions'>" +
"<button type='button' class='biz-btn-sm biz-btn-dark' data-act='ship-save' data-request-id='" + esc(r.request_id) + "'>저장</button>" +
"<button type='button' class='biz-btn-sm biz-btn-outline' data-act='ship-cancel' data-request-id='" + esc(r.request_id) + "'>취소</button>" +
"</div>";
box.setAttribute("data-request-id", r.request_id);
var sel = box.querySelector(".biz-ship-edit-carrier");
sel.addEventListener("change", function () {
box.querySelector(".biz-ship-edit-value").placeholder = sel.value === "방문출고" ? "수령인 성명" : "운송장번호";
});
}

function handleShipSave(box) {
var requestId = box.getAttribute("data-request-id");
var carrier = box.querySelector(".biz-ship-edit-carrier").value;
var value = box.querySelector(".biz-ship-edit-value").value.trim();
if (!value) { alert("값을 입력해주세요."); return; }
callApi({ action: "enterpriseUpdateASBilling", enterprise_id: session.enterprise_id, request_id: requestId, shipping_method: carrier, tracking_info: value })
.then(function (res) { if (res.success) { loadAsList(); } else { alert(res.message || "저장에 실패했습니다."); } })
.catch(function () { alert("네트워크 오류가 발생했습니다."); });
}

function shipBoxHtml(r) {
if (!r.stage_repaired) return "";
if (!r.stage_shipped) {
return "<div class='biz-ship-box'><div class='biz-sb-label'>출고 정보</div><div class='biz-ship-wait'>출고 대기중 — \"출고 관리\"에서 처리해주세요</div></div>";
}
var isPickup = r.shipping_method === "방문출고";
return "<div class='biz-ship-box' data-request-id='" + esc(r.request_id) + "'>" +
"<div class='biz-sb-label'>출고 정보</div>" +
"<div class='biz-ship-line'><span>" + (isPickup ? "방문출고 · 수령인 " + esc(r.tracking_info || "-") : esc(r.shipping_method || "-") + " · " + esc(r.tracking_info || "-")) + "</span>" +
"<span class='biz-badge-done'>" + (isPickup ? "전달완료" : "발송완료") + "</span></div>" +
"<button type='button' class='biz-btn-sm biz-btn-outline' data-act='ship-edit' data-request-id='" + esc(r.request_id) + "'>수정</button>" +
"</div>";
}

function stageCellHtml(r) {
var dots = STAGE_KEYS.map(function (s) {
var done = !!r["stage_" + s];
return "<span class='biz-stage-dot" + (done ? " biz-done" : "") + "' data-act='stage-toggle' data-request-id='" + esc(r.request_id) + "' data-stage='" + s + "'>" + (done ? "✓" : "") + "</span>";
}).join("");
var labels = STAGE_KEYS.map(function (s) {
var done = !!r["stage_" + s];
return "<span class='" + (done ? "biz-done" : "") + "'>" + (done ? fmtDateDot(r["stage_" + s]).substring(5) : STAGE_SHORT[s]) + "</span>";
}).join("");
return "<div class='biz-stage-track'>" + dots + "</div>" +
"<div class='biz-stage-labels'>" + labels + "</div>" +
"<button type='button' class='biz-stage-edit-link' data-act='date-edit' data-request-id='" + esc(r.request_id) + "'>날짜 확인/수정</button>" +
shipBoxHtml(r);
}

// 안내문구("선택 항목에 따라...")는 더 이상 행마다 넣지 않음 — "견적/청구" 컬럼 헤더의 (ⓘ) 아이콘 title 툴팁 1곳에만 존재 (2026-10-02 재정돈)
function billingCellHtml(r) {
var id = esc(r.request_id);
return "<div class='biz-billing-edit'>" +
"<input type='number' class='biz-quote-input' value='" + esc(r.quote_amount || "") + "' placeholder='견적' />" +
"<input type='number' class='biz-charge-input' value='" + esc(r.charge_amount || "") + "' placeholder='청구' />" +
"<button type='button' class='biz-btn-sm biz-btn-dark' data-act='billing-save' data-request-id='" + id + "'>저장</button>" +
"</div>";
}

// 결제재알림: 견적안내 전/입금완료는 비활성 처리 + 사유를 버튼 title 툴팁으로만 표시(행 높이 안 늘어남).
// 발송이력("발송 N회 · 최근 MM.DD HH:mm")은 CS가 바로 봐야 하는 정보라 계속 1줄 텍스트로 노출.
function paymentReminderHtml(r) {
var id = esc(r.request_id);
if (!r.stage_notified) {
return { button: "<button type='button' class='biz-btn-xs biz-btn-disabled-sm' disabled title='견적안내 전'>결제재알림</button>", sub: "" };
}
if (r.stage_paid) {
return { button: "<button type='button' class='biz-btn-xs biz-btn-disabled-sm' disabled title='입금완료'>결제재알림</button>", sub: "" };
}
var historyText = (r.payment_reminder_count > 0)
? ("발송 " + r.payment_reminder_count + "회·" + fmtDateTimeDot(r.payment_reminder_last_sent))
: "";
return {
button: "<button type='button' class='biz-btn-xs biz-btn-outline-red' data-act='reminder' data-request-id='" + id + "'>결제재알림</button>",
sub: historyText
};
}

function actionCellHtml(r) {
var id = esc(r.request_id);
var reminder = paymentReminderHtml(r);
return "<div class='biz-action-wrap'>" +
"<div class='biz-as-actions'>" +
"<button type='button' class='biz-btn-xs biz-btn-dark' data-act='manage' data-request-id='" + id + "'>상세관리</button>" +
reminder.button +
"</div>" +
(reminder.sub ? "<div class='biz-reminder-sub'>" + esc(reminder.sub) + "</div>" : "") +
"</div>";
}

function renderAsRow(r) {
var id = esc(r.request_id);
var snCell = r.serial ? "<span>" + esc(r.serial) + "</span>" : "<button type='button' class='biz-btn-sm biz-btn-outline-red' data-act='serial-fill' data-request-id='" + id + "'>시리얼 보완</button>";
var storeMetaHtml = (r.store_name || r.staff_name || r.ofr_number)
? "<div class='biz-as-meta biz-meta-ellipsis' style='margin-top:4px;' title='" + esc((r.store_name || "-") + (r.staff_name ? " · " + r.staff_name : "") + (r.ofr_number ? " · OFR " + r.ofr_number : "")) + "'>" + esc(r.store_name || "-") + (r.staff_name ? " · " + esc(r.staff_name) : "") + (r.ofr_number ? " · OFR " + esc(r.ofr_number) : "") + "</div>"
: "";
return "<tr data-request-id='" + id + "'>" +
"<td class='biz-as-reqid'>" + id + "</td>" +
"<td class='biz-brand-name'>" + esc(r.brand) + "</td>" +
"<td class='biz-model-name'>" + esc(r.model || "-") + "</td>" +
"<td>" + snCell + "</td>" +
"<td><div class='biz-as-meta'>" + esc(r.intake_name) + "<br>" + esc(r.intake_phone) + "</div><div class='biz-as-meta biz-meta-ellipsis' style='margin-top:4px;' title='" + esc(r.symptom || "-") + "'>📝 " + esc(r.symptom || "-") + "</div>" + storeMetaHtml + "</td>" +
"<td class='biz-as-stage-cell'>" + stageCellHtml(r) + "</td>" +
"<td>" + billingCellHtml(r) + "</td>" +
"<td class='biz-as-action-cell'>" + actionCellHtml(r) + "</td>" +
"<td style='font-size:11px;color:var(--biz-muted);white-space:nowrap;'>" + fmtDateDot(r.requested_at) + "</td>" +
"</tr>";
}

function renderAS(list) {
asListCache = list;
els.asTbody.innerHTML = list.map(renderAsRow).join("") || "<tr><td colspan='9' class='biz-empty-cell'>접수된 AS건이 없습니다.</td></tr>";
}

function loadAsList() {
els.asTbody.innerHTML = "<tr><td colspan='9' class='biz-empty-cell'>불러오는 중...</td></tr>";
callApi({ action: "enterpriseGetASList", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) { els.asTbody.innerHTML = "<tr><td colspan='9' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>"; return; }
renderAS(res.list || []);
}).catch(function () {
els.asTbody.innerHTML = "<tr><td colspan='9' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>";
});
}

function fillProfile() {
els.infoCompanyName.textContent = session.company_name || "-";
els.infoContactName.textContent = session.contact_name || "-";
els.infoLoginId.textContent = session.login_id || "-";
els.infoBizRegNo.textContent = session.business_reg_number || "-";
els.infoAddress.textContent = session.address || "-";
els.infoContactPhone.textContent = session.contact_phone || "-";
els.infoContactEmail.textContent = session.contact_email || "-";
}

function loadDashboard() {
els.companyName.textContent = session.company_name || "";
els.planTag.textContent = (session.plan_tier || "") + " 플랜";
els.currentPlanTag.textContent = (session.plan_tier || "-") + " 플랜";
fillProfile();

callApi({ action: "getEnterpriseDashboard", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) return;
dashboardCache = res;

els.summaryCustomer.textContent = res.customer_count;
els.summaryAs.textContent = res.as_count;
els.summaryAsset.textContent = res.asset_count != null ? res.asset_count : "-";
els.summaryCode.textContent = res.claim_code_count != null ? res.claim_code_count : "-";

// 문자 발송 / 견적액 / 입금액 — 모두 이번 달(1일~말일, 한국시간) 기준, 금액은 VAT 포함 (2026-10-02)
var sms = res.sms_month || { total: 0, sms: 0, lms: 0 };
els.summarySms.textContent = Number(sms.total || 0).toLocaleString() + "건";
els.summarySmsSub.textContent = "단문 " + (sms.sms || 0) + " · 장문 " + (sms.lms || 0);
els.summaryQuote.textContent = Number(res.month_quote_amount || 0).toLocaleString() + "원";
els.summaryQuoteSub.textContent = "VAT 포함 · " + (res.month_quote_count || 0) + "건";
els.summaryPaid.textContent = Number(res.month_paid_amount || 0).toLocaleString() + "원";
els.summaryPaidSub.textContent = "VAT 포함 · " + (res.month_paid_count || 0) + "건";
renderNotices(res.notices || []);
els.usageCustomer.textContent = res.customer_count;
els.usageAs.textContent = res.as_count;

customerGroupsCache = groupCustomers(res.all_asset_customers || res.recent_asset_customers || []);
applyCustomerSearch();
});

callApi({ action: "getEnterpriseFunnelCounts", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) return;
els.funnelQuote.textContent = res.counts.quote_pending;
els.funnelPayment.textContent = res.counts.payment_pending;
els.funnelRepair.textContent = res.counts.repairing;
els.funnelShipment.textContent = res.counts.shipment_pending;
});
}

// ── 출고 관리 (2026-09-16 출고관리 v2 개편 — 행별 택배사/방문출고 선택 + 동적 입력 1개) ──
var SHIP_CARRIERS = ["우체국택배", "CJ대한통운", "한진택배", "로젠택배", "기타"];

function carrierSelectHtml(id) {
return "<select class='biz-f biz-carrier-select' data-request-id='" + esc(id) + "'>" +
"<option value=''>택배사 선택</option>" +
SHIP_CARRIERS.map(function (c) { return "<option>" + c + "</option>"; }).join("") +
"<option value='방문출고'>방문출고</option></select>";
}

function renderShipmentRow(r) {
var id = esc(r.request_id);
return "<tr data-request-id='" + id + "'>" +
"<td><input type='checkbox' class='biz-ship-check' value='" + id + "' /></td>" +
"<td class='biz-ship-id'>" + esc(r.shipment_temp_id) + "</td>" +
"<td>" + esc((r.brand + " " + r.model).trim()) + "</td>" +
"<td>" + esc(r.intake_name) + "</td>" +
"<td>" + esc(r.store_name) + "</td>" +
"<td>" + carrierSelectHtml(id) + "</td>" +
"<td><input class='biz-f biz-ship-value-input' placeholder='운송장번호' /></td>" +
"<td><button type='button' class='biz-btn-sm biz-btn-dark biz-ship-action-btn' data-request-id='" + id + "' disabled>발송처리</button></td>" +
"</tr>";
}

function loadShipmentList() {
els.shipmentTbody.innerHTML = "<tr><td colspan='8' class='biz-empty-cell'>불러오는 중...</td></tr>";
els.shipmentResult.hidden = true;
callApi({ action: "getEnterpriseShipmentList", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) {
els.shipmentTbody.innerHTML = "<tr><td colspan='8' class='biz-empty-cell'>목록을 불러오지 못했습니다.</td></tr>";
return;
}
shipmentListCache = res.list || [];
if (!shipmentListCache.length) {
els.shipmentTbody.innerHTML = "<tr><td colspan='8' class='biz-empty-cell'>출고 대기 중인 건이 없습니다.</td></tr>";
return;
}
els.shipmentTbody.innerHTML = shipmentListCache.map(renderShipmentRow).join("");
}).catch(function () {
els.shipmentTbody.innerHTML = "<tr><td colspan='8' class='biz-empty-cell'>목록을 불러오지 못했습니다.</td></tr>";
});
}

function checkShipRowReady(tr) {
var carrier = tr.querySelector(".biz-carrier-select").value;
var val = tr.querySelector(".biz-ship-value-input").value.trim();
tr.querySelector(".biz-ship-action-btn").disabled = !(carrier && val);
}

// 행 하나를 발송처리 — enterpriseProcessShipmentRow는 내부적으로 updateASStageCore를 재사용하므로
// "AS 진행 현황"에서 직접 출고완료 처리할 때와 동일하게 문자 발송/이력 갱신이 일어납니다.
function processShipmentRow(requestId, btn) {
var tr = btn.closest("tr");
var carrier = tr.querySelector(".biz-carrier-select").value;
var val = tr.querySelector(".biz-ship-value-input").value.trim();
btn.disabled = true;
return callApi({ action: "enterpriseProcessShipmentRow", enterprise_id: session.enterprise_id, request_id: requestId, carrier: carrier, value: val })
.then(function (res) {
if (res.success) {
tr.parentNode.removeChild(tr);
if (!els.shipmentTbody.children.length) {
els.shipmentTbody.innerHTML = "<tr><td colspan='8' class='biz-empty-cell'>출고 대기 중인 건이 없습니다.</td></tr>";
}
} else {
btn.disabled = false;
els.shipmentResult.hidden = false;
els.shipmentResult.textContent = res.message || "처리에 실패했습니다.";
}
return res;
}).catch(function () {
btn.disabled = false;
els.shipmentResult.hidden = false;
els.shipmentResult.textContent = "네트워크 오류가 발생했습니다.";
});
}

// "선택 건 일괄 발송처리" — 새 대량 액션을 따로 두지 않고, 각 행이 이미 입력해둔 값 그대로
// 행 단위 액션(processShipmentRow)을 선택된 행마다 순서대로 호출합니다.
function submitBulkShipment() {
var trs = Array.prototype.slice.call(document.querySelectorAll("#biz-app .biz-ship-check:checked")).map(function (c) { return c.closest("tr"); });
if (!trs.length) {
els.shipmentResult.hidden = false;
els.shipmentResult.textContent = "출고 처리할 건을 선택해주세요.";
return;
}
els.shipmentResult.hidden = true;
var skipped = 0;
var chain = Promise.resolve();
trs.forEach(function (tr) {
chain = chain.then(function () {
var btn = tr.querySelector(".biz-ship-action-btn");
if (!btn || btn.disabled) { skipped++; return; }
return processShipmentRow(tr.getAttribute("data-request-id"), btn);
});
});
chain.then(function () {
els.shipmentResult.hidden = false;
els.shipmentResult.textContent = "선택한 건 처리를 완료했습니다." + (skipped ? " (택배사/운송장번호 미입력 " + skipped + "건은 건너뛰었습니다)" : "");
});
}

// ── 인사이트: 처리 기간 / 처리 비용 분석 ────────────────
function renderBarList(container, buckets, unit) {
var max = Math.max.apply(null, buckets.map(function (b) { return b.count; }).concat([1]));
container.innerHTML = buckets.map(function (b) {
var pct = Math.round((b.count / max) * 100);
return "<div class='biz-bar-row'><div class='biz-bar-label'>" + esc(b.label) + "</div>" +
"<div class='biz-bar-track'><div class='biz-bar-fill' style='width:" + pct + "%;'></div></div>" +
"<div class='biz-bar-count'>" + b.count + unit + "</div></div>";
}).join("");
}

function loadInsightStats() {
callApi({ action: "enterpriseGetProcessingStats", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) return;
var p = res.period, c = res.cost;
els.insightAvgDays.textContent = p.avg_days + "일";
els.insightCompletedCount.textContent = p.completed_count + "건";
els.insightInProgressCount.textContent = p.in_progress_count + "건";
els.insightMaxDays.textContent = p.max_days + "일";
renderBarList(els.insightPeriodBars, p.buckets, "건");

els.insightAvgCharge.textContent = Number(c.avg_charge || 0).toLocaleString() + "원";
els.insightBilledCount.textContent = c.billed_count + "건";
els.insightAvgQuote.textContent = Number(c.avg_quote || 0).toLocaleString() + "원";
els.insightTotalCharge.textContent = Number(c.total_charge || 0).toLocaleString() + "원";
renderBarList(els.insightCostBars, c.buckets, "건");
});
}

// ── 재고 관리 (등록된 자산 목록 — 연결된 회원 소유 + 이 매장 접수로 생성된 자산) ──
function renderAssetRow(a) {
	return "<tr><td><div class='biz-brand-name'>" + esc(a.brand) + "</div><div class='biz-model-name'>" + esc(a.model || "-") + "</div></td>" +
		"<td>" + esc(a.serial || "-") + "</td>" +
		"<td>" + esc(a.brand_type || "-") + "</td>" +
		"<td>" + esc(a.status || "-") + "</td>" +
		"<td>" + esc(a.intake_name || "-") + (a.intake_phone ? "<br>" + esc(a.intake_phone) : "") + "</td>" +
		"<td>" + fmtDateDot(a.registered_at) + "</td></tr>";
}

function renderAssetList(list) {
	assetListCache = list;
	els.assetTbody.innerHTML = list.map(renderAssetRow).join("") || "<tr><td colspan='6' class='biz-empty-cell'>등록된 자산이 없습니다.</td></tr>";
}

function loadAssetList() {
	els.assetTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>불러오는 중...</td></tr>";
	callApi({ action: "enterpriseGetAssets", enterprise_id: session.enterprise_id }).then(function (res) {
		if (!res.success) { els.assetTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>"; return; }
		renderAssetList(res.assets || []);
	}).catch(function () {
		els.assetTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>";
	});
}

// ── QR 발행·활성화 (사전등록용 쥬얼리 코드 — sku_store_name으로 이 기업 스코프) ──
function renderCodeRow(c) {
	var canReactivate = c.status === "미사용잠금";
	return "<tr><td>" + esc(c.code) + "</td>" +
		"<td>" + esc(c.sku_brand || "-") + " " + esc(c.sku_product_name || "") + "</td>" +
		"<td>" + esc(c.status) + "</td>" +
		"<td>" + fmtDateDot(c.created_at) + "</td>" +
		"<td>" + (canReactivate ? "<button type='button' class='biz-btn-sm biz-btn-outline' data-act='code-reactivate' data-code-id='" + esc(c.code_id) + "'>재활성화</button>" : "") + "</td></tr>";
}

function renderCodeList(list) {
	codeListCache = list;
	els.qrTbody.innerHTML = list.map(renderCodeRow).join("") || "<tr><td colspan='5' class='biz-empty-cell'>발행된 QR 코드가 없습니다.</td></tr>";
	var total = list.length, claimed = 0, active = 0;
	list.forEach(function (c) {
		if (c.status === "사용완료") claimed++;
		else if (c.status === "미사용") active++;
	});
	els.qrTotalCount.textContent = total;
	els.qrActiveCount.textContent = active;
	els.qrClaimedCount.textContent = claimed;
}

function loadCodeList() {
	els.qrTbody.innerHTML = "<tr><td colspan='5' class='biz-empty-cell'>불러오는 중...</td></tr>";
	callApi({ action: "enterpriseGetCodes", enterprise_id: session.enterprise_id }).then(function (res) {
		if (!res.success) { els.qrTbody.innerHTML = "<tr><td colspan='5' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>"; return; }
		renderCodeList(res.codes || []);
	}).catch(function () {
		els.qrTbody.innerHTML = "<tr><td colspan='5' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>";
	});
}

function generateCodes() {
	var brand = els.qrBrand.value.trim();
	var productName = els.qrProductName.value.trim();
	var count = parseInt(els.qrCount.value, 10);
	els.qrGenerateResult.hidden = true;
	if (!brand || !productName || !count) {
		els.qrGenerateResult.hidden = false;
		els.qrGenerateResult.textContent = "브랜드, 상품명, 발행 수량을 모두 입력해주세요.";
		return;
	}
	els.qrGenerateBtn.disabled = true;
	callApi({ action: "enterpriseBulkGenerateJewelryCodes", enterprise_id: session.enterprise_id, brand: brand, product_name: productName, count: count })
		.then(function (res) {
			els.qrGenerateBtn.disabled = false;
			els.qrGenerateResult.hidden = false;
			els.qrGenerateResult.textContent = res.success ? (res.count + "개의 QR 코드가 발행되었습니다.") : (res.message || "발행에 실패했습니다.");
			if (res.success) {
				els.qrBrand.value = ""; els.qrProductName.value = ""; els.qrCount.value = "";
				loadCodeList();
			}
		}).catch(function () {
			els.qrGenerateBtn.disabled = false;
			els.qrGenerateResult.hidden = false;
			els.qrGenerateResult.textContent = "네트워크 오류가 발생했습니다.";
		});
}

function reactivateCode(codeId) {
	callApi({ action: "enterpriseReactivateCode", enterprise_id: session.enterprise_id, code_id: codeId }).then(function (res) {
		alert(res.message || (res.success ? "재활성화되었습니다." : "재활성화에 실패했습니다."));
		if (res.success) loadCodeList();
	}).catch(function () { alert("네트워크 오류가 발생했습니다."); });
}

// ── 입고 관리 / AS 신규 접수 (이 화면에서 접수하면 즉시 AS_Requests + Assets에 등록되고,
//   문자 발송까지 createASRequestCore가 처리 — 이후 진행은 "AS 진행 현황"에서) ──
function loadIntakeSymptoms() {
	if (intakeSymptomsLoaded) return;
	callApi({ action: "getASOptions", category: "watch" }).then(function (res) {
		if (!res.success) return;
		intakeSymptomsLoaded = true;
		els.intakeSymptom.innerHTML = "<option value=''>증상 선택</option>" +
			(res.symptoms || []).map(function (s) { return "<option>" + esc(s) + "</option>"; }).join("");
	});
}

// "입고 관리" 하단 목록 — 세션 한정 캐시가 아니라 enterpriseGetASList(전체 이력, AS 진행 현황과 동일 API)를 그대로 재사용.
// 새로고침해도, 다른 담당자가 봐도 온라인접수(member_id 있음)/매장접수(member_id 없음) 전체가 동일하게 보임.
function renderIntakeList(list) {
	var filtered = list.filter(function (r) {
		if (intakeChannelFilter === "online") return !!r.member_id;
		if (intakeChannelFilter === "store") return !r.member_id;
		return true;
	});
	els.intakeListTbody.innerHTML = filtered.map(function (r) {
		var channelHtml = r.member_id
			? "<span class='biz-channel-chip biz-channel-online'>온라인 접수</span>"
			: "<span class='biz-channel-chip biz-channel-store'>매장 접수</span>";
		var noteHtml = r.request_note
			? "<div style='font-size:10px;color:var(--biz-muted);margin-top:2px;' title=\"" + esc(r.request_note) + "\">📝 " + esc(r.request_note.length > 16 ? r.request_note.slice(0, 16) + "..." : r.request_note) + "</div>"
			: "";
		return "<tr><td>" + esc(r.request_id) + "</td><td>" + channelHtml + "</td>" +
			"<td>" + esc((r.brand + " " + (r.model || "")).trim()) + "</td>" +
			"<td>" + esc(r.intake_name || "-") + "</td>" +
			"<td>" + esc(r.symptom || "-") + noteHtml + "</td>" +
			"<td style='font-size:11px;color:var(--biz-muted);white-space:nowrap;'>" + (r.requested_at ? new Date(r.requested_at).toLocaleString("ko-KR") : "-") + "</td></tr>";
	}).join("") || "<tr><td colspan='6' class='biz-empty-cell'>등록된 입고 건이 없습니다.</td></tr>";
}

function loadIntakeList() {
	els.intakeListTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>불러오는 중...</td></tr>";
	callApi({ action: "enterpriseGetASList", enterprise_id: session.enterprise_id }).then(function (res) {
		if (!res.success) { els.intakeListTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>"; return; }
		intakeListCache = res.list || [];
		renderIntakeList(intakeListCache);
	}).catch(function () {
		els.intakeListTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>";
	});
}

function setIntakeFilter(channel) {
	intakeChannelFilter = channel;
	[els.intakeFilterAll, els.intakeFilterOnline, els.intakeFilterStore].forEach(function (b) { b.classList.remove("biz-filter-active"); });
	(channel === "online" ? els.intakeFilterOnline : channel === "store" ? els.intakeFilterStore : els.intakeFilterAll).classList.add("biz-filter-active");
	renderIntakeList(intakeListCache);
}

function submitIntake() {
	var brandSelectVal = els.intakeBrand.value;
	var brand = brandSelectVal === "기타" ? els.intakeBrandCustom.value.trim() : brandSelectVal;
	var name = els.intakeName.value.trim();
	var phone = els.intakePhone.value.trim();
	els.intakeResult.hidden = true;
	if (!brand) {
		els.intakeResult.hidden = false;
		els.intakeResult.textContent = brandSelectVal === "기타" ? "브랜드명을 입력해주세요." : "브랜드는 필수입니다.";
		return;
	}
	if (!name || !phone) {
		els.intakeResult.hidden = false;
		els.intakeResult.textContent = "의뢰인 성명, 연락처는 필수입니다.";
		return;
	}
	els.intakeSubmitBtn.disabled = true;
	callApi({
		action: "enterpriseCreateASRequest", enterprise_id: session.enterprise_id,
		brand: brand, model: els.intakeModel.value.trim(), serial: els.intakeSerial.value.trim(),
		symptom: els.intakeSymptom.value, request_note: els.intakeRequestNote.value.trim(), ofr_number: els.intakeOfr.value.trim(),
		intake_name: name, intake_phone: phone, purchase_date: els.intakePurchaseDate.value
	}).then(function (res) {
		els.intakeSubmitBtn.disabled = false;
		els.intakeResult.hidden = false;
		els.intakeResult.textContent = res.success ? ("AS 접수가 등록되었습니다. (접수번호 " + res.request_id + ")") : (res.message || "접수에 실패했습니다.");
		if (res.success) {
			loadIntakeList();
			els.intakeBrand.value = ""; els.intakeBrandCustom.value = ""; els.intakeBrandCustomWrap.hidden = true;
			els.intakeModel.value = ""; els.intakeSerial.value = "";
			els.intakeSymptom.value = ""; els.intakeRequestNote.value = ""; els.intakeOfr.value = ""; els.intakeName.value = "";
			els.intakePhone.value = ""; els.intakePurchaseDate.value = "";
		}
	}).catch(function () {
		els.intakeSubmitBtn.disabled = false;
		els.intakeResult.hidden = false;
		els.intakeResult.textContent = "네트워크 오류가 발생했습니다.";
	});
}

// ── 이벤트 바인딩 ────────────────────────────────────
els.loginBtn.addEventListener("click", doLogin);
els.loginPw.addEventListener("keydown", function (e) { if (e.key === "Enter") doLogin(); });
els.pwSubmitBtn.addEventListener("click", doChangePassword);
els.logoutBtn.addEventListener("click", logout);

els.railHome.addEventListener("click", goHome);
els.railCustomer.addEventListener("click", function () { gotoCategoryDefault("customer"); });
els.railInsight.addEventListener("click", function () { gotoCategoryDefault("insight"); });
els.railPlatform.addEventListener("click", function () { gotoCategoryDefault("platform"); });

if (els.noticeList) {
els.noticeList.addEventListener("click", function (ev) {
var head = ev.target.closest(".biz-notice-head");
if (!head) return;
var body = head.nextElementSibling;
if (body) body.hidden = !body.hidden;
});
}

document.querySelectorAll("#biz-app [data-goto]").forEach(function (el) {
el.addEventListener("click", function () { goto(el.getAttribute("data-goto")); });
});

els.shipmentSelectAll.addEventListener("change", function () {
var checked = els.shipmentSelectAll.checked;
document.querySelectorAll("#biz-app .biz-ship-check").forEach(function (c) { c.checked = checked; });
});
els.shipmentSubmitBtn.addEventListener("click", submitBulkShipment);

els.shipmentTbody.addEventListener("change", function (e) {
var sel = e.target.closest(".biz-carrier-select");
if (!sel) return;
var tr = sel.closest("tr");
var isPickup = sel.value === "방문출고";
tr.querySelector(".biz-ship-value-input").placeholder = isPickup ? "수령인 성명" : "운송장번호";
tr.querySelector(".biz-ship-action-btn").textContent = isPickup ? "전달완료" : "발송처리";
checkShipRowReady(tr);
});
els.shipmentTbody.addEventListener("input", function (e) {
if (!e.target.classList.contains("biz-ship-value-input")) return;
checkShipRowReady(e.target.closest("tr"));
});
els.shipmentTbody.addEventListener("click", function (e) {
var btn = e.target.closest(".biz-ship-action-btn");
if (!btn) return;
processShipmentRow(btn.getAttribute("data-request-id"), btn);
});

els.planChangeBtn.addEventListener("click", function () {
goto("contact");
els.contactType.value = "요금제";
});

els.contactSubmitBtn.addEventListener("click", function () {
els.contactResult.hidden = false;
els.contactResult.textContent = "문의 접수 기능은 준비 중입니다. 급하신 사항은 알도사 고객센터로 연락해주세요.";
});

els.profileEditBtn.addEventListener("click", function () {
els.profileResult.hidden = false;
els.profileResult.textContent = "정보 수정 기능은 준비 중입니다. 변경이 필요하시면 위 문의하기 메뉴를 이용해주세요.";
});

els.assetCustTbody.addEventListener("click", function (e) {
var btn = e.target.closest("[data-member-id]");
if (!btn) return;
openCustomerDetail(btn.getAttribute("data-member-id"));
});
els.customerSearchBtn.addEventListener("click", applyCustomerSearch);
els.customerSearch.addEventListener("keydown", function (e) { if (e.key === "Enter") applyCustomerSearch(); });
els.customerSearchResetBtn.addEventListener("click", function () {
els.customerSearch.value = "";
applyCustomerSearch();
});
els.customerDetailBackBtn.addEventListener("click", function () { goto("customer-list"); });
els.customerDetailManageBtn.addEventListener("click", function () {
var g = customerGroupsCache.filter(function (x) { return x.member_id === currentDetailMemberId; })[0];
openMemberModal(currentDetailMemberId, g ? g.name : "");
});
els.memberModalCloseBtn.addEventListener("click", closeMemberModal);
els.memberModal.addEventListener("click", function (e) {
if (e.target === els.memberModal) closeMemberModal();
});
els.mileageSubmitBtn.addEventListener("click", submitMileageAdjust);
els.voucherSubmitBtn.addEventListener("click", submitVoucherIssue);
els.paymentSubmitBtn.addEventListener("click", submitPaymentRecord);

// AS 진행 관리 표 안의 모든 인라인 액션(상세관리, 진행단계 토글, 날짜 확인/수정,
// 결제재알림, 시리얼 보완, 견적/청구 저장, 출고정보 수정)을 data-act 속성 하나로 위임 처리
els.asTbody.addEventListener("click", function (e) {
var el = e.target.closest("[data-act]");
if (!el) return;
var act = el.getAttribute("data-act");
var requestId = el.getAttribute("data-request-id");
var r = asListCache.filter(function (x) { return x.request_id === requestId; })[0];

if (act === "manage") { openAsModal(requestId); return; }
if (act === "stage-toggle") { handleStageToggle(el); return; }
if (act === "reminder") { handleReminder(el); return; }
if (act === "serial-fill") { handleSerialFill(el); return; }
if (act === "billing-save") { handleBillingSave(el); return; }
if (act === "date-edit") { openDateEdit(el.closest(".biz-as-stage-cell"), r); return; }
if (act === "date-cancel") { var row = el.closest(".biz-date-edit-row"); if (row) row.parentNode.removeChild(row); return; }
if (act === "date-save") {
var wrap = el.closest(".biz-date-edit-row");
var payload = { action: "enterpriseUpdateASStageDates", enterprise_id: session.enterprise_id, request_id: requestId };
wrap.querySelectorAll("input[type=datetime-local]").forEach(function (inp) {
payload[inp.getAttribute("data-stage")] = localInputToIso(inp.value);
});
callApi(payload).then(function (res) {
if (res.success) { loadAsList(); } else { alert(res.message || "저장에 실패했습니다."); }
}).catch(function () { alert("네트워크 오류가 발생했습니다."); });
return;
}
if (act === "ship-edit") { handleShipEdit(el.closest(".biz-ship-box"), r); return; }
if (act === "ship-cancel") { renderAS(asListCache); return; }
if (act === "ship-save") { handleShipSave(el.closest(".biz-ship-box")); return; }
});
els.asModalCloseBtn.addEventListener("click", closeAsModal);
els.asModalDoneBtn.addEventListener("click", finishAsModal);
els.asModal.addEventListener("click", function (e) {
if (e.target === els.asModal) closeAsModal();
});
els.asItemAddBtn.addEventListener("click", addAsItem);
els.asItemType.addEventListener("change", function () {
if (els.asItemType.value === "기타") { els.asItemName.value = ""; els.asItemName.focus(); }
else { els.asItemName.value = els.asItemType.value; }
});
els.asItemTbody.addEventListener("click", function (e) {
var btn = e.target.closest("[data-item-id]");
if (!btn) return;
deleteAsItem(btn.getAttribute("data-item-id"));
});
els.asPartnerAssignBtn.addEventListener("click", assignPartner);
els.asNoteAddBtn.addEventListener("click", addAsNote);

els.qrGenerateBtn.addEventListener("click", generateCodes);
els.qrTbody.addEventListener("click", function (e) {
	var btn = e.target.closest("[data-act='code-reactivate']");
	if (!btn) return;
	reactivateCode(btn.getAttribute("data-code-id"));
});

els.intakeSubmitBtn.addEventListener("click", submitIntake);
els.intakeBrand.addEventListener("change", function () {
	els.intakeBrandCustomWrap.hidden = els.intakeBrand.value !== "기타";
});
els.intakeFilterAll.addEventListener("click", function () { setIntakeFilter("all"); });
els.intakeFilterOnline.addEventListener("click", function () { setIntakeFilter("online"); });
els.intakeFilterStore.addEventListener("click", function () { setIntakeFilter("store"); });

if (!restoreSession()) showView("login");
})();