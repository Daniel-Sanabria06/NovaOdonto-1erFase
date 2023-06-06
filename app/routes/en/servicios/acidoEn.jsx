import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'
import Ayd from "../../components/ayd"
import acido from "../../../public/img/media/acido.jpg"
import Header from '~/components/header'

export function meta() {
  return {
    title: 'Nova Odonto - Ácido Hialurónico',
    description: 'Nova Odonto - Ácido Hialurónico'
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

const Acido = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

    //TODO: imagenes acido y texto

  return (
    <>
    <Header/>
    <main className="contenedor">

      <h2 className="heading mb-1">Ácido Hialurónico</h2>
      
      <div className="text-center my-5">
        <img className="w-50" src={acido} alt="" />
      </div>
    
        <div className="text-center quees contenedor">

            <h1 className="font-weight-bold my-5">¿Qué es el Ácido Hialurónico?</h1>

            <p className="m-4">El ácido hialurónico es un compuesto natural que se utiliza en odontología para diversos fines estéticos y terapéuticos. Es una sustancia biocompatible y segura, ampliamente conocida por su capacidad para hidratar y rejuvenecer la piel.</p>

            <p className="m-4">El ácido hialurónico se utiliza para tratar problemas como la falta de volumen en los labios, arrugas en la zona peribucal, líneas de expresión y pliegues nasolabiales. También se puede aplicar para mejorar la forma y contorno de las encías, corregir asimetrías faciales y suavizar cicatrices.</p>

            <p className="m-4">Si estás buscando mejorar la estética de tu sonrisa y rejuvenecer tu apariencia facial, el ácido hialurónico puede ser una opción adecuada. </p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

           </div>

    </main>
    </>
  )
}

export default Acido