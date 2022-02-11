import TableTop from "~/3d/tableTop";
import LegWide from "~/3d/legWide";

export default function Geneve({
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
      <LegWide
        anchor={"left"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
      <LegWide
        anchor={"right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        texture={textureValue}
      />
    </>
  );
}
