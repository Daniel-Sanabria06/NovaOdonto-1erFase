
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import imagen1 from '../../../../../public/img/lentes/Image.jpeg'
import imagen2 from '../../../../../public/img/lentes/image2.jpeg'
import imagen3 from '../../../../../public/img/lentes/image3.jpeg'
import imagen4 from '../../../../../public/img/lentes/image4.jpeg'
import Header from '~/components/header'

export function meta() {
  return {
    title: 'Nova Odonto - Lentes Cerámicos',
    description: 'Nova Odonto - Lentes Cerámicos'
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
    <Header/>
    <main className="contenedor">

      <h2 className="heading mb-5">Lentes Cerámicos</h2>

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

              <h1 className="font-weight-bold">¿Qué son los Lentes Cerámicos?</h1>

              <p className="my-4">Los lentes cerámicos ofrecen una apariencia excepcionalmente realista, imitando la translucidez y el brillo de los dientes naturales. Además de corregir manchas, fracturas, desgaste y malformaciones, también pueden corregir problemas de alineación y espacios entre los dientes.</p>
 
             <p className="my-4">Una de las principales ventajas de los lentes cerámicos es su durabilidad y resistencia a las manchas. Además, requieren un cuidado y una higiene oral adecuados para mantener su apariencia y funcionalidad a largo plazo. Con los cuidados apropiados, los lentes cerámicos pueden brindar una sonrisa hermosa y duradera durante muchos años.</p>

            </div>

            <div className="text-center my-5">

              <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

            </div>
      
    </main>
    </>
  )
}

export default lentesCeramicos