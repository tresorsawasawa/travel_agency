import { BiArrowFromLeft } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook, FiTwitter } from 'react-icons/fi';

const inputData = [
  {
    id: 1,
    for: 'Depart location',
    label: 'Lieu de depart',
    placeholder: 'De: ...',
    type: 'text',
    required: 'required',
    icon: <BiArrowFromLeft className="icon" />,
    dataDateFormat: '',
  },

  {
    id: 2,
    for: 'Destination location',
    label: 'Selection votre destination',
    placeholder: 'À: ...',
    type: 'text',
    required: 'required',
    icon: <GoLocation className="icon" />,
    dataDateFormat: '',
  },

  {
    id: 3,
    for: 'Depart Date',
    label: 'Date de Depart',
    placeholder: 'Choisir  la date',
    type: 'date',
    required: 'required',
    icon: '',
    dataDateFormat: 'DD MMMM YYYY',
  },

  {
    id: 4,
    for: 'Return Date',
    label: 'Date de Retour(Si, Aller-Retour)',
    placeholder: 'Choisir  la date',
    type: 'date',
    required: '',
    icon: '',
    dataDateFormat: 'DD MMMM YYYY',
  },
];

const leftIcons = [
  {
    id: 1,
    link: 'https://www.facebook.com',
    icon: <FiFacebook className="icon" />,
  },
  {
    id: 2,
    link: 'https://www.instagram.com',
    icon: <AiOutlineInstagram className="icon" />,
  },
  {
    id: 3,
    link: 'https://www.twitter.com',
    icon: <FiTwitter className="icon" />,
  },
];

const rightIcons = [
  { id: 1, icon: <BsListTask className="icon" /> },
  { id: 2, icon: <TbApps className="icon" /> },
];

export { inputData, leftIcons, rightIcons };
