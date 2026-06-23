var DRIVE_FOLDER_ID = "19kcvsuGDCioDP4Vq20PX5LclgxE4duEQ";
var ADMIN_KEY = "ALDOSA_ADMIN_2026";

// ── 순번 발급 (Counters 시트 기반) — 짧은 주문번호 생성용 ──
function getNextSequence(counterName) {
  var sheet = getSheet("Counters");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === counterName) {
      var next = (parseInt(rows[i][1]) || 0) + 1;
      sheet.getRange(i + 1, 2).setValue(next);
      return next;
    }
  }
  sheet.appendRow([counterName, 1]);
  return 1;
}

function padSeq(num, length) {
  return String(num).padStart(length, "0");
}

function doGet(e) {
  var action = e.parameter.action;
  if (action === "signup") return signup(e.parameter);
  if (action === "login") return login(e.parameter);
  if (action === "registerWatch") return registerWatch(e.parameter);
  if (action === "getWatches") return getWatches(e.parameter);
  if (action === "getProvenance") return getProvenance(e.parameter);
  if (action === "submitAS") return submitAS(e.parameter);
  if (action === "getAS") return getAS(e.parameter);
  if (action === "getWorkTypes") return getWorkTypes(e.parameter);
  if (action === "getShops") return getShops(e.parameter);
  if (action === "searchShops") return searchShops(e.parameter);
  if (action === "claimWatch") return claimWatch(e.parameter);
  if (action === "requestShop") return requestShop(e.parameter);
  if (action === "adminGetPending") return adminGetPending(e.parameter);
  if (action === "adminApprove") return adminApprove(e.parameter);
  if (action === "adminReject") return adminReject(e.parameter);
  if (action === "adminCreateCode") return adminCreateCode(e.parameter);
  if (action === "adminIntakeAsset") return adminIntakeAsset(e.parameter);
  if (action === "adminAddProvenance") return adminAddProvenance(e.parameter);
  if (action === "adminAddASItem") return adminAddASItem(e.parameter);
  if (action === "adminGetASItems") return adminGetASItems(e.parameter);
  if (action === "adminDeleteASItem") return adminDeleteASItem(e.parameter);
  if (action === "getASItemsPublic") return getASItemsPublic(e.parameter);
  if (action === "adminAddNote") return adminAddNote(e.parameter);
  if (action === "adminGetNotes") return adminGetNotes(e.parameter);
  if (action === "adminUpdateNote") return adminUpdateNote(e.parameter);
  if (action === "adminGetAllAssets") return adminGetAllAssets(e.parameter);
  if (action === "adminGetCodes") return adminGetCodes(e.parameter);
  if (action === "adminCreateASRequest") return adminCreateASRequest(e.parameter);
  if (action === "adminUpdateASStage") return adminUpdateASStage(e.parameter);
  if (action === "adminGetAllAS") return adminGetAllAS(e.parameter);
  if (action === "adminUpdateASBilling") return adminUpdateASBilling(e.parameter);
  if (action === "getStores") return getStores(e.parameter);
  if (action === "getStoreStaff") return getStoreStaff(e.parameter);
  if (action === "adminFillSerial") return adminFillSerial(e.parameter);
  if (action === "submitSerialVerification") return submitSerialVerification(e.parameter);
  if (action === "adminGetPendingSerialVerifications") return adminGetPendingSerialVerifications(e.parameter);
  if (action === "adminApproveSerialVerification") return adminApproveSerialVerification(e.parameter);
  if (action === "adminRejectSerialVerification") return adminRejectSerialVerification(e.parameter);
  if (action === "getMileageBalance") return getMileageBalance(e.parameter);
  if (action === "getMileageHistory") return getMileageHistory(e.parameter);
  if (action === "getMemberGrades") return getMemberGrades(e.parameter);
  if (action === "getMemberSummary") return getMemberSummary(e.parameter);
  if (action === "adminGetAllMembers") return adminGetAllMembers(e.parameter);
  if (action === "adminAdjustMileage") return adminAdjustMileage(e.parameter);
  if (action === "adminRecordPayment") return adminRecordPayment(e.parameter);
  if (action === "issueCoupon") return issueCoupon(e.parameter);
  if (action === "getMyCoupons") return getMyCoupons(e.parameter);
  if (action === "useCoupon") return useCoupon(e.parameter);
  if (action === "verifyCouponPublic") return verifyCouponPublic(e.parameter);
  if (action === "redeemCouponByShopCode") return redeemCouponByShopCode(e.parameter);
  if (action === "adminGetMemberCoupons") return adminGetMemberCoupons(e.parameter);
  if (action === "adminDeleteCoupon") return adminDeleteCoupon(e.parameter);
  if (action === "adminUseCoupon") return adminUseCoupon(e.parameter);
  return respond({ status: "ok", message: "ALDOSA API v10 작동중 (인보이스/항목 연동)" });
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var action = data.action;
    if (action === "signup") return signup(data);
    if (action === "login") return login(data);
    if (action === "registerWatch") return registerWatch(data);
    if (action === "uploadImage") return uploadImage(data);
    if (action === "getWatches") return getWatches(data);
    if (action === "getProvenance") return getProvenance(data);
    if (action === "submitAS") return submitAS(data);
    if (action === "getAS") return getAS(data);
    if (action === "getWorkTypes") return getWorkTypes(data);
    if (action === "getShops") return getShops(data);
    if (action === "searchShops") return searchShops(data);
    if (action === "claimWatch") return claimWatch(data);
    if (action === "requestShop") return requestShop(data);
    if (action === "adminGetPending") return adminGetPending(data);
    if (action === "adminApprove") return adminApprove(data);
    if (action === "adminReject") return adminReject(data);
    if (action === "adminCreateCode") return adminCreateCode(data);
    if (action === "adminIntakeAsset") return adminIntakeAsset(data);
    if (action === "adminAddProvenance") return adminAddProvenance(data);
    if (action === "adminAddASItem") return adminAddASItem(data);
    if (action === "adminGetASItems") return adminGetASItems(data);
    if (action === "adminDeleteASItem") return adminDeleteASItem(data);
    if (action === "getASItemsPublic") return getASItemsPublic(data);
    if (action === "adminAddNote") return adminAddNote(data);
    if (action === "adminGetNotes") return adminGetNotes(data);
    if (action === "adminUpdateNote") return adminUpdateNote(data);
    if (action === "adminGetAllAssets") return adminGetAllAssets(data);
    if (action === "adminGetCodes") return adminGetCodes(data);
    if (action === "adminCreateASRequest") return adminCreateASRequest(data);
    if (action === "adminUpdateASStage") return adminUpdateASStage(data);
    if (action === "adminGetAllAS") return adminGetAllAS(data);
    if (action === "adminUpdateASBilling") return adminUpdateASBilling(data);
    if (action === "getStores") return getStores(data);
    if (action === "getStoreStaff") return getStoreStaff(data);
    if (action === "adminFillSerial") return adminFillSerial(data);
    if (action === "submitSerialVerification") return submitSerialVerification(data);
    if (action === "adminGetPendingSerialVerifications") return adminGetPendingSerialVerifications(data);
    if (action === "adminApproveSerialVerification") return adminApproveSerialVerification(data);
    if (action === "adminRejectSerialVerification") return adminRejectSerialVerification(data);
    if (action === "getMileageBalance") return getMileageBalance(data);
    if (action === "getMileageHistory") return getMileageHistory(data);
    if (action === "getMemberGrades") return getMemberGrades(data);
    if (action === "getMemberSummary") return getMemberSummary(data);
    if (action === "adminGetAllMembers") return adminGetAllMembers(data);
    if (action === "adminAdjustMileage") return adminAdjustMileage(data);
    if (action === "adminRecordPayment") return adminRecordPayment(data);
    if (action === "issueCoupon") return issueCoupon(data);
    if (action === "getMyCoupons") return getMyCoupons(data);
    if (action === "useCoupon") return useCoupon(data);
    if (action === "verifyCouponPublic") return verifyCouponPublic(data);
    if (action === "redeemCouponByShopCode") return redeemCouponByShopCode(data);
    if (action === "adminGetMemberCoupons") return adminGetMemberCoupons(data);
    if (action === "adminDeleteCoupon") return adminDeleteCoupon(data);
    if (action === "adminUseCoupon") return adminUseCoupon(data);
    return respond({ success: false, message: "알 수 없는 action" });
  } catch (err) {
    return respond({ success: false, message: err.toString() });
  }
}

