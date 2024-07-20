import React from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../components/ui/section-titles/SectionTitle";
import listingData from "../../data/listings/listings-logos.json";
import ListingSingle from "./ListingsSingle";

const Listings = () => {
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
              title="OUR LISTINGS"
              text="We are working on a new way to invest in cryptocurrencies."
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
                  {listingData &&
                    listingData.map((single, key) => {
                      return (
                        <ListingSingle
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

export default Listings;
