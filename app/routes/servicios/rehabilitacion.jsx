import Ayd from "../../components/ayd"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Rehabilitación',
    description: 'Nova Odonto - Rehabilitación'
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
    
    <main className="contenedor">

      <h2 className="heading mb-1">Rehabilitación Oral</h2>

      <Ayd
          imagen="https://i.postimg.cc/vHPNGG7L/teeth-whitening-before-1.jpg"
          imagen2="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg"
        />
    
        <div className="text-center quees contenedor">

            <h1 className="font-weight-bold my-5">¿En qué Consiste?</h1>

            <p className="my-4">La Rehabilitación Oral es un proceso especializado que aborda problemas dentales complejos, como la pérdida de múltiples dientes, daños en las estructuras dentales severas. A través de técnicas avanzadas y la combinación de diferentes tratamientos, podemos restaurar por completo tu salud bucal. Tenemos como objetivo devolverte una sonrisa funcional y estéticamente perfecta.</p>

            <p className="my-4">La Rehabilitación Oral no solo mejorará tu apariencia y autoestima, sino que también te permitirá disfrutar de una mayor comodidad al comer y hablar. Además, contribuirá a la salud general de tu boca, ya que alinear y restaurar los dientes correctamente facilita su limpieza y previene problemas futuros.</p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

           </div>

    </main>
  )
}

export default rehabilitacion