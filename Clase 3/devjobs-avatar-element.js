class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); 

        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot.innerHTML = `

        `;
    }

    connectedCallback() {
        this.render();
    }
};

customElements.define('devjobs-avatar', DevJobsAvatar);