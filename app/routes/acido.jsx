import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Ácido Hialurónico',
    description: 'Nova Odonto - Ácido Hialurónico'
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

const Acido = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

    //TODO: imagenes acido y texto

  return (
    
    <main className="contenedor">

      <h2 className="heading mb-1">Ácido Hialurónico</h2>

    

    </main>
  )
}

export default Acido