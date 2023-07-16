import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import AlertaPromocion from "../../components/alertaPromocion"
import diseño from '../../../public/img/media/diseñosonrisa.jpg'
import carillas from '../../../public/img/media/carillas.jpg'
import diseño1 from '../../../public/img/clientesdiseño/Image1.jpeg'
import diseño2 from '../../../public/img/clientesdiseño/image2.jpeg'
import diseño3 from '../../../public/img/clientesdiseño/image3.jpeg'
import diseño4 from '../../../public/img/clientesdiseño/image4.jpeg'
import lentes from '../../../public/img/lentes/image2.jpeg'
import diseñoPrimer1 from '../../../public/img/clientesdiseño/ImagePrimer.jpeg'
import diseñoPrimer2 from '../../../public/img/clientesdiseño/ImagePrimer2.jpeg'
import diseñoPrimer3 from '../../../public/img/clientesdiseño/ImagePrimer3.jpeg'
import diseñoPrimer4 from '../../../public/img/clientesdiseño/ImagePrimer4.jpeg'
import diseñoPrimer5 from '../../../public/img/clientesdiseño/ImagePrimer5.jpeg'
import imagenpd1 from '../../../public/img/perfeccionamiento/Image.jpeg'
import { Link } from "react-router-dom"
import Footer from '~/components/footer'
import Ayd from "../../components/ayd"
import Header from '~/components/header'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Diseño de Sonrisa',
    description: 'Nova Odonto - Diseño de Sonrisa'
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


const Diseño = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

    //TODO: imagenes antes y despues y texto, crear ruta tipos de diseño

  return (

   <>
   <Header/>

      <main className="contenedor">  

        <h2 className="heading mb-5">Diseño de Sonrisa</h2>

        <p className=" text-center">Resultados</p>


        <div className="contenedor text-center w-75 my-5">

          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="imagenScale d-block w-100" src={diseñoPrimer1} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="imagenScale2 d-block w-100" src={diseñoPrimer3} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="imagenScale3 d-block w-100" src={diseñoPrimer5} alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="imagenScale2 d-block w-100" src={diseñoPrimer4} alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="ImagenScale2 d-block w-100" src={diseñoPrimer2} alt="Third slide"/>
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
        



        <div className="contenedor text-center w-75 my-5">

          <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={diseño1} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={diseño2} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={diseño3} alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={diseño4} alt="Third slide"/>
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
          
          
          <div className="text-center my-5">
            <a className='botonCita my-5' href="https://novaodonto.vercel.app/clientesFelices">Más Resultados</a>
          </div>

        <hr className="my-5" />

          <div className="container contenedor">

            <div className="text-center quees">
      
               <h1 className="font-weight-bold">¿Qué es un diseño de Sonrisa?</h1>

               <p className="my-4">Un diseño de sonrisa es un conjunto de procedimientos odontológicos que buscan mejorar la estética y apariencia de la sonrisa de una persona. Este servicio se enfoca en corregir y embellecer aspectos como la forma, el color, el tamaño y la posición de los dientes.</p>

                <p className="my-4">El objetivo principal de un diseño de sonrisa es proporcionar una sonrisa más atractiva, natural y equilibrada, mejorando la confianza y la autoestima del paciente. Cada diseño de sonrisa es personalizado y adaptado a las características únicas de cada persona, teniendo en cuenta su estructura facial y sus preferencias estéticas.</p>

            </div>

            <div className="text-center my-5">

               <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>
         
            </div>

            <hr className="my-5" />

            <p className="display-3 font-weight-bold text-center">
              Tipos de Diseño de Sonrisa
            </p>


            <div className="row text-center d-flex align-items-center my-5">
              <div className="col-12 col-md-3 mb-5">
                <Link className="text-decoration-none my-5" to="/">
                  <img src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
                  <p className="pcarrusel enlacecarrusel my-5">Aclaramiento Dental</p>
                  <Link className='botonCita mb-5 mt-3' to="/servicios/tiposDiseño/aclaramiento">Ver Más</Link>
                </Link>
              </div>
              <div className="col-12 col-md-3 mb-5">
                <Link className="text-decoration-none">
                  <img src={imagenpd1} alt="" />
                  <p className="pcarrusel enlacecarrusel my-5">Perfeccionamiento Dental</p>
                  <Link className='botonCita mb-5 mt-3' to="/servicios/tiposDiseño/perfeccionamiento">Ver Más</Link>
                </Link>
              </div>
              <div className="col-12 col-md-3 mb-5">
                <Link className="text-decoration-none">
                  <img src={carillas} alt="" />
                  <p className="pcarrusel enlacecarrusel my-5">Carillas en Resina</p>
                  <Link className='botonCita mb-5 mt-3' to="/servicios/tiposDiseño/carillas">Ver Más</Link>
                </Link>
              </div>
              <div className="col-12 col-md-3 mb-5">
                <Link className="text-decoration-none">
                  <img src={lentes} alt="" />
                  <p className="pcarrusel enlacecarrusel my-5">Lentes Cerámicos</p>
                  <Link className='botonCita mb-5 mt-3' to="/servicios/tiposDiseño/lentesCeramicos">Ver Más</Link>
                </Link>
              </div>
            </div>

         
            <div className="row contenedor container d-flex align-items-center">
              <div className="col-12 col-sm-6">
                  <p className="display-3 font-weight-bold ">Beneficios del <strong>Diseño de Sonrisa</strong></p>

                  <ul className="display-5">
                    <li>Aumenta la confianza y la autoestima.</li>
                    <li>Mejora la apariencia facial y rejuvenece la sonrisa.</li>
                    <li>Corrige problemas estéticos como decoloración, manchas o dientes desalineados.</li>
                    <li>Restaura la funcionalidad dental, mejorando la mordida y la alineación.</li>
                    <li>Eliges el color.</li>
                    <li>Un procedimiento sin desgastar tus dientes.</li>
                    <li>Ofrece soluciones personalizadas para lograr los resultados deseados.</li>
                  </ul>
              </div>

              <div className="col-12 col-sm-6">
                <img src={diseño} className='imagenContenido my-5' alt="Diseño en resina" />
              </div>
            </div>

            <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>
         
            </div>

          </div>

      </main>
      <Footer/>
    </> 
  )
}

export default Diseño