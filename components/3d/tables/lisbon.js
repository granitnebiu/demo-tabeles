import TableTop from "~/3d/tableTop";
import LegWide from "~/3d/legWide";

export default function Lisbon({
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
        color={"#535353"}
        fabric="metalic"
        offset={0.2}
        sizeOffset={0.2}
      />
      <LegWide
        anchor={"right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        offset={0.2}
        sizeOffset={0.2}
      />
    </>
  );
}
