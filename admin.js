var styleEl_aldosa_admin = document.createElement('style');
styleEl_aldosa_admin.textContent = "\n  * { margin: 0; padding: 0; box-sizing: border-box; }\n  body { background: #F4F4F2; min-height: 100vh; font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; }\n  .header { background: #1a1a1a; padding: 16px 40px; display: flex; align-items: center; justify-content: space-between; }\n  .header .logo { font-size: 16px; font-weight: 300; letter-spacing: 0.3em; color: #C9A84C; }\n  .header .badge { font-size: 10px; letter-spacing: 0.15em; color: #888; text-transform: uppercase; margin-left: 12px; }\n  .main { max-width: 1200px; margin: 0 auto; padding: 32px 24px; }\n\n  .lock-screen { max-width: 360px; margin: 80px auto; background: #fff; border: 1px solid #ddd; border-top: 3px solid #C9A84C; border-radius: 2px; padding: 36px; }\n  .lock-screen h2 { font-size: 15px; letter-spacing: 0.1em; margin-bottom: 20px; }\n  .lock-screen input { width: 100%; background: #fafafa; border: 1px solid #e0e0e0; border-radius: 1px; padding: 11px 14px; font-size: 14px; outline: none; margin-bottom: 12px; }\n  .lock-screen input:focus { border-color: #C9A84C; }\n  .lock-screen button { width: 100%; background: #1a1a1a; border: none; border-radius: 1px; padding: 12px; font-size: 12px; letter-spacing: 0.15em; color: #fff; text-transform: uppercase; cursor: pointer; }\n  .lock-screen button:hover { background: #C9A84C; }\n  .lock-msg { font-size: 11px; color: #E11D48; margin-top: 10px; text-align: center; display: none; }\n\n  .tabs { display: flex; gap: 4px; margin-bottom: 24px; border-bottom: 1px solid #ddd; flex-wrap: wrap; }\n  .tab { padding: 10px 18px; font-size: 12px; letter-spacing: 0.08em; color: #888; cursor: pointer; border-bottom: 2px solid transparent; white-space: nowrap; }\n  .tab.active { color: #1a1a1a; border-bottom-color: #C9A84C; font-weight: 500; }\n  .tab-content { display: none; }\n  .tab-content.active { display: block; }\n\n  .panel { background: #fff; border: 1px solid #ddd; border-radius: 2px; padding: 24px; margin-bottom: 16px; overflow-x: auto; }\n  .panel h3 { font-size: 11px; letter-spacing: 0.15em; color: #C9A84C; text-transform: uppercase; margin-bottom: 16px; }\n\n  .asset-row { display: grid; grid-template-columns: 90px 1fr 1fr 140px; gap: 16px; align-items: start; padding: 16px 0; border-bottom: 1px solid #eee; }\n  .asset-row:last-child { border-bottom: none; }\n  .asset-row img { width: 90px; height: 90px; object-fit: cover; border-radius: 2px; border: 1px solid #eee; cursor: pointer; }\n  .asset-row .no-img { width: 90px; height: 90px; background: #f5f5f5; border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #bbb; }\n  .asset-info .brand { font-size: 10px; letter-spacing: 0.15em; color: #C9A84C; text-transform: uppercase; }\n  .asset-info .model { font-size: 15px; margin: 2px 0; }\n  .asset-info .meta { font-size: 11px; color: #999; line-height: 1.6; }\n  .asset-actions { display: flex; flex-direction: column; gap: 6px; }\n  .btn-sm { padding: 8px; font-size: 11px; letter-spacing: 0.08em; border-radius: 1px; cursor: pointer; border: none; text-align: center; }\n  .btn-approve { background: #16A34A; color: #fff; }\n  .btn-approve:hover { background: #15803d; }\n  .btn-reject { background: #fff; border: 1px solid #FDA4AF; color: #E11D48; }\n  .btn-reject:hover { background: #FFF1F2; }\n  .empty-msg { text-align: center; padding: 40px; color: #aaa; font-size: 12px; }\n\n  .field { margin-bottom: 14px; }\n  .field label { display: block; font-size: 11px; letter-spacing: 0.1em; color: #999; text-transform: uppercase; margin-bottom: 6px; }\n  .field input, .field select, .field textarea { width: 100%; background: #fafafa; border: 1px solid #e0e0e0; border-radius: 1px; padding: 10px 12px; font-size: 13px; outline: none; font-family: inherit; }\n  .field input:focus, .field select:focus, .field textarea:focus { border-color: #C9A84C; background: #fff; }\n  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n  .field-row3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }\n  .btn-main { background: #C9A84C; border: none; border-radius: 1px; padding: 12px; font-size: 12px; letter-spacing: 0.15em; color: #fff; text-transform: uppercase; cursor: pointer; width: 100%; margin-top: 8px; }\n  .btn-main:hover { background: #b8943f; }\n  .msg-box { margin-top: 12px; padding: 10px 14px; border-radius: 1px; font-size: 12px; text-align: center; display: none; }\n  .msg-box.error { background: #FFF1F2; border: 1px solid #FDA4AF; color: #E11D48; }\n  .msg-box.success { background: #F0FDF4; border: 1px solid #86EFAC; color: #16A34A; }\n\n  .code-table { width: 100%; border-collapse: collapse; font-size: 12px; min-width: 980px; }\n  .code-table th { text-align: left; padding: 8px; color: #999; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; border-bottom: 1px solid #eee; white-space: nowrap; }\n  .code-table td { padding: 10px 8px; border-bottom: 1px solid #f5f5f5; vertical-align: top; }\n  .status-chip { font-size: 10px; padding: 3px 8px; border-radius: 2px; }\n  .chip-\ubbf8\uc0ac\uc6a9 { background: #FFF8E7; color: #8B6914; }\n  .chip-\uc0ac\uc6a9\uc644\ub8cc { background: #F0FDF4; color: #16A34A; }\n\n  .all-asset-search { margin-bottom: 16px; width: 100%; padding: 10px 12px; border: 1px solid #e0e0e0; border-radius: 1px; font-size: 13px; }\n  .status-tag { font-size: 10px; padding: 2px 8px; border-radius: 2px; }\n  .tag-\ub300\uae30\uc911 { background: #FFF8E7; color: #8B6914; }\n  .tag-\uc2b9\uc778 { background: #F0FDF4; color: #16A34A; }\n  .tag-\uac70\uc808 { background: #FFF1F2; color: #E11D48; }\n  .tag-\ubcf4\uc644\uc694\ucc45 { background: #FFF8E7; color: #8B6914; }\n  .tag-\uc811\uc218\uc644\ub8cc { background: #FFF8E7; color: #8B6914; }\n  .tag-\ucd9c\uace0\uc644\ub8cc { background: #F0FDF4; color: #16A34A; }\n  .tag-silver { background: #f0f0f0; color: #666; }\n  .tag-gold { background: #FFF8E7; color: #8B6914; }\n  .tag-platinum { background: #1a1a1a; color: #C9A84C; }\n\n  .stage-track { display: flex; gap: 4px; }\n  .stage-dot { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; cursor: pointer; border: 1px solid #ddd; background: #fafafa; color: #aaa; flex-shrink: 0; }\n  .stage-dot.done { background: #C9A84C; border-color: #C9A84C; color: #fff; }\n  .stage-dot:hover { border-color: #C9A84C; }\n  .stage-labels { display: flex; gap: 4px; margin-top: 4px; }\n  .stage-labels span { width: 30px; font-size: 8px; text-align: center; color: #bbb; }\n\n  .stage-list { display: flex; flex-direction: column; gap: 2px; min-width: 150px; }\n  .stage-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 11px; padding: 4px 0; border-bottom: 1px solid #f5f5f5; }\n  .stage-row:last-child { border-bottom: none; }\n  .stage-row-check { display: flex; align-items: center; gap: 6px; cursor: pointer; color: #999; white-space: nowrap; }\n  .stage-row-check.done { color: #1a1a1a; font-weight: 500; }\n  .stage-dot-v { width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; border: 1px solid #ddd; background: #fafafa; color: #aaa; flex-shrink: 0; }\n  .stage-dot-v.done { background: #C9A84C; border-color: #C9A84C; color: #fff; }\n  .stage-row-date { display: flex; align-items: center; gap: 5px; color: #999; font-size: 10px; white-space: nowrap; }\n  .stage-row-date input[type=\"date\"] { font-size: 10px; padding: 2px 4px; border: 1px solid #C9A84C; border-radius: 1px; }\n  .stage-edit-link { font-size: 9px; color: #C9A84C; cursor: pointer; border: none; background: none; padding: 0; text-decoration: underline; }\n\n  .billing-edit { display: flex; gap: 4px; align-items: center; }\n  .billing-edit input { width: 90px; padding: 5px 6px; font-size: 11px; border: 1px solid #e0e0e0; border-radius: 1px; }\n  .billing-edit button { padding: 5px 8px; font-size: 10px; background: #1a1a1a; color: #fff; border: none; border-radius: 1px; cursor: pointer; }\n\n  .items-panel { background: #fafafa; border: 1px solid #eee; border-radius: 2px; padding: 16px; }\n  .items-table { width: 100%; font-size: 12px; margin-bottom: 12px; border-collapse: collapse; }\n  .items-table th { text-align: left; color: #999; font-size: 10px; padding: 4px; border-bottom: 1px solid #e5e5e5; }\n  .items-table td { padding: 6px 4px; border-bottom: 1px solid #f0f0f0; }\n  .items-table tr.total-row td { border-bottom: none; border-top: 2px solid #C9A84C; font-weight: 600; padding-top: 8px; }\n  .item-del-btn { padding: 3px 8px; font-size: 10px; background: #fff; border: 1px solid #FDA4AF; color: #E11D48; border-radius: 1px; cursor: pointer; }\n  .btn-items-toggle { background: #1a1a1a; color: #fff; }\n  .btn-apply-total { background: #C9A84C; color: #fff; width: 100%; padding: 9px; font-size: 11px; letter-spacing: 0.1em; border: none; border-radius: 1px; cursor: pointer; margin-top: 4px; }\n  .vendor-select-box { margin-bottom: 14px; padding-bottom: 14px; border-bottom: 1px dashed #ddd; }\n  .vendor-select-box label { display: block; font-size: 11px; color: #999; margin-bottom: 6px; }\n  .vendor-select-box select { width: 100%; background: #fff; border: 1px solid #e0e0e0; border-radius: 1px; padding: 9px 10px; font-size: 13px; }\n  .member-panel { background: #fafafa; border: 1px solid #eee; border-radius: 2px; padding: 16px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }\n  .member-panel .mp-box { background: #fff; border: 1px solid #e5e5e5; border-radius: 2px; padding: 12px; }\n  .member-panel .mp-box h5 { font-size: 11px; letter-spacing: 0.1em; color: #C9A84C; text-transform: uppercase; margin-bottom: 10px; }\n  .member-panel input, .member-panel select { width: 100%; padding: 7px 8px; font-size: 12px; border: 1px solid #e0e0e0; border-radius: 1px; margin-bottom: 6px; }\n  .member-panel button { width: 100%; padding: 8px; font-size: 11px; background: #1a1a1a; color: #fff; border: none; border-radius: 1px; cursor: pointer; }\n  .member-panel button:hover { background: #C9A84C; }\n  @media (max-width: 700px) {\n    .member-panel { grid-template-columns: 1fr; }\n  }\n";
document.head.appendChild(styleEl_aldosa_admin);

