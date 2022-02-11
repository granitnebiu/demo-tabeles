import TableTop from "~/3d/tableTop";
import Leg from "~/3d/leg";

export default function Paris({
  lengthValue,
  widthValue,
  heightValue,
  textureValue,
}) {
  return (
    <>
      <TableTop
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
      <Leg
        anchor={"top-left"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
      />
      <Leg
        anchor={"bottom-left"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
      />
      <Leg
        anchor={"bottom-right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
      />
      <Leg
        anchor={"top-right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
      />
    </>
  );
}
