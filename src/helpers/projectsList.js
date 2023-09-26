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
import project06 from 'img/projects/06.jpg';
import project06Big from 'img/projects/06-big.jpg';
import project07 from 'img/projects/07.jpg';
import project07Big from 'img/projects/07-big.jpg';
import project08 from 'img/projects/08.jpg';
import project08Big from 'img/projects/08-big.jpg';

const projects = [
  {
    id: 1,
    title: 'Rent a car',
    skills: '[JavaScript, React, ReduxToolkit, Emotion, Axios, Mock-Api]',
    img: project07,
    imgBig: project07Big,
    link: 'https://car-rental-test-task.vercel.app',
    gitHubLink: 'https://github.com/AntonKobyshev/car-rental-test-task',
    description:
      'Individual project. Role: developer. Simple app for find and rent a car. With possibility to add to the "Favorite" the car you like',
  },
  {
    id: 2,
    title: 'Your pet',
    skills:
      '[JavaScript, React, ReduxToolkit, StyledCss, Axios, Formik, Toastify, Yup]',
    img: project08,
    imgBig: project08Big,
    link: 'https://gr03-yourpet-frontend.vercel.app/',
    gitHubLink: 'https://github.com/AntonKobyshev/gr03-yourpet-frontend',
    description:
      'Team Fullstack project. Role: TeamLead FrontEnd. Your pet — is an online pet search platform that provides a quick and easy way to find a pet among a large volume of ads. Users can browse ads for pets that are available for sale or give away for free, as well as for found or lost pets. Registered users can post their own ads, add interesting ads to the selected list. In the personal account, registered users can update and edit personal information that will be displayed in their ads. Users can also upload photos of their pets to their own page.',
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    title: 'ToDo App',
    skills: '[Vue, Vite, JavaScript, SASS]',
    img: project06,
    imgBig: project06Big,
    link: 'https://todo-list-vue-orcin.vercel.app',
    gitHubLink: 'https://github.com/AntonKobyshev/todo-list-vue',
    description: 'Individual project. Role: developer. Simple ToDo App.',
  },
  {
    id: 8,
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
