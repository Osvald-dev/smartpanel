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
import { Houseplane } from '../components/plano/houseplane';
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
        <div className="container-flull ">
          <div className='bg-cards'>
            <div  >              <CardA2 />
            </div>
            <div  >              <CardB2 />
            </div>
            <div >
              <CardA3 />
            </div>
            <div  >              <CardB3 />
            </div>
            <div  >              <CardC3 />
            </div>
            <div  >              <CardDP1 />
            </div>

          </div>
          <div>
            <Buttons />
          </div>
        </div>
        <div>
          <Houseplane></Houseplane>
        </div>

        <div className="separator">
          <span className='separator-text'>Estas en el camino correcto</span>
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
