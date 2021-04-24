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
      scale={[1, 1, 1]}
      rotation={[0, 0.2, 0]}
      position={[50, -165, -350]}
    />
  );
};

const Home = () => {
  return (
    <div
      style={{ width: '100vw', height: '100vh', backgroundColor: '#000000' }}
    >
      <Canvas>
        <ambientLight />
        <pointLight />
        <Suspense fallback={null}>
          <FbxFile />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
