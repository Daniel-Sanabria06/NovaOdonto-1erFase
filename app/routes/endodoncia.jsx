import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Marca from "~/components/marca"
import styles from '~/styles/marcas.css'

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
    
    <main className="contenedor">

      <h2 className="heading mb-1">Endodoncia</h2>

      
    </main>
  )
}

export default Endodoncia