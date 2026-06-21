var styleEl_aldosa_my = document.createElement('style');
styleEl_aldosa_my.textContent = "\n  * { margin: 0; padding: 0; box-sizing: border-box; }\n  body { background: #F4F4F2; min-height: 100vh; font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; }\n  .header { background: #fff; border-bottom: 1px solid #ddd; padding: 16px 40px; display: flex; align-items: center; justify-content: space-between; }\n  .header .logo { font-size: 18px; font-weight: 300; letter-spacing: 0.3em; color: #1a1a1a; text-decoration: none; }\n  .header .nav { display: flex; gap: 24px; align-items: center; }\n  .header .nav a { font-size: 11px; letter-spacing: 0.12em; color: #888; text-decoration: none; text-transform: uppercase; }\n  .header .nav a:hover { color: #C9A84C; }\n  .header .logout { font-size: 11px; letter-spacing: 0.12em; color: #aaa; cursor: pointer; text-transform: uppercase; background: none; border: none; }\n  .header .logout:hover { color: #E11D48; }\n  .main { max-width: 900px; margin: 0 auto; padding: 48px 24px; }\n  .greeting { margin-bottom: 40px; }\n  .greeting h2 { font-size: 22px; font-weight: 300; letter-spacing: 0.1em; color: #1a1a1a; }\n  .greeting p { font-size: 12px; color: #aaa; margin-top: 6px; }\n  .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }\n  .section-header h3 { font-size: 11px; font-weight: 500; letter-spacing: 0.2em; color: #aaa; text-transform: uppercase; }\n  .btn-add { background: #C9A84C; border: none; border-radius: 1px; padding: 10px 20px; font-size: 11px; font-weight: 500; letter-spacing: 0.15em; color: #fff; text-transform: uppercase; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.2s; }\n  .btn-add:hover { background: #b8943f; }\n  .watch-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }\n  .watch-card { background: #fff; border: 1px solid #ddd; border-top: 2px solid #C9A84C; border-radius: 2px; padding: 24px; transition: box-shadow 0.2s; }\n  .watch-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }\n  .watch-card .status-badge { display: inline-block; font-size: 10px; letter-spacing: 0.1em; padding: 3px 8px; border-radius: 2px; margin-bottom: 12px; text-transform: uppercase; }\n  .status-\ub300\uae30\uc911 { background: #FFF8E7; border: 1px solid #F0C040; color: #8B6914; }\n  .status-\uc2b9\uc778 { background: #F0FDF4; border: 1px solid #86EFAC; color: #16A34A; }\n  .status-\uac70\uc808 { background: #FFF1F2; border: 1px solid #FDA4AF; color: #E11D48; }\n  .watch-card .brand { font-size: 10px; letter-spacing: 0.2em; color: #C9A84C; text-transform: uppercase; margin-bottom: 6px; }\n  .watch-card .model { font-size: 18px; font-weight: 400; color: #1a1a1a; margin-bottom: 4px; }\n  .watch-card .ref { font-size: 11px; color: #aaa; margin-bottom: 12px; }\n  .watch-card .serial { font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 12px; margin-bottom: 16px; }\n  .watch-card .reject-reason { font-size: 11px; color: #E11D48; background: #FFF1F2; border: 1px solid #FDA4AF; border-radius: 1px; padding: 8px 10px; margin-bottom: 12px; }\n  .watch-card .actions { display: flex; gap: 8px; }\n  .btn-sm { flex: 1; padding: 9px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 1px; cursor: pointer; text-align: center; text-decoration: none; display: block; transition: all 0.2s; }\n  .btn-provenance { background: transparent; border: 1px solid #ddd; color: #888; }\n  .btn-provenance:hover { border-color: #C9A84C; color: #C9A84C; }\n  .btn-as { background: #C9A84C; border: 1px solid #C9A84C; color: #fff; }\n  .btn-as:hover { background: #b8943f; }\n  .btn-disabled { background: #f5f5f5; border: 1px solid #eee; color: #ccc; cursor: not-allowed; }\n  .empty { text-align: center; padding: 60px 24px; border: 1px dashed #ddd; border-radius: 2px; background: #fff; }\n  .empty p { font-size: 13px; color: #aaa; margin-bottom: 20px; }\n  .loading { text-align: center; padding: 40px; color: #aaa; font-size: 12px; letter-spacing: 0.1em; }\n  .claim-section { background: #fff; border: 1px solid #ddd; border-left: 4px solid #C9A84C; border-radius: 2px; padding: 20px 24px; margin-bottom: 32px; }\n  .claim-section h4 { font-size: 11px; letter-spacing: 0.15em; color: #C9A84C; text-transform: uppercase; margin-bottom: 12px; }\n  .claim-row { display: flex; gap: 8px; }\n  .claim-input { flex: 1; background: #fafafa; border: 1px solid #e0e0e0; border-radius: 1px; padding: 10px 14px; font-size: 13px; color: #1a1a1a; outline: none; }\n  .claim-input:focus { border-color: #C9A84C; }\n  .claim-btn { background: #1a1a1a; border: none; border-radius: 1px; padding: 10px 20px; font-size: 11px; letter-spacing: 0.12em; color: #fff; text-transform: uppercase; cursor: pointer; white-space: nowrap; }\n  .claim-btn:hover { background: #C9A84C; }\n  .claim-msg { font-size: 11px; margin-top: 8px; }\n  .claim-help { font-size: 10.5px; color: #aaa; line-height: 1.6; margin-top: 10px; }\n\n  .membership-card { border-radius: 6px; padding: 24px 28px; margin-bottom: 28px; position: relative; overflow: hidden; transition: background 0.3s; }\n  .membership-card::after { content: ''; position: absolute; top: -50%; right: -10%; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.08); }\n  .membership-card.tier-silver { background: linear-gradient(135deg, #b0b0b0, #e4e4e4); color: #333; }\n  .membership-card.tier-gold { background: linear-gradient(135deg, #b8943f, #e9cd8c); color: #1a1a1a; }\n  .membership-card.tier-platinum { background: linear-gradient(135deg, #1a1a1a, #3d3d3d); color: #C9A84C; }\n  .mc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; position: relative; z-index: 1; }\n  .mc-tier-name { font-size: 13px; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 600; }\n  .mc-tier-sub { font-size: 10px; opacity: 0.75; margin-top: 3px; letter-spacing: 0.05em; }\n  .mc-logo { font-size: 11px; letter-spacing: 0.2em; opacity: 0.6; }\n  .mc-row { display: flex; gap: 36px; position: relative; z-index: 1; }\n  .mc-stat-label { font-size: 10px; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 4px; }\n  .mc-stat-value { font-size: 21px; font-weight: 500; letter-spacing: 0.02em; height: 28px; display: flex; align-items: center; }\n  .mc-loading { font-size: 12px; opacity: 0.6; }\n  @media (max-width: 600px) {\n    .header { padding: 14px 20px; }\n    .main { padding: 24px 16px; }\n    .watch-grid { grid-template-columns: 1fr; }\n  }\n";
document.head.appendChild(styleEl_aldosa_my);

