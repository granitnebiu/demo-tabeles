import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
// import Slider from "react-rangeslider";

// import TableSpecifications from "~/TableSpecifications";clea

// import Chair from "models/Chair";
// import Bowl from "models/Bowl";
// import Floor from "~/3d/floor";

import Paris from "~/3d/tables/paris";
import Geneve from "~/3d/tables/geneve";
import Berne from "~/3d/tables/berne";
import Malaga from "~/3d/tables/malaga";
import Berlin from "~/3d/tables/berlin";
import Milano from "~/3d/tables/milano";
import Vaduz from "~/3d/tables/vaduz";
import MalagaAppron from "~/3d/tables/malaga_appron";
import Lisbon from "~/3d/tables/lisbon";
import Porto from "~/3d/tables/porto";

export default function TablePage() {
  const slug = "test";
  let table = [];

  // table.length_default = 100;
  // table.width_default = 100;
  // table.height_max = 100;
  // table.height_min = 5;
  // table.height_default = 100;
  // table.length_max = 200;
  // table.length_min = 5;
  // table.width_max = 200;
  // table.width_min = 5;
  // table.materials = [
  //   {
  //     slug: "test",
  //     title: "test",
  //   },
  //   {
  //     slug: "test",
  //     title: "test",
  //   },
  // ];
  const myCamera = useRef();

  const [tableType, setTableType] = useState();
  // const tableType = "paris";

  const [lengthValue, setLengthValue] = useState();
  const [widthValue, setWidthValue] = useState();
  const [heightValue, setHeightValue] = useState();
  const [textureValue, setTextureValue] = useState();

  const [referenceActive, setReferenceActive] = useState(true);

  /////////////////////Length
  function myLength(data) {
    setLengthValue(data);
  }
  if (typeof window !== "undefined") {
    window.parent.callLength = myLength;
  }

  //////////////////////Height

  function myHeight(data) {
    setHeightValue(data);
  }
  if (typeof window !== "undefined") {
    window.parent.callHeight = myHeight;
  }
  ////////////////////////Width

  function myWidth(data) {
    setWidthValue(data);
  }
  if (typeof window !== "undefined") {
    window.parent.callWidth = myWidth;
  }

  ////////////////////Texture

  function myTexture(data) {
    setTextureValue(data);
  }
  if (typeof window !== "undefined") {
    window.parent.callTexture = myTexture;
  }
  ////////////////////TableTypes

  function myTable(data) {
    setTableType(data);
  }
  if (typeof window !== "undefined") {
    window.parent.callTable = myTable;
  }

  //////////////////////////////////
  const lengthOptions = [];

  // const handleLengthChange = (value) => {
  //   setLengthValue(value);
  //   //document.getElementById("webplayer").contentWindow.wp_length = value;
  // };

  // const handleWidthChange = (value) => {
  //   setWidthValue(value);
  //   //document.getElementById("webplayer").contentWindow.wp_width = value;
  // };

  // const handleHeightChange = (value) => {
  //   setHeightValue(value);
  //   //document.getElementById("webplayer").contentWindow.wp_height = value;
  // };

  const handleTextureChange = (value) => {
    setTextureValue(value);
    //document.getElementById("webplayer").contentWindow.wp_texture = value;
  };

  useEffect(() => {
    setLengthValue(table.length_default);
    setWidthValue(table.width_default);
    setHeightValue(table.height_default);
    handleTextureChange("erable");
  }, []);

  const handleReferenceChange = () => {
    setReferenceActive(!referenceActive);
    let reference = "0";
    if (referenceActive) {
      reference = "1";
    }
    // document.getElementById("webplayer").contentWindow.wp_perspective = "1";
  };

  let chooseTableType = [
    {
      image: "/img/conftable1.png",
    },
    {
      image: "/img/conftable1.png",
    },
    {
      image: "/img/conftable1.png",
    },
    {
      image: "/img/conftable1.png",
    },
  ];

  return (
    <div>
      <div className="manage_size">
        {/* <p>Length</p>
        <select
          value={lengthValue}
          autoComplete="off"
          onChange={(e) => handleLengthChange(e.target.value)}
        >
          {[...Array((table.length_max - table.length_min) / 5 + 1)].map((x, index) => (
            <option key={index}>{table.length_min + index * 5}</option>
          ))}
        </select>
        <p>cm</p>

        <p>Width</p>

        <select
          value={widthValue}
          autoComplete="off"
          onChange={(e) => handleWidthChange(e.target.value)}
        >
          {[...Array((table.width_max - table.width_min) / 5 + 1)].map((x, index) => (
            <option key={index}>{table.width_min + index * 5}</option>
          ))}
        </select>
        <p>cm</p>

        <p>Height</p>
        <select
          value={heightValue}
          autoComplete="off"
          onChange={(e) => handleHeightChange(e.target.value)}
        >
          {[...Array((table.height_max - table.height_min) / 5 + 1)].map((x, index) => (
            <option key={index}>{table.height_min + index * 5}</option>
          ))}
        </select>
        <p>cm</p> */}
      </div>
      <div style={{ width: "100%", height: "100vh" }}>
        <Canvas concurrent shadowMa>
          <ambientLight intensity={0.5} color="#fcf7cf" />
          <directionalLight intensity={0.5} color="#fcf7cf" position={[200, 500, -300]} />

          <Suspense fallback={null}>
            <Environment background={false} files={`/hdri/light.hdr`} />
            {/* <Bowl /> */}
            {/* <Chair /> */}
            {/* <Floor height={heightValue} /> */}

            {tableType === "paris" && (
              <Paris
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )}
            {tableType === "geneve" && (
              <Geneve
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )}
            {/* {tableType === "malaga" && (
              <Malaga
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )}
            {tableType === "berne" && (
              <Berne
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )} */}
            {tableType === "berlin" && (
              <Berlin
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )}
            {tableType === "milano" && (
              <Milano
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )}

            {tableType === "vaduz" && (
              <Vaduz
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )}
            {/* {tableType === "malaga_appron" && (
              <MalagaAppron
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )} */}
            {/* {tableType === "lisbon" && (
              <Lisbon
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )} */}
            {tableType === "porto" && (
              <Porto
                lengthValue={lengthValue}
                widthValue={widthValue}
                heightValue={heightValue}
                textureValue={textureValue}
              />
            )}

            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -(heightValue / 200) - 0.05, 0]}
              opacity={1}
              width={50}
              height={50}
              blur={1}
              far={3}
            />
            <PerspectiveCamera position={[1, 1, -1]} ref={myCamera} fov={45} makeDefault />
            <OrbitControls
              camera={myCamera.current}
              autoRotate={false}
              maxDistance={6}
              minDistance={3}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
