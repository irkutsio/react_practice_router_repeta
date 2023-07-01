import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dogs, setDogs] = useState(['🐕-1', '🐩-2', '🐕‍🦺-3', '🦮-4']);
  const dogId = searchParams.get('dogId');

const visibleDogs = dogs.filter(dog => dog.includes(dogId))

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
      <button
        type="button"
        onClick={() => {
          setSearchParams({ c: 'hello' });
        }}
      >
        Change SP
      </button>
      {visibleDogs.map((item, idx) => {
        return (
          <Link key={idx} to={`${idx}`}>
            <h4>Dog breed:</h4>
            <p>{item}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Dogs;
