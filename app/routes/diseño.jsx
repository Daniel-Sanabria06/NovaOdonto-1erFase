import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import AlertaPromocion from "../components/alertaPromocion"

import { Link } from "react-router-dom"
import Ayd from "../components/ayd"
import resina1 from '../../public/img/Diseñoresina/resina1.jpeg'
import resina2 from '../../public/img/Diseñoresina/resina2.jpeg'
import resina3 from '../../public/img/Diseñoresina/resina3.jpeg'
import resina4 from '../../public/img/Diseñoresina/resina4.jpeg'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Diseño En Resina',
    description: 'Nova Odonto - Diseño En Resina'
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

      <main className="contenedor">  

        <h2 className="heading mb-5">Diseño de Sonrisa</h2>

        <Ayd
          imagen="https://i.postimg.cc/vHPNGG7L/teeth-whitening-before-1.jpg"
          imagen2="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg"
        />

<hr />

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

            <p className="h1 font-weight-bold text-center">
              Tipos de Diseño de Sonrisa
            </p>

            <div className='container text-center my-5 carruselpromocion'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active text-center mx-auto imagenesCarrusel">
                   
                      <div className="row">
                          <Link className="col-6" to="/">
                            <img src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
                          <p className="pcarrusel enlacecarrusel">Aclaramiento Dental</p>
                          </Link>
                          <Link className="col-6">
                          <img src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
                            <p className="pcarrusel enlacecarrusel">Perfeccionamiento Dental</p>
                          </Link>
                      </div>
                      
                    </div>

                    <div className="carousel-item">
                       
                    <div className="row">
                          <Link className="col-6">
                             <img src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
                              <p className="pcarrusel enlacecarrusel">Carillas en Resina</p>
                          </Link>
                          <Link className="col-6">
                              <img src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
                                <p className="pcarrusel enlacecarrusel">Lentes Cerámicos</p>
                          </Link>
                          </div>
                    </div>

                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon mr-5" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon ml-5" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
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
                <img className="imagenContenido my-5" src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
              </div>
            </div>

            <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>
         
            </div>

          </div>

      </main>
    </> 
  )
}

export default Diseño