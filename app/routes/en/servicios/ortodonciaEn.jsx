import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '~/styles/marcas.css'
import Header from '~/components/header'
import brackets0 from '../../../../public/img/media/brackets0.jpg'
import brackets1 from '../../../../public/img/media/BRACKETS.jpg'
import brackets2 from '../../../../public/img/media/bracketsCeramicos.jpg'
import brackets3 from '../../../../public/img/media/bracketsInvisibles.jpg'


export function meta() {
  return {
    title: 'Nova Odonto - Orthodontics',
    description: 'Nova Odonto - Orthodontics'
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

const Ortodoncia = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

//TODO: imagenes ortodoncia y texto

  return (
    
    <>
    <Header/>

    <main className="contenedor">

      <h2 className="heading mb-5">Orthodontics</h2>

     <div className="contenedor text-center">
     <img className="w-75" src={brackets0} alt="" />
     </div>
   

          <div className="text-center quees contenedor">

           <h1 className="font-weight-bold my-5">What is Orthodontics?</h1>
           <p className="my-4">Orthodontics focuses on correcting and aligning the teeth and jaw to achieve a healthier and more aesthetic smile. It utilizes different techniques and devices, such as braces or clear aligners.</p>

           <p className="my-4">This treatment improves the appearance of the smile, corrects functional problems that can affect chewing, speech, and overall oral health. It also helps prevent future dental issues, such as excessive tooth wear, gum diseases, and jaw pain.</p>

           <p className="my-4">The ultimate goal of orthodontics is an aligned and harmonious smile, which not only enhances confidence and facial aesthetics but also improves overall oral function and health.</p>
          </div>

            <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">Schedule your Appointment</a>

            </div>

            <div className="contenedor my-5">
              
              <p className="font-weight-bold text-center display-3 my-5">Types of Orthodontics</p>

              <div className="row text-center">

                  <div className="col-12 col-md-4 mb-5">
                    <img src={brackets1} alt="" />
                    <p className="pcarrusel enlacecarrusel my-5">Metal Braces</p>
                  </div>
                  <div className="col-12 col-md-4 mb-5">
                    <img src={brackets2} alt="" />
                    <p className="pcarrusel enlacecarrusel my-5">Invisible Braces</p>
                  </div>
                  <div className="col-12 col-md-4 mb-5">
                    <img src={brackets3} alt="" />
                    <p className="pcarrusel enlacecarrusel my-5">Ceramic Braces</p>
                  </div>

              </div>

            </div>
           
          <div className="text-center my-5">

            <a className='botonCita my-5' href="https://api.whatsapp.com/send?phone=573235248716" target="_blank" rel="noopener noreferrer">Schedule your Appointment</a>

          </div>

    </main>
    </>
  )
}

export default Ortodoncia