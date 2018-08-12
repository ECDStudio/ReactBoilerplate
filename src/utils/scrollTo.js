import scroll from 'scroll';
import scrollDoc from 'scroll-doc';

export const scrollTo = (target, offset=0) => {
  const elTop = target.getBoundingClientRect().top;
  const docTop = - window.pageYOffset || document.documentElement.scrollTop;
  let position = elTop - docTop + offset;

  if (position + window.innerHeight > document.body.offsetHeight) {
    position = document.body.offsetHeight - window.innerHeight;
  } else if (position < 0) {
    position = 0;
  }

  scroll.top(scrollDoc(), position);
};
