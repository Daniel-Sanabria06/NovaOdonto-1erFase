import { Link } from "@remix-run/react"
import logo from '../../public/img/logoNova.jpeg'
import Idioma from "./idioma"

//TODO: cambiar 3 links para ingles

const Sidebar = () => {
  return (
    <>

        <div className="row d-flex mb-3">

            <div className="col ml-4">
               <div className="ml-1">
                    <Link to='https://novaodonto.vercel.app/en/home' className="text-center">
                    <img className='logo mt-2' src={logo} alt="imagen logo"/>
                    </Link>
                </div>
            </div>
            

            <div className="col text-center">
              <nav className="navbar navbar-expand-lg navbar-light mt-2 menu">

                <button className="mt-4 mr-2 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
              </nav>
            </div>
            <div className="col-sm">

               <nav className="navbar navbar-expand-lg navbar-light mb-2">
                <div className="collapse navbar-collapse linksMenuSidebar " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex justify-content-center d-flex-sm gap-5">
                    <hr className="hr1"/>

                    <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
                        <Link className="nav-link text-white" to='https://novaodonto.vercel.app/en/home'>Home</Link >
                    </li>

                    <li className="nav-item dropdown" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="text-white nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Services
                        </Link>
                            <div className="dropdown-menu text-center mx-5 bg-black5" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item text-white mb-3 fs-2" to='https://novaodonto.vercel.app/servicios/diseñoEn'>Smile Design</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='https://novaodonto.vercel.app/servicios/ortodonciaEn'>Orthodontics</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='https://novaodonto.vercel.app/servicios/acidoEn'>Hyaluronic Acid</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='https://novaodonto.vercel.app/servicios/botoxEn'>Botox</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='https://novaodonto.vercel.app/servicios/rehabilitacionEn'>Oral Rehabilitation</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='https://novaodonto.vercel.app/servicios/bichectomiaEn'>Bichectomy</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='https://novaodonto.vercel.app/servicios/endodonciaEn'>Endodontics</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='https://novaodonto.vercel.app/servicios/cirugiaEn'>Oral Surgery</Link>
                            </div>
                        </li>

                        <li className="nav-item"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="nav-link text-white" to='https://novaodonto.vercel.app/contacto'>Contact</Link >
                        </li>

                        <li className="nav-item"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="nav-link text-white" to='https://novaodonto.vercel.app/clientesFelices'>Happy Customers</Link >
                        </li>

                        <li className="nav-item"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="nav-link text-white" target="_blank" rel="noopener noreferrer" to='https://maps.app.goo.gl/vMNYGNkX91rn1VaT7?g_st=iw'>How to get there?</Link >
                        </li>

                        <Idioma/>

                      {/*<li className="nav-item"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="nav-link text-white" to='/nosotros'>Quiénes somos</Link >
                        </li>

                        */} 

                </ul>

                </div>
            </nav>
        </div>
        </div>
        
    </>
  )
}

export default Sidebar