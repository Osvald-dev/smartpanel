import React from 'react';

import 'font-awesome/css/font-awesome.min.css';
import { Header } from '../components/header/Header';
import { Slider } from '../components/slider/Slider';
import { Texto } from '../components/text/Texto';
import { Textoventajas } from '../components/text/Textoventajas';
import { CardA2 } from '../components/cards/dos-habitaciones/CardA2';
import { CardB2 } from '../components/cards/dos-habitaciones/CardB2';
import { CardA3 } from '../components/cards/tres-habitaciones/CardA3';
import { CardB3 } from '../components/cards/tres-habitaciones/CardB3';
import { CardC3 } from '../components/cards/tres-habitaciones/CardC3';
import { CardDP1 } from '../components/cards/duplex/CardDP1';
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
            <div  className="col-12 col-lg-6">              <CardA2 />
            </div>
            <div className="col-12 col-lg-6" >              <CardB2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardA3 />
            </div>
            <div className="col-12 col-lg-6" >              <CardB3 />
            </div>
            <div className="col-12 col-lg-6" >              <CardC3 />
            </div>
            <div className="col-12 col-lg-6" >              <CardDP1 />
            </div>

          </div>
          <div>
            <Buttons />
          </div>
        </div>
       

        <div className="separator">
          <span className='separator-text'>Estás en el camino correcto</span>
          <div className='arrow-icon'>
            <i className='fas fa-arrow-down'></i>
          </div>
        </div>
        <div>
          <Textoventajas></Textoventajas>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
