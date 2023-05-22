
import Ayd from "../../components/ayd"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'
import { Link } from "@remix-run/react"

export function meta() {
  return {
    title: 'Nova Odonto - Ortodoncia',
    description: 'Nova Odonto - Ortodoncia'
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

const Ortodoncia = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

//TODO: imagenes ortodoncia y texto

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-5">Ortodoncia</h2>

     
      <Ayd
          imagen="https://i.postimg.cc/vHPNGG7L/teeth-whitening-before-1.jpg"
          imagen2="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg"
        />


          <div className="text-center quees contenedor">

             <h1 className="font-weight-bold my-5">¿Qué es la Ortodoncia?</h1>

             <p className="my-4">La ortodoncia se enfoca en corregir y alinear los dientes y la mandíbula para lograr una sonrisa más saludable y estética. Utilizando diferentes técnicas y dispositivos, como brackets o alineadores transparentes.</p>

              <p className="my-4">Este tratamiento mejora la apariencia de la sonrisa, corrige problemas funcionales que pueden afectar la masticación, la fonética y la salud bucal en general. Además, prevenir futuros problemas dentales, como desgaste excesivo de los dientes, enfermedades de las encías y dolor en la mandíbula.</p>

              <p className="my-4">El resultado final de la ortodoncia es una sonrisa alineada y armoniosa, que no solo mejora la confianza y la estética facial, sino también la función y la salud bucal en general.</p>

            </div>

            <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

            </div>

            <div className="contenedor my-5">
              
              <p className="font-weight-bold text-center display-3 my-5">Tipos de Ortodoncia</p>

              <div className="row text-center">

                  <div className="col-12 col-md-4 mb-5">
                    <img src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
                    <p className="pcarrusel enlacecarrusel my-5">Brackets Metálicos</p>
                  </div>
                  <div className="col-12 col-md-4 mb-5">
                    <img src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
                    <p className="pcarrusel enlacecarrusel my-5">Brackets Invisibles</p>
                  </div>
                  <div className="col-12 col-md-4 mb-5">
                    <img src="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg" alt="" />
                    <p className="pcarrusel enlacecarrusel my-5">Brackets Cerámicos</p>
                  </div>

              </div>

            </div>
           
          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

          </div>

    </main>
  )
}

export default Ortodoncia