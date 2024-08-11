import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import coin360 from '../../assets/listings/Coin360.png'; // Replace with actual paths to your logos
import coincap from '../../assets/listings/coincap.png';
import coingecko from '../../assets/listings/coingecko.png';
import coinmarketcap from '../../assets/listings/coinmarketcap.png';
import cryptocompare from '../../assets/listings/cryptocompare.png';
import icodrop from '../../assets/listings/icodrops.png';


const ListingLogoSwiper = () => {
  const settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    { src: coin360, alt: 'coin360' },
    { src: coincap, alt: 'coincap' },
    { src: coingecko, alt: 'coingecko' },
    { src: coinmarketcap, alt: 'coinmarketcap' },
    { src: cryptocompare, alt: 'cryptocompare' },
    { src: icodrop, alt: 'icodrop' },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo.src} alt={logo.alt} className="logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ListingLogoSwiper;
