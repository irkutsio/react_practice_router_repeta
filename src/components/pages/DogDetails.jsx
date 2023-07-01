import { useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

const DogDetails = () => {
  //зробити запрос по идентификатору

  const { dogId } = useParams();
  const location = useLocation();
  const BackLinkLocationRef = useRef(location.state?.from ?? '/dogs');

  console.log(location);
  console.log(BackLinkLocationRef);

  return (
    <>
      <Link to={BackLinkLocationRef.current}>⬅ GO BACK</Link>
      <h3>Dog Details {dogId}</h3>
      <ul>
        <li>
          <Link to="subbreeds">Подпороды</Link>
        </li>
        <li>
          <Link to="gallery">Галлерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
