import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  Grid,
  Loader,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import toast, { Toaster } from "react-hot-toast";
import Keyboard_animated from "./components/Keyboard_animated";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  const [text, setText] = useState("Hi!");

  function getText(textfrommodel) {
    setText(textfrommodel);
    notify();
  }

  const notify = () =>
    toast.custom((t) => (
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "rgba(211, 211, 211, 0.15)",
          color: "#fff",
          width: "236px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <div>
          <img
            src="..\public\images\bank_logo.png"
            alt=""
            style={{
              borderRadius: "50%",
              width: "48px",
              height: "48px",
            }}
          />
        </div>
        <div
          style={{
            padding: "0 10px",
            margin: "8px 0 0",
            fontWeight: "200",
          }}
        >
          {text}
        </div>
        <div>
          <button
            onClick={() => toast.dismiss(t.id)}
            style={{
              outline: "none",
              cursor: "pointer",
              width: "100%",
              height: "40px",
              backgroundColor: "#7468D1",
              borderRadius: "6px",
              borderWidth: "0",
              padding: "0 25px",
              margin: "8px 0 0",
              fontWeight: "200",
            }}
          >
            Close
          </button>
        </div>
      </div>
    ));

  return (
    <div className="app">
      <Canvas camera={{ position: [-3, 7, 5], fov: 30 }}>
        <ScrollControls damping={1}>
          <ambientLight intensity={1.1} />
          <OrbitControls />
          <Suspense fallback={null}>
            <Keyboard_animated notify={notify} getText={getText} />
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
          <Scroll html>
            <Sidebar />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Loader />
      <Toaster position="bottom-left" gutter={12} />
    </div>
  );
}

export default App;
