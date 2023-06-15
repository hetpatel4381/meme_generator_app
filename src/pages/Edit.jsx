import React, { useState } from 'react';
import Text from '../components/Text';
import { useSearchParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";

const EditPage = () => {

    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1);
    }

  return (
    <div>
      <div>
        <img src={params.get("url")} width="250px" alt=''/>
        {
            Array(count).fill(0).map((e) => {
                return <Text />;
            })
        }
      </div>
      <Button onClick={addText}>Add Text</Button>
    </div>
  );
}

export default EditPage;