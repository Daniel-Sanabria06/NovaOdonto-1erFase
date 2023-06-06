
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'
import bichec from "../../../../public/img/media/bichectomia.jpg"
import Sidebar from "../../../components/sidebarEn"
import Footer from '~/components/footerEn'

export function meta() {
  return {
    title: 'Nova Odonto - Bichectomy',
    description: 'Nova Odonto - Bichectomy'
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
      <div className="header">
       <Sidebar/>
      </div>
    <main className="contenedor">

      <h2 className="heading mb-1">Bichectomy</h2>

      <div className="text-center my-5">
        <img className="w-50" src={bichec} alt="" />
      </div>
    
        <div className="text-center quees contenedor">

        <h1 className="font-weight-bold my-5">What is it?</h1>

          <p className="my-4">Bichectomy is a surgical procedure performed in dentistry to reduce the size of the cheeks. It involves the removal of fat pads called Bichat's fat pads, which are located in the cheeks and can give a rounded appearance to the face.</p>

          <p className="my-4">Bichectomy is particularly beneficial for patients who wish to refine their facial features and achieve a more harmonious and balanced look. It is an outpatient procedure with a quick recovery time and minimal postoperative discomfort.</p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>

           </div>

    </main>
    <Footer/>
    </>
  )
}

export default Bichectomía