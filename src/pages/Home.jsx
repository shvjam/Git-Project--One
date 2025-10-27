import Scene from '../components/Scene'
import DynamicMenu from '../components/DynamicMenu'
import '../components/DynamicMenu.css'

export default function Home() {
  return (
    <>
      <div style={{ height: '100vh', position: 'fixed', top: 0, left: 0, width: '100%' }}>
        <Scene />
      </div>
      <div style={{ height: '600vh' }} />
      <DynamicMenu />
    </>
  )
}
