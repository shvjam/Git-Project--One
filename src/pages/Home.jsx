import Scene from '../components/Scene'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div style={{ height: '100vh', position: 'fixed', top: 0, left: 0, width: '100%' }}>
        <Scene />
      </div>
      <div style={{ height: '600vh' }} />
      <Link to="/about" style={{ position: 'fixed', bottom: '2rem', right: '2rem', color: 'white', zIndex: 10 }}>
        درباره من
      </Link>
    </>
  )
}
