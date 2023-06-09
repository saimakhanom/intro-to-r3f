import * as THREE from 'three';

export default function Background() {
    return (
        <mesh >
             <primitive object={new THREE.PlaneGeometry(1, 1)} />
            <meshBasicMaterial color="blue" side={THREE.BackSide}/>
        </mesh>
    )
}