import { useLoaderData } from "react-router"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Bichectomía',
    description: 'Nova Odonto - Bichectomía'
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

const Bichectomía = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-1">Bichectomía</h2>

    

    </main>
  )
}

export default Bichectomía