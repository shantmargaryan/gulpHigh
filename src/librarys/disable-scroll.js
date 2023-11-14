import vars from "../config.script/vars";

export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${(window.innerWidth - vars.pageBody.offsetWidth)}px`;

  vars.page.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
	vars.pageBody.style.paddingRight = paddingOffset;
	vars.pageBody.classList.add('dis-scroll');
	vars.pageBody.dataset.position = pagePosition;
	vars.pageBody.style.top = `-${pagePosition}px`;
}