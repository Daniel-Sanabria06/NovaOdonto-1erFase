import { useLocation } from 'react-router'
import { useEffect } from 'react'
import carillas from '../../../../../public/img/media/carillas.jpg'
import Sidebar from "../../../../components/sidebarEn"
import Footer from '~/components/footerEn'

export function meta() {
  return {
    title: 'Nova Odonto - Resin Veneers',
    description: 'Nova Odonto - Resin Veneers'
  }
}

const Carillas = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  //TODO: Imagen

  return (
    <>
      <div className="header">
       <Sidebar/>
      </div>
    <main className="contenedor">

      <h2 className="heading mb-5">Resin Veneers</h2>

      <div className="text-center">
        <img className="w-50" src={carillas} alt="" />
      </div>
        <hr className="my-5" />

            <div className="text-center quees contenedor">

              <h1 className="font-weight-bold">What are Resin Veneers?</h1>

              <p className="my-4">Resin veneers are a highly effective aesthetic solution for improving the appearance of teeth. They are thin layers of composite resin that are bonded to the surface of the teeth to correct imperfections such as stains, fractures, wear, or malformations.</p>

              <p className="my-4">In this treatment, resin veneers can be customized to match the color and shape of the patient's natural teeth.</p>

              <p className="my-4">They offer great durability and resistance to staining, although they require proper care and rigorous oral hygiene to maintain their original appearance in the long term.</p>
         
            </div>

            <div className="text-center my-5">

              <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>

            </div>
    </main>
    <Footer/>
    </>
  )
}

export default Carillas