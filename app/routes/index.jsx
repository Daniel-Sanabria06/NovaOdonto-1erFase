import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import AlertaPromocion from "../components/alertaPromocion"
import banner from '../../public/img/banner.jpeg'
import diseñoResina from '../../public/img/banner.jpeg'
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
          
            <Link className='marca text-center' to="/diseño">
              <img src={diseñoResina} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Diseño en Resina</p>
                  <p className='texto'>Más Información</p>
              </div>
             </Link>
          
            <Link className='marca text-center' to="/ortodoncia">
              <img src={diseñoResina} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Ortodoncia</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link>
          
            <Link className='marca text-center' to="/acido">
              <img src={diseñoResina} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Ácido Hialurónico</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link>   

            <Link className='marca text-center' to="/botox">
              <img src={diseñoResina} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Botox</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/rehabilitacion">
              <img src={diseñoResina} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Rehabilitación Oral</p>
                  <p className='texto'>Más Información</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/bichectomia">
              <img src={diseñoResina} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Bichectomía</p>
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