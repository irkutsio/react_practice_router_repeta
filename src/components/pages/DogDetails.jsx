import { useParams, Link, Outlet } from 'react-router-dom';

const DogDetails = () => {
  //зробити запрос по идентификатору

  const { dogId } = useParams();

  return (
    <>
      <h3>Dog Details {dogId}</h3>
      <ul>
        <li>
          <Link to='subbreeds'>Подпороды</Link>
        </li>
        <li>
          <Link to='gallery'>Галлерея</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  );
};

export default DogDetails;
