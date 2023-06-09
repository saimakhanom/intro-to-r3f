export default function Path() {
  const numBoxes = 10; // Number of boxes to generate
  const pathLength = 1000; // Length of the path
  const pathConstraint = pathLength/2
  const boxSize = 1; // Size of each box

  const generateRandomPosition = () => {
    const x = Math.random() * (15 - boxSize) - 7.5 + boxSize / 2;
    const z = -(Math.random() * (pathConstraint - boxSize - 2) + 2);
console.log(z)
    const y = -1.9 + boxSize / 2; // Same y-coordinate as the path component

    return [x, y, z];
  };

  const boxPositions = Array.from({ length: numBoxes }, () => generateRandomPosition());

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
        <planeGeometry args={[15, pathLength]} />
        <meshStandardMaterial color="grey" />
      </mesh>

      {boxPositions.map((position, index) => (
        <mesh key={index} position={position}>
          <boxGeometry args={[boxSize, boxSize, boxSize]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      ))}
    </group>
  );
}
