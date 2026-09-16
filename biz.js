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
flyoutCustomer: document.getElementById("bizFlyoutCustomer"),
flyoutInsight: document.getElementById("bizFlyoutInsight"),
flyoutPlatform: document.getElementById("bizFlyoutPlatform"),
pinCustomer: document.getElementById("bizPinCustomer"),
pinInsight: document.getElementById("bizPinInsight"),
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
asStageResult: document.getElementById("bizAsStageResult"),
asQuoteAmount: document.getElementById("bizAsQuoteAmount"),
asChargeAmount: document.getElementById("bizAsChargeAmount"),
asBillingSaveBtn: document.getElementById("bizAsBillingSaveBtn"),
asBillingResult: document.getElementById("bizAsBillingResult"),
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
asSerialInput: document.getElementById("bizAsSerialInput"),
asSerialBtn: document.getElementById("bizAsSerialBtn"),
asSerialResult: document.getElementById("bizAsSerialResult"),
asNoteTbody: document.getElementById("bizAsNoteTbody"),
asNoteInput: document.getElementById("bizAsNoteInput"),
asNoteAddBtn: document.getElementById("bizAsNoteAddBtn"),
asNoteResult: document.getElementById("bizAsNoteResult"),
asReminderBtn: document.getElementById("bizAsReminderBtn"),
asReminderResult: document.getElementById("bizAsReminderResult")
};

var session = null;
var pendingLoginPassword = "";
var pinned = { customer: false, insight: false, platform: false };
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

function statusTagHtml(status) {
var isDone = String(status || "").indexOf("완료") !== -1;
return '<span class="biz-status-tag' + (isDone ? " biz-status-done" : "") + '">' + esc(status || "-") + "</span>";
}

// ── 플라이아웃 열기/닫기 ──────────────────────────────
var flyoutMap = { customer: els.flyoutCustomer, insight: els.flyoutInsight, platform: els.flyoutPlatform };
var railMap = { customer: els.railCustomer, insight: els.railInsight, platform: els.railPlatform };
var pinMap = { customer: els.pinCustomer, insight: els.pinInsight, platform: els.pinPlatform };

function closeAllFlyouts(exceptKey) {
Object.keys(flyoutMap).forEach(function (k) {
if (k !== exceptKey && !pinned[k]) {
flyoutMap[k].classList.remove("biz-show");
railMap[k].classList.remove("active");
}
});
}

