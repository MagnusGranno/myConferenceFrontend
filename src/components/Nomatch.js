import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Nomatch = () => {
  const navigate = useNavigate();

  return (
    <div>
      Wrong place <button onClick={() => navigate('/')}>Go back</button>
    </div>
  );
};

export default Nomatch;
