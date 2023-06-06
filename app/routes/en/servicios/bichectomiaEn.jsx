import Ayd from "../../components/ayd"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'
import bichec from "../../../public/img/media/bichectomia.jpg"
import Header from '~/components/header'

export function meta() {
  return {
    title: 'Nova Odonto - Bichectomía',
    description: 'Nova Odonto - Bichectomía'
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

const Bichectomía = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
    <Header/>
    <main className="contenedor">

      <h2 className="heading mb-1">Bichectomía</h2>

      <div className="text-center my-5">
        <img className="w-50" src={bichec} alt="" />
      </div>
    
        <div className="text-center quees contenedor">

            <h1 className="font-weight-bold my-5">¿En qué Consiste?</h1>

            <p className="my-4">La bichectomía es un procedimiento quirúrgico realizado en odontología para reducir el tamaño de las mejillas. Consiste en la extracción de las bolsas de grasa llamadas bolas de Bichat, que se encuentran en las mejillas y pueden dar una apariencia redondeada al rostro.</p>

            <p className="my-4">La bichectomía es especialmente beneficiosa para aquellos pacientes que desean afinar sus rasgos faciales y lograr un aspecto más armónico y equilibrado. Es un procedimiento ambulatorio, con una recuperación rápida y mínimas molestias postoperatorias. </p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

           </div>

    </main>
    </>
  )
}

export default Bichectomía