function toggleFlyout(key) {
var el = flyoutMap[key];
var railEl = railMap[key];
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

// 현재 보고 있는 화면의 카테고리를 레일 아이콘 강조로 표시 (풍선 메뉴가 닫혀도 "지금 위치"는 계속 표시됨)
function setActiveRail(cat) {
els.railHome.classList.toggle("active", cat === "home");
els.railCustomer.classList.toggle("active", cat === "customer");
els.railInsight.classList.toggle("active", cat === "insight");
els.railPlatform.classList.toggle("active", cat === "platform");
}

function togglePin(key) {
pinned[key] = !pinned[key];
var btn = pinMap[key];
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
if (catOf[viewId] === "insight") flyBtn.classList.add("biz-insight-active");
}

var cat = catOf[viewId];
setActiveRail(cat);
closeAllFlyouts(null); // 메뉴 항목 선택 시 풍선 메뉴 자동으로 닫힘 (고정(📌)된 메뉴는 유지)

els.crumb.innerHTML = catNames[cat] + (cat !== "home" ? " &nbsp;/&nbsp; <b>" + pageNames[viewId] + "</b>" : "");
els.pageTitle.textContent = pageNames[viewId];

if (viewId === "shipment") loadShipmentList();
if (viewId === "insight-period" || viewId === "insight-cost") loadInsightStats();
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

// ── AS 상세보기 모달 (스테이지/견적/수리처배정/시리얼/CS메모/결제재알림) ──
var STAGE_LABELS = { received: "접수완료", quoted: "견적완료", notified: "안내완료", paid: "입금완료", repaired: "수리완료", shipped: "출고완료" };

function openAsModal(requestId) {
currentAsRequestId = requestId;
var cached = asListCache.filter(function (r) { return r.request_id === requestId; })[0];
els.asModalTitle.textContent = cached ? ((cached.brand + " " + cached.model).trim() + " (" + requestId + ")") : requestId;
els.asModalMeta.textContent = "불러오는 중...";
els.asStageResult.hidden = true;
els.asBillingResult.hidden = true;
els.asItemResult.hidden = true;
els.asPartnerResult.hidden = true;
els.asSerialResult.hidden = true;
els.asNoteResult.hidden = true;
els.asReminderResult.hidden = true;
els.asSerialInput.value = "";
els.asNoteInput.value = "";
els.asItemName.value = "";
els.asItemCost.value = "";
els.asItemNote.value = "";
document.querySelectorAll("#biz-app .biz-stage-btn").forEach(function (b) { b.classList.remove("biz-stage-done"); });
els.asModal.hidden = false;
loadAsDetail(requestId);
loadAsItems(requestId);
loadAsNotes(requestId);
loadRepairPartners();
}

function closeAsModal() {
els.asModal.hidden = true;
currentAsRequestId = "";
}

function loadAsDetail(requestId) {
callApi({ action: "enterpriseGetASDetail", enterprise_id: session.enterprise_id, request_id: requestId }).then(function (res) {
if (!res.success) {
els.asModalMeta.textContent = res.message || "불러오지 못했습니다.";
return;
}
els.asModalMeta.textContent = "접수매장: " + (res.store_name || "-") + " · 의뢰인: " + (res.intake_name || "-") + " (" + (res.intake_phone || "-") + ") · 접수일: " + fmtDate(res.requested_at) + " · 시리얼: " + (res.serial || "미등록");
document.querySelectorAll("#biz-app .biz-stage-btn").forEach(function (b) {
var stage = b.getAttribute("data-stage");
b.classList.toggle("biz-stage-done", !!res["stage_" + stage]);
});
els.asQuoteAmount.value = res.quote_amount || "";
els.asChargeAmount.value = res.charge_amount || "";
els.asPartnerCurrent.textContent = res.current_partner_name ? ("현재 배정: " + res.current_partner_name) : "배정된 수리처가 없습니다.";
if (res.current_partner_id) els.asPartnerSelect.value = res.current_partner_id;
});
}

function toggleStage(stage, btn) {
var isDone = btn.classList.contains("biz-stage-done");
btn.disabled = true;
callApi({
action: "enterpriseUpdateASStage", enterprise_id: session.enterprise_id, request_id: currentAsRequestId,
stage: stage, clear: isDone ? "true" : "false"
}).then(function (res) {
btn.disabled = false;
els.asStageResult.hidden = false;
els.asStageResult.textContent = res.message || (res.success ? "처리되었습니다." : "처리에 실패했습니다.");
if (res.success) {
btn.classList.toggle("biz-stage-done", !isDone);
loadDashboard();
}
}).catch(function () {
btn.disabled = false;
els.asStageResult.hidden = false;
els.asStageResult.textContent = "네트워크 오류가 발생했습니다.";
});
}

function submitBilling() {
els.asBillingSaveBtn.disabled = true;
callApi({
action: "enterpriseUpdateASBilling", enterprise_id: session.enterprise_id, request_id: currentAsRequestId,
quote_amount: els.asQuoteAmount.value, charge_amount: els.asChargeAmount.value
}).then(function (res) {
els.asBillingSaveBtn.disabled = false;
els.asBillingResult.hidden = false;
els.asBillingResult.textContent = res.message || (res.success ? "저장되었습니다." : "저장에 실패했습니다.");
}).catch(function () {
els.asBillingSaveBtn.disabled = false;
els.asBillingResult.hidden = false;
els.asBillingResult.textContent = "네트워크 오류가 발생했습니다.";
});
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

function loadRepairPartners() {
callApi({ action: "enterpriseGetRepairPartners", enterprise_id: session.enterprise_id }).then(function (res) {
if (!res.success) return;
repairPartnersCache = res.partners || [];
els.asPartnerSelect.innerHTML = repairPartnersCache.map(function (p) {
return "<option value='" + esc(p.partner_id) + "'>" + esc(p.customer_display_name || p.partner_name) + "</option>";
}).join("") || "<option value=''>등록된 수리처가 없습니다</option>";
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
if (res.success) loadAsDetail(currentAsRequestId);
}).catch(function () {
els.asPartnerAssignBtn.disabled = false;
els.asPartnerResult.hidden = false;
els.asPartnerResult.textContent = "네트워크 오류가 발생했습니다.";
});
}

function submitSerial() {
if (!els.asSerialInput.value) { els.asSerialResult.hidden = false; els.asSerialResult.textContent = "시리얼 번호를 입력해주세요."; return; }
els.asSerialBtn.disabled = true;
callApi({ action: "enterpriseFillSerial", enterprise_id: session.enterprise_id, request_id: currentAsRequestId, serial: els.asSerialInput.value }).then(function (res) {
els.asSerialBtn.disabled = false;
els.asSerialResult.hidden = false;
els.asSerialResult.textContent = res.message || (res.success ? "등록되었습니다." : "등록에 실패했습니다.");
if (res.success) loadAsDetail(currentAsRequestId);
}).catch(function () {
els.asSerialBtn.disabled = false;
els.asSerialResult.hidden = false;
els.asSerialResult.textContent = "네트워크 오류가 발생했습니다.";
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

function sendReminder() {
els.asReminderBtn.disabled = true;
callApi({ action: "enterpriseSendPaymentReminder", enterprise_id: session.enterprise_id, request_id: currentAsRequestId }).then(function (res) {
els.asReminderBtn.disabled = false;
els.asReminderResult.hidden = false;
els.asReminderResult.textContent = res.message || (res.success ? "발송되었습니다." : "발송에 실패했습니다.");
}).catch(function () {
els.asReminderBtn.disabled = false;
els.asReminderResult.hidden = false;
els.asReminderResult.textContent = "네트워크 오류가 발생했습니다.";
});
}

function renderAS(list) {
asListCache = list;
els.asTbody.innerHTML = list.map(function (r) {
return "<tr><td>" + esc(r.store_name) + "</td><td>" + esc((r.brand + " " + r.model).trim()) + "</td><td>" + esc(r.intake_name) + "</td><td>" + statusTagHtml(r.status) + "</td><td>" + fmtDate(r.requested_at) + "</td>" +
"<td><button type='button' class='biz-btn-link' data-request-id='" + esc(r.request_id) + "'>상세</button></td></tr>";
}).join("") || "<tr><td colspan='6' class='biz-empty-cell'>접수된 AS건이 없습니다.</td></tr>";
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
els.railCustomer.addEventListener("click", function () { toggleFlyout("customer"); });
els.railInsight.addEventListener("click", function () { toggleFlyout("insight"); });
els.railPlatform.addEventListener("click", function () { toggleFlyout("platform"); });
els.pinCustomer.addEventListener("click", function () { togglePin("customer"); });
els.pinInsight.addEventListener("click", function () { togglePin("insight"); });
els.pinPlatform.addEventListener("click", function () { togglePin("platform"); });

// 풍선 메뉴 바깥(본문 영역 등)을 클릭하면 고정 안 된 풍선 메뉴는 자동으로 닫힘
document.addEventListener("click", function (e) {
if (e.target.closest("#biz-app .biz-flyout") || e.target.closest("#biz-app .biz-rail-item")) return;
closeAllFlyouts(null);
});

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

els.asTbody.addEventListener("click", function (e) {
var btn = e.target.closest("[data-request-id]");
if (!btn) return;
openAsModal(btn.getAttribute("data-request-id"));
});
els.asModalCloseBtn.addEventListener("click", closeAsModal);
els.asModal.addEventListener("click", function (e) {
if (e.target === els.asModal) closeAsModal();
});
document.querySelectorAll("#biz-app .biz-stage-btn").forEach(function (btn) {
btn.addEventListener("click", function () { toggleStage(btn.getAttribute("data-stage"), btn); });
});
els.asBillingSaveBtn.addEventListener("click", submitBilling);
els.asItemAddBtn.addEventListener("click", addAsItem);
els.asItemTbody.addEventListener("click", function (e) {
var btn = e.target.closest("[data-item-id]");
if (!btn) return;
deleteAsItem(btn.getAttribute("data-item-id"));
});
els.asPartnerAssignBtn.addEventListener("click", assignPartner);
els.asSerialBtn.addEventListener("click", submitSerial);
els.asNoteAddBtn.addEventListener("click", addAsNote);
els.asReminderBtn.addEventListener("click", sendReminder);

if (!restoreSession()) showView("login");
})();