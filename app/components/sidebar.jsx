import { Link } from "@remix-run/react"
import logo from '../../public/img/logoNova.jpeg'


const Sidebar = () => {
  return (
    <>

        <div className="row d-flex mb-2">

            <div className="col ml-4">
               <div className="ml-1">
                    <Link to='/' className="text-center">
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
                        <Link className="nav-link text-white" to='/'>Inicio</Link >
                    </li>

                    <li className="nav-item dropdown" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="text-white nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servicios
                        </Link>
                            <div className="dropdown-menu text-center mx-5 bg-black5" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item text-white mb-3 fs-2" to='/servicios/diseño'>Diseño Sonrisa</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='/servicios/ortodoncia'>Ortodoncia</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='/servicios/acido'>Ácido Hialurónico</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='/servicios/botox'>Botox</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='/servicios/rehabilitacion'>Rehabilitación Oral</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='/servicios/bichectomia'>Bichectomía</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='/servicios/endodoncia'>Endodoncia</Link>
                                <Link className="dropdown-item text-white my-3 fs-2" to='/servicios/cirugia'>Cirugía Oral</Link>
                            </div>
                        </li>

                        <li className="nav-item"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="nav-link text-white" to='/contacto'>Contacto</Link >
                        </li>

                        <li className="nav-item"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="nav-link text-white" to='/clientesFelices'>Clientes Felices</Link >
                        </li>

                        <li className="nav-item"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                        <Link className="nav-link text-white" target="_blank" rel="noopener noreferrer" to='https://maps.app.goo.gl/vMNYGNkX91rn1VaT7?g_st=iw'>¿Cómo llegar?</Link >
                        </li>

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