import { Link } from 'react-router-dom';

const Dogs = () => {
  // тут делать запрос на породы
  return (
    <div>
      {['🐕', '🐩', '🐕‍🦺', '🦮'].map((item, idx) => {
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
