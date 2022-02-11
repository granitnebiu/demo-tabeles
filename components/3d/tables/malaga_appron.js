import TableTop from "~/3d/tableTop";
import Leg from "~/3d/leg";
import BoxAppron from "~/3d/boxApron";

export default function MalagaAppron({
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
        texture={textureValue}
      />
      <Leg
        anchor={"bottom-left"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
      <Leg
        anchor={"bottom-right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
      <Leg
        anchor={"top-right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
      <BoxAppron
        anchor={"north"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
      <BoxAppron
        anchor={"south"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
      <BoxAppron
        anchor={"east"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
      <BoxAppron
        anchor={"west"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
    </>
  );
}
