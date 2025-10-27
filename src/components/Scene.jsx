import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useScroll, ScrollControls, Loader } from '@react-three/drei'
import { Vector3, CatmullRomCurve3 } from 'three'
import { Suspense } from 'react'

function Model() {
  const { scene } = useGLTF('/models/Man/Man7.glb')
  return <primitive object={scene} />
}

const pathPoints = [
  [3.6217596530914307, 1.1559828519821167, 5.421966552734375],
  [3.7817535400390625, -0.07272994518280029, 5.208369731903076],
  [2.1067583560943604, -0.5117961764335632, 5.110057830810547],
  [0.6217780113220215, -0.49705809354782104, 4.89720344543457],
  [0.13143301010131836, 0.1222834587097168, 4.743571758270264],
  [0.5761919021606445, -0.29803839325904846, 4.895688533782959],
  [1.8171645402908325, -0.40591803193092346, 5.022176742553711],
];

const curve = new CatmullRomCurve3(
  pathPoints.map((p) => new Vector3(p[0] - 1.5, p[2] - 2.5, -(p[1] - 1.2)))
);

function Rig() {
  const scroll = useScroll();

  useFrame((state, delta) => {
    const time = scroll.offset;
    const position = curve.getPointAt(time);
    state.camera.position.copy(position);
    state.camera.lookAt(0, 3, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: curve.getPointAt(0), fov: 45 }}
      onCreated={({ scene }) => {
        scene.background = null;
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={<Loader />}>
        <ScrollControls pages={6}>
          <Model />
          <Rig />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
