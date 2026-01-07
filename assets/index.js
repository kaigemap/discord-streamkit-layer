(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const te=`/* Theme: Circle */

/* --- Container --- */
ul[class*="Voice_voiceStates"] {
  display: flex !important;
}

/* --- User Base --- */
li[class*="Voice_voiceState"] {
  position: relative !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important; /* Ensure the li is a square matches the avatar */
}

/* Avatar Base Style */
img[class*="Voice_avatar"] {
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  border-radius: 50% !important;
  border: none !important; /* Remove default Discord border to prevent position shift */
  box-shadow: 0 0 0 4px rgb(160, 160, 160);
  transition: 0.1s;
  filter: brightness(60%);
  margin: 0 !important;
  display: block !important;
}

/* Name Container - Positioned at the bottom for overlap */
div[class*="Voice_user"] {
  position: absolute !important;
  bottom: 0 !important;
  left: 0 !important;
  width: 100% !important;
  display: block !important;
  z-index: 10 !important;
  pointer-events: none !important;
}

/* Name Style */
span[class*="Voice_name"] {
  width: 100% !important;
  display: block !important;
  text-align: right !important; /* User requested right-aligned */
  padding: 0 !important;
  margin: 0 !important;
  background: none !important; /* Remove background band */
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
img[src*="USER_ID"][class*="Voice_avatar"][class*="Voice_avatarSpeaking"],
img[src*="USER_ID"][class*="Voice_avatar"].speaking {
  filter: brightness(100%);
  border: none !important; /* Remove Discord's default green border */
  box-shadow: 0 0 0 4px var(--user-color), 0 0 0 16px var(--user-color-alpha);
  animation: bounce-anim 0.6s infinite !important;
}
`,ne=`/* Theme: Portrait */

/* --- Container --- */
ul[class^="Voice_voiceStates"] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
}

/* --- User Base --- */
li[class^="Voice_voiceState"] {
  position: relative;
  width: var(--avatar-size);
  height: calc(var(--avatar-size) * 1.33);
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
  border: none !important; /* Remove default Discord border to prevent position shift */
  transition: transform 0.3s ease;
  filter: brightness(60%);
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
`,ae=`/* Theme: Actor */

/* Theme: Actor */

/* --- Container --- */
ul[class*="Voice_voiceStates"] {
  display: flex !important;
}

/* --- User Base --- */
li[class*="Voice_voiceState"] {
  position: relative !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important; /* Ensure the li is a square matches the avatar */
}

/* Avatar Base Style */
img[class*="Voice_avatar"] {
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  border-radius: 0% !important;
  border: none !important; /* Remove default Discord border to prevent position shift */
  transition: 0.1s;
  filter: brightness(60%);
  margin: 0 !important;
  display: block !important;
}

/* Name Container - Positioned at the bottom for overlap */
div[class*="Voice_user"] {
  position: absolute !important;
  bottom: 0 !important;
  left: 0 !important;
  width: 100% !important;
  display: block !important;
  z-index: 10 !important;
  pointer-events: none !important;
}

/* Name Style */
span[class*="Voice_name"] {
  width: 100% !important;
  display: block !important;
  text-align: right !important; /* User requested right-aligned */
  padding: 0 !important;
  margin: 0 !important;
  background: none !important; /* Remove background band */
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
  filter: brightness(80%) drop-shadow(0 0 10px var(--user-color));
}

/* --- User Speaking --- */
img[src*="USER_ID"][class*="Voice_avatar"][class*="Voice_avatarSpeaking"],
img[src*="USER_ID"][class*="Voice_avatar"].speaking {
  filter: brightness(100%) drop-shadow(0 0 20px var(--user-color));
  border: none !important; /* Remove Discord's default green border */
  animation: bounce-anim 0.6s infinite !important;
}
`,ie=`/* Theme: Horizontal (Standard) */

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
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  border-radius: 50% !important;
  border: none !important; /* Remove default Discord border to prevent position shift */
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
`,oe=`/* Theme: Vertical */

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
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
  border: none !important; /* Remove default Discord border to prevent position shift */
  transition: 0.1s;
  filter: brightness(60%);
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
`,R=[{id:"circle",name:"Circle",icon:"Circle",previewScale:.38,previewTranslateY:0,content:te,cssPath:"src/themes/circle.css",preview:"/src/assets/themes/circle.png",speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"row",wrap:"wrap",justifyContent:"flex-start",gap:10,avatarSize:100,baseFontSize:14,padding:20,borderRadius:0,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"portrait",name:"Portrait",icon:"Portrait",previewScale:.3,previewTranslateY:0,content:ne,speakingAnimations:{bounce:!1,glow:!0,shake:!1},preset:{direction:"column",wrap:"nowrap",justifyContent:"flex-start",gap:5,avatarSize:80,baseFontSize:12,padding:10,borderRadius:10,backgroundColor:"rgba(0, 0, 0, 0.5)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"actor",name:"Actor",icon:"Actor",previewScale:.38,previewTranslateY:0,content:ae,speakingAnimations:{bounce:!1,glow:!1,shake:!0},preset:{direction:"row",wrap:"nowrap",justifyContent:"center",gap:20,avatarSize:120,baseFontSize:16,padding:30,borderRadius:20,backgroundColor:"rgba(0, 0, 0, 0.8)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"horizontal",name:"Horizontal",icon:"Horizontal",previewScale:.4,previewTranslateY:0,content:ie,speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"row",wrap:"nowrap",justifyContent:"flex-start",gap:5,avatarSize:64,baseFontSize:14,padding:10,borderRadius:0,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"vertical",name:"Vertical",icon:"Vertical",previewScale:.4,previewTranslateY:0,content:oe,speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"column",wrap:"nowrap",justifyContent:"flex-start",gap:10,avatarSize:80,baseFontSize:14,padding:20,borderRadius:0,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}}],j=R,m={en:{themes:"Presets",general:"General",layout:"Layout",themeCustom:"Preset Customization",globalSettings:"Size Settings",baseFontSize:"Base Font Size (px)",users:"Member Customization",addUser:"+ Add Member Setting",userId:"Member ID",displayName:"Display Name",userColor:"Color",avatarOverride:"Avatar (Upload/URL)",priority:"Sort",groupCss:"CSS Output",groupConfig:"Settings",cssPreview:"CSS Preview",animations:"Animations",speakingAnimation:"Speaking Animation",copyCss:"Copy CSS",saveCss:"Download .css",saveConfig:"Save .json",loadConfig:"Load .json",labelSave:"Save",labelLoad:"Load",labelConfig:"Config",themeHorizontal:"Horizontal",avatarSize:"Avatar Size",layoutSettings:"Layout Settings",spacing:"Spacing (Gap px)",direction:"Direction",wrap:"Wrapping",alignment:"Alignment (Start)",vertical:"Vertical",horizontal:"Horizontal",wrapOn:"Wrap",wrapOff:"No Wrap",alignStart:"Start",alignCenter:"Center",alignEnd:"End",toggleMetadata:"Show IDs",livePreview:"Live Preview",showAllUsers:"All",showOnlyRegistered:"Reg Only",visibility:"Visibility",hidden:"Hidden",copiedAction:"CSS copied to clipboard!",horizontal:"Circle",vertical:"Vertical",portrait:"Portrait",unlistedMembers:"Unlisted Members",unlistedShow:"Show",unlistedHide:"Hide (Whitelist Mode)",defaultColor:"Default Color",userListHeader:"Individual Settings",colVisibility:"Show?",commonSettings:"Common Settings"},ja:{themes:"プリセット",general:"プリセットカスタム",layout:"レイアウト",themeCustom:"プリセットカスタム",globalSettings:"サイズ設定",baseFontSize:"フォントサイズ",borderRadius:"角丸",hideNames:"名前を非表示",users:"メンバーカスタム",addUser:"+ メンバー設定追加",userId:"ユーザーID",displayName:"表示名",userColor:"色",avatarOverride:"画像 (URL/Upload)",priority:"順序",groupCss:"CSS出力",groupConfig:"設定",cssPreview:"CSSプレビュー",animations:"アニメーション",speakingAnimation:"話し中の動き",copyCss:"CSSをコピー",saveCss:"ファイル保存",saveConfig:"ファイル保存",loadConfig:"ファイル読込",labelSave:"保存",labelLoad:"読込",labelConfig:"設定",themeHorizontal:"横並び",avatarSize:"画像サイズ (px)",layoutSettings:"レイアウト設定",spacing:"間隔 (Gap px)",direction:"並ぶ向き",wrap:"折り返し",alignment:"始点 (揃え)",vertical:"縦",horizontal:"横",wrapOn:"あり",wrapOff:"なし",alignStart:"端 (Start)",alignCenter:"中央 (Center)",alignEnd:"端 (End)",toggleMetadata:"IDを表示",livePreview:"ライブプレビュー",showAllUsers:"全員",showOnlyRegistered:"登録のみ",visibility:"表示",hidden:"非表示リスト入り",copiedAction:"CSSをコピーしました！",horizontal:"サークル",vertical:"縦並びリスト",portrait:"ポートレート",unlistedMembers:"未設定のメンバー",unlistedShow:"表示する",unlistedHide:"表示しない (登録者のみ表示)",defaultColor:"未設定メンバーの色",userListHeader:"個別設定リスト",colVisibility:"表示",commonSettings:"共通設定",participantCount:"未設定のメンバーのプレビュー人数"}};function I(n){const{users:e,baseFontSize:t,avatarSize:o=100,gap:i=0,direction:r="row",wrap:s="nowrap",justifyContent:l="flex-start",themeId:u="horizontal",defaultColor:E="#ffffff",displayedUsers:h=[],padding:C=20,borderRadius:g=0,backgroundColor:y="rgba(0, 0, 0, 0)",nameBackgroundColor:_="rgba(30, 33, 36, 0.95)",shadowEnabled:J=!0,themeAnimations:Z={}}=n,$=j.find(d=>d.id===u)||j[0],L=Z[u]||$.speakingAnimations||{bounce:!0},Q=P(E,.4);let v=$.content;J||(v=v.replace(/box-shadow\s*:\s*[^;]+;/g,"box-shadow: none;")),v=v.replace(/border-radius\s*:\s*[^;]+;/g,"border-radius: var(--avatar-border-radius);");const O=Object.keys(L).filter(d=>L[d]);if(O.length>0){const d=O.map(k=>`${k}-anim 0.6s infinite`).join(", ");v=v.replace(/animation:\s*bounce-anim[^;]*/g,`animation: ${d}`)}else v=v.replace(/animation:\s*bounce-anim[^;]*/g,"animation: none");let p=`
/* --- Discord Streamkit Overlay Generated CSS --- */
/* Theme: ${$.name} */

body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0px;
  overflow: hidden;
}

/* Global Default Color */
:root {
  --user-color: ${E} !important;
  --user-color-alpha: ${Q} !important;
  --avatar-size: ${o}px !important;
  --base-font-size: ${t}px !important;
  --container-padding: ${C}px !important;
  --avatar-border-radius: ${g}px !important;
  --container-background-color: ${y} !important;
  --name-background-color: ${_} !important;
}

/* Global Layout & Sizes */
ul[class*="Voice_voiceStates"] {
  display: flex !important;
  flex-direction: ${r} !important;
  flex-wrap: ${s} !important;
  justify-content: ${l} !important;
  gap: ${i}px !important;
  width: 100% !important;
  height: auto !important;
  margin-left: 10px !important;
  margin-top: 10px !important;
  padding: var(--container-padding) !important; /* Padding for animation overflow in OBS */
  border-radius: var(--container-border-radius) !important;
  background-color: var(--container-background-color) !important;
}

span[class*="Voice_name"] {
  font-size: var(--base-font-size) !important;
  display: block;
}

li[class*="Voice_voiceState"] {
  align-items: center !important;
  margin: 0 !important; /* Reset legacy margins to favor Flex Gap */
}

img[class*="Voice_avatar"] {
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  margin: 0 !important; /* Reset legacy margins to favor Flex Gap */
}
`+v;const T=p.split("/* --- User Highlight --- */");let D=T[0];const z=T[1]||"";return n.onlyRegistered?p=D+`
/* Solo Mode: Hide all by default */
li[class*="Voice_voiceState"] {
  display: none !important;
}
`+z:p=D+z,[...h].sort((d,k)=>(d.priority??0)-(k.priority??0)).forEach((d,k)=>{if(!d.id)return;const f=String(d.id).replace(/[^a-zA-Z0-9_]/g,""),X=d.name||`User ${k+1}`,B=d.displayName&&d.displayName.trim()!==""?d.displayName:X;if(d.isHidden){p+=`
/* User ${B} is in Hide-list */
li[class*="Voice_voiceState"]:has(img[src*="${f}"]) {
  display: none !important;
}
`;return}const K=P(d.color,.4);let V=z.replace(/USER_ID/g,f).replace(/var\(--user-color\)/g,d.color).replace(/var\(--user-color-alpha\)/g,K).replace(/{{avatarSize}}/g,o);if(V+=`
/* Override custom name */
img[src*="${f}"] + div[class*="Voice_user"] span[class*="Voice_name"]::after {
  content: "${B}" !important;
  display: block !important;
  font-size: var(--base-font-size) !important;
}
img[src*="${f}"] + div[class*="Voice_user"] span[class*="Voice_name"] {
  font-size: 0 !important;
  height: auto !important;
}
`,d.avatarUrl){const ee=d.avatarUrl.includes("#id=")?d.avatarUrl:`${d.avatarUrl}#id=${f}`;V+=`
/* Override Avatar */
img[src*="${f}"] {
  content: url("${ee}") !important;
  object-fit: cover !important;
}
`}p+=`
/* User: ${B} */
`,n.onlyRegistered&&(p+=`li[class*="Voice_voiceState"]:has(img[src*="${f}"]) {
  display: flex !important;
}
`),p+=`${V}
`,n.onlyRegistered&&d.id.startsWith("unset_")&&(p+=`li[class*="Voice_voiceState"]:has(img[src*="${f}"]) {
  display: none !important;
}
`)}),n.hideNames&&(p+=`
/* Global Hide Names */
span[class*="Voice_name"] {
  display: none !important;
}
`),p+=G(L),p.trim()}function P(n,e){let t=0,o=0,i=0;return n.length===4?(t=parseInt(n[1]+n[1],16),o=parseInt(n[2]+n[2],16),i=parseInt(n[3]+n[3],16)):n.length===7&&(t=parseInt(n.substring(1,3),16),o=parseInt(n.substring(3,5),16),i=parseInt(n.substring(5,7),16)),`rgba(${t}, ${o}, ${i}, ${e})`}function G(n){let e="";return n.bounce&&(e+=`
@keyframes bounce-anim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`),n.glow&&(e+=`
@keyframes glow-anim {
  0%, 100% { filter: brightness(100%); }
  50% { filter: brightness(130%); }
}`),n.shake&&(e+=`
@keyframes shake-anim {
  0% { transform: rotate(0); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0); }
}`),e}function re(n){n.innerHTML=`
    <div class="Voice_voiceContainer voice_container">
      <ul class="Voice_voiceStates voice_states" id="simulator-list">
        <!-- Injected via state -->
      </ul>
    </div>
  `}function se(n){const e=document.getElementById("simulator-list");e&&(console.log("updateSimulator: users length:",n.length),e.innerHTML=n.map((t,o)=>{const i=t.name||`User ${o+1}`,r=t.displayName&&t.displayName.trim()!==""?t.displayName:i,s=t.avatarUrl?t.avatarUrl.includes("#id=")?t.avatarUrl:`${t.avatarUrl}#id=${t.id}`:`https://cdn.discordapp.com/embed/avatars/${o%6}.png#id=${t.id}`;return`
      <li class="Voice_voiceState voice_state" data-userid="${t.id}">
        <img class="Voice_avatar voice_avatar" src="${s}" style="object-fit: cover;" />
        <div class="Voice_user voice_username">
          <span class="Voice_name" style="color: rgb(255, 255, 255); font-size: 14px; background-color: rgba(30, 33, 36, 0.95);">${r}</span>
        </div>
      </li>
    `}).join(""),console.log("li count:",document.querySelectorAll("#simulator-list li").length))}function q(n,e){const t=document.querySelector(`#simulator-list [data-userid="${n}"]`);if(t){const o=t.querySelector(".Voice_avatar");o&&(e?(t.classList.add("wrapper_speaking"),o.classList.add("Voice_avatarSpeaking")):(t.classList.remove("wrapper_speaking"),o.classList.remove("Voice_avatarSpeaking")))}}function le(){const n=document.getElementById("simulator-list");n&&n.classList.toggle("show-metadata")}let a={users:[{id:"12345678901",displayName:"",avatarUrl:"",color:"#ff4b4b",priority:0},{id:"12345678902",displayName:"",avatarUrl:"",color:"#4b4bff",priority:1}],baseFontSize:14,avatarSize:100,gap:0,direction:"row",wrap:"nowrap",justifyContent:"flex-start",themeId:"circle",language:"ja",onlyRegistered:!1,hideNames:!1,defaultColor:"#ffffff",unsetUserCount:3,displayedUsers:[],padding:20,borderRadius:0,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,themeAnimations:{},isOverlayMode:new URLSearchParams(window.location.search).get("mode")==="overlay"};a.isOverlayMode&&document.body.classList.add("overlay-active");const w=document.getElementById("user-list"),M=document.getElementById("theme-selector"),de=document.getElementById("discord-simulator");function ce(){ue(),pe(),c(),me()}function ue(){N(),W(),x(),Y(),b(),re(de),H();const n=document.getElementById("toggle-unset-users");n.textContent=`Unset Users (${a.unsetUserCount})`}function pe(){ge(),ve(),fe(),be(),he(),ye()}function me(){function n(){const e=Array.from(document.querySelectorAll("#simulator-list [data-userid]")).map(t=>{const o=t.dataset.userid,i=a.displayedUsers.find(r=>r.id===o);return i&&!i.isHidden?i:null}).filter(Boolean);if(e.length>0){const t=e[Math.floor(Math.random()*e.length)];q(t.id,!0),F(t.id,!0);const o=1200+Math.random()*1800;setTimeout(()=>{q(t.id,!1),F(t.id,!1);const i=400+Math.random()*1e3;setTimeout(n,i)},o)}else setTimeout(n,1e3)}n()}function F(n,e){document.querySelectorAll(".theme-card").forEach(t=>{var i;const o=(i=t.querySelector(".theme-preview-container"))==null?void 0:i.shadowRoot;if(o){const r=o.querySelector('[data-userid="mini1"]'),s=r==null?void 0:r.querySelector(".Voice_avatar");r&&s&&(e?(r.classList.add("wrapper_speaking"),s.classList.add("Voice_avatarSpeaking")):(r.classList.remove("wrapper_speaking"),s.classList.remove("Voice_avatarSpeaking")))}})}function ge(){document.getElementById("add-user").addEventListener("click",()=>{a.users.push({id:Date.now().toString(),displayName:"",avatarUrl:"",color:"#ffffff",priority:a.users.length}),b(),c()});const n=document.getElementById("avatar-upload-base");let e=null;w.addEventListener("click",t=>{const o=t.target.closest(".btn-upload");o&&(e=o.dataset.userid,n.click())}),n.addEventListener("change",t=>{const o=t.target.files[0];if(o&&e){const i=new FileReader;i.onload=r=>{const s=r.target.result,l=a.users.findIndex(u=>u.id===e);l!==-1&&(a.users[l].avatarUrl=s,b(),c())},i.readAsDataURL(o)}t.target.value=""})}function U(n,e){const t=document.getElementById(n);t&&t.querySelectorAll(".toggle-btn").forEach(o=>{o.addEventListener("click",i=>{t.querySelectorAll(".toggle-btn").forEach(s=>s.classList.remove("active")),i.target.classList.add("active");const r=i.target.dataset.value;e==="shadowEnabled"?a[e]=r==="true":a[e]=e==="onlyRegistered"?r==="hide":r,console.log("toggle clicked",n,r,"stateKey",e,"new state value",a[e]),c()})})}function ve(){U("layout-direction-group","direction"),U("layout-wrap-group","wrap"),U("layout-align-group","justifyContent"),U("unlisted-toggle-group","onlyRegistered"),U("shadow-enabled-group","shadowEnabled")}function S(n,e,t){const o=document.getElementById(n),i=document.getElementById(e),r=s=>{if(a[t]=parseInt(s)||0,o.value=a[t],i.value=a[t],c(),t==="unsetUserCount"){const l=document.getElementById("toggle-unset-users");l.textContent=`Unset Users (${a.unsetUserCount})`}};o.addEventListener("input",s=>r(s.target.value)),i.addEventListener("input",s=>r(s.target.value))}function fe(){S("avatar-size","avatar-size-slider","avatarSize"),S("base-font-size","base-font-size-slider","baseFontSize"),S("container-padding","container-padding-slider","padding"),S("border-radius","border-radius-slider","borderRadius"),S("layout-gap","layout-gap-slider","gap"),S("unset-count","unset-count-slider","unsetUserCount"),(()=>{const e=document.getElementById("toggle-unset-users");e.textContent=`Unset Users (${a.unsetUserCount})`})(),document.getElementById("background-color").addEventListener("input",e=>{a.backgroundColor=e.target.value==="#000000"?"rgba(0, 0, 0, 0)":e.target.value,c()}),document.getElementById("name-background-color").addEventListener("input",e=>{const t=e.target.value,o=parseInt(t.substring(1,3),16),i=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16);a.nameBackgroundColor=`rgba(${o}, ${i}, ${r}, 0.95)`,c()}),document.getElementById("hide-names").addEventListener("change",e=>{a.hideNames=e.target.checked,c()})}function be(){document.querySelectorAll(".lang-btn").forEach(n=>{n.addEventListener("click",e=>{a.language=e.target.dataset.lang,document.querySelectorAll(".lang-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),N(),W(),x(),b(),c()})})}function he(){document.querySelectorAll(".sidebar-tab").forEach(n=>{n.addEventListener("click",e=>{const t=e.target.dataset.sidebarTab;document.querySelectorAll(".sidebar-tab").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),document.querySelectorAll(".sidebar-scroll").forEach(i=>{i.classList.remove("active"),i.style.display="none"});const o=document.getElementById(`sidebar-tab-${t}`);o.classList.add("active"),o.style.display="flex",t==="css"&&(document.getElementById("css-output").textContent=I(a))})})}function ye(){document.getElementById("toggle-debug").addEventListener("click",n=>{n.currentTarget.classList.toggle("active"),le()}),document.getElementById("toggle-unset-users").addEventListener("click",()=>{document.getElementById("unset-users-control").classList.toggle("hidden")}),document.getElementById("copy-css").addEventListener("click",()=>{const n=I(a);navigator.clipboard.writeText(n).then(()=>{const e=m[a.language].copiedAction||"Copied!";A(e)})}),document.getElementById("download-css").addEventListener("click",()=>{const n=I(a),e=new Blob([n],{type:"text/css"}),t=URL.createObjectURL(e),o=document.createElement("a");o.href=t,o.download="overlay.css",o.click(),URL.revokeObjectURL(t)}),document.getElementById("export-json").addEventListener("click",()=>{const n=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),e=URL.createObjectURL(n),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","overlay-config.json"),document.body.appendChild(t),t.click(),t.remove(),URL.revokeObjectURL(e)}),document.getElementById("import-json-btn").addEventListener("click",()=>{document.getElementById("import-json-input").click()}),document.getElementById("import-json-input").addEventListener("change",n=>{const e=n.target.files[0];if(!e){console.log("No file selected");return}const t=new FileReader;t.onload=o=>{try{console.log("File loaded, parsing JSON...");const i=JSON.parse(o.target.result);console.log("Parsed config:",i),a={...a,...i},console.log("State updated:",a),N(),H(),c(),x(),b(),A(m[a.language].loadConfig+" OK")}catch(i){console.error("JSON parse error:",i),A("Invalid JSON: "+i.message)}},t.readAsText(e),n.target.value=""})}function A(n){const e=document.createElement("div");e.className="notification",e.textContent=n,document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},2e3)}function Y(){const n=document.getElementById("theme-animation-settings");if(!n)return;const e=R.find(o=>o.id===a.themeId);if(!e)return;const t=a.themeAnimations[a.themeId]||e.speakingAnimations||{bounce:!0,glow:!1,shake:!1};n.innerHTML=`
    <div class="input-field horizontal">
      <label>Bounce</label>
      <div class="toggle-group" id="bounce-toggle-group">
        <button type="button" class="toggle-btn ${t.bounce?"active":""}" data-value="true">ON</button>
        <button type="button" class="toggle-btn ${t.bounce?"":"active"}" data-value="false">OFF</button>
      </div>
    </div>
    <div class="input-field horizontal">
      <label>Glow</label>
      <div class="toggle-group" id="glow-toggle-group">
        <button type="button" class="toggle-btn ${t.glow?"active":""}" data-value="true">ON</button>
        <button type="button" class="toggle-btn ${t.glow?"":"active"}" data-value="false">OFF</button>
      </div>
    </div>
    <div class="input-field horizontal">
      <label>Shake</label>
      <div class="toggle-group" id="shake-toggle-group">
        <button type="button" class="toggle-btn ${t.shake?"active":""}" data-value="true">ON</button>
        <button type="button" class="toggle-btn ${t.shake?"":"active"}" data-value="false">OFF</button>
      </div>
    </div>
  `,["bounce","glow","shake"].forEach(o=>{const i=document.getElementById(`${o}-toggle-group`);i&&i.querySelectorAll(".toggle-btn").forEach(r=>{r.addEventListener("click",s=>{i.querySelectorAll(".toggle-btn").forEach(u=>u.classList.remove("active")),s.target.classList.add("active");const l=s.target.dataset.value==="true";a.themeAnimations[a.themeId]||(a.themeAnimations[a.themeId]={...t}),a.themeAnimations[a.themeId][o]=l,x(),c()})})})}function x(){M.innerHTML="",R.forEach(n=>{const e=document.createElement("button");e.className=`theme-card ${a.themeId===n.id?"active":""}`,e.dataset.theme=n.id;const t=document.createElement("div");t.className="theme-preview-container";const o=t.attachShadow({mode:"open"}),r=[{id:"mini1",color:"#ff4b4b"}].map((g,y)=>`
      <li class="Voice_voiceState voice_state" data-userid="${g.id}">
        <img class="Voice_avatar voice_avatar Voice_avatarSpeaking" src="https://cdn.discordapp.com/embed/avatars/${y%6}.png#id=${g.id}" />
        <div class="Voice_user voice_username">
          <span class="Voice_name" style="color: rgb(255, 255, 255); font-size: 14px; background-color: rgba(30, 33, 36, 0.95);">User</span>
        </div>
      </li>
    `).join(""),[s,l]=n.content.includes("/* --- User Highlight --- */")?n.content.split("/* --- User Highlight --- */"):[n.content,""],u=a.themeAnimations[n.id]||n.speakingAnimations||{bounce:!0},E=Object.keys(u).filter(g=>u[g]);let h=s;if(E.length>0){const g=E.map(y=>`${y}-anim 0.6s infinite`).join(", ");h=h.replace(/animation:\s*bounce-anim[^;]*/g,`animation: ${g}`)}else h=h.replace(/animation:\s*bounce-anim[^;]*/g,"animation: none");o.innerHTML=`
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
        ul[class*="Voice_voiceStates"] {
          transform: scale(${n.previewScale||.4}) translateY(${n.previewTranslateY||0}px);
        }

        /* Preset Structural Styles */
        ${h}

        /* Preset User Styles (Mocked for mini1) */
        ${l.replace(/USER_ID/g,"mini1").replace(/var\(--user-color\)/g,"#ff4b4b").replace(/var\(--user-color-alpha\)/g,"rgba(255, 75, 75, 0.4)")}

        /* Animation CSS */
        ${G(u)}
      </style>
      <ul class="Voice_voiceStates voice-states">
        ${r}
      </ul>
    `,e.appendChild(t);const C=document.createElement("span");C.className="theme-name",C.textContent=n.name,e.appendChild(C),e.addEventListener("click",()=>{a.themeId=n.id;const{unsetUserCount:g,...y}=n.preset;Object.assign(a,y),H(),document.querySelectorAll(".theme-card").forEach(_=>_.classList.remove("active")),e.classList.add("active"),Y(),c()}),M.appendChild(e)})}function b(){w.innerHTML="",[...a.users].map((e,t)=>({...e,originalIndex:t})).sort((e,t)=>(e.priority??0)-(t.priority??0)).forEach((e,t)=>{const o=document.createElement("div");o.className="user-item user-table-grid",o.innerHTML=`
      <button class="visibility-toggle ${e.isHidden?"hidden":""}" data-userid="${e.id}" title="${m[a.language].visibility}">
        <span class="material-symbols-rounded">${e.isHidden?"visibility_off":"visibility"}</span>
      </button>
      <input type="text" value="${e.id}" data-type="id" data-userid="${e.id}" placeholder="${m[a.language].userId}" title="${m[a.language].userId}" />
      <input type="text" value="${e.displayName||""}" data-type="displayName" data-userid="${e.id}" placeholder="上書きする場合のみ入力" title="${m[a.language].displayName}" ${e.isHidden?"disabled":""} />
      
      <div class="avatar-input-container">
        <img src="${e.avatarUrl||"https://cdn.discordapp.com/embed/avatars/0.png"}" class="avatar-preview" id="preview-${e.id}" />
        <input type="text" value="${e.avatarUrl||""}" data-type="avatarUrl" data-userid="${e.id}" class="avatar-url-input" placeholder="URL / DataURI" title="${m[a.language].avatarOverride}" ${e.isHidden?"disabled":""} />
        <button class="btn-upload" data-userid="${e.id}" title="Upload Image" ${e.isHidden?"disabled":""}>
          <span class="material-symbols-rounded" style="font-size: 16px;">upload_file</span>
        </button>
      </div>

      <input type="number" value="${e.priority??t}" data-type="priority" data-userid="${e.id}" placeholder="0" title="${m[a.language].priority}" ${e.isHidden?"disabled":""} />
      <input type="color" value="${e.color}" data-type="color" data-userid="${e.id}" title="${m[a.language].userColor}" ${e.isHidden?"disabled":""} />

      <div class="user-actions">
        <span class="remove-user" data-userid="${e.id}">&times;</span>
      </div>
    `,w.appendChild(o)}),w.querySelectorAll("input").forEach(e=>{e.addEventListener("input",t=>{const o=t.target.dataset.type,i=t.target.dataset.userid,r=a.users.findIndex(l=>l.id===i);if(r===-1)return;let s=t.target.value;if(o==="priority"&&(s=parseInt(s)||0),a.users[r][o]=s,o==="avatarUrl"){const l=document.getElementById(`preview-${i}`);l&&(l.src=s||"https://cdn.discordapp.com/embed/avatars/0.png")}o==="priority"&&b(),c()})}),w.querySelectorAll(".remove-user").forEach(e=>{e.addEventListener("click",t=>{const o=t.target.dataset.userid,i=a.users.findIndex(r=>r.id===o);i!==-1&&(a.users.splice(i,1),b(),c())})}),w.querySelectorAll(".visibility-toggle").forEach(e=>{e.addEventListener("click",t=>{const o=t.target.dataset.userid||t.target.parentElement.dataset.userid,i=a.users.findIndex(r=>r.id===o);i!==-1&&(a.users[i].isHidden=!a.users[i].isHidden,b(),c())})})}function N(){const n=m[a.language];document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.dataset.i18n;if(n[t]){if(e.querySelector(".material-symbols-rounded"))return;e.textContent=n[t]}}),window.copiedMessage=n.copiedAction}function W(){const n=m[a.language];document.getElementById("copy-css").title=n.copyCss,document.getElementById("download-css").title=n.saveCss,document.getElementById("export-json").title=n.saveConfig,document.getElementById("import-json-btn").title=n.loadConfig}function H(){document.getElementById("avatar-size").value=a.avatarSize,document.getElementById("avatar-size-slider").value=a.avatarSize,document.getElementById("base-font-size").value=a.baseFontSize,document.getElementById("base-font-size-slider").value=a.baseFontSize,document.getElementById("container-padding").value=a.padding,document.getElementById("container-padding-slider").value=a.padding,document.getElementById("border-radius").value=a.borderRadius,document.getElementById("border-radius-slider").value=a.borderRadius,document.getElementById("layout-gap").value=a.gap,document.getElementById("layout-gap-slider").value=a.gap,document.getElementById("unset-count").value=a.unsetUserCount,document.getElementById("unset-count-slider").value=a.unsetUserCount;function n(o,i){const r=document.getElementById(o);r&&r.querySelectorAll(".toggle-btn").forEach(s=>{s.dataset.value===i?s.classList.add("active"):s.classList.remove("active")})}n("layout-direction-group",a.direction),n("layout-wrap-group",a.wrap),n("layout-align-group",a.justifyContent),n("shadow-enabled-group",a.shadowEnabled?"true":"false"),document.getElementById("hide-names").checked=a.hideNames;const e=document.getElementById("default-color");e&&(e.value=a.defaultColor||"#ffffff");const t=document.getElementById("unlisted-toggle-group");if(t){const o=a.onlyRegistered?"hide":"show";t.querySelectorAll(".toggle-btn").forEach(i=>{i.dataset.value===o?i.classList.add("active"):i.classList.remove("active")})}document.querySelectorAll(".lang-btn").forEach(o=>{o.classList.toggle("active",o.dataset.lang===a.language)})}function c(){const e=[...[...a.users].sort((l,u)=>(l.priority??0)-(u.priority??0))],t=[];for(let l=0;l<a.unsetUserCount;l++)t.push({id:`unset_${l}`,name:`Unset${l+1}`,color:a.defaultColor,priority:100+l,isHidden:!1});e.push(...t),console.log("applyStyles: displayedUsers length:",e.length,"unsetUsers length:",t.length,"onlyRegistered:",a.onlyRegistered),console.log("state:",a);const o=I(a);let i=document.getElementById("generated-styles");i||(i=document.createElement("style"),i.id="generated-styles",document.head.appendChild(i)),i.textContent=o;let r=document.getElementById("preview-styles");if(!r){r=document.createElement("style"),r.id="preview-styles";const l=document.getElementById("discord-simulator");l&&l.appendChild(r)}r&&(r.textContent=o);const s=document.getElementById("css-output");s&&(s.textContent=o),a.displayedUsers=e,se(e)}ce();
