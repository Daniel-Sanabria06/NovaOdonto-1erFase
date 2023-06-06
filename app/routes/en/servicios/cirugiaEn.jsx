import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ciru from "../../../../public/img/media/cirugia.jpg"
import styles from '~/styles/marcas.css'
import Sidebar from "../../../components/sidebarEn"
import Footer from '~/components/footerEn'

export function meta() {
  return {
    title: 'Nova Odonto - Oral Surgery',
    description: 'novaOdonto - Oral Surgery'
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

const Cirugia = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  //TODO: imagenes cirugias y texto

  return (
    
    <>
      <div className="header">
       <Sidebar/>
      </div>

    <main className="contenedor">

      <h2 className="heading mb-1">Oral Surgery</h2>

      <div className="text-center my-5">
        <img className="w-50" src={ciru} alt="" />
      </div>
    

    <div className="my-5 contenedor text-center">
     <p className="my-5 font-weight-bold">Wisdom Teeth Extraction - Bone Graft - Frenectomy - Gingivoplasty (Gum Contouring) - Dental Implants.</p>
    </div>
      
    </main>
    <Footer/>
    </>
  )
}

export default Cirugia