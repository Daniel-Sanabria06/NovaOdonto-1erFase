import Ayd from "../../../../components/ayd"
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import Sidebar from "../../../../components/sidebarEn"
import Footer from '~/components/footerEn'

export function meta() {
  return {
    title: 'Nova Odonto - Dental Brightening',
    description: 'Nova Odonto - Dental Brightening'
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
      <div className="header">
       <Sidebar/>
      </div>
    <main className="contenedor">

      <h2 className="heading mb-5">Dental Brightening</h2>

      <Ayd
          imagen="https://i.postimg.cc/vHPNGG7L/teeth-whitening-before-1.jpg"
          imagen2="https://i.postimg.cc/BnXw6RMW/teeth-whitening-after-1.jpg"
        />

        <hr className="my-5" />

            <div className="text-center quees contenedor">

            <h1 className="font-weight-bold">What is Dental Brightening?</h1>

            <p className="my-4">Teeth whitening, also known as dental bleaching, is a cosmetic procedure performed to improve the appearance of teeth by making them whiter and brighter.</p>

            <p className="my-4">Over time, our teeth can lose their natural color due to various factors such as the consumption of pigmented foods and beverages, smoking, aging, or certain medications. Teeth whitening is a popular solution for those who wish to revitalize their smile and regain confidence in their dental appearance.</p>

            </div>

            <div className="text-center my-5">

              <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Schedule your Appointment!</a>

            </div>
      
    </main>
    <Footer/>
    </>
  )
}

export default aclaramiento