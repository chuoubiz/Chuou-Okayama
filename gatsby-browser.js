import './src/css/main.scss';
import 'swiper/swiper-bundle.min.css';

export const onRouteUpdate = ({ location }) => {
  if (location.action === 'PUSH') {
    window.scrollTo(0, 0);
  }
};
