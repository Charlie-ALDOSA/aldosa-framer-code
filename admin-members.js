(function() {
  var styleEl = document.createElement('style');
  styleEl.textContent = "\n  * { margin: 0; padding: 0; box-sizing: border-box; }\n  body { background: #F4F4F2; min-height: 100vh; font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; }\n  .header { background: #1a1a1a; padding: 16px 40px; display: flex; align-items: center; justify-content: space-between; }\n  .header .logo { font-size: 16px; font-weight: 300; letter-spacing: 0.3em; color: #C9A84C; }\n  .header .badge { font-size: 10px; letter-spacing: 0.15em; color: #888; text-transform: uppercase; margin-left: 12px; }\n  .header .back { font-size: 11px; letter-spacing: 0.1em; color: #aaa; text-decoration: none; }\n  .header .back:hover { color: #C9A84C; }\n  .main { max-width: 1100px; margin: 0 auto; padding: 32px 24px; }\n\n  .lock-screen { max-width: 360px; margin: 80px auto; background: #fff; border: 1px solid #ddd; border-top: 3px solid #C9A84C; border-radius: 2px; padding: 36px; }\n  .lock-screen h2 { font-size: 15px; letter-spacing: 0.1em; margin-bottom: 20px; }\n  .lock-screen input { width: 100%; background: #fafafa; border: 1px solid #e0e0e0; border-radius: 1px; padding: 11px 14px; font-size: 14px; outline: none; margin-bottom: 12px; }\n  .lock-screen input:focus { border-color: #C9A84C; }\n  .lock-screen button { width: 100%; background: #1a1a1a; border: none; border-radius: 1px; padding: 12px; font-size: 12px; letter-spacing: 0.15em; color: #fff; text-transform: uppercase; cursor: pointer; }\n  .lock-screen button:hover { background: #C9A84C; }\n  .lock-msg { font-size: 11px; color: #E11D48; margin-top: 10px; text-align: center; display: none; }\n\n  .panel { background: #fff; border: 1px solid #ddd; border-radius: 2px; padding: 24px; margin-bottom: 16px; overflow-x: auto; }\n  .panel h3 { font-size: 11px; letter-spacing: 0.15em; color: #C9A84C; text-transform: uppercase; margin-bottom: 16px; }\n  .empty-msg { text-align: center; padding: 40px; color: #aaa; font-size: 12px; }\n  .search-input { margin-bottom: 16px; width: 100%; padding: 10px 12px; border: 1px solid #e0e0e0; border-radius: 1px; font-size: 13px; }\n\n  .code-table { width: 100%; border-collapse: collapse; font-size: 12px; min-width: 800px; }\n  .code-table th { text-align: left; padding: 8px; color: #999; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; border-bottom: 1px solid #eee; white-space: nowrap; }\n  .code-table td { padding: 10px 8px; border-bottom: 1px solid #f5f5f5; vertical-align: top; }\n  .status-tag { font-size: 10px; padding: 2px 8px; border-radius: 2px; }\n  .tag-silver { background: #f0f0f0; color: #666; }\n  .tag-gold { background: #FFF8E7; color: #8B6914; }\n  .tag-platinum { background: #1a1a1a; color: #C9A84C; }\n  .btn-sm { padding: 8px; font-size: 11px; letter-spacing: 0.08em; border-radius: 1px; cursor: pointer; border: none; text-align: center; background: #1a1a1a; color: #fff; }\n  .btn-sm:hover { background: #C9A84C; }\n\n  .member-panel { background: #fafafa; border: 1px solid #eee; border-radius: 2px; padding: 16px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }\n  .member-panel .mp-box { background: #fff; border: 1px solid #e5e5e5; border-radius: 2px; padding: 12px; }\n  .member-panel .mp-box h5 { font-size: 10px; letter-spacing: 0.1em; color: #C9A84C; text-transform: uppercase; margin-bottom: 10px; }\n  .member-panel input, .member-panel select { width: 100%; padding: 7px 8px; font-size: 12px; border: 1px solid #e0e0e0; border-radius: 1px; margin-bottom: 6px; }\n  .member-panel button { width: 100%; padding: 8px; font-size: 11px; background: #1a1a1a; color: #fff; border: none; border-radius: 1px; cursor: pointer; }\n  .member-panel button:hover { background: #C9A84C; }\n  @media (max-width: 600px) {\n    .header { padding: 14px 20px; }\n    .main { padding: 24px 16px; }\n  }\n";
  document.head.appendChild(styleEl);

  var container = document.getElementById('aldosa-admin-members');
  if (!container) { console.error('aldosa-admin-members container not found'); return; }
  container.innerHTML = "<div class=\"header\">\n    <div><span class=\"logo\">ALDOSA</span><span class=\"badge\">Admin \u00b7 Members</span></div>\n    <a class=\"back\" href=\"/admin\">\u2190 \uad00\ub9ac\uc790 \ud328\ub110\ub85c</a>\n  </div>\n\n  <div id=\"lockScreen\" class=\"lock-screen\">\n    <h2>\uad00\ub9ac\uc790 \uc778\uc99d</h2>\n    <input type=\"password\" id=\"adminKeyInput\" placeholder=\"\uad00\ub9ac\uc790 \ud0a4 \uc785\ub825\" />\n    <button onclick=\"checkAdminKey()\">\uc811\uc18d</button>\n    <div class=\"lock-msg\" id=\"lockMsg\">\uad00\ub9ac\uc790 \ud0a4\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.</div>\n  </div>\n\n  <div id=\"adminMain\" class=\"main\" style=\"display:none;\">\n    <div class=\"panel\">\n      <h3>\uba64\ubc84 \uad00\ub9ac</h3>\n      <input type=\"text\" class=\"search-input\" id=\"memberSearch\" placeholder=\"\uc774\ub984, \uc774\uba54\uc77c, \uc5f0\ub77d\ucc98\ub85c \uac80\uc0c9\" oninput=\"renderMembers()\" />\n      <div id=\"membersList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n    </div>\n  </div>";


  const API_URL = "https://script.google.com/macros/s/AKfycbyk1khfq0I8XNYDgvPcIa0aTzYayAM7HekoRapfCZc7CEqfDR2Eh3AxUi8ceqemk4aK3A/exec";
  var ADMIN_KEY_STORAGE = "aldosa_admin_key_session";
  var adminKey = "";
  var membersCache = [];
  var openMemberPanelId = null;

  function checkAdminKey() {
    var key = document.getElementById("adminKeyInput").value.trim();
    if (!key) return;
    adminKey = key;
    fetch(API_URL + "?action=adminGetAllMembers&admin_key=" + encodeURIComponent(key))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) {
          sessionStorage.setItem(ADMIN_KEY_STORAGE, key);
          document.getElementById("lockScreen").style.display = "none";
          document.getElementById("adminMain").style.display = "block";
          membersCache = data.members;
          renderMembers();
        } else {
          document.getElementById("lockMsg").style.display = "block";
        }
      })
      .catch(function() { document.getElementById("lockMsg").style.display = "block"; });
  }

  (function autoLogin() {
    var saved = sessionStorage.getItem(ADMIN_KEY_STORAGE);
    if (saved) {
      document.getElementById("adminKeyInput").value = saved;
      checkAdminKey();
    }
  })();

  function formatDate(iso) {
    if (!iso) return "-";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.getFullYear() + "." + String(d.getMonth()+1).padStart(2,"0") + "." + String(d.getDate()).padStart(2,"0");
  }

  function loadMembers() {
    fetch(API_URL + "?action=adminGetAllMembers&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) { membersCache = data.members; renderMembers(); }
      });
  }

  function renderMembers() {
    var keyword = (document.getElementById("memberSearch").value || "").toLowerCase();
    var filtered = membersCache.filter(function(m) {
      return !keyword || (m.name||"").toLowerCase().indexOf(keyword) !== -1 ||
        (m.email||"").toLowerCase().indexOf(keyword) !== -1 || (m.phone||"").indexOf(keyword) !== -1;
    });
    var el = document.getElementById("membersList");
    if (filtered.length === 0) { el.innerHTML = '<div class="empty-msg">검색 결과가 없습니다.</div>'; return; }
    var html = '<table class="code-table"><tr><th>가입일</th><th>이름/연락처</th><th>등급</th><th>누적실적</th><th>마일리지</th><th>바우처</th><th>보유시계</th><th>관리</th></tr>';
    filtered.slice().reverse().forEach(function(m) {
      html += '<tr>';
      html += '<td>' + formatDate(m.created_at) + '</td>';
      html += '<td>' + m.name + '<br><span style="color:#aaa;">' + (m.email||'') + '<br>' + (m.phone||'') + '</span></td>';
      html += '<td><span class="status-tag tag-' + m.tier + '">' + m.tier_name + '</span></td>';
      html += '<td>' + (parseInt(m.total_spend)||0).toLocaleString("ko-KR") + '원</td>';
      html += '<td>' + (parseInt(m.mileage_balance)||0).toLocaleString("ko-KR") + 'P</td>';
      html += '<td>' + m.coupon_count + '장</td>';
      html += '<td>' + m.asset_count + '대</td>';
      html += '<td><button class="btn-sm" onclick="toggleMemberPanel(\'' + m.member_id + '\')">관리</button></td>';
      html += '</tr>';
      html += '<tr id="memberRow_' + m.member_id + '" style="display:none;"><td colspan="8"><div id="memberPanel_' + m.member_id + '"></div></td></tr>';
    });
    html += '</table>';
    el.innerHTML = html;

    if (openMemberPanelId) {
      var row = document.getElementById("memberRow_" + openMemberPanelId);
      if (row) { row.style.display = ""; renderMemberPanel(openMemberPanelId); }
    }
  }

  function toggleMemberPanel(memberId) {
    var row = document.getElementById("memberRow_" + memberId);
    if (row.style.display === "none") {
      openMemberPanelId = memberId;
      row.style.display = "";
      renderMemberPanel(memberId);
    } else {
      openMemberPanelId = null;
      row.style.display = "none";
    }
  }

  function renderMemberPanel(memberId) {
    var html = '<div class="member-panel">';
    html += '<div class="mp-box"><h5>마일리지 조정</h5>' +
      '<input type="number" id="mileageAdjAmount_' + memberId + '" placeholder="금액(차감은 마이너스로)" />' +
      '<input type="text" id="mileageAdjReason_' + memberId + '" placeholder="사유" />' +
      '<button onclick="adjustMileage(\'' + memberId + '\')">적용</button></div>';

    html += '<div class="mp-box"><h5>바우처 발급</h5>' +
      '<input type="text" id="voucherTitle_' + memberId + '" placeholder="혜택명 (예: 배터리 무상교환)" />' +
      '<select id="voucherType_' + memberId + '"><option value="free">무상 서비스형 (금액 없음)</option><option value="percent">할인율형</option><option value="amount">금액형</option></select>' +
      '<input type="number" id="voucherValue_' + memberId + '" placeholder="값 (할인율/금액형일 때만)" />' +
      '<select id="voucherValidMonths_' + memberId + '"><option value="6">사용기한: 발급일로부터 6개월</option><option value="12">사용기한: 발급일로부터 1년</option></select>' +
      '<button onclick="issueVoucher(\'' + memberId + '\')">발급</button></div>';

    html += '<div class="mp-box"><h5>결제 수동 기록</h5>' +
      '<input type="number" id="paymentAmount_' + memberId + '" placeholder="결제금액" />' +
      '<input type="text" id="paymentReason_' + memberId + '" placeholder="사유 (예: AS 수리비)" />' +
      '<button onclick="recordMemberPayment(\'' + memberId + '\')">기록</button></div>';

    html += '</div>';
    html += '<div id="memberCouponsList_' + memberId + '" style="margin-top:12px;"></div>';
    document.getElementById("memberPanel_" + memberId).innerHTML = html;
    loadMemberCoupons(memberId);
  }

  function loadMemberCoupons(memberId) {
    var params = new URLSearchParams({ action: "adminGetMemberCoupons", admin_key: adminKey, member_id: memberId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var listEl = document.getElementById("memberCouponsList_" + memberId);
        if (!listEl) return;
        var coupons = (data.success ? data.coupons : []) || [];
        if (coupons.length === 0) { listEl.innerHTML = '<div style="font-size:11px;color:#aaa;padding:8px 0;">발급된 바우처가 없습니다.</div>'; return; }
        var html = '<table class="code-table" style="min-width:0;"><tr><th>혜택명</th><th>코드</th><th>발급일</th><th>만료일</th><th>상태</th><th></th></tr>';
        coupons.slice().reverse().forEach(function(c) {
          html += '<tr><td>' + (c.title || '-') + '</td><td>' + c.code + '</td>';
          html += '<td>' + formatDate(c.created_at) + '</td><td>' + formatDate(c.expire_date) + '</td>';
          html += '<td>' + c.status + '</td><td>';
          if (c.status === "미사용") {
            html += '<button class="btn-sm" style="background:#16A34A;margin-right:4px;" onclick="manualUseCoupon(\'' + c.coupon_id + '\',\'' + memberId + '\')">사용처리</button>';
          }
          html += '<button class="btn-sm" style="background:#E11D48;" onclick="deleteCoupon(\'' + c.coupon_id + '\',\'' + memberId + '\')">삭제</button>';
          html += '</td></tr>';
        });
        html += '</table>';
        listEl.innerHTML = html;
      });
  }

  function manualUseCoupon(couponId, memberId) {
    if (!confirm("이 바우처를 사용 처리할까요?")) return;
    var params = new URLSearchParams({ action: "adminUseCoupon", admin_key: adminKey, coupon_id: couponId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() { loadMemberCoupons(memberId); loadMembers(); });
  }

  function deleteCoupon(couponId, memberId) {
    if (!confirm("이 바우처를 완전히 삭제할까요? 기록이 남지 않으며 되돌릴 수 없습니다.")) return;
    var params = new URLSearchParams({ action: "adminDeleteCoupon", admin_key: adminKey, coupon_id: couponId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() { loadMemberCoupons(memberId); loadMembers(); });
  }

  function adjustMileage(memberId) {
    var amount = document.getElementById("mileageAdjAmount_" + memberId).value;
    var reason = document.getElementById("mileageAdjReason_" + memberId).value;
    if (!amount) return;
    var params = new URLSearchParams({ action: "adminAdjustMileage", admin_key: adminKey, member_id: memberId, amount: amount, reason: reason || "관리자 조정" });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (!data.success) { alert(data.message); return; }
        loadMembers();
      });
  }

  function issueVoucher(memberId) {
    var title = document.getElementById("voucherTitle_" + memberId).value.trim();
    var type = document.getElementById("voucherType_" + memberId).value;
    var value = document.getElementById("voucherValue_" + memberId).value;
    var validMonths = document.getElementById("voucherValidMonths_" + memberId).value;
    if (!title) { alert("혜택명을 입력하세요."); return; }
    var params = new URLSearchParams({ action: "issueCoupon", admin_key: adminKey, member_id: memberId, title: title, type: type, value: value || 0, valid_months: validMonths });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) alert("바우처가 발급되었습니다. 코드: " + data.code);
        loadMemberCoupons(memberId);
        loadMembers();
      });
  }

  function recordMemberPayment(memberId) {
    var amount = document.getElementById("paymentAmount_" + memberId).value;
    var reason = document.getElementById("paymentReason_" + memberId).value;
    if (!amount) return;
    var params = new URLSearchParams({ action: "adminRecordPayment", admin_key: adminKey, member_id: memberId, amount: amount, reason: reason || "수동 결제 기록" });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) alert("결제 기록 완료. 등급: " + data.grade + " / 적립 마일리지: " + data.mileage_earned + "P");
        loadMembers();
      });
  }

})();