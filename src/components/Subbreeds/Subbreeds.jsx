import { useParams } from 'react-router-dom';

const Subbreeds = () => {
  const { dogId } = useParams();
  return (
    <div>
      <ul>
        <li>{dogId}</li>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint rerum
          porro cupiditate fugiat eius quod placeat quam, reprehenderit odit
          architecto libero nesciunt saepe soluta, voluptates dolorum. Rem quos
          in expedita
        </p>
      </ul>
    </div>
  );
};

export default Subbreeds;