document.getElementById('aldosa-admin').innerHTML = "<div class=\"header\">\n    <span class=\"logo\">ALDOSA</span><span class=\"badge\">Admin</span>\n    <a href=\"/faq\" target=\"_blank\" style=\"margin-left:auto; font-size:11px; letter-spacing:0.1em; color:#aaa; text-decoration:none;\">\uace0\uac1d\uc6a9 FAQ \ubcf4\uae30 \u2197</a>\n  </div>\n\n  <div id=\"lockScreen\" class=\"lock-screen\">\n    <h2>\uad00\ub9ac\uc790 \uc778\uc99d</h2>\n    <input type=\"password\" id=\"adminKeyInput\" placeholder=\"\uad00\ub9ac\uc790 \ud0a4 \uc785\ub825\" />\n    <button onclick=\"checkAdminKey()\">\uc811\uc18d</button>\n    <div class=\"lock-msg\" id=\"lockMsg\">\uad00\ub9ac\uc790 \ud0a4\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.</div>\n  </div>\n\n  <div id=\"adminMain\" class=\"main\" style=\"display:none;\">\n    <div class=\"tabs\">\n      <div class=\"tab active\" data-tab=\"pending\" onclick=\"switchTab('pending')\">\uc790\uc0b0 \uc2b9\uc778</div>\n      <div class=\"tab\" data-tab=\"as-new\" onclick=\"switchTab('as-new')\">AS \uc2e0\uaddc \uc811\uc218</div>\n      <div class=\"tab\" data-tab=\"as-manage\" onclick=\"switchTab('as-manage')\">AS \uc9c4\ud589 \uad00\ub9ac</div>\n      <div class=\"tab\" data-tab=\"codes\" onclick=\"switchTab('codes')\">\ud074\ub808\uc784 \ucf54\ub4dc</div>\n      <div class=\"tab\" data-tab=\"all\" onclick=\"switchTab('all')\">\uc804\uccb4 \uc790\uc0b0</div>\n      <div class=\"tab\" data-tab=\"members\" onclick=\"switchTab('members')\">\uba64\ubc84 \uad00\ub9ac</div>\n      <div class=\"tab\" data-tab=\"tips\" onclick=\"switchTab('tips')\">\uad00\ub9ac\uc790 TIP</div>\n      <div class=\"tab\" data-tab=\"store\" onclick=\"switchTab('store')\">\uc2a4\ud1a0\uc5b4 \uad00\ub9ac</div><div class=\"tab\" data-tab=\"quotes\" onclick=\"switchTab('quotes')\">\ud30c\ud2b8\ub108 \uacac\uc801</div><div class=\"tab\" data-tab=\"cancel\" onclick=\"switchTab('cancel')\">\uc8fc\ubb38\ucde8\uc18c \uc694\uccad</div><div class=\"tab\" data-tab=\"faq\" onclick=\"switchTab('faq')\">FAQ \uad00\ub9ac</div>\n    </div>\n\n    <div class=\"tab-content active\" id=\"tab-pending\">\n      <div class=\"panel\">\n        <h3>\uc2b9\uc778 \ub300\uae30\uc911\uc778 \uc790\uc0b0 (\uace0\uac1d \ubcf8\uc778 \ub4f1\ub85d\ubd84)</h3>\n        <div id=\"pendingList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-as-new\">\n      <div class=\"panel\">\n        <h3>AS \uc2e0\uaddc \uc811\uc218</h3>\n        <div class=\"field-row\">\n          <div class=\"field\"><label>OFR \uad00\ub9ac\ubc88\ud638</label><input type=\"text\" id=\"as_ofr\" placeholder=\"\uc608) 550011903\" /></div>\n          <div class=\"field\"><label>\uc811\uc218\uc77c (\uae30\ubcf8\uac12: \uc624\ub298, \uc9c1\uc811 \ubcc0\uacbd \uac00\ub2a5)</label><input type=\"date\" id=\"as_received_date\" /></div>\n        </div>\n        <div class=\"field\">\n          <label>\uc811\uc218 \uc810\ud3ec</label>\n          <select id=\"as_store\" onchange=\"loadStaffForStore()\">\n            <option value=\"\">\uc810\ud3ec \uc120\ud0dd</option>\n          </select>\n        </div>\n        <div class=\"field-row\">\n          <div class=\"field\"><label>\ub2f4\ub2f9\uc790</label><select id=\"as_staff\"><option value=\"\">\uc810\ud3ec\ub97c \uba3c\uc800 \uc120\ud0dd\ud558\uc138\uc694</option></select></div>\n          <div class=\"field\"><label>\uc758\ub8b0\uc778 \uc5f0\ub77d\ucc98 (\ub2f4\ub2f9\uc790 \uc544\ub2cc \uace0\uac1d \uc5f0\ub77d\ucc98)</label><input type=\"text\" id=\"as_intake_phone\" placeholder=\"010-0000-0000\" oninput=\"formatPhoneAdmin(this)\" maxlength=\"13\" /></div>\n        </div>\n        <div class=\"field\"><label>\uc758\ub8b0\uc778 \uc131\uba85</label><input type=\"text\" id=\"as_intake_name\" placeholder=\"\uace0\uac1d \uc774\ub984\" /></div>\n        <div class=\"field-row3\">\n          <div class=\"field\"><label>\ube0c\ub79c\ub4dc</label>\n            <select id=\"as_brand\" onchange=\"document.getElementById('as_brand_custom_wrap').style.display = (this.value === '\uae30\ud0c0') ? 'block' : 'none';\">\n              <option value=\"\">\ube0c\ub79c\ub4dc \uc120\ud0dd</option>\n              <option>A. Lange & S\u00f6hne</option>\n              <option>Audemars Piguet</option>\n              <option>Blancpain</option>\n              <option>Breguet</option>\n              <option>Breitling</option>\n              <option>Cartier</option>\n              <option>Hublot</option>\n              <option>IWC</option>\n              <option>Jaeger-LeCoultre</option>\n              <option>Omega</option>\n              <option>Panerai</option>\n              <option>Patek Philippe</option>\n              <option>Richard Mille</option>\n              <option>Rolex</option>\n              <option>TAG Heuer</option>\n              <option>Vacheron Constantin</option>\n              <option>\uae30\ud0c0</option>\n            </select>\n            <div id=\"as_brand_custom_wrap\" style=\"display:none; margin-top:6px;\">\n              <input type=\"text\" id=\"as_brand_custom\" placeholder=\"\ube0c\ub79c\ub4dc\uba85 \uc9c1\uc811 \uc785\ub825\" />\n            </div>\n          </div>\n          <div class=\"field\"><label>\ubaa8\ub378\uba85</label>\n            <input type=\"text\" id=\"as_model\" placeholder=\"\uc608) W69012Z4\" />\n            <label style=\"display:flex; align-items:center; gap:4px; font-size:10px; color:#999; margin-top:4px; cursor:pointer;\"><input type=\"checkbox\" id=\"as_model_pending\" onchange=\"document.getElementById('as_model').disabled=this.checked; if(this.checked) document.getElementById('as_model').value='';\" style=\"margin:0;\" /> \ucd94\ud6c4 \uae30\uc7ac</label>\n          </div>\n          <div class=\"field\"><label>\uc2dc\ub9ac\uc5bc</label>\n            <input type=\"text\" id=\"as_serial\" placeholder=\"\uc608) 759843ZX\" />\n            <label style=\"display:flex; align-items:center; gap:4px; font-size:10px; color:#999; margin-top:4px; cursor:pointer;\"><input type=\"checkbox\" id=\"as_serial_pending\" onchange=\"document.getElementById('as_serial').disabled=this.checked; if(this.checked) document.getElementById('as_serial').value='';\" style=\"margin:0;\" /> \ucd94\ud6c4 \uae30\uc7ac</label>\n          </div>\n        </div>\n        <div class=\"field\"><label>\uad6c\ub9e4\uc77c (\ud68c\uc6d0\uc774 \uc54c\ub824\uc900 \uacbd\uc6b0)</label><input type=\"date\" id=\"as_purchase_date\" /></div>\n        <div class=\"field\"><label>\uc811\uc218\uc2dc \uae30\uc7ac \uc99d\uc0c1</label><textarea id=\"as_symptom\" rows=\"2\" placeholder=\"\uc608) \ubc30\ud130\ub9ac \uad50\uccb4, \uc2dc\uac04 \uba48\ucda4, \uc624\ubc84\ud640 \uc810\uac80 \uc694\ub9dd\"></textarea></div>\n        <div class=\"field-row\">\n          <div class=\"field\"><label>\uacac\uc801 \uae08\uc561 (\uc6d0)</label><input type=\"number\" id=\"as_quote\" placeholder=\"0\" /></div>\n          <div class=\"field\"><label>\uc6b4\uc1a1 \ubc29\ubc95</label><input type=\"text\" id=\"as_shipping\" placeholder=\"\uc608) \uc6b0\uccb4\uad6d\" /></div>\n        </div>\n        <button class=\"btn-main\" onclick=\"handleCreateAS()\">AS \uc811\uc218 \ub4f1\ub85d</button>\n        <div class=\"msg-box\" id=\"asNewMsg\"></div>\n        <div id=\"asNewCodeResult\"></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-as-manage\">\n      <div class=\"panel\">\n        <h3>AS \uc9c4\ud589 \ud604\ud669</h3>\n        <div id=\"asManageList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-codes\">\n      <div class=\"panel\">\n        <h3>\ubc1c\uae09\ub41c \ud074\ub808\uc784 \ucf54\ub4dc \ubaa9\ub85d</h3>\n        <input type=\"text\" class=\"all-asset-search\" id=\"codeSearch\" placeholder=\"\ucf54\ub4dc, \uc811\uc218\ubc88\ud638, \uc758\ub8b0\uc778, \uc5f0\ub77d\ucc98, \ube0c\ub79c\ub4dc/\ubaa8\ub378\ub85c \uac80\uc0c9\" oninput=\"renderCodes()\" />\n        <div id=\"codesList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-all\">\n      <div class=\"panel\">\n        <h3>\uc804\uccb4 \uc790\uc0b0 (\ud68c\uc6d0 \ub9e4\uce6d \uc5ec\ubd80 \ud3ec\ud568)</h3>\n        <input type=\"text\" class=\"all-asset-search\" id=\"assetSearch\" placeholder=\"\uc2dc\ub9ac\uc5bc, \ube0c\ub79c\ub4dc, \ubaa8\ub378\ub85c \uac80\uc0c9\" oninput=\"renderAllAssets()\" />\n        <div id=\"allAssetsList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-tips\">\n      <div class=\"panel\">\n        <h3>\uad00\ub9ac\uc790 TIP / FAQ</h3>\n        <div style=\"font-size:13px; line-height:1.8; color:#333;\">\n\n          <div style=\"margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid #eee;\">\n            <div style=\"font-weight:600; color:#C9A84C; margin-bottom:6px;\">Q. \uc2dc\ub9ac\uc5bc\uc744 \uad6c\uae00\uc2dc\ud2b8\uc5d0\uc11c \uc9c1\uc811 \uc218\uc815\ud574\ub3c4 \ub418\ub098\uc694?</div>\n            \uc2dc\ub9ac\uc5bc\uc740 <b>Assets, AS_Requests, Claim_Codes, Provenance</b> 4\uac1c \uc2dc\ud2b8\uc5d0 \ud769\uc5b4\uc838 \uc800\uc7a5\ub429\ub2c8\ub2e4. \ud55c \uacf3\ub9cc \uace0\uce58\uba74 \ud2b9\ud788 Provenance(\uc774\ub824)\uac00 \ub04a\uc5b4\uc9d1\ub2c8\ub2e4.<br>\n            \uac01 \uc2dc\ud2b8\uc5d0\uc11c <b>Ctrl+H(\ucc3e\uae30/\ubc14\uafb8\uae30)</b> \u2192 \"\uc804\uccb4 \uc140 \ub0b4\uc6a9 \uc77c\uce58\" \uccb4\ud06c \u2192 \uc61b \uc2dc\ub9ac\uc5bc\u2192\uc0c8 \uc2dc\ub9ac\uc5bc\ub85c 4\uacf3 \ubaa8\ub450 \ub3d9\uc77c\ud558\uac8c \ubc14\uafd4\uc8fc\uc138\uc694.\n          </div>\n\n          <div style=\"margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid #eee;\">\n            <div style=\"font-weight:600; color:#C9A84C; margin-bottom:6px;\">Q. \ubaa8\ub378\uba85/\uc2dc\ub9ac\uc5bc\uc744 \ud604\uc7a5\uc5d0\uc11c \ud655\uc778 \ubabb\ud588\uc744 \ub54c\ub294?</div>\n            \"\ubbf8\uae30\uc7ac\", \"\ubbf8\uc0c1\" \uac19\uc740 \ud14d\uc2a4\ud2b8\ub97c \uc9c1\uc811 \uc785\ub825\ud558\uc9c0 \ub9c8\uc138\uc694 (\uc11c\ub85c \ub2e4\ub978 \uac74\uc774 \uac19\uc740 \ud14d\uc2a4\ud2b8\ub97c \uc4f0\uba74 \ud074\ub808\uc784\ucf54\ub4dc\uac00 \uc5c9\ud0b5\ub2c8\ub2e4). \ub300\uc2e0 \uc606\uc758 <b>\"\ucd94\ud6c4 \uae30\uc7ac\" \uccb4\ud06c\ubc15\uc2a4</b>\ub97c \uc0ac\uc6a9\ud558\uc138\uc694. \ud074\ub808\uc784 \ucf54\ub4dc\ub294 \uc2dc\ub9ac\uc5bc \uc5c6\uc774\ub3c4 \uc989\uc2dc \ubc1c\uae09\ub429\ub2c8\ub2e4.\n          </div>\n\n          <div style=\"margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid #eee;\">\n            <div style=\"font-weight:600; color:#C9A84C; margin-bottom:6px;\">Q. \uc2dc\ub9ac\uc5bc\uc744 \ub098\uc911\uc5d0 \uc54c\uac8c \ub418\uba74 \uc5b4\ub5bb\uac8c \ud558\ub098\uc694?</div>\n            \"AS \uc9c4\ud589 \uad00\ub9ac\"\uc5d0\uc11c \ud574\ub2f9 \uac74\uc758 <b>\"\uc2dc\ub9ac\uc5bc \ubcf4\uc644\"</b> \ubc84\ud2bc \ud074\ub9ad \u2192 \uc2dc\ub9ac\uc5bc \uc785\ub825 + \uc0ac\uc9c4 \ucca8\ubd80(\uc120\ud0dd) \u2192 \ud655\uc815. \uc790\uc0b0\uc774 \uc790\ub3d9 \uc0dd\uc131\ub418\uace0, \uace0\uac1d\uc774 \uc774\ubbf8 \ucf54\ub4dc\ub97c \uc785\ub825\ud574 \uac00\uc785\uae4c\uc9c0 \ud588\ub2e4\uba74 \uc790\uc0b0\uae4c\uc9c0 \uc790\ub3d9 \uc5f0\uacb0\ub429\ub2c8\ub2e4.\n          </div>\n\n          <div style=\"margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid #eee;\">\n            <div style=\"font-weight:600; color:#C9A84C; margin-bottom:6px;\">Q. \ubc14\uc6b0\ucc98\ub97c \uc798\ubabb \ubc1c\uae09\ud588\uc5b4\uc694. \ucde8\uc18c\ud560 \uc218 \uc788\ub098\uc694?</div>\n            \"\uba64\ubc84 \uad00\ub9ac\"\uc5d0\uc11c \ud574\ub2f9 \ud68c\uc6d0\uc758 \ubc14\uc6b0\ucc98 \ubaa9\ub85d \u2192 <b>\"\uc0ad\uc81c\"</b> \ubc84\ud2bc (\ubbf8\uc0ac\uc6a9/\uc0ac\uc6a9\uc644\ub8cc/\uae30\ud55c\ub9cc\uae30 \uc0c1\ud0dc \ubb34\uad00\ud558\uac8c \uc0ad\uc81c \uac00\ub2a5, \uae30\ub85d\uc774 \uc644\uc804\ud788 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4). \ubc1c\uae09 \uc2dc \uc0ac\uc6a9\uae30\ud55c\uc740 6\uac1c\uc6d4/1\ub144 \uc911 \uc120\ud0dd\ud560 \uc218 \uc788\uc5b4\uc694.\n          </div>\n\n          <div style=\"margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid #eee;\">\n            <div style=\"font-weight:600; color:#C9A84C; margin-bottom:6px;\">Q. \ucd9c\uace0 \ucc98\ub9ac\ub97c \ucde8\uc18c\ud558\uace0 \ub2e4\uc2dc \uccb4\ud06c\ud558\uba74 \uc774\ub824\uc774 \uc911\ubcf5\ub418\ub098\uc694?</div>\n            \uc544\ub2c8\uc694. \uac19\uc740 AS \uac74\uc758 \"\ucd9c\uace0 \uc644\ub8cc\" \uc774\ub824\uc740 \uc0c8\ub85c \uc313\uc774\uc9c0 \uc54a\uace0 \uadf8 \uc790\ub9ac\uc5d0\uc11c \uac31\uc2e0(upsert)\ub429\ub2c8\ub2e4. \ud56d\ubaa9/\uc218\ub9ac\ucc98\ub97c \ub098\uc911\uc5d0 \ubc14\uafd4\ub3c4 \uc548\uc804\ud569\ub2c8\ub2e4.\n          </div>\n\n          <div style=\"margin-bottom:0;\">\n            <div style=\"font-weight:600; color:#C9A84C; margin-bottom:6px;\">Q. \ud68c\uc6d0 \ub4f1\uae09/\ub9c8\uc77c\ub9ac\uc9c0\ub294 \uc5b8\uc81c \ubc14\ub00c\ub098\uc694?</div>\n            \"\uba64\ubc84 \uad00\ub9ac\"\uc5d0\uc11c \uacb0\uc81c\ub97c \uc218\ub3d9 \uae30\ub85d(adminRecordPayment)\ud558\uba74 <b>\uc989\uc2dc</b> \ub204\uc801\uc2e4\uc801\uc774 \uac31\uc2e0\ub418\uace0, \uadf8 \uae30\uc900\uc73c\ub85c \ub4f1\uae09(\uc2e4\ubc84/\uace8\ub4dc/\ud50c\ub798\ud2f0\ub118)\uc774 \uc989\uc2dc \uc7ac\uc0b0\uc815\ub418\uba70, \uadf8 \ub4f1\uae09 \uc801\ub9bd\ub960\ub9cc\ud07c \ub9c8\uc77c\ub9ac\uc9c0\uac00 \ubc14\ub85c \uc801\ub9bd\ub429\ub2c8\ub2e4.\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-members\">\n      <div class=\"panel\">\n        <h3>\uba64\ubc84 \uad00\ub9ac</h3>\n        <input type=\"text\" class=\"all-asset-search\" id=\"memberSearch\" placeholder=\"\uc774\ub984, \uc774\uba54\uc77c, \uc5f0\ub77d\ucc98\ub85c \uac80\uc0c9\" oninput=\"renderMembers()\" />\n        <div id=\"membersList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-store\">\n      <div class=\"panel\">\n        <h3>\uc0c1\ud488 \uad00\ub9ac</h3>\n        <button class=\"btn-main\" style=\"margin-top:0; margin-bottom:16px;\" onclick=\"toggleProductForm()\">+ \uc0c8 \uc0c1\ud488 \ub4f1\ub85d</button>\n        <div id=\"productFormArea\"></div>\n        <div id=\"productsList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n      <div class=\"panel\">\n        <h3>\uc8fc\ubb38 \uad00\ub9ac (\uc804\uccb4 \u2014 \uacb0\uc81c\ud655\uc778~\ubc30\uc1a1 \ud1b5\ud569)</h3>\n        <div id=\"activeOrdersList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-quotes\">\n      <div class=\"panel\">\n        <h3>\ud30c\ud2b8\ub108 \uacac\uc801 \ud655\uc815 \/ \ub204\uc801 \uc870\ud68c</h3>\n        <div id=\"quotesList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-cancel\">\n      <div class=\"panel\">\n        <h3>\uc8fc\ubb38 \ucde8\uc18c \uc694\uccad \uad00\ub9ac</h3>\n        <div id=\"cancelRequestsList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n    </div>\n\n    <div class=\"tab-content\" id=\"tab-faq\">\n      <div class=\"panel\">\n        <h3>FAQ \uad00\ub9ac</h3>\n        <button class=\"btn-main\" style=\"margin-top:0; margin-bottom:16px;\" onclick=\"toggleFaqForm()\">+ \uc0c8 FAQ \ub4f1\ub85d</button>\n        <div id=\"faqFormArea\"></div>\n        <div id=\"faqList\"><div class=\"empty-msg\">\ubd88\ub7ec\uc624\ub294 \uc911...</div></div>\n      </div>\n    </div>\n  </div>";


  const API_URL = "https://script.google.com/macros/s/AKfycbyk1khfq0I8XNYDgvPcIa0aTzYayAM7HekoRapfCZc7CEqfDR2Eh3AxUi8ceqemk4aK3A/exec";
  var ADMIN_KEY_STORAGE = "aldosa_admin_key_session";
  var adminKey = "";
  var allAssetsCache = [];
  var asListCache = [];
  var storesCache = [];
  var shopsCache = [];
  var asItemsCache = {};
  var openItemsRequestId = null;
  var selectedVendor = {};
  var notesCache = {};
  var openNotesRequestId = null;

  var STAGE_DEFS = [
    { key: "received", label: "입고" },
    { key: "quoted", label: "견적" },
    { key: "notified", label: "안내" },
    { key: "paid", label: "입금" },
    { key: "repaired", label: "수리" },
    { key: "shipped", label: "출고" }
  ];

  var WORK_TYPE_OPTIONS = ["오버홀","배터리 교체","폴리싱","부품 교체","크리스탈 교체","가스켓/씰 교체","다이얼 교체","무브먼트 수리","케이스/브레이슬릿 광택","기타(직접입력)"];

  function todayDateStr() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
  }

  function checkAdminKey() {
    var key = document.getElementById("adminKeyInput").value.trim();
    if (!key) return;
    adminKey = key;
    fetch(API_URL + "?action=adminGetPending&admin_key=" + encodeURIComponent(key))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) {
          sessionStorage.setItem(ADMIN_KEY_STORAGE, key);
          document.getElementById("lockScreen").style.display = "none";
          document.getElementById("adminMain").style.display = "block";
          document.getElementById("as_received_date").value = todayDateStr();
          loadPending();
          loadStores();
          loadShops();
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

  function switchTab(name) {
    document.querySelectorAll(".tab").forEach(function(t) { t.classList.remove("active"); });
    document.querySelectorAll(".tab-content").forEach(function(c) { c.classList.remove("active"); });
    document.querySelector('.tab[data-tab="' + name + '"]').classList.add("active");
    document.getElementById("tab-" + name).classList.add("active");
    if (name === "pending") loadPending();
    if (name === "codes") loadCodes();
    if (name === "all") loadAllAssets();
    if (name === "as-manage") loadASManage();
    if (name === "store") { loadProductsAdmin(); loadActiveOrders(); }
    if (name === "quotes") loadQuotesAdmin();
    if (name === "cancel") loadCancelRequests();
    if (name === "faq") loadFaqAdmin();
    if (name === "members") loadMembers();
  }

  function formatPhoneAdmin(input) {
    var value = input.value.replace(/[^0-9]/g, "");
    if (value.length < 4) { input.value = value; }
    else if (value.length < 8) { input.value = value.slice(0,3) + "-" + value.slice(3); }
    else { input.value = value.slice(0,3) + "-" + value.slice(3,7) + "-" + value.slice(7,11); }
  }

  function formatDate(iso) {
    if (!iso) return "-";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.getFullYear() + "." + String(d.getMonth()+1).padStart(2,"0") + "." + String(d.getDate()).padStart(2,"0");
  }

  function formatDateShort(iso) {
    if (!iso) return "";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    return String(d.getMonth()+1).padStart(2,"0") + "." + String(d.getDate()).padStart(2,"0");
  }

  function formatDateTime(iso) {
    if (!iso) return "-";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleString("ko-KR", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
  }

  // ── 점포/담당자/협력업체 드롭다운 ────────────────────
  function loadStores() {
    fetch(API_URL + "?action=getStores")
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (!data.success) return;
        storesCache = data.stores;
        var sel = document.getElementById("as_store");
        var html = '<option value="">점포 선택</option>';
        data.stores.forEach(function(s) {
          html += '<option value="' + s.store_id + '" data-name="' + s.store_name + '">' + s.store_name + (s.region ? ' (' + s.region + ')' : '') + '</option>';
        });
        sel.innerHTML = html;
      });
  }

  function loadShops() {
    fetch(API_URL + "?action=getShops")
      .then(function(r) { return r.json(); })
      .then(function(data) { if (data.success) shopsCache = data.shops; });
  }

  function loadStaffForStore() {
    var sel = document.getElementById("as_store");
    var storeId = sel.value;
    var staffSel = document.getElementById("as_staff");
    if (!storeId) {
      staffSel.innerHTML = '<option value="">점포를 먼저 선택하세요</option>';
      return;
    }
    staffSel.innerHTML = '<option value="">불러오는 중...</option>';
    fetch(API_URL + "?action=getStoreStaff&store_id=" + encodeURIComponent(storeId))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (!data.success || data.staff.length === 0) {
          staffSel.innerHTML = '<option value="">담당자 없음</option>';
          return;
        }
        var html = '<option value="">담당자 선택 (선택사항)</option>';
        data.staff.forEach(function(s) {
          html += '<option value="' + s.staff_name + '|' + s.staff_phone + '">' + s.staff_name + ' (' + s.staff_phone + ')</option>';
        });
        staffSel.innerHTML = html;
      });
  }

  // ── 자산 승인 ──────────────────────────────────────
  function loadPending() {
    fetch(API_URL + "?action=adminGetPending&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var el = document.getElementById("pendingList");
        if (!data.success || data.pending.length === 0) {
          el.innerHTML = '<div class="empty-msg">승인 대기중인 자산이 없습니다.</div>';
          return;
        }
        var html = "";
        data.pending.forEach(function(p) {
          var img = p.watch_image_url || p.warranty_image_url;
          var needsModel = !p.model;
          html += '<div class="asset-row">';
          html += img ? '<img src="' + img + '" onclick="window.open(\'' + img + '\')" />' : '<div class="no-img">사진없음</div>';
          html += '<div class="asset-info"><div class="brand">' + p.brand + '</div>';
          html += needsModel
            ? '<div style="margin-top:4px;"><input type="text" id="modelInput_' + p.asset_id + '" placeholder="모델명 입력 (확인 후)" style="width:100%;padding:7px 8px;font-size:12px;border:1px solid #E11D48;border-radius:1px;" /><div style="font-size:10px;color:#E11D48;margin-top:3px;">모델명 미확인 — 사진 확인 후 입력해주세요</div></div>'
            : '<div class="model">' + p.model + '</div>';
          html += '<div class="meta">Ref. ' + (p.reference||'-') + '</div></div>';
          html += '<div class="asset-info"><div class="meta">S/N: ' + p.serial + '<br>구입처: ' + (p.purchase_place||'-') + '<br>등록: ' + formatDate(p.registered_at) + '</div></div>';
          html += '<div class="asset-actions">';
          html += '<button class="btn-sm btn-approve" onclick="approveAsset(\'' + p.asset_id + '\')">승인</button>';
          html += '<button class="btn-sm" style="background:#fff;border:1px solid #F0C040;color:#8B6914;" onclick="requestMoreInfo(\'' + p.asset_id + '\')">보완요청</button>';
          html += '<button class="btn-sm btn-reject" onclick="rejectAsset(\'' + p.asset_id + '\')">거절</button>';
          html += '</div></div>';
        });
        el.innerHTML = html;
      });
  }

  function approveAsset(assetId) {
    var modelInput = document.getElementById("modelInput_" + assetId);
    var model = modelInput ? modelInput.value.trim() : "";
    if (modelInput && !model) { alert("모델명을 입력해주세요. (확인이 어려우면 빈 칸으로 둔 채 보류하셔도 됩니다)"); return; }
    var url = API_URL + "?action=adminApprove&admin_key=" + encodeURIComponent(adminKey) + "&watch_id=" + assetId + "&admin_name=ALDOSA";
    if (model) url += "&model=" + encodeURIComponent(model);
    fetch(url)
      .then(function(r) { return r.json(); })
      .then(function() { loadPending(); });
  }

  function rejectAsset(assetId) {
    var reason = prompt("거절 사유를 입력하세요:");
    if (reason === null) return;
    fetch(API_URL + "?action=adminReject&admin_key=" + encodeURIComponent(adminKey) + "&watch_id=" + assetId + "&reason=" + encodeURIComponent(reason))
      .then(function(r) { return r.json(); })
      .then(function() { loadPending(); });
  }

  function requestMoreInfo(assetId) {
    var reason = prompt("보완이 필요한 사유를 입력하세요 (고객에게 그대로 표시됩니다):");
    if (reason === null) return;
    if (!reason.trim()) { alert("사유를 입력해주세요."); return; }
    fetch(API_URL + "?action=adminRequestMoreInfo&admin_key=" + encodeURIComponent(adminKey) + "&watch_id=" + assetId + "&reason=" + encodeURIComponent(reason) + "&admin_name=ALDOSA")
      .then(function(r) { return r.json(); })
      .then(function() { loadPending(); });
  }

  // ── AS 신규 접수 ────────────────────────────────────
  function showASNewMsg(text, type) {
    var el = document.getElementById("asNewMsg");
    el.textContent = text; el.className = "msg-box " + type; el.style.display = "block";
  }

  var asSubmitting = false;

  function handleCreateAS() {
    if (asSubmitting) return;

    var serial = document.getElementById("as_serial").value.trim();
    var serialPending = document.getElementById("as_serial_pending").checked;
    var brandSelect = document.getElementById("as_brand").value;
    var brand, brandType;
    if (brandSelect === "기타") {
      brand = document.getElementById("as_brand_custom").value.trim();
      brandType = "기타";
    } else {
      brand = brandSelect;
      brandType = "공인";
    }
    var model = document.getElementById("as_model").value.trim();
    var intakePhone = document.getElementById("as_intake_phone").value.trim();

    document.getElementById("asNewMsg").style.display = "none";
    document.getElementById("asNewCodeResult").innerHTML = "";

    if (!brand) {
      showASNewMsg(brandSelect === "기타" ? "브랜드명을 입력해주세요." : "브랜드는 필수입니다.", "error");
      return;
    }
    if (!serial && !serialPending) {
      showASNewMsg("시리얼을 입력하거나 '추후 기재'를 체크해주세요.", "error");
      return;
    }
    if (!intakePhone) {
      showASNewMsg("의뢰인 연락처는 필수입니다.", "error");
      return;
    }

    var storeSel = document.getElementById("as_store");
    var storeName = storeSel.selectedOptions[0] ? storeSel.selectedOptions[0].getAttribute("data-name") || "" : "";

    var staffVal = document.getElementById("as_staff").value;
    var staffName = "", staffPhone = "";
    if (staffVal) {
      var parts = staffVal.split("|");
      staffName = parts[0] || "";
      staffPhone = parts[1] || "";
    }

    var receivedDateVal = document.getElementById("as_received_date").value;
    var stageReceived = "";
    if (receivedDateVal) {
      stageReceived = new Date(receivedDateVal + "T00:00:00").toISOString();
    }

    var params = new URLSearchParams({
      action: "adminCreateASRequest",
      admin_key: adminKey,
      serial: serial, brand: brand, model: model, brand_type: brandType,
      symptom: document.getElementById("as_symptom").value.trim(),
      ofr_number: document.getElementById("as_ofr").value.trim(),
      store_name: storeName,
      purchase_date: document.getElementById("as_purchase_date").value,
      intake_name: document.getElementById("as_intake_name").value.trim(),
      intake_phone: intakePhone,
      quote_amount: document.getElementById("as_quote").value || "",
      shipping_method: document.getElementById("as_shipping").value.trim(),
      staff_name: staffName,
      staff_phone: staffPhone,
      stage_received: stageReceived
    });

    asSubmitting = true;
    var submitBtn = document.querySelector('#tab-as-new .btn-main');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "등록 중..."; }

    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) {
          showASNewMsg("AS 접수가 등록되었습니다. (접수번호: " + data.request_id + ")", "success");
          var codeBox = document.getElementById("asNewCodeResult");
          if (data.claim_code) {
            var serialNote = serialPending ? '<div style="font-size:11px; color:#8B6914; margin-top:6px;">시리얼이 아직 확인되지 않은 건입니다. 시리얼을 알게 되시면 "AS 진행 관리"에서 보완해주세요.</div>' : '';
            codeBox.innerHTML = '<div class="panel" style="margin-top:12px; background:#FFF8E7; border-color:#F0C040;"><h3 style="color:#8B6914;">발급된 클레임 코드</h3><div style="font-size:20px; letter-spacing:0.1em; font-weight:600;">' + data.claim_code + '</div><div style="font-size:11px; color:#8B6914; margin-top:6px;">이 코드를 의뢰인에게 전달하세요. 의뢰인이 회원가입 후 마이페이지에서 입력하면 이 접수건과 연결됩니다.</div>' + serialNote + '</div>';
          } else {
            codeBox.innerHTML = "";
          }
          ["as_ofr","as_intake_name","as_intake_phone","as_model","as_serial","as_purchase_date","as_symptom","as_quote","as_shipping"].forEach(function(id){ document.getElementById(id).value=""; });
          document.getElementById("as_brand").value = "";
          document.getElementById("as_brand_custom").value = "";
          document.getElementById("as_brand_custom_wrap").style.display = "none";
          document.getElementById("as_store").value = "";
          document.getElementById("as_staff").innerHTML = '<option value="">점포를 먼저 선택하세요</option>';
          document.getElementById("as_received_date").value = todayDateStr();
          ["as_model","as_serial"].forEach(function(id){ document.getElementById(id).disabled = false; });
          document.getElementById("as_model_pending").checked = false;
          document.getElementById("as_serial_pending").checked = false;
        } else {
          showASNewMsg(data.message, "error");
        }
      })
      .catch(function() { showASNewMsg("오류가 발생했습니다.", "error"); })
      .finally(function() {
        asSubmitting = false;
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "AS 접수 등록"; }
      });
  }

  // ── AS 진행 관리 ────────────────────────────────────
  function loadASManage() {
    fetch(API_URL + "?action=adminGetAllAS&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) { asListCache = data.requests; renderASManage(); }
      });
  }

  function renderASManage() {
    var el = document.getElementById("asManageList");
    if (asListCache.length === 0) {
      el.innerHTML = '<div class="empty-msg">등록된 AS 건이 없습니다.</div>';
      return;
    }
    var html = '<table class="code-table"><tr><th>접수번호</th><th>점포/담당자</th><th>브랜드/모델</th><th>S/N</th><th>의뢰인</th><th>진행단계</th><th>수리항목</th><th>메모</th><th>견적/청구</th><th>접수일</th></tr>';
    asListCache.slice().reverse().forEach(function(r) {
      html += '<tr>';
      html += '<td style="font-size:10px; color:#888;">' + r.request_id + '</td>';
      html += '<td>' + (r.store_name || '-') + '<br><span style="color:#aaa;">' + (r.staff_name||'') + '</span>' + (r.ofr_number ? '<br><span style="color:#bbb; font-size:10px;">OFR ' + r.ofr_number + '</span>' : '') + '</td>';
      html += '<td>' + r.brand + (r.brand_type === "기타" ? ' <span style="font-size:9px; background:#F9FAFB; border:1px solid #E5E7EB; color:#9CA3AF; padding:1px 5px; border-radius:2px;">기타</span>' : '') + ' ' + (r.model||'') + '</td>';
      var serialStr = String(r.serial || "").trim();
      var needsSerial = !serialStr || ["미기재","미상","없음","모름","확인불가","미확인"].indexOf(serialStr) !== -1;
      html += '<td>' + (!needsSerial ? serialStr : '<button class="btn-sm" style="background:#fff;border:1px solid #E11D48;color:#E11D48;padding:5px 8px;font-size:10px;" onclick="toggleSerialFillPanel(\'' + r.request_id + '\')">시리얼 보완</button>') + '</td>';
      html += '<td>' + (r.intake_name||'-') + '<br><span style="color:#aaa;">' + (r.intake_phone||'') + '</span>' +
        (r.symptom ? '<br><span style="color:#888; font-size:11px; cursor:help;" title="' + r.symptom.replace(/"/g,'&quot;') + '">📝 ' + r.symptom.slice(0,18) + (r.symptom.length>18?'...':'') + '</span>' : '') +
        (r.symptom_image_url ? ' <a href="' + r.symptom_image_url + '" target="_blank" style="font-size:11px;">📷</a>' : '') + '</td>';
      html += '<td>' + renderStageTrack(r) + '</td>';
      html += '<td><button class="btn-sm btn-items-toggle" onclick="toggleItemsPanel(\'' + r.request_id + '\')">항목보기</button></td>';
      html += '<td><button class="btn-sm" style="background:#fff;border:1px solid #C9A84C;color:#C9A84C;" onclick="toggleNotesPanel(\'' + r.request_id + '\')">메모</button></td>';
      html += '<td>' + renderBillingCell(r) + '</td>';
      html += '<td>' + formatDate(r.requested_at) + '</td>';
      html += '</tr>';
      html += '<tr id="itemsRow_' + r.request_id + '" style="display:none;"><td colspan="10"><div id="itemsPanel_' + r.request_id + '"></div></td></tr>';
      html += '<tr id="notesRow_' + r.request_id + '" style="display:none;"><td colspan="10"><div id="notesPanel_' + r.request_id + '"></div></td></tr>';
      html += '<tr id="serialFillRow_' + r.request_id + '" style="display:none;"><td colspan="10"><div id="serialFillPanel_' + r.request_id + '"></div></td></tr>';
    });
    html += '</table>';
    el.innerHTML = html;

    if (openItemsRequestId) {
      var openRow = document.getElementById("itemsRow_" + openItemsRequestId);
      if (openRow) {
        openRow.style.display = "";
        loadASItems(openItemsRequestId);
      }
    }
    if (openNotesRequestId) {
      var openNotesRow = document.getElementById("notesRow_" + openNotesRequestId);
      if (openNotesRow) {
        openNotesRow.style.display = "";
        loadNotes(openNotesRequestId);
      }
    }
  }

  function renderStageTrack(r) {
    var dots = '<div class="stage-track">';
    var labels = '<div class="stage-labels">';
    STAGE_DEFS.forEach(function(s) {
      var fieldKey = "stage_" + s.key;
      var done = !!r[fieldKey];
      dots += '<div class="stage-dot' + (done ? ' done' : '') + '" title="' + s.label + (done ? ' (' + formatDate(r[fieldKey]) + ')' : '') + '" onclick="toggleStage(\'' + r.request_id + '\',\'' + s.key + '\',' + done + ')">' + (done ? '✓' : '') + '</div>';
      labels += '<span style="' + (done ? 'color:#C9A84C; font-weight:600;' : '') + '">' + (done ? formatDateShort(r[fieldKey]) : s.label) + '</span>';
    });
    dots += '</div>';
    labels += '</div>';
    return dots + labels + '<button type="button" class="stage-edit-link" style="margin-top:6px; display:block;" onclick="openStageModal(\'' + r.request_id + '\')">날짜 확인/수정</button>';
  }

  function buildStageListHtml(r) {
    var html = '<div class="stage-list">';
    STAGE_DEFS.forEach(function(s) {
      var fieldKey = "stage_" + s.key;
      var done = !!r[fieldKey];
      var rowKey = r.request_id + '_' + s.key;
      html += '<div class="stage-row">';
      html += '<div class="stage-row-check' + (done ? ' done' : '') + '" onclick="toggleStage(\'' + r.request_id + '\',\'' + s.key + '\',' + done + ');">';
      html += '<span class="stage-dot-v' + (done ? ' done' : '') + '">' + (done ? '✓' : '') + '</span>' + s.label;
      html += '</div>';
      html += '<div class="stage-row-date" id="stageDate_' + rowKey + '">';
      if (done) {
        html += formatDate(r[fieldKey]) + ' <button type="button" class="stage-edit-link" onclick="startEditStageDate(\'' + r.request_id + '\',\'' + s.key + '\',\'' + r[fieldKey] + '\')">수정</button>';
      } else {
        html += '-';
      }
      html += '</div></div>';
    });
    html += '</div>';
    return html;
  }

  function openStageModal(requestId) {
    var r = asListCache.filter(function(x) { return x.request_id === requestId; })[0];
    if (!r) return;
    var html = '<div style="background:#fff;border-radius:4px;max-width:340px;width:90%;padding:24px;">';
    html += '<h3 style="font-size:13px;letter-spacing:0.1em;color:#C9A84C;margin-bottom:14px;">진행 단계 날짜</h3>';
    html += buildStageListHtml(r);
    html += '<button type="button" class="btn-main" style="margin-top:16px;" onclick="closeStageModal()">닫기</button>';
    html += '</div>';
    var overlay = document.createElement('div');
    overlay.id = 'stageModalOverlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:999;';
    overlay.innerHTML = html;
    overlay.onclick = function(e) { if (e.target === overlay) closeStageModal(); };
    document.body.appendChild(overlay);
  }

  function closeStageModal() {
    var overlay = document.getElementById('stageModalOverlay');
    if (overlay) overlay.remove();
  }

  function startEditStageDate(requestId, stageKey, currentIso) {
    var d = currentIso ? new Date(currentIso) : new Date();
    var dateStr = d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
    var rowKey = requestId + '_' + stageKey;
    var el = document.getElementById("stageDate_" + rowKey);
    el.innerHTML = '<input type="date" id="stageDateInput_' + rowKey + '" value="' + dateStr + '" />' +
      '<button type="button" class="stage-edit-link" onclick="saveStageDate(\'' + requestId + '\',\'' + stageKey + '\')">저장</button>' +
      '<button type="button" class="stage-edit-link" onclick="openStageModal(\'' + requestId + '\')">취소</button>';
  }

  function refreshASManageAndModal(requestId) {
    fetch(API_URL + "?action=adminGetAllAS&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) {
          asListCache = data.requests;
          renderASManage();
          if (document.getElementById('stageModalOverlay')) {
            closeStageModal();
            openStageModal(requestId);
          }
        }
      });
  }

  function saveStageDate(requestId, stageKey) {
    var rowKey = requestId + '_' + stageKey;
    var input = document.getElementById("stageDateInput_" + rowKey);
    var val = input.value;
    if (!val) return;
    var customDate = new Date(val + "T00:00:00").toISOString();
    var params = new URLSearchParams({ action: "adminUpdateASStage", admin_key: adminKey, request_id: requestId, stage: stageKey, clear: "false", custom_date: customDate, admin_name: "ALDOSA" });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() { refreshASManageAndModal(requestId); });
  }

  function toggleStage(requestId, stageKey, currentlyDone) {
    if (currentlyDone) {
      var stageLabel = STAGE_DEFS.find(function(s) { return s.key === stageKey; }).label;
      if (!confirm('"' + stageLabel + '" 단계 완료 표시를 취소하시겠습니까?\n(고객 이력에는 영향 없으나, 진행 단계 표시가 되돌아갑니다)')) {
        return;
      }
    }
    var extraParams = { action: "adminUpdateASStage", admin_key: adminKey, request_id: requestId, stage: stageKey, clear: currentlyDone ? "true" : "false", admin_name: "ALDOSA" };
    if (stageKey === "shipped" && !currentlyDone) {
      var vendorSel = document.getElementById("repairVendor_" + requestId);
      if (vendorSel && vendorSel.value) extraParams.repair_vendor = vendorSel.value;
      var shipMethodSel = document.getElementById("shippingMethod_" + requestId);
      var trackingInput = document.getElementById("trackingInfo_" + requestId);
      if (shipMethodSel && shipMethodSel.value) extraParams.shipping_method = shipMethodSel.value;
      if (trackingInput && trackingInput.value.trim()) extraParams.tracking_info = trackingInput.value.trim();
    }
    var params = new URLSearchParams(extraParams);
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() { refreshASManageAndModal(requestId); });
  }

  function renderBillingCell(r) {
    return '<div class="billing-edit">' +
      '<input type="number" id="quote_' + r.request_id + '" value="' + (r.quote_amount||'') + '" placeholder="견적" />' +
      '<input type="number" id="charge_' + r.request_id + '" value="' + (r.charge_amount||'') + '" placeholder="청구" />' +
      '<button onclick="saveBilling(\'' + r.request_id + '\')">저장</button>' +
      '</div>';
  }

  function saveBilling(requestId) {
    var quote = document.getElementById("quote_" + requestId).value;
    var charge = document.getElementById("charge_" + requestId).value;
    var params = new URLSearchParams({
      action: "adminUpdateASBilling",
      admin_key: adminKey,
      request_id: requestId,
      quote_amount: quote,
      charge_amount: charge
    });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() { loadASManage(); });
  }

  // ── 수리 항목별 단가 + 수리처 선택 ───────────────────
  function toggleItemsPanel(requestId) {
    var row = document.getElementById("itemsRow_" + requestId);
    if (row.style.display === "none") {
      openItemsRequestId = requestId;
      row.style.display = "";
      loadASItems(requestId);
    } else {
      openItemsRequestId = null;
      row.style.display = "none";
    }
  }

  function loadASItems(requestId) {
    var params = new URLSearchParams({ action: "adminGetASItems", admin_key: adminKey, request_id: requestId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        asItemsCache[requestId] = data.success ? data.items : [];
        renderItemsPanel(requestId);
      });
  }

  function renderItemsPanel(requestId) {
    var items = asItemsCache[requestId] || [];
    var total = items.reduce(function(sum, it) { return sum + (parseInt(it.cost) || 0); }, 0);

    var arInfo = asListCache.find(function(x) { return x.request_id === requestId; }) || {};

    var html = '<div class="items-panel">';

    html += '<div class="vendor-select-box">';
    html += '<label>수리처 (출고 처리 시 이력에 반영됩니다)</label>';
    html += '<select id="repairVendor_' + requestId + '" onchange="selectedVendor[\'' + requestId + '\']=this.value;">';
    html += '<option value="">선택 안함 (기본값 사용)</option>';
    shopsCache.forEach(function(s) {
      var sel = (selectedVendor[requestId] === s.shop_name) ? ' selected' : '';
      html += '<option value="' + s.shop_name + '"' + sel + '>' + s.shop_name + '</option>';
    });
    html += '</select>';
    html += '</div>';

    html += '<div class="vendor-select-box">';
    html += '<label>운송 정보 (출고 처리 시 같이 기록됩니다 · 고객에게는 노출되지 않습니다)</label>';
    html += '<div class="field-row" style="margin-bottom:0;">';
    html += '<select id="shippingMethod_' + requestId + '">';
    ["", "우체국 택배", "발렉스(세방) 고가운송", "기타(직접입력)"].forEach(function(m) {
      var sel = (arInfo.shipping_method === m) ? ' selected' : '';
      html += '<option value="' + m + '"' + sel + '>' + (m || "운송업체 선택") + '</option>';
    });
    html += '</select>';
    html += '<input type="text" id="trackingInfo_' + requestId + '" placeholder="운송장번호" value="' + (arInfo.tracking_info||'') + '" />';
    html += '</div></div>';

    html += '<table class="items-table">';
    html += '<tr><th>항목</th><th>비고</th><th style="text-align:right;">비용</th><th></th></tr>';
    if (items.length === 0) {
      html += '<tr><td colspan="4" style="text-align:center; color:#bbb; padding:10px;">등록된 항목이 없습니다.</td></tr>';
    } else {
      items.forEach(function(it) {
        html += '<tr>';
        html += '<td>' + it.item_name + '</td>';
        html += '<td style="color:#999;">' + (it.note || '-') + '</td>';
        html += '<td style="text-align:right;">' + (parseInt(it.cost)||0).toLocaleString("ko-KR") + '원</td>';
        html += '<td><button class="item-del-btn" onclick="deleteASItem(\'' + it.item_id + '\',\'' + requestId + '\')">삭제</button></td>';
        html += '</tr>';
      });
    }
var previewVat = Math.round(total * 0.1);
    var previewCharge = total + previewVat;
    html += '<tr class="total-row"><td colspan="2">항목 합계 (수수료 포함, 부가세 별도)</td><td style="text-align:right;">' + total.toLocaleString("ko-KR") + '원</td><td></td></tr>';
    html += '</table>';
    html += '<div style="background:#FFFBF0; border:1px solid #F0C040; border-radius:2px; padding:10px 12px; font-size:11px; color:#8B6914; margin-bottom:12px; line-height:1.7;">';
    html += '위 합계에 부가세 10%를 더하면 최종 청구금액 ' + previewCharge.toLocaleString("ko-KR") + '원이 됩니다. 아래 버튼을 눌러야 견적/청구 칸에 자동 반영됩니다.';
    html += '</div>';

    html += '<div class="field-row3" style="margin-bottom:0;">';
    html += '<div class="field" style="margin-bottom:0;"><select id="itemType_' + requestId + '" onchange="handleItemTypeChange(\'' + requestId + '\')">';
    WORK_TYPE_OPTIONS.forEach(function(t) { html += '<option>' + t + '</option>'; });
    html += '</select></div>';
    html += '<div class="field" style="margin-bottom:0;"><input type="text" id="itemName_' + requestId + '" placeholder="항목명" value="' + WORK_TYPE_OPTIONS[0] + '" /></div>';
    html += '<div class="field" style="margin-bottom:0;"><input type="number" id="itemCost_' + requestId + '" placeholder="비용(원)" /></div>';
    html += '</div>';
    html += '<button class="btn-main" onclick="addASItem(\'' + requestId + '\')">항목 추가</button>';
    html += '<button class="btn-apply-total" onclick="applyItemsTotal(\'' + requestId + '\',' + total + ')">항목 합계에 부가세 반영하여 청구금액 산출 (' + previewCharge.toLocaleString("ko-KR") + '원)</button>';
    html += '</div>';
    document.getElementById("itemsPanel_" + requestId).innerHTML = html;
  }

  function handleItemTypeChange(requestId) {
    var typeSel = document.getElementById("itemType_" + requestId);
    var nameInput = document.getElementById("itemName_" + requestId);
    if (typeSel.value === "기타(직접입력)") {
      nameInput.value = "";
      nameInput.focus();
    } else {
      nameInput.value = typeSel.value;
    }
  }

  function addASItem(requestId) {
    var type = document.getElementById("itemType_" + requestId).value;
    var name = document.getElementById("itemName_" + requestId).value.trim();
    var cost = document.getElementById("itemCost_" + requestId).value;
    if (!name) { alert("항목명을 입력하세요."); return; }
    var params = new URLSearchParams({
      action: "adminAddASItem", admin_key: adminKey, request_id: requestId,
      item_type: type, item_name: name, cost: cost || 0
    });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() { loadASItems(requestId); });
  }

  function deleteASItem(itemId, requestId) {
    if (!confirm("이 항목을 삭제할까요?")) return;
    var params = new URLSearchParams({ action: "adminDeleteASItem", admin_key: adminKey, item_id: itemId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() { loadASItems(requestId); });
  }

function applyItemsTotal(requestId, total) {
    var vat = Math.round(total * 0.1);
    var charge = total + vat;
    var quoteInput = document.getElementById("quote_" + requestId);
    var chargeInput = document.getElementById("charge_" + requestId);
    if (quoteInput) quoteInput.value = total;
    if (chargeInput) chargeInput.value = charge;
    saveBilling(requestId);
  }

  // ── 시리얼 보완 ──────────────────────────────────────
  var CLOUDINARY_CLOUD_NAME = "dztigbzcp";
  var CLOUDINARY_UPLOAD_PRESET = "aldosa_unsigned";
  var CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/" + CLOUDINARY_CLOUD_NAME + "/image/upload";
  var serialFillImageUrl = {};

  function toggleSerialFillPanel(requestId) {
    var row = document.getElementById("serialFillRow_" + requestId);
    if (row.style.display === "none") {
      row.style.display = "";
      document.getElementById("serialFillPanel_" + requestId).innerHTML =
        '<div class="items-panel">' +
        '<div class="field-row3" style="margin-bottom:8px;">' +
        '<div class="field" style="margin-bottom:0;"><input type="text" id="serialFillInput_' + requestId + '" placeholder="확인된 시리얼 입력" /></div>' +
        '<div class="field" style="margin-bottom:0;">' +
        '<div class="upload-area" id="serialUploadArea_' + requestId + '" style="border:1px dashed #ddd; border-radius:1px; padding:9px 10px; text-align:center; cursor:pointer; position:relative; font-size:12px; color:#888; background:#fff;">' +
        '<input type="file" id="serialFillFile_' + requestId + '" accept="image/*" style="position:absolute; inset:0; opacity:0; cursor:pointer;" onchange="handleSerialPhotoSelect(\'' + requestId + '\')" />' +
        '<span id="serialUploadLabel_' + requestId + '">📷 사진 선택 (선택, 권장)</span>' +
        '</div></div>' +
        '<div></div>' +
        '</div>' +
        '<button class="btn-main" id="serialFillBtn_' + requestId + '" onclick="confirmSerialFill(\'' + requestId + '\')">시리얼 확정 등록</button>' +
        '</div>';
    } else {
      row.style.display = "none";
    }
  }

  function handleSerialPhotoSelect(requestId) {
    var file = document.getElementById("serialFillFile_" + requestId).files[0];
    if (!file) return;
    var label = document.getElementById("serialUploadLabel_" + requestId);
    var area = document.getElementById("serialUploadArea_" + requestId);
    label.textContent = "업로드 중...";
    area.style.opacity = "0.6";

    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("tags", "serial_verify_" + requestId);

    fetch(CLOUDINARY_UPLOAD_URL, { method: "POST", body: formData })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        area.style.opacity = "1";
        if (data.secure_url) {
          serialFillImageUrl[requestId] = data.secure_url;
          label.textContent = "✓ 사진 첨부됨 (" + file.name + ")";
          area.style.borderColor = "#C9A84C";
          area.style.background = "#FFFDF5";
        } else {
          label.textContent = "업로드 실패, 다시 선택해주세요";
        }
      })
      .catch(function() {
        area.style.opacity = "1";
        label.textContent = "업로드 실패, 다시 선택해주세요";
      });
  }

  function confirmSerialFill(requestId) {
    var serial = document.getElementById("serialFillInput_" + requestId).value.trim();
    var imageUrl = serialFillImageUrl[requestId] || "";
    if (!serial) { alert("시리얼을 입력하세요."); return; }
    var params = new URLSearchParams({ action: "adminFillSerial", admin_key: adminKey, request_id: requestId, serial: serial, image_url: imageUrl, admin_name: "ALDOSA" });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) { delete serialFillImageUrl[requestId]; loadASManage(); } else { alert(data.message); }
      });
  }

  // ── CS 메모 ──────────────────────────────────────────
  var noteSubmitting = {};
  var editingNoteId = null;

  function toggleNotesPanel(requestId) {
    var row = document.getElementById("notesRow_" + requestId);
    if (row.style.display === "none") {
      openNotesRequestId = requestId;
      row.style.display = "";
      loadNotes(requestId);
    } else {
      openNotesRequestId = null;
      row.style.display = "none";
    }
  }

  function loadNotes(requestId) {
    var params = new URLSearchParams({ action: "adminGetNotes", admin_key: adminKey, request_id: requestId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        notesCache[requestId] = data.success ? data.notes : [];
        renderNotesPanel(requestId);
      });
  }

  function renderNotesPanel(requestId) {
    var notes = notesCache[requestId] || [];
    var html = '<div class="items-panel">';
    if (notes.length === 0) {
      html += '<div style="text-align:center; color:#bbb; padding:14px; font-size:12px;">아직 메모가 없습니다.</div>';
    } else {
      notes.slice().reverse().forEach(function(n) {
        html += '<div style="padding:10px 0; border-bottom:1px solid #eee;">';
        html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">';
        html += '<span style="font-size:10px; color:#aaa;">' + formatDateTime(n.created_at) + ' · ' + (n.admin_name || 'ALDOSA') + '</span>';
        if (editingNoteId !== n.note_id) {
          html += '<button type="button" class="item-del-btn" style="border-color:#C9A84C; color:#C9A84C;" onclick="startEditNote(\'' + requestId + '\',\'' + n.note_id + '\')">수정</button>';
        }
        html += '</div>';
        if (editingNoteId === n.note_id) {
          html += '<textarea id="editNoteInput_' + n.note_id + '" rows="2" style="width:100%; font-size:13px; padding:8px; border:1px solid #C9A84C; border-radius:1px; font-family:inherit; margin-bottom:6px;">' + n.note + '</textarea>';
          html += '<div style="display:flex; gap:6px;">';
          html += '<button type="button" class="btn-main" style="margin-top:0; flex:1;" onclick="saveEditNote(\'' + requestId + '\',\'' + n.note_id + '\')">저장</button>';
          html += '<button type="button" class="btn-sm" style="background:#fff; border:1px solid #ddd; color:#888; flex:1;" onclick="cancelEditNote(\'' + requestId + '\')">취소</button>';
          html += '</div>';
        } else {
          html += '<div style="font-size:13px; color:#1a1a1a; white-space:pre-wrap;">' + n.note + '</div>';
        }
        html += '</div>';
      });
    }
    html += '<div class="field" style="margin-top:14px; margin-bottom:8px;"><textarea id="noteInput_' + requestId + '" rows="2" placeholder="메모를 입력하세요 (고객에게는 보이지 않습니다)"></textarea></div>';
    html += '<button type="button" class="btn-main" id="addNoteBtn_' + requestId + '" onclick="addNote(\'' + requestId + '\')">메모 추가</button>';
    html += '</div>';
    document.getElementById("notesPanel_" + requestId).innerHTML = html;
  }

  function addNote(requestId) {
    if (noteSubmitting[requestId]) return;
    var textEl = document.getElementById("noteInput_" + requestId);
    var text = textEl.value.trim();
    if (!text) return;

    noteSubmitting[requestId] = true;
    var btn = document.getElementById("addNoteBtn_" + requestId);
    if (btn) { btn.disabled = true; btn.textContent = "추가 중..."; }

    var params = new URLSearchParams({ action: "adminAddNote", admin_key: adminKey, request_id: requestId, note: text, admin_name: "ALDOSA" });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() {
        noteSubmitting[requestId] = false;
        loadNotes(requestId);
      })
      .catch(function() {
        noteSubmitting[requestId] = false;
        if (btn) { btn.disabled = false; btn.textContent = "메모 추가"; }
      });
  }

  function startEditNote(requestId, noteId) {
    editingNoteId = noteId;
    renderNotesPanel(requestId);
  }

  function cancelEditNote(requestId) {
    editingNoteId = null;
    renderNotesPanel(requestId);
  }

  function saveEditNote(requestId, noteId) {
    var textEl = document.getElementById("editNoteInput_" + noteId);
    var text = textEl.value.trim();
    if (!text) return;
    var params = new URLSearchParams({ action: "adminUpdateNote", admin_key: adminKey, note_id: noteId, note: text });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() {
        editingNoteId = null;
        loadNotes(requestId);
      });
  }

  // ── 클레임 코드 ─────────────────────────────────────
  var codesCache = [];

  function loadCodes() {
    fetch(API_URL + "?action=adminGetCodes&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        codesCache = data.success ? data.codes : [];
        renderCodes();
      });
  }

