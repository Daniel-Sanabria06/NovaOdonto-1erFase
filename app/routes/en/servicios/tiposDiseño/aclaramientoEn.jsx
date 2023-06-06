import Ayd from "../../../components/ayd"
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import Header from '~/components/header'

export function meta() {
  return {
    title: 'Nova Odonto - Aclaramiento Dental',
    description: 'Nova Odonto - Aclaramiento Dental'
  }
}

const aclaramiento = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

   //TODO: Imagen


  return (
    <>
    <Header/>
    <main className="contenedor">

      <h2 className="heading mb-5">Aclaramiento Dental</h2>

      <Ayd
          imagen="https://i.postimg.cc/vHPNGG7L/teeth-whitening-before-1.jpg"
          imagen2="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg"
        />

        <hr className="my-5" />

            <div className="text-center quees contenedor">

              <h1 className="font-weight-bold">¿Qué es?</h1>

              <p className='my-4'>El aclaramiento o blanqueamiento dental es un procedimiento estético que se realiza para mejorar la apariencia de los dientes, haciéndolos más blancos y brillantes.</p>
              
              <p className='my-4'>A lo largo del tiempo, nuestros dientes pueden perder su color natural debido a diversos factores, como el consumo de alimentos y bebidas pigmentadas, el tabaquismo, el envejecimiento o ciertos medicamentos. El aclaramiento dental es una solución popular para aquellos que desean revitalizar su sonrisa y recuperar la confianza en su apariencia dental.</p>
            </div>

            <div className="text-center my-5">

              <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

            </div>
      
    </main>
    </>
  )
}

export default aclaramiento