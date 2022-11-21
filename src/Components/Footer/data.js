import uuid from 'react-uuid';

const companyInfo = [
  {
    id: uuid(),
    link: '/about',
    name: 'About-us',
    className: 'navLink',
  },
  {
    id: uuid(),
    link: '/contacts',
    name: 'Contacts',
    className: 'navLink',
  },
  {
    id: uuid(),
    link: '/destinations',
    name: 'Destinations',
    className: 'navLink',
  },
];

export default companyInfo;