// ── 회원가입 ──────────────────────────────────────────
function signup(data) {
  var sheet = getSheet("Members");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][2] === data.email) {
      return respond({ success: false, message: "이미 사용중인 이메일입니다." });
    }
  }
  var member_id = "M" + new Date().getTime();
  var created_at = new Date().toISOString();
  sheet.appendRow([member_id, data.name, data.email, data.phone, hashPassword(data.password), created_at, 0, "silver"]);
  return respond({ success: true, message: "회원가입 완료", member_id: member_id });
}

// ── 로그인 ────────────────────────────────────────────
function login(data) {
  var sheet = getSheet("Members");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][2] === data.email && rows[i][4] === hashPassword(data.password)) {
      return respond({
        success: true, message: "로그인 성공",
        member: { member_id: rows[i][0], name: rows[i][1], email: rows[i][2], phone: rows[i][3] }
      });
    }
  }
  return respond({ success: false, message: "이메일 또는 비밀번호가 올바르지 않습니다." });
}

// ── 자산 등록 (사용자 본인) ────────────────────────────
function registerWatch(data) {
  var sheet = getSheet("Assets");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][6]) === String(data.serial)) {
      return respond({ success: false, message: "이미 등록된 시리얼 번호입니다." });
    }
  }
  var asset_id = "A" + new Date().getTime();
  var registered_at = new Date().toISOString();
  var category = data.category || "watch";

  sheet.appendRow([
    asset_id, data.member_id, category, data.brand, data.model, data.reference, data.serial,
    data.purchase_date || "", data.purchase_place || "", registered_at,
    "대기중", "", data.warranty_image_url || "", data.watch_image_url || data.asset_image_url || "",
    "", "", data.attributes_json || "", "", ""
  ]);
  addProvenanceEntry(data.serial, "최초 등록", "ALDOSA 시스템에 자산 등록 완료 (검토 대기중)", "SYSTEM", 0, "", "");
  earnMileage(data.member_id, 10000, "시계 등록 적립");
  return respond({ success: true, message: "자산 등록 완료. 검토 후 승인됩니다.", watch_id: asset_id, asset_id: asset_id });
}

// ── 관리자: AS 입고 자산 등록 ───────────────────────────
function adminIntakeAsset(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("Assets");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][6]) === String(data.serial)) {
      return respond({ success: false, message: "이미 등록된 시리얼 번호입니다." });
    }
  }
  var asset_id = "A" + new Date().getTime();
  var registered_at = new Date().toISOString();
  var category = data.category || "watch";

  sheet.appendRow([
    asset_id, "", category, data.brand || "", data.model || "", data.reference || "", data.serial,
    data.purchase_date || "", data.purchase_place || "", registered_at,
    "승인", "", data.warranty_image_url || "", data.watch_image_url || data.asset_image_url || "",
    registered_at, data.admin_name || "ALDOSA", data.attributes_json || "",
    data.intake_name || "", data.intake_phone || ""
  ]);

  addProvenanceEntry(data.serial, "AS 입고", data.intake_memo || "ALDOSA 매장을 통해 AS 입고 접수됨", data.admin_name || "ALDOSA", data.cost || 0, data.shop_name || "ALDOSA", "");

  var logSheet = getSheet("Admin_Log");
  logSheet.appendRow([
    "LOG" + new Date().getTime(), "AS입고등록", asset_id,
    "의뢰인: " + (data.intake_name || "") + " / " + (data.intake_phone || ""),
    new Date().toISOString()
  ]);

  return respond({ success: true, message: "AS 입고 자산 등록 완료", asset_id: asset_id });
}

// ── 관리자: 상세 AS 접수 생성 (점포/담당자 포함, 클레임 코드 자동 발급) ──
function adminCreateASRequest(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("AS_Requests");
  var request_id = "AS" + padSeq(getNextSequence("AS_REQUEST"), 7);
  var now = new Date().toISOString();

  sheet.appendRow([
    request_id,                          // A: request_id
    data.member_id || "",                // B: member_id
    data.serial || "",                   // C: serial
    data.brand || "",                    // D: brand
    data.model || "",                    // E: model
    data.symptom || "",                  // F: symptom
    "접수완료",                           // G: status
    now,                                 // H: requested_at
    now,                                 // I: updated_at
    data.symptom_image_url || "",        // J: symptom_image_url
    data.ofr_number || "",               // K: ofr_number
    data.store_name || "",               // L: store_name
    data.purchase_date || "",            // M: purchase_date
    data.intake_name || "",              // N: intake_name
    data.intake_phone || "",             // O: intake_phone
    data.stage_received || now,          // P: stage_received
    "",                                  // Q: stage_quoted
    "",                                  // R: stage_notified
    "",                                  // S: stage_paid
    "",                                  // T: stage_repaired
    "",                                  // U: stage_shipped
    data.quote_amount || "",             // V: quote_amount
    data.charge_amount || "",            // W: charge_amount
    "",                                  // X: shipped_date
    data.shipping_method || "",          // Y: shipping_method
    "",                                  // Z: tracking_info
    data.staff_name || "",               // AA: staff_name
    data.staff_phone || ""               // AB: staff_phone
  ]);

  // 클레임 코드는 시리얼 유무와 무관하게 항상 발급 (request_id에 묶여서 발급됨)
  var assetCode = "";

  if (data.serial) {
    var assetSheet = getSheet("Assets");
    var assetRows = assetSheet.getDataRange().getValues();
    var alreadyExists = false;
    for (var i = 1; i < assetRows.length; i++) {
      if (assetRows[i][6] === data.serial) { alreadyExists = true; break; }
    }
    if (!alreadyExists) {
      var asset_id = "A" + new Date().getTime();
      assetSheet.appendRow([
        asset_id, "", "watch", data.brand || "", data.model || "", "", data.serial,
        data.purchase_date || "", "", now,
        "승인", "", "", "",
        now, "ALDOSA", "",
        data.intake_name || "", data.intake_phone || ""
      ]);
    }
  }

  var codeSheet = getSheet("Claim_Codes");
  var codeRows = codeSheet.getDataRange().getValues();
  var existingCode = "";
  if (data.serial) {
    for (var j = 1; j < codeRows.length; j++) {
      if (codeRows[j][2] === data.serial && codeRows[j][4] === "미사용") { existingCode = codeRows[j][1]; break; }
    }
  }
  if (existingCode) {
    assetCode = existingCode;
  } else {
    assetCode = "ALD-" + new Date().getFullYear() + "-" + Math.random().toString(36).substr(2, 6).toUpperCase();
    var code_id = "C" + new Date().getTime();
    codeSheet.appendRow([code_id, assetCode, data.serial || "", "", "미사용", now, "", request_id]);
  }

  return respond({ success: true, message: "AS 접수가 등록되었습니다.", request_id: request_id, claim_code: assetCode });
}

