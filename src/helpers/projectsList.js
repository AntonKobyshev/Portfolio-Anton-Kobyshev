import project01 from 'img/projects/01.jpg';
import project01Big from 'img/projects/01-big.jpg';
import project02 from 'img/projects/02.jpg';
import project02Big from 'img/projects/02-big.jpg';
import project03 from 'img/projects/03.jpg';
import project03Big from 'img/projects/03-big.jpg';
import project04 from 'img/projects/04.jpg';
import project04Big from 'img/projects/04-big.jpg';
import project05 from 'img/projects/05.jpg';
import project05Big from 'img/projects/05-big.jpg';

const projects = [
  {
    id: 1,
    title: 'Filmoteka',
    skills: '[HTML, SASS, JavaScript, Axios, Parcel, REST API]',
    img: project01,
    imgBig: project01Big,
    link: 'https://antonkobyshev.github.io/Filmoteka-lighter-project/',
    gitHubLink: 'https://github.com/AntonKobyshev/Filmoteka-lighter-project',
    description:
      'Team project. Role: TeamLead. Website for searching popular films with the possibility loginization, watching trailers, adding to queue for watching or add as a watched film',
  },
  {
    id: 2,
    title: 'Phonebook',
    skills: '[React, Redux Toolkit, Formik, Yup]',
    img: project02,
    imgBig: project02Big,
    link: 'https://antonkobyshev.github.io/goit-react-hw-08-phonebook/contacts',
    gitHubLink: 'https://github.com/AntonKobyshev/goit-react-hw-08-phonebook',
    description:
      'Individual project. Role: developer. A simple phonebook application which provides a simple and intuitive interface forsearching, adding and deleting contacts.',
  },
  {
    id: 3,
    title: 'Ice Cream',
    skills: '[HTML, SASS, Parcel]',
    img: project03,
    imgBig: project03Big,
    link: 'https://kriminz.github.io/Lighter/',
    gitHubLink: 'https://github.com/Kriminz/Lighter',
    description:
      'Team project. Role: Scrum Master. The adaptive landing page for Ice cream shop.',
  },
  {
    id: 4,
    title: 'Image Finder',
    skills: '[HTML, SASS, JavaScript, Axios, Parcel, REST API]',
    img: project04,
    imgBig: project04Big,
    link: 'https://antonkobyshev.github.io/goit-react-hw-04-images/',
    gitHubLink: 'https://github.com/AntonKobyshev/goit-react-hw-04-images',
    description:
      'Individual project. Role: developer. A simple image search app based on React hooks technology.',
  },
  {
    id: 5,
    title: 'Web Studio',
    skills: '[HTML, SASS]',
    img: project05,
    imgBig: project05Big,
    link: 'https://antonkobyshev.github.io/goit-markup-hw-08/index.html',
    gitHubLink: 'https://github.com/AntonKobyshev/goit-markup-hw-08',
    description:
      'Individual project. Role: developer. A website of WebStudio company. Responsive design, transform effects, modal windows.',
  },
];

export { projects };
