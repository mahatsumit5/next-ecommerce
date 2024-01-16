"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import {
  Navigation,
  EffectCoverflow,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { ICategory } from "@/types";
import CustomCard from "../shared/Card";
import { useEffect, useState } from "react";
export function CategoryCarousel({ categories }: { categories: ICategory[] }) {
  const [slides, setSlides] = useState<number>(4);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  useEffect(() => {
    switch (true) {
      case width < 1356 && width > 1050:
        setSlides(3);
        break;

      case width < 1050 && width > 679:
        setSlides(2);
        break;

      case width < 679:
        setSlides(1);
        break;

      default:
        setSlides(4);
    }
  }, [width]);
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectCoverflow]}
      centeredSlides={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      spaceBetween={10}
      slidesPerView={slides}
    >
      {categories.map((item) => (
        <SwiperSlide key={item._id}>
          <CustomCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
