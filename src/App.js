import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './components/StarshipPage/StarshipPage';

function App() {
  return (
    <>
      <div className='header'>
        <h2>STAR WARS STARSHIPS</h2>
      </div>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipPage />} />
      </Routes>
    </>
  );
} 

export default App;

