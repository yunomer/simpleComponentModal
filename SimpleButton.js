class SimpleButton extends HTMLElement {
    constructor() {
        super();
        this.list = "";
    }
    connectedCallback() {
        this.list = this.getAttribute("list").split(", ");
        this.render();
        const modalTriggers = document.querySelectorAll('.modalTrigger');
        const bodyBlackout = document.querySelector('.bodyDarken');

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const {popupTrigger} = trigger.dataset;
                const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);
                popupModal.classList.add('is-visible');
                bodyBlackout.classList.add('blacked-out');
            });
        });

    }
    render() {
        const listButtons = this.list.map((item) => `<button type="button" class="text-button yes-button modal-close" data-popup-trigger="modal">${item}</button>`).join('');
        this.innerHTML =
            `
            <button type="button" class="modalTrigger" data-popup-trigger="modal">
                Click me
            </button>
            <div class="popup-modal" data-popup-modal="modal">
                <div class="center-text">
                    <h2>
                        Are you sure you want to continue?
                    </h2>
                </div>
            `
            +
            `
                <div class="buttons-text">
                    ${listButtons}
                </div>
            </div>
            `
    }
}

customElements.define("simple-button", SimpleButton);