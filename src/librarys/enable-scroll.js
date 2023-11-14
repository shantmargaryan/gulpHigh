import vars from "../config.script/vars";

export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = parseInt(vars.pageBody.dataset.position, 10);
  fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
  vars.pageBody.style.paddingRight = '0px';

  vars.pageBody.style.top = 'auto';
  vars.pageBody.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  vars.pageBody.removeAttribute('data-position');
  vars.page.style.scrollBehavior = 'smooth';
}
