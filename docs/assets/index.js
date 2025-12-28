(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const D=`/* Theme: Circle */

/* --- Container --- */
ul[class^="Voice_voiceStates"] {
  display: flex !important;
}

/* --- User Base --- */
li[class^="Voice_voiceState"] {
  position: relative !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  width: {{avatarSize}}px !important;
  height: {{avatarSize}}px !important; /* Ensure the li is a square matches the avatar */
}

/* Avatar Base Style */
img[class*="Voice_avatar"] {
  width: {{avatarSize}}px !important;
  height: {{avatarSize}}px !important;
  border-radius: 50% !important;
  box-shadow: 0 0 0 4px rgb(160, 160, 160);
  transition: 0.1s;
  filter: brightness(60%);
  margin: 0 !important;
  display: block !important;
}

/* Name Container - Positioned at the bottom for overlap */
div[class^="Voice_user"] {
  position: absolute !important;
  bottom: 0 !important;
  left: 0 !important;
  width: 100% !important;
  display: block !important;
  z-index: 10 !important;
  pointer-events: none !important;
}

/* Name Style */
span[class^="Voice_name"] {
  width: 100% !important;
  display: block !important;
  text-align: right !important; /* User requested right-aligned */
  padding: 0 !important;
  margin: 0 !important;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 100));
  line-height: 1 !important; /* Tight line height for precise bottom alignment */
  
  /* Clipping Protection */
  max-width: 100% !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: clip !important;
}

/* --- User Highlight --- */
img[src*="USER_ID"][class*="Voice_avatar"] {
  box-shadow: 0 0 0 4px var(--user-color);
}

/* --- User Speaking --- */
img[src*="USER_ID"][class*="Voice_avatarSpeaking"] {
  filter: brightness(100%);
  box-shadow: 0 0 0 4px var(--user-color), 0 0 0 16px var(--user-color-alpha);
  animation: bounce-anim 0.6s infinite !important;
}
`,j=`/* Theme: Horizontal (Standard) */

/* --- Container --- */
ul[class^="Voice_voiceStates"] {
  display: flex !important;
  flex-direction: column; /* List grows vertically usually, but items are horizontal */
}

/* --- User Base --- */
li[class^="Voice_voiceState"] {
  display: flex !important;
  flex-direction: row !important; /* Horizontal layout */
  align-items: center !important;
  margin-bottom: 8px !important;
  padding: 0 !important;
  width: auto !important;
  height: auto !important;
}

/* Avatar Style */
img[class*="Voice_avatar"] {
  width: {{avatarSize}}px !important;
  height: {{avatarSize}}px !important;
  border-radius: 50% !important;
  margin-right: 12px !important; /* Space between avatar and name */
  box-shadow: 0 0 0 0px transparent;
  transition: 0.1s;
  filter: brightness(100%); /* Default brightness */
}

/* Name Container */
div[class^="Voice_user"] {
  display: block !important;
}

/* Name Style */
span[class^="Voice_name"] {
  display: block !important;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 8px !important;
  border-radius: 4px !important;
  color: white !important;
  font-size: 16px !important; /* Will be overridden by generator */
  text-align: left !important;
}

/* --- User Highlight --- */
/* User Color applies to Name Background in this theme */
img[src*="USER_ID"] + div[class^="Voice_user"] span[class^="Voice_name"] {
  background-color: var(--user-color) !important;
  color: white !important; /* Ensure text is visible on color */
  text-shadow: 0px 1px 2px rgba(0,0,0,0.8);
}

/* --- User Speaking --- */
img[src*="USER_ID"][class*="Voice_avatarSpeaking"] {
  border-color: var(--user-color) !important;
  box-shadow: 0 0 0 3px var(--user-color);
  animation: bounce-anim 0.6s infinite ease-in-out !important;
  filter: brightness(100%) !important;
}
`,P=`/* Theme: Vertical */

/* --- Container --- */
ul[class^="Voice_voiceStates"] {
  display: flex;
  flex-direction: column;
  width: min-content;
}

/* --- User Base --- */
li[class^="Voice_voiceState"] {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  width: auto;
  height: auto;
  padding: 0;
}

/* Avatar Base Style */
img[class*="Voice_avatar"] {
  margin-right: 12px;
  width: {{avatarSize}}px;
  height: {{avatarSize}}px;
  border-radius: 50%;
  transition: 0.1s;
  filter: brightness(60%);
  border: 0;
  box-shadow: 0 0 0 3px rgb(160, 160, 160);
}

/* Name Style */
span[class^="Voice_name"] {
  padding: 0;
  word-break: keep-all;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 100));
  background-color: rgba(30, 33, 36, 0) !important;
  display: block;
  text-align: left;
  
  /* Clipping Protection */
  max-width: none;
  white-space: nowrap;
  overflow: visible;
  text-overflow: clip;
}


/* --- User Highlight --- */
img[src*="USER_ID"][class*="Voice_avatar"] {
  box-shadow: 0 0 0 3px var(--user-color);
}

/* --- User Speaking --- */
img[src*="USER_ID"][class*="Voice_avatarSpeaking"] {
  filter: brightness(100%);
  box-shadow: 0 0 0 3px var(--user-color), 0 0 12px var(--user-color-alpha);
  animation: bounce-anim 0.6s infinite !important;
}
`,F=`/* Theme: Portrait */

/* --- Container --- */
ul[class^="Voice_voiceStates"] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
}

/* --- User Base --- */
li[class^="Voice_voiceState"] {
  position: relative;
  width: {{avatarSize}}px;
  height: calc({{avatarSize}}px * 1.33);
  overflow: hidden;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.5);
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
}

/* Avatar Base Style */
img[class*="Voice_avatar"] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  transition: transform 0.3s ease;
  filter: brightness(60%);
  border: 0;
}

/* Name Style */
span[class^="Voice_name"] {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8) !important;
  padding: 4px !important;
  word-break: keep-all;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 100));
  
  /* Clipping Protection */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}


/* --- User Highlight --- */
li[class^="Voice_voiceState"]:has(img[src*="USER_ID"]) {
  border: 2px solid var(--user-color);
}

/* --- User Speaking --- */
img[src*="USER_ID"][class*="Voice_avatarSpeaking"] {
  transform: scale(1.05);
  filter: brightness(100%);
  animation: bounce-anim 0.6s infinite !important;
}

li[class^="Voice_voiceState"]:has(img[src*="USER_ID"][class*="Voice_avatarSpeaking"]) {
  box-shadow: 0 0 15px var(--user-color);
}
`,C=[{id:"horizontal",name:"Horizontal",icon:"Horizontal",previewScale:.38,previewTranslateY:0,content:j},{id:"circle",name:"Circle",icon:"Circle",previewScale:.38,previewTranslateY:0,content:D,cssPath:"src/themes/circle.css",preview:"/src/assets/themes/circle.png"},{id:"vertical",name:"Vertical",icon:"Vertical",previewScale:.28,previewTranslateY:-10,content:P},{id:"portrait",name:"Portrait",icon:"Portrait",previewScale:.3,previewTranslateY:0,content:F}],u={en:{themes:"Themes",general:"General",layout:"Layout",themeCustom:"Theme Customization",globalSettings:"Size Settings",baseFontSize:"Base Font Size (px)",users:"Member Customization",addUser:"+ Add Member Setting",userId:"Member ID",displayName:"Display Name",userColor:"Color",priority:"Sort",groupCss:"CSS Output",groupConfig:"Settings",cssPreview:"CSS Preview",animations:"Animations",speakingAnimation:"Speaking Animation",copyCss:"Copy CSS",saveCss:"Download .css",saveConfig:"Save .json",loadConfig:"Load .json",labelSave:"Save",labelLoad:"Load",labelConfig:"Config",themeHorizontal:"Horizontal",avatarSize:"Avatar Size",layoutSettings:"Layout Settings",spacing:"Spacing (Gap px)",direction:"Direction",wrap:"Wrapping",alignment:"Alignment (Start)",vertical:"Vertical",horizontal:"Horizontal",wrapOn:"Wrap",wrapOff:"No Wrap",alignStart:"Start",alignCenter:"Center",alignEnd:"End",toggleMetadata:"Show IDs",livePreview:"Live Preview",showAllUsers:"All",showOnlyRegistered:"Reg Only",visibility:"Visibility",hidden:"Hidden",copiedAction:"CSS copied to clipboard!",horizontal:"Circle",vertical:"Vertical",portrait:"Portrait",unlistedMembers:"Unlisted Members",unlistedShow:"Show",unlistedHide:"Hide (Whitelist Mode)",defaultColor:"Default Color",userListHeader:"Individual Settings",colVisibility:"Show?",commonSettings:"Common Settings"},ja:{themes:"テーマ",general:"テーマカスタム",layout:"レイアウト",themeCustom:"テーマカスタム",globalSettings:"サイズ設定",baseFontSize:"フォントサイズ",hideNames:"名前を非表示",users:"メンバーカスタム",addUser:"+ メンバー設定追加",userId:"ユーザーID",displayName:"表示名",userColor:"色",priority:"順序",groupCss:"CSS出力",groupConfig:"設定",cssPreview:"CSSプレビュー",animations:"アニメーション",speakingAnimation:"話し中の動き",copyCss:"CSSをコピー",saveCss:"ファイル保存",saveConfig:"ファイル保存",loadConfig:"ファイル読込",labelSave:"保存",labelLoad:"読込",labelConfig:"設定",themeHorizontal:"横並び",avatarSize:"画像サイズ (px)",layoutSettings:"レイアウト設定",spacing:"間隔 (Gap px)",direction:"並ぶ向き",wrap:"折り返し",alignment:"始点 (揃え)",vertical:"縦",horizontal:"横",wrapOn:"あり",wrapOff:"なし",alignStart:"端 (Start)",alignCenter:"中央 (Center)",alignEnd:"端 (End)",toggleMetadata:"IDを表示",livePreview:"ライブプレビュー",showAllUsers:"全員",showOnlyRegistered:"登録のみ",visibility:"表示設定",hidden:"非表示リスト入り",copiedAction:"CSSをコピーしました！",horizontal:"サークル",vertical:"縦並びリスト",portrait:"ポートレート",unlistedMembers:"未設定のメンバー",unlistedShow:"表示する",unlistedHide:"表示しない (登録者のみ表示)",defaultColor:"未設定メンバーの色",userListHeader:"個別設定リスト",colVisibility:"表示",commonSettings:"共通設定",participantCount:"未設定のメンバーのプレビュー人数"}};function b(t){const{users:e,animType:n,baseFontSize:o,avatarSize:a=100,gap:s=0,direction:r="row",wrap:c="nowrap",justifyContent:m="flex-start",themeId:v="horizontal",defaultColor:h="#ffffff",displayedUsers:T=[]}=t,L=C.find(l=>l.id===v)||C[0],H=k(h,.4);let p=`
/* --- Discord Streamkit Overlay Generated CSS --- */
/* Theme: ${L.name} */

body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0px;
  overflow: hidden;
}

/* Global Default Color */
:root {
  --user-color: ${h} !important;
  --user-color-alpha: ${H} !important;
}

/* Global Layout & Sizes */
ul[class^="Voice_voiceStates"] {
  display: flex !important;
  flex-direction: ${r} !important;
  flex-wrap: ${c} !important;
  justify-content: ${m} !important;
  gap: ${s}px !important;
  width: 100% !important;
  height: auto !important;
}

span[class^="Voice_name"] {
  font-size: ${o}px !important;
  display: block;
}

li[class^="Voice_voiceState"] {
  align-items: center !important;
  margin: 0 !important; /* Reset legacy margins to favor Flex Gap */
}

img[class*="Voice_avatar"] {
  width: ${a}px !important;
  height: ${a}px !important;
  margin: 0 !important; /* Reset legacy margins to favor Flex Gap */
}
`;const[R,M]=L.content.split("/* --- User Highlight --- */");return t.onlyRegistered&&(p+=`
/* Solo Mode: Hide all by default */
li[class^="Voice_voiceState"] {
  display: none !important;
}
`),p+=R.replace(/{{avatarSize}}/g,a),[...T].sort((l,w)=>(l.priority??0)-(w.priority??0)).forEach((l,w)=>{if(!l.id)return;const O=l.name||`User ${w+1}`,E=l.displayName&&l.displayName.trim()!==""?l.displayName:O;if(l.isHidden){p+=`
/* User ${E} is in Hide-list */
li[class^="Voice_voiceState"]:has(img[src*="${l.id}"]) {
  display: none !important;
}
`;return}const q=k(l.color,.4);let _=M.replace(/USER_ID/g,l.id).replace(/var\(--user-color\)/g,l.color).replace(/var\(--user-color-alpha\)/g,q).replace(/{{avatarSize}}/g,a);_+=`
/* Override custom name */
img[src*="${l.id}"] + div[class^="Voice_user"] span[class^="Voice_name"]::after {
  content: "${E}" !important;
  display: block !important;
  font-size: ${o}px !important;
}
img[src*="${l.id}"] + div[class^="Voice_user"] span[class^="Voice_name"] {
  font-size: 0 !important;
  height: auto !important;
}
`,p+=`
/* User: ${E} */
`,t.onlyRegistered&&(p+=`li[class^="Voice_voiceState"]:has(img[src*="${l.id}"]) {
  display: flex !important;
}
`),p+=`${_}
`,t.onlyRegistered&&l.id.startsWith("unset_")&&(p+=`li[class^="Voice_voiceState"]:has(img[src*="${l.id}"]) {
  display: none !important;
}
`)}),t.hideNames&&(p+=`
/* Global Hide Names */
span[class^="Voice_name"] {
  display: none !important;
}
`),p+=B(n),p.trim()}function k(t,e){let n=0,o=0,a=0;return t.length===4?(n=parseInt(t[1]+t[1],16),o=parseInt(t[2]+t[2],16),a=parseInt(t[3]+t[3],16)):t.length===7&&(n=parseInt(t.substring(1,3),16),o=parseInt(t.substring(3,5),16),a=parseInt(t.substring(5,7),16)),`rgba(${n}, ${o}, ${a}, ${e})`}function B(t){switch(t){case"bounce":return`
@keyframes bounce-anim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`;case"glow":return`
@keyframes glow-anim {
  0%, 100% { filter: brightness(100%); }
  50% { filter: brightness(130%); }
}`;case"shake":return`
@keyframes shake-anim {
  0% { transform: rotate(0); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0); }
}`;default:return""}}function G(t){t.innerHTML=`
    <div class="voice-container">
      <ul class="Voice_voiceStates voice-states" id="simulator-list">
        <!-- Injected via state -->
      </ul>
    </div>
  `}function Y(t){const e=document.getElementById("simulator-list");e&&(e.innerHTML=t.map((n,o)=>{const a=n.name||`User ${o+1}`,s=n.displayName&&n.displayName.trim()!==""?n.displayName:a;return`
      <li class="Voice_voiceState voice_state" data-userid="${n.id}">
        <div class="metadata">[ID: ${n.id}]</div>
        <img class="Voice_avatar voice_avatar" src="https://cdn.discordapp.com/embed/avatars/${o%6}.png#id=${n.id}" />
        <div class="Voice_user voice_user">
          <span class="Voice_name voice_name">${s}</span>
        </div>
      </li>
    `}).join(""))}function V(t,e){const n=document.querySelector(`#simulator-list [data-userid="${t}"]`);if(n){const o=n.querySelector(".Voice_avatar");o&&(e?(n.classList.add("wrapper_speaking"),o.classList.add("Voice_avatarSpeaking")):(n.classList.remove("wrapper_speaking"),o.classList.remove("Voice_avatarSpeaking")))}}function W(){const t=document.getElementById("simulator-list");t&&t.classList.toggle("show-metadata")}let i={users:[{id:"12345678901",displayName:"",color:"#ff4b4b",priority:0},{id:"12345678902",displayName:"",color:"#4b4bff",priority:1}],animType:"bounce",baseFontSize:14,avatarSize:100,gap:0,direction:"row",wrap:"nowrap",justifyContent:"flex-start",themeId:"horizontal",language:"ja",onlyRegistered:!1,hideNames:!1,defaultColor:"#ffffff",unsetUserCount:3,displayedUsers:[],isOverlayMode:new URLSearchParams(window.location.search).get("mode")==="overlay"};i.isOverlayMode&&document.body.classList.add("overlay-active");const f=document.getElementById("user-list"),$=document.getElementById("theme-selector"),J=document.getElementById("discord-simulator");function Q(){X(),Z(),K(),setTimeout(()=>requestAnimationFrame(()=>d()),0)}function X(){U(),N(),I(),g(),G(J),A();const t=document.getElementById("toggle-unset-users");t.textContent=`Unset Users (${i.unsetUserCount})`}function Z(){ee(),te(),ne(),ae(),ie(),oe()}function K(){function t(){const e=Array.from(document.querySelectorAll("#simulator-list [data-userid]")).map(n=>{const o=n.dataset.userid,a=i.displayedUsers.find(s=>s.id===o);return a&&!a.isHidden?a:null}).filter(Boolean);if(e.length>0){const n=e[Math.floor(Math.random()*e.length)];V(n.id,!0),z(n.id,!0);const o=1200+Math.random()*1800;setTimeout(()=>{V(n.id,!1),z(n.id,!1);const a=400+Math.random()*1e3;setTimeout(t,a)},o)}else setTimeout(t,1e3)}t()}function z(t,e){document.querySelectorAll(".theme-card").forEach(n=>{var a;const o=(a=n.querySelector(".theme-preview-container"))==null?void 0:a.shadowRoot;if(o){const s=o.querySelector('[data-userid="mini1"]'),r=s==null?void 0:s.querySelector(".Voice_avatar");s&&r&&(e?(s.classList.add("wrapper_speaking"),r.classList.add("Voice_avatarSpeaking")):(s.classList.remove("wrapper_speaking"),r.classList.remove("Voice_avatarSpeaking")))}})}function ee(){document.getElementById("add-user").addEventListener("click",()=>{i.users.push({id:Date.now().toString(),displayName:"",color:"#ffffff",priority:i.users.length}),g(),d()})}function y(t,e){const n=document.getElementById(t);n&&n.querySelectorAll(".toggle-btn").forEach(o=>{o.addEventListener("click",a=>{n.querySelectorAll(".toggle-btn").forEach(r=>r.classList.remove("active")),a.target.classList.add("active");const s=a.target.dataset.value;i[e]=e==="onlyRegistered"?s==="hide":s,d()})})}function te(){y("anim-type-group","animType"),y("layout-direction-group","direction"),y("layout-wrap-group","wrap"),y("layout-align-group","justifyContent"),y("unlisted-toggle-group","onlyRegistered")}function S(t,e,n){const o=document.getElementById(t),a=document.getElementById(e),s=r=>{if(i[n]=parseInt(r)||0,o.value=i[n],a.value=i[n],d(),n==="unsetUserCount"){const c=document.getElementById("toggle-unset-users");c.textContent=`Unset Users (${i.unsetUserCount})`}};o.addEventListener("input",r=>s(r.target.value)),a.addEventListener("input",r=>s(r.target.value))}function ne(){S("avatar-size","avatar-size-slider","avatarSize"),S("base-font-size","base-font-size-slider","baseFontSize"),S("layout-gap","layout-gap-slider","gap"),S("unset-count","unset-count-slider","unsetUserCount"),(()=>{const e=document.getElementById("toggle-unset-users");e.textContent=`Unset Users (${i.unsetUserCount})`})(),document.getElementById("hide-names").addEventListener("change",e=>{i.hideNames=e.target.checked,d()})}function ae(){document.querySelectorAll(".lang-btn").forEach(t=>{t.addEventListener("click",e=>{i.language=e.target.dataset.lang,document.querySelectorAll(".lang-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),U(),N(),I(),g(),d()})})}function ie(){document.querySelectorAll(".sidebar-tab").forEach(t=>{t.addEventListener("click",e=>{const n=e.target.dataset.sidebarTab;document.querySelectorAll(".sidebar-tab").forEach(a=>a.classList.remove("active")),e.target.classList.add("active"),document.querySelectorAll(".sidebar-scroll").forEach(a=>{a.classList.remove("active"),a.style.display="none"});const o=document.getElementById(`sidebar-tab-${n}`);o.classList.add("active"),o.style.display="flex",n==="css"&&(document.getElementById("css-output").textContent=b(i))})})}function oe(){document.getElementById("toggle-debug").addEventListener("click",t=>{t.currentTarget.classList.toggle("active"),W()}),document.getElementById("toggle-unset-users").addEventListener("click",()=>{document.getElementById("unset-users-control").classList.toggle("hidden")}),document.getElementById("copy-css").addEventListener("click",()=>{const t=b(i);navigator.clipboard.writeText(t).then(()=>{const e=u[i.language].copiedAction||"Copied!";x(e)})}),document.getElementById("download-css").addEventListener("click",()=>{const t=b(i),e=new Blob([t],{type:"text/css"}),n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.download="overlay.css",o.click(),URL.revokeObjectURL(n)}),document.getElementById("export-json").addEventListener("click",()=>{const t=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),e=URL.createObjectURL(t),n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download","overlay-config.json"),document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(e)}),document.getElementById("import-json-btn").addEventListener("click",()=>{document.getElementById("import-json-input").click()}),document.getElementById("import-json-input").addEventListener("change",t=>{const e=t.target.files[0];if(!e){console.log("No file selected");return}const n=new FileReader;n.onload=o=>{try{console.log("File loaded, parsing JSON...");const a=JSON.parse(o.target.result);console.log("Parsed config:",a),i={...i,...a},console.log("State updated:",i),U(),A(),d(),I(),g(),x(u[i.language].loadConfig+" OK")}catch(a){console.error("JSON parse error:",a),x("Invalid JSON: "+a.message)}},n.readAsText(e),t.target.value=""})}function x(t){const e=document.createElement("div");e.className="notification",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},2e3)}function I(){$.innerHTML="",C.forEach(t=>{const e=document.createElement("button");e.className=`theme-card ${i.themeId===t.id?"active":""}`,e.dataset.theme=t.id;const n=document.createElement("div");n.className="theme-preview-container";const o=n.attachShadow({mode:"open"}),s=[{id:"mini1",color:"#ff4b4b"}].map((v,h)=>`
      <li class="Voice_voiceState voice_state" data-userid="${v.id}">
        <img class="Voice_avatar voice_avatar Voice_avatarSpeaking" src="https://cdn.discordapp.com/embed/avatars/${h%6}.png#id=${v.id}" />
        <div class="Voice_user voice_user">
          <span class="Voice_name voice_name">User</span>
        </div>
      </li>
    `).join(""),[r,c]=t.content.includes("/* --- User Highlight --- */")?t.content.split("/* --- User Highlight --- */"):[t.content,""];o.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #0b0d10;
        }
        
        /* Scale container for mini-preview */
        ul[class^="Voice_voiceStates"] {
          transform: scale(${t.previewScale||.4}) translateY(${t.previewTranslateY||0}px);
        }
        
        /* Theme Structural Styles */
        ${r.replace(/{{avatarSize}}/g,i.avatarSize)}
        
        /* Theme User Styles (Mocked for mini1) */
        ${c.replace(/USER_ID/g,"mini1").replace(/var\(--user-color\)/g,"#ff4b4b").replace(/var\(--user-color-alpha\)/g,"rgba(255, 75, 75, 0.4)").replace(/{{avatarSize}}/g,i.avatarSize)}
        
        /* Animation CSS */
        ${B(i.animType)}
      </style>
      <ul class="Voice_voiceStates voice-states">
        ${s}
      </ul>
    `,e.appendChild(n);const m=document.createElement("span");m.className="theme-name",m.textContent=t.name,e.appendChild(m),e.addEventListener("click",()=>{i.themeId=t.id,document.querySelectorAll(".theme-card").forEach(v=>v.classList.remove("active")),e.classList.add("active"),d()}),$.appendChild(e)})}function g(){f.innerHTML="",[...i.users].map((e,n)=>({...e,originalIndex:n})).sort((e,n)=>(e.priority??0)-(n.priority??0)).forEach((e,n)=>{const o=document.createElement("div");o.className="user-item user-table-grid",o.innerHTML=`
      <button class="visibility-toggle ${e.isHidden?"hidden":""}" data-userid="${e.id}" title="${u[i.language].visibility}">
        <span class="material-symbols-rounded">${e.isHidden?"visibility_off":"visibility"}</span>
      </button>
      <input type="text" value="${e.id}" data-type="id" data-userid="${e.id}" placeholder="${u[i.language].userId}" title="${u[i.language].userId}" />
      <input type="text" value="${e.displayName||""}" data-type="displayName" data-userid="${e.id}" placeholder="上書きする場合のみ入力" title="${u[i.language].displayName}" ${e.isHidden?"disabled":""} />
      <input type="number" value="${e.priority??n}" data-type="priority" data-userid="${e.id}" placeholder="0" title="${u[i.language].priority}" ${e.isHidden?"disabled":""} />
      <input type="color" value="${e.color}" data-type="color" data-userid="${e.id}" title="${u[i.language].userColor}" ${e.isHidden?"disabled":""} />

      <div class="user-actions">
        <span class="remove-user" data-userid="${e.id}">&times;</span>
      </div>
    `,f.appendChild(o)}),f.querySelectorAll("input").forEach(e=>{e.addEventListener("input",n=>{const o=n.target.dataset.type,a=n.target.dataset.userid,s=i.users.findIndex(c=>c.id===a);if(s===-1)return;let r=n.target.value;o==="priority"&&(r=parseInt(r)||0),i.users[s][o]=r,o==="priority"&&g(),d()})}),f.querySelectorAll(".remove-user").forEach(e=>{e.addEventListener("click",n=>{const o=n.target.dataset.userid,a=i.users.findIndex(s=>s.id===o);a!==-1&&(i.users.splice(a,1),g(),d())})}),f.querySelectorAll(".visibility-toggle").forEach(e=>{e.addEventListener("click",n=>{const o=n.target.dataset.userid||n.target.parentElement.dataset.userid,a=i.users.findIndex(s=>s.id===o);a!==-1&&(i.users[a].isHidden=!i.users[a].isHidden,g(),d())})})}function U(){const t=u[i.language];document.querySelectorAll("[data-i18n]").forEach(e=>{const n=e.dataset.i18n;if(t[n]){if(e.querySelector(".material-symbols-rounded"))return;e.textContent=t[n]}}),window.copiedMessage=t.copiedAction}function N(){const t=u[i.language];document.getElementById("copy-css").title=t.copyCss,document.getElementById("download-css").title=t.saveCss,document.getElementById("export-json").title=t.saveConfig,document.getElementById("import-json-btn").title=t.loadConfig}function A(){document.getElementById("avatar-size").value=i.avatarSize,document.getElementById("avatar-size-slider").value=i.avatarSize,document.getElementById("base-font-size").value=i.baseFontSize,document.getElementById("base-font-size-slider").value=i.baseFontSize,document.getElementById("layout-gap").value=i.gap,document.getElementById("layout-gap-slider").value=i.gap,document.getElementById("unset-count").value=i.unsetUserCount,document.getElementById("unset-count-slider").value=i.unsetUserCount;function t(o,a){const s=document.getElementById(o);s&&s.querySelectorAll(".toggle-btn").forEach(r=>{r.dataset.value===a?r.classList.add("active"):r.classList.remove("active")})}t("anim-type-group",i.animType),t("layout-direction-group",i.direction),t("layout-wrap-group",i.wrap),t("layout-align-group",i.justifyContent),document.getElementById("hide-names").checked=i.hideNames;const e=document.getElementById("default-color");e&&(e.value=i.defaultColor||"#ffffff");const n=document.getElementById("unlisted-toggle-group");if(n){const o=i.onlyRegistered?"hide":"show";n.querySelectorAll(".toggle-btn").forEach(a=>{a.dataset.value===o?a.classList.add("active"):a.classList.remove("active")})}document.querySelectorAll(".lang-btn").forEach(o=>{o.classList.toggle("active",o.dataset.lang===i.language)})}function d(){const e=[...[...i.users].sort((c,m)=>(c.priority??0)-(m.priority??0))],n=[];for(let c=0;c<i.unsetUserCount;c++)n.push({id:`unset_${c}`,name:`Unset${c+1}`,color:i.defaultColor,priority:100+c,isHidden:!1});e.push(...n);const o=b(i);let a=document.getElementById("generated-styles");a||(a=document.createElement("style"),a.id="generated-styles",document.head.appendChild(a)),a.textContent=o;let s=document.getElementById("preview-styles");if(!s){s=document.createElement("style"),s.id="preview-styles";const c=document.getElementById("discord-simulator");c&&c.appendChild(s)}s&&(s.textContent=o);const r=document.getElementById("css-output");r&&(r.textContent=o),i.displayedUsers=e,Y(e)}Q();
