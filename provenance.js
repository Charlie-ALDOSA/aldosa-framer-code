var styleEl_aldosa_provenance = document.createElement('style');
styleEl_aldosa_provenance.textContent = "\n  * { margin: 0; padding: 0; box-sizing: border-box; }\n  body { background: #F4F4F2; min-height: 100vh; font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; }\n\n  .header { background: #fff; border-bottom: 1px solid #ddd; padding: 16px 40px; display: flex; align-items: center; justify-content: space-between; }\n  .header .logo { font-size: 18px; font-weight: 300; letter-spacing: 0.3em; color: #1a1a1a; text-decoration: none; }\n  .header .nav a { font-size: 11px; letter-spacing: 0.12em; color: #888; text-decoration: none; text-transform: uppercase; }\n  .header .nav a:hover { color: #C9A84C; }\n\n  .main { max-width: 780px; margin: 0 auto; padding: 40px 24px; }\n  .btn-back { display: inline-block; margin-bottom: 20px; font-size: 11px; letter-spacing: 0.12em; color: #888; text-decoration: none; text-transform: uppercase; }\n  .btn-back:hover { color: #C9A84C; }\n\n  .cert-header { background: #fff; border: 1px solid #ddd; border-top: 3px solid #C9A84C; border-radius: 2px; padding: 32px 40px; margin-bottom: 16px; position: relative; }\n  .cert-label { font-size: 10px; letter-spacing: 0.3em; color: #C9A84C; text-transform: uppercase; margin-bottom: 10px; }\n  .cert-header h1 { font-size: 22px; font-weight: 400; letter-spacing: 0.1em; color: #1a1a1a; margin-bottom: 20px; }\n  .cert-meta { display: flex; gap: 48px; flex-wrap: wrap; }\n  .meta-item label { font-size: 10px; letter-spacing: 0.12em; color: #999; text-transform: uppercase; display: block; margin-bottom: 4px; }\n  .meta-item span { font-size: 13px; color: #333; }\n  .print-btn { position: absolute; top: 32px; right: 40px; background: #fff; border: 1px solid #C9A84C; border-radius: 1px; padding: 8px 20px; font-size: 11px; letter-spacing: 0.15em; color: #C9A84C; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }\n  .print-btn:hover { background: #C9A84C; color: #fff; }\n\n  .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }\n  .info-card { background: #fff; border: 1px solid #ddd; border-radius: 2px; padding: 24px 28px; }\n  .info-card h3 { font-size: 10px; letter-spacing: 0.2em; color: #C9A84C; text-transform: uppercase; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid #eee; }\n  .info-row { display: flex; justify-content: space-between; align-items: center; padding: 7px 0; border-bottom: 1px solid #f0f0f0; }\n  .info-row:last-child { border-bottom: none; }\n  .info-row label { font-size: 11px; color: #999; }\n  .info-row span { font-size: 12px; color: #1a1a1a; font-weight: 500; text-align: right; }\n\n  .timeline-section { background: #fff; border: 1px solid #ddd; border-radius: 2px; padding: 32px 40px; margin-bottom: 16px; }\n  .timeline-section h3 { font-size: 10px; letter-spacing: 0.2em; color: #C9A84C; text-transform: uppercase; margin-bottom: 24px; padding-bottom: 10px; border-bottom: 1px solid #eee; }\n  .timeline { position: relative; padding-left: 20px; }\n  .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: #ddd; }\n  .timeline-item { position: relative; padding-left: 24px; margin-bottom: 28px; }\n  .timeline-item:last-child { margin-bottom: 0; }\n  .timeline-dot { position: absolute; left: -25px; top: 4px; width: 10px; height: 10px; border-radius: 50%; background: #C9A84C; border: 2px solid #fff; box-shadow: 0 0 0 1px #C9A84C; }\n  .timeline-dot.system { background: #ccc; box-shadow: 0 0 0 1px #ccc; }\n  .timeline-date { font-size: 10px; letter-spacing: 0.1em; color: #aaa; margin-bottom: 4px; }\n  .timeline-type { font-size: 14px; font-weight: 500; color: #1a1a1a; margin-bottom: 4px; }\n  .timeline-desc { font-size: 12px; color: #666; margin-bottom: 10px; line-height: 1.6; }\n  .timeline-details { display: flex; gap: 8px; flex-wrap: wrap; }\n  .detail-badge { font-size: 10px; letter-spacing: 0.06em; padding: 4px 10px; border-radius: 2px; }\n  .badge-cost { background: #FFF8E7; border: 1px solid #F0C040; color: #8B6914; }\n  .badge-shop { background: #EEF2FF; border: 1px solid #C7D2FE; color: #4338CA; }\n  .badge-warranty { background: #F0FDF4; border: 1px solid #86EFAC; color: #16A34A; }\n  .badge-warranty.expired { background: #FFF1F2; border: 1px solid #FDA4AF; color: #E11D48; }\n  .badge-no-warranty { background: #F9FAFB; border: 1px solid #E5E7EB; color: #9CA3AF; }\n  .invoice-btn { background: #fff; border: 1px solid #C9A84C; color: #C9A84C; cursor: pointer; font-family: inherit; }\n  .invoice-btn:hover { background: #C9A84C; color: #fff; }\n\n  .history-row { display: flex; align-items: center; gap: 10px; padding: 11px 0; cursor: pointer; border-bottom: 1px solid #f0f0f0; }\n  .history-row:hover { background: #fafafa; }\n  .history-date { font-size: 11px; color: #aaa; width: 76px; flex-shrink: 0; }\n  .history-summary { font-size: 13px; color: #1a1a1a; flex: 1; }\n  .history-summary .shop { color: #999; font-size: 12px; }\n  .history-warranty { font-size: 11px; flex-shrink: 0; white-space: nowrap; }\n  .history-chevron { font-size: 10px; color: #C9A84C; flex-shrink: 0; transition: transform 0.2s; }\n  .history-chevron.open { transform: rotate(180deg); }\n  .history-detail { padding: 2px 0 16px 18px; font-size: 12px; color: #666; line-height: 1.7; border-bottom: 1px solid #f0f0f0; }\n\n  .cert-footer { background: #fff; border: 1px solid #ddd; border-bottom: 3px solid #C9A84C; border-radius: 2px; padding: 24px 40px; display: flex; justify-content: space-between; align-items: center; }\n  .issuer p { font-size: 11px; color: #888; line-height: 1.8; }\n  .issuer strong { color: #1a1a1a; }\n  .stamp { text-align: right; }\n  .stamp p { font-size: 10px; color: #aaa; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px; }\n  .stamp-box { width: 80px; height: 80px; border: 1px solid #C9A84C; border-radius: 2px; margin-left: auto; display: flex; align-items: center; justify-content: center; }\n  .stamp-box span { font-size: 10px; letter-spacing: 0.15em; color: #C9A84C; text-transform: uppercase; }\n\n  .loading { text-align: center; padding: 60px; color: #aaa; font-size: 12px; }\n\n  .legal-notice { background: #fff; border: 1px solid #ddd; border-radius: 2px; padding: 24px 32px; margin-top: 16px; }\n  .legal-notice h4 { font-size: 10px; letter-spacing: 0.15em; color: #999; text-transform: uppercase; margin-bottom: 14px; }\n  .legal-notice ol { padding-left: 18px; }\n  .legal-notice li { font-size: 11px; color: #888; line-height: 1.6; margin-bottom: 3px; }\n  .legal-notice li:last-child { margin-bottom: 0; }\n  .legal-notice li .en { display: block; color: #aaa; font-style: italic; margin-top: 3px; line-height: 1.6; }\n  @media print { .legal-notice li, .legal-notice li .en { font-size: 9px; } }\n   @media (max-width: 600px) {\n    .header { padding: 14px 20px; }\n    .main { padding: 24px 16px; }\n    .info-grid { grid-template-columns: 1fr; }\n    .cert-header { padding: 24px 20px; }\n    .cert-meta { gap: 24px; }\n    .print-btn { position: static; display: block; margin-top: 16px; width: 100%; }\n    .timeline-section { padding: 24px 20px; }\n    .cert-footer { flex-direction: column; align-items: flex-start; gap: 16px; padding: 20px; }\n    .stamp { text-align: left; }\n    .stamp-box { margin-left: 0; }\n  }\n  @media print {\n    .header, .print-btn, .btn-back { display: none; }\n    body { background: #fff; }\n    .main { padding: 0; }\n  }\n";
document.head.appendChild(styleEl_aldosa_provenance);

