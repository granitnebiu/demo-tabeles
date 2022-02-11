import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { MirroredRepeatWrapping } from "three";

export default function TableTop(props) {
  const mesh = useRef();

  const length = props.length / 100;
  const width = props.width / 100;
  const height = props.height / 100;

  const texPath = "/tables/textures/";

  const [
    noyer,
    noyer_walnut,
    hetre,
    hetre_beech,
    erable,
    epicea,
    chene_oak,
    cersier,
    cerisier,
    chene,
  ] = useTexture([
    texPath + "noyer.jpg",
    texPath + "noyer_walnut.jpg",
    texPath + "hetre.jpg",
    texPath + "hetre_beech.jpg",
    texPath + "erable.jpg",
    texPath + "epicea.jpg",
    texPath + "chene_oak.jpg",
    texPath + "cersier.jpg",
    texPath + "cerisier.jpg",
    texPath + "chene.jpg",
  ]);

  const tex = useTexture(`/tables/textures/${props.texture}.jpg`);
  tex.wrapS = MirroredRepeatWrapping;
  tex.wrapT = MirroredRepeatWrapping;
  tex.repeat.set(length, width);

  //useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  return (
    <mesh {...props} ref={mesh} scale={1} position={[0, height / 2, 0]}>
      <boxGeometry args={[length, 0.03, width]} />
      <meshStandardMaterial map={tex} metalness={0.5} roughness={0.5} />
    </mesh>
  );
}