// ── 관리자: AS 진행 단계 업데이트 ───────────────────────
function adminUpdateASStage(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  if (!data.request_id || !data.stage) {
    return respond({ success: false, message: "request_id와 stage는 필수입니다." });
  }
  var stageColumnMap = { received: 16, quoted: 17, notified: 18, paid: 19, repaired: 20, shipped: 21 };
  var col = stageColumnMap[data.stage];
  if (!col) {
    return respond({ success: false, message: "알 수 없는 stage입니다." });
  }

  var sheet = getSheet("AS_Requests");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === data.request_id) {
      var dateValue;
      if (data.clear === "true") {
        dateValue = "";
      } else if (data.custom_date) {
        dateValue = data.custom_date;
      } else {
        dateValue = new Date().toISOString();
      }
      sheet.getRange(i + 1, col).setValue(dateValue);
      sheet.getRange(i + 1, 9).setValue(new Date().toISOString());

      if (data.stage === "shipped" && dateValue) {
        sheet.getRange(i + 1, 24).setValue(dateValue);
        sheet.getRange(i + 1, 7).setValue("출고완료");
        var serial = rows[i][2];
        var requestId = rows[i][0];
        var chargeAmount = rows[i][22] || 0;
        var repairVendor = data.repair_vendor || rows[i][11] || "ALDOSA";

        // AS_Items에서 항목명들을 모아 이력 설명을 자동 구성
        var itemDesc = "";
        var itemsSheet = getSheet("AS_Items");
        if (itemsSheet) {
          var itemRows = itemsSheet.getDataRange().getValues();
          var names = [];
          for (var k = 1; k < itemRows.length; k++) {
            if (String(itemRows[k][1]) === String(requestId)) names.push(itemRows[k][3]);
          }
          if (names.length > 0) itemDesc = names.join(", ");
        }
        var description = itemDesc || data.repair_summary || "AS 출고 작업 완료 처리 완료";

        upsertShippedProvenance(serial, requestId, "출고 완료", description, data.admin_name || "ALDOSA", chargeAmount, repairVendor, data.warranty_months || "");
      }

      var logSheet = getSheet("Admin_Log");
      logSheet.appendRow(["LOG" + new Date().getTime(), "AS단계업데이트:" + data.stage, data.request_id, dateValue ? "완료 처리" : "취소 처리", new Date().toISOString()]);

      return respond({ success: true, message: "단계가 업데이트되었습니다." });
    }
  }
  return respond({ success: false, message: "AS 접수를 찾을 수 없습니다." });
}

// ── 관리자: 견적/청구 금액 업데이트 ─────────────────────
function adminUpdateASBilling(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("AS_Requests");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === data.request_id) {
      if (data.quote_amount !== undefined) sheet.getRange(i + 1, 22).setValue(data.quote_amount);
      if (data.charge_amount !== undefined) sheet.getRange(i + 1, 23).setValue(data.charge_amount);
      if (data.shipping_method !== undefined) sheet.getRange(i + 1, 25).setValue(data.shipping_method);
      if (data.tracking_info !== undefined) sheet.getRange(i + 1, 26).setValue(data.tracking_info);
      if (data.staff_name !== undefined) sheet.getRange(i + 1, 27).setValue(data.staff_name);
      if (data.staff_phone !== undefined) sheet.getRange(i + 1, 28).setValue(data.staff_phone);
      sheet.getRange(i + 1, 9).setValue(new Date().toISOString());
      return respond({ success: true, message: "정보가 업데이트되었습니다." });
    }
  }
  return respond({ success: false, message: "AS 접수를 찾을 수 없습니다." });
}

// ── 관리자: 전체 AS 목록 조회 ───────────────────────────
function adminGetAllAS(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("AS_Requests");
  var rows = sheet.getDataRange().getValues();
  var list = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    list.push({
      request_id: rows[i][0], member_id: rows[i][1] || "", serial: String(rows[i][2] || ""), brand: rows[i][3], model: rows[i][4],
      symptom: rows[i][5], status: rows[i][6], requested_at: rows[i][7], updated_at: rows[i][8],
      symptom_image_url: rows[i][9] || "", ofr_number: rows[i][10] || "", store_name: rows[i][11] || "",
      purchase_date: rows[i][12] || "", intake_name: rows[i][13] || "", intake_phone: rows[i][14] || "",
      stage_received: rows[i][15] || "", stage_quoted: rows[i][16] || "", stage_notified: rows[i][17] || "",
      stage_paid: rows[i][18] || "", stage_repaired: rows[i][19] || "", stage_shipped: rows[i][20] || "",
      quote_amount: rows[i][21] || "", charge_amount: rows[i][22] || "", shipped_date: rows[i][23] || "",
      shipping_method: rows[i][24] || "", tracking_info: rows[i][25] || "",
      staff_name: rows[i][26] || "", staff_phone: rows[i][27] || ""
    });
  }
  return respond({ success: true, requests: list });
}

// ════════════════════════════════════════════════
// 마일리지 / 회원등급 / 쿠폰 시스템
// ════════════════════════════════════════════════

// ── 회원 등급 조회 (이름/적립률/기준금액은 Member_Grades 시트에서 관리, 코드 수정 불필요) ──
// Members 시트 구조: A member_id, B name, C email, D phone, E password, F created_at, G total_spend, H tier
function getMemberGrade(member_id) {
  var mSheet = getSheet("Members");
  var mRows = mSheet.getDataRange().getValues();
  var gradeKey = "silver";
  for (var i = 1; i < mRows.length; i++) {
    if (mRows[i][0] === member_id) { gradeKey = mRows[i][7] || "silver"; break; }
  }
  var gSheet = getSheet("Member_Grades");
  var gRows = gSheet.getDataRange().getValues();
  for (var j = 1; j < gRows.length; j++) {
    if (gRows[j][0] === gradeKey) {
      return { grade_key: gradeKey, grade_name: gRows[j][1], mileage_rate: parseFloat(gRows[j][2]) || 0 };
    }
  }
  return { grade_key: gradeKey, grade_name: gradeKey, mileage_rate: 0 };
}

function getMemberGrades(data) {
  var sheet = getSheet("Member_Grades");
  var rows = sheet.getDataRange().getValues();
  var grades = [];
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0]) grades.push({ grade_key: rows[i][0], grade_name: rows[i][1], mileage_rate: parseFloat(rows[i][2]) || 0, min_spend: parseFloat(rows[i][3]) || 0 });
  }
  return respond({ success: true, grades: grades });
}

function getCumulativeSpend(member_id) {
  var mSheet = getSheet("Members");
  var mRows = mSheet.getDataRange().getValues();
  for (var i = 1; i < mRows.length; i++) {
    if (mRows[i][0] === member_id) return parseFloat(mRows[i][6]) || 0;
  }
  return 0;
}

function calcGradeByCumulativeSpend(spend) {
  var sheet = getSheet("Member_Grades");
  var rows = sheet.getDataRange().getValues();
  var list = [];
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0]) list.push({ key: rows[i][0], min_spend: parseFloat(rows[i][3]) || 0 });
  }
  list.sort(function(a, b) { return b.min_spend - a.min_spend; });
  for (var j = 0; j < list.length; j++) {
    if (spend >= list[j].min_spend) return list[j].key;
  }
  return "silver";
}

// ── 마일리지 적립/사용 (내부용) ───────────────────────
function getMileageBalanceValue(member_id) {
  var sheet = getSheet("Mileage_Ledger");
  var rows = sheet.getDataRange().getValues();
  var balance = 0;
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][1]) === String(member_id)) balance = rows[i][5];
  }
  return balance;
}

function earnMileage(member_id, amount, reason) {
  if (!member_id || !amount) return 0;
  var sheet = getSheet("Mileage_Ledger");
  var balance = getMileageBalanceValue(member_id) + amount;
  var ledger_id = "ML" + new Date().getTime();
  sheet.appendRow([ledger_id, member_id, amount, "적립", reason || "", balance, new Date().toISOString()]);
  return balance;
}

function useMileage(member_id, amount, reason) {
  var currentBalance = getMileageBalanceValue(member_id);
  if (currentBalance < amount) return { success: false, message: "마일리지가 부족합니다." };
  var sheet = getSheet("Mileage_Ledger");
  var balance = currentBalance - amount;
  var ledger_id = "ML" + new Date().getTime();
  sheet.appendRow([ledger_id, member_id, -amount, "사용", reason || "", balance, new Date().toISOString()]);
  return { success: true, balance: balance };
}

// ── 결제 발생 시 호출: 누적실적(생애 총액) 갱신 → 즉시 등급 재산정 → 등급별 비율 마일리지 적립 ──
function recordPayment(member_id, amount, reason) {
  var sheet = getSheet("Payments_Ledger");
  var payment_id = "PAY" + new Date().getTime();
  sheet.appendRow([payment_id, member_id, amount, reason || "", new Date().toISOString()]);

  var mSheet = getSheet("Members");
  var mRows = mSheet.getDataRange().getValues();
  var newTotalSpend = amount;
  var tierKey = "silver";
  for (var i = 1; i < mRows.length; i++) {
    if (mRows[i][0] === member_id) {
      newTotalSpend = (parseFloat(mRows[i][6]) || 0) + amount;
      tierKey = calcGradeByCumulativeSpend(newTotalSpend);
      mSheet.getRange(i + 1, 7).setValue(newTotalSpend); // G: total_spend (누적, 등급 산정 기준)
      mSheet.getRange(i + 1, 8).setValue(tierKey);        // H: tier
      break;
    }
  }
  var grade = getMemberGrade(member_id);
  var mileageAmount = Math.round(amount * (grade.mileage_rate / 100));
  if (mileageAmount > 0) earnMileage(member_id, mileageAmount, "결제 적립 (" + (reason || "") + ")");
  return { grade: tierKey, mileage_earned: mileageAmount, total_spend: newTotalSpend };
}

