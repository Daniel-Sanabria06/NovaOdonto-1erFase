import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
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


    <main className="contenedor">

            <div className='container text-center my-5 carruselpromocion'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active text-center mx-auto imagenesCarrusel">
                      <img src={banner} className="" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={banner} className="" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={banner} className="" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
            </div>

          <hr />

          <div className="marcas-grid text-center mt-5">
          
            <Link className='marca text-center' to="/servicios/diseño">
              <img src={diseño} className='marcaImagen' alt="Diseño en resina" />
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
  </>
  )
}

export default Index