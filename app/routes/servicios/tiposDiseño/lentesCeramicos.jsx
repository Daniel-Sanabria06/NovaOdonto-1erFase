
import Ayd from "../../../components/ayd"
import { useLocation } from 'react-router'
import { useEffect } from 'react'

export function meta() {
  return {
    title: 'Nova Odonto - Lentes Cerámicos',
    description: 'Nova Odonto - Lentes Cerámicos'
  }
}

const lentesCeramicos = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  //TODO: Imagen

  return (
    <main className="contenedor">

      <h2 className="heading mb-5">Lentes Cerámicos</h2>

      <div className="text-center">
        <img className="w-50" src="https://staticnew-prod.topdoctors.cl/files/Image/large/d529beb01e52ad94e7c4a112cbc0fee9.jpeg" alt="" />
      </div>

        <hr className="my-5" />

            <div className="text-center quees contenedor">

              <h1 className="font-weight-bold">¿Qué son los Lentes Cerámicos?</h1>

              <p className="my-4">Los lentes cerámicos ofrecen una apariencia excepcionalmente realista, imitando la translucidez y el brillo de los dientes naturales. Además de corregir manchas, fracturas, desgaste y malformaciones, también pueden corregir problemas de alineación y espacios entre los dientes.</p>
 
             <p className="my-4">Una de las principales ventajas de los lentes cerámicos es su durabilidad y resistencia a las manchas. Además, requieren un cuidado y una higiene oral adecuados para mantener su apariencia y funcionalidad a largo plazo. Con los cuidados apropiados, los lentes cerámicos pueden brindar una sonrisa hermosa y duradera durante muchos años.</p>

            </div>

            <div className="text-center my-5">

              <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">¡Agenda tu cita!</a>

            </div>
      
    </main>
  )
}

export default lentesCeramicos