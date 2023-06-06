
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import imagen1 from '../../../../../public/img/lentes/Image.jpeg'
import imagen2 from '../../../../../public/img/lentes/image2.jpeg'
import imagen3 from '../../../../../public/img/lentes/image3.jpeg'
import imagen4 from '../../../../../public/img/lentes/image4.jpeg'
import Sidebar from "../../../../components/sidebarEn"
import Footer from '~/components/footerEn'

export function meta() {
  return {
    title: 'Nova Odonto - Ceramic lenses',
    description: 'Nova Odonto - Ceramic lenses'
  }
}

const lentesCeramicos = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  //TODO: Imagen

  return (
    <>
      <div className="header">
       <Sidebar/>
      </div>
    <main className="contenedor">

      <h2 className="heading mb-5">Ceramic Lenses</h2>

      <div className="contenedor text-center w-50 my-5">

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={imagen1} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagen2} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagen3} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagen4} alt=""/>
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

        <hr className="my-5" />

            <div className="text-center quees contenedor">

            <h1 className="font-weight-bold">What are Ceramic Lenses?</h1>

            <p className="my-4">Ceramic Lenses provide an exceptionally realistic appearance, mimicking the translucency and shine of natural teeth. In addition to correcting stains, fractures, wear, and malformations, they can also address alignment issues and gaps between teeth.</p>

            <p className="my-4">One of the main advantages of ceramic Lenses is their durability and resistance to staining. They also require proper oral care and hygiene to maintain their appearance and functionality in the long term. With appropriate care, ceramic Lenses can provide a beautiful and long-lasting smile for many years.</p>
             
            </div>

            <div className="text-center my-5">

              <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>

            </div>
      
    </main>
    <Footer/>
    </>
  )
}

export default lentesCeramicos