// ── 마이페이지용 종합 요약 (등급+마일리지+쿠폰 한 번에) ──
function getMemberSummary(data) {
  if (!data.member_id) return respond({ success: false, message: "member_id가 필요합니다." });
  var grade = getMemberGrade(data.member_id);
  var balance = getMileageBalanceValue(data.member_id);
  var couponSheet = getSheet("Coupons");
  var couponRows = couponSheet.getDataRange().getValues();
  var couponCount = 0;
  for (var i = 1; i < couponRows.length; i++) {
    if (!couponRows[i][0]) continue;
    var isMine = !couponRows[i][4] || String(couponRows[i][4]) === String(data.member_id);
    if (isMine && couponRows[i][5] === "미사용") couponCount++;
  }
  return respond({ success: true, grade: grade, mileage_balance: balance, coupon_count: couponCount, total_spend: getCumulativeSpend(data.member_id) });
}

// ── 고객용 공개 API ───────────────────────────────────
function getMileageBalance(data) {
  if (!data.member_id) return respond({ success: false, message: "member_id가 필요합니다." });
  var grade = getMemberGrade(data.member_id);
  return respond({ success: true, balance: getMileageBalanceValue(data.member_id), grade: grade });
}

function getMileageHistory(data) {
  if (!data.member_id) return respond({ success: false, message: "member_id가 필요합니다." });
  var sheet = getSheet("Mileage_Ledger");
  var rows = sheet.getDataRange().getValues();
  var history = [];
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][1]) === String(data.member_id)) {
      history.push({ ledger_id: rows[i][0], amount: rows[i][2], type: rows[i][3], reason: rows[i][4], balance_after: rows[i][5], created_at: rows[i][6] });
    }
  }
  return respond({ success: true, history: history });
}

// ── 관리자용 ──────────────────────────────────────────
function adminAdjustMileage(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.member_id || data.amount === undefined) return respond({ success: false, message: "member_id와 amount가 필요합니다." });
  var amount = parseInt(data.amount);
  if (amount >= 0) {
    var newBalance = earnMileage(data.member_id, amount, data.reason || "관리자 지급");
    return respond({ success: true, balance: newBalance });
  } else {
    var result = useMileage(data.member_id, Math.abs(amount), data.reason || "관리자 차감");
    if (!result.success) return respond(result);
    return respond({ success: true, balance: result.balance });
  }
}

// 실제 PG결제 연동 전까지, 오프라인으로 받은 결제(AS 수리비 등)를 수동으로 기록할 때 사용
function adminRecordPayment(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.member_id || !data.amount) return respond({ success: false, message: "member_id와 amount가 필요합니다." });
  var result = recordPayment(data.member_id, parseFloat(data.amount), data.reason || "수동 결제 기록");
  return respond({ success: true, grade: result.grade, mileage_earned: result.mileage_earned });
}

// ════════════════════════════════════════════════
// 쿠폰 시스템
// ════════════════════════════════════════════════
function issueCoupon(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  var sheet = getSheet("Coupons");
  var code = data.code || ("CPN" + Math.random().toString(36).substr(2, 8).toUpperCase());
  var coupon_id = "CP" + new Date().getTime();
  var now = new Date();
  var expireDate;
  if (data.expire_date) {
    expireDate = data.expire_date;
  } else {
    var months = parseInt(data.valid_months) || 6;
    var exp = new Date(now);
    exp.setMonth(exp.getMonth() + months);
    expireDate = exp.toISOString();
  }
  sheet.appendRow([coupon_id, code, data.type || "amount", data.value || 0, data.member_id || "", "미사용", expireDate, now.toISOString(), "", data.title || ""]);
  return respond({ success: true, coupon_id: coupon_id, code: code, expire_date: expireDate });
}

function getMyCoupons(data) {
  if (!data.member_id) return respond({ success: false, message: "member_id가 필요합니다." });
  var sheet = getSheet("Coupons");
  var rows = sheet.getDataRange().getValues();
  var coupons = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    if (rows[i][4] && String(rows[i][4]) !== String(data.member_id)) continue;
    coupons.push({ coupon_id: rows[i][0], code: rows[i][1], type: rows[i][2], value: rows[i][3], status: computeCouponStatus(rows[i][5], rows[i][6]), expire_date: rows[i][6], created_at: rows[i][7], title: rows[i][9] || "", used_shop: rows[i][10] || "", used_serial: rows[i][11] || "" });
  }
  return respond({ success: true, coupons: coupons });
}

// ── 관리자: 특정 회원의 바우처 전체 조회 (사용/만기 포함) ──
function adminGetMemberCoupons(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.member_id) return respond({ success: false, message: "member_id가 필요합니다." });
  var sheet = getSheet("Coupons");
  var rows = sheet.getDataRange().getValues();
  var coupons = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    if (String(rows[i][4]) !== String(data.member_id)) continue;
    coupons.push({ coupon_id: rows[i][0], code: rows[i][1], type: rows[i][2], value: rows[i][3], status: computeCouponStatus(rows[i][5], rows[i][6]), expire_date: rows[i][6], created_at: rows[i][7], title: rows[i][9] || "", used_shop: rows[i][10] || "", used_serial: rows[i][11] || "" });
  }
  return respond({ success: true, coupons: coupons });
}

// ── 바우처 상태 자동 판정 (미사용 상태에서 만료일이 지나면 기한만기로 표시) ──
function computeCouponStatus(rawStatus, expireDate) {
  if (rawStatus === "미사용" && expireDate) {
    if (new Date(expireDate) < new Date()) return "기한만기";
  }
  return rawStatus;
}

// ── 관리자: 바우처 완전 삭제 (기록 자체를 남기지 않음) ──
function adminDeleteCoupon(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.coupon_id) return respond({ success: false, message: "coupon_id가 필요합니다." });
  var sheet = getSheet("Coupons");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.coupon_id)) {
      sheet.deleteRow(i + 1);
      return respond({ success: true, message: "바우처가 삭제되었습니다." });
    }
  }
  return respond({ success: false, message: "바우처를 찾을 수 없습니다." });
}

// ── 관리자: 바우처 수동 사용처리 (오프라인 매장 사용분 등) ──
function adminUseCoupon(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.coupon_id) return respond({ success: false, message: "coupon_id가 필요합니다." });
  var sheet = getSheet("Coupons");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.coupon_id)) {
      if (rows[i][5] !== "미사용") return respond({ success: false, message: "이미 처리된 바우처입니다." });
      sheet.getRange(i + 1, 6).setValue("사용완료");
      sheet.getRange(i + 1, 9).setValue(new Date().toISOString());
      return respond({ success: true, message: "사용 처리되었습니다." });
    }
  }
  return respond({ success: false, message: "바우처를 찾을 수 없습니다." });
}

function useCoupon(data) {
  if (!data.code) return respond({ success: false, message: "code가 필요합니다." });
  var sheet = getSheet("Coupons");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][1] === data.code && rows[i][5] === "미사용") {
      if (rows[i][6] && new Date(rows[i][6]) < new Date()) return respond({ success: false, message: "만료된 쿠폰입니다." });
      sheet.getRange(i + 1, 6).setValue("사용완료");
      sheet.getRange(i + 1, 9).setValue(new Date().toISOString());
      return respond({ success: true, type: rows[i][2], value: rows[i][3] });
    }
  }
  return respond({ success: false, message: "유효하지 않거나 이미 사용된 쿠폰입니다." });
}

