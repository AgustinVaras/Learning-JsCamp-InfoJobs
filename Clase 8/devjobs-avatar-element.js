import { state } from './config.js'

state.count++

console.log(state)

class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); 

        this.attachShadow({ mode: 'open' });
    }

    createURL(service, username, size) {
        return `https://unavatar.io/${service}/${username}`;
    }

    render() {
        const service = this.getAttribute('service') ?? 'github';
        const username = this.getAttribute('username') ?? 'mdo';
        const size = this.getAttribute('size') ?? '40';

        const avatarURL = this.createURL(service, username, size);

        this.shadowRoot.innerHTML = `
            <img 
                src="${avatarURL}"
                alt="Avatar de ${username}"
                class="avatar"
                style="
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 9999px;
                "
            />
        `;
    }

    connectedCallback() {
        this.render();
    }
};

customElements.define('devjobs-avatar', DevJobsAvatar);