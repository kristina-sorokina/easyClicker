import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  Grid,
} from "@react-three/drei";
import Keyboard_animated from "./components/Keyboard_animated";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Canvas camera={{ position: [-3, 7, 5], fov: 30 }}>
        <ambientLight intensity={1.1} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Keyboard_animated />
        </Suspense>
        <Environment
          background
          rotation={1}
          blur={0.6}
          files="/environment_map.exr"
        />
        <ContactShadows
          position={[0, -0.05, 0]}
          opacity={0.4}
          scale={50}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />

        <Grid
          renderOrder={1}
          infiniteGrid
          cellSize={0.5}
          cellThickness={0.5}
          sectionSize={1.5}
          sectionThickness={0.6}
          sectionColor="#492780"
          fadeDistance={10}
        />
      </Canvas>
    </div>
  );
}

export default App;
