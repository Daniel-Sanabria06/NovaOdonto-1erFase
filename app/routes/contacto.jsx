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

        <h2 className="heading mb-1">Ubicación</h2>


        <iframe className="my-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6786641587723!2d-76.53826049999999!3d3.4281870000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a699ee8d4141%3A0x84e413f8f8779bd1!2sCra.%2032%20%2336%207%2C%20Eucaristico%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1684861390965!5m2!1ses!2sco" width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <hr />
        <Link className="text-black text-center my-5 h3" target="_blank" rel="noopener noreferrer" to='https://maps.app.goo.gl/vMNYGNkX91rn1VaT7?g_st=iw'>¿Cómo llegar?</Link>
     

      </div>
    </main>
  )
}

export default Contacto