// ── 관리자: 전체 회원 조회 (멤버 관리 탭용) ──────────────
function adminGetAllMembers(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  var mSheet = getSheet("Members");
  var mRows = mSheet.getDataRange().getValues();

  var mlSheet = getSheet("Mileage_Ledger");
  var mlRows = mlSheet.getDataRange().getValues();
  var balances = {};
  for (var i = 1; i < mlRows.length; i++) {
    if (!mlRows[i][1]) continue;
    balances[mlRows[i][1]] = mlRows[i][5];
  }

  var cSheet = getSheet("Coupons");
  var cRows = cSheet.getDataRange().getValues();
  var couponCounts = {};
  for (var j = 1; j < cRows.length; j++) {
    if (!cRows[j][0] || cRows[j][5] !== "미사용") continue;
    var mid = cRows[j][4] || "";
    if (mid) couponCounts[mid] = (couponCounts[mid] || 0) + 1;
  }

  var asSheet = getSheet("Assets");
  var asRows = asSheet.getDataRange().getValues();
  var assetCounts = {};
  for (var k = 1; k < asRows.length; k++) {
    if (!asRows[k][0] || !asRows[k][1]) continue;
    assetCounts[asRows[k][1]] = (assetCounts[asRows[k][1]] || 0) + 1;
  }

  var members = [];
  for (var n = 1; n < mRows.length; n++) {
    if (!mRows[n][0]) continue;
    var memberId = mRows[n][0];
    var gradeKey = mRows[n][7] || "silver";
    var gradeInfo = getMemberGrade(memberId);
    members.push({
      member_id: memberId, name: mRows[n][1], email: mRows[n][2], phone: mRows[n][3], created_at: mRows[n][5],
      total_spend: mRows[n][6] || 0, tier: gradeKey, tier_name: gradeInfo.grade_name,
      mileage_balance: balances[memberId] || 0,
      coupon_count: couponCounts[memberId] || 0,
      asset_count: assetCounts[memberId] || 0
    });
  }
  return respond({ success: true, members: members });
}

// ── 고객 마이페이지에서 매장 코드로 직접 사용처리 (관리자 키 불필요) ──
// 어떤 시계에 사용했는지(serial)도 받아서, 그 시계의 유지보수 이력에 자동 기록합니다.
function redeemCouponByShopCode(data) {
  if (!data.coupon_id || !data.shop_code) return respond({ success: false, message: "정보가 부족합니다." });
  if (!data.serial) return respond({ success: false, message: "적용할 시계를 선택해주세요." });
  var shopSheet = getSheet("Shops");
  var shopRows = shopSheet.getDataRange().getValues();
  var shopName = "";
  for (var s = 1; s < shopRows.length; s++) {
    if (String(shopRows[s][0]).toUpperCase() === String(data.shop_code).toUpperCase()) { shopName = shopRows[s][1]; break; }
  }
  if (!shopName) return respond({ success: false, message: "유효하지 않은 업체 코드입니다." });

  var sheet = getSheet("Coupons");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.coupon_id)) {
      var status = computeCouponStatus(rows[i][5], rows[i][6]);
      if (status !== "미사용") return respond({ success: false, message: "사용할 수 없는 상태입니다. (" + status + ")" });
      var title = rows[i][9] || "바우처 사용";
      sheet.getRange(i + 1, 6).setValue("사용완료");
      sheet.getRange(i + 1, 9).setValue(new Date().toISOString());
      sheet.getRange(i + 1, 11).setValue(shopName);
      sheet.getRange(i + 1, 12).setValue(data.serial);

      addProvenanceEntry(data.serial, title, "바우처를 통해 사용 처리되었습니다.", shopName, 0, shopName, "");

      return respond({ success: true, message: "사용 처리되었습니다.", shop_name: shopName });
    }
  }
  return respond({ success: false, message: "바우처를 찾을 수 없습니다." });
}

// ── 현장 사용처리용: 코드로 바우처 조회 (관리자 키 불필요) ──
function verifyCouponPublic(data) {
  if (!data.code) return respond({ success: false, message: "코드가 필요합니다." });
  var sheet = getSheet("Coupons");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][1] === data.code) {
      var status = computeCouponStatus(rows[i][5], rows[i][6]);
      var memberName = "";
      if (rows[i][4]) {
        var mSheet = getSheet("Members");
        var mRows = mSheet.getDataRange().getValues();
        for (var j = 1; j < mRows.length; j++) {
          if (mRows[j][0] === rows[i][4]) { memberName = mRows[j][1]; break; }
        }
      }
      return respond({
        success: true,
        coupon: { coupon_id: rows[i][0], title: rows[i][9] || "", type: rows[i][2], value: rows[i][3], status: status, expire_date: rows[i][6], member_name: memberName }
      });
    }
  }
  return respond({ success: false, message: "유효하지 않은 코드입니다." });
}

// ════════════════════════════════════════════════
// 시리얼 보완 / 검증 시스템
// ════════════════════════════════════════════════

// ── 내부공용: 시리얼 확정 처리 (자산생성 + AS_Requests.serial 갱신 + 클레임코드 연결 + 이미 가입된 회원 있으면 자산까지 연결) ──
function finalizeSerial(requestId, serial, adminName) {
  var asSheet = getSheet("AS_Requests");
  var asRows = asSheet.getDataRange().getValues();
  var brand = "", model = "", purchaseDate = "", intakeName = "", intakePhone = "";
  for (var i = 1; i < asRows.length; i++) {
    if (asRows[i][0] === requestId) {
      brand = asRows[i][3]; model = asRows[i][4]; purchaseDate = asRows[i][12];
      intakeName = asRows[i][13]; intakePhone = asRows[i][14];
      asSheet.getRange(i + 1, 3).setValue(serial); // C: serial
      break;
    }
  }

  // 자산이 없으면 생성
  var assetSheet = getSheet("Assets");
  var assetRows = assetSheet.getDataRange().getValues();
  var assetRowIndex = -1;
  for (var a = 1; a < assetRows.length; a++) {
    if (assetRows[a][6] === serial) { assetRowIndex = a; break; }
  }
  if (assetRowIndex === -1) {
    var asset_id = "A" + new Date().getTime();
    var now = new Date().toISOString();
    assetSheet.appendRow([
      asset_id, "", "watch", brand || "", model || "", "", serial,
      purchaseDate || "", "", now,
      "승인", "", "", "",
      now, adminName || "ALDOSA", "",
      intakeName || "", intakePhone || ""
    ]);
    assetRowIndex = assetSheet.getLastRow() - 1;
    assetRows = assetSheet.getDataRange().getValues();
  }

  // 이 request_id로 발급된 클레임코드에 시리얼 연결 + 이미 사용(가입연결)된 코드라면 자산도 같이 연결
  var codeSheet = getSheet("Claim_Codes");
  var codeRows = codeSheet.getDataRange().getValues();
  for (var c = 1; c < codeRows.length; c++) {
    if (codeRows[c][7] === requestId) {
      codeSheet.getRange(c + 1, 3).setValue(serial); // C: serial
      if (codeRows[c][4] === "사용완료" && codeRows[c][3]) {
        var memberId = codeRows[c][3];
        assetSheet.getRange(assetRowIndex + 1, 2).setValue(memberId);
        assetSheet.getRange(assetRowIndex + 1, 11).setValue("승인");
        assetSheet.getRange(assetRowIndex + 1, 15).setValue(new Date().toISOString());
        assetSheet.getRange(assetRowIndex + 1, 16).setValue(adminName || "ALDOSA");
      }
      break;
    }
  }
}

// ── 관리자가 직접 시리얼 입력 (사진 선택사항, 즉시 확정) ──
function adminFillSerial(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.request_id || !data.serial) return respond({ success: false, message: "request_id와 serial이 필요합니다." });

  var sheet = getSheet("Serial_Verifications");
  var verification_id = "SV" + new Date().getTime();
  var now = new Date().toISOString();
  sheet.appendRow([verification_id, data.request_id, data.serial, data.image_url || "", "승인완료", data.admin_name || "ALDOSA", now, data.admin_name || "ALDOSA", now]);

  finalizeSerial(data.request_id, data.serial, data.admin_name || "ALDOSA");

  return respond({ success: true, message: "시리얼이 등록되었습니다." });
}

