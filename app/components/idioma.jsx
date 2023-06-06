import React from 'react'
import bandera from '../../public/img/estados-unidos.png'
import bandera2 from '../../public/img/colombia.png'
import { Link } from '@remix-run/react'


const Idioma = () => {
  return (
    <>
      <Link className='sm:ml-5' to='https://novaodonto.vercel.app/en/home'>
        <div data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
          <img src={bandera} className='mx-5 bandera' alt="" />
        </div>
      </Link>

      <Link className='sm:mr-5' to='https://novaodonto.vercel.app/'>
        <div data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
          <img src={bandera2} className='mx-5 bandera' alt="" />
        </div>
      </Link>
    </>
  )
}

export default Idioma