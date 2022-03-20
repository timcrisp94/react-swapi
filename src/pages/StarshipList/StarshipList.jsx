import { useState, useEffect } from 'react';
import { getStarshipList } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    getStarshipList()
    .then(starshipData => setStarships(starshipData.results))
  }, [])

  return (
    <>
    <div className='body'>
      <div>
        {starships.map((starship) => (
          <Link to='/starship' state={{starship}} key={starship.index}>
            <div className='starship-container' id="starshipDiv" >
              {starship.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
  );
}
 
export default StarshipList;