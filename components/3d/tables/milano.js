import TableTop from "~/3d/tableTop";
import Leg from "~/3d/leg";

export default function Milano({
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
        offset={[0.06, 0.06]}
      />
      <Leg
        anchor={"bottom-left"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        offset={[0.06, 0.06]}
      />
      <Leg
        anchor={"bottom-right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        offset={[0.06, 0.06]}
      />
      <Leg
        anchor={"top-right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        offset={[0.06, 0.06]}
      />
    </>
  );
}
