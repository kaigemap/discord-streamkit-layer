/**
 * Discord Simulator Logic
 */

export function createSimulator(container) {
  container.innerHTML = `
    <div class="voice-container">
      <ul class="Voice_voiceStates voice-states" id="simulator-list">
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
    return `
      <li class="Voice_voiceState voice_state" data-userid="${user.id}">
        <div class="metadata">[ID: ${user.id}]</div>
        <img class="Voice_avatar voice_avatar" src="https://cdn.discordapp.com/embed/avatars/${index % 6}.png#id=${user.id}" />
        <div class="Voice_user voice_user">
          <span class="Voice_name voice_name">${displayName}</span>
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
