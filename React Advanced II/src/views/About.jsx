import { useLocation } from 'react-router';

export default function About() {

    const location = useLocation()
    const query = location.search

  return ( 
  <div>
      <h1> About query: { query.replace("?","") } </h1>
  </div> 
  )
}
