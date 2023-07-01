import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dogs, setDogs] = useState(['🐕-1', '🐩-2', '🐕‍🦺-3', '🦮-4']);
  const dogId = searchParams.get('dogId');

const location = useLocation()
console.log(location)

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));
  // const visibleDogs = dogs;

  // тут делать запрос на породы
  return (
    <div>
      <input
        value={dogId ? dogId : ''}
        type="text"
        onChange={e => {
          setSearchParams({ dogId: e.target.value });
        }}
      />
      {/* <button
        type="button"
        onClick={() => {
          setSearchParams({ c: 'hello' });
        }}
      > */}
        {/* Change SP
      </button> */}
      {visibleDogs.map((item, idx) => {
        return (
          <Link key={idx} to={`${idx}`} state={{from: location}}>
            <h4>Dog breed:</h4>
            <p>{item}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Dogs;
