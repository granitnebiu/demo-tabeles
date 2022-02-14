import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { MirroredRepeatWrapping } from "three";

export default function CallTextureLeg({
  texture,
  metalness,
  roughness,
  color,
  getAnchor,
  heightN,
  thickness,
}) {
  const mesh = useRef();
  let tex = useTexture(`/tables/textures/${texture}.jpg?type=leg`);

  tex.wrapS = MirroredRepeatWrapping;
  tex.wrapT = MirroredRepeatWrapping;
  tex.rotation = Math.PI / 2;
  tex.repeat.set(heightN, 0.05);

  return (
    <mesh ref={mesh} scale={1} position={getAnchor}>
      <boxGeometry args={[0.05, heightN, thickness]} />
      <meshStandardMaterial map={tex} metalness={metalness} roughness={roughness} color={color} />
    </mesh>
  );
}
