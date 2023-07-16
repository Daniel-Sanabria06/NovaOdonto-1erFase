import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from "../../../components/sidebarEn"
import Footer from '~/components/footerEn'


import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Rehabilitation',
    description: 'Nova Odonto - Rehabilitation'
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
     {/* 
      <div className="header">
       <Sidebar/>
      </div>
    <main className="contenedor">

      <h2 className="heading mb-1">Oral rehabilitation</h2>

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

            <h1 className="font-weight-bold my-5">What does it consist?</h1>

            <p className="my-4">Oral Rehabilitation is a specialized process that addresses complex dental problems, such as the loss of multiple teeth, severe damage to dental structures. Through advanced techniques and the combination of different treatments, we can completely restore your oral health. We aim to give you back a functional and aesthetically perfect smile.</p>

            <p className="my-4"> Oral Rehabilitation will not only improve your appearance and self-esteem, but will also allow you to enjoy greater comfort when eating and speaking. In addition, it will contribute to the overall health of your mouth, since aligning and restoring your teeth correctly makes them easier to clean and prevents future problems.</p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">Schedule your Appointment</a>

           </div>

    </main>
    <Footer/>
    */}
    </>
  )
}

export default rehabilitacion