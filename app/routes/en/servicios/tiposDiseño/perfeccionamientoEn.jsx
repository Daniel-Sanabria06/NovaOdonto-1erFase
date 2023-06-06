import { useLocation } from 'react-router'
import { useEffect } from 'react'
import imagenp1 from '../../../../../public/img/perfeccionamiento/Image.jpeg'
import imagenp2 from '../../../../../public/img/perfeccionamiento/Image1.jpeg'
import imagenp3 from '../../../../../public/img/perfeccionamiento/image2.jpeg'
import Sidebar from "../../../../components/sidebarEn"
import Footer from '~/components/footerEn'

export function meta() {
  return {
    title: 'Nova Odonto - Dental Improvement',
    description: 'Nova Odonto - Dental Improvement'
  }
}

const perfeccionamiento = () => {

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

      <h2 className="heading mb-5">Dental Improvement</h2>

      <div className="contenedor text-center w-50 my-5">

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={imagenp1} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagenp2} alt=""/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagenp3} alt=""/>
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

            <h1 className="font-weight-bold">What is Dental Enhancement?</h1>

            <p className="my-4">Dental enhancement is a set of dental procedures designed to improve the aesthetics and function of the smile. This personalized approach addresses a variety of dental issues such as misalignments, wear, fractures, stains, and asymmetries.</p>

            <p className="my-4">Through dental enhancement, different techniques and treatments can be utilized, including veneers, crowns, implants, orthodontics, teeth whitening, and aesthetic restorations, to achieve optimal results. The goal is to create a harmonious, balanced, and natural smile that enhances the beauty of each patient.</p>

            <p className="my-4">Dental enhancement not only improves aesthetic appearance but can also provide functional and oral health benefits. By correcting alignment and bite issues, additional wear, joint problems, and difficulties with speech or eating can be prevented.</p>

            <p className="my-4">If you desire a perfect and healthy smile, dental enhancement may be the ideal solution.</p>
           
            </div>

            <div className="text-center my-5">

              <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>

            </div>
      
    </main>
    <Footer/>
    </>
  )
}

export default perfeccionamiento