import React from "react";
import Swiper from "react-id-swiper";
import BrandLogoSingle from "../../components/brand-logos/BrandLogoSingle";
import SectionTitle from "../../components/ui/section-titles/SectionTitle";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";

const BrandLogo = () => {
  const params = {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      992: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div className="dg__brand__area bg__color--3 pt--90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
         
            {/* section title */}
            <SectionTitle
              title="We work Together"
              text="A showcase of our strategic partnerships and technological foundations. These collaborations and tools empower our project, enhancing its capabilities and credibility in the blockchain ecosystem."
            />
          </div>
        </div>
      </div>
      <div className="container-fluid space-between">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand__inner">
              <ul className="brand__list brand__acivation">
                <Swiper {...params}>
                  {brandLogoData &&
                    brandLogoData.map((single, key) => {
                      return (
                        <BrandLogoSingle
                          data={single}
                          key={key}
                          sliderClass="swiper-slide"
                        />
                      );
                    })}
                </Swiper>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
     
     
    </div>
    
  );
};

export default BrandLogo;