document.getElementById('aldosa-provenance').innerHTML = "<div class=\"header\">\n    <a class=\"logo\" href=\"/\">ALDOSA</a>\n    <div class=\"nav\"><a id=\"backToMy\" href=\"#\">\ub9c8\uc774\ud398\uc774\uc9c0</a></div>\n  </div>\n  <div class=\"main\">\n    <a id=\"backBtn\" href=\"#\" class=\"btn-back\">\u2190 \ub9c8\uc774\ud398\uc774\uc9c0\ub85c</a>\n    <div id=\"certContent\"><div class=\"loading\">\uc774\ub825 \ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n  </div>";


var API_URL = "https://script.google.com/macros/s/AKfycbyk1khfq0I8XNYDgvPcIa0aTzYayAM7HekoRapfCZc7CEqfDR2Eh3AxUi8ceqemk4aK3A/exec";
  var params = new URLSearchParams(window.location.search);
  var serial = params.get("serial");
  var member_id = params.get("member_id");
  var name = params.get("name");
  var email = params.get("email");
  var phone = params.get("phone");

  if (!serial || !member_id) {
    window.location.href = "/login";
  } else {
    var baseParams = "?member_id=" + member_id + "&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone);
    document.getElementById("backToMy").href = "/my" + baseParams;
    document.getElementById("backBtn").href = "/my" + baseParams;
    document.querySelector(".logo").href = "/" + baseParams;

    function formatDate(iso) {
      if (!iso) return "-";
      var d = new Date(iso);
      return d.getFullYear() + "." + String(d.getMonth()+1).padStart(2,"0") + "." + String(d.getDate()).padStart(2,"0");
    }

    function formatCost(cost) {
      if (!cost || cost == 0) return null;
      return parseInt(cost).toLocaleString("ko-KR") + "원";
    }

    var BRAND_WARRANTY_YEARS = {
      "Rolex": 5, "Omega": 5, "Patek Philippe": 2, "Cartier": 2, "IWC": 2,
      "Audemars Piguet": 2, "Vacheron Constantin": 2, "Jaeger-LeCoultre": 2,
      "Breitling": 2, "TAG Heuer": 2
    };
    var DEFAULT_WARRANTY_YEARS = 2;

    function getManufacturerWarranty(brand, purchaseDateIso) {
      if (!purchaseDateIso) return { text: "구입일 미등록", expired: null };
      var purchase = new Date(purchaseDateIso);
      if (isNaN(purchase.getTime())) return { text: "구입일 미등록", expired: null };
      var years = BRAND_WARRANTY_YEARS.hasOwnProperty(brand) ? BRAND_WARRANTY_YEARS[brand] : DEFAULT_WARRANTY_YEARS;
      var expire = new Date(purchase);
      expire.setFullYear(expire.getFullYear() + years);
      var isExpired = expire < new Date();
      return { text: formatDate(expire.toISOString()) + " 만료" + (isExpired ? " (만료됨)" : ""), expired: isExpired };
    }

    function loadProvenance() {
      var watchUrl = API_URL + "?action=getWatches&member_id=" + member_id + "&_=" + Date.now();
      fetch(watchUrl, { cache: "no-store" })
        .then(function(r) { return r.json(); })
        .then(function(watchData) {
          var watch = null;
          if (watchData.success) {
            watchData.watches.forEach(function(w) { if (String(w.serial) === String(serial)) watch = w; });
          }
          return fetch(API_URL + "?action=getProvenance&serial=" + encodeURIComponent(serial) + "&_=" + Date.now(), { cache: "no-store" })
            .then(function(r) { return r.json(); })
            .then(function(provData) { renderCert(watch, provData.history || []); });
        })
        .catch(function(err) {
          document.getElementById("certContent").innerHTML = '<div class="loading">오류가 발생했습니다.</div>';
        });
    }

    function renderCert(watch, history) {
      var brand = watch ? watch.brand : "-";
      var model = watch ? watch.model : "-";
      var reference = watch ? watch.reference : "-";
      var purchaseDate = watch ? formatDate(watch.purchase_date) : "-";
      var purchasePlace = watch ? (watch.purchase_place || "-") : "-";
      var mfgWarranty = getManufacturerWarranty(brand, watch ? watch.purchase_date : null);

      var timelineHtml = "";
      if (history.length === 0) {
        timelineHtml = '<div class="history-row" style="cursor:default;"><span style="width:8px;height:8px;border-radius:50%;background:#ccc;flex-shrink:0;"></span><span class="history-summary" style="color:#aaa;">이력이 없습니다.</span></div>';
      } else {
        history.forEach(function(h) {
          var isSystem = h.technician === "SYSTEM";
          var hasInvoice = !!h.request_id && h.cost > 0;
          var warrantyText = "";
          var warrantyColor = "#999";
          if (h.warranty_months > 0 && h.warranty_expire) {
            var isExpired = h.warranty_status === "만료";
            warrantyText = isExpired ? "보증 만료" : "보증 ~" + formatDate(h.warranty_expire);
            warrantyColor = isExpired ? "#E11D48" : "#16A34A";
          } else if (!isSystem && h.work_type !== "AS 접수") {
            warrantyText = "무상보증 없음";
          }

          var rowId = h.provenance_id;
          timelineHtml += '<div class="history-row" onclick="toggleHistory(\'' + rowId + '\')">';
          timelineHtml += '<span style="width:8px; height:8px; border-radius:50%; background:' + (isSystem ? '#ccc' : '#C9A84C') + '; flex-shrink:0;"></span>';
          timelineHtml += '<span class="history-date">' + formatDate(h.date) + '</span>';
          timelineHtml += '<span class="history-summary">' + h.work_type + (h.shop_name ? '<span class="shop"> · ' + h.shop_name + '</span>' : '') + '</span>';
          if (warrantyText) timelineHtml += '<span class="history-warranty" style="color:' + warrantyColor + ';">' + warrantyText + '</span>';
          timelineHtml += '<span class="history-chevron" id="chev_' + rowId + '">▾</span>';
          timelineHtml += '</div>';

          timelineHtml += '<div class="history-detail" id="detail_' + rowId + '" style="display:none;">';
          timelineHtml += '<div>' + h.description + '</div>';
          if (hasInvoice) {
            timelineHtml += '<button type="button" class="invoice-btn" style="margin-top:8px; padding:6px 14px; font-size:11px; border-radius:2px;" onclick="event.stopPropagation(); showInvoice(\'' + h.request_id + '\',\'' + (h.shop_name||'') + '\',\'' + h.date + '\')">비용 내역 보기</button>';
          } else if (!isSystem && h.cost > 0) {
            timelineHtml += '<div style="margin-top:8px; font-size:12px; color:#8B6914;">청구금액 ' + formatCost(h.cost) + '</div>';
          }
          timelineHtml += '</div>';
        });
      }

      var certNo = "CERT-" + serial.toUpperCase() + "-" + new Date().getFullYear();
      var html = '';
      html += '<div class="cert-header"><div class="cert-label">Watch Provenance Certificate</div>';
      html += '<h1>유지보수 이력 증명서</h1>';
      html += '<div class="cert-meta">';
      html += '<div class="meta-item"><label>증명서 번호</label><span>' + certNo + '</span></div>';
      html += '<div class="meta-item"><label>발행일</label><span>' + formatDate(new Date().toISOString()) + '</span></div>';
      html += '<div class="meta-item"><label>소유자</label><span>' + name + '</span></div>';
      html += '</div><button class="print-btn" onclick="window.print()">인쇄 / PDF</button></div>';

      html += '<div class="info-grid">';
      html += '<div class="info-card"><h3>소유자 정보</h3>';
      html += '<div class="info-row"><label>성명</label><span>' + name + '</span></div>';
      html += '<div class="info-row"><label>연락처</label><span>' + phone + '</span></div>';
      html += '<div class="info-row"><label>이메일</label><span>' + email + '</span></div>';
      html += '</div>';
      html += '<div class="info-card"><h3>시계 정보</h3>';
      html += '<div class="info-row"><label>브랜드</label><span>' + brand + '</span></div>';
      html += '<div class="info-row"><label>모델</label><span>' + model + '</span></div>';
      html += '<div class="info-row"><label>Ref.</label><span>' + reference + '</span></div>';
      html += '<div class="info-row"><label>S/N</label><span>' + serial + '</span></div>';
      html += '<div class="info-row"><label>구입처</label><span>' + purchasePlace + '</span></div>';
      html += '<div class="info-row"><label>구입일</label><span>' + purchaseDate + '</span></div>';
      html += '<div class="info-row"><label>제조사 보증</label><span style="color:' + (mfgWarranty.expired === false ? '#16A34A' : mfgWarranty.expired === true ? '#E11D48' : '#999') + '">' + mfgWarranty.text + '</span></div>';
      html += '</div></div>';

      html += '<div class="timeline-section"><h3>유지보수 이력</h3>';
      html += '<div class="timeline">' + timelineHtml + '</div></div>';

      html += '<div class="cert-footer">';
      html += '<div class="issuer"><p><strong>ALDOSA</strong> — Watch Provenance & Service<br>';
      html += '본 증명서는 ALDOSA 시스템에 등록된 유지보수 이력을 기반으로 발행되었습니다.<br>';
      html += '발행일: ' + formatDate(new Date().toISOString()) + '</p></div>';
      html += '<div class="stamp"><p>ALDOSA Official</p><div class="stamp-box"><span>ALDOSA</span></div></div>';
      html += '</div>';

      html += '<div class="legal-notice"><h4>유의사항</h4><ol>';
      html += '<li>알도사의 상기 기재 사항은 ALDOSA 시스템에 등록된 정보를 기반으로 하며, 등록 자산의 소유권을 보증하지 않습니다.</li>';
      html += '<li>허위의 이미지·정보 또는 사실과 다른 내용을 근거로 등록·인증을 요청하거나, 본인 소유가 아닌 타인의 자산을 임의로 등록·인증 시도하는 경우, 관련 법령에 따라 형사상 처벌 및 민사상 손해배상 책임이 발생할 수 있습니다.</li>';
      html += '<li>ALDOSA는 등록된 정보에 대해 자체 검토 절차를 거치고 있으나, 이는 모든 경우의 진위를 완전히 보증하는 절차가 아니며, 허위 정보 제공으로 인해 발생하는 책임은 등록자 본인에게 있습니다.</li>';
      html += '<li>상기 기재 사항은 사용자가 제공한 정보 및 ALDOSA를 통해 진행된 서비스 내역을 기반으로 검증 후 기재된 이력 사항이며, 공적 감정서 또는 법적 효력을 갖는 문서가 아닙니다.</li>';
      html += '<li>다만, AS 접수 등을 통해 ALDOSA 또는 지정 협력업체가 실물을 직접 검수한 자산에 대해서는, 해당 검수 결과에 대해 ALDOSA가 보증합니다.</li>';
      html += '</ol>';
      html += '<h4 style="margin-top:20px;">Notice</h4><ol>';
      html += '<li>The information above is based on data registered in the ALDOSA system and does not constitute a guarantee of ownership of the registered asset.</li>';
      html += '<li>Requesting registration or certification based on false images, information, or content that differs from fact, or attempting to register or certify another person\'s asset without authorization, may result in criminal penalties and civil liability for damages under applicable law.</li>';
      html += '<li>ALDOSA conducts its own review process for registered information; however, this process does not guarantee the authenticity of such information in all cases, and the registrant is solely responsible for any consequences arising from the provision of false information.</li>';
      html += '<li>The information above is a history record entered after verification, based on information provided by the user and service records processed through ALDOSA, and does not constitute an official appraisal document or carry legal effect.</li>';
      html += '<li>However, for assets that have been physically inspected by ALDOSA or its designated partner service centers (e.g., through an AS request), ALDOSA guarantees the results of such inspection.</li>';
      html += '</ol></div>';

      document.getElementById("certContent").innerHTML = html;
    }

    function toggleHistory(id) {
      var detail = document.getElementById('detail_' + id);
      var chev = document.getElementById('chev_' + id);
      if (!detail) return;
      if (detail.style.display === 'none') {
        detail.style.display = '';
        if (chev) chev.classList.add('open');
      } else {
        detail.style.display = 'none';
        if (chev) chev.classList.remove('open');
      }
    }

    function showInvoice(requestId, shopName, dateIso) {
      fetch(API_URL + "?action=getASItemsPublic&request_id=" + encodeURIComponent(requestId) + "&_=" + Date.now(), { cache: "no-store" })
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var items = (data.success ? data.items : []) || [];
          var total = items.reduce(function(s, it) { return s + (parseInt(it.cost) || 0); }, 0);
          var html = '<div style="background:#fff;border-radius:4px;max-width:380px;width:90%;padding:28px;">';
          html += '<div style="font-size:10px;letter-spacing:0.2em;color:#C9A84C;text-transform:uppercase;margin-bottom:6px;">수리 비용 내역</div>';
          html += '<div style="font-size:11px;color:#999;margin-bottom:16px;">' + formatDate(dateIso) + (shopName ? ' · ' + shopName : '') + '</div>';
          html += '<table style="width:100%;font-size:13px;border-collapse:collapse;margin-bottom:14px;">';
          if (items.length === 0) {
            html += '<tr><td style="padding:10px 0;color:#aaa;text-align:center;">내역이 없습니다.</td></tr>';
          } else {
            items.forEach(function(it) {
              html += '<tr><td style="padding:6px 0;color:#333;">' + it.item_name + '</td><td style="padding:6px 0;text-align:right;color:#333;">' + (parseInt(it.cost)||0).toLocaleString("ko-KR") + '원</td></tr>';
            });
          }
          html += '<tr style="border-top:1px solid #C9A84C;"><td style="padding:10px 0 0; font-weight:600;">합계</td><td style="padding:10px 0 0; text-align:right; font-weight:600;">' + total.toLocaleString("ko-KR") + '원</td></tr>';
          html += '</table>';
          html += '<button onclick="closeInvoice()" style="width:100%;padding:11px;background:#1a1a1a;color:#fff;border:none;border-radius:2px;cursor:pointer;font-size:12px;letter-spacing:0.1em;">닫기</button>';
          html += '</div>';
          var overlay = document.createElement("div");
          overlay.id = "invoiceOverlay";
          overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:999;";
          overlay.innerHTML = html;
          overlay.onclick = function(e) { if (e.target === overlay) closeInvoice(); };
          document.body.appendChild(overlay);
        });
    }

    function closeInvoice() {
      var overlay = document.getElementById("invoiceOverlay");
      if (overlay) overlay.remove();
    }

    loadProvenance();
  }