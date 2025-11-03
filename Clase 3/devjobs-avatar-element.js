import { state } from './config.js'

state.count++

console.log(state)

class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); 

        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <img 
                src="https://unavatar.io/google.com"
                alt="Avatar de usuario"
                class="avatar"
                style="
                    width: 40px;
                    height: 40px;
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