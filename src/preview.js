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

function getDefaultAvatarUrl(index = 0) {
  const colors = ['#5865f2', '#57f287', '#fee75c', '#eb459e', '#ed4245', '#4f545c'];
  const fill = colors[index % colors.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" rx="18" fill="${fill}"/><circle cx="40" cy="31" r="14" fill="#ffffff" opacity=".9"/><path d="M16 72c4-17 16-27 24-27s20 10 24 27" fill="#ffffff" opacity=".9"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function updateSimulator(users) {
  const list = document.getElementById('simulator-list');
  if (!list) return;

  list.innerHTML = users.map((user, index) => {
    const defaultName = user.name || `User ${index + 1}`;
    const displayName = user.displayName && user.displayName.trim() !== '' ? user.displayName : defaultName;
    const avatarSrc = user.avatarUrl
      ? (user.avatarUrl.includes('#id=') ? user.avatarUrl : `${user.avatarUrl}#id=${user.id}`)
      : `${getDefaultAvatarUrl(index)}#id=${user.id}`;
    return `
      <li class="Voice_voiceState voice_state" data-userid="${escapeHtmlAttr(user.id)}">
        <span class="metadata">${escapeHtmlText(user.id)}</span>
        <img class="Voice_avatar voice_avatar" src="${escapeHtmlAttr(avatarSrc)}" />
        <div class="Voice_user voice_username">
          <span class="Voice_name">${escapeHtmlText(displayName)}</span>
        </div>
      </li>
    `;
  }).join('');
}

export function setSpeaking(userId, isSpeaking) {
  const node = document.querySelector(`#simulator-list [data-userid="${escapeCssString(userId)}"]`);
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

function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value) {
  return escapeHtmlAttr(value).replace(/'/g, '&#39;');
}

function escapeCssString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

export function toggleMetadata(force) {
  const list = document.getElementById('simulator-list');
  if (list) {
    list.classList.toggle('show-metadata', force);
  }
}
