import React from 'react';

import 'font-awesome/css/font-awesome.min.css';
import { Header } from '../components/header/Header';
import { Slider } from '../components/slider/Slider';
import { Texto } from '../components/text/Texto';
import { Textoventajas } from '../components/text/Textoventajas';
import { CardAI5 } from '../components/cards/smart-ai/CardAI5';
import { CardAI2 } from '../components/cards/smart-ai/CardAI2';
import { CardA3 } from '../components/cards/tres-habitaciones/CardA3';
import { CardAI3 } from '../components/cards/smart-ai/CardAI3';
import { CardG3 } from '../components/cards/tres-habitaciones/CardG3';
import { CardDP1 } from '../components/cards/duplex/CardDP1';
import {PreguntasHome} from '../pages/preguntas/PreguntasHome';
import { Footer } from '../components/footer/Footer';
import { Precio } from './Precio';
import './home.css'
import { Buttons } from '../components/cards/utils/Buttons';



const Home = () => {

  return (
    <>
      <div id="#inicio">

        <div>
          <Header></Header>
        </div>
        <div>
          <Slider></Slider>
        </div>
        <div>
          <Texto></Texto>
        </div>
        <Precio />
        <div className="separator">
          <span className='separator-text'>Nuestros Modelos</span>
        </div>
        <div className="container-full ">
          <div className='bg-cards row'>
            <div  className="col-12 col-lg-6">              <CardAI5 />
            </div>
            <div className="col-12 col-lg-6" >              <CardAI2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardA3 />
            </div>
            <div className="col-12 col-lg-6" >              <CardAI3 />
            </div>
            <div className="col-12 col-lg-6" >              <CardG3 />
            </div>
            <div className="col-12 col-lg-6" >              <CardDP1 />
            </div>

          </div>
          <div>
            <Buttons />
          </div>
        </div>
       

        {/* <div className="separator">
          <span className='separator-text'>Estás en el camino correcto</span>
          <div className='arrow-icon'>
            <i className='fas fa-arrow-down'></i>
          </div>
        </div> */}
        <div>
          <Textoventajas></Textoventajas>
        </div>
        <div>
           <PreguntasHome></PreguntasHome>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
