import uuid from 'react-uuid';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Paris from '../../assets/images/paris.jpg';
import Doha from '../../assets/images/doha.jpg';
import Kigali from '../../assets/images/Kigali_city.jpg';
import Honkong from '../../assets/images/honkong.jpg';
import Dubai from '../../assets/images/dubai.jpg';
import Berlin from '../../assets/images/berlin.jpg';
import Dubai1 from '../../assets/images/Dubai.jpg';

const mostVisitedData = [
  {
    id: uuid(),
    image: Kigali,
    destTitle: 'Makuza Plazza',
    location: 'Kigali',
    fees: '$234',
    grade: 'CULTURAL RELAX',
    icon: <HiOutlineLocationMarker className="icon" />,
    description:
      'Quae, dolor quas sunt, officiis nihil tempore vitae quo a consectetur esse, natus praesentium cupiditate quidem debitis inventore eius voluptatem! Dolores officia voluptatem quis ex a fugit hic, dignissimos corporis. Distinctio vero et tenetur unde repellendus, similique tempora impedit reprehenderit maxime, neque commodi repudiandae quam veniam suscipit asperiores consequuntur officia quod doloremque tempore itaque dolorem veritatis quas. Perferendis, assumenda sint.',
  },
  {
    id: uuid(),
    image: Paris,
    destTitle: 'Lorem Ipsum',
    location: 'Paris',
    fees: '$280',
    grade: 'CULTURAL RELAX',
    icon: <HiOutlineLocationMarker className="icon" />,
    description:
      'Quae, dolor quas sunt, officiis nihil tempore vitae quo a consectetur esse, natus praesentium cupiditate quidem debitis inventore eius voluptatem! Dolores officia voluptatem quis ex a fugit hic, dignissimos corporis. Distinctio vero et tenetur unde repellendus, similique tempora impedit reprehenderit maxime, neque commodi repudiandae quam veniam suscipit asperiores consequuntur officia quod doloremque tempore itaque dolorem veritatis quas. Perferendis, assumenda sint.',
  },
  {
    id: uuid(),
    image: Honkong,
    destTitle: 'Lorem Ipsum',
    location: 'Honkong',
    fees: '$90',
    grade: 'CULTURAL RELAX',
    icon: <HiOutlineLocationMarker className="icon" />,
    description:
      'Quae, dolor quas sunt, officiis nihil tempore vitae quo a consectetur esse, natus praesentium cupiditate quidem debitis inventore eius voluptatem! Dolores officia voluptatem quis ex a fugit hic, dignissimos corporis. Distinctio vero et tenetur unde repellendus, similique tempora impedit reprehenderit maxime, neque commodi repudiandae quam veniam suscipit asperiores consequuntur officia quod doloremque tempore itaque dolorem veritatis quas. Perferendis, assumenda sint.',
  },
  {
    id: uuid(),
    image: Dubai,
    destTitle: 'Lorem Ipsum',
    location: 'Dubai',
    fees: '$234',
    grade: 'CULTURAL RELAX',
    icon: <HiOutlineLocationMarker className="icon" />,
    description:
      'Quae, dolor quas sunt, officiis nihil tempore vitae quo a consectetur esse, natus praesentium cupiditate quidem debitis inventore eius voluptatem! Dolores officia voluptatem quis ex a fugit hic, dignissimos corporis. Distinctio vero et tenetur unde repellendus, similique tempora impedit reprehenderit maxime, neque commodi repudiandae quam veniam suscipit asperiores consequuntur officia quod doloremque tempore itaque dolorem veritatis quas. Perferendis, assumenda sint.',
  },
  {
    id: uuid(),
    image: Dubai1,
    destTitle: 'Lorem Ipsum',
    location: 'Dubai',
    fees: '$204',
    grade: 'CULTURAL RELAX',
    icon: <HiOutlineLocationMarker className="icon" />,
    description:
      'Quae, dolor quas sunt, officiis nihil tempore vitae quo a consectetur esse, natus praesentium cupiditate quidem debitis inventore eius voluptatem! Dolores officia voluptatem quis ex a fugit hic, dignissimos corporis. Distinctio vero et tenetur unde repellendus, similique tempora impedit reprehenderit maxime, neque commodi repudiandae quam veniam suscipit asperiores consequuntur officia quod doloremque tempore itaque dolorem veritatis quas. Perferendis, assumenda sint.',
  },
  {
    id: uuid(),
    image: Berlin,
    destTitle: 'Lorem Ipsum',
    location: 'Berlin',
    fees: '$234',
    grade: 'CULTURAL RELAX',
    icon: <HiOutlineLocationMarker className="icon" />,
    description:
      'Quae, dolor quas sunt, officiis nihil tempore vitae quo a consectetur esse, natus praesentium cupiditate quidem debitis inventore eius voluptatem! Dolores officia voluptatem quis ex a fugit hic, dignissimos corporis. Distinctio vero et tenetur unde repellendus, similique tempora impedit reprehenderit maxime, neque commodi repudiandae quam veniam suscipit asperiores consequuntur officia quod doloremque tempore itaque dolorem veritatis quas. Perferendis, assumenda sint.',
  },
  {
    id: uuid(),
    image: Doha,
    destTitle: 'Lorem Ipsum',
    location: 'Doha',
    fees: '$344',
    grade: 'CULTURAL RELAX',
    icon: <HiOutlineLocationMarker className="icon" />,
    description:
      'Quae, dolor quas sunt, officiis nihil tempore vitae quo a consectetur esse, natus praesentium cupiditate quidem debitis inventore eius voluptatem! Dolores officia voluptatem quis ex a fugit hic, dignissimos corporis. Distinctio vero et tenetur unde repellendus, similique tempora impedit reprehenderit maxime, neque commodi repudiandae quam veniam suscipit asperiores consequuntur officia quod doloremque tempore itaque dolorem veritatis quas. Perferendis, assumenda sint.',
  },
];

export default mostVisitedData;
