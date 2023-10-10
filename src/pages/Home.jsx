import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Header } from '../components/header/Header';
import { Slider } from '../components/slider/Slider';
import { Texto } from '../components/text/Texto';
import { Textoventajas } from '../components/text/Textoventajas';
import { Cardmodelone } from '../components/cards/Cardmodelone';
import { Cardmodeltwo } from '../components/cards/Cardmodeltwo';
import { Cardmodelthree } from '../components/cards/Cardmodelthree';
import { Cardmodelfour } from '../components/cards/Cardmodelfour';
import { Cardmodelfive } from '../components/cards/Cardmodelfive';
import { Cardmodelsix } from '../components/cards/Cardmodelsix';
import { Houseplane } from '../components/plano/houseplane';
import { Footer } from '../components/footer/footer';

const Home = () => {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <Texto></Texto>
      </div>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
            <Cardmodelone />
          </div>
          <div className="col mb-4">
            <Cardmodeltwo />
          </div>
          <div className="col mb-4">
            <Cardmodelthree />
          </div>
          <div className="col mb-4">
            <Cardmodelfour />
          </div>
          <div className="col mb-4">
            <Cardmodelfive />
          </div>
          <div className="col mb-4">
            <Cardmodelsix />
          </div>
        </div>
      </div>
      <div>
        <Houseplane></Houseplane>
      </div>
      <div>
        <Textoventajas></Textoventajas>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
