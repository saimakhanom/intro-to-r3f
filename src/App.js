import { Canvas } from "@react-three/fiber";
import Background from "./components/background";
import Ground from "./components/ground";
import "./index.css";
import { OrbitControls } from "@react-three/drei";
import Path from "./components/path";
import Ball from "./components/ball";

function App() {
  return (
    <div className="canvas-container">
      <Canvas style={{ backgroundColor: "blue" }}>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Ball />
        <Path />
        <Ground />
      </Canvas>
    </div>
  );
}

export default App;
