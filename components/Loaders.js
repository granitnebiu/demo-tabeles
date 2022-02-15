import { Html, useProgress } from "@react-three/drei";

function Loader() {
  /* loader */
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="progressBar">
        <p> {parseInt(progress)}</p>
        <p> %</p>
      </div>
    </Html>
  );
}

export default Loader;
