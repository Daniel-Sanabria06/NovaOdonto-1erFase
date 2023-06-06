import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import endodo from "../../../../public/img/media/endodoncia.jpg"
import styles from '~/styles/marcas.css'
import Sidebar from "../../../components/sidebarEn"

export function meta() {
  return {
    title: 'Nova Odonto - Endodontics',
    description: 'novaOdonto - Endodontics'
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
     <div className="header">
       <Sidebar/>
      </div> 
    <main className="contenedor">

      <h2 className="heading mb-1">Endodontics</h2>

      <div className="text-center my-5">
        <img className="w-50" src={endodo} alt="" />
      </div>
    
        <div className="text-center quees contenedor">

        <h1 className="font-weight-bold my-5">What is it?</h1>

        <p className="my-4">Endodontics is a specialized dental procedure that is performed when the internal tissue of the tooth, known as dental pulp, is damaged or infected. The affected pulp is carefully removed, the root canals are cleaned and disinfected, and then sealed to prevent future infections.</p>

        <p className="my-4">This procedure helps save teeth, relieves pain and discomfort caused by infection, and restores the function and aesthetics of the treated tooth.</p>
        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>

           </div>
    </main>
    </>
  )
}

export default Endodoncia