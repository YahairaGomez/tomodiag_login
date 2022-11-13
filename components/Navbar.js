import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/logo_clinica.png" width={50} height={48} />
        <h1>Clínica San Pablo</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Guides</a></Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner_principal.png" width={970} height={504} />
      </div>
    </div>
  )
}
