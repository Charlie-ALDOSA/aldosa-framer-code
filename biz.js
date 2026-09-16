(function () {
var API_URL = "https://script.google.com/macros/s/AKfycbyk1khfq0I8XNYDgvPcIa0aTzYayAM7HekoRapfCZc7CEqfDR2Eh3AxUi8ceqemk4aK3A/exec";

var catNames = { home: "홈", customer: "고객서비스 관리", insight: "인사이트", platform: "알도사 서비스 관리" };
var pageNames = {
"home": "대시보드 홈",
"customer-list": "고객 목록", "customer-inquiry": "회원 문의",
"product-inventory": "재고 관리", "product-qr": "QR 발행·활성화",
"order-intake": "입고 현황", "as-status": "AS 진행 현황", "shipment": "출고 관리",
"settlement-summary": "정산 요약", "settlement-history": "정산 내역",
"insight-ranking": "모델별 AS 랭킹", "insight-failure-type": "고장 유형 분석",
"insight-period": "처리 기간 분석", "insight-cost": "처리 비용 분석",
"usage": "사용량", "billing": "이용료 결제",
"plan": "요금제", "profile": "기업 정보", "contact": "문의하기"
};
var catOf = {
"home": "home",
"customer-list": "customer", "customer-inquiry": "customer",
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
"customer-list": "bizScreenCustomerList", "customer-inquiry": "bizScreenCustomerInquiry",
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
usageCustomer: document.getElementById("bizUsageCustomer"),
usageAs: document.getElementById("bizUsageAs"),
assetCustTbody: document.getElementById("bizAssetCustTbody"),
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
asNoteResult: document.getElementById("bizAsNoteResult")
};

var session = null;
var pendingLoginPassword = "";
var dashboardCache = null;
var shipmentListCache = [];
var currentModalMemberId = "";
var asListCache = [];
var currentAsRequestId = "";
var repairPartnersCache = [];

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
function renderCustomers(list) {
els.assetCustTbody.innerHTML = list.map(function (r) {
return "<tr><td>" + esc(r.name) + "</td><td>" + esc(r.asset) + "</td><td>" + fmtDate(r.registered_at) + "</td>" +
"<td>" + (r.member_id ? "<button type='button' class='biz-btn-link' data-member-id='" + esc(r.member_id) + "' data-member-name='" + esc(r.name) + "'>관리</button>" : "") + "</td></tr>";
}).join("") || "<tr><td colspan='4' class='biz-empty-cell'>등록된 고객·자산 내역이 없습니다.</td></tr>";
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

// ── AS 진행 현황: 진행단계/견적/출고정보는 표에 인라인으로 처리하고,
//   이 모달은 견적 항목·수리처 배정·CS 메모("항목보기"/"메모" 버튼 공용)만 담당합니다. (2026-09-16 정보량 매칭 개편)
var STAGE_KEYS = ["received", "quoted", "notified", "paid", "repaired", "shipped"];
var STAGE_SHORT = { received: "접수", quoted: "견적", notified: "안내", paid: "입금", repaired: "수리", shipped: "출고" };

function openAsModal(requestId) {
currentAsRequestId = requestId;
var cached = asListCache.filter(function (r) { return r.request_id === requestId; })[0];
els.asModalTitle.textContent = cached ? ((cached.brand + " " + cached.model).trim() + " (" + requestId + ")") : requestId;
els.asModalMeta.textContent = cached ?
("접수매장: " + (cached.store_name || "-") + " · 의뢰인: " + (cached.intake_name || "-") + " (" + (cached.intake_phone || "-") + ") · 시리얼: " + (cached.serial || "미등록")) : "-";
els.asItemResult.hidden = true;
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
els.asItemResult.textContent = res.success ? "항목이 추가되었습니다." : (res.message || "추가에 실패했습니다.");
if (res.success) {
els.asItemName.value = ""; els.asItemCost.value = ""; els.asItemNote.value = "";
loadAsItems(currentAsRequestId);
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
els.asItemResult.textContent = res.message || (res.success ? "삭제되었습니다." : "삭제에 실패했습니다.");
if (res.success) loadAsItems(currentAsRequestId);
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
.then(function (res) { btn.disabled = false; alert(res.message || (res.success ? "발송되었습니다." : "발송에 실패했습니다.")); })
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
var reminderDisabled = !!r.stage_paid;
return "<div class='biz-stage-track'>" + dots + "</div>" +
"<div class='biz-stage-labels'>" + labels + "</div>" +
"<button type='button' class='biz-stage-edit-link' data-act='date-edit' data-request-id='" + esc(r.request_id) + "'>날짜 확인/수정</button>" +
"<div class='biz-payment-reminder'><button type='button' class='biz-btn-sm " + (reminderDisabled ? "biz-btn-disabled-sm" : "biz-btn-outline-red") + "' data-act='reminder' data-request-id='" + esc(r.request_id) + "'" + (reminderDisabled ? " disabled" : "") + ">결제 재알림</button></div>" +
shipBoxHtml(r);
}

function billingCellHtml(r) {
var id = esc(r.request_id);
return "<div class='biz-billing-edit'>" +
"<input type='number' class='biz-quote-input' value='" + esc(r.quote_amount || "") + "' placeholder='견적' />" +
"<input type='number' class='biz-charge-input' value='" + esc(r.charge_amount || "") + "' placeholder='청구' />" +
"<button type='button' class='biz-btn-sm biz-btn-dark' data-act='billing-save' data-request-id='" + id + "'>저장</button>" +
"</div>";
}

function renderAsRow(r) {
var id = esc(r.request_id);
var snCell = r.serial ? "<span>" + esc(r.serial) + "</span>" : "<button type='button' class='biz-btn-sm biz-btn-outline-red' data-act='serial-fill' data-request-id='" + id + "'>시리얼 보완</button>";
return "<tr data-request-id='" + id + "'>" +
"<td class='biz-as-reqid'>" + id + "</td>" +
"<td><div class='biz-as-store'>" + esc(r.store_name || "-") + "</div><div class='biz-as-meta'>" + esc(r.staff_name || "-") + (r.ofr_number ? "<br>OFR " + esc(r.ofr_number) : "") + "</div></td>" +
"<td><div class='biz-brand-name'>" + esc(r.brand) + "</div><div class='biz-model-name'>" + esc(r.model) + "</div></td>" +
"<td>" + snCell + "</td>" +
"<td><div class='biz-as-meta'>" + esc(r.intake_name) + "<br>" + esc(r.intake_phone) + "</div><div class='biz-as-meta' style='margin-top:4px;'>📝 " + esc(r.symptom || "-") + "</div></td>" +
"<td class='biz-as-stage-cell'>" + stageCellHtml(r) + "</td>" +
"<td><button type='button' class='biz-btn-sm biz-btn-dark' data-act='manage' data-request-id='" + id + "'>항목보기</button></td>" +
"<td><button type='button' class='biz-btn-sm biz-btn-outline-gold' data-act='manage' data-request-id='" + id + "'>메모</button></td>" +
"<td>" + billingCellHtml(r) + "</td>" +
"<td style='font-size:11px;color:var(--biz-muted);white-space:nowrap;'>" + fmtDateDot(r.requested_at) + "</td>" +
"</tr>";
}

function renderAS(list) {
asListCache = list;
els.asTbody.innerHTML = list.map(renderAsRow).join("") || "<tr><td colspan='10' class='biz-empty-cell'>접수된 AS건이 없습니다.</td></tr>";
}

function loadAsList() {
els.asTbody.innerHTML = "<tr><td colspan='10' class='biz-empty-cell'>불러오는 중...</td></tr>";
callApi({ action: "enterpriseGetASList", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) { els.asTbody.innerHTML = "<tr><td colspan='10' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>"; return; }
renderAS(res.list || []);
}).catch(function () {
els.asTbody.innerHTML = "<tr><td colspan='10' class='biz-empty-cell'>불러오지 못했습니다.</td></tr>";
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
els.usageCustomer.textContent = res.customer_count;
els.usageAs.textContent = res.as_count;

renderCustomers(res.all_asset_customers || res.recent_asset_customers || []);
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

// ── 이벤트 바인딩 ────────────────────────────────────
els.loginBtn.addEventListener("click", doLogin);
els.loginPw.addEventListener("keydown", function (e) { if (e.key === "Enter") doLogin(); });
els.pwSubmitBtn.addEventListener("click", doChangePassword);
els.logoutBtn.addEventListener("click", logout);

els.railHome.addEventListener("click", goHome);
els.railCustomer.addEventListener("click", function () { gotoCategoryDefault("customer"); });
els.railInsight.addEventListener("click", function () { gotoCategoryDefault("insight"); });
els.railPlatform.addEventListener("click", function () { gotoCategoryDefault("platform"); });

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
openMemberModal(btn.getAttribute("data-member-id"), btn.getAttribute("data-member-name"));
});
els.memberModalCloseBtn.addEventListener("click", closeMemberModal);
els.memberModal.addEventListener("click", function (e) {
if (e.target === els.memberModal) closeMemberModal();
});
els.mileageSubmitBtn.addEventListener("click", submitMileageAdjust);
els.voucherSubmitBtn.addEventListener("click", submitVoucherIssue);
els.paymentSubmitBtn.addEventListener("click", submitPaymentRecord);

// AS 진행 현황 표 안의 모든 인라인 액션(항목보기/메모, 진행단계 토글, 날짜 확인/수정,
// 결제 재알림, 시리얼 보완, 견적/청구 저장, 출고정보 수정)을 data-act 속성 하나로 위임 처리
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
els.asModal.addEventListener("click", function (e) {
if (e.target === els.asModal) closeAsModal();
});
els.asItemAddBtn.addEventListener("click", addAsItem);
els.asItemTbody.addEventListener("click", function (e) {
var btn = e.target.closest("[data-item-id]");
if (!btn) return;
deleteAsItem(btn.getAttribute("data-item-id"));
});
els.asPartnerAssignBtn.addEventListener("click", assignPartner);
els.asNoteAddBtn.addEventListener("click", addAsNote);

if (!restoreSession()) showView("login");
})();