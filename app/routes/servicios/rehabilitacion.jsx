import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - rehabilitacion',
    description: 'Nova Odonto - rehabilitacion'
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

const rehabilitacion = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  //TODO: imagen y texto

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-1">Rehabilitación Oral</h2>


    </main>
  )
}

export default rehabilitacion