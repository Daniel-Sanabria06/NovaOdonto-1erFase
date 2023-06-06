import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'
import botox from "../../../../public/img/media/botox.jpg"
import Sidebar from "../../../components/sidebarEn"
import Footer from '~/components/footerEn'

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
      <div className="header">
       <Sidebar/>
      </div>
    <main className="contenedor">

      <h2 className="heading mb-1">Botox</h2>

      <div className="text-center my-5">
        <img className="w-50" src={botox} alt="" />
      </div>
    
        <div className="text-center quees contenedor">

         <h1 className="font-weight-bold my-5">What is Botox?</h1>

          <p className="m-4">Botox, or botulinum toxin, is used to treat various oral and facial health-related issues. This substance is applied in small doses at specific points to relax facial muscles and achieve remarkable results.</p>

          <p className="m-4">It is used to treat bruxism, a condition characterized by the involuntary grinding or clenching of teeth. By relaxing the jaw muscles, Botox helps reduce the tension and dental wear associated with this condition.</p>

        </div>

          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>

           </div>

    </main>
    <Footer/>
    </>
  )
}

export default Botox