import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";

function App() {
  return (
    <div className="h-screen">
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[3, 2, 3]} intensity={10} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
