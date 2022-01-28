import React from 'react';
import { useNavigate } from 'react-router';

export default function GoHome() {

    const navigate = useNavigate()

    const handleGoHome = ()=> {
        navigate("/")
    }

  return (<div>
     <button onClick={handleGoHome}>Go Home</button>
  </div>);
}
