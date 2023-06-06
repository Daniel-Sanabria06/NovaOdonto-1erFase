import { Link } from "@remix-run/react"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '~/components/header'
import cliente1 from '../../public/img/clientes satisfechos/1.jpeg'
import cliente2 from '../../public/img/clientes satisfechos/2.jpeg'
import cliente3 from '../../public/img/clientes satisfechos/3.jpeg'
import cliente4 from '../../public/img/clientes satisfechos/4.jpeg'
import cliente5 from '../../public/img/clientes satisfechos/5.jpeg'
import cliente6 from '../../public/img/clientes satisfechos/6.jpeg'
import cliente7 from '../../public/img/clientes satisfechos/7.jpeg'
import cliente8 from '../../public/img/clientes satisfechos/8.jpeg'
import styles from '~/styles/marcas.css'

export function meta() {
  return {
    title: 'Nova Odonto - Clientes Felices',
    description: 'Nova Odonto - Clientes Felices'
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

const ClientesFelices = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (

    <>
    
    <Header/>

    <main className="contenedor">

      <h2 className="heading mb-5">Clientes Felices</h2>

      <div className="marcas-grid text-center mt-5">
          
          <Link className='marca text-center'>
            <img src={cliente1} className='marcaImagen' alt="Diseño en resina" />
          </Link>

          <Link className='marca text-center'>
            <img src={cliente2} className='marcaImagen' alt="Diseño en resina" />
          </Link>

          <Link className='marca text-center'>
            <img src={cliente3} className='marcaImagen' alt="Diseño en resina" />
          </Link>

          <Link className='marca text-center'>
            <img src={cliente4} className='marcaImagen' alt="Diseño en resina" />
          </Link>

          <Link className='marca text-center'>
            <img src={cliente5} className='marcaImagen' alt="Diseño en resina" />
          </Link>

          <Link className='marca text-center'>
            <img src={cliente6} className='marcaImagen' alt="Diseño en resina" />
          </Link>

          <Link className='marca text-center'>
            <img src={cliente7} className='marcaImagen' alt="Diseño en resina" />
          </Link>

          <Link className='marca text-center'>
            <img src={cliente8} className='marcaImagen' alt="Diseño en resina" />
          </Link>
        
        </div>

    </main>
    </>
  )
}

export default ClientesFelices