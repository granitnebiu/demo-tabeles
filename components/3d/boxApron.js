import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { MirroredRepeatWrapping } from "three";

export default function BoxAppron({
  length,
  width,
  height,
  texture = null,
  anchor = "north",
  isTop = true,
  color = null,
  fabric = "wood",
  sizeOffset = [0, 0],
  offset = 0,
  thickness = 0.05,
}) {
  const mesh = useRef();

  const lengthN = length / 100;
  const widthN = width / 100;
  const heightN = height / 100;

  let tex = useTexture(`/tables/textures/hetre.jpg?type=boxappron`);

  if (texture !== null) {
    // tex = useTexture(`/tables/textures/${texture}.jpg?type=boxappron`);
    tex.wrapS = MirroredRepeatWrapping;
    tex.wrapT = MirroredRepeatWrapping;
    tex.repeat.set(lengthN, heightN);
  }

  let isTopVal = heightN / 2 - 0.03;
  if (!isTop) {
    isTopVal = -heightN / 2 + 0.025;
  }

  const anchors = {
    north: [0, isTopVal, -widthN / 2 + 0.026 + offset],
    east: [-lengthN / 2 + 0.026 + offset, isTopVal, 0],
    south: [0, isTopVal, widthN / 2 - 0.026 + offset],
    west: [lengthN / 2 - 0.026 - offset, isTopVal, 0],
  };

  const fabrics = {
    wood: { metalness: 0.5, roughness: 0.5 },
    metalic: { metalness: 0.9, roughness: 0.1 },
  };

  const getAnchor = anchors[anchor];
  const getFabric = fabrics[fabric];

  let appronWidth = lengthN - 0.001;
  let appronRotate = 0;

  if (anchor === "east" || anchor === "west") {
    appronWidth = widthN - 0.001;
    appronRotate = Math.PI / 2;
  }

  appronWidth -= sizeOffset;

  return (
    <mesh ref={mesh} scale={1} position={getAnchor} rotation={[0, appronRotate, 0]}>
      <boxGeometry args={[appronWidth, thickness, 0.05]} />
      <meshStandardMaterial
        map={tex}
        metalness={getFabric.metalness}
        roughness={getFabric.roughness}
        color={color}
      />
    </mesh>
  );
}
