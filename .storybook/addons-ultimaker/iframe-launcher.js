// Open Iframe in new window for vue devTools to work:
class IframeLauncher {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.keyCodes = { i: 73 }
        this.addEventListener();
    }

    addEventListener() {
        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }

    openIframeInNewWindow() {
        if(!this.iFrame) this.iFrame = document.querySelector("#storybook-preview-iframe");
        window.open(this.iFrame.src);
    }

    handleKeyDown(e) {
        if(e.keyCode === this.keyCodes.i && e.shiftKey && e.metaKey) this.openIframeInNewWindow();
    }
}

export default new IframeLauncher();