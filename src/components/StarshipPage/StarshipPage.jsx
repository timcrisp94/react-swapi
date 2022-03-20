import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getStarshipDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])

  return (
    <>
    <div className='starship-container'>
      {starshipDetails.name ? 
        <>
        <p>NAME: {starshipDetails.name}</p>
        <p>MODEL: {starshipDetails.model}</p>
        <p><a href='/'>RETURN</a></p>
        </>  
       :
       <>
        <h2>loading Starship details...</h2>
       </> 
    }
    </div>
    </>
  );
}
 
export default StarshipPage;