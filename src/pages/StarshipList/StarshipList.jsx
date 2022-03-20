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
    <div>
      <div className='starship-container'>
        {starships.map((starship) => (
          <Link to='/starship' state={{starship}} key={starship.index}>
            <div id="starshipDiv" >
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