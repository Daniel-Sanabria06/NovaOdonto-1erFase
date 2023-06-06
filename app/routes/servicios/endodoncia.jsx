import Ayd from "../../components/ayd"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import endodo from "../../../public/img/media/endodoncia.jpg"
import styles from '~/styles/marcas.css'
import Footer from '~/components/footer'
import Header from '~/components/header'

export function meta() {
  return {
    title: 'Nova Odonto - Endodoncia',
    description: 'novaOdonto - Endodoncia'
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

const Endodoncia = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  //TODO: imagenes Endodoncia y texto

  return (
    <>
   <Header/> 
    <main className="contenedor">

      <h2 className="heading mb-1">Endodoncia</h2>

      <div className="text-center my-5">
        <img className="w-50" src={endodo} alt="" />
      </div>
    
        <div className="text-center quees contenedor">

            <h1 className="font-weight-bold my-5">¿En qué Consiste?</h1>

            <p className="my-4">La endodoncia es un procedimiento odontológico especializado que se realiza cuando el tejido interno del diente, conocido como pulpa dental, está dañado o infectado, se remueve cuidadosamente la pulpa afectada, se limpian y desinfectan los conductos radiculares y se sellan para prevenir futuras infecciones.</p>

            <p className="my-4">Este procedimiento ayuda a salvar dientes, alivia el dolor y la incomodidad causados por la infección, la endodoncia restaura la función y estética del diente tratado. </p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

           </div>
    </main>
    <Footer/>
    </>
  )
}

export default Endodoncia