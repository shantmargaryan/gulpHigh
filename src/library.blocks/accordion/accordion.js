class accordion {
  constructor(selector, options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      speed: 300
    };
    
    this.options = Object.assign(defaultOptions, options);
    this.accordion = document.querySelector(selector);
    this.control = document.querySelector(".accordion__control");
    this.content = document.querySelector(".accordion__content");
    this.event();
  }

  event() {
    if (this.accordion) {
      this.accordion.addEventListener("click", (e) => {
        this.accordion.classList.toggle("accordion_open");

        if (this.accordion.classList.contains("accordion_open")) {
          this.open();
        } else {
          this.close();
        }
      });
    }
  }

  open() {
    this.accordion.style.setProperty("accordion-speed", `${this.options.speed / 1000}s`);
    this.accordion.classList.add("accordion_open_animation");
    this.control.setAttribute("aria-expanded", true);
    this.content.setAttribute("aria-hidden", false);
    this.content.style.maxHeight = this.content.scrollHeight + "px";
    this.options.isOpen(this);
  }

  close() {
    this.accordion.classList.remove("accordion_open_animation");
    this.control.setAttribute("aria-expanded", false);
    this.content.setAttribute("aria-hidden", true);
    this.content.style.maxHeight = null;
    this.options.isClose(this);
  }
}



// const accordionController = (accordionElem) => {
// 	const accordion = document.querySelector(accordionElem);
// 	accordion.addEventListener('click', function (event) {
// 		const click = event.target;
// 		const accordionBtns = accordion.querySelectorAll('.accordion__btn');
// 		const accordionContent = accordion.querySelectorAll('.accordion__content');
// 		if (click.closest('.accordion__btn')) {
// 			const content = click.closest('.accordion__btn').nextElementSibling;
// 			const accordionBtn = click.closest('.accordion__btn');
// 			if (content.style.maxHeight) {
// 				accordionBtn.classList.remove('_active');
// 				content.style.maxHeight = null;
// 				content.classList.remove('_active');
// 			}
// 			else {
// 				if (accordion.closest('.turn')) {
// 					accordionContent.forEach((el) => { el.classList.remove('_active') });
// 					accordionBtns.forEach((el) => { el.classList.remove('_active') });
// 					accordionContent.forEach((el) => { el.style.maxHeight = null });
// 				}
// 				if (accordionBtn.closest('._active')) {
				
// 				}
// 				setTimeout(() => {
// 					content.style.maxHeight = '100vh';
// 				}, 300);
// 				content.style.maxHeight = content.scrollHeight + 'px';
// 				accordionBtn.classList.add('_active');
// 				content.classList.add('_active');
// 			}
// 		}
// 		event.preventDefault();
// 	});
// };
// accordionController('.accordion-1');