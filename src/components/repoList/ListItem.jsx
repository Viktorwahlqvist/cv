/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./listitem.css";

const ListItem = ({ readmeArray }) => {
  return (
    // Swiper är ett bibliotek som jag använder för att visa mina repon som en karusell.
    <Swiper
      className="swiper-container"
      // tabIndex 0 är för att den ska vara i fokus direkt så man kan byta bild med keyboard.
      tabIndex={0}
      /* Alla modulere som ska användas, och det är t.ex vad man vill ha pilar. cirklarna under bilden
       keyboard för kunna ändra med tangentboardet, autoplay så den byter bild efter en viss tid.
       och sedan effekten som jag använder är EffectOverflow*/
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Keyboard,
        Autoplay,
        EffectCoverflow,
      ]}
      keyboard={{ enabled: true, onlyInViewport: true }}
      autoplay={{ enabled: true, delay: 4000 }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      centeredSlides={true}
    >
      {/* Går igenom varje i arrayen och skapar en swiperslide för varje readme bild med 
      ett repo namn som är ska vara key */}
      {readmeArray.map(([repoName, readmeData]) => {
        return (
          <SwiperSlide className="swiper-slide" key={repoName}>
            <a
              className="swiper-slide-link"
              href={readmeData.repoLinks}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="swiper-slide-img"
                src={readmeData.links}
                alt={repoName}
              />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ListItem;