// ── (향후 비관리자 제출용) 사진첨부 등록요청 → 승인대기 큐 ──
function submitSerialVerification(data) {
  if (!data.request_id || !data.serial) return respond({ success: false, message: "request_id와 serial이 필요합니다." });
  var sheet = getSheet("Serial_Verifications");
  var verification_id = "SV" + new Date().getTime();
  var now = new Date().toISOString();
  sheet.appendRow([verification_id, data.request_id, data.serial, data.image_url || "", "검토대기", data.submitted_by || "", now, "", ""]);
  return respond({ success: true, verification_id: verification_id, message: "등록요청이 접수되었습니다. 관리자 검토 후 확정됩니다." });
}

function adminGetPendingSerialVerifications(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  var sheet = getSheet("Serial_Verifications");
  var rows = sheet.getDataRange().getValues();
  var list = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0] || rows[i][4] !== "검토대기") continue;
    list.push({ verification_id: rows[i][0], request_id: rows[i][1], serial: String(rows[i][2] || ""), image_url: rows[i][3], submitted_by: rows[i][5], submitted_at: rows[i][6] });
  }
  return respond({ success: true, list: list });
}

function adminApproveSerialVerification(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  var sheet = getSheet("Serial_Verifications");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.verification_id)) {
      sheet.getRange(i + 1, 5).setValue("승인완료");
      sheet.getRange(i + 1, 8).setValue(data.admin_name || "ALDOSA");
      sheet.getRange(i + 1, 9).setValue(new Date().toISOString());
      finalizeSerial(rows[i][1], rows[i][2], data.admin_name || "ALDOSA");
      return respond({ success: true, message: "승인 처리되었습니다." });
    }
  }
  return respond({ success: false, message: "요청을 찾을 수 없습니다." });
}

function adminRejectSerialVerification(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  var sheet = getSheet("Serial_Verifications");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.verification_id)) {
      sheet.getRange(i + 1, 5).setValue("반려");
      sheet.getRange(i + 1, 8).setValue(data.admin_name || "ALDOSA");
      sheet.getRange(i + 1, 9).setValue(new Date().toISOString());
      return respond({ success: true, message: "반려 처리되었습니다." });
    }
  }
  return respond({ success: false, message: "요청을 찾을 수 없습니다." });
}

// ── 점포 목록 조회 ───────────────────────────────────
function getStores(data) {
  var sheet = getSheet("Stores");
  var rows = sheet.getDataRange().getValues();
  var stores = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    if (rows[i][4] === false || String(rows[i][4]).toUpperCase() === "FALSE") continue;
    stores.push({ store_id: rows[i][0], store_name: rows[i][1], region: rows[i][2] || "", contact: rows[i][3] || "" });
  }
  return respond({ success: true, stores: stores });
}

// ── 점포별 담당자 조회 ─────────────────────────────────
function getStoreStaff(data) {
  var sheet = getSheet("Store_Staff");
  var rows = sheet.getDataRange().getValues();
  var staff = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    if (rows[i][4] === false || String(rows[i][4]).toUpperCase() === "FALSE") continue;
    if (data.store_id && rows[i][1] !== data.store_id) continue;
    staff.push({ staff_id: rows[i][0], store_id: rows[i][1], staff_name: rows[i][2], staff_phone: rows[i][3] || "" });
  }
  return respond({ success: true, staff: staff });
}

// ── AS 수리 항목별 단가 ─────────────────────────────────
function adminAddASItem(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.request_id || !data.item_name) return respond({ success: false, message: "request_id와 item_name이 필요합니다." });
  var sheet = getSheet("AS_Items");
  var item_id = "AI" + new Date().getTime();
  sheet.appendRow([item_id, data.request_id, data.item_type || "", data.item_name, data.cost || 0, data.note || "", new Date().toISOString()]);
  return respond({ success: true, item_id: item_id });
}

function adminGetASItems(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  var sheet = getSheet("AS_Items");
  var rows = sheet.getDataRange().getValues();
  var items = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    if (data.request_id && String(rows[i][1]) !== String(data.request_id)) continue;
    items.push({ item_id: rows[i][0], request_id: rows[i][1], item_type: rows[i][2] || "", item_name: rows[i][3], cost: rows[i][4] || 0, note: rows[i][5] || "", created_at: rows[i][6] });
  }
  return respond({ success: true, items: items });
}

function adminDeleteASItem(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  var sheet = getSheet("AS_Items");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.item_id)) { sheet.deleteRow(i + 1); return respond({ success: true, message: "항목이 삭제되었습니다." }); }
  }
  return respond({ success: false, message: "항목을 찾을 수 없습니다." });
}

// ── 고객용 인보이스 조회 (관리자 키 불필요, request_id로만 조회) ──
function getASItemsPublic(data) {
  if (!data.request_id) return respond({ success: false, message: "request_id가 필요합니다." });
  var sheet = getSheet("AS_Items");
  var rows = sheet.getDataRange().getValues();
  var items = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    if (String(rows[i][1]) !== String(data.request_id)) continue;
    items.push({ item_name: rows[i][3], cost: rows[i][4] || 0, note: rows[i][5] || "" });
  }
  return respond({ success: true, items: items });
}

// ── 관리자: CS 메모 추가 (고객에게는 보이지 않음) ────────
function adminAddNote(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.request_id || !data.note) return respond({ success: false, message: "request_id와 note가 필요합니다." });
  var sheet = getSheet("AS_Notes");
  var note_id = "N" + new Date().getTime();
  sheet.appendRow([note_id, data.request_id, data.note, data.admin_name || "ALDOSA", new Date().toISOString()]);
  return respond({ success: true, note_id: note_id });
}

// ── 관리자: CS 메모 목록 조회 ─────────────────────────
function adminGetNotes(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.request_id) return respond({ success: false, message: "request_id가 필요합니다." });
  var sheet = getSheet("AS_Notes");
  var rows = sheet.getDataRange().getValues();
  var notes = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    if (String(rows[i][1]) !== String(data.request_id)) continue;
    notes.push({ note_id: rows[i][0], request_id: rows[i][1], note: rows[i][2], admin_name: rows[i][3] || "ALDOSA", created_at: rows[i][4] });
  }
  return respond({ success: true, notes: notes });
}

// ── 관리자: CS 메모 수정 ──────────────────────────────
function adminUpdateNote(data) {
  if (data.admin_key !== ADMIN_KEY) return respond({ success: false, message: "권한이 없습니다." });
  if (!data.note_id || data.note === undefined) return respond({ success: false, message: "note_id와 note가 필요합니다." });
  var sheet = getSheet("AS_Notes");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.note_id)) {
      sheet.getRange(i + 1, 3).setValue(data.note);
      return respond({ success: true, message: "메모가 수정되었습니다." });
    }
  }
  return respond({ success: false, message: "메모를 찾을 수 없습니다." });
}

// ── (구버전 호환용) 이미지 업로드 ──────────────────────
function uploadImage(data) {
  try {
    var folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    var subFolderName = data.folder || "watches";
    var subFolders = folder.getFoldersByName(subFolderName);
    var subFolder = subFolders.hasNext() ? subFolders.next() : folder.createFolder(subFolderName);
    var blob = Utilities.newBlob(Utilities.base64Decode(data.base64), data.mimeType || "image/jpeg", data.filename || ("img_" + new Date().getTime() + ".jpg"));
    var file = subFolder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    var fileId = file.getId();
    var viewUrl = "https://drive.google.com/uc?id=" + fileId;
    if (data.watch_id && data.image_type) {
      var wSheet = getSheet("Assets");
      var wRows = wSheet.getDataRange().getValues();
      for (var i = 1; i < wRows.length; i++) {
        if (wRows[i][0] === data.watch_id) {
          if (data.image_type === "warranty") wSheet.getRange(i + 1, 13).setValue(viewUrl);
          else if (data.image_type === "watch") wSheet.getRange(i + 1, 14).setValue(viewUrl);
          break;
        }
      }
    }
    if (data.request_id && data.image_type === "symptom") {
      var aSheet = getSheet("AS_Requests");
      var aRows = aSheet.getDataRange().getValues();
      for (var j = 1; j < aRows.length; j++) {
        if (aRows[j][0] === data.request_id) {
          aSheet.getRange(j + 1, 10).setValue(viewUrl);
          break;
        }
      }
    }
    return respond({ success: true, url: viewUrl, file_id: fileId });
  } catch (err) {
    return respond({ success: false, message: err.toString() });
  }
}

