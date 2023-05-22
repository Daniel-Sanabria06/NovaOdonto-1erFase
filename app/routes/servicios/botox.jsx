import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Marca from "~/components/marca"
import styles from '~/styles/marcas.css'

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
    
    <main className="contenedor">

      <h2 className="heading mb-1">Botox</h2>

      
    </main>
  )
}

export default Botox