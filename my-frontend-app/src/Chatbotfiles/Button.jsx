// new file called DogPicture.jsx
import React, { useState } from 'react';

const ButtonReply= () => {
  const [val, setButtonVal] = useState('');

  function showfunc(){
    setButtonVal('Got it!')
  }
  return (
    <div>
        <button onClick={showfunc}>Got it!</button>
    </div>
  );
};

export default ButtonReply;