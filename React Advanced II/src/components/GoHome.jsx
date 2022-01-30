import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import styles from "./goHome.module.css"

export default function GoHome() {

    const navigate = useNavigate()

    const handleGoHome = ()=> {
      
        navigate("/")
    }

  return (
  <div>
    
    <section>
       <Outlet />
    </section>

     <button onClick={handleGoHome} className={styles.botton}>Go Home</button>

  </div>);
}
