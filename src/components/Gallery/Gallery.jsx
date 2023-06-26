import { useParams } from "react-router-dom";

const Gallery = () => {
    const {dogId} = useParams()
  return (
    <div>
      <ul>
        <h1>{dogId}</h1>
        <li>🐶</li>
    
      </ul>
    </div>
  );
};

export default Gallery