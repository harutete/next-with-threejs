import { useRef, useState, Suspense } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import {
  ReactThreeFiber,
  Canvas,
  useFrame,
  useLoader,
  useThree,
  extend
} from '@react-three/fiber';
import { OrbitControls } from 'three-stdlib';

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>;
    }
  }
}

const FbxFile = () => {
  const controls = useRef<OrbitControls>();
  const { camera, gl } = useThree();
  const fbx = useLoader(FBXLoader, '/fbx/booth_sen_small_prototype.fbx');
  // const fbx = useLoader(FBXLoader, '/fbx/Eventhall_prototype.fbx');

  console.log({ fbx });
  // useFrame(() => controls.current.update());

  // <orbitControls></orbitControls>
  return (
    <primitive
      object={fbx}
      dispose={null}
      scale={[0.8, 0.8, 0.8]}
      rotation={[0, 0.6, 0]}
      position={[0, -130, -500]}
    />
  );
};

const Home = () => {
  const onMouseMove = () => {
    console.log('move');
  };
  return (
    <div style={{ backgroundColor: '#000000' }}>
      <Canvas
        onMouseMove={onMouseMove}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <FbxFile />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
