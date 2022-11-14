import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext)
  console.log(user)
  // Llamo a la funcion login en linea 18
  //Solo si tengo user (login) muestro el boton login, si aun no hay registro no  muestro el botón logout
  //linea 16: Solo muestro esa info cuando la conexion entre netlify y user se haya realizado
  return (
    <div className="container">
      <nav>
        <Image src="/logo_clinica.png" width={50} height={48} />
        <h1>Clínica San Pablo</h1>
        {authReady && (
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/guides"><a>TomoDiag</a></Link></li>  
            {!user && <li onClick={login} className="btn">Ingresar/Registrarse</li>}
              {user && <li> <b> Hola, {user.user_metadata.full_name}</b></li>}
              {user && <li onClick={logout} className="btn">Salir</li>}
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src="/banner_principal.png" width={970} height={504} />
      </div>
    </div>
  )
}
