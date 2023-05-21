import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function meta() {
  return {
    title: 'Nova Odonto - Contacto',
    description: 'Nova Odonto - Contacto'
  }
}

const Contacto = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

    //TODO: Poner bien los numeros de contacto

  return (
    
    <main className="contenedor text-center">

      <h2 className="heading mb-1">Contáctanos</h2>
  
      <div className="contenedor mt-5">

        <p className="h1 font-weight-bold mt-5">Tel:</p>
        <p>(+57) 000 000 0000</p>

        <p className="h1 font-weight-bold">Cel:</p>
        <p>(+57) 000 000 0000</p>

        <p className="h1 font-weight-bold">Correo:</p>
        <p>correo@correo.com</p>

        <p className="h1 font-weight-bold">Whatsapp:</p>
        <Link to="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">(+57) 323 5248716</Link>

      </div>
    <hr />

    </main>
  )
}

export default Contacto