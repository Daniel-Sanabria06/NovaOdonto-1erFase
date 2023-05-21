import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Ortodoncia',
    description: 'Nova Odonto - Ortodoncia'
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

const Hombres = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

//TODO: imagenes ortodoncia y texto

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-5">Ortodoncia</h2>

     

    </main>
  )
}

export default Hombres