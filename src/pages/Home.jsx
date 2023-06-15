import React, { useEffect, useState } from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/meme';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMemes().then(memes => setData(memes.data.memes));
    }, []);

  return (
    <div>
        {data.map((e) => (
            <MemeCard img={e.url} title={e.name}/>
        ))}
    </div>
  )
}

export default Home;