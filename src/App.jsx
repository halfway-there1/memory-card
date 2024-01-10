import './App.css';
import Header from './Header.jsx';
import Cards from './Cards.jsx';

const characters = [
  {
    id: 0,
    path: '/images/characters/annie.png',
  },
  {
    id: 1,
    path: '/images/characters/pieck.png',
  },
  {
    id: 2,
    path: '/images/characters/sasha.png',
  },
  {
    id: 3,
    path: '/images/characters/armin.png',
  },
  {
    id: 4,
    path: '/images/characters/mikasa.png',
  },
  {
    id: 5,
    path: '/images/characters/eren-jaegar.png',
  },
  {
    id: 6,
    path: '/images/characters/historia-reiss.png',
  },
  {
    id: 7,
    path: '/images/characters/levi-ackerman.png',
  },
];

export default function App() {
  return (
    <>
      <Header></Header>
      <Cards characters={characters}></Cards>
    </>
  );
}
