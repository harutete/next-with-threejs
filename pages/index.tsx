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
  const fbx = useLoader(FBXLoader, '/fbx/hoge.fbx');
  // const fbx = useLoader(FBXLoader, '/fbx/fuga.fbx');

  console.log({ fbx });
  // useFrame(() => controls.current.update());

  // <orbitControls></orbitControls>
  return <primitive object={fbx} dispose={null} />;
};

const Home = () => {
  return (
    <div
      style={{ width: '100vw', height: '100vh', backgroundColor: '#000000' }}
    >
      <Canvas>
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
