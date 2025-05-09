import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ textAlign: 'center', marginBottom: '40px' }}>
      <Link to="/" style={{ marginRight: '20px' }}>Nunca Desista</Link>
      <Link to="/pagina2">Você é Capaz</Link>
    </nav>
  )
}
