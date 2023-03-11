import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Button() {
  const [suscribe, setSuscribe] = useState(false);
  return (
    <>
    <button onClick={() => {
        toast.success('Felicidades ya estas suscrito')
        setSuscribe(!suscribe)
    }}>
      {suscribe ? 'Ya estas suscrito' : 'suscribite'}
    </button>
      <ToastContainer/>
    </>

    
  );
}

export default Button;
