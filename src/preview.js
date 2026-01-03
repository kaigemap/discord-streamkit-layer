/**
 * Discord Simulator Logic
 */

export function createSimulator(container) {
  container.innerHTML = `
    <div class="Voice_voiceContainer voice_container">
      <ul class="Voice_voiceStates voice_states" id="simulator-list">
        <!-- Injected via state -->
      </ul>
    </div>
  `;
}

export function updateSimulator(users) {
  const list = document.getElementById('simulator-list');
  if (!list) return;

  list.innerHTML = users.map((user, index) => {
    const defaultName = user.name || `User ${index + 1}`;
    const displayName = user.displayName && user.displayName.trim() !== '' ? user.displayName : defaultName;
    const avatarSrc = user.avatarUrl 
      ? (user.avatarUrl.includes('#id=') ? user.avatarUrl : `${user.avatarUrl}#id=${user.id}`)
      : `https://cdn.discordapp.com/embed/avatars/${index % 6}.png#id=${user.id}`;
    return `
      <li class="Voice_voiceState voice_state" data-userid="${user.id}">
        <img class="Voice_avatar voice_avatar" src="${avatarSrc}" style="object-fit: cover;" />
        <div class="Voice_user voice_username">
          <span class="Voice_name" style="color: rgb(255, 255, 255); font-size: 14px; background-color: rgba(30, 33, 36, 0.95);">${displayName}</span>
        </div>
      </li>
    `;
  }).join('');
}

export function setSpeaking(userId, isSpeaking) {
  const node = document.querySelector(`#simulator-list [data-userid="${userId}"]`);
  if (node) {
    const avatar = node.querySelector('.Voice_avatar');
    if (avatar) {
      if (isSpeaking) {
        node.classList.add('wrapper_speaking');
        avatar.classList.add('Voice_avatarSpeaking');
      } else {
        node.classList.remove('wrapper_speaking');
        avatar.classList.remove('Voice_avatarSpeaking');
      }
    }
  }
}

export function toggleMetadata() {
  const list = document.getElementById('simulator-list');
  if (list) {
    list.classList.toggle('show-metadata');
  }
}
