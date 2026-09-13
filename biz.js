(function () {
var API_URL = "https://script.google.com/macros/s/AKfycbyk1khfq0I8XNYDgvPcIa0aTzYayAM7HekoRapfCZc7CEqfDR2Eh3AxUi8ceqemk4aK3A/exec";

var catNames = { home: "홈", customer: "고객서비스 관리", platform: "알도사 서비스 관리" };
var pageNames = {
"home": "대시보드 홈",
"customer-list": "고객 목록", "customer-inquiry": "회원 문의",
"product-inventory": "재고 관리", "product-qr": "QR 발행·활성화",
"order-intake": "입고 현황", "as-status": "AS 진행 현황", "shipment": "출고 관리",
"settlement-summary": "정산 요약", "settlement-history": "정산 내역",
"usage": "사용량", "billing": "이용료 결제",
"plan": "요금제", "profile": "기업 정보", "contact": "문의하기"
};
var catOf = {
"home": "home",
"customer-list": "customer", "customer-inquiry": "customer",
"product-inventory": "customer", "product-qr": "customer",
"order-intake": "customer", "as-status": "customer", "shipment": "customer",
"settlement-summary": "customer", "settlement-history": "customer",
"usage": "platform", "billing": "platform",
"plan": "platform", "profile": "platform", "contact": "platform"
};

var screenIds = {
"home": "bizScreenHome",
"customer-list": "bizScreenCustomerList", "customer-inquiry": "bizScreenCustomerInquiry",
"product-inventory": "bizScreenProductInventory", "product-qr": "bizScreenProductQr",
"order-intake": "bizScreenOrderIntake", "as-status": "bizScreenAsStatus", "shipment": "bizScreenShipment",
"settlement-summary": "bizScreenSettlementSummary", "settlement-history": "bizScreenSettlementHistory",
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
railPlatform: document.getElementById("bizRailPlatform"),
flyoutCustomer: document.getElementById("bizFlyoutCustomer"),
flyoutPlatform: document.getElementById("bizFlyoutPlatform"),
pinCustomer: document.getElementById("bizPinCustomer"),
pinPlatform: document.getElementById("bizPinPlatform"),
funnelQuote: document.getElementById("bizFunnelQuote"),
funnelPayment: document.getElementById("bizFunnelPayment"),
funnelRepair: document.getElementById("bizFunnelRepair"),
funnelShipment: document.getElementById("bizFunnelShipment"),
summaryCustomer: document.getElementById("bizSummaryCustomer"),
summaryCode: document.getElementById("bizSummaryCode"),
summaryAsset: document.getElementById("bizSummaryAsset"),
summaryAs: document.getElementById("bizSummaryAs"),
usageCustomer: document.getElementById("bizUsageCustomer"),
usageAs: document.getElementById("bizUsageAs"),
assetCustTbody: document.getElementById("bizAssetCustTbody"),
asTbody: document.getElementById("bizAsTbody"),
shipmentTbody: document.getElementById("bizShipmentTbody"),
shipmentSelectAll: document.getElementById("bizShipmentSelectAll"),
shipmentMethod: document.getElementById("bizShipmentMethod"),
shipmentCourier: document.getElementById("bizShipmentCourier"),
shipmentTracking: document.getElementById("bizShipmentTracking"),
shipmentSubmitBtn: document.getElementById("bizShipmentSubmitBtn"),
shipmentResult: document.getElementById("bizShipmentResult"),
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
profileResult: document.getElementById("bizProfileResult")
};

var session = null;
var pendingLoginPassword = "";
var pinned = { customer: false, platform: false };
var dashboardCache = null;
var shipmentListCache = [];

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

function statusTagHtml(status) {
var isDone = String(status || "").indexOf("완료") !== -1;
return '<span class="biz-status-tag' + (isDone ? " biz-status-done" : "") + '">' + esc(status || "-") + "</span>";
}

// ── 플라이아웃 열기/닫기 ──────────────────────────────
function closeAllFlyouts(exceptKey) {
["customer", "platform"].forEach(function (k) {
if (k !== exceptKey && !pinned[k]) {
(k === "customer" ? els.flyoutCustomer : els.flyoutPlatform).classList.remove("biz-show");
(k === "customer" ? els.railCustomer : els.railPlatform).classList.remove("active");
}
});
}

function toggleFlyout(key) {
var el = key === "customer" ? els.flyoutCustomer : els.flyoutPlatform;
var railEl = key === "customer" ? els.railCustomer : els.railPlatform;
var isShown = el.classList.contains("biz-show");
closeAllFlyouts(key);
if (isShown && !pinned[key]) {
el.classList.remove("biz-show");
railEl.classList.remove("active");
} else {
el.classList.add("biz-show");
railEl.classList.add("active");
els.railHome.classList.remove("active");
}
}

function togglePin(key) {
pinned[key] = !pinned[key];
var btn = key === "customer" ? els.pinCustomer : els.pinPlatform;
btn.classList.toggle("biz-pinned", pinned[key]);
btn.title = pinned[key] ? "고정됨 (다시 클릭 시 해제)" : "펼침 고정";
}

// ── 화면 전환 ────────────────────────────────────────
function goto(viewId) {
Object.keys(screenIds).forEach(function (key) {
var el = document.getElementById(screenIds[key]);
if (el) el.hidden = key !== viewId;
});

document.querySelectorAll("#biz-app .biz-fly-item").forEach(function (b) {
b.classList.remove("biz-active", "biz-platform-active");
});
var flyBtn = document.querySelector('#biz-app .biz-fly-item[data-goto="' + viewId + '"]');
if (flyBtn) {
flyBtn.classList.add("biz-active");
if (catOf[viewId] === "platform") flyBtn.classList.add("biz-platform-active");
}

var cat = catOf[viewId];
els.railHome.classList.toggle("active", cat === "home");
if (cat === "home") closeAllFlyouts(null);

els.crumb.innerHTML = catNames[cat] + (cat !== "home" ? " &nbsp;/&nbsp; <b>" + pageNames[viewId] + "</b>" : "");
els.pageTitle.textContent = pageNames[viewId];

if (viewId === "shipment") loadShipmentList();
}

function goHome() {
goto("home");
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
function renderCustomers(list) {
els.assetCustTbody.innerHTML = list.map(function (r) {
return "<tr><td>" + esc(r.name) + "</td><td>" + esc(r.asset) + "</td><td>" + fmtDate(r.registered_at) + "</td></tr>";
}).join("") || "<tr><td colspan='3' class='biz-empty-cell'>등록된 고객·자산 내역이 없습니다.</td></tr>";
}

function renderAS(list) {
els.asTbody.innerHTML = list.map(function (r) {
return "<tr><td>" + esc(r.store_name) + "</td><td>" + esc((r.brand + " " + r.model).trim()) + "</td><td>" + esc(r.intake_name) + "</td><td>" + statusTagHtml(r.status) + "</td><td>" + fmtDate(r.requested_at) + "</td></tr>";
}).join("") || "<tr><td colspan='5' class='biz-empty-cell'>접수된 AS건이 없습니다.</td></tr>";
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
els.usageCustomer.textContent = res.customer_count;
els.usageAs.textContent = res.as_count;

renderCustomers(res.all_asset_customers || res.recent_asset_customers || []);
renderAS(res.all_as || res.recent_as || []);
});

callApi({ action: "getEnterpriseFunnelCounts", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) return;
els.funnelQuote.textContent = res.counts.quote_pending;
els.funnelPayment.textContent = res.counts.payment_pending;
els.funnelRepair.textContent = res.counts.repairing;
els.funnelShipment.textContent = res.counts.shipment_pending;
});
}

