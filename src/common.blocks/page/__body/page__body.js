// scroll: lock / unlock

const pageBody = document.body;
export const scrollController = {
	scrollPosition: 0,
	lockScroll() {
		scrollController.scrollPosition = window.scrollY;
		let lockPadding = window.innerWidth - pageBody.offsetWidth;
		pageBody.classList.add('lock-scroll');
		pageBody.style.cssText = `
			top: -${scrollController.scrollPosition}px;
			padding-right: ${lockPadding}px;
		`;
		document.documentElement.style.scrollBehavior = 'unset';
	},

	unLockScroll() {
		pageBody.classList.remove('lock-scroll');
		pageBody.style.cssText = '';
		window.scroll({ top: scrollController.scrollPosition });
		document.documentElement.style.scrollBehavior = '';
	}
};