(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const ve=`/* Theme: Circle */

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
`,N=[{id:"circle",name:"Circle",icon:"Circle",previewScale:.32,previewTranslateY:0,content:ve,cssPath:"src/themes/circle.css",preview:"/src/assets/themes/circle.png",speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"row",wrap:"wrap",justifyContent:"flex-start",gap:10,avatarSize:100,baseFontSize:14,padding:20,borderRadius:50,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!0,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"actor",name:"Actor",icon:"Actor",previewScale:.3,previewTranslateY:0,content:be,speakingAnimations:{bounce:!0,glow:!0,shake:!1},preset:{direction:"row",wrap:"nowrap",justifyContent:"center",gap:20,avatarSize:120,baseFontSize:16,padding:30,borderRadius:10,backgroundColor:"rgba(0, 0, 0, 0.5)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"horizontal",name:"Horizontal",icon:"Horizontal",previewScale:.46,previewTranslateY:0,content:he,speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"row",wrap:"nowrap",justifyContent:"flex-start",gap:5,avatarSize:64,baseFontSize:14,padding:10,borderRadius:50,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"vertical",name:"Vertical",icon:"Vertical",previewScale:.36,previewTranslateY:0,content:ye,speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"column",wrap:"nowrap",justifyContent:"flex-start",gap:10,avatarSize:80,baseFontSize:14,padding:20,borderRadius:50,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!1,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}},{id:"portrait",name:"Portrait",icon:"Portrait",previewScale:.36,previewTranslateY:0,content:fe,speakingAnimations:{bounce:!0,glow:!1,shake:!1},preset:{direction:"row",wrap:"nowrap",justifyContent:"flex-start",gap:8,avatarSize:140,baseFontSize:12,padding:24,borderRadius:0,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,hideNames:!0,onlyRegistered:!1,unsetUserCount:3,defaultColor:"#ffffff"}}],ae=N,g={en:{themes:"Presets",general:"General",layout:"Layout",themeCustom:"Preset Customization",globalSettings:"Size Settings",baseFontSize:"Base Font Size (px)",users:"Member Customization",addUser:"+ Add Member Setting",userId:"Member ID",displayName:"Display Name",userColor:"Color",avatarOverride:"Avatar (Upload/URL)",priority:"Sort",groupCss:"CSS Output",groupConfig:"Settings",cssPreview:"CSS Preview",animations:"Animations",speakingAnimation:"Speaking Animation",copyCss:"Copy CSS",saveCss:"Download .css",saveConfig:"Save .json",saveBundle:"Save CSS + Settings",loadConfig:"Load .json",labelSave:"Save",labelLoad:"Load",labelConfig:"Config",themeHorizontal:"Horizontal",avatarSize:"Avatar Size",layoutSettings:"Layout Settings",spacing:"Spacing (Gap px)",direction:"Direction",directionRow:"Horizontal",directionColumn:"Vertical",wrap:"Wrapping",alignment:"Alignment (Start)",vertical:"Vertical",horizontal:"Horizontal",wrapOn:"Wrap",wrapOff:"No Wrap",alignStart:"Start",alignCenter:"Center",alignEnd:"End",toggleMetadata:"Show IDs",livePreview:"Live Preview",showAllUsers:"All",showOnlyRegistered:"Reg Only",visibility:"Visibility",hidden:"Hidden",copiedAction:"CSS copied to clipboard!",horizontal:"Circle",vertical:"Vertical",portrait:"Portrait",unlistedMembers:"Unlisted Members",unlistedShow:"Show",unlistedHide:"Hide (Whitelist Mode)",defaultColor:"Default Color",userListHeader:"Individual Settings",colVisibility:"Show?",commonSettings:"Common Settings",preset_circle:"Avatar Only",preset_portrait:"Portrait Icon",preset_actor:"Square Avatar",preset_horizontal:"Name Badge",preset_vertical:"Voice List"},ja:{themes:"プリセット",general:"プリセットカスタム",layout:"レイアウト",themeCustom:"プリセットカスタム",globalSettings:"サイズ設定",baseFontSize:"フォントサイズ",borderRadius:"角丸",hideNames:"名前を非表示",users:"メンバーカスタム",addUser:"+ メンバー設定追加",userId:"ユーザーID",displayName:"表示名",userColor:"色",avatarOverride:"画像 (URL/Upload)",priority:"順序",groupCss:"CSS書き出し",groupConfig:"設定保存/読込",cssPreview:"CSSプレビュー",animations:"アニメーション",speakingAnimation:"話し中の動き",copyCss:"CSSをコピー",saveCss:"ファイル保存",saveConfig:"ファイル保存",saveBundle:"CSSと設定を保存",loadConfig:"ファイル読込",labelSave:"保存",labelLoad:"読込",labelConfig:"設定",themeHorizontal:"横並び",avatarSize:"画像サイズ (px)",layoutSettings:"レイアウト設定",spacing:"間隔 (Gap px)",direction:"並ぶ向き",directionRow:"横",directionColumn:"縦",wrap:"折り返し",alignment:"始点 (揃え)",vertical:"縦",horizontal:"横",wrapOn:"あり",wrapOff:"なし",alignStart:"端 (Start)",alignCenter:"中央 (Center)",alignEnd:"端 (End)",toggleMetadata:"IDを表示",livePreview:"ライブプレビュー",showAllUsers:"全員",showOnlyRegistered:"登録のみ",visibility:"表示",hidden:"非表示リスト入り",copiedAction:"CSSをコピーしました！",horizontal:"サークル",vertical:"縦並びリスト",portrait:"ポートレート",unlistedMembers:"未設定のメンバー",unlistedShow:"表示する",unlistedHide:"表示しない (登録者のみ表示)",defaultColor:"未設定メンバーの色",userListHeader:"個別設定リスト",colVisibility:"表示",commonSettings:"共通設定",participantCount:"未設定のメンバーのプレビュー人数",preset_circle:"丸アイコン",preset_portrait:"立ち絵アイコン",preset_actor:"四角アイコン",preset_horizontal:"名前バッジ",preset_vertical:"通話リスト"}};function F(t){const{users:e,baseFontSize:a,avatarSize:r=100,gap:i=0,direction:o="row",wrap:s="nowrap",justifyContent:l="flex-start",themeId:u="horizontal",defaultColor:f="#ffffff",displayedUsers:b=[],padding:C=20,borderRadius:S=0,backgroundColor:v="rgba(0, 0, 0, 0)",nameBackgroundColor:B="rgba(30, 33, 36, 0.95)",shadowEnabled:p=!0,themeAnimations:se={}}=t,H=ae.find(c=>c.id===u)||ae[0],O=se[u]||H.speakingAnimations||{bounce:!0},le=S>=50?"999px":`${S}px`,ce=ne(f,.4);let w=H.content;p||(w=w.replace(/box-shadow\s*:\s*[^;]+;/g,"box-shadow: none;"));const Z=Object.keys(O).filter(c=>O[c]);if(Z.length>0){const c=Z.map(_=>`${_}-anim 0.6s infinite`).join(", ");w=w.replace(/animation:\s*bounce-anim[^;]*/g,`animation: ${c}`)}else w=w.replace(/animation:\s*bounce-anim[^;]*/g,"animation: none");const de=Se(w);let y=`
/* --- Discord Streamkit Overlay Generated CSS --- */
/* Theme: ${H.name} */

body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0px;
  overflow: hidden;
}

/* Global Default Color */
:root {
  --user-color: ${f} !important;
  --user-color-alpha: ${ce} !important;
  --avatar-size: ${r}px !important;
  --base-font-size: ${a}px !important;
  --container-padding: ${C}px !important;
  --avatar-border-radius: ${le} !important;
  --container-border-radius: ${S}px !important;
  --container-background-color: ${v} !important;
  --name-background-color: ${B} !important;
}

/* Global Layout & Sizes */
ul[class*="Voice_voiceStates"] {
  display: flex !important;
  flex-direction: ${o} !important;
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
`+w;const X=y.split("/* --- User Highlight --- */");let Q=X[0];const T=X[1]||"";return t.onlyRegistered?y=Q+`
/* Solo Mode: Hide all by default */
li[class*="Voice_voiceState"] {
  display: none !important;
}
`+T:y=Q+T,[...b.length>0?b:e].filter(c=>!String(c.id).startsWith("unset_")).sort((c,_)=>(c.priority??0)-(_.priority??0)).forEach((c,_)=>{if(!c.id)return;const P=String(c.id),k=j(P),V=`li[class*="Voice_voiceState"][data-userid="${k}"]`,$=`li[class*="Voice_voiceState"]:has(img[src*="${k}"])`,pe=c.name||`User ${_+1}`,K=c.displayName&&c.displayName.trim()!==""?c.displayName:pe,ue=j(K),ee=we(K);if(c.isHidden){y+=`
/* User ${ee} is in Hide-list */
${z(V,$,"display: none !important;")}
`;return}const te=ne(c.color,.4),ge=`--user-color: ${c.color} !important;
  --user-color-alpha: ${te} !important;`;let A=T.replace(/USER_ID/g,k).replace(/var\(--user-color\)/g,c.color).replace(/var\(--user-color-alpha\)/g,te).replace(/{{avatarSize}}/g,r);if(A+=`
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
`,c.avatarUrl){const me=c.avatarUrl.includes("#id=")?c.avatarUrl:`${c.avatarUrl}#id=${encodeURIComponent(P)}`;A+=`
/* Override Avatar */
img[src*="${k}"] {
  content: url("${j(me)}") !important;
  object-fit: cover !important;
}
`}y+=`
/* User: ${ee} */
`,y+=z(V,$,ge)+`
`,t.onlyRegistered&&(y+=z(V,$,`display: ${de} !important;`)+`
`),y+=`${A}
`,t.onlyRegistered&&P.startsWith("unset_")&&(y+=z(V,$,"display: none !important;")+`
`)}),t.hideNames&&(y+=`
/* Global Hide Names */
span[class*="Voice_name"] {
  display: none !important;
}
`),y+=xe(O),y.trim()}function Se(t){const e=t.match(/li\[class[\*\^]?="Voice_voiceState"\]\s*\{[^}]*display\s*:\s*([^;!]+)(?:\s*!important)?\s*;/);return e?e[1].trim():"flex"}function z(t,e,a){return`${t} {
  ${a}
}
@supports selector(:has(*)) {
  ${e} {
    ${a}
  }
}`}function j(t){return String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\A ").replace(/\r/g,"")}function we(t){return String(t).replace(/\*\//g,"* /").replace(/\r?\n/g," ")}function ne(t,e){let a=0,r=0,i=0;return t.length===4?(a=parseInt(t[1]+t[1],16),r=parseInt(t[2]+t[2],16),i=parseInt(t[3]+t[3],16)):t.length===7&&(a=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),i=parseInt(t.substring(5,7),16)),`rgba(${a}, ${r}, ${i}, ${e})`}function xe(t){let e="";return t.bounce&&(e+=`
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
  `}function Ce(t){const e=document.getElementById("simulator-list");e&&(e.innerHTML=t.map((a,r)=>{const i=a.name||`User ${r+1}`,o=a.displayName&&a.displayName.trim()!==""?a.displayName:i,s=a.avatarUrl?a.avatarUrl.includes("#id=")?a.avatarUrl:`${a.avatarUrl}#id=${a.id}`:`https://cdn.discordapp.com/embed/avatars/${r%6}.png#id=${a.id}`;return`
      <li class="Voice_voiceState voice_state" data-userid="${q(a.id)}">
        <img class="Voice_avatar voice_avatar" src="${q(s)}" style="object-fit: cover;" />
        <div class="Voice_user voice_username">
          <span class="Voice_name" style="color: rgb(255, 255, 255); font-size: 14px; background-color: rgba(30, 33, 36, 0.95);">${_e(o)}</span>
        </div>
      </li>
    `}).join(""))}function R(t,e){const a=document.querySelector(`#simulator-list [data-userid="${ke(t)}"]`);if(a){const r=a.querySelector(".Voice_avatar");r&&(e?(a.classList.add("wrapper_speaking"),r.classList.add("Voice_avatarSpeaking")):(a.classList.remove("wrapper_speaking"),r.classList.remove("Voice_avatarSpeaking")))}}function q(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _e(t){return q(t).replace(/'/g,"&#39;")}function ke(t){return String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Ie(){const t=document.getElementById("simulator-list");t&&t.classList.toggle("show-metadata")}let n={users:[{id:"12345678901",displayName:"",avatarUrl:"",color:"#ff4b4b",priority:0},{id:"12345678902",displayName:"",avatarUrl:"",color:"#4b4bff",priority:1}],baseFontSize:14,avatarSize:100,gap:0,direction:"row",wrap:"nowrap",justifyContent:"flex-start",themeId:"circle",language:"ja",onlyRegistered:!1,hideNames:!1,defaultColor:"#ffffff",unsetUserCount:3,displayedUsers:[],padding:20,borderRadius:0,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!0,themeAnimations:{},filePrefix:new Date().toISOString().slice(0,10).replace(/-/g,""),isOverlayMode:new URLSearchParams(window.location.search).get("mode")==="overlay"};n.isOverlayMode&&document.body.classList.add("overlay-active");const U=document.getElementById("user-list"),ie=document.getElementById("theme-selector"),Ue=document.getElementById("discord-simulator");let x=null;function Ve(){$e(),Le(),m(),Be()}function $e(){J(),oe(),Y(),ze(),W(),E(),Ee(Ue),D();const t=document.getElementById("toggle-unset-users");t.textContent=`Unset Users (${n.unsetUserCount})`}function ze(){const t=N.find(e=>e.id===n.themeId);if(t){const{unsetUserCount:e,...a}=t.preset;Object.assign(n,a),D(),W(),m()}}function Le(){Ae(),Re(),Ne(),De(),He(),Ye()}function Be(){function t(){x&&(R(x,!1),x=null);const e=Array.from(document.querySelectorAll("#simulator-list [data-userid]")).map(a=>{const r=a.dataset.userid,i=n.displayedUsers.find(o=>o.id===r);return i&&!i.isHidden?i:null}).filter(Boolean);if(e.length>0){const a=e[Math.floor(Math.random()*e.length)];x=a.id,R(a.id,!0);const r=1800+Math.random()*1200;setTimeout(()=>{R(x,!1),x=null;const i=400+Math.random()*1e3;setTimeout(t,i)},r)}else setTimeout(t,1e3)}t()}function Ae(){document.getElementById("add-user").addEventListener("click",()=>{n.users.push({id:Date.now().toString(),displayName:"",avatarUrl:"",color:"#ffffff",priority:n.users.length}),E(),m()});const t=document.getElementById("avatar-upload-base");let e=null;U.addEventListener("click",a=>{const r=a.target.closest(".btn-upload");r&&(e=Number(r.dataset.index),t.click())}),t.addEventListener("change",a=>{const r=a.target.files[0];if(r&&Number.isInteger(e)){const i=new FileReader;i.onload=o=>{const s=o.target.result;n.users[e]&&(n.users[e].avatarUrl=s,E(),m())},i.readAsDataURL(r)}a.target.value=""})}function L(t,e){const a=document.getElementById(t);a&&a.querySelectorAll(".toggle-btn").forEach(r=>{r.addEventListener("click",i=>{a.querySelectorAll(".toggle-btn").forEach(s=>s.classList.remove("active")),i.target.classList.add("active");const o=i.target.dataset.value;e==="shadowEnabled"?n[e]=o==="true":n[e]=e==="onlyRegistered"?o==="hide":o,m()})})}function Re(){L("layout-direction-group","direction"),L("layout-wrap-group","wrap"),L("layout-align-group","justifyContent"),L("unlisted-toggle-group","onlyRegistered"),L("shadow-enabled-group","shadowEnabled")}function I(t,e,a){const r=document.getElementById(t),i=document.getElementById(e),o=s=>{if(n[a]=parseInt(s)||0,r.value=n[a],i.value=n[a],m(),a==="unsetUserCount"){const l=document.getElementById("toggle-unset-users");l.textContent=`Unset Users (${n.unsetUserCount})`}};r.addEventListener("input",s=>o(s.target.value)),i.addEventListener("input",s=>o(s.target.value))}function Ne(){I("avatar-size","avatar-size-slider","avatarSize"),I("base-font-size","base-font-size-slider","baseFontSize"),I("container-padding","container-padding-slider","padding"),I("border-radius","border-radius-slider","borderRadius"),I("layout-gap","layout-gap-slider","gap"),I("unset-count","unset-count-slider","unsetUserCount"),(()=>{const e=document.getElementById("toggle-unset-users");e.textContent=`Unset Users (${n.unsetUserCount})`})(),document.getElementById("file-prefix").addEventListener("input",e=>{n.filePrefix=e.target.value}),document.getElementById("background-color").addEventListener("input",e=>{n.backgroundColor=e.target.value==="#000000"?"rgba(0, 0, 0, 0)":e.target.value,m()}),document.getElementById("name-background-color").addEventListener("input",e=>{const a=e.target.value,r=parseInt(a.substring(1,3),16),i=parseInt(a.substring(3,5),16),o=parseInt(a.substring(5,7),16);n.nameBackgroundColor=`rgba(${r}, ${i}, ${o}, 0.95)`,m()}),document.getElementById("hide-names").addEventListener("change",e=>{n.hideNames=e.target.checked,m()}),document.getElementById("default-color").addEventListener("input",e=>{n.defaultColor=e.target.value,m()})}function De(){document.querySelectorAll(".lang-btn").forEach(t=>{t.addEventListener("click",e=>{n.language=e.target.dataset.lang,document.querySelectorAll(".lang-btn").forEach(a=>a.classList.remove("active")),e.target.classList.add("active"),J(),oe(),Y(),E(),m()})})}function He(){document.querySelectorAll(".mode-rail-btn").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.paneTarget;document.querySelectorAll(".mode-rail-btn").forEach(a=>{a.classList.toggle("active",a===t)}),document.querySelectorAll(".pane-panel").forEach(a=>{a.classList.toggle("active",a.dataset.pane===e)})})})}function Oe(){return n.filePrefix+"_discordpyoko.css"}function Te(){return n.filePrefix+"_discordpyoko-setting.json"}function Pe(){return n.filePrefix+"_discordpyoko.zip"}function je(){const{displayedUsers:t,isOverlayMode:e,...a}=n;return a}function Me(t,e){const a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=e,r.click(),URL.revokeObjectURL(a)}const Fe=(()=>{const t=new Uint32Array(256);for(let e=0;e<256;e++){let a=e;for(let r=0;r<8;r++)a=a&1?3988292384^a>>>1:a>>>1;t[e]=a>>>0}return t})();function qe(t){let e=4294967295;for(const a of t)e=Fe[(e^a)&255]^e>>>8;return(e^4294967295)>>>0}function d(t,e,a){t.setUint16(e,a,!0)}function h(t,e,a){t.setUint32(e,a,!0)}function Ge(t){const e=new TextEncoder,a=[],r=[];let i=0;t.forEach(u=>{const f=e.encode(u.name),b=e.encode(u.content),C=qe(b),S=new ArrayBuffer(30),v=new DataView(S);h(v,0,67324752),d(v,4,20),d(v,6,0),d(v,8,0),d(v,10,0),d(v,12,0),h(v,14,C),h(v,18,b.length),h(v,22,b.length),d(v,26,f.length),d(v,28,0),a.push(S,f,b);const B=new ArrayBuffer(46),p=new DataView(B);h(p,0,33639248),d(p,4,20),d(p,6,20),d(p,8,0),d(p,10,0),d(p,12,0),d(p,14,0),h(p,16,C),h(p,20,b.length),h(p,24,b.length),d(p,28,f.length),d(p,30,0),d(p,32,0),d(p,34,0),d(p,36,0),h(p,38,0),h(p,42,i),r.push(B,f),i+=30+f.length+b.length});const o=r.reduce((u,f)=>u+f.byteLength,0),s=new ArrayBuffer(22),l=new DataView(s);return h(l,0,101010256),d(l,4,0),d(l,6,0),d(l,8,t.length),d(l,10,t.length),h(l,12,o),h(l,16,i),d(l,20,0),new Blob([...a,...r,s],{type:"application/zip"})}function We(t){const e=new DataView(t),a=new TextDecoder,r=[];let i=0;for(;i+30<=t.byteLength&&e.getUint32(i,!0)===67324752;){const o=e.getUint16(i+8,!0),s=e.getUint32(i+18,!0),l=e.getUint16(i+26,!0),u=e.getUint16(i+28,!0),f=i+30,b=f+l+u,C=b+s;if(C>t.byteLength)break;const S=a.decode(new Uint8Array(t,f,l));if(o===0){const v=a.decode(new Uint8Array(t,b,s));r.push({name:S,content:v})}i=C}return r}function re(t){const e=JSON.parse(t);n={...n,...e},J(),D(),m(),Y(),E(),G(g[n.language].loadConfig+" OK")}function Ye(){document.getElementById("toggle-debug").addEventListener("click",t=>{t.currentTarget.classList.toggle("active"),Ie()}),document.getElementById("toggle-unset-users").addEventListener("click",()=>{document.getElementById("unset-users-control").classList.toggle("hidden")}),document.getElementById("copy-css").addEventListener("click",()=>{const t=F(n);navigator.clipboard.writeText(t).then(()=>{const e=g[n.language].copiedAction||"Copied!";G(e)})}),document.getElementById("save-bundle").addEventListener("click",()=>{const t=F(n),e=JSON.stringify(je(),null,2),a=Ge([{name:Oe(),content:t},{name:Te(),content:e}]);Me(a,Pe())}),document.getElementById("import-json-btn").addEventListener("click",()=>{document.getElementById("import-json-input").click()}),document.getElementById("import-json-input").addEventListener("change",t=>{const e=t.target.files[0];if(!e)return;const a=new FileReader;a.onload=r=>{try{if(e.name.toLowerCase().endsWith(".zip")){const o=We(r.target.result).find(s=>s.name.toLowerCase().endsWith(".json"));if(!o)throw new Error("settings json not found in zip");re(o.content)}else re(r.target.result)}catch(i){console.error("JSON parse error:",i),G("Invalid JSON: "+i.message)}},e.name.toLowerCase().endsWith(".zip")?a.readAsArrayBuffer(e):a.readAsText(e),t.target.value=""})}function G(t){const e=document.createElement("div");e.className="notification",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},2e3)}function W(){const t=document.getElementById("theme-animation-settings");if(!t)return;const e=N.find(r=>r.id===n.themeId);if(!e)return;const a=n.themeAnimations[n.themeId]||e.speakingAnimations||{bounce:!0,glow:!1,shake:!1};t.innerHTML=`
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
  `,["bounce","glow","shake"].forEach(r=>{const i=document.getElementById(`${r}-toggle-group`);i&&i.querySelectorAll(".toggle-btn").forEach(o=>{o.addEventListener("click",s=>{i.querySelectorAll(".toggle-btn").forEach(u=>u.classList.remove("active")),s.target.classList.add("active");const l=s.target.dataset.value==="true";n.themeAnimations[n.themeId]||(n.themeAnimations[n.themeId]={...a}),n.themeAnimations[n.themeId][r]=l,m()})})})}function Y(){ie.innerHTML="",N.forEach(t=>{const e=document.createElement("button");e.className=`theme-card ${n.themeId===t.id?"active":""}`,e.dataset.theme=t.id,e.type="button";const a=document.createElement("div");a.className="theme-preview-container";const r=a.attachShadow({mode:"open"});r.innerHTML=`
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
    `,e.appendChild(a);const i=document.createElement("span");i.className="theme-name",i.textContent=Ze(t),e.appendChild(i),e.addEventListener("click",()=>{n.themeId=t.id;const{unsetUserCount:o,...s}=t.preset;Object.assign(n,s),D(),document.querySelectorAll(".theme-card").forEach(l=>l.classList.remove("active")),e.classList.add("active"),W(),m()}),ie.appendChild(e)})}function Je(t){return t==="circle"?`
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
  `}function Ze(t){const e=`preset_${t.id}`;return g[n.language][e]||t.name}function E(){U.innerHTML="",[...n.users].map((e,a)=>({...e,originalIndex:a})).sort((e,a)=>(e.priority??0)-(a.priority??0)).forEach((e,a)=>{const r=String(e.id),i=M(r),o=M(e.displayName||""),s=M(e.avatarUrl||""),l=`preview-user-${e.originalIndex}`,u=document.createElement("div");u.className=`user-item ${e.isHidden?"user-item-hidden":""}`,u.innerHTML=`
      <div class="user-card-side">
        <img src="${s||"https://cdn.discordapp.com/embed/avatars/0.png"}" class="avatar-preview" id="${l}" />
        <button class="visibility-toggle ${e.isHidden?"hidden":""}" data-index="${e.originalIndex}" title="${g[n.language].visibility}">
          <span class="material-symbols-rounded">${e.isHidden?"visibility_off":"visibility"}</span>
        </button>
      </div>

      <div class="user-card-main">
        <div class="user-card-row">
          <label>
            <span class="mini-label">${g[n.language].userId}</span>
            <input type="text" value="${i}" data-type="id" data-index="${e.originalIndex}" placeholder="${g[n.language].userId}" title="${g[n.language].userId}" />
          </label>
          <label>
            <span class="mini-label">${g[n.language].displayName}</span>
            <input type="text" value="${o}" data-type="displayName" data-index="${e.originalIndex}" placeholder="上書きする場合のみ入力" title="${g[n.language].displayName}" ${e.isHidden?"disabled":""} />
          </label>
        </div>
        <label class="avatar-input-container">
          <span class="mini-label">${g[n.language].avatarOverride}</span>
          <span class="avatar-input-row">
            <input type="text" value="${s}" data-type="avatarUrl" data-index="${e.originalIndex}" data-preview-id="${l}" class="avatar-url-input" placeholder="URL / DataURI" title="${g[n.language].avatarOverride}" ${e.isHidden?"disabled":""} />
            <button class="btn-upload" data-index="${e.originalIndex}" title="Upload Image" ${e.isHidden?"disabled":""}>
              <span class="material-symbols-rounded" style="font-size: 16px;">upload_file</span>
            </button>
          </span>
        </label>
      </div>

      <div class="user-actions">
        <label>
          <span class="mini-label">${g[n.language].priority}</span>
          <input type="number" value="${e.priority??a}" data-type="priority" data-index="${e.originalIndex}" placeholder="0" title="${g[n.language].priority}" ${e.isHidden?"disabled":""} />
        </label>
        <label>
          <span class="mini-label">${g[n.language].userColor}</span>
          <input type="color" value="${e.color}" data-type="color" data-index="${e.originalIndex}" title="${g[n.language].userColor}" ${e.isHidden?"disabled":""} />
        </label>
        <span class="remove-user" data-index="${e.originalIndex}">&times;</span>
      </div>
    `,U.appendChild(u)}),U.querySelectorAll("input").forEach(e=>{e.addEventListener("input",a=>{const r=a.target.dataset.type,i=Number(a.target.dataset.index);if(!Number.isInteger(i)||!n.users[i])return;let o=a.target.value;if(r==="priority"&&(o=parseInt(o)||0),n.users[i][r]=o,r==="avatarUrl"){const s=document.getElementById(a.target.dataset.previewId);s&&(s.src=o||"https://cdn.discordapp.com/embed/avatars/0.png")}r==="priority"&&E(),m()})}),U.querySelectorAll(".remove-user").forEach(e=>{e.addEventListener("click",a=>{const r=Number(a.target.dataset.index);!Number.isInteger(r)||!n.users[r]||(n.users.splice(r,1),E(),m())})}),U.querySelectorAll(".visibility-toggle").forEach(e=>{e.addEventListener("click",a=>{const r=a.target.closest(".visibility-toggle"),i=Number(r==null?void 0:r.dataset.index);!Number.isInteger(i)||!n.users[i]||(n.users[i].isHidden=!n.users[i].isHidden,E(),m())})})}function M(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J(){const t=g[n.language];document.querySelectorAll("[data-i18n]").forEach(e=>{const a=e.dataset.i18n;if(t[a]){const r=e.querySelector(":scope > span:not(.material-symbols-rounded)");if(r){r.textContent=t[a];return}e.textContent=t[a]}}),window.copiedMessage=t.copiedAction}function oe(){const t=g[n.language];document.getElementById("copy-css").title=t.copyCss,document.getElementById("save-bundle").title=t.saveBundle,document.getElementById("import-json-btn").title=t.loadConfig}function D(){document.getElementById("avatar-size").value=n.avatarSize,document.getElementById("avatar-size-slider").value=n.avatarSize,document.getElementById("base-font-size").value=n.baseFontSize,document.getElementById("base-font-size-slider").value=n.baseFontSize,document.getElementById("container-padding").value=n.padding,document.getElementById("container-padding-slider").value=n.padding,document.getElementById("border-radius").value=n.borderRadius,document.getElementById("border-radius-slider").value=n.borderRadius,document.getElementById("layout-gap").value=n.gap,document.getElementById("layout-gap-slider").value=n.gap,document.getElementById("unset-count").value=n.unsetUserCount,document.getElementById("unset-count-slider").value=n.unsetUserCount;function t(r,i){const o=document.getElementById(r);o&&o.querySelectorAll(".toggle-btn").forEach(s=>{s.dataset.value===i?s.classList.add("active"):s.classList.remove("active")})}t("layout-direction-group",n.direction),t("layout-wrap-group",n.wrap),t("layout-align-group",n.justifyContent),t("shadow-enabled-group",n.shadowEnabled?"true":"false"),document.getElementById("hide-names").checked=n.hideNames;const e=document.getElementById("default-color");e&&(e.value=n.defaultColor||"#ffffff");const a=document.getElementById("unlisted-toggle-group");if(a){const r=n.onlyRegistered?"hide":"show";a.querySelectorAll(".toggle-btn").forEach(i=>{i.dataset.value===r?i.classList.add("active"):i.classList.remove("active")})}document.querySelectorAll(".lang-btn").forEach(r=>{r.classList.toggle("active",r.dataset.lang===n.language)}),document.getElementById("file-prefix").value=n.filePrefix}function m(){const e=[...[...n.users].sort((l,u)=>(l.priority??0)-(u.priority??0))],a=[];for(let l=0;l<n.unsetUserCount;l++)a.push({id:`unset_${l}`,name:`Unset${l+1}`,color:n.defaultColor,priority:100+l,isHidden:!1});e.push(...a),n.displayedUsers=e;const r=F(n);let i=document.getElementById("generated-styles");i||(i=document.createElement("style"),i.id="generated-styles",document.head.appendChild(i)),i.textContent=r;let o=document.getElementById("preview-styles");if(!o){o=document.createElement("style"),o.id="preview-styles";const l=document.getElementById("discord-simulator");l&&l.appendChild(o)}o&&(o.textContent=r);const s=document.getElementById("css-output");s&&(s.textContent=r),Ce(e),x&&R(x,!0)}Ve();
