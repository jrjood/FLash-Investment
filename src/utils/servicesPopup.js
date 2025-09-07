// src/utils/servicesPopup.js
import img1 from '../assets/images/popupImages/Activation.jpeg';
import img2 from '../assets/images/popupImages/Events.jpg';
import img3 from '../assets/images/popupImages/Exhibitions.jpg';
import img4 from '../assets/images/popupImages/Roadshows.jpg';
import img5 from '../assets/images/popupImages/POS_Marketing.jpg';
import img6 from '../assets/images/popupImages/Stunts.png';
import img7 from '../assets/images/popupImages/Team_Building.jpeg';
import img8 from '../assets/images/popupImages/Digital_Marketing.png';

// NOTE: Keep these image imports for now; swap with real estate photos later.

const servicesPopup = {
  Swimming_Pools: {
    image: img1,
    title: 'Swimming Pools',
    text: `Various swimming pools designed for both adults and children, ensuring safe and enjoyable experiences for the entire family.`,
  },

  Health_Club_and_Spa: {
    image: img2,
    title: 'Health Club and Spa',
    text: `A fully integrated sports center and spa area offering fitness facilities, relaxation zones, and wellness services.`,
  },

  Commercial_Areas: {
    image: img3,
    title: 'Commercial Areas',
    text: `Conveniently located cafes, restaurants, and a supermarket to meet daily needs within the community.`,
  },

  Security_and_Guarding: {
    image: img4,
    title: 'Security and Guarding',
    text: `24/7 security and professional guarding services to ensure safety, comfort, and peace of mind.`,
  },

  Childrens_Area: {
    image: img5,
    title: "Children's Area",
    text: `Safe, designated play areas where children can enjoy recreational activities under secure supervision.`,
  },

  Bicycle_Paths: {
    image: img6,
    title: 'Bicycle Paths',
    text: `Dedicated cycling and walking paths designed for safety, fitness, and leisure.`,
  },

  Sports_Fields: {
    image: img7,
    title: 'Sports Fields',
    text: `Multi-purpose courts for tennis, football, and basketball, offering residents spaces to stay active and engaged.`,
  },

  Parking: {
    image: img8,
    title: 'Parking',
    text: `Private parking facilities allocated for each unit, ensuring security and convenience for residents.`,
  },
};

export default servicesPopup;
