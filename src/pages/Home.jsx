import React, { useEffect } from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/meme';

const Home = () => {

    useEffect(() => {
        getAllMemes().then(memes => console.log(memes));
    }, []);

  return (
    <div>
        <MemeCard />
    </div>
  )
}

export default Home;