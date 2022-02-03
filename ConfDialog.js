class ConfDialog extends HTMLElement {
    constructor() {
        super();
        this.text = "";
    }
    connectedCallback() {
        this.render();
        const bodyBlackout = document.querySelector('.bodyDarken');
        const textButton = document.querySelectorAll('.text-button');

        textButton.forEach(button => {
            button.addEventListener('click', () => {
                const {popupTrigger} = button.dataset;
                const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);
                popupModal.classList.remove('is-visible');
                bodyBlackout.classList.remove('blacked-out');
                this.text = `You Clicked: ${button.textContent}`;
                this.render();
            })
        })
    }
    render() {
        this.innerHTML =
            `
            <div>
                <h4 id="response">${this.text}</h4>
            </div>
            `
    }
}

customElements.define("confirmation-dialog", ConfDialog);