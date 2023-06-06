import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import AlertaPromocion from "../../components/alertaPromocion"
import ortodoncia from "../../../public/img/media/ortodoncia.jpg"
import acido from "../../../public/img/media/acido.jpg"
import endodoncia from "../../../public/img/media/endodoncia.jpg"
import botox from "../../../public/img/media/botox.jpg"
import cirugia from "../../../public/img/media/cirugia.jpg"
import rehabilitacion from "../../../public/img/media/rehabilitacion.jpg"
import bichectomia from "../../../public/img/media/bichectomia.jpg"
import banner from '../../../public/img/banner.jpeg'
import diseño from '../../../public/img/media/diseñosonrisa.jpg'
import diseñoi1 from '../../../public/img/clientesdiseño/Image1.jpeg'
import styles from '~/styles/marcas.css'
import Sidebar from "../../components/sidebarEn"
import Footer from '~/components/footerEn'

export function meta() {
  return {
    title: 'Nova Odonto - Home',
    description: 'Nova Odonto - Home'
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
  <div className="header">
   <Sidebar/>
  </div>



    <main className="contenedor">

    <div className="w-75 contenedor container text-center mx-auto imagenesCarrusel">
      <img src={banner} className="" alt="..."/>
    </div>

    

          <hr />

          <div className="marcas-grid text-center mt-5">
          
            <Link className='marca text-center my-auto' to="/en/servicios/diseñoEn">
              <img src={diseñoi1} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Smile Design</p>
                  <p className='texto'>More Information</p>
              </div>
             </Link>
          
            <Link className='marca text-center' to="/en/servicios/ortodonciaEn">
              <img src={ortodoncia} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Orthodontics</p>
                  <p className='texto'>More Information</p>
              </div>
            </Link>
          
            <Link className='marca text-center' to="/en/servicios/acidoEn">
              <img src={acido} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Hyaluronic Acid</p>
                  <p className='texto'>More Information</p>
              </div>
            </Link>  
             

            <Link className='marca text-center' to="/en/servicios/botoxEn">
              <img src={botox} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Botox</p>
                  <p className='texto'>More Information</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/en/servicios/rehabilitacionEn">
              <img src={rehabilitacion} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Oral Rehabilitation</p>
                  <p className='texto'>More Information</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/en/servicios/bichectomiaEn">
              <img src={bichectomia} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Bichectomy</p>
                  <p className='texto'>More Information</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/en/servicios/endodonciaEn">
              <img src={endodoncia} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Endodontic</p>
                  <p className='texto'>More Information</p>
              </div>
            </Link> 

            <Link className='marca text-center' to="/en/servicios/cirugiaEn">
              <img src={cirugia} className='marcaImagen' alt="Diseño en resina" />
              <div className='contenido'>
                  <p className='distintivo'>Oral Surgeries</p>
                  <p className='texto'>More Information</p>
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