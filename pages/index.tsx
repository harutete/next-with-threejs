import * as THREE from 'three';
import { Suspense } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Canvas, useLoader } from '@react-three/fiber';

const FbxFile = () => {
  const fbx = useLoader(FBXLoader, '/fbx/sample.fbx');

  console.log({ fbx });
  return (
    <primitive
      onClick={clickHandler}
      object={fbx}
      dispose={null}
      scale={[0.8, 0.8, 0.8]}
      rotation={[0, 0.6, 0]}
      position={[0, -130, -500]}
    />
  );
};

const clickHandler = () => {
  console.log('click');
};

const SampleTexture = () => {
  const texture = useLoader(THREE.TextureLoader, '/textures/sample01.png');

  return (
    <mesh onClick={clickHandler} position={[0, -0.1, 0]} rotation={[0, 0.5, 0]}>
      <planeBufferGeometry attach='geometry' args={[1, 1]} />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  );
};

const Home = () => {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <SampleTexture />
          <FbxFile />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
