(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const ve=`/* Theme: Circle */

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
  border-radius: var(--avatar-border-radius) !important;
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
li[class*="Voice_voiceState"][data-userid="USER_ID"] img[class*="Voice_avatar"],
img[src*="USER_ID"][class*="Voice_avatar"] {
  box-shadow: 0 0 0 4px var(--user-color);
}

/* --- User Speaking --- */
li[class*="Voice_voiceState"][data-userid="USER_ID"].wrapper_speaking img[class*="Voice_avatar"],
li[class*="Voice_voiceState"][data-userid="USER_ID"] img[class*="Voice_avatar"][class*="Voice_avatarSpeaking"],
img[src*="USER_ID"][class*="Voice_avatar"][class*="Voice_avatarSpeaking"],
img[src*="USER_ID"][class*="Voice_avatar"].speaking {
  filter: brightness(100%);
  border: none !important; /* Remove Discord's default green border */
  box-shadow: 0 0 0 4px var(--user-color), 0 0 0 16px var(--user-color-alpha);
  animation: bounce-anim 0.6s infinite !important;
}
`,fe=`/* Theme: Portrait Icon */

/* --- Container --- */
ul[class^="Voice_voiceStates"] {
  display: flex;
}

/* --- User Base --- */
li[class^="Voice_voiceState"] {
  position: relative;
  display: block !important;
  width: var(--avatar-size);
  height: calc(var(--avatar-size) * 1.35);
  padding: 0;
  overflow: visible;
}

/* Avatar Base Style */
img[class*="Voice_avatar"] {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
  border: none !important;
  border-radius: 0;
  filter: brightness(62%);
  transition: filter 0.18s ease, transform 0.18s ease;
}

/* Name Container */
div[class^="Voice_user"] {
  position: absolute !important;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}

/* Name Style */
span[class^="Voice_name"] {
  display: block;
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  padding: 3px 7px !important;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.68) !important;
  color: white !important;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}

/* --- User Highlight --- */
li[class^="Voice_voiceState"][data-userid="USER_ID"] img[class*="Voice_avatar"] {
  filter: brightness(62%) drop-shadow(0 0 8px var(--user-color-alpha));
}

li[class^="Voice_voiceState"]:has(img[src*="USER_ID"]) img[class*="Voice_avatar"] {
  filter: brightness(62%) drop-shadow(0 0 8px var(--user-color-alpha));
}

/* --- User Speaking --- */
li[class^="Voice_voiceState"][data-userid="USER_ID"].wrapper_speaking img[class*="Voice_avatar"],
img[src*="USER_ID"][class*="Voice_avatarSpeaking"] {
  filter: brightness(100%) drop-shadow(0 0 14px var(--user-color));
  animation: bounce-anim 0.6s infinite !important;
}

li[class^="Voice_voiceState"]:has(img[src*="USER_ID"][class*="Voice_avatarSpeaking"]) img[class*="Voice_avatar"] {
  filter: brightness(100%) drop-shadow(0 0 14px var(--user-color));
}
`,be=`/* Theme: Square Card */

/* --- Container --- */
ul[class^="Voice_voiceStates"] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--avatar-size), 1fr));
}

/* --- User Base --- */
li[class^="Voice_voiceState"] {
  position: relative;
  width: var(--avatar-size);
  height: var(--avatar-size);
  overflow: hidden;
  border-radius: var(--container-border-radius);
  background: rgba(0, 0, 0, 0.5);
  display: grid !important;
  grid-template-rows: minmax(0, 1fr) auto;
  align-items: stretch !important;
}

/* Avatar Base Style */
img[class*="Voice_avatar"] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  border: none !important;
  grid-row: 1;
  min-height: 0;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: brightness(60%);
}

/* Name Style */
div[class^="Voice_user"] {
  display: block !important;
  grid-row: 2;
  min-width: 0;
}

span[class^="Voice_name"] {
  position: static;
  display: block;
  width: 100%;
  background: rgba(0, 0, 0, 0.8) !important;
  padding: 4px !important;
  word-break: keep-all;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 1));
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}

/* --- User Highlight --- */
li[class^="Voice_voiceState"][data-userid="USER_ID"] {
  border: 2px solid var(--user-color);
}

li[class^="Voice_voiceState"]:has(img[src*="USER_ID"]) {
  border: 2px solid var(--user-color);
}

/* --- User Speaking --- */
li[class^="Voice_voiceState"][data-userid="USER_ID"].wrapper_speaking img[class*="Voice_avatar"],
li[class^="Voice_voiceState"][data-userid="USER_ID"] img[class*="Voice_avatarSpeaking"],
img[src*="USER_ID"][class*="Voice_avatarSpeaking"] {
  transform: scale(1.05);
  filter: brightness(100%);
  animation: bounce-anim 0.6s infinite !important;
}

li[class^="Voice_voiceState"][data-userid="USER_ID"].wrapper_speaking {
  box-shadow: 0 0 15px var(--user-color);
}

li[class^="Voice_voiceState"]:has(img[src*="USER_ID"][class*="Voice_avatarSpeaking"]) {
  box-shadow: 0 0 15px var(--user-color);
}
`,he=`/* Theme: Horizontal (Standard) */

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
  border-radius: var(--avatar-border-radius) !important;
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
  border-radius: var(--container-border-radius) !important;
  color: white !important;
  font-size: 16px !important; /* Will be overridden by generator */
  text-align: left !important;
}

/* --- User Highlight --- */
/* User Color applies to Name Background in this theme */
li[class^="Voice_voiceState"][data-userid="USER_ID"] img[class*="Voice_avatar"] + div[class^="Voice_user"] span[class^="Voice_name"],
img[src*="USER_ID"] + div[class^="Voice_user"] span[class^="Voice_name"] {
  background-color: var(--user-color) !important;
  color: white !important; /* Ensure text is visible on color */
  text-shadow: 0px 1px 2px rgba(0,0,0,0.8);
}

/* --- User Speaking --- */
li[class^="Voice_voiceState"][data-userid="USER_ID"].wrapper_speaking img[class*="Voice_avatar"],
li[class^="Voice_voiceState"][data-userid="USER_ID"] img[class*="Voice_avatarSpeaking"],
img[src*="USER_ID"][class*="Voice_avatarSpeaking"] {
  border-color: var(--user-color) !important;
  box-shadow: 0 0 0 3px var(--user-color);
  animation: bounce-anim 0.6s infinite ease-in-out !important;
  filter: brightness(100%) !important;
}
`,ye=`/* Theme: Vertical */

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
  border-radius: var(--avatar-border-radius);
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
li[class^="Voice_voiceState"][data-userid="USER_ID"] img[class*="Voice_avatar"],
img[src*="USER_ID"][class*="Voice_avatar"] {
  box-shadow: 0 0 0 3px var(--user-color);
}

/* --- User Speaking --- */
li[class^="Voice_voiceState"][data-userid="USER_ID"].wrapper_speaking img[class*="Voice_avatar"],
li[class^="Voice_voiceState"][data-userid="USER_ID"] img[class*="Voice_avatarSpeaking"],
img[src*="USER_ID"][class*="Voice_avatarSpeaking"] {
  filter: brightness(100%);
  box-shadow: 0 0 0 3px var(--user-color), 0 0 12px var(--user-color-alpha);
  animation: bounce-anim 0.6s infinite !important;
}
`,N=[{id:"circle",name:"Circle",icon:"Circle",previewScale:.32,previewTranslateY:0,content:ve,cssPath:"src/themes/circle.css",preview:"/src/assets/themes/circle.png",speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"row",wrap:"wrap",justifyContent:"flex-start",gap:10,avatarSize:100,baseFontSize:14,padding:20,borderRadius:50,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!0,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"actor",name:"Actor",icon:"Actor",previewScale:.3,previewTranslateY:0,content:be,speakingAnimations:{bounce:!0,glow:!0,shake:!1},preset:{direction:"row",wrap:"nowrap",justifyContent:"center",gap:20,avatarSize:120,baseFontSize:16,padding:30,borderRadius:10,backgroundColor:"rgba(0, 0, 0, 0.5)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"horizontal",name:"Horizontal",icon:"Horizontal",previewScale:.46,previewTranslateY:0,content:he,speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"row",wrap:"nowrap",justifyContent:"flex-start",gap:5,avatarSize:64,baseFontSize:14,padding:10,borderRadius:50,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"vertical",name:"Vertical",icon:"Vertical",previewScale:.36,previewTranslateY:0,content:ye,speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"column",wrap:"nowrap",justifyContent:"flex-start",gap:10,avatarSize:80,baseFontSize:14,padding:20,borderRadius:50,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"portrait",name:"Portrait",icon:"Portrait",previewScale:.36,previewTranslateY:0,content:fe,speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"row",wrap:"nowrap",justifyContent:"flex-start",gap:8,avatarSize:140,baseFontSize:12,padding:24,borderRadius:0,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!0,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}}],ae=N,y={en:{themes:"Presets",general:"General",layout:"Layout",themeCustom:"Preset Customization",globalSettings:"Size Settings",baseFontSize:"Base Font Size (px)",users:"Member Customization",addUser:"+ Add Member Setting",userId:"Member ID",displayName:"Display Name",userColor:"Color",avatarOverride:"Avatar (Upload/URL)",priority:"Sort",groupCss:"CSS Output",groupConfig:"Settings",cssPreview:"CSS Preview",animations:"Animations",speakingAnimation:"Speaking Animation",copyCss:"Copy CSS",saveCss:"Download .css",saveConfig:"Save .json",saveBundle:"Save CSS + Settings",loadConfig:"Load .json",labelSave:"Save",labelLoad:"Load",labelConfig:"Config",themeHorizontal:"Horizontal",avatarSize:"Avatar Size",layoutSettings:"Layout Settings",spacing:"Spacing (Gap px)",direction:"Direction",directionRow:"Horizontal",directionColumn:"Vertical",wrap:"Wrapping",alignment:"Alignment (Start)",vertical:"Vertical",horizontal:"Horizontal",wrapOn:"Wrap",wrapOff:"No Wrap",alignStart:"Start",alignCenter:"Center",alignEnd:"End",toggleMetadata:"Show IDs",livePreview:"Live Preview",showAllUsers:"All",showOnlyRegistered:"Reg Only",visibility:"Visibility",hidden:"Hidden",copiedAction:"CSS copied to clipboard!",horizontal:"Circle",vertical:"Vertical",portrait:"Portrait",unlistedMembers:"Unlisted Members",unlistedShow:"Show",unlistedHide:"Hide (Whitelist Mode)",defaultColor:"Default Color",userListHeader:"Individual Settings",colVisibility:"Show?",commonSettings:"Common Settings",preset_circle:"Avatar Only",preset_portrait:"Portrait Icon",preset_actor:"Square Avatar",preset_horizontal:"Name Badge",preset_vertical:"Voice List"},ja:{themes:"プリセット",general:"プリセットカスタム",layout:"レイアウト",themeCustom:"プリセットカスタム",globalSettings:"サイズ設定",baseFontSize:"フォントサイズ",borderRadius:"角丸",hideNames:"名前を非表示",users:"メンバーカスタム",addUser:"+ メンバー設定追加",userId:"ユーザーID",displayName:"表示名",userColor:"色",avatarOverride:"画像 (URL/Upload)",priority:"順序",groupCss:"CSS書き出し",groupConfig:"設定保存/読込",cssPreview:"CSSプレビュー",animations:"アニメーション",speakingAnimation:"話し中の動き",copyCss:"CSSをコピー",saveCss:"ファイル保存",saveConfig:"ファイル保存",saveBundle:"CSSと設定を保存",loadConfig:"ファイル読込",labelSave:"保存",labelLoad:"読込",labelConfig:"設定",themeHorizontal:"横並び",avatarSize:"画像サイズ (px)",layoutSettings:"レイアウト設定",spacing:"間隔 (Gap px)",direction:"並ぶ向き",directionRow:"横",directionColumn:"縦",wrap:"折り返し",alignment:"始点 (揃え)",vertical:"縦",horizontal:"横",wrapOn:"あり",wrapOff:"なし",alignStart:"端 (Start)",alignCenter:"中央 (Center)",alignEnd:"端 (End)",toggleMetadata:"IDを表示",livePreview:"ライブプレビュー",showAllUsers:"全員",showOnlyRegistered:"登録のみ",visibility:"表示",hidden:"非表示リスト入り",copiedAction:"CSSをコピーしました！",horizontal:"サークル",vertical:"縦並びリスト",portrait:"ポートレート",unlistedMembers:"未設定のメンバー",unlistedShow:"表示する",unlistedHide:"表示しない (登録者のみ表示)",defaultColor:"未設定メンバーの色",userListHeader:"個別設定リスト",colVisibility:"表示",commonSettings:"共通設定",participantCount:"未設定のメンバーのプレビュー人数",preset_circle:"丸アイコン",preset_portrait:"立ち絵アイコン",preset_actor:"四角アイコン",preset_horizontal:"名前バッジ",preset_vertical:"通話リスト"}};function F(t){const{users:e,baseFontSize:a,avatarSize:r=100,gap:n=0,direction:o="row",wrap:s="nowrap",justifyContent:l="flex-start",themeId:u="horizontal",defaultColor:v="#ffffff",displayedUsers:f=[],padding:C=20,borderRadius:S=0,backgroundColor:m="rgba(0, 0, 0, 0)",nameBackgroundColor:B="rgba(30, 33, 36, 0.95)",shadowEnabled:p=!0,themeAnimations:se={}}=t,H=ae.find(d=>d.id===u)||ae[0],O=se[u]||H.speakingAnimations||{bounce:!0},le=S>=50?"999px":`${S}px`,de=ne(v,.4);let w=H.content;p||(w=w.replace(/box-shadow\s*:\s*[^;]+;/g,"box-shadow: none;"));const Z=Object.keys(O).filter(d=>O[d]);if(Z.length>0){const d=Z.map(_=>`${_}-anim 0.6s infinite`).join(", ");w=w.replace(/animation:\s*bounce-anim[^;]*/g,`animation: ${d}`)}else w=w.replace(/animation:\s*bounce-anim[^;]*/g,"animation: none");const ce=Se(w);let h=`
/* --- Discord Streamkit Overlay Generated CSS --- */
/* Theme: ${H.name} */

body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0px;
  overflow: hidden;
}

/* Global Default Color */
:root {
  --user-color: ${v} !important;
  --user-color-alpha: ${de} !important;
  --avatar-size: ${r}px !important;
  --base-font-size: ${a}px !important;
  --container-padding: ${C}px !important;
  --avatar-border-radius: ${le} !important;
  --container-border-radius: ${S}px !important;
  --container-background-color: ${m} !important;
  --name-background-color: ${B} !important;
}

/* Global Layout & Sizes */
ul[class*="Voice_voiceStates"] {
  display: flex !important;
  flex-direction: ${o} !important;
  flex-wrap: ${s} !important;
  justify-content: ${l} !important;
  gap: ${n}px !important;
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
`+w;const X=h.split("/* --- User Highlight --- */");let Q=X[0];const T=X[1]||"";return t.onlyRegistered?h=Q+`
/* Solo Mode: Hide all by default */
li[class*="Voice_voiceState"] {
  display: none !important;
}
`+T:h=Q+T,[...f.length>0?f:e].filter(d=>!String(d.id).startsWith("unset_")).sort((d,_)=>(d.priority??0)-(_.priority??0)).forEach((d,_)=>{if(!d.id)return;const P=String(d.id),k=j(P),V=`li[class*="Voice_voiceState"][data-userid="${k}"]`,$=`li[class*="Voice_voiceState"]:has(img[src*="${k}"])`,pe=d.name||`User ${_+1}`,K=d.displayName&&d.displayName.trim()!==""?d.displayName:pe,ue=j(K),ee=we(K);if(d.isHidden){h+=`
/* User ${ee} is in Hide-list */
${z(V,$,"display: none !important;")}
`;return}const te=ne(d.color,.4),ge=`--user-color: ${d.color} !important;
  --user-color-alpha: ${te} !important;`;let A=T.replace(/USER_ID/g,k).replace(/var\(--user-color\)/g,d.color).replace(/var\(--user-color-alpha\)/g,te).replace(/{{avatarSize}}/g,r);if(A+=`
/* Override custom name */
img[src*="${k}"] + div[class*="Voice_user"] span[class*="Voice_name"]::after {
  content: "${ue}" !important;
  display: block !important;
  font-size: var(--base-font-size) !important;
}
img[src*="${k}"] + div[class*="Voice_user"] span[class*="Voice_name"] {
  font-size: 0 !important;
  height: auto !important;
}
`,A+=`
/* Order override */
${z(V,$,`order: ${_} !important;`)}
`,d.avatarUrl){const me=d.avatarUrl.includes("#id=")?d.avatarUrl:`${d.avatarUrl}#id=${encodeURIComponent(P)}`;A+=`
/* Override Avatar */
img[src*="${k}"] {
  content: url("${j(me)}") !important;
  object-fit: cover !important;
}
`}h+=`
/* User: ${ee} */
`,h+=z(V,$,ge)+`
`,t.onlyRegistered&&(h+=z(V,$,`display: ${ce} !important;`)+`
`),h+=`${A}
`,t.onlyRegistered&&P.startsWith("unset_")&&(h+=z(V,$,"display: none !important;")+`
`)}),t.hideNames&&(h+=`
/* Global Hide Names */
span[class*="Voice_name"] {
  display: none !important;
}
`),h+=xe(O),h.trim()}function Se(t){const e=t.match(/li\[class[\*\^]?="Voice_voiceState"\]\s*\{[^}]*display\s*:\s*([^;!]+)(?:\s*!important)?\s*;/);return e?e[1].trim():"flex"}function z(t,e,a){return`${t} {
  ${a}
}
@supports selector(:has(*)) {
  ${e} {
    ${a}
  }
}`}function j(t){return String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\A ").replace(/\r/g,"")}function we(t){return String(t).replace(/\*\//g,"* /").replace(/\r?\n/g," ")}function ne(t,e){let a=0,r=0,n=0;return t.length===4?(a=parseInt(t[1]+t[1],16),r=parseInt(t[2]+t[2],16),n=parseInt(t[3]+t[3],16)):t.length===7&&(a=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),n=parseInt(t.substring(5,7),16)),`rgba(${a}, ${r}, ${n}, ${e})`}function xe(t){let e="";return t.bounce&&(e+=`
@keyframes bounce-anim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`),t.glow&&(e+=`
@keyframes glow-anim {
  0%, 100% { filter: brightness(100%); }
  50% { filter: brightness(130%); }
}`),t.shake&&(e+=`
@keyframes shake-anim {
  0% { transform: rotate(0); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0); }
}`),e}function Ee(t){t.innerHTML=`
    <div class="Voice_voiceContainer voice_container">
      <ul class="Voice_voiceStates voice_states" id="simulator-list">
        <!-- Injected via state -->
      </ul>
    </div>
  `}function Ce(t){const e=document.getElementById("simulator-list");e&&(e.innerHTML=t.map((a,r)=>{const n=a.name||`User ${r+1}`,o=a.displayName&&a.displayName.trim()!==""?a.displayName:n,s=a.avatarUrl?a.avatarUrl.includes("#id=")?a.avatarUrl:`${a.avatarUrl}#id=${a.id}`:`https://cdn.discordapp.com/embed/avatars/${r%6}.png#id=${a.id}`;return`
      <li class="Voice_voiceState voice_state" data-userid="${q(a.id)}">
        <img class="Voice_avatar voice_avatar" src="${q(s)}" style="object-fit: cover;" />
        <div class="Voice_user voice_username">
          <span class="Voice_name" style="color: rgb(255, 255, 255); font-size: 14px; background-color: rgba(30, 33, 36, 0.95);">${_e(o)}</span>
        </div>
      </li>
    `}).join(""))}function R(t,e){const a=document.querySelector(`#simulator-list [data-userid="${ke(t)}"]`);if(a){const r=a.querySelector(".Voice_avatar");r&&(e?(a.classList.add("wrapper_speaking"),r.classList.add("Voice_avatarSpeaking")):(a.classList.remove("wrapper_speaking"),r.classList.remove("Voice_avatarSpeaking")))}}function q(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _e(t){return q(t).replace(/'/g,"&#39;")}function ke(t){return String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Ue(){const t=document.getElementById("simulator-list");t&&t.classList.toggle("show-metadata")}let i={users:[{id:"12345678901",displayName:"",avatarUrl:"",color:"#ff4b4b",priority:0},{id:"12345678902",displayName:"",avatarUrl:"",color:"#4b4bff",priority:1}],baseFontSize:14,avatarSize:100,gap:0,direction:"row",wrap:"nowrap",justifyContent:"flex-start",themeId:"circle",language:"ja",onlyRegistered:!1,hideNames:!1,defaultColor:"#ffffff",unsetUserCount:3,displayedUsers:[],padding:20,borderRadius:0,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,themeAnimations:{},filePrefix:new Date().toISOString().slice(0,10).replace(/-/g,""),isOverlayMode:new URLSearchParams(window.location.search).get("mode")==="overlay"};i.isOverlayMode&&document.body.classList.add("overlay-active");const I=document.getElementById("user-list"),ie=document.getElementById("theme-selector"),Ie=document.getElementById("discord-simulator");let x=null;function Ve(){$e(),Le(),g(),Be()}function $e(){J(),oe(),Y(),ze(),W(),E(),Ee(Ie),D();const t=document.getElementById("toggle-unset-users");t.textContent=`Unset Users (${i.unsetUserCount})`}function ze(){const t=N.find(e=>e.id===i.themeId);if(t){const{unsetUserCount:e,...a}=t.preset;Object.assign(i,a),D(),W(),g()}}function Le(){Ae(),Re(),Ne(),De(),He(),Ye()}function Be(){function t(){x&&(R(x,!1),x=null);const e=Array.from(document.querySelectorAll("#simulator-list [data-userid]")).map(a=>{const r=a.dataset.userid,n=i.displayedUsers.find(o=>o.id===r);return n&&!n.isHidden?n:null}).filter(Boolean);if(e.length>0){const a=e[Math.floor(Math.random()*e.length)];x=a.id,R(a.id,!0);const r=1800+Math.random()*1200;setTimeout(()=>{R(x,!1),x=null;const n=400+Math.random()*1e3;setTimeout(t,n)},r)}else setTimeout(t,1e3)}t()}function Ae(){document.getElementById("add-user").addEventListener("click",()=>{i.users.push({id:Date.now().toString(),displayName:"",avatarUrl:"",color:"#ffffff",priority:i.users.length}),E(),g()});const t=document.getElementById("avatar-upload-base");let e=null;I.addEventListener("click",a=>{const r=a.target.closest(".btn-upload");r&&(e=Number(r.dataset.index),t.click())}),t.addEventListener("change",a=>{const r=a.target.files[0];if(r&&Number.isInteger(e)){const n=new FileReader;n.onload=o=>{const s=o.target.result;i.users[e]&&(i.users[e].avatarUrl=s,E(),g())},n.readAsDataURL(r)}a.target.value=""})}function L(t,e){const a=document.getElementById(t);a&&a.querySelectorAll(".toggle-btn").forEach(r=>{r.addEventListener("click",n=>{a.querySelectorAll(".toggle-btn").forEach(s=>s.classList.remove("active")),n.target.classList.add("active");const o=n.target.dataset.value;e==="shadowEnabled"?i[e]=o==="true":i[e]=e==="onlyRegistered"?o==="hide":o,g()})})}function Re(){L("layout-direction-group","direction"),L("layout-wrap-group","wrap"),L("layout-align-group","justifyContent"),L("unlisted-toggle-group","onlyRegistered"),L("shadow-enabled-group","shadowEnabled")}function U(t,e,a){const r=document.getElementById(t),n=document.getElementById(e),o=s=>{if(i[a]=parseInt(s)||0,r.value=i[a],n.value=i[a],g(),a==="unsetUserCount"){const l=document.getElementById("toggle-unset-users");l.textContent=`Unset Users (${i.unsetUserCount})`}};r.addEventListener("input",s=>o(s.target.value)),n.addEventListener("input",s=>o(s.target.value))}function Ne(){U("avatar-size","avatar-size-slider","avatarSize"),U("base-font-size","base-font-size-slider","baseFontSize"),U("container-padding","container-padding-slider","padding"),U("border-radius","border-radius-slider","borderRadius"),U("layout-gap","layout-gap-slider","gap"),U("unset-count","unset-count-slider","unsetUserCount"),(()=>{const e=document.getElementById("toggle-unset-users");e.textContent=`Unset Users (${i.unsetUserCount})`})(),document.getElementById("file-prefix").addEventListener("input",e=>{i.filePrefix=e.target.value}),document.getElementById("background-color").addEventListener("input",e=>{i.backgroundColor=e.target.value==="#000000"?"rgba(0, 0, 0, 0)":e.target.value,g()}),document.getElementById("name-background-color").addEventListener("input",e=>{const a=e.target.value,r=parseInt(a.substring(1,3),16),n=parseInt(a.substring(3,5),16),o=parseInt(a.substring(5,7),16);i.nameBackgroundColor=`rgba(${r}, ${n}, ${o}, 0.95)`,g()}),document.getElementById("hide-names").addEventListener("change",e=>{i.hideNames=e.target.checked,g()}),document.getElementById("default-color").addEventListener("input",e=>{i.defaultColor=e.target.value,g()})}function De(){document.querySelectorAll(".lang-btn").forEach(t=>{t.addEventListener("click",e=>{i.language=e.target.dataset.lang,document.querySelectorAll(".lang-btn").forEach(a=>a.classList.remove("active")),e.target.classList.add("active"),J(),oe(),Y(),E(),g()})})}function He(){document.querySelectorAll(".mode-rail-btn").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.paneTarget;document.querySelectorAll(".mode-rail-btn").forEach(a=>{a.classList.toggle("active",a===t)}),document.querySelectorAll(".pane-panel").forEach(a=>{a.classList.toggle("active",a.dataset.pane===e)})})})}function Oe(){return i.filePrefix+"_discordpyoko.css"}function Te(){return i.filePrefix+"_discordpyoko-setting.json"}function Pe(){return i.filePrefix+"_discordpyoko.zip"}function je(){const{displayedUsers:t,isOverlayMode:e,...a}=i;return a}function Me(t,e){const a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=e,r.click(),URL.revokeObjectURL(a)}const Fe=(()=>{const t=new Uint32Array(256);for(let e=0;e<256;e++){let a=e;for(let r=0;r<8;r++)a=a&1?3988292384^a>>>1:a>>>1;t[e]=a>>>0}return t})();function qe(t){let e=4294967295;for(const a of t)e=Fe[(e^a)&255]^e>>>8;return(e^4294967295)>>>0}function c(t,e,a){t.setUint16(e,a,!0)}function b(t,e,a){t.setUint32(e,a,!0)}function Ge(t){const e=new TextEncoder,a=[],r=[];let n=0;t.forEach(u=>{const v=e.encode(u.name),f=e.encode(u.content),C=qe(f),S=new ArrayBuffer(30),m=new DataView(S);b(m,0,67324752),c(m,4,20),c(m,6,0),c(m,8,0),c(m,10,0),c(m,12,0),b(m,14,C),b(m,18,f.length),b(m,22,f.length),c(m,26,v.length),c(m,28,0),a.push(S,v,f);const B=new ArrayBuffer(46),p=new DataView(B);b(p,0,33639248),c(p,4,20),c(p,6,20),c(p,8,0),c(p,10,0),c(p,12,0),c(p,14,0),b(p,16,C),b(p,20,f.length),b(p,24,f.length),c(p,28,v.length),c(p,30,0),c(p,32,0),c(p,34,0),c(p,36,0),b(p,38,0),b(p,42,n),r.push(B,v),n+=30+v.length+f.length});const o=r.reduce((u,v)=>u+v.byteLength,0),s=new ArrayBuffer(22),l=new DataView(s);return b(l,0,101010256),c(l,4,0),c(l,6,0),c(l,8,t.length),c(l,10,t.length),b(l,12,o),b(l,16,n),c(l,20,0),new Blob([...a,...r,s],{type:"application/zip"})}function We(t){const e=new DataView(t),a=new TextDecoder,r=[];let n=0;for(;n+30<=t.byteLength&&e.getUint32(n,!0)===67324752;){const o=e.getUint16(n+8,!0),s=e.getUint32(n+18,!0),l=e.getUint16(n+26,!0),u=e.getUint16(n+28,!0),v=n+30,f=v+l+u,C=f+s;if(C>t.byteLength)break;const S=a.decode(new Uint8Array(t,v,l));if(o===0){const m=a.decode(new Uint8Array(t,f,s));r.push({name:S,content:m})}n=C}return r}function re(t){const e=JSON.parse(t);i={...i,...e},J(),D(),g(),Y(),E(),G(y[i.language].loadConfig+" OK")}function Ye(){document.getElementById("toggle-debug").addEventListener("click",t=>{t.currentTarget.classList.toggle("active"),Ue()}),document.getElementById("toggle-unset-users").addEventListener("click",()=>{document.getElementById("unset-users-control").classList.toggle("hidden")}),document.getElementById("copy-css").addEventListener("click",()=>{const t=F(i);navigator.clipboard.writeText(t).then(()=>{const e=y[i.language].copiedAction||"Copied!";G(e)})}),document.getElementById("save-bundle").addEventListener("click",()=>{const t=F(i),e=JSON.stringify(je(),null,2),a=Ge([{name:Oe(),content:t},{name:Te(),content:e}]);Me(a,Pe())}),document.getElementById("import-json-btn").addEventListener("click",()=>{document.getElementById("import-json-input").click()}),document.getElementById("import-json-input").addEventListener("change",t=>{const e=t.target.files[0];if(!e)return;const a=new FileReader;a.onload=r=>{try{if(e.name.toLowerCase().endsWith(".zip")){const o=We(r.target.result).find(s=>s.name.toLowerCase().endsWith(".json"));if(!o)throw new Error("settings json not found in zip");re(o.content)}else re(r.target.result)}catch(n){console.error("JSON parse error:",n),G("Invalid JSON: "+n.message)}},e.name.toLowerCase().endsWith(".zip")?a.readAsArrayBuffer(e):a.readAsText(e),t.target.value=""})}function G(t){const e=document.createElement("div");e.className="notification",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},2e3)}function W(){const t=document.getElementById("theme-animation-settings");if(!t)return;const e=N.find(r=>r.id===i.themeId);if(!e)return;const a=i.themeAnimations[i.themeId]||e.speakingAnimations||{bounce:!0,glow:!1,shake:!1};t.innerHTML=`
    <div class="input-field horizontal">
      <label>Bounce</label>
      <div class="toggle-group" id="bounce-toggle-group">
        <button type="button" class="toggle-btn ${a.bounce?"active":""}" data-value="true">ON</button>
        <button type="button" class="toggle-btn ${a.bounce?"":"active"}" data-value="false">OFF</button>
      </div>
    </div>
    <div class="input-field horizontal">
      <label>Glow</label>
      <div class="toggle-group" id="glow-toggle-group">
        <button type="button" class="toggle-btn ${a.glow?"active":""}" data-value="true">ON</button>
        <button type="button" class="toggle-btn ${a.glow?"":"active"}" data-value="false">OFF</button>
      </div>
    </div>
    <div class="input-field horizontal">
      <label>Shake</label>
      <div class="toggle-group" id="shake-toggle-group">
        <button type="button" class="toggle-btn ${a.shake?"active":""}" data-value="true">ON</button>
        <button type="button" class="toggle-btn ${a.shake?"":"active"}" data-value="false">OFF</button>
      </div>
    </div>
  `,["bounce","glow","shake"].forEach(r=>{const n=document.getElementById(`${r}-toggle-group`);n&&n.querySelectorAll(".toggle-btn").forEach(o=>{o.addEventListener("click",s=>{n.querySelectorAll(".toggle-btn").forEach(u=>u.classList.remove("active")),s.target.classList.add("active");const l=s.target.dataset.value==="true";i.themeAnimations[i.themeId]||(i.themeAnimations[i.themeId]={...a}),i.themeAnimations[i.themeId][r]=l,g()})})})}function Y(){ie.innerHTML="",N.forEach(t=>{const e=document.createElement("button");e.className=`theme-card ${i.themeId===t.id?"active":""}`,e.dataset.theme=t.id,e.type="button";const a=document.createElement("div");a.className="theme-preview-container";const r=a.attachShadow({mode:"open"});r.innerHTML=`
      <style>
        :host {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #0b0d10;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          animation: none !important;
          transition: none !important;
        }

        .thumb {
          width: 100%;
          height: 100%;
          padding: 10px;
          display: grid;
          place-items: center;
          color: #f4f4f5;
          font-family: system-ui, sans-serif;
          overflow: hidden;
        }

        .cluster {
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }

        .stack {
          display: grid;
          gap: 6px;
          justify-items: start;
        }

        .avatar {
          width: 34px;
          height: 34px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          background: #5865f2;
          color: white;
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
          box-shadow: 0 0 0 3px #ef4444, 0 0 18px rgba(239, 68, 68, 0.58);
        }

        .avatar::before {
          content: "";
          width: 17px;
          height: 12px;
          border-radius: 999px 999px 7px 7px;
          background: currentColor;
          box-shadow: inset 5px 5px 0 -3px #5865f2, inset -5px 5px 0 -3px #5865f2;
        }

        .avatar.idle {
          background: #52525b;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.18);
          opacity: 0.72;
        }

        .avatar.idle::before {
          box-shadow: inset 5px 5px 0 -3px #52525b, inset -5px 5px 0 -3px #52525b;
        }

        .circle .avatar,
        .badge .avatar,
        .list .avatar {
          border-radius: 999px;
        }

        .square .avatar {
          width: 36px;
          height: 36px;
          border-radius: 0;
        }

        .badge .name,
        .list .name {
          min-width: 42px;
          padding: 4px 8px;
          border-radius: 5px;
          background: #dc2626;
          color: white;
          font-size: 10px;
          font-weight: 750;
          line-height: 1;
          text-align: center;
          box-shadow: 0 5px 18px rgba(220, 38, 38, 0.28);
        }

        .list .row {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .list .row + .row .name {
          background: #27272a;
          color: #d4d4d8;
          box-shadow: none;
        }

        .portrait-card {
          width: 48px;
          height: 64px;
          border: 2px solid #ef4444;
          border-radius: 8px;
          background: #18181b;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.48);
          display: grid;
          grid-template-rows: minmax(0, 1fr) 16px;
          overflow: hidden;
        }

        .portrait-card .mark {
          display: grid;
          place-items: center;
          min-height: 0;
          background: #5865f2;
        }

        .portrait-card .mark::before {
          content: "";
          width: 22px;
          height: 15px;
          border-radius: 999px 999px 8px 8px;
          background: #f4f4f5;
          box-shadow: inset 6px 6px 0 -4px #5865f2, inset -6px 6px 0 -4px #5865f2;
        }

        .portrait-card .caption {
          display: grid;
          place-items: center;
          background: rgba(0,0,0,0.62);
          font-size: 9px;
          font-weight: 750;
        }

        .standee {
          width: 46px;
          height: 68px;
          position: relative;
          filter: brightness(62%);
        }

        .standee::before {
          content: "";
          position: absolute;
          right: 7px;
          bottom: 0;
          left: 7px;
          height: 58px;
          border-radius: 999px 999px 8px 8px;
          background: linear-gradient(#5865f2 0 44%, #3f4ed8 44% 100%);
          box-shadow: 0 0 0 2px #ef4444, 0 0 18px rgba(239, 68, 68, 0.58);
        }

        .standee::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 31px;
          width: 19px;
          height: 13px;
          transform: translateX(-50%);
          border-radius: 999px 999px 7px 7px;
          background: #f4f4f5;
          box-shadow: inset 5px 5px 0 -3px #5865f2, inset -5px 5px 0 -3px #5865f2;
        }
      </style>
      ${Je(t.id)}
    `,e.appendChild(a);const n=document.createElement("span");n.className="theme-name",n.textContent=Ze(t),e.appendChild(n),e.addEventListener("click",()=>{i.themeId=t.id;const{unsetUserCount:o,...s}=t.preset;Object.assign(i,s),D(),document.querySelectorAll(".theme-card").forEach(l=>l.classList.remove("active")),e.classList.add("active"),W(),g()}),ie.appendChild(e)})}function Je(t){return t==="circle"?`
      <div class="thumb circle">
        <div class="cluster">
          <div class="avatar"></div>
          <div class="avatar idle"></div>
          <div class="avatar idle"></div>
        </div>
      </div>
    `:t==="actor"?`
      <div class="thumb portrait">
        <div class="portrait-card">
          <div class="mark"></div>
          <div class="caption">NAME</div>
        </div>
      </div>
    `:t==="horizontal"?`
      <div class="thumb badge">
        <div class="cluster">
          <div class="avatar"></div>
          <div class="name">NAME</div>
        </div>
      </div>
    `:t==="vertical"?`
      <div class="thumb list">
        <div class="stack">
          <div class="row">
            <div class="avatar"></div>
            <div class="name">NAME</div>
          </div>
          <div class="row">
            <div class="avatar idle"></div>
            <div class="name">NAME</div>
          </div>
        </div>
      </div>
    `:`
    <div class="thumb portrait">
      <div class="standee"></div>
    </div>
  `}function Ze(t){const e=`preset_${t.id}`;return y[i.language][e]||t.name}function E(){I.innerHTML="",[...i.users].map((e,a)=>({...e,originalIndex:a})).sort((e,a)=>(e.priority??0)-(a.priority??0)).forEach((e,a)=>{const r=String(e.id),n=M(r),o=M(e.displayName||""),s=M(e.avatarUrl||""),l=`preview-user-${e.originalIndex}`,u=document.createElement("div");u.className=`user-item ${e.isHidden?"user-item-hidden":""}`,u.innerHTML=`
      <div class="user-row-head">
        <img src="${s||"https://cdn.discordapp.com/embed/avatars/0.png"}" class="avatar-preview" id="${l}" />
        <div class="user-row-title">
          <input type="text" value="${n}" data-type="id" data-index="${e.originalIndex}" placeholder="${y[i.language].userId}" title="${y[i.language].userId}" />
          <input type="text" value="${o}" data-type="displayName" data-index="${e.originalIndex}" placeholder="表示名" title="${y[i.language].displayName}" ${e.isHidden?"disabled":""} />
        </div>
        <button class="visibility-toggle ${e.isHidden?"hidden":""}" data-index="${e.originalIndex}" title="${y[i.language].visibility}">
          <span class="material-symbols-rounded">${e.isHidden?"visibility_off":"visibility"}</span>
        </button>
      </div>

      <div class="user-row-controls">
        <input type="color" value="${e.color}" data-type="color" data-index="${e.originalIndex}" title="${y[i.language].userColor}" ${e.isHidden?"disabled":""} />
        <input type="number" value="${e.priority??a}" data-type="priority" data-index="${e.originalIndex}" placeholder="0" title="${y[i.language].priority}" ${e.isHidden?"disabled":""} />
        <input type="text" value="${s}" data-type="avatarUrl" data-index="${e.originalIndex}" data-preview-id="${l}" class="avatar-url-input" placeholder="画像URL" title="${y[i.language].avatarOverride}" ${e.isHidden?"disabled":""} />
        <button class="btn-upload" data-index="${e.originalIndex}" title="Upload Image" ${e.isHidden?"disabled":""}>
          <span class="material-symbols-rounded">upload_file</span>
        </button>
        <button type="button" class="remove-user" data-index="${e.originalIndex}" title="Remove">
          <span class="material-symbols-rounded">close</span>
        </button>
      </div>
    `,I.appendChild(u)}),I.querySelectorAll("input").forEach(e=>{e.addEventListener("input",a=>{const r=a.target.dataset.type,n=Number(a.target.dataset.index);if(!Number.isInteger(n)||!i.users[n])return;let o=a.target.value;if(r==="priority"&&(o=parseInt(o)||0),i.users[n][r]=o,r==="avatarUrl"){const s=document.getElementById(a.target.dataset.previewId);s&&(s.src=o||"https://cdn.discordapp.com/embed/avatars/0.png")}r==="priority"&&E(),g()})}),I.querySelectorAll(".remove-user").forEach(e=>{e.addEventListener("click",a=>{const r=a.target.closest(".remove-user"),n=Number(r==null?void 0:r.dataset.index);!Number.isInteger(n)||!i.users[n]||(i.users.splice(n,1),E(),g())})}),I.querySelectorAll(".visibility-toggle").forEach(e=>{e.addEventListener("click",a=>{const r=a.target.closest(".visibility-toggle"),n=Number(r==null?void 0:r.dataset.index);!Number.isInteger(n)||!i.users[n]||(i.users[n].isHidden=!i.users[n].isHidden,E(),g())})})}function M(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J(){const t=y[i.language];document.querySelectorAll("[data-i18n]").forEach(e=>{const a=e.dataset.i18n;if(t[a]){const r=e.querySelector(":scope > span:not(.material-symbols-rounded)");if(r){r.textContent=t[a];return}e.textContent=t[a]}}),window.copiedMessage=t.copiedAction}function oe(){const t=y[i.language];document.getElementById("copy-css").title=t.copyCss,document.getElementById("save-bundle").title=t.saveBundle,document.getElementById("import-json-btn").title=t.loadConfig}function D(){document.getElementById("avatar-size").value=i.avatarSize,document.getElementById("avatar-size-slider").value=i.avatarSize,document.getElementById("base-font-size").value=i.baseFontSize,document.getElementById("base-font-size-slider").value=i.baseFontSize,document.getElementById("container-padding").value=i.padding,document.getElementById("container-padding-slider").value=i.padding,document.getElementById("border-radius").value=i.borderRadius,document.getElementById("border-radius-slider").value=i.borderRadius,document.getElementById("layout-gap").value=i.gap,document.getElementById("layout-gap-slider").value=i.gap,document.getElementById("unset-count").value=i.unsetUserCount,document.getElementById("unset-count-slider").value=i.unsetUserCount;function t(r,n){const o=document.getElementById(r);o&&o.querySelectorAll(".toggle-btn").forEach(s=>{s.dataset.value===n?s.classList.add("active"):s.classList.remove("active")})}t("layout-direction-group",i.direction),t("layout-wrap-group",i.wrap),t("layout-align-group",i.justifyContent),t("shadow-enabled-group",i.shadowEnabled?"true":"false"),document.getElementById("hide-names").checked=i.hideNames;const e=document.getElementById("default-color");e&&(e.value=i.defaultColor||"#ffffff");const a=document.getElementById("unlisted-toggle-group");if(a){const r=i.onlyRegistered?"hide":"show";a.querySelectorAll(".toggle-btn").forEach(n=>{n.dataset.value===r?n.classList.add("active"):n.classList.remove("active")})}document.querySelectorAll(".lang-btn").forEach(r=>{r.classList.toggle("active",r.dataset.lang===i.language)}),document.getElementById("file-prefix").value=i.filePrefix}function g(){const e=[...[...i.users].sort((l,u)=>(l.priority??0)-(u.priority??0))],a=[];for(let l=0;l<i.unsetUserCount;l++)a.push({id:`unset_${l}`,name:`Unset${l+1}`,color:i.defaultColor,priority:100+l,isHidden:!1});e.push(...a),i.displayedUsers=e;const r=F(i);let n=document.getElementById("generated-styles");n||(n=document.createElement("style"),n.id="generated-styles",document.head.appendChild(n)),n.textContent=r;let o=document.getElementById("preview-styles");if(!o){o=document.createElement("style"),o.id="preview-styles";const l=document.getElementById("discord-simulator");l&&l.appendChild(o)}o&&(o.textContent=r);const s=document.getElementById("css-output");s&&(s.textContent=r),Ce(e),x&&R(x,!0)}Ve();
