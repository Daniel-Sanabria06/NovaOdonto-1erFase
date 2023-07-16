import Ayd from "../../components/ayd"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '~/components/header'
import Footer from '~/components/footer'

import antes1 from '../../../public/img/rehabilitacion/antes1.jpeg'
import antes2 from '../../../public/img/rehabilitacion/antes2.jpeg'
import antes3 from '../../../public/img/rehabilitacion/antes3.jpeg'
import antes4 from '../../../public/img/rehabilitacion/antes4.jpeg'
import antes5 from '../../../public/img/rehabilitacion/antes5.jpeg'
import antes6 from '../../../public/img/rehabilitacion/antes6.jpeg'

import despues1 from '../../../public/img/rehabilitacion/despues1.jpeg'
import despues2 from '../../../public/img/rehabilitacion/despues2.jpeg'
import despues3 from '../../../public/img/rehabilitacion/despues3.jpeg'
import despues4 from '../../../public/img/rehabilitacion/despues4.jpeg'
import despues5 from '../../../public/img/rehabilitacion/despues5.jpeg'
import despues6 from '../../../public/img/rehabilitacion/despuesfinal.jpeg'


import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Rehabilitación',
    description: 'Nova Odonto - Rehabilitación'
  }
}

export function links() {
    return [
        {
            rel  : 'stylesheet',
            href : styles
        }
    ]
}

const rehabilitacion = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  //TODO: imagen y texto

  return (
    
    <>
    <Header/>
    <main className="contenedor">

      <h2 className="heading mb-1">Rehabilitación Oral</h2>
      
      <div className="text-center">
      <p>Antes</p>
            <div id="carouselExampleControls" className="carousel slide m-4" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={antes1} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={antes2} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={antes4} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={antes5} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={antes6} alt=""/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="text-center">
          <p>Después</p>
            <div id="carouselExampleControls2" className="carousel slide m-4" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={despues1} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={despues2} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={despues3} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="imagenScale2 d-block w-100" src={despues4} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={despues5} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={despues6} alt=""/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>




        <div className="text-center quees contenedor">

            <h1 className="font-weight-bold my-5">¿En qué Consiste?</h1>

            <p className="my-4">La Rehabilitación Oral es un proceso especializado que aborda problemas dentales complejos, como la pérdida de múltiples dientes, daños en las estructuras dentales severas. A través de técnicas avanzadas y la combinación de diferentes tratamientos, podemos restaurar por completo tu salud bucal. Tenemos como objetivo devolverte una sonrisa funcional y estéticamente perfecta.</p>

            <p className="my-4">La Rehabilitación Oral no solo mejorará tu apariencia y autoestima, sino que también te permitirá disfrutar de una mayor comodidad al comer y hablar. Además, contribuirá a la salud general de tu boca, ya que alinear y restaurar los dientes correctamente facilita su limpieza y previene problemas futuros.</p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

           </div>

    </main>
    <Footer/>
    </>
  )
}

export default rehabilitacion