class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); 

        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.innerHTML = `

        `;
    }
};

customElements.define('devjobs-avatar', DevJobsAvatar);