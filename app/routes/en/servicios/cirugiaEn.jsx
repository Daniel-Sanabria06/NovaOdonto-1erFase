import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ciru from "../../../../public/img/media/cirugia.jpg"
import styles from '~/styles/marcas.css'
import Header from '~/components/header'

export function meta() {
  return {
    title: 'Nova Odonto - Cirugías Orales',
    description: 'novaOdonto - Cirugías Orales'
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
    <Header/>

    <main className="contenedor">

      <h2 className="heading mb-1">Cirugías Orales</h2>

      <div className="text-center my-5">
        <img className="w-50" src={ciru} alt="" />
      </div>
    

    <div className="my-5 contenedor text-center">
      <p className="my-5 font-weight-bold">Extracción de Cordales – Injerto de Hueso – Frenillectomía Gingivoplastia (recorte de encía) – Implantología.</p>
    </div>
      
    </main>
    </>
  )
}

export default Cirugia