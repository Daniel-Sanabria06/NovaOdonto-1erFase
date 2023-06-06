import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'
import acido from "../../../../public/img/media/acido.jpg"
import Sidebar from "../../../components/sidebarEn"
import Footer from '~/components/footerEn'

export function meta() {
  return {
    title: 'Nova Odonto - Hyaluronic Acid',
    description: 'Nova Odonto - Hyaluronic Acid'
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
      <div className="header">
       <Sidebar/>
      </div>
    <main className="contenedor">

      <h2 className="heading mb-1">Hyaluronic Acid</h2>
      
      <div className="text-center my-5">
        <img className="w-50" src={acido} alt="" />
      </div>
    
        <div className="text-center quees contenedor">

          <h1 className="font-weight-bold my-5">What is Hyaluronic Acid?</h1>

          <p className="m-4">Hyaluronic acid is a natural compound used in dentistry for various aesthetic and therapeutic purposes. It is a biocompatible and safe substance, widely known for its ability to hydrate and rejuvenate the skin.</p>

          <p className="m-4">Hyaluronic acid is used to treat issues such as lack of volume in the lips, wrinkles in the perioral area, expression lines, and nasolabial folds. It can also be applied to improve the shape and contour of the gums, correct facial asymmetries, and smooth out scars.</p>

          <p className="m-4">If you are looking to enhance the aesthetics of your smile and rejuvenate your facial appearance, hyaluronic acid may be a suitable option.</p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>

           </div>

    </main>
    <Footer/>
    </>
  )
}

export default Acido