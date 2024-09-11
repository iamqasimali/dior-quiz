// Import images
import cardimg1 from '../assets/images/6.webp';
import cardimg2 from '../assets/images/7.webp';
import cardimg3 from '../assets/images/8.webp';
import cardimg4 from '../assets/images/9.webp';

// Import credit card logos
import visaLogo from '../assets/logo/visa.png';
import mastercardLogo from '../assets/logo/mastercard.png';
import hipercardLogo from '../assets/logo/hipercard.png';
import eloLogo from '../assets/logo/elo.png';
import americanExpressLogo from '../assets/logo/americanexpress.png';

export const checkoutdata = {
  images: [
    cardimg1,
    cardimg2,
    cardimg3,
    cardimg4
  ],
  creditCardLogos: [
    { name: 'Visa', src: visaLogo },
    { name: 'MasterCard', src: mastercardLogo },
    { name: 'Hipercard', src: hipercardLogo },
    { name: 'Elo', src: eloLogo },
    { name: 'American Express', src: americanExpressLogo }
  ]
};

export default checkoutdata;
