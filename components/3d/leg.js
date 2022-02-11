import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { MirroredRepeatWrapping } from "three";

export default function Leg({
  length,
  width,
  height,
  texture = null,
  anchor = "top-left",
  color = null,
  fabric = "wood",
  offset = [0, 0],
  thickness = 0.05,
}) {
  const mesh = useRef();

  const lengthN = length / 100;
  const widthN = width / 100;
  const heightN = height / 100;

  let tex = useTexture(`/tables/textures/hetre.jpg?type=boxappron`);

  if (texture !== null) {
    // tex = useTexture(`/tables/textures/${texture}.jpg?type=leg`);
    tex.wrapS = MirroredRepeatWrapping;
    tex.wrapT = MirroredRepeatWrapping;
    tex.rotation = Math.PI / 2;
    tex.repeat.set(heightN, 0.05);
  }

  offset[0] += 0.001;
  offset[1] += 0.001;

  const anchors = {
    "top-left": [
      lengthN / 2 - thickness / 2 - offset[0],
      0,
      -widthN / 2 + thickness / 2 + offset[1],
    ],
    "top-right": [
      -lengthN / 2 + thickness / 2 + offset[0],
      0,
      -widthN / 2 + thickness / 2 + offset[1],
    ],
    "bottom-left": [
      lengthN / 2 - thickness / 2 - offset[0],
      0,
      widthN / 2 - thickness / 2 - offset[1],
    ],
    "bottom-right": [
      -lengthN / 2 + thickness / 2 + offset[0],
      0,
      widthN / 2 - thickness / 2 - offset[1],
    ],
  };

  const fabrics = {
    wood: { metalness: 0.5, roughness: 0.5 },
    metalic: { metalness: 0.9, roughness: 0.1 },
  };

  const getAnchor = anchors[anchor];
  const getFabric = fabrics[fabric];

  return (
    <mesh ref={mesh} scale={1} position={getAnchor}>
      <boxGeometry args={[0.05, heightN, thickness]} />
      <meshStandardMaterial
        map={tex}
        metalness={getFabric.metalness}
        roughness={getFabric.roughness}
        color={color}
      />
    </mesh>
  );
}