// ── 내 자산 목록 ──────────────────────────────────────
function getWatches(data) {
  var sheet = getSheet("Assets");
  var rows = sheet.getDataRange().getValues();
  var watches = [];
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][1] === data.member_id) {
      watches.push({
        watch_id: rows[i][0], asset_id: rows[i][0], category: rows[i][2] || "watch",
        brand: rows[i][3], model: rows[i][4], reference: rows[i][5], serial: String(rows[i][6]),
        purchase_date: rows[i][7], purchase_place: rows[i][8], registered_at: rows[i][9],
        status: rows[i][10] || "대기중", reject_reason: rows[i][11] || "",
        warranty_image_url: rows[i][12] || "", watch_image_url: rows[i][13] || "",
        asset_image_url: rows[i][13] || "", verified_at: rows[i][14] || "", attributes_json: rows[i][16] || ""
      });
    }
  }
  return respond({ success: true, watches: watches, assets: watches });
}

// ── 프로비넌스 조회 ───────────────────────────────────
function getProvenance(data) {
  var sheet = getSheet("Provenance");
  var rows = sheet.getDataRange().getValues();
  var history = [];
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][1]) === String(data.serial)) {
      var warrantyExpire = rows[i][8] ? rows[i][8] : "";
      var warrantyStatus = "";
      if (warrantyExpire) {
        var expireDate = new Date(warrantyExpire);
        var today = new Date();
        warrantyStatus = expireDate > today ? "보증중" : "만료";
      }
      history.push({
        provenance_id: rows[i][0], serial: String(rows[i][1]), date: rows[i][2], work_type: rows[i][3],
        description: rows[i][4], technician: rows[i][5], cost: rows[i][6] || 0,
        warranty_months: rows[i][7] || 0, warranty_expire: warrantyExpire,
        shop_name: rows[i][9] || "", warranty_status: warrantyStatus,
        request_id: rows[i][10] || ""
      });
    }
  }
  return respond({ success: true, serial: data.serial, history: history });
}

// ── AS 접수 (고객이 직접, 간단 버전) ────────────────────
function submitAS(data) {
  var sheet = getSheet("AS_Requests");
  var request_id = "AS" + padSeq(getNextSequence("AS_REQUEST"), 7);
  var requested_at = new Date().toISOString();
  sheet.appendRow([
    request_id, data.member_id, data.serial, data.brand, data.model, data.symptom,
    "접수완료", requested_at, requested_at, data.symptom_image_url || "",
    "", "", "", "", "", requested_at, "", "", "", "", "", "", "", "", "", "", "", ""
  ]);
  addProvenanceEntry(data.serial, "AS 접수", data.symptom, "고객 접수", 0, "", "", request_id);
  return respond({ success: true, message: "AS 접수 완료", request_id: request_id });
}

// ── 내 AS 내역 ────────────────────────────────────────
function getAS(data) {
  var sheet = getSheet("AS_Requests");
  var rows = sheet.getDataRange().getValues();
  var requests = [];
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][1] === data.member_id) {
      requests.push({
        request_id: rows[i][0], serial: String(rows[i][2] || ""), brand: rows[i][3], model: rows[i][4],
        symptom: rows[i][5], status: rows[i][6], requested_at: rows[i][7], image_url: rows[i][9] || ""
      });
    }
  }
  return respond({ success: true, requests: requests });
}

// ── 협력업체 검색 ─────────────────────────────────────
function searchShops(data) {
  var sheet = getSheet("Shops");
  var rows = sheet.getDataRange().getValues();
  var keyword = (data.keyword || "").toLowerCase();
  var shops = [];
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] && rows[i][1].toLowerCase().indexOf(keyword) !== -1) {
      shops.push({ shop_id: rows[i][0], shop_name: rows[i][1], contact: rows[i][2] || "", default_warranty_months: rows[i][3] || 0 });
    }
  }
  return respond({ success: true, shops: shops });
}

function getShops() {
  var sheet = getSheet("Shops");
  var rows = sheet.getDataRange().getValues();
  var shops = [];
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0]) {
      shops.push({ shop_id: rows[i][0], shop_name: rows[i][1], contact: rows[i][2] || "", default_warranty_months: rows[i][3] || 0 });
    }
  }
  return respond({ success: true, shops: shops });
}

// ── 업체 등록 요청 ────────────────────────────────────
function requestShop(data) {
  var sheet = getSheet("Shop_Requests");
  var request_id = "SR" + new Date().getTime();
  var created_at = new Date().toISOString();
  sheet.appendRow([request_id, data.shop_name, data.contact || "", data.requested_by, "대기중", created_at]);
  return respond({ success: true, message: "업체 등록 요청이 접수되었습니다.", request_id: request_id });
}

// ── 코드로 자산 연결 ──────────────────────────────────
function claimWatch(data) {
  var sheet = getSheet("Claim_Codes");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][1] === data.code && rows[i][4] === "미사용") {
      var serial = rows[i][2];
      var requestId = rows[i][7] || "";
      var claimed_at = new Date().toISOString();
      sheet.getRange(i + 1, 4).setValue(data.member_id);
      sheet.getRange(i + 1, 5).setValue("사용완료");
      sheet.getRange(i + 1, 7).setValue(claimed_at);

      // AS_Requests에 회원 연결 (시리얼이 나중에 채워져도 이 연결은 유지됨)
      if (requestId) {
        var asSheet = getSheet("AS_Requests");
        var asRows = asSheet.getDataRange().getValues();
        for (var k = 1; k < asRows.length; k++) {
          if (asRows[k][0] === requestId) {
            asSheet.getRange(k + 1, 2).setValue(data.member_id);
            break;
          }
        }
      }

      // 시리얼이 있는 경우에만 자산 연결 (없으면 추후 보완 시 연결)
      if (serial) {
        var wSheet = getSheet("Assets");
        var wRows = wSheet.getDataRange().getValues();
        for (var j = 1; j < wRows.length; j++) {
          if (String(wRows[j][6]) === String(serial)) {
            wSheet.getRange(j + 1, 2).setValue(data.member_id);
            wSheet.getRange(j + 1, 11).setValue("승인");
            wSheet.getRange(j + 1, 15).setValue(claimed_at);
            wSheet.getRange(j + 1, 16).setValue("ALDOSA");
            break;
          }
        }
      }
      return respond({ success: true, message: "연결되었습니다.", serial: serial });
    }
  }
  return respond({ success: false, message: "유효하지 않은 코드입니다." });
}

// ── 관리자: 승인 대기 목록 ──────────────────────────────
function adminGetPending(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("Assets");
  var rows = sheet.getDataRange().getValues();
  var pending = [];
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][10] === "대기중") {
      if (data.category && rows[i][2] !== data.category) continue;
      pending.push({
        watch_id: rows[i][0], asset_id: rows[i][0], member_id: rows[i][1], category: rows[i][2] || "watch",
        brand: rows[i][3], model: rows[i][4], reference: rows[i][5], serial: String(rows[i][6] || ""),
        purchase_date: rows[i][7], purchase_place: rows[i][8], registered_at: rows[i][9],
        warranty_image_url: rows[i][12] || "", watch_image_url: rows[i][13] || "", attributes_json: rows[i][16] || ""
      });
    }
  }
  return respond({ success: true, pending: pending });
}

// ── 관리자: 승인 ──────────────────────────────────────
function adminApprove(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("Assets");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === data.watch_id || rows[i][0] === data.asset_id) {
      sheet.getRange(i + 1, 11).setValue("승인");
      sheet.getRange(i + 1, 15).setValue(new Date().toISOString());
      sheet.getRange(i + 1, 16).setValue(data.admin_name || "ALDOSA");
      var serial = rows[i][6];
      addProvenanceEntry(serial, "등록 승인", "ALDOSA 검수 완료. 자산 등록이 승인되었습니다.", data.admin_name || "ALDOSA", 0, "", "");
      var logSheet = getSheet("Admin_Log");
      logSheet.appendRow(["LOG" + new Date().getTime(), "승인", data.watch_id || data.asset_id, data.memo || "", new Date().toISOString()]);
      return respond({ success: true, message: "승인 완료" });
    }
  }
  return respond({ success: false, message: "자산을 찾을 수 없습니다." });
}

