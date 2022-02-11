import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { MirroredRepeatWrapping } from "three";

export default function LegWide({
  length,
  width,
  height,
  texture = null,
  anchor = "left",
  color = null,
  fabric = "wood",
  offset = 0,
  sizeOffset = 0,
}) {
  const mesh = useRef();

  const lengthN = length / 100;
  const widthN = width / 100;
  const heightN = height / 100;

  let tex = useTexture(`/tables/textures/${texture}.jpg?type=leg`);

  if (texture !== null) {
    // tex = useTexture(`/tables/textures/${texture}.jpg?type=leg`);
    tex.wrapS = MirroredRepeatWrapping;
    tex.wrapT = MirroredRepeatWrapping;
    tex.repeat.set(heightN, widthN);
    tex.rotation = Math.PI / 2;
    // TODO kqyri krejt texturat
  }

  const anchors = {
    left: [lengthN / 2 - 0.026 - offset, 0, 0],
    right: [-lengthN / 2 + 0.026 + offset, 0, 0],
  };

  const fabrics = {
    wood: { metalness: 0.5, roughness: 0.5 },
    metalic: { metalness: 0.9, roughness: 0.1 },
  };

  const getAnchor = anchors[anchor];
  const getFabric = fabrics[fabric];

  return (
    <mesh ref={mesh} scale={1} position={getAnchor}>
      <boxGeometry args={[0.05, heightN, widthN - 0.001 - sizeOffset]} />
      <meshStandardMaterial
        map={tex}
        metalness={getFabric.metalness}
        roughness={getFabric.roughness}
        color={color}
      />
    </mesh>
  );
}
