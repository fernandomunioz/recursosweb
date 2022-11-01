import { Link, Outlet, useParams } from "react-router-dom";
  
export default function Topic() {
    let { nombreTopic } = useParams();
  
    return (
      <div>
        <h3>Tema : {nombreTopic}</h3>
        <p><Link to="detalle">Ver mas</Link></p>
        <Outlet />
      </div>
    );
  }
