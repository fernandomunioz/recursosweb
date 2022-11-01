import React from "react";

import {
  //BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Topic from "./pages/Topic";

import MenuMain from "./components/MenuMain";

import Soft404 from "./pages/Soft404";

function Detalle(){
  const { nombreTopic } = useParams()
  return(<div>
    <h2>Detalle de {nombreTopic}</h2>
  </div>)
}

export default function App() {
    return (
      <div>
        <MenuMain />

        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/topics/:nombreTopic" element={<Topic />}>
                  <Route path="detalle" element={<Detalle />} />
                </Route>
                <Route path="*" element={<Soft404 />} />
                              
        </Routes>


        
      </div>
    );
  }

  /*

                <Route path="/topics">
                <Topics />
              </Route>

              <Route path="/vino/:name" children={<ShowWine />} />
*/