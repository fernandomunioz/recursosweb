import { useNavigate } from "react-router-dom";


export default function Contact() {
  const navigate = useNavigate();

   
   

    return (
      <div>
        <h2>Page Contact</h2>
        <button onClick={()=>navigate('/topics/dos')}> Ir a /topics/dos </button>
      </div>
    );
}

/*
        Navega Automaticamente atraves del render
        <Navigate to="/" />

*/