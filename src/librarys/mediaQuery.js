class MediaQueryHandler {
	constructor(width, breakpoint, options) {
		let defaultOptions = {
			trueChange: () => { },
			falseChange: () => { },
		};
		this.width = width;
		this.breakpoint = breakpoint;
		this.options = Object.assign(defaultOptions, options);
		this.mediaQuery = window.matchMedia(`(${ this.width } - width: ${ this.breakpoint }px)`);
		this.mediaQuery.addEventListener("change", this.handleMediaChange.bind(this));
		this.initMedia();
	}

	initMedia() {
		if (this.mediaQuery.matches) {
			this.options.trueChange(this);
		} else {
			this.options.falseChange(this);
		}
	}

	handleMediaChange(event) {
		if (event.matches) {
			this.options.trueChange(this);
			return true
		} else {
			this.options.falseChange(this);
			return false
		}
	}
}