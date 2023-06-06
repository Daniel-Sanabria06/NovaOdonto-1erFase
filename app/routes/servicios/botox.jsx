import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'
import Ayd from "../../components/ayd"
import botox from "../../../public/img/media/botox.jpg"
import Header from '~/components/header'

export function meta() {
  return {
    title: 'Nova Odonto - Botox',
    description: 'novaOdonto - Botox'
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

const Botox = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  //TODO: imagenes Botox y texto

  return (
    <>
    <Header/>
    <main className="contenedor">

      <h2 className="heading mb-1">Botox</h2>

      <div className="text-center my-5">
        <img className="w-50" src={botox} alt="" />
      </div>
    
        <div className="text-center quees contenedor">

            <h1 className="font-weight-bold my-5">¿Qué es Botox?</h1>

            <p className="m-4">El Botox, o toxina botulínica, se utiliza para tratar diversos problemas relacionados con la salud bucal y facial. Esta sustancia se aplica en pequeñas dosis en ciertos puntos específicos para relajar los músculos faciales y obtener resultados sorprendentes.</p>

            <p className="m-4">Se emplea para tratar el bruxismo, una afección en la que se aprietan o rechinan los dientes involuntariamente. Gracias a su capacidad para relajar los músculos de la mandíbula, el Botox ayuda a reducir la tensión y el desgaste dental asociados a esta condición.</p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

           </div>

    </main>
    </>
  )
}

export default Botox