// ── 출고 관리 ────────────────────────────────────────
function loadShipmentList() {
els.shipmentTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>불러오는 중...</td></tr>";
els.shipmentResult.hidden = true;
callApi({ action: "getEnterpriseShipmentList", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) {
els.shipmentTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>목록을 불러오지 못했습니다.</td></tr>";
return;
}
shipmentListCache = res.list || [];
if (!shipmentListCache.length) {
els.shipmentTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>출고 대기 중인 건이 없습니다.</td></tr>";
return;
}
els.shipmentTbody.innerHTML = shipmentListCache.map(function (r) {
return "<tr>" +
"<td><input type='checkbox' class='biz-ship-check' value='" + esc(r.request_id) + "' /></td>" +
"<td>" + esc(r.shipment_temp_id) + "</td>" +
"<td>" + esc((r.brand + " " + r.model).trim()) + "</td>" +
"<td>" + esc(r.intake_name) + "</td>" +
"<td>" + esc(r.store_name) + "</td>" +
"<td>" + esc(r.shipment_method || "-") + "</td>" +
"</tr>";
}).join("");
}).catch(function () {
els.shipmentTbody.innerHTML = "<tr><td colspan='6' class='biz-empty-cell'>목록을 불러오지 못했습니다.</td></tr>";
});
}

function submitShipment() {
var checked = Array.prototype.slice.call(document.querySelectorAll("#biz-app .biz-ship-check:checked")).map(function (c) { return c.value; });
if (!checked.length) {
els.shipmentResult.hidden = false;
els.shipmentResult.textContent = "출고 처리할 건을 선택해주세요.";
return;
}
els.shipmentSubmitBtn.disabled = true;
callApi({
action: "enterpriseProcessShipment",
enterprise_id: session.enterprise_id,
request_ids: JSON.stringify(checked),
shipment_method: els.shipmentMethod.value,
shipping_method: els.shipmentCourier.value,
tracking_info: els.shipmentTracking.value
}).then(function (res) {
els.shipmentSubmitBtn.disabled = false;
els.shipmentResult.hidden = false;
els.shipmentResult.textContent = res.message || (res.success ? "처리되었습니다." : "처리에 실패했습니다.");
if (res.success) {
els.shipmentCourier.value = "";
els.shipmentTracking.value = "";
loadShipmentList();
}
}).catch(function () {
els.shipmentSubmitBtn.disabled = false;
els.shipmentResult.hidden = false;
els.shipmentResult.textContent = "네트워크 오류가 발생했습니다.";
});
}

// ── 이벤트 바인딩 ────────────────────────────────────
els.loginBtn.addEventListener("click", doLogin);
els.loginPw.addEventListener("keydown", function (e) { if (e.key === "Enter") doLogin(); });
els.pwSubmitBtn.addEventListener("click", doChangePassword);
els.logoutBtn.addEventListener("click", logout);

els.railHome.addEventListener("click", goHome);
els.railCustomer.addEventListener("click", function () { toggleFlyout("customer"); });
els.railPlatform.addEventListener("click", function () { toggleFlyout("platform"); });
els.pinCustomer.addEventListener("click", function () { togglePin("customer"); });
els.pinPlatform.addEventListener("click", function () { togglePin("platform"); });

document.querySelectorAll("#biz-app [data-goto]").forEach(function (el) {
el.addEventListener("click", function () { goto(el.getAttribute("data-goto")); });
});

els.shipmentSelectAll.addEventListener("change", function () {
var checked = els.shipmentSelectAll.checked;
document.querySelectorAll("#biz-app .biz-ship-check").forEach(function (c) { c.checked = checked; });
});
els.shipmentSubmitBtn.addEventListener("click", submitShipment);

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

if (!restoreSession()) showView("login");
})();