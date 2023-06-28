import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import diseño from '../../../../public/img/media/diseñosonrisa.jpg'
import carillas from '../../../../public/img/media/carillas.jpg'
import diseño1 from '../../../../public/img/clientesdiseño/Image1.jpeg'
import diseño2 from '../../../../public/img/clientesdiseño/image2.jpeg'
import diseño3 from '../../../../public/img/clientesdiseño/image3.jpeg'
import diseño4 from '../../../../public/img/clientesdiseño/image4.jpeg'
import diseño5 from '../../../../public/img/clientesdiseño/Image.jpeg'
import lentes from '../../../../public/img/lentes/image2.jpeg'
import diseñoPrimer1 from '../../../../public/img/clientesdiseño/ImagePrimer.jpeg'
import diseñoPrimer2 from '../../../../public/img/clientesdiseño/ImagePrimer2.jpeg'
import diseñoPrimer3 from '../../../../public/img/clientesdiseño/ImagePrimer3.jpeg'
import diseñoPrimer4 from '../../../../public/img/clientesdiseño/ImagePrimer4.jpeg'
import diseñoPrimer5 from '../../../../public/img/clientesdiseño/ImagePrimer5.jpeg'
import imagenpd1 from '../../../../public/img/perfeccionamiento/Image.jpeg'
import { Link } from "react-router-dom"
import Sidebar from "../../../components/sidebarEn"
import Footer from '~/components/footerEn'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Smile Design',
    description: 'Nova Odonto - Smile Design'
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
     <div className="header">
       <Sidebar/>
      </div>

      <main className="contenedor">  

        <h2 className="heading mb-5">Smile Design</h2>

        <p className=" text-center">Results</p>

        <div className="contenedor text-center w-75 my-5">

          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={diseñoPrimer1} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={diseñoPrimer3} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={diseñoPrimer5} alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={diseñoPrimer4} alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={diseñoPrimer2} alt="Third slide"/>
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

          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
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
              <div className="carousel-item">
                <img className="d-block w-100" src={diseño5} alt="Third slide"/>
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

        <div className="text-center my-5">
            <a className='botonCita my-5' href="https://novaodonto.vercel.app/clientesFelices">More Results</a>
        </div>


        <hr className="my-5" />

          <div className="container contenedor">

            <div className="text-center quees">
      
              <h1 className="font-weight-bold">What is a Smile Design?</h1>

              <p className="my-4">A smile design is a set of dental procedures aimed at improving the aesthetics and appearance of a person's smile. This service focuses on correcting and enhancing aspects such as the shape, color, size, and position of the teeth.</p>

              <p className="my-4">The main goal of a smile design is to provide a more attractive, natural, and balanced smile, improving the patient's confidence and self-esteem. Each smile design is personalized and tailored to the unique characteristics of each individual, taking into account their facial structure and aesthetic preferences.</p>
            </div>

            <div className="text-center my-5">

               <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>
         
            </div>

            <hr className="my-5" />

            <p className="display-3 font-weight-bold text-center">
            Types of Smile Design
            </p>


            <div className="row text-center d-flex align-items-center my-5">
              <div className="col-12 col-md-3 mb-5">
                <Link className="text-decoration-none my-5" to="/">
                  <img src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
                  <p className="pcarrusel enlacecarrusel my-5">Dental Brightening</p>
                  <Link className='botonCita mb-5 mt-3' to="https://novaodonto.vercel.app/en/servicios/tiposDiseño/aclaramientoEn">See More</Link>
                </Link>
              </div>
              <div className="col-12 col-md-3 mb-5">
                <Link className="text-decoration-none">
                  <img src={imagenpd1} alt="" />
                  <p className="pcarrusel enlacecarrusel my-5">Dental Improvement</p>
                  <Link className='botonCita mb-5 mt-3' to="https://novaodonto.vercel.app/en/servicios/tiposDiseño/perfeccionamientoEn">See More</Link>
                </Link>
              </div>
              <div className="col-12 col-md-3 mb-5">
                <Link className="text-decoration-none">
                  <img src={carillas} alt="" />
                  <p className="pcarrusel enlacecarrusel my-5">Resin Veneers</p>
                  <Link className='botonCita mb-5 mt-3' to="https://novaodonto.vercel.app/en/servicios/tiposDiseño/carillasEn">See More</Link>
                </Link>
              </div>
              <div className="col-12 col-md-3 mb-5">
                <Link className="text-decoration-none">
                  <img src={lentes} alt="" />
                  <p className="pcarrusel enlacecarrusel my-5">Ceramic Lenses</p>
                  <Link className='botonCita mb-5 mt-3' to="https://novaodonto.vercel.app/en/servicios/tiposDiseño/lentesCeramicosEn">See More</Link>
                </Link>
              </div>
            </div>

         
            <div className="row contenedor container d-flex align-items-center">
              <div className="col-12 col-sm-6">
              <p className="display-3 font-weight-bold">Benefits of <strong>Smile Design</strong></p>

              <ul className="display-5">
                <li>Increases confidence and self-esteem.</li>
                <li>Improves facial appearance and rejuvenates the smile.</li>
                <li>Corrects aesthetic issues such as discoloration, stains, or misaligned teeth.</li>
                <li>Restores dental functionality, improving bite and alignment.</li>
                <li>You can choose the color.</li>
                <li>A procedure without wearing down your teeth.</li>
                <li>Offers personalized solutions to achieve desired results.</li>
              </ul>

              </div>

              <div className="col-12 col-sm-6">
                <img src={diseño} className='imagenContenido my-5' alt="Diseño en resina" />
              </div>
            </div>

            <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>
         
            </div>

          </div>

      </main>
      <Footer/>
    </> 
  )
}

export default Diseño