(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const M=[{id:"default",name:"Discord Default",icon:"Default",previewScale:.44,previewTranslateY:0,style:"default"},{id:"circle",name:"Circle",icon:"Circle",previewScale:.32,previewTranslateY:0,style:"circle"},{id:"actor",name:"Actor",icon:"Actor",previewScale:.3,previewTranslateY:0,style:"actor"},{id:"portrait",name:"Portrait",icon:"Portrait",previewScale:.36,previewTranslateY:0,style:"portrait"}],tt=M,$={en:{themes:"Presets",general:"General",layout:"Layout",themeCustom:"Preset Customization",globalSettings:"Size Settings",baseFontSize:"Base Font Size (px)",users:"Member Customization",addUser:"+ Add Member Setting",userId:"Member ID",displayName:"Display Name",userColor:"Color",avatarOverride:"Avatar (Upload/URL)",priority:"Sort",groupCss:"CSS Output",groupConfig:"Settings",cssPreview:"CSS Preview",animations:"Animations",speakingAnimation:"Speaking Animation",copyCss:"Copy CSS",saveCss:"Download .css",saveConfig:"Save .json",saveBundle:"Save CSS + Settings",loadConfig:"Load .json",labelSave:"Save",labelLoad:"Load",labelOffline:"Offline",offlineDownload:"Download Offline App",labelConfig:"Config",themeHorizontal:"Horizontal",avatarSize:"Avatar Size",layoutSettings:"Layout Settings",spacing:"Spacing (Gap px)",direction:"Direction",directionRow:"Horizontal",directionColumn:"Vertical",wrap:"Wrapping",alignment:"Alignment (Start)",vertical:"Vertical",horizontal:"Horizontal",wrapOn:"Wrap",wrapOff:"No Wrap",alignStart:"Start",alignCenter:"Center",alignEnd:"End",toggleMetadata:"Show IDs",livePreview:"Live Preview",showAllUsers:"All",showOnlyRegistered:"Reg Only",visibility:"Visibility",hidden:"Hidden",showNames:"Show Names",copiedAction:"CSS copied to clipboard!",horizontal:"Circle",vertical:"Vertical",portrait:"Portrait",unlistedMembers:"Unlisted Members",unlistedShow:"Show",unlistedHide:"Hide (Whitelist Mode)",defaultColor:"Default Color",unsetPriority:"Unset Sort",userListHeader:"Individual Settings",colVisibility:"Show?",commonSettings:"Common Settings",preset_default:"Discord Default",preset_circle:"Avatar Only",preset_portrait:"Portrait Icon",preset_actor:"Square Avatar"},ja:{themes:"プリセット",general:"プリセットカスタム",layout:"レイアウト",themeCustom:"プリセットカスタム",globalSettings:"サイズ設定",baseFontSize:"フォントサイズ",borderRadius:"角丸",hideNames:"名前を非表示",showNames:"名前を表示",users:"メンバーカスタム",addUser:"+ メンバー設定追加",userId:"ユーザーID",displayName:"表示名",userColor:"色",avatarOverride:"画像 (URL/Upload)",priority:"順序",groupCss:"CSS書き出し",groupConfig:"設定保存/読込",cssPreview:"CSSプレビュー",animations:"アニメーション",speakingAnimation:"話し中の動き",copyCss:"CSSをコピー",saveCss:"ファイル保存",saveConfig:"ファイル保存",saveBundle:"CSSと設定を保存",loadConfig:"ファイル読込",labelSave:"保存",labelLoad:"読込",labelOffline:"オフライン",offlineDownload:"オフライン版をDL",labelConfig:"設定",themeHorizontal:"横並び",avatarSize:"画像サイズ (px)",layoutSettings:"レイアウト設定",spacing:"間隔 (Gap px)",direction:"並ぶ向き",directionRow:"横",directionColumn:"縦",wrap:"折り返し",alignment:"始点 (揃え)",vertical:"縦",horizontal:"横",wrapOn:"あり",wrapOff:"なし",alignStart:"端 (Start)",alignCenter:"中央 (Center)",alignEnd:"端 (End)",toggleMetadata:"IDを表示",livePreview:"ライブプレビュー",showAllUsers:"全員",showOnlyRegistered:"登録のみ",visibility:"表示",hidden:"非表示リスト入り",copiedAction:"CSSをコピーしました！",horizontal:"サークル",vertical:"縦並びリスト",portrait:"ポートレート",unlistedMembers:"未設定のメンバー",unlistedShow:"表示する",unlistedHide:"表示しない (登録者のみ表示)",defaultColor:"未設定メンバーの色",unsetPriority:"未設定の順序",userListHeader:"個別設定リスト",colVisibility:"表示",commonSettings:"共通設定",participantCount:"未設定のメンバーのプレビュー人数",preset_default:"Discord標準",preset_circle:"丸アイコン",preset_portrait:"立ち絵アイコン",preset_actor:"四角アイコン"}},et='ul[class*="Voice_voiceStates"]',v='li[class*="Voice_voiceState"]',x='img[class*="Voice_avatar"]',E='img[class*="Voice_avatarSpeaking"]',J='div[class*="Voice_user"]',I='span[class*="Voice_name"]',ht={bounce:!1,glow:!1,shake:!1};function q(t){const{users:e,baseFontSize:a=14,avatarSize:n=100,gap:i=0,direction:s="row",wrap:o="nowrap",justifyContent:l="flex-start",themeId:u="default",defaultColor:m="#ffffff",displayedUsers:h=[],padding:w=20,borderRadius:f=0,backgroundColor:d="rgba(0, 0, 0, 0)",nameBackgroundColor:S="rgba(30, 33, 36, 0.95)",shadowEnabled:p=!0,speakingAnimations:N,themeAnimations:P={}}=t,D=tt.find(vt=>vt.id===u)||tt[0],mt=D.style||"default",gt=f>=50?"999px":`${f}px`,ft=Z(m,.4),Q={...ht,...P[u]||{},...N||{}},H={baseFontSize:a,avatarSize:n,gap:i,direction:s,wrap:o,justifyContent:l,defaultColor:m,defaultColorRgba:ft,padding:w,borderRadius:f,avatarBorderRadius:gt,backgroundColor:d,nameBackgroundColor:S,shadowEnabled:p,speakingAnimations:Q,style:mt};return["/* --- Discord StreamKit Overlay Generated CSS --- */",`/* Preset: ${D.name} */`,bt(H),yt(H),It(t),Ct(t),At(t,H),zt(t),Pt(Q)].filter(Boolean).join(`

`).trim()}function bt(t){return`body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  overflow: hidden;
}

:root {
  --user-color: ${t.defaultColor} !important;
  --user-color-alpha: ${t.defaultColorRgba} !important;
  --avatar-size: ${t.avatarSize}px !important;
  --base-font-size: ${t.baseFontSize}px !important;
  --container-padding: ${t.padding}px !important;
  --avatar-border-radius: ${t.avatarBorderRadius} !important;
  --container-border-radius: ${t.borderRadius}px !important;
  --container-background-color: ${t.backgroundColor} !important;
  --name-background-color: ${t.nameBackgroundColor} !important;
}`}function yt(t){return t.style==="default"?wt(t):[$t(t),xt(t)].filter(Boolean).join(`

`)}function wt(t){return _t(t.speakingAnimations)?`${v}.wrapper_speaking ${x},
${v} ${E} {
  ${B(t.speakingAnimations)}
}`:""}function $t(t){return t.style==="actor"?`${et} {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(var(--avatar-size), var(--avatar-size))) !important;
  gap: ${t.gap}px !important;
  justify-content: ${t.justifyContent} !important;
  padding: var(--container-padding) !important;
  border-radius: var(--container-border-radius) !important;
  background-color: var(--container-background-color) !important;
}`:`${et} {
  display: flex !important;
  flex-direction: ${t.direction} !important;
  flex-wrap: ${t.wrap} !important;
  justify-content: ${t.justifyContent} !important;
  gap: ${t.gap}px !important;
  width: auto !important;
  height: auto !important;
  padding: var(--container-padding) !important;
  border-radius: var(--container-border-radius) !important;
  background-color: var(--container-background-color) !important;
}`}function xt(t){const a={circle:St,actor:kt,portrait:Et}[t.style];return a?a(t):""}function St(t){const e=t.shadowEnabled?"0 0 0 4px rgb(160, 160, 160)":"none",a=`0 0 0 4px ${t.defaultColor}, 0 0 0 16px ${t.defaultColorRgba}`,n=B(t.speakingAnimations);return`${v} {
  position: relative !important;
  display: block !important;
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  margin: 0 !important;
  padding: 0 !important;
}

${x} {
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  margin: 0 !important;
  display: block !important;
  border: none !important;
  border-radius: var(--avatar-border-radius) !important;
  filter: brightness(60%) !important;
  box-shadow: ${e} !important;
  transition: filter 0.1s ease, box-shadow 0.1s ease, transform 0.1s ease !important;
}

${J} {
  position: absolute !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  z-index: 10 !important;
  display: block !important;
  pointer-events: none !important;
}

${I} {
  display: block !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  background: none !important;
  text-align: right !important;
  line-height: 1 !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: clip !important;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 1)) !important;
}

${v}.wrapper_speaking ${x},
${v} ${E} {
  filter: brightness(100%) !important;
  border: none !important;
  box-shadow: ${a} !important;
  ${n}
}`}function kt(t){const e=B(t.speakingAnimations);return`${v} {
  position: relative !important;
  display: grid !important;
  grid-template-rows: minmax(0, 1fr) auto !important;
  align-items: stretch !important;
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  border-radius: var(--container-border-radius) !important;
  background: var(--container-background-color) !important;
}

${x} {
  grid-row: 1 !important;
  width: 100% !important;
  height: 100% !important;
  min-height: 0 !important;
  margin: 0 !important;
  object-fit: cover !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  filter: brightness(60%) !important;
  transition: filter 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease !important;
}

${J} {
  grid-row: 2 !important;
  display: block !important;
  min-width: 0 !important;
}

${I} {
  position: static !important;
  display: block !important;
  width: 100% !important;
  padding: 4px !important;
  background: var(--name-background-color) !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: clip !important;
}

${v}.wrapper_speaking ${x},
${v} ${E} {
  filter: brightness(100%) !important;
  transform: scale(1.05) !important;
  border: none !important;
  box-shadow: none !important;
  ${e}
}

${v}.wrapper_speaking {
  box-shadow: 0 0 0 2px ${t.defaultColor}, 0 0 15px ${t.defaultColor} !important;
}
@supports selector(:has(*)) {
  ${v}:has(${E}) {
    box-shadow: 0 0 0 2px ${t.defaultColor}, 0 0 15px ${t.defaultColor} !important;
  }
}`}function Et(t){const e=B(t.speakingAnimations,{glowName:"portrait-glow"});return`${v} {
  position: relative !important;
  display: block !important;
  width: var(--avatar-size) !important;
  height: calc(var(--avatar-size) * 1.35) !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: visible !important;
}

${x} {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  object-fit: contain !important;
  object-position: center bottom !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  filter: brightness(62%) !important;
  transition: filter 0.18s ease, transform 0.18s ease !important;
}

${J} {
  position: absolute !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  display: block !important;
  pointer-events: none !important;
}

${I} {
  display: block !important;
  width: max-content !important;
  max-width: 100% !important;
  margin: 0 auto !important;
  padding: 3px 7px !important;
  border-radius: 4px !important;
  background: var(--name-background-color) !important;
  color: white !important;
  text-align: center !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: clip !important;
}

${v}.wrapper_speaking ${x},
${v} ${E} {
  filter: brightness(100%) drop-shadow(0 0 14px ${t.defaultColor}) !important;
  border: none !important;
  box-shadow: none !important;
  ${e}
}`}function Ct(t,e){return t.onlyRegistered?`/* Hide unregistered members by default */
${v} {
  display: none !important;
}`:""}function It(t){return t.onlyRegistered?"":`/* Default order for unregistered members */
${v} {
  order: ${t.unsetUserPriority??100} !important;
}`}function At(t,e){var i;return[...((i=t.displayedUsers)==null?void 0:i.length)>0?t.displayedUsers:t.users].filter(s=>!String(s.id).startsWith("unset_")).sort((s,o)=>(s.priority??0)-(o.priority??0)).map((s,o)=>Lt(s,o,t,e)).filter(Boolean).join(`

`)}function Lt(t,e,a,n){if(!t.id)return"";const i=String(t.id),s=F(i),o=`${v}[data-userid="${s}"]`,l=`${v}:has(${x}[src*="${s}"])`,u=`${o} ${x}`,m=`${l} ${x}`,h=`${o} ${I}`,w=`${l} ${I}`,f=t.name||`User ${e+1}`,d=t.displayName&&t.displayName.trim()!=="",S=d?t.displayName:f,p=F(S),N=Ot(S),P=Z(t.color,.4);return t.isHidden?`/* User ${N}: hidden */
${b(o,l,"display: none !important;")}`:[`/* User: ${N} */`,b(o,l,`--user-color: ${t.color} !important;
  --user-color-alpha: ${P} !important;`),b(o,l,`order: ${t.priority??e} !important;`),a.onlyRegistered?b(o,l,`display: ${Rt(n.style)} !important;`):"",d?Ut(h,w,p):"",t.avatarUrl?Bt(u,m,t.avatarUrl,i):"",Nt(o,l,u,m,t,n)].filter(Boolean).join(`
`)}function Ut(t,e,a){const n=`font-size: 0 !important;
  height: auto !important;`,i=`content: "${a}" !important;
  display: block !important;
  font-size: var(--base-font-size) !important;`;return`${b(t,e,n)}
${b(`${t}::after`,`${e}::after`,i)}`}function Bt(t,e,a,n){const i=a.includes("#id=")?a:`${a}#id=${encodeURIComponent(n)}`;return b(t,e,`content: url("${F(i)}") !important;
  object-fit: cover !important;`)}function Nt(t,e,a,n,i,s){const o=i.color,l=Z(o,.4),u=`${t}.wrapper_speaking ${x},
${t} ${E}`,m=`${e}:has(${E}) ${x},
${n}[class*="Voice_avatarSpeaking"]`,h=B(s.speakingAnimations),w=`border: none !important;
  box-shadow: none !important;`;if(s.style==="default"){const f=`${t} ${I}`,d=`${e} ${I}`;return b(f,d,`color: ${o} !important;`)}if(s.style==="circle"){const f=b(a,n,`box-shadow: 0 0 0 4px ${o} !important;`),d=b(u,m,`filter: brightness(100%) !important;
  border: none !important;
  box-shadow: 0 0 0 4px ${o}, 0 0 0 16px ${l} !important;
  ${h}`);return`${f}
${d}`}if(s.style==="actor"){const f=b(t,e,`border: 2px solid ${o} !important;
  box-shadow: none !important;
  transition: box-shadow 0.18s ease !important;`),d=b(u,m,`filter: brightness(100%) !important;
  transform: scale(1.05) !important;
  ${w}
  ${h}`),S=b(`${t}.wrapper_speaking`,`${e}:has(${E})`,`box-shadow: 0 0 0 2px ${o}, 0 0 15px ${o} !important;`);return`${f}
${d}
${S}`}if(s.style==="portrait"){const f=B(s.speakingAnimations,{glowName:"portrait-glow"}),d=b(a,n,`filter: brightness(62%) drop-shadow(0 0 8px ${l}) !important;`),S=b(u,m,`filter: brightness(100%) drop-shadow(0 0 14px ${o}) !important;
  ${w}
  ${f}`);return`${d}
${S}`}return""}function zt(t){return t.hideNames?`/* Hide names */
${I} {
  display: none !important;
}`:""}function B(t,e={}){const a=Object.keys(t||{}).filter(n=>t[n]&&!(e.excludeGlow&&n==="glow"));return a.length===0?"animation: none !important;":`animation: ${a.map(n=>`${Mt(n,e)} 0.6s infinite`).join(", ")} !important;`}function _t(t){return Object.values(t||{}).some(Boolean)}function Mt(t,e={}){return t==="glow"&&e.glowName?`${e.glowName}-anim`:`${t}-anim`}function Rt(t){return t==="circle"||t==="portrait"?"block":t==="actor"?"grid":"flex"}function b(t,e,a){return`${t} {
  ${a}
}
@supports selector(:has(*)) {
  ${e} {
    ${a}
  }
}`}function F(t){return String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\A ").replace(/\r/g,"")}function Ot(t){return String(t).replace(/\*\//g,"* /").replace(/\r?\n/g," ")}function Z(t,e){let a=0,n=0,i=0;return t.length===4?(a=parseInt(t[1]+t[1],16),n=parseInt(t[2]+t[2],16),i=parseInt(t[3]+t[3],16)):t.length===7&&(a=parseInt(t.substring(1,3),16),n=parseInt(t.substring(3,5),16),i=parseInt(t.substring(5,7),16)),`rgba(${a}, ${n}, ${i}, ${e})`}function Pt(t){let e="";return t.bounce&&(e+=`
@keyframes bounce-anim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`),t.glow&&(e+=`
@keyframes glow-anim {
  0%, 100% { filter: brightness(100%); }
  50% { filter: brightness(130%); }
}
@keyframes portrait-glow-anim {
  0%, 100% { filter: brightness(100%) drop-shadow(0 0 14px var(--user-color)); }
  50% { filter: brightness(128%) drop-shadow(0 0 22px var(--user-color)); }
}`),t.shake&&(e+=`
@keyframes shake-anim {
  0% { transform: rotate(0); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0); }
}`),e.trim()}function Dt(t){t.innerHTML=`
    <div class="Voice_voiceContainer voice_container">
      <ul class="Voice_voiceStates voice_states" id="simulator-list">
        <!-- Injected via state -->
      </ul>
    </div>
  `}function Ht(t=0){const e=["#5865f2","#57f287","#fee75c","#eb459e","#ed4245","#4f545c"],n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" rx="18" fill="${e[t%e.length]}"/><circle cx="40" cy="31" r="14" fill="#ffffff" opacity=".9"/><path d="M16 72c4-17 16-27 24-27s20 10 24 27" fill="#ffffff" opacity=".9"/></svg>`;return`data:image/svg+xml,${encodeURIComponent(n)}`}function Tt(t){const e=document.getElementById("simulator-list");e&&(e.innerHTML=t.map((a,n)=>{const i=a.name||`User ${n+1}`,s=a.displayName&&a.displayName.trim()!==""?a.displayName:i,o=a.avatarUrl?a.avatarUrl.includes("#id=")?a.avatarUrl:`${a.avatarUrl}#id=${a.id}`:`${Ht(n)}#id=${a.id}`;return`
      <li class="Voice_voiceState voice_state" data-userid="${G(a.id)}">
        <span class="metadata">${at(a.id)}</span>
        <img class="Voice_avatar voice_avatar" src="${G(o)}" />
        <div class="Voice_user voice_username">
          <span class="Voice_name">${at(s)}</span>
        </div>
      </li>
    `}).join(""))}function _(t,e){const a=document.querySelector(`#simulator-list [data-userid="${Vt(t)}"]`);if(a){const n=a.querySelector(".Voice_avatar");n&&(e?(a.classList.add("wrapper_speaking"),n.classList.add("Voice_avatarSpeaking")):(a.classList.remove("wrapper_speaking"),n.classList.remove("Voice_avatarSpeaking")))}}function G(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function at(t){return G(t).replace(/'/g,"&#39;")}function Vt(t){return String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function ot(t){const e=document.getElementById("simulator-list");e&&e.classList.toggle("show-metadata",t)}let r={users:[{id:"12345678901",displayName:"",avatarUrl:"",color:"#ff4b4b",priority:0},{id:"12345678902",displayName:"",avatarUrl:"",color:"#4b4bff",priority:1}],baseFontSize:14,avatarSize:32,gap:8,direction:"column",wrap:"nowrap",justifyContent:"flex-start",themeId:"default",language:"ja",onlyRegistered:!1,hideNames:!1,defaultColor:"#ffffff",unsetUserCount:3,unsetUserPriority:100,displayedUsers:[],padding:0,borderRadius:50,backgroundColor:"rgba(0, 0, 0, 0)",nameBackgroundColor:"rgba(30, 33, 36, 0.95)",shadowEnabled:!1,speakingAnimations:{bounce:!1,glow:!1,shake:!1},filePrefix:new Date().toISOString().slice(0,10).replace(/-/g,""),isOverlayMode:new URLSearchParams(window.location.search).get("mode")==="overlay",showMetadata:!1};r.isOverlayMode&&document.body.classList.add("overlay-active");const L=document.getElementById("user-list"),nt=document.getElementById("theme-selector"),jt=document.getElementById("discord-simulator");let k=null;const st={bounce:!1,glow:!1,shake:!1};function it(t=0){const e=["#5865f2","#57f287","#fee75c","#eb459e","#ed4245","#4f545c"],n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" rx="18" fill="${e[t%e.length]}"/><circle cx="40" cy="31" r="14" fill="#ffffff" opacity=".9"/><path d="M16 72c4-17 16-27 24-27s20 10 24 27" fill="#ffffff" opacity=".9"/></svg>`;return`data:image/svg+xml,${encodeURIComponent(n)}`}function T(t){return`<svg class="app-icon" aria-hidden="true" viewBox="0 0 24 24">${{eye:'<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/>',eyeOff:'<path d="m3 3 18 18"/><path d="M10.7 5.2A9.6 9.6 0 0 1 12 5c6 0 9.5 7 9.5 7a16.8 16.8 0 0 1-2.3 3.1"/><path d="M6.6 6.7C4 8.5 2.5 12 2.5 12s3.5 7 9.5 7a9.4 9.4 0 0 0 4.1-.9"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',image:'<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m6.5 17 4.2-4.2 3.1 3.1 1.7-1.7L19 17.7"/>',close:'<path d="M6 6l12 12"/><path d="M18 6 6 18"/>'}[t]}</svg>`}function qt(){Ft(),Wt(),g(),Yt()}function Ft(){X(),pt(),K(),Gt(),R(),C(),Dt(jt),O()}function Gt(){lt(),dt(),O(),R(),g()}function Wt(){Jt(),Zt(),Kt(),Xt(),Qt(),de()}function Yt(){function t(){k&&(_(k,!1),k=null);const e=Array.from(document.querySelectorAll("#simulator-list [data-userid]")).map(a=>{const n=a.dataset.userid,i=r.displayedUsers.find(s=>s.id===n);return i&&!i.isHidden?i:null}).filter(Boolean);if(e.length>0){const a=e[Math.floor(Math.random()*e.length)];k=a.id,_(a.id,!0);const n=1800+Math.random()*1200;setTimeout(()=>{_(k,!1),k=null;const i=400+Math.random()*1e3;setTimeout(t,i)},n)}else setTimeout(t,1e3)}t()}function Jt(){document.getElementById("add-user").addEventListener("click",()=>{r.users.push({id:Date.now().toString(),displayName:"",avatarUrl:"",color:"#ffffff",priority:r.users.length}),C(),g()});const t=document.getElementById("avatar-upload-base");let e=null;L.addEventListener("click",a=>{const n=a.target.closest(".btn-upload");n&&(e=Number(n.dataset.index),t.click())}),t.addEventListener("change",a=>{const n=a.target.files[0];if(n&&Number.isInteger(e)){const i=new FileReader;i.onload=s=>{const o=s.target.result;r.users[e]&&(r.users[e].avatarUrl=o,C(),g())},i.readAsDataURL(n)}a.target.value=""})}function z(t,e){const a=document.getElementById(t);a&&a.querySelectorAll(".toggle-btn").forEach(n=>{n.addEventListener("click",i=>{const s=i.target.closest(".toggle-btn");if(!s||!a.contains(s))return;a.querySelectorAll(".toggle-btn").forEach(l=>l.classList.remove("active")),s.classList.add("active");const o=s.dataset.value;e==="shadowEnabled"?r[e]=o==="true":r[e]=e==="onlyRegistered"?o==="hide":o,g()})})}function Zt(){z("layout-direction-group","direction"),z("layout-wrap-group","wrap"),z("layout-align-group","justifyContent"),z("unlisted-toggle-group","onlyRegistered"),W("shadow-enabled",()=>r.shadowEnabled,t=>{r.shadowEnabled=t,g()}),W("show-names",()=>!r.hideNames,t=>{r.hideNames=!t,g()})}function W(t,e,a){const n=document.getElementById(t);n&&(n.addEventListener("click",()=>{a(!e()),U(t,e())}),U(t,e()))}function U(t,e){const a=document.getElementById(t);if(!a)return;const n=!!e;a.classList.toggle("active",n),a.setAttribute("aria-checked",String(n))}function A(t,e,a){const n=document.getElementById(t),i=document.getElementById(e),s=o=>{r[a]=parseInt(o)||0,n.value=r[a],i.value=r[a],g(),a==="unsetUserCount"&&ut()};n.addEventListener("input",o=>s(o.target.value)),i.addEventListener("input",o=>s(o.target.value))}function Kt(){A("avatar-size","avatar-size-slider","avatarSize"),A("base-font-size","base-font-size-slider","baseFontSize"),A("container-padding","container-padding-slider","padding"),A("border-radius","border-radius-slider","borderRadius"),A("layout-gap","layout-gap-slider","gap"),A("unset-count","unset-count-slider","unsetUserCount"),document.getElementById("unset-priority").addEventListener("input",t=>{r.unsetUserPriority=parseInt(t.target.value)||0,g()}),document.getElementById("file-prefix").addEventListener("input",t=>{r.filePrefix=t.target.value}),document.getElementById("background-color").addEventListener("input",t=>{r.backgroundColor=t.target.value==="#000000"?"rgba(0, 0, 0, 0)":t.target.value,g()}),document.getElementById("name-background-color").addEventListener("input",t=>{const e=t.target.value,a=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),i=parseInt(e.substring(5,7),16);r.nameBackgroundColor=`rgba(${a}, ${n}, ${i}, 0.95)`,g()}),document.getElementById("default-color").addEventListener("input",t=>{r.defaultColor=t.target.value,g()})}function Xt(){document.querySelectorAll(".lang-btn").forEach(t=>{t.addEventListener("click",e=>{r.language=e.target.dataset.lang,document.querySelectorAll(".lang-btn").forEach(a=>a.classList.remove("active")),e.target.classList.add("active"),X(),pt(),K(),C(),g()})})}function Qt(){document.querySelectorAll(".mode-rail-btn").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.paneTarget;document.querySelectorAll(".mode-rail-btn").forEach(a=>{a.classList.toggle("active",a===t)}),document.querySelectorAll(".pane-panel").forEach(a=>{a.classList.toggle("active",a.dataset.pane===e)})})})}function te(){return r.filePrefix+"_discordpyoko.css"}function ee(){return r.filePrefix+"_discordpyoko-setting.json"}function ae(){return r.filePrefix+"_discordpyoko.zip"}function ne(){const{displayedUsers:t,isOverlayMode:e,showMetadata:a,themeAnimations:n,...i}=r;return i}function ie(t,e){const a=URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download=e,n.click(),URL.revokeObjectURL(a)}const re=(()=>{const t=new Uint32Array(256);for(let e=0;e<256;e++){let a=e;for(let n=0;n<8;n++)a=a&1?3988292384^a>>>1:a>>>1;t[e]=a>>>0}return t})();function oe(t){let e=4294967295;for(const a of t)e=re[(e^a)&255]^e>>>8;return(e^4294967295)>>>0}function c(t,e,a){t.setUint16(e,a,!0)}function y(t,e,a){t.setUint32(e,a,!0)}function se(t){const e=new TextEncoder,a=[],n=[];let i=0;t.forEach(u=>{const m=e.encode(u.name),h=e.encode(u.content),w=oe(h),f=new ArrayBuffer(30),d=new DataView(f);y(d,0,67324752),c(d,4,20),c(d,6,0),c(d,8,0),c(d,10,0),c(d,12,0),y(d,14,w),y(d,18,h.length),y(d,22,h.length),c(d,26,m.length),c(d,28,0),a.push(f,m,h);const S=new ArrayBuffer(46),p=new DataView(S);y(p,0,33639248),c(p,4,20),c(p,6,20),c(p,8,0),c(p,10,0),c(p,12,0),c(p,14,0),y(p,16,w),y(p,20,h.length),y(p,24,h.length),c(p,28,m.length),c(p,30,0),c(p,32,0),c(p,34,0),c(p,36,0),y(p,38,0),y(p,42,i),n.push(S,m),i+=30+m.length+h.length});const s=n.reduce((u,m)=>u+m.byteLength,0),o=new ArrayBuffer(22),l=new DataView(o);return y(l,0,101010256),c(l,4,0),c(l,6,0),c(l,8,t.length),c(l,10,t.length),y(l,12,s),y(l,16,i),c(l,20,0),new Blob([...a,...n,o],{type:"application/zip"})}function le(t){const e=new DataView(t),a=new TextDecoder,n=[];let i=0;for(;i+30<=t.byteLength&&e.getUint32(i,!0)===67324752;){const s=e.getUint16(i+8,!0),o=e.getUint32(i+18,!0),l=e.getUint16(i+26,!0),u=e.getUint16(i+28,!0),m=i+30,h=m+l+u,w=h+o;if(w>t.byteLength)break;const f=a.decode(new Uint8Array(t,m,l));if(s===0){const d=a.decode(new Uint8Array(t,h,o));n.push({name:f,content:d})}i=w}return n}function rt(t){const e=JSON.parse(t);r={...r,...e},lt(),dt(),X(),O(),R(),g(),K(),C(),Y($[r.language].loadConfig+" OK")}function de(){document.getElementById("toggle-debug").addEventListener("click",()=>{r.showMetadata=!r.showMetadata,U("toggle-debug",r.showMetadata),ot(r.showMetadata)}),document.getElementById("copy-css").addEventListener("click",()=>{const t=q(r);navigator.clipboard.writeText(t).then(()=>{const e=$[r.language].copiedAction||"Copied!";Y(e)})}),document.getElementById("save-bundle").addEventListener("click",()=>{const t=q(r),e=JSON.stringify(ne(),null,2),a=se([{name:te(),content:t},{name:ee(),content:e}]);ie(a,ae())}),document.getElementById("import-json-btn").addEventListener("click",()=>{document.getElementById("import-json-input").click()}),document.getElementById("import-json-input").addEventListener("change",t=>{const e=t.target.files[0];if(!e)return;const a=new FileReader;a.onload=n=>{try{if(e.name.toLowerCase().endsWith(".zip")){const s=le(n.target.result).find(o=>o.name.toLowerCase().endsWith(".json"));if(!s)throw new Error("settings json not found in zip");rt(s.content)}else rt(n.target.result)}catch(i){console.error("JSON parse error:",i),Y("Invalid JSON: "+i.message)}},e.name.toLowerCase().endsWith(".zip")?a.readAsArrayBuffer(e):a.readAsText(e),t.target.value=""})}function Y(t){const e=document.createElement("div");e.className="notification",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},2e3)}function R(){const t=document.getElementById("theme-animation-settings");if(!t||!M.find(n=>n.id===r.themeId))return;ct();const a=r.speakingAnimations;t.innerHTML=`
    <div class="input-field horizontal switch-field">
      <label>Bounce</label>
      ${V("bounce-toggle",a.bounce)}
    </div>
    <div class="input-field horizontal switch-field">
      <label>Glow</label>
      ${V("glow-toggle",a.glow)}
    </div>
    <div class="input-field horizontal switch-field">
      <label>Shake</label>
      ${V("shake-toggle",a.shake)}
    </div>
  `,["bounce","glow","shake"].forEach(n=>{W(`${n}-toggle`,()=>r.speakingAnimations[n],i=>{r.speakingAnimations[n]=i,g()})})}function V(t,e){return`<button id="${t}" class="switch-control compact-switch" type="button" role="switch" aria-checked="${String(!!e)}">
    <span class="switch-track" aria-hidden="true"><span class="switch-thumb"></span></span>
  </button>`}function K(){nt.innerHTML="",M.forEach(t=>{const e=document.createElement("button");e.className=`theme-card ${r.themeId===t.id?"active":""}`,e.dataset.theme=t.id,e.type="button";const a=document.createElement("div");a.className="theme-preview-container";const n=a.attachShadow({mode:"open"});n.innerHTML=`
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
      ${ce(t.id)}
    `,e.appendChild(a);const i=document.createElement("span");i.className="theme-name",i.textContent=pe(t),e.appendChild(i),e.addEventListener("click",()=>{r.themeId=t.id,O(),document.querySelectorAll(".theme-card").forEach(s=>s.classList.remove("active")),e.classList.add("active"),R(),g()}),nt.appendChild(e)})}function ce(t){return t==="default"?`
      <div class="thumb list">
        <div class="stack">
          <div class="row">
            <div class="avatar"></div>
            <div class="name">Discord</div>
          </div>
          <div class="row">
            <div class="avatar idle"></div>
            <div class="name">StreamKit</div>
          </div>
        </div>
      </div>
    `:t==="circle"?`
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
    `:`
    <div class="thumb portrait">
      <div class="standee"></div>
    </div>
  `}function pe(t){const e=`preset_${t.id}`;return $[r.language][e]||t.name}function lt(){M.some(t=>t.id===r.themeId)||(r.themeId="default")}function dt(){var t;r.speakingAnimations||(r.speakingAnimations=((t=r.themeAnimations)==null?void 0:t[r.themeId])||{...st}),ct()}function ct(){r.speakingAnimations={...st,...r.speakingAnimations||{}}}function C(){L.innerHTML="",[...r.users].map((e,a)=>({...e,originalIndex:a})).sort((e,a)=>(e.priority??0)-(a.priority??0)).forEach((e,a)=>{const n=String(e.id),i=j(n),s=j(e.displayName||""),o=j(e.avatarUrl||""),l=`preview-user-${e.originalIndex}`,u=document.createElement("div");u.className=`user-item ${e.isHidden?"user-item-hidden":""}`,u.innerHTML=`
      <div class="user-row-head">
        <img src="${o||it(e.originalIndex)}" class="avatar-preview" id="${l}" />
        <div class="user-row-title">
          <input type="text" value="${i}" data-type="id" data-index="${e.originalIndex}" placeholder="${$[r.language].userId}" title="${$[r.language].userId}" />
          <input type="text" value="${s}" data-type="displayName" data-index="${e.originalIndex}" placeholder="表示名" title="${$[r.language].displayName}" ${e.isHidden?"disabled":""} />
        </div>
        <button class="visibility-toggle ${e.isHidden?"hidden":""}" data-index="${e.originalIndex}" title="${$[r.language].visibility}">
          ${T(e.isHidden?"eyeOff":"eye")}
        </button>
      </div>

      <div class="user-row-controls">
        <input type="color" value="${e.color}" data-type="color" data-index="${e.originalIndex}" title="${$[r.language].userColor}" ${e.isHidden?"disabled":""} />
        <input type="number" value="${e.priority??a}" data-type="priority" data-index="${e.originalIndex}" placeholder="0" title="${$[r.language].priority}" ${e.isHidden?"disabled":""} />
        <input type="text" value="${o}" data-type="avatarUrl" data-index="${e.originalIndex}" data-preview-id="${l}" class="avatar-url-input" placeholder="画像URL" title="${$[r.language].avatarOverride}" ${e.isHidden?"disabled":""} />
        <button class="btn-upload" data-index="${e.originalIndex}" title="Upload Image" ${e.isHidden?"disabled":""}>
          ${T("image")}
        </button>
        <button type="button" class="remove-user" data-index="${e.originalIndex}" title="Remove">
          ${T("close")}
        </button>
      </div>
    `,L.appendChild(u)}),L.querySelectorAll("input").forEach(e=>{e.addEventListener("input",a=>{const n=a.target.dataset.type,i=Number(a.target.dataset.index);if(!Number.isInteger(i)||!r.users[i])return;let s=a.target.value;if(n==="priority"&&(s=parseInt(s)||0),r.users[i][n]=s,n==="avatarUrl"){const o=document.getElementById(a.target.dataset.previewId);o&&(o.src=s||it(i))}n==="priority"&&C(),g()})}),L.querySelectorAll(".remove-user").forEach(e=>{e.addEventListener("click",a=>{const n=a.target.closest(".remove-user"),i=Number(n==null?void 0:n.dataset.index);!Number.isInteger(i)||!r.users[i]||(r.users.splice(i,1),C(),g())})}),L.querySelectorAll(".visibility-toggle").forEach(e=>{e.addEventListener("click",a=>{const n=a.target.closest(".visibility-toggle"),i=Number(n==null?void 0:n.dataset.index);!Number.isInteger(i)||!r.users[i]||(r.users[i].isHidden=!r.users[i].isHidden,C(),g())})})}function j(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X(){const t=$[r.language];document.querySelectorAll("[data-i18n]").forEach(e=>{const a=e.dataset.i18n;if(t[a]){const n=e.querySelector(":scope > span:not(.app-icon)");if(n){n.textContent=t[a];return}e.textContent=t[a]}}),window.copiedMessage=t.copiedAction}function pt(){const t=$[r.language];document.getElementById("copy-css").title=t.copyCss,document.getElementById("save-bundle").title=t.saveBundle,document.getElementById("import-json-btn").title=t.loadConfig,document.getElementById("download-offline-app").title=t.offlineDownload,document.querySelector('#layout-direction-group [data-value="row"]').title=t.directionRow,document.querySelector('#layout-direction-group [data-value="column"]').title=t.directionColumn,document.querySelector('#layout-wrap-group [data-value="nowrap"]').title=t.wrapOff,document.querySelector('#layout-wrap-group [data-value="wrap"]').title=t.wrapOn,document.querySelector('#layout-align-group [data-value="flex-start"]').title=t.alignStart,document.querySelector('#layout-align-group [data-value="center"]').title=t.alignCenter,document.querySelector('#layout-align-group [data-value="flex-end"]').title=t.alignEnd}function ut(){const t=document.querySelector('label[for="unset-count"]');t&&(t.textContent=`Unset User Count (${r.unsetUserCount})`)}function O(){document.getElementById("avatar-size").value=r.avatarSize,document.getElementById("avatar-size-slider").value=r.avatarSize,document.getElementById("base-font-size").value=r.baseFontSize,document.getElementById("base-font-size-slider").value=r.baseFontSize,document.getElementById("container-padding").value=r.padding,document.getElementById("container-padding-slider").value=r.padding,document.getElementById("border-radius").value=r.borderRadius,document.getElementById("border-radius-slider").value=r.borderRadius,document.getElementById("layout-gap").value=r.gap,document.getElementById("layout-gap-slider").value=r.gap,document.getElementById("unset-count").value=r.unsetUserCount,document.getElementById("unset-count-slider").value=r.unsetUserCount,document.getElementById("unset-priority").value=r.unsetUserPriority,ut(),U("toggle-debug",r.showMetadata);function t(n,i){const s=document.getElementById(n);s&&s.querySelectorAll(".toggle-btn").forEach(o=>{o.dataset.value===i?o.classList.add("active"):o.classList.remove("active")})}t("layout-direction-group",r.direction),t("layout-wrap-group",r.wrap),t("layout-align-group",r.justifyContent),U("shadow-enabled",r.shadowEnabled),U("show-names",!r.hideNames);const e=document.getElementById("default-color");e&&(e.value=r.defaultColor||"#ffffff");const a=document.getElementById("unlisted-toggle-group");if(a){const n=r.onlyRegistered?"hide":"show";a.querySelectorAll(".toggle-btn").forEach(i=>{i.dataset.value===n?i.classList.add("active"):i.classList.remove("active")})}document.querySelectorAll(".lang-btn").forEach(n=>{n.classList.toggle("active",n.dataset.lang===r.language)}),document.getElementById("file-prefix").value=r.filePrefix}function g(){const t=[];for(let o=0;o<r.unsetUserCount;o++)t.push({id:`unset_${o}`,name:`Unset${o+1}`,color:r.defaultColor,priority:(r.unsetUserPriority??100)+o,isHidden:!1});const e=[...r.users,...t].sort((o,l)=>(o.priority??0)-(l.priority??0));r.displayedUsers=e;const a=q(r);let n=document.getElementById("generated-styles");n||(n=document.createElement("style"),n.id="generated-styles",document.head.appendChild(n)),n.textContent=a;let i=document.getElementById("preview-styles");if(!i){i=document.createElement("style"),i.id="preview-styles";const o=document.getElementById("discord-simulator");o&&o.appendChild(i)}i&&(i.textContent=a);const s=document.getElementById("css-output");s&&(s.textContent=a),Tt(e),ot(r.showMetadata),k&&_(k,!0)}qt();
