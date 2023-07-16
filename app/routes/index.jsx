import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import Header from '~/components/header'
import Footer from '~/components/footer'
import AlertaPromocion from "../components/alertaPromocion"
import ortodoncia from "../../public/img/media/ortodoncia.jpg"
import acido from "../../public/img/media/acido.jpg"
import endodoncia from "../../public/img/media/endodoncia.jpg"
import botox from "../../public/img/media/botox.jpg"
import cirugia from "../../public/img/media/cirugia.jpg"
import rehabilitacion from "../../public/img/media/rehabilitacion.jpg"
import bichectomia from "../../public/img/media/bichectomia.jpg"
import banner from '../../public/img/banner.jpeg'
import diseño from '../../public/img/media/diseñosonrisa.jpg'
import diseñoi1 from '../../public/img/clientesdiseño/Image1.jpeg'

import inicio1 from '../../public/img/media/inicio1.jpeg'
import inicio2 from '../../public/img/media/inicio2.jpeg'
import inicio3 from '../../public/img/media/inicio3.jpeg'
import inicio4 from '../../public/img/media/inicio4.jpeg'
import inicio5 from '../../public/img/media/inicio5.jpeg'
import inicio6 from '../../public/img/media/inicio6.jpeg'
import inicio7 from '../../public/img/media/inicio7.jpeg'
import inicio8 from '../../public/img/media/inicio8.jpeg'

import primera from '../../public/img/clientes satisfechos/primera.jpeg'
import segunda from '../../public/img/clientes satisfechos/segunda.jpeg'
import tercera from '../../public/img/clientes satisfechos/tercera.jpeg'
import cuarta from '../../public/img/clientes satisfechos/cuarta.jpeg'
import quinta from '../../public/img/clientes satisfechos/quinta.jpeg'
import cliente1 from '../../public/img/clientes satisfechos/1.jpeg'
import cliente2 from '../../public/img/clientes satisfechos/2.jpeg'
import cliente3 from '../../public/img/clientes satisfechos/3.jpeg'

import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Inicio',
    description: 'Nova Odonto - Inicio'
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

//TODO: Precio??

const Index = () => {


  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
  <>

  <Header/>

    <main className="contenedor">
      <div className="text-center">
        <p className="h4">Nuestros Resutados</p>
        </div>

    <div className="contenedor text-center w-75 mb-5">

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          

            <div className="carousel-item active">
              <img className="d-block w-100" src={inicio1} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={inicio2} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={inicio3} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={inicio4} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={inicio5} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={inicio6} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={inicio7} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={inicio8} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={primera} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={segunda} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={tercera} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={cuarta} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={quinta} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={cliente1} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={cliente2} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={cliente3} alt="Third slide"/>
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


          <hr />

          <div className="marcas-grid text-center mt-5">
          
            <Link className='marca text-center my-auto' to="/servicios/diseño">
              <img src={diseñoi1} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Diseño de Sonrisa</p>
                  <p className='texto'>Más Información</p>
              </div>
             </Link>
          
            <Link className='marca text-center' to="/servicios/ortodoncia">
              <img src={ortodoncia} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Ortodoncia</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link>
          
            <Link className='marca text-center' to="/servicios/acido">
              <img src={acido} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Ácido Hialurónico</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link>  
             

            <Link className='marca text-center' to="/servicios/botox">
              <img src={botox} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Botox</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/servicios/rehabilitacion">
              <img src={rehabilitacion} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Rehabilitación Oral</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/servicios/bichectomia">
              <img src={bichectomia} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Bichectomía</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/servicios/endodoncia">
              <img src={endodoncia} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Endodoncia</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/servicios/cirugia">
              <img src={cirugia} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Cirugías Orales</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link> 

          </div>
          
          <hr />

    </main>
    <Footer/>
  </>
  )
}

export default Index