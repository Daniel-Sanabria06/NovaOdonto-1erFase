import Ayd from "../../components/ayd"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '~/components/header'
import Footer from '~/components/footer'
import imagenr1 from '../../../public/img/rehabilitacion/image1.jpeg'
import imagenr2 from '../../../public/img/rehabilitacion/image2.jpeg'
import imagenr3 from '../../../public/img/rehabilitacion/image3.jpeg'
import imagenr4 from '../../../public/img/rehabilitacion/image4.jpeg'
import imagenr5 from '../../../public/img/rehabilitacion/image5.jpeg'
import imagenr6 from '../../../public/img/rehabilitacion/image6.jpeg'
import imagenr7 from '../../../public/img/rehabilitacion/image7.jpeg'


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

      <div className="contenedor text-center w-50 my-5">

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={imagenr1} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagenr2} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagenr3} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagenr5} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagenr6} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagenr7} alt=""/>
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