// ── 관리자: 거절 ──────────────────────────────────────
function adminReject(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("Assets");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === data.watch_id || rows[i][0] === data.asset_id) {
      sheet.getRange(i + 1, 11).setValue("거절");
      sheet.getRange(i + 1, 12).setValue(data.reason || "");
      var logSheet = getSheet("Admin_Log");
      logSheet.appendRow(["LOG" + new Date().getTime(), "거절", data.watch_id || data.asset_id, data.reason || "", new Date().toISOString()]);
      return respond({ success: true, message: "거절 처리 완료" });
    }
  }
  return respond({ success: false, message: "자산을 찾을 수 없습니다." });
}

// ── 관리자: 클레임 코드 생성 ──────────────────────────
function adminCreateCode(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("Claim_Codes");
  var code = "ALD-" + new Date().getFullYear() + "-" + Math.random().toString(36).substr(2, 6).toUpperCase();
  var code_id = "C" + new Date().getTime();
  var created_at = new Date().toISOString();
  sheet.appendRow([code_id, code, data.serial, "", "미사용", created_at, ""]);
  return respond({ success: true, code: code, message: "코드 생성 완료" });
}

// ── 관리자: 특정 자산에 수리 이력 직접 추가 ─────────────
function adminAddProvenance(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  if (!data.serial || !data.work_type) {
    return respond({ success: false, message: "serial과 work_type은 필수입니다." });
  }
  addProvenanceEntry(
    data.serial, data.work_type, data.description || "", data.technician || data.admin_name || "ALDOSA",
    data.cost || 0, data.shop_name || "",
    data.warranty_months_override !== undefined ? data.warranty_months_override : "",
    data.request_id || ""
  );
  if (data.request_id) {
    var aSheet = getSheet("AS_Requests");
    var aRows = aSheet.getDataRange().getValues();
    for (var i = 1; i < aRows.length; i++) {
      if (aRows[i][0] === data.request_id) {
        aSheet.getRange(i + 1, 7).setValue(data.new_status || "처리완료");
        aSheet.getRange(i + 1, 9).setValue(new Date().toISOString());
        break;
      }
    }
  }
  return respond({ success: true, message: "수리 이력이 추가되었습니다." });
}

// ── 관리자: 전체 자산 목록 ──────────────────────────────
function adminGetAllAssets(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("Assets");
  var rows = sheet.getDataRange().getValues();
  var assets = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    assets.push({
      asset_id: rows[i][0], member_id: rows[i][1] || "", category: rows[i][2] || "watch",
      brand: rows[i][3], model: rows[i][4], reference: rows[i][5], serial: String(rows[i][6] || ""),
      purchase_date: rows[i][7], purchase_place: rows[i][8], registered_at: rows[i][9],
      status: rows[i][10] || "대기중", reject_reason: rows[i][11] || "",
      warranty_image_url: rows[i][12] || "", watch_image_url: rows[i][13] || "",
      verified_at: rows[i][14] || "", verified_by: rows[i][15] || "", attributes_json: rows[i][16] || "",
      intake_name: rows[i][17] || "", intake_phone: rows[i][18] || "", is_claimed: !!rows[i][1]
    });
  }
  return respond({ success: true, assets: assets });
}

// ── 관리자: 클레임 코드 목록 ─────────────────────────────
function adminGetCodes(data) {
  if (data.admin_key !== ADMIN_KEY) {
    return respond({ success: false, message: "권한이 없습니다." });
  }
  var sheet = getSheet("Claim_Codes");
  var rows = sheet.getDataRange().getValues();

  var asSheet = getSheet("AS_Requests");
  var asRows = asSheet.getDataRange().getValues();
  var asByRequestId = {};
  for (var k = 1; k < asRows.length; k++) {
    if (!asRows[k][0]) continue;
    asByRequestId[asRows[k][0]] = {
      intake_name: asRows[k][13] || "", intake_phone: asRows[k][14] || "",
      brand: asRows[k][3] || "", model: asRows[k][4] || "", requested_at: asRows[k][7] || ""
    };
  }

  var codes = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    var requestId = rows[i][7] || "";
    var linked = asByRequestId[requestId] || {};
    codes.push({
      code_id: rows[i][0], code: rows[i][1], serial: String(rows[i][2] || ""), member_id: rows[i][3] || "",
      status: rows[i][4], created_at: rows[i][5], claimed_at: rows[i][6] || "",
      request_id: requestId,
      intake_name: linked.intake_name || "", intake_phone: linked.intake_phone || "",
      brand: linked.brand || "", model: linked.model || "", requested_at: linked.requested_at || ""
    });
  }
  return respond({ success: true, codes: codes });
}

// ── Work Types ────────────────────────────────────────
function getWorkTypes() {
  var sheet = getSheet("Work_Types");
  var rows = sheet.getDataRange().getValues();
  var types = [];
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0]) {
      types.push({ work_type_id: rows[i][0], work_type_name: rows[i][1], warranty_months: rows[i][2] || 0, description: rows[i][3] || "" });
    }
  }
  return respond({ success: true, work_types: types });
}

// ── 내부 유틸 ─────────────────────────────────────────
function addProvenanceEntry(serial, work_type, description, technician, cost, shop_name, warranty_months_override, request_id) {
  var sheet = getSheet("Provenance");
  var provenance_id = "P" + new Date().getTime();
  var date = new Date().toISOString();
  var warrantyMonths = 0;
  if (warranty_months_override !== "") {
    warrantyMonths = parseInt(warranty_months_override) || 0;
  } else {
    var wtSheet = getSheet("Work_Types");
    var wtRows = wtSheet.getDataRange().getValues();
    for (var i = 1; i < wtRows.length; i++) {
      if (wtRows[i][1] === work_type) {
        warrantyMonths = parseInt(wtRows[i][2]) || 0;
        break;
      }
    }
  }
  var warrantyExpire = "";
  if (warrantyMonths > 0) {
    var expireDate = new Date();
    expireDate.setMonth(expireDate.getMonth() + warrantyMonths);
    warrantyExpire = expireDate.toISOString();
  }
  sheet.appendRow([provenance_id, serial, date, work_type, description, technician, cost || 0, warrantyMonths, warrantyExpire, shop_name || "", request_id || "", date]);
}

// ── 출고 이력 upsert: 같은 request_id의 같은 work_type 이력이 있으면 새로 만들지 않고 그 행을 갱신 ──
function upsertShippedProvenance(serial, request_id, work_type, description, technician, cost, shop_name, warranty_months_override) {
  var sheet = getSheet("Provenance");
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][3] === work_type && String(rows[i][10]) === String(request_id)) {
      var date = new Date().toISOString();
      var warrantyMonths = 0;
      if (warranty_months_override !== "") {
        warrantyMonths = parseInt(warranty_months_override) || 0;
      } else {
        var wtSheet = getSheet("Work_Types");
        var wtRows = wtSheet.getDataRange().getValues();
        for (var k = 1; k < wtRows.length; k++) {
          if (wtRows[k][1] === work_type) { warrantyMonths = parseInt(wtRows[k][2]) || 0; break; }
        }
      }
      var warrantyExpire = "";
      if (warrantyMonths > 0) {
        var expireDate = new Date();
        expireDate.setMonth(expireDate.getMonth() + warrantyMonths);
        warrantyExpire = expireDate.toISOString();
      }
      sheet.getRange(i + 1, 3).setValue(date);
      sheet.getRange(i + 1, 5).setValue(description);
      sheet.getRange(i + 1, 6).setValue(technician);
      sheet.getRange(i + 1, 7).setValue(cost || 0);
      sheet.getRange(i + 1, 8).setValue(warrantyMonths);
      sheet.getRange(i + 1, 9).setValue(warrantyExpire);
      sheet.getRange(i + 1, 10).setValue(shop_name || "");
      return;
    }
  }
  addProvenanceEntry(serial, work_type, description, technician, cost, shop_name, warranty_months_override, request_id);
}

function getSheet(name) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}

function hashPassword(password) {
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, password);
  return bytes.map(function(b) { return ('0' + (b & 0xFF).toString(16)).slice(-2); }).join('');
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function testDriveAccess() {
  var folder = DriveApp.getFolderById("19kcvsuGDCioDP4Vq20PX5LclgxE4duEQ");
  Logger.log("폴더 접근 성공: " + folder.getName());
}