
import Ayd from "../../../components/ayd"
import { useLocation } from 'react-router'
import { useEffect } from 'react'

export function meta() {
  return {
    title: 'Nova Odonto - Carillas en Resina',
    description: 'Nova Odonto - Carillas en Resina'
  }
}

const Carillas = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  //TODO: Imagen

  return (
    <main className="contenedor">

      <h2 className="heading mb-5">Carillas en Resina</h2>

      <Ayd
          imagen="https://i.postimg.cc/vHPNGG7L/teeth-whitening-before-1.jpg"
          imagen2="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg"
        />

        <hr className="my-5" />

            <div className="text-center quees contenedor">

              <h1 className="font-weight-bold">¿Qué son las Carillas en Resina?</h1>

              <p className="my-4">Las carillas en resina son una solución estética altamente efectiva para mejorar la apariencia de los dientes. Son láminas delgadas de resina compuesta que se adhieren a la superficie de los dientes para corregir imperfecciones, como manchas, fracturas, desgaste o malformaciones.</p>

              <p className="my-4">En este tratamiento se pueden personalizar según el color y la forma de los dientes naturales del paciente.</p>

              <p className="my-4">Ofrecen una gran durabilidad y resistencia a las manchas, aunque requieren un cuidado adecuado y una higiene oral rigurosa para mantener su aspecto original a largo plazo.</p>
              
            </div>

            <div className="text-center my-5">

              <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

            </div>
      
    </main>
  )
}

export default Carillas