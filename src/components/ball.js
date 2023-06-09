export default function Ball() {
  return (
    <mesh position={[0, -1, 0]}>
      <sphereGeometry args={[1]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}
