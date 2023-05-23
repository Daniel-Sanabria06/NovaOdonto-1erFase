import styles from '~/styles/index.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function meta() {
  return {
    title: 'Nova Odonto - Nosotros',
    description: 'Nova Odonto - Nosotros'
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

const nosotros = () => {

  
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

    //TODO: Poner bien los numeros de contacto

  return (
    <div  className="container nosotros">

      <h2 className="heading mb-1">Quiénes Somos</h2>
      
    </div>
  )
}

export default nosotros