import logo from './logo.svg';
import './App.css';
import MovieList from './composants/MovieList';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Description from './composants/Description';

function App() {

  const [movie, setMovie] = useState([
    {
      id: Math.random(),
      title: 'IRON MAN ',
      description: 'disney',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg',
      rating: 3
    },

    {
      id: Math.random(),
      title: 'IRON MAN 2',
      description: 'série',
      posterURL: 'https://fr.web.img2.acsta.net/medias/nmedia/18/70/45/28/19408942.jpg',
      rating: 4
    },

    {
      id: Math.random(),
      title: 'IRON MAN 3',
      description: 'série',
      posterURL: 'https://fr.web.img5.acsta.net/medias/nmedia/18/91/08/37/20508296.jpg',
      rating: 5
    },

    {
      id: Math.random(),
      title: 'IRON MAN 4',
      description: 'série',
      posterURL: 'https://i.ytimg.com/vi/QUfaHAR-Nho/maxresdefault.jpg',
      rating: 5
    },
  ])
  return (
    <div className="App">
      {/* <MovieList test={movie} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList test={movie} />} />
          <Route path="/movie/:id" element={<Description des={movie} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;