document.getElementById('aldosa-my').innerHTML = "<div class=\"header\">\n    <a class=\"logo\" href=\"/\">ALDOSA</a>\n    <div class=\"nav\">\n      <a href=\"/\">\ud648</a>\n      <button class=\"logout\" onclick=\"handleLogout()\">\ub85c\uadf8\uc544\uc6c3</button>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"greeting\">\n      <h2 id=\"greetingName\">\uc548\ub155\ud558\uc138\uc694</h2>\n      <p>\uc18c\uc7a5\ud55c \uc2dc\uacc4\ub97c \ub4f1\ub85d\ud558\uace0 AS \uc811\uc218, \uc720\uc9c0 \ubcf4\uc218 \uc774\ub825\uc744 \uad00\ub9ac \ubc1b\uc73c\uc138\uc694.</p>\n    </div>\n\n    <div class=\"membership-card tier-silver\" id=\"membershipCard\">\n      <div class=\"mc-top\">\n        <div>\n          <div class=\"mc-tier-name\" id=\"mcTierName\">\ubd88\ub7ec\uc624\ub294 \uc911</div>\n          <div class=\"mc-tier-sub\" id=\"mcTierSub\"></div>\n        </div>\n        <div class=\"mc-logo\">ALDOSA</div>\n      </div>\n      <div class=\"mc-row\">\n        <div style=\"cursor:pointer;\" onclick=\"showMileageHistory()\">\n          <div class=\"mc-stat-label\">\ub9c8\uc77c\ub9ac\uc9c0</div>\n          <div class=\"mc-stat-value\" id=\"mcMileage\">-</div>\n        </div>\n        <div style=\"cursor:pointer;\" onclick=\"showMyCoupons()\">\n          <div class=\"mc-stat-label\">\ubcf4\uc720 \ubc14\uc6b0\ucc98</div>\n          <div class=\"mc-stat-value\" id=\"mcCoupons\">-</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"claim-section\">\n      <h4>ALDOSA \ucf54\ub4dc\ub85c \uc2dc\uacc4 \uc5f0\uacb0</h4>\n      <div class=\"claim-row\">\n        <input type=\"text\" class=\"claim-input\" id=\"claimCode\" placeholder=\"ALD-2026-XXXXXX\" />\n        <button class=\"claim-btn\" onclick=\"handleClaim()\">\uc5f0\uacb0\ud558\uae30</button>\n      </div>\n      <p class=\"claim-help\">\uc218\ub9ac \uc13c\ud130\uc5d0\uc11c \uc548\ub0b4\ubc1b\uc740 ALDOSA \ucf54\ub4dc\ub97c \uc785\ub825\ud558\uc2dc\uba74 \uc2dc\uacc4 \ub4f1\ub85d \ubc0f \uc218\ub9ac \uc774\ub825\uc5d0 \uc790\ub3d9 \ubc18\uc601\ub429\ub2c8\ub2e4. \ucf54\ub4dc\ub294 ALDOSA \ub4f1\ub85d \uc218\ub9ac \uc13c\ud130\uc5d0\uc11c\ub9cc \ubc1c\uae09\ub418\uba70, \ubbf8\ub4f1\ub85d \uc13c\ud130\ub97c \uc774\uc6a9\ud558\uc2e0 \uacbd\uc6b0 \uace0\uac1d\uc13c\ud130\ub85c \uc5c5\uccb4 \ub4f1\ub85d\uc744 \uc694\uccad\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</p>\n      <div class=\"claim-msg\" id=\"claimMsg\"></div>\n    </div>\n\n    <div class=\"section-header\">\n      <h3>\ub0b4 \uc2dc\uacc4</h3>\n      <a id=\"registerBtn\" href=\"#\" class=\"btn-add\">+ \uc2dc\uacc4 \ub4f1\ub85d</a>\n    </div>\n    <div id=\"watchList\">\n      <div class=\"loading\">\ubd88\ub7ec\uc624\ub294 \uc911...</div>\n    </div>\n  </div>";


  var API_URL = "https://script.google.com/macros/s/AKfycbyk1khfq0I8XNYDgvPcIa0aTzYayAM7HekoRapfCZc7CEqfDR2Eh3AxUi8ceqemk4aK3A/exec";

  var params = new URLSearchParams(window.location.search);
  var member_id = params.get("member_id");
  var name = params.get("name");
  var email = params.get("email");
  var phone = params.get("phone");

  if (!member_id) {
    window.location.href = "/login";
  } else {
    var baseParams = "?member_id=" + member_id + "&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone);
    document.getElementById("greetingName").textContent = name + "님, 안녕하세요";
    document.getElementById("registerBtn").href = "/register-watch" + baseParams;
    document.querySelector(".logo").href = "/" + baseParams;
    document.querySelector('.nav a[href="/"]').href = "/" + baseParams;

    function loadWatches() {
      fetch(API_URL + "?action=getWatches&member_id=" + member_id)
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var container = document.getElementById("watchList");
          if (!data.success || data.watches.length === 0) {
            container.innerHTML = '<div class="empty"><p>등록된 시계가 없습니다.</p><a href="/register-watch' + baseParams + '" class="btn-add">첫 번째 시계 등록하기</a></div>';
            return;
          }
          var html = '<div class="watch-grid">';
          data.watches.forEach(function(w) {
            var statusClass = "status-" + (w.status || "대기중");
            var statusLabel = w.status || "대기중";
            var isApproved = w.status === "승인";
            html += '<div class="watch-card">';
            html += '<span class="status-badge ' + statusClass + '">' + statusLabel + '</span>';
            html += '<div class="brand">' + w.brand + '</div>';
            html += '<div class="model">' + w.model + '</div>';
            html += '<div class="ref">Ref. ' + w.reference + '</div>';
            html += '<div class="serial">S/N : ' + w.serial + '</div>';
            if (w.status === "거절" && w.reject_reason) {
              html += '<div class="reject-reason">거절 사유: ' + w.reject_reason + '</div>';
            }
            html += '<div class="actions">';
            if (isApproved) {
              html += '<a href="/provenance?serial=' + w.serial + baseParams.replace("?","&") + '" class="btn-sm btn-provenance">수리 이력</a>';
              html += '<a href="/as-request?serial=' + w.serial + '&brand=' + encodeURIComponent(w.brand) + '&model=' + encodeURIComponent(w.model) + baseParams.replace("?","&") + '" class="btn-sm btn-as">AS 접수</a>';
            } else {
              html += '<span class="btn-sm btn-disabled">수리 이력</span>';
              html += '<span class="btn-sm btn-disabled">AS 접수</span>';
            }
            html += '</div></div>';
          });
          html += '</div>';
          container.innerHTML = html;
        })
        .catch(function() {
          document.getElementById("watchList").innerHTML = '<div class="loading">오류가 발생했습니다. 새로고침 해주세요.</div>';
        });
    }

    function handleClaim() {
      var code = document.getElementById("claimCode").value.trim();
      var msgEl = document.getElementById("claimMsg");
      if (!code) { msgEl.style.color = "#E11D48"; msgEl.textContent = "코드를 입력해주세요."; return; }
      fetch(API_URL + "?action=claimWatch&code=" + encodeURIComponent(code) + "&member_id=" + member_id)
        .then(function(r) { return r.json(); })
        .then(function(data) {
          if (data.success) {
            msgEl.style.color = "#16A34A";
            msgEl.textContent = "시계가 연결되었습니다!";
            setTimeout(function() { loadWatches(); }, 1000);
          } else {
            msgEl.style.color = "#E11D48";
            msgEl.textContent = data.message;
          }
        });
    }

    function showOverlay(innerHtml) {
      var overlay = document.createElement("div");
      overlay.id = "detailOverlay";
      overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:999;padding:20px;";
      overlay.innerHTML = '<div style="background:#fff;border-radius:4px;max-width:420px;width:100%;max-height:80vh;overflow-y:auto;padding:28px;">' + innerHtml + '<button onclick="closeOverlay()" style="width:100%;padding:11px;background:#1a1a1a;color:#fff;border:none;border-radius:2px;cursor:pointer;font-size:12px;letter-spacing:0.1em;margin-top:16px;">닫기</button></div>';
      overlay.onclick = function(e) { if (e.target === overlay) closeOverlay(); };
      document.body.appendChild(overlay);
    }
    function closeOverlay() {
      var overlay = document.getElementById("detailOverlay");
      if (overlay) overlay.remove();
    }

    function showMileageHistory() {
      fetch(API_URL + "?action=getMileageHistory&member_id=" + member_id)
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var history = (data.success ? data.history : []) || [];
          var html = '<div style="font-size:10px;letter-spacing:0.2em;color:#C9A84C;text-transform:uppercase;margin-bottom:14px;">마일리지 내역</div>';
          if (history.length === 0) {
            html += '<div style="color:#aaa;font-size:13px;text-align:center;padding:20px 0;">내역이 없습니다.</div>';
          } else {
            history.slice().reverse().forEach(function(h) {
              var d = new Date(h.created_at);
              var dateStr = isNaN(d.getTime()) ? h.created_at : (d.getFullYear() + "." + String(d.getMonth()+1).padStart(2,"0") + "." + String(d.getDate()).padStart(2,"0"));
              var sign = h.amount >= 0 ? "+" : "";
              var color = h.amount >= 0 ? "#16A34A" : "#E11D48";
              html += '<div style="padding:10px 0;border-bottom:1px solid #f0f0f0;">';
              html += '<div style="display:flex;justify-content:space-between;font-size:13px;"><span>' + h.reason + '</span><span style="color:' + color + ';font-weight:600;">' + sign + parseInt(h.amount).toLocaleString("ko-KR") + 'P</span></div>';
              html += '<div style="font-size:10px;color:#aaa;margin-top:3px;">' + dateStr + ' · 잔액 ' + parseInt(h.balance_after).toLocaleString("ko-KR") + 'P</div>';
              html += '</div>';
            });
          }
          showOverlay(html);
        });
    }

    function showMyCoupons() {
      fetch(API_URL + "?action=getMyCoupons&member_id=" + member_id)
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var coupons = (data.success ? data.coupons : []) || [];
          var html = '<div style="font-size:10px;letter-spacing:0.2em;color:#C9A84C;text-transform:uppercase;margin-bottom:14px;">보유 바우처</div>';
          if (coupons.length === 0) {
            html += '<div style="color:#aaa;font-size:13px;text-align:center;padding:20px 0;">보유한 바우처가 없습니다.</div>';
          } else {
            coupons.slice().reverse().forEach(function(c) {
              var valueText = c.type === "percent" ? (c.value + "% 할인") : (c.type === "amount" && parseInt(c.value) > 0 ? parseInt(c.value).toLocaleString("ko-KR") + "원 할인" : "");
              html += '<div style="padding:12px 0;border-bottom:1px solid #f0f0f0;" id="couponRow_' + c.coupon_id + '">';
              html += '<div style="font-size:14px;font-weight:500;">' + (c.title || "바우처") + '</div>';
              if (valueText) html += '<div style="font-size:12px;color:#999;margin-top:2px;">' + valueText + '</div>';
              if (c.status === "미사용") {
                html += '<div style="display:flex;align-items:center;gap:8px;margin-top:6px;">';
                html += '<span style="font-size:13px;letter-spacing:0.1em;color:#C9A84C;font-weight:600;background:#FFF8E7;display:inline-block;padding:4px 10px;border-radius:2px;">' + c.code + '</span>';
                html += '<button onclick="startRedeemVoucher(\'' + c.coupon_id + '\')" style="font-size:11px;padding:5px 10px;background:#1a1a1a;color:#fff;border:none;border-radius:2px;cursor:pointer;">사용처리</button>';
                html += '</div>';
                html += '<div id="redeemForm_' + c.coupon_id + '"></div>';
              }
              html += '<div style="font-size:10px;color:#aaa;margin-top:4px;">' + (c.status === "미사용" ? '<span style="color:#16A34A;">사용가능</span>' : '<span style="color:#aaa;">' + c.status + (c.used_shop ? ' · ' + c.used_shop : '') + (c.used_serial ? ' · S/N ' + c.used_serial : '') + '</span>') + ' · 발급 ' + (c.created_at ? c.created_at.slice(0,10) : '-') + (c.expire_date ? ' · ' + c.expire_date.slice(0,10) + ' 까지' : '') + '</div>';
              html += '</div>';
            });
          }
          showOverlay(html);
        });
    }

    function startRedeemVoucher(couponId) {
      var el = document.getElementById("redeemForm_" + couponId);
      el.innerHTML = '<div style="margin-top:8px; padding:10px; background:#fafafa; border-radius:2px;"><div style="font-size:11px; color:#999;">불러오는 중...</div></div>';
      fetch(API_URL + "?action=getWatches&member_id=" + member_id)
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var watches = (data.success ? data.watches : []).filter(function(w) { return w.status === "승인"; });
          if (watches.length === 0) {
            el.innerHTML = '<div style="margin-top:8px; padding:10px; background:#FFF1F2; border-radius:2px; font-size:12px; color:#E11D48;">등록된(승인된) 시계가 없습니다. 먼저 시계를 등록해주세요.</div>';
            return;
          }
          var optionsHtml = watches.map(function(w) {
            return '<option value="' + w.serial + '">' + w.brand + ' ' + w.model + ' (S/N ' + w.serial + ')</option>';
          }).join('');
          el.innerHTML = '<div style="margin-top:8px; padding:10px; background:#fafafa; border-radius:2px;">' +
            '<div style="font-size:10px; color:#999; margin-bottom:6px;">본 바우처는 ALDOSA에 등록된 시계에 한해 사용하실 수 있습니다. 적용하실 시계가 아직 등록되어 있지 않다면, 먼저 시계를 등록하신 후 사용해주세요.</div>' +
            '<select id="voucherSerialSelect_' + couponId + '" style="width:100%; padding:9px 10px; font-size:13px; border:1px solid #ddd; border-radius:1px; margin-bottom:10px; background:#fff; color:#1a1a1a;"><option value="">시계 선택</option>' + optionsHtml + '</select>' +
            '<div style="font-size:10px; color:#999; margin-bottom:6px;">직원에게 폰을 보여주시고, 매장 코드를 입력해 달라고 요청해주세요.</div>' +
            '<input type="text" id="shopCodeInput_' + couponId + '" maxlength="4" placeholder="매장 코드 4자리" style="width:100%; padding:9px 10px; font-size:14px; text-align:center; letter-spacing:0.1em; border:1px solid #C9A84C; border-radius:1px; margin-bottom:6px;" />' +
            '<div style="display:flex; gap:6px;">' +
            '<button onclick="confirmRedeemVoucher(\'' + couponId + '\')" style="flex:1; padding:9px; background:#16A34A; color:#fff; border:none; border-radius:1px; cursor:pointer; font-size:12px;">확인</button>' +
            '<button onclick="document.getElementById(\'redeemForm_' + couponId + '\').innerHTML=\'\'" style="flex:1; padding:9px; background:#fff; border:1px solid #ddd; color:#888; border-radius:1px; cursor:pointer; font-size:12px;">취소</button>' +
            '</div></div>';
        });
    }

    function confirmRedeemVoucher(couponId) {
      var serialSelect = document.getElementById("voucherSerialSelect_" + couponId);
      var serial = serialSelect.value;
      var input = document.getElementById("shopCodeInput_" + couponId);
      var shopCode = input.value.trim();
      if (!serial) { alert("적용할 시계를 선택해주세요."); return; }
      if (!shopCode) return;
      var params = new URLSearchParams({ action: "redeemCouponByShopCode", coupon_id: couponId, shop_code: shopCode, serial: serial });
      fetch(API_URL + "?" + params.toString())
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var el = document.getElementById("redeemForm_" + couponId);
          if (data.success) {
            el.innerHTML = '<div style="margin-top:8px; font-size:12px; color:#16A34A;">' + data.shop_name + '에서 사용 처리되었습니다.</div>';
            setTimeout(function() { closeOverlay(); showMyCoupons(); }, 1200);
          } else {
            el.innerHTML = '<div style="margin-top:8px; font-size:12px; color:#E11D48;">' + data.message + '</div>';
          }
        });
    }

    function loadMembership() {
      fetch(API_URL + "?action=getMemberSummary&member_id=" + member_id)
        .then(function(r) { return r.json(); })
        .then(function(data) {
          if (!data.success) return;
          var card = document.getElementById("membershipCard");
          card.className = "membership-card tier-" + data.grade.grade_key;
          document.getElementById("mcTierName").textContent = data.grade.grade_name + " MEMBER";
          document.getElementById("mcTierSub").textContent = "적립률 " + data.grade.mileage_rate + "%";
          document.getElementById("mcMileage").textContent = parseInt(data.mileage_balance || 0).toLocaleString("ko-KR") + "P";
          document.getElementById("mcCoupons").textContent = (data.coupon_count || 0) + "장";
        })
        .catch(function() {});
    }

    loadMembership();
    loadWatches();
  }

  function handleLogout() {
    window.location.href = "/login";
  }