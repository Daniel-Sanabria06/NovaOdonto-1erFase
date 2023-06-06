import Ayd from "../../../components/ayd"
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import imagenp1 from '../../../../public/img/perfeccionamiento/Image.jpeg'
import imagenp2 from '../../../../public/img/perfeccionamiento/Image1.jpeg'
import imagenp3 from '../../../../public/img/perfeccionamiento/image2.jpeg'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
  return {
    title: 'Nova Odonto - Perfeccionamiento Dental',
    description: 'Nova Odonto - Perfeccionamiento Dental'
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
    <Header/>
    <main className="contenedor">

      <h2 className="heading mb-5">Perfeccionamiento Dental</h2>

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

              <h1 className="font-weight-bold">¿Qué es el Perfeccionamiento Dental?</h1>

              <p className="my-4">El perfeccionamiento dental es un conjunto de procedimientos odontológicos diseñados para mejorar la estética y la función de la sonrisa. Este enfoque personalizado aborda una variedad de problemas dentales, como malposiciones, desgastes, fracturas, manchas y asimetrías.</p>

              <p className="my-4">Mediante el perfeccionamiento dental, se pueden utilizar diferentes técnicas y tratamientos, como carillas, coronas, implantes, ortodoncia, blanqueamiento dental y restauraciones estéticas, para lograr resultados óptimos. El objetivo es crear una sonrisa armónica, equilibrada y natural que resalte la belleza de cada paciente.</p>
              
              <p className="my-4">El perfeccionamiento dental no solo mejora la apariencia estética, sino que también puede proporcionar beneficios funcionales y de salud bucal. Al corregir problemas de alineación y mordida, se pueden prevenir desgastes adicionales, problemas de articulación y dificultades para hablar o comer.</p>
             
              <p className="my-4">Si deseas obtener una sonrisa perfecta y saludable, el perfeccionamiento dental puede ser la solución ideal.</p>

            </div>

            <div className="text-center my-5">

              <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

            </div>
      
    </main>
    <Footer/>
    </>
  )
}

export default perfeccionamiento