function renderCodes() {
    var searchEl = document.getElementById("codeSearch");
    var keyword = searchEl ? searchEl.value.toLowerCase() : "";
    var filtered = codesCache.filter(function(c) {
      return !keyword || (c.code||"").toLowerCase().indexOf(keyword) !== -1 ||
        (c.intake_name||"").toLowerCase().indexOf(keyword) !== -1 || (c.intake_phone||"").indexOf(keyword) !== -1 ||
        (c.brand||"").toLowerCase().indexOf(keyword) !== -1 || (c.model||"").toLowerCase().indexOf(keyword) !== -1 ||
        (c.request_id||"").toLowerCase().indexOf(keyword) !== -1;
    });
    var el = document.getElementById("codesList");
    if (filtered.length === 0) {
      el.innerHTML = '<div class="empty-msg">검색 결과가 없습니다.</div>';
      return;
    }
    var html = '<table class="code-table"><tr><th>코드</th><th>의뢰인</th><th>브랜드/모델</th><th>시리얼</th><th>상태</th><th>접수일</th><th>사용일</th><th>관리</th></tr>';
    filtered.slice().reverse().forEach(function(c) {
      html += '<tr><td style="font-weight:600;">' + c.code + '<br><span style="color:#bbb; font-size:9px; font-weight:400;">' + (c.request_id||'') + '</span></td>';
      html += '<td>' + (c.intake_name||'-') + '<br><span style="color:#aaa;">' + (c.intake_phone||'') + '</span></td>';
      html += '<td>' + (c.brand||'-') + ' ' + (c.model||'') + '</td>';
      html += '<td>' + (c.serial||'-') + '</td>';
      html += '<td><span class="status-chip chip-' + c.status + '">' + c.status + '</span></td>';
      html += '<td>' + (c.requested_at ? formatDate(c.requested_at) : formatDate(c.created_at)) + '</td>';
      html += '<td>' + (c.claimed_at ? formatDate(c.claimed_at) : '-') + '</td>';
      html += '<td>' + (c.status === "미사용잠금" ? '<button class="btn-sm" style="background:#C9A84C;color:#fff;" onclick="reactivateCodeAdmin(\'' + c.code_id + '\')">재활성화</button>' : '-') + '</td>';
      html += '</tr>';
    });
    html += '</table>';
    el.innerHTML = html;
  }

  function reactivateCodeAdmin(codeId) {
    if (!confirm("이 코드를 재활성화할까요? (재활성화 시점부터 3일간 유효합니다)")) return;
    var params = new URLSearchParams({ action: "adminReactivateCode", admin_key: adminKey, code_id: codeId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (!data.success) { alert(data.message); return; }
        alert("코드가 재활성화되었습니다. (3일간 유효)");
        loadCodes();
      })
      .catch(function() { alert("오류가 발생했습니다."); });
  }

 // ── 전체 자산 ───────────────────────────────────────
  function loadAllAssets() {
    fetch(API_URL + "?action=adminGetAllAssets&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) { allAssetsCache = data.assets; renderAllAssets(); }
      });
  }

  function renderAllAssets() {
    var keyword = (document.getElementById("assetSearch").value || "").toLowerCase();
    var filtered = allAssetsCache.filter(function(a) {
      return !keyword || (a.serial||"").toLowerCase().indexOf(keyword) !== -1 ||
        (a.brand||"").toLowerCase().indexOf(keyword) !== -1 || (a.model||"").toLowerCase().indexOf(keyword) !== -1;
    });
    var el = document.getElementById("allAssetsList");
    if (filtered.length === 0) { el.innerHTML = '<div class="empty-msg">검색 결과가 없습니다.</div>'; return; }
    var html = '<table class="code-table"><tr><th>상태</th><th>브랜드/모델</th><th>S/N</th><th>회원연결</th><th>의뢰인</th><th>등록일</th></tr>';
    filtered.slice().reverse().forEach(function(a) {
      html += '<tr><td><span class="status-tag tag-' + a.status + '">' + a.status + '</span></td>';
      html += '<td>' + a.brand + ' ' + a.model + '</td><td>' + a.serial + '</td>';
      html += '<td>' + (a.is_claimed ? '연결됨' : '미연결') + '</td>';
      html += '<td>' + (a.intake_name || '-') + ' ' + (a.intake_phone || '') + '</td>';
      html += '<td>' + formatDate(a.registered_at) + '</td></tr>';
    });
    html += '</table>';
    el.innerHTML = html;
  }

  // ── 스토어 관리: 상품 ─────────────────────────────────
  var productsCache = [];
  var productImageUrl = "";
  var editingProductId = null;

  function loadProductsAdmin() {
    fetch(API_URL + "?action=adminGetProducts&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        productsCache = data.success ? data.products : [];
        renderProductsAdmin();
      });
  }

  function renderProductsAdmin() {
    var el = document.getElementById("productsList");
    if (productsCache.length === 0) { el.innerHTML = '<div class="empty-msg">등록된 상품이 없습니다.</div>'; return; }
    var html = '<table class="code-table"><tr><th>사진</th><th>이름</th><th>가격</th><th>설명</th><th>상태</th><th>관리</th></tr>';
    productsCache.forEach(function(p) {
      html += '<tr>';
      html += '<td>' + (p.image_url ? '<img src="' + p.image_url + '" style="width:50px;height:50px;object-fit:cover;border-radius:2px;" />' : '<span style="color:#bbb;font-size:11px;">없음</span>') + '</td>';
      html += '<td>' + p.name + '</td>';
      html += '<td>' + parseInt(p.price).toLocaleString("ko-KR") + '원</td>';
      html += '<td style="max-width:220px; color:#777; font-size:11px;">' + (p.description||'').slice(0,40) + '</td>';
      html += '<td><span class="status-tag ' + (p.active ? 'tag-승인' : 'tag-거절') + '">' + (p.active ? '노출중' : '숨김') + '</span></td>';
      html += '<td><button class="btn-sm" style="background:#1a1a1a;color:#fff;margin-right:4px;" onclick="editProduct(\'' + p.product_id + '\')">수정</button>';
      html += '<button class="btn-sm" style="background:#fff;border:1px solid #E11D48;color:#E11D48;" onclick="deleteProduct(\'' + p.product_id + '\')">삭제</button></td>';
      html += '</tr>';
    });
    html += '</table>';
    el.innerHTML = html;
  }

  function toggleProductForm() {
    var area = document.getElementById("productFormArea");
    if (area.innerHTML) { area.innerHTML = ""; editingProductId = null; return; }
    renderProductForm(null);
  }

  function editProduct(productId) {
    var p = productsCache.find(function(x) { return x.product_id === productId; });
    if (!p) return;
    renderProductForm(p);
  }

  function renderProductForm(p) {
    editingProductId = p ? p.product_id : null;
    productImageUrl = p ? p.image_url || "" : "";
    var area = document.getElementById("productFormArea");
    area.innerHTML =
      '<div class="items-panel" style="margin-bottom:16px;">' +
      '<div class="field-row" style="margin-bottom:10px;">' +
      '<div class="field" style="margin-bottom:0;"><input type="text" id="pf_name" placeholder="상품명" value="' + (p ? p.name.replace(/"/g,'&quot;') : '') + '" /></div>' +
      '<div class="field" style="margin-bottom:0;"><input type="number" id="pf_price" placeholder="가격(원)" value="' + (p ? p.price : '') + '" /></div>' +
      '</div>' +
      '<div class="field"><textarea id="pf_desc" rows="2" placeholder="상품 설명" style="width:100%;padding:10px;font-size:13px;border:1px solid #e0e0e0;border-radius:1px;font-family:inherit;">' + (p ? p.description : '') + '</textarea></div>' +
      '<div class="field">' +
      '<div class="upload-area" id="pfUploadArea" style="border:1px dashed #ddd; border-radius:1px; padding:10px; text-align:center; cursor:pointer; position:relative; font-size:12px; color:#888; background:#fff;">' +
      '<input type="file" id="pf_image_file" accept="image/*" style="position:absolute; inset:0; opacity:0; cursor:pointer;" onchange="handleProductImageSelect()" />' +
      '<span id="pfUploadLabel">' + (productImageUrl ? "✓ 사진 첨부됨" : "📷 사진 선택") + '</span>' +
      '</div></div>' +
      (p ? '<label style="display:flex; align-items:center; gap:6px; font-size:12px; color:#777; margin-bottom:10px;"><input type="checkbox" id="pf_active" ' + (p.active ? 'checked' : '') + ' /> 스토어에 노출</label>' : '') +
      '<button class="btn-main" style="margin-top:4px;" onclick="saveProduct()">' + (p ? '수정 저장' : '등록') + '</button>' +
      '</div>';
  }

  function handleProductImageSelect() {
    var file = document.getElementById("pf_image_file").files[0];
    if (!file) return;
    var label = document.getElementById("pfUploadLabel");
    var area = document.getElementById("pfUploadArea");
    label.textContent = "업로드 중...";
    area.style.opacity = "0.6";
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("tags", "product");
    fetch(CLOUDINARY_UPLOAD_URL, { method: "POST", body: formData })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        area.style.opacity = "1";
        if (data.secure_url) {
          productImageUrl = data.secure_url;
          label.textContent = "✓ 사진 첨부됨 (" + file.name + ")";
          area.style.borderColor = "#C9A84C";
        } else {
          label.textContent = "업로드 실패, 다시 선택해주세요";
        }
      })
      .catch(function() { area.style.opacity = "1"; label.textContent = "업로드 실패, 다시 선택해주세요"; });
  }

  function saveProduct() {
    var name = document.getElementById("pf_name").value.trim();
    var price = document.getElementById("pf_price").value;
    var desc = document.getElementById("pf_desc").value.trim();
    if (!name || !price) { alert("상품명과 가격을 입력하세요."); return; }
    var params = { action: "adminSaveProduct", admin_key: adminKey, name: name, price: price, description: desc, image_url: productImageUrl };
    if (editingProductId) {
      params.product_id = editingProductId;
      var activeEl = document.getElementById("pf_active");
      if (activeEl) params.active = activeEl.checked ? "TRUE" : "FALSE";
    }
    fetch(API_URL + "?" + new URLSearchParams(params).toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) {
          document.getElementById("productFormArea").innerHTML = "";
          editingProductId = null;
          loadProductsAdmin();
        } else { alert(data.message); }
      });
  }

  function deleteProduct(productId) {
    if (!confirm("이 상품을 삭제할까요?")) return;
    var params = new URLSearchParams({ action: "adminDeleteProduct", admin_key: adminKey, product_id: productId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function() { loadProductsAdmin(); });
  }

  // ── 스토어 관리: 주문 관리 (결제확인+배송관리 통합) ──────
  var COURIER_OPTIONS = ["우체국택배", "CJ대한통운", "한진택배", "로젠택배", "기타"];

  function loadActiveOrders() {
    fetch(API_URL + "?action=adminGetActiveOrders&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var el = document.getElementById("activeOrdersList");
        var orders = data.success ? data.orders : [];
        if (orders.length === 0) { el.innerHTML = '<div class="empty-msg">진행중인 주문이 없습니다.</div>'; return; }
        var html = '<table class="code-table"><tr><th>주문번호</th><th>회원</th><th>종류</th><th>내용</th><th>받는사람</th><th>배송지</th><th>결제금액</th><th>접수일</th><th>상태/처리</th></tr>';
        orders.slice().reverse().forEach(function(o) {
          html += '<tr><td style="font-size:10px;color:#888;">' + o.order_id + '</td>';
          html += '<td>' + (o.member_name||'-') + '</td>';
          html += '<td>' + o.order_type + '</td>';
          html += '<td style="max-width:150px;font-size:12px;">' + (o.items_summary || '-') + '</td>';
          html += '<td>' + (o.recipient_name||'-') + '<br><span style="color:#888;font-size:11px;">' + (o.recipient_phone||'') + '</span></td>';
          html += '<td style="max-width:150px;font-size:12px;color:#777;">' + (o.recipient_address||'-') + (o.shipping_memo ? '<br><span style="color:#aaa;">(' + o.shipping_memo + ')</span>' : '') + '</td>';
          html += '<td style="font-weight:600;">' + parseInt(o.final_amount).toLocaleString("ko-KR") + '원</td>';
          html += '<td>' + formatDate(o.created_at) + '</td>';

          if (o.status === "계좌안내됨" || o.status === "입금확인대기") {
            html += '<td><span class="status-tag tag-대기중" style="display:block; margin-bottom:6px;">' + (o.status === "계좌안내됨" ? "계좌안내(고객미확인)" : "입금확인대기") + '</span>';
            html += '<button class="btn-sm btn-approve" onclick="confirmOrderAdmin(\'' + o.order_id + '\')">결제 확정</button></td>';
          } else if (o.status === "결제완료" && o.order_type === "소모품") {
            html += '<td><span class="status-tag tag-승인" style="display:block; margin-bottom:6px;">결제완료 · 배송대기</span>';
            html += '<div class="field-row" style="margin-bottom:6px;"><select id="courier_' + o.order_id + '">';
            COURIER_OPTIONS.forEach(function(c) { html += '<option>' + c + '</option>'; });
            html += '</select><input type="text" id="tracking_' + o.order_id + '" placeholder="운송장번호" /></div>';
            html += '<button class="btn-sm btn-approve" onclick="shipOrderAdmin(\'' + o.order_id + '\')">배송 시작</button></td>';
          } else if (o.status === "배송중") {
            html += '<td><span class="status-tag tag-출고완료" style="display:block; margin-bottom:6px;">배송중</span>';
            html += '<span style="font-size:11px;color:#777; display:block; margin-bottom:6px;">' + o.ship_courier + ' / ' + o.ship_tracking_number + '</span>';
            html += '<button class="btn-sm btn-approve" onclick="completeDeliveryAdmin(\'' + o.order_id + '\')">배송완료 처리</button></td>';
          } else if (o.status === "배송완료") {
            html += '<td><span class="status-tag tag-출고완료">배송완료</span><br><span style="font-size:11px;color:#777;">' + (o.ship_courier||'') + ' / ' + (o.ship_tracking_number||'') + '</span></td>';
          } else if (o.status === "결제완료") {
            html += '<td><span class="status-tag tag-승인">결제완료</span></td>';
          } else if (o.status === "취소") {
            html += '<td><span class="status-tag tag-거절">취소됨</span></td>';
          } else {
            html += '<td><span class="status-tag">' + o.status + '</span></td>';
          }
          html += '</tr>';
        });
        html += '</table>';
        el.innerHTML = html;
      });
  }

  function confirmOrderAdmin(orderId) {
    if (!confirm("이 주문을 결제완료로 확정할까요? (마일리지 적립/등급갱신이 즉시 반영됩니다)")) return;
    var params = new URLSearchParams({ action: "adminConfirmOrder", admin_key: adminKey, order_id: orderId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) { if (!data.success) alert(data.message); loadActiveOrders(); });
  }

  function shipOrderAdmin(orderId) {
    var courier = document.getElementById("courier_" + orderId).value;
    var tracking = document.getElementById("tracking_" + orderId).value.trim();
    if (!tracking) { alert("운송장번호를 입력하세요."); return; }
    var params = new URLSearchParams({ action: "adminShipOrder", admin_key: adminKey, order_id: orderId, courier: courier, tracking_number: tracking });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) { if (!data.success) alert(data.message); loadActiveOrders(); });
  }

  function completeDeliveryAdmin(orderId) {
    if (!confirm("배송완료로 처리할까요?")) return;
    var params = new URLSearchParams({ action: "adminCompleteDelivery", admin_key: adminKey, order_id: orderId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) { if (!data.success) alert(data.message); loadActiveOrders(); });
  }

  // ── 주문 취소 요청 관리 ───────────────────────────────
  function loadCancelRequests() {
    fetch(API_URL + "?action=adminGetPendingCancelRequests&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var el = document.getElementById("cancelRequestsList");
        var list = data.success ? data.requests : [];
        if (list.length === 0) { el.innerHTML = '<div class="empty-msg">대기 중인 취소 요청이 없습니다.</div>'; return; }
        var html = '<table class="code-table"><tr><th>주문번호</th><th>회원</th><th>구분</th><th>금액</th><th>결제수단</th><th>취소사유</th><th>요청일시</th><th>처리</th></tr>';
        list.forEach(function(r) {
          var payTag = r.payment_method === "카드결제"
            ? '<span class="status-tag tag-승인">카드결제(자동취소)</span>'
            : '<span class="status-tag tag-대기중">' + (r.payment_method || '-') + '(수동환불필요)</span>';
          html += '<tr id="cancelRow_' + r.order_id + '">';
          html += '<td style="font-size:10px;color:#888;">' + r.order_id + '</td>';
          html += '<td>' + (r.member_name || r.member_id) + '</td>';
          html += '<td>' + r.order_type + '</td>';
          html += '<td style="font-weight:600;">' + parseInt(r.final_amount||0).toLocaleString("ko-KR") + '원</td>';
          html += '<td>' + payTag + '</td>';
          html += '<td style="max-width:200px; color:#777;">' + (r.cancel_reason || '-') + '</td>';
          html += '<td>' + formatDateTime(r.cancel_requested_at) + '</td>';
          html += '<td><button class="btn-sm btn-approve" onclick="approveCancelRequestAdmin(\'' + r.order_id + '\')">승인(취소처리)</button> ';
          html += '<button class="btn-sm btn-reject" onclick="rejectCancelRequestAdmin(\'' + r.order_id + '\')">반려</button></td>';
          html += '</tr>';
        });
        html += '</table>';
        el.innerHTML = html;
      });
  }

  function setCancelRowDisabled(orderId, disabled) {
    var row = document.getElementById("cancelRow_" + orderId);
    if (!row) return;
    row.querySelectorAll("button").forEach(function(b) { b.disabled = disabled; });
  }

  function approveCancelRequestAdmin(orderId) {
    if (!confirm("이 주문을 취소 승인 처리할까요?\n카드결제 건은 포트원을 통해 자동으로 결제취소되고, 마일리지/쿠폰도 자동 환급됩니다.")) return;
    setCancelRowDisabled(orderId, true);
    var params = new URLSearchParams({ action: "adminApproveOrderCancel", admin_key: adminKey, order_id: orderId });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        alert(data.message || (data.success ? "처리되었습니다." : "처리에 실패했습니다."));
        loadCancelRequests();
      })
      .catch(function() { alert("오류가 발생했습니다."); setCancelRowDisabled(orderId, false); });
  }

  function rejectCancelRequestAdmin(orderId) {
    var reason = prompt("반려 사유를 입력해주세요 (선택)", "");
    if (reason === null) return;
    setCancelRowDisabled(orderId, true);
    var params = new URLSearchParams({ action: "adminRejectOrderCancel", admin_key: adminKey, order_id: orderId, reason: reason });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        alert(data.message || (data.success ? "반려되었습니다." : "처리에 실패했습니다."));
        loadCancelRequests();
      })
      .catch(function() { alert("오류가 발생했습니다."); setCancelRowDisabled(orderId, false); });
  }

  // ── 멤버 관리 ─────────────────────────────────────────
  var membersCache = [];
  var openMemberPanelId = null;

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
      html += '<td>' + m.name + '<br><span style="color:#888;">' + (m.email||'') + '<br>' + (m.phone||'') + '</span></td>';
      html += '<td><span class="status-tag tag-' + m.tier + '">' + m.tier_name + '</span></td>';
      html += '<td>' + (parseInt(m.total_spend)||0).toLocaleString("ko-KR") + '원</td>';
      html += '<td>' + (parseInt(m.mileage_balance)||0).toLocaleString("ko-KR") + 'P</td>';
      html += '<td>' + m.coupon_count + '장</td>';
      html += '<td>' + m.asset_count + '대</td>';
      html += '<td><button class="btn-sm" style="background:#1a1a1a;color:#fff;" onclick="toggleMemberPanel(\'' + m.member_id + '\')">관리</button></td>';
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
        if (coupons.length === 0) { listEl.innerHTML = '<div style="font-size:12px;color:#888;padding:8px 0;">발급된 바우처가 없습니다.</div>'; return; }
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

  // ── 파트너 견적 관리 ─────────────────────────────────
  var quotesCache = [];

  function loadQuotesAdmin() {
    fetch(API_URL + "?action=adminGetAllQuotes&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        quotesCache = data.success ? data.list : [];
        renderQuotesAdmin();
      });
  }

  function escapeHtmlQ(s) {
    return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function renderQuotesAdmin() {
    var el = document.getElementById("quotesList");
    if (quotesCache.length === 0) { el.innerHTML = '<div class="empty-msg">파트너에게 배정된 견적 건이 없습니다.</div>'; return; }

    var html = "";
    quotesCache.slice().reverse().forEach(function(q, idx) {
      var items = (q.ai_result && q.ai_result.items) || [];
      var isPending = q.quote_status === "제출됨";

      html += '<div class="panel" style="margin-bottom:14px;">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">';
      html += '<div><b>' + q.brand + ' ' + q.model + '</b> <span style="color:#999;font-size:11px;">' + q.request_id + ' · 수리처: ' + (q.customer_display_name || '-') + ' · 담당자: ' + (q.staff_name || '-') + '</span></div>';
      html += '<span class="status-tag ' + (isPending ? 'tag-대기중' : 'tag-승인') + '">' + q.quote_status + '</span>';
      html += '</div>';

      if (q.symptom) html += '<div style="font-size:12px;color:#888;margin-bottom:8px;">접수 시 증상: ' + escapeHtmlQ(q.symptom) + '</div>';
      if (q.comment) html += '<div style="background:#FFFBF0;border:1px solid #F0C040;border-radius:2px;padding:10px 12px;font-size:12px;margin-bottom:8px;"><b>COMMENT (증상/원인)</b><br>' + escapeHtmlQ(q.comment) + '</div>';
      html += '<div style="background:#fafafa;border:1px solid #eee;border-radius:2px;padding:10px 12px;font-size:12px;margin-bottom:10px;"><b>COST (담당자 원문)</b><br>' + escapeHtmlQ(q.raw_text) + '</div>';

      if (q.ofr_photo_url || q.watch_photo_url || q.serial_photo_url) {
        html += '<div style="display:flex; gap:8px; margin-bottom:10px;">';
        if (q.ofr_photo_url) html += '<a href="' + q.ofr_photo_url + '" target="_blank"><img src="' + q.ofr_photo_url + '" style="width:70px;height:70px;object-fit:cover;border-radius:2px;border:1px solid #ddd;" title="OFR 라벨" /></a>';
        if (q.watch_photo_url) html += '<a href="' + q.watch_photo_url + '" target="_blank"><img src="' + q.watch_photo_url + '" style="width:70px;height:70px;object-fit:cover;border-radius:2px;border:1px solid #ddd;" title="시계 전면" /></a>';
        if (q.serial_photo_url) html += '<a href="' + q.serial_photo_url + '" target="_blank"><img src="' + q.serial_photo_url + '" style="width:70px;height:70px;object-fit:cover;border-radius:2px;border:1px solid #ddd;" title="시리얼" /></a>';
        html += '</div>';
      }

      html += '<table class="items-table">';
      html += '<tr><th>항목</th><th style="width:120px;">원가(원)</th></tr>';
      var itemRowsId = "qItems_" + idx;
      html += '<tbody id="' + itemRowsId + '">';
      items.forEach(function(it, itemIdx) {
        var confBadge = it.confidence === "low" ? '<span style="color:#E11D48;font-size:10px;">(확인필요)</span>' : "";
        if (isPending) {
          html += '<tr><td><input value="' + escapeHtmlQ(it.item_name) + '" data-idx="' + idx + '" data-item="' + itemIdx + '" data-field="name" oninput="recalcQuote(' + idx + ')" /> ' + confBadge + '</td>';
          html += '<td><input type="number" value="' + (it.cost||0) + '" data-idx="' + idx + '" data-field="cost" data-item="' + itemIdx + '" oninput="recalcQuote(' + idx + ')" style="text-align:right;" /></td></tr>';
        } else {
          html += '<tr><td>' + escapeHtmlQ(it.item_name) + '</td><td style="text-align:right;">' + (parseInt(it.cost)||0).toLocaleString("ko-KR") + '원</td></tr>';
        }
      });
      html += '</tbody></table>';

      if (isPending) {
        html += '<button class="add-row-btn" style="font-size:11px;background:none;border:1px dashed #C9A84C;color:#C9A84C;padding:6px 12px;border-radius:2px;cursor:pointer;margin-bottom:10px;" onclick="addQuoteItemRow(' + idx + ')">+ 항목 추가</button>';
      }

      html += '<div class="items-panel" style="margin-top:6px;">';
      html += '<div class="billing-edit" style="justify-content:space-between; font-size:12px;">';
      html += '<span>원가 합계 (파트너 정산 기준)</span><span id="qCost_' + idx + '" style="font-weight:600;">' + (parseInt(q.confirmed_cost_amount)||items.reduce(function(s,it){return s+(parseInt(it.cost)||0);},0)).toLocaleString("ko-KR") + '원</span>';
      html += '</div>';
      html += '<div class="billing-edit" style="justify-content:space-between; font-size:13px; margin-top:4px;">';
      html += '<span>사용자 청구금액 (공급가×1.2 + 부가세10%)</span><span id="qCharge_' + idx + '" style="font-weight:700; color:#C9A84C;">' + (parseInt(q.charge_amount)||0).toLocaleString("ko-KR") + '원</span>';
      html += '</div>';
      html += '</div>';

      if (isPending) {
        html += '<button class="btn-main" onclick="confirmQuoteAdmin(' + idx + ')">이 견적으로 확정</button>';
      }

      html += '</div>';
    });
    el.innerHTML = html;
  }

  function addQuoteItemRow(idx) {
    var tbody = document.getElementById("qItems_" + idx);
    var newItemIdx = tbody.querySelectorAll("tr").length;
    var tr = document.createElement("tr");
    tr.innerHTML =
      '<td><input value="" data-idx="' + idx + '" data-item="' + newItemIdx + '" data-field="name" oninput="recalcQuote(' + idx + ')" /></td>' +
      '<td><input type="number" value="0" data-idx="' + idx + '" data-field="cost" data-item="' + newItemIdx + '" oninput="recalcQuote(' + idx + ')" style="text-align:right;" /></td>';
    tbody.appendChild(tr);
  }

  function getQuoteItems(idx) {
    var tbody = document.getElementById("qItems_" + idx);
    var rows = tbody.querySelectorAll("tr");
    var items = [];
    rows.forEach(function(tr) {
      var nameInput = tr.querySelector('input[data-field="name"]');
      var costInput = tr.querySelector('input[data-field="cost"]');
      var name = nameInput ? nameInput.value.trim() : "";
      var cost = costInput ? parseFloat(costInput.value) || 0 : 0;
      if (name) items.push({ item_name: name, cost: cost });
    });
    return items;
  }

  function recalcQuote(idx) {
    var items = getQuoteItems(idx);
    var totalCost = items.reduce(function(s, it) { return s + it.cost; }, 0);
    var supply = Math.round(totalCost * 1.2);
    var vat = Math.round(supply * 0.1);
    var charge = supply + vat;
    var costEl = document.getElementById("qCost_" + idx);
    var chargeEl = document.getElementById("qCharge_" + idx);
    if (costEl) costEl.textContent = totalCost.toLocaleString("ko-KR") + "원";
    if (chargeEl) chargeEl.textContent = charge.toLocaleString("ko-KR") + "원";
  }

  function confirmQuoteAdmin(idx) {
    var q = quotesCache.slice().reverse()[idx];
    var items = getQuoteItems(idx);
    if (items.length === 0) { alert("최소 1개 항목이 필요합니다."); return; }
    var params = new URLSearchParams({
      action: "adminConfirmQuote", admin_key: adminKey, request_id: q.request_id,
      items_json: JSON.stringify(items), source: "AI추출+관리자확정"
    });
    fetch(API_URL + "?" + params.toString())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (!data.success) { alert(data.message || "확정 실패"); return; }
        alert("확정되었습니다. 최종 청구금액: " + parseInt(data.charge_amount).toLocaleString("ko-KR") + "원");
        loadQuotesAdmin();
      })
      .catch(function() { alert("오류가 발생했습니다."); });
  }

  // ── FAQ 관리 ─────────────────────────────────────────
  var faqCache = [];
  var editingFaqId = null;

  function loadFaqAdmin() {
    fetch(API_URL + "?action=adminGetAllFAQ&admin_key=" + encodeURIComponent(adminKey))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        faqCache = data.success ? data.faqs : [];
        renderFaqAdmin();
      });
  }

  function renderFaqAdmin() {
    var el = document.getElementById("faqList");
    if (faqCache.length === 0) { el.innerHTML = '<div class="empty-msg">등록된 FAQ가 없습니다.</div>'; return; }
    var byCategory = {};
    var order = [];
    faqCache.forEach(function(f) {
      if (!byCategory[f.category]) { byCategory[f.category] = []; order.push(f.category); }
      byCategory[f.category].push(f);
    });
    var html = "";
    order.forEach(function(cat) {
      html += '<h3 style="margin-top:18px;">' + cat + '</h3>';
      byCategory[cat].forEach(function(f) {
        html += '<div class="items-panel" style="margin-bottom:8px;">';
        html += '<div style="display:flex; justify-content:space-between; align-items:flex-start;">';
        html += '<div style="flex:1;"><b style="font-size:13px;">' + f.question + '</b>' +
          (!f.active ? ' <span class="status-tag tag-거절">숨김</span>' : '') +
          '<div style="font-size:12px; color:#777; margin-top:6px; white-space:pre-line;">' + f.answer + '</div></div>';
        html += '<div style="display:flex; gap:4px; margin-left:12px;">' +
          '<button class="btn-sm" style="background:#1a1a1a;color:#fff;" onclick="editFaq(\'' + f.faq_id + '\')">수정</button>' +
          '<button class="btn-sm" style="background:#fff;border:1px solid #E11D48;color:#E11D48;" onclick="deleteFaq(\'' + f.faq_id + '\')">삭제</button></div>';
        html += '</div></div>';
      });
    });
    el.innerHTML = html;
  }

  function toggleFaqForm() {
    var area = document.getElementById("faqFormArea");
    if (area.innerHTML) { area.innerHTML = ""; editingFaqId = null; return; }
    renderFaqForm(null);
  }

  function editFaq(faqId) {
    var f = faqCache.find(function(x) { return x.faq_id === faqId; });
    if (!f) return;
    renderFaqForm(f);
  }

  function renderFaqForm(f) {
    editingFaqId = f ? f.faq_id : null;
    var area = document.getElementById("faqFormArea");
    area.innerHTML =
      '<div class="items-panel" style="margin-bottom:16px;">' +
      '<div class="field"><label>카테고리</label><input type="text" id="faq_category" placeholder="예) AS 접수 / 수리" value="' + (f ? f.category : '') + '" /></div>' +
      '<div class="field"><label>질문</label><input type="text" id="faq_question" value="' + (f ? f.question.replace(/"/g,'&quot;') : '') + '" /></div>' +
      '<div class="field"><label>답변</label><textarea id="faq_answer" rows="4">' + (f ? f.answer : '') + '</textarea></div>' +
      '<div class="field-row">' +
      '<div class="field"><label>정렬 순서</label><input type="number" id="faq_order" value="' + (f ? f.order : 0) + '" /></div>' +
      (f ? '<div class="field"><label>노출 여부</label><label style="display:flex;align-items:center;gap:6px;font-size:12px;"><input type="checkbox" id="faq_active" ' + (f.active ? 'checked' : '') + ' /> 사용자에게 노출</label></div>' : '<div></div>') +
      '</div>' +
      '<button class="btn-main" onclick="saveFaq()">' + (f ? '수정 저장' : '등록') + '</button>' +
      '</div>';
  }

  function saveFaq() {
    var category = document.getElementById("faq_category").value.trim();
    var question = document.getElementById("faq_question").value.trim();
    var answer = document.getElementById("faq_answer").value.trim();
    var order = document.getElementById("faq_order").value || 0;
    if (!category || !question || !answer) { alert("카테고리, 질문, 답변을 모두 입력하세요."); return; }
    var params = { action: "adminSaveFAQ", admin_key: adminKey, category: category, question: question, answer: answer, order: order };
    if (editingFaqId) {
      params.faq_id = editingFaqId;
      var activeEl = document.getElementById("faq_active");
      if (activeEl) params.active = activeEl.checked ? "TRUE" : "FALSE";
    }
    fetch(API_URL, { method: "POST", body: JSON.stringify(params) })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.success) {
          document.getElementById("faqFormArea").innerHTML = "";
          editingFaqId = null;
          loadFaqAdmin();
        } else { alert(data.message); }
      });
  }

  function deleteFaq(faqId) {
    if (!confirm("이 FAQ를 삭제할까요?")) return;
    fetch(API_URL, { method: "POST", body: JSON.stringify({ action: "adminDeleteFAQ", admin_key: adminKey, faq_id: faqId }) })
      .then(function(r) { return r.json(); })
      .then(function() { loadFaqAdmin(); });
  }