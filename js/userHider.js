function inputChange(event) {
  msg.innerText = p.replace(/UserId/g, muteIdText.value);
}

let muteIdText = document.getElementById("muteIdText");
muteIdText.addEventListener("change", inputChange);
let msg = document.getElementById("customMuteCss");
const p = `

/* 背景を透明に */
body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }

/* 非表示Userの高さを無くす（縦並び） */
ul[class^="Voice_voiceStates"] {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
li[class^="Voice_voiceState"]{
  height: min-content;
  margin-bottom: 0;
}

/* 非表示Userの設定 */
img[src*="UserId"],
img[src*="UserId"] + div[class^="Voice_user"] {
  display: none;
}`;