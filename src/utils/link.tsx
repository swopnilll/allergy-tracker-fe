import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/stats',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'all allergy',
    path: 'all-allergy',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'add allergy',
    path: 'add-allergy',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: 'profile',
    path: '/',
    icon: <ImProfile />,
  },
];

export default links;