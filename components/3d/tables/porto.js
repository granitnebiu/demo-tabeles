import TableTop from "~/3d/tableTop";
import Leg from "~/3d/leg";
import BoxAppron from "~/3d/boxApron";

export default function Porto({
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
        offset={[0.1, 0.1]}
        thickness={0.01}
      />
      <Leg
        anchor={"bottom-left"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        offset={[0.1, 0.1]}
        thickness={0.01}
      />
      <Leg
        anchor={"bottom-right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        offset={[0.1, 0.1]}
        thickness={0.01}
      />
      <Leg
        anchor={"top-right"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        offset={[0.1, 0.1]}
        thickness={0.01}
      />
      <BoxAppron
        anchor={"east"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        sizeOffset={0.3}
        offset={0.1}
        thickness={0.01}
      />
      <BoxAppron
        anchor={"west"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        sizeOffset={0.3}
        offset={0.1}
        thickness={0.01}
      />
      <BoxAppron
        anchor={"east"}
        isTop={false}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        sizeOffset={0.3}
        offset={0.1}
        thickness={0.01}
      />
      <BoxAppron
        anchor={"west"}
        isTop={false}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
        sizeOffset={0.3}
        offset={0.1}
        thickness={0.01}
      />
    </>
  );
}
