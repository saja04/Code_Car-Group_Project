import bannerToyota from "../../img/BANNER1.png";
import bannerFord from "../../img/BANNER11.jpg";
import bannerChevrolet from "../../img/BANNER2.jpg";
import style from "./banner.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={100}
      useKeyboardArrows={true}
    >
      <img className={style.img} src={bannerToyota} alt="" />
      <img className={style.img} src={bannerChevrolet} alt="" />
      <img className={style.img} src={bannerFord} alt="" />
    </Carousel>
  );
}

export default Banner;
