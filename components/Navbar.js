import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {
  const { user, login, logout} = useContext(AuthContext)
  console.log(user)
  // Llamo a la funcion login en linea 18
  return (
    <div className="container">
      <nav>
        <Image src="/logo_clinica.png" width={50} height={48} />
        <h1>Clínica San Pablo</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Guides</a></Link></li>  
          <li onClick={login} className="btn">Log-in/Registrarse</li>
          <li onClick={logout} className="btn">Logout</li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner_principal.png" width={970} height={504} />
      </div>
    </div>
  )
}
