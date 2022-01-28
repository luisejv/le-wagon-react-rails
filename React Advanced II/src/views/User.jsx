import { useParams } from 'react-router';

const User = () => {

    const params = useParams();
    const username = params.username

  return (<div>
      <h1> soy {username}</h1>
  </div>);
};

export default User;
