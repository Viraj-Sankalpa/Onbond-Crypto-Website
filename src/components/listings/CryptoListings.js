import React from 'react';
import '../../assets/scss/blocks/CryptoListings.scss';
import SectionTitle from '../ui/section-titles/SectionTitle';

const logos = [
  { id: 1, src: 'images/listings/icodrops.svg', alt: 'Logo 1', link: '#' },
  { id: 2, src: 'images/listings/coinmarketcap.png', alt: 'Logo 2', link: '#' },
  { id: 3, src: 'images/listings/coincap.svg', alt: 'Logo 3', link: '#' },
  { id: 4, src: 'images/listings/coingecko.svg', alt: 'Logo 4', link: '#' },
  { id: 5, src: 'images/listings/cryptocompare.png', alt: 'Logo 5', link: '#' },
  { id: 6, src: 'images/listings/Coin360.svg', alt: 'Logo 6', link: '#' },
  { id: 7, src: 'images/listings/coinlib.png', alt: 'Logo 7', link: '#' },
];

const CryptoListings = () => {
  return (
    <div>
      <SectionTitle
            title="Our listings"
            text="We are working on a new way to invest in cryptocurrencies."
          />
    <div className="logos-row">
      {logos.map((logo) => (
        <a key={logo.id} href={logo.link} className="logo-button">
          <img src={logo.src} alt={logo.alt} className="logo-image" />
        </a>
      ))}
    </div>
    </div>
  );
};

export default CryptoListings;
