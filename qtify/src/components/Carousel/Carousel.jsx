import { Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../Card/Card";
import NextButton from "./NextButton/NextButton";
import PrevButton from "./PrevButton/PrevButton";
import styles from "./Carousel.module.css";
import { useRef, useState, useEffect } from "react";

export default function Carousel({ items, type }) {
  const swiperRef = useRef(null);
  // For forceRe-rendering
  const [triggerRender, setRender] = useState();
 

  useEffect(() => {
    setRender({});
  }, []);

  return (
    <div className={styles.swiper_wrapper}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setRender({});
        }}
        spaceBetween={40}
        modules={[Navigation]}
        allowTouchMove
        slidesPerView={"auto"}
      >
        {items?.data 
  ? items.data.map((item) => (
      <SwiperSlide key={item.id}>
        <Card item={item} type={type} />
      </SwiperSlide>
    ))
  : Array.isArray(items) 
    ? items.map((item) => (
        <SwiperSlide key={item.id}>
          <Card item={item} type={type} />
        </SwiperSlide>
      ))
    : null}
        
      </Swiper>{" "}
      <div className={styles.button_wrapper}>
        <PrevButton className={styles.prev} swiper={swiperRef.current} />
        <NextButton className={styles.next} swiper={swiperRef.current} />
      </div>
    </div>
  );
}