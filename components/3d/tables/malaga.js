import TableTop from "~/3d/tableTop";
import Leg from "~/3d/leg";
import BoxAppron from "~/3d/boxApron";

export default function Malaga({ lengthValue, widthValue, heightValue, textureValue }) {
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
      <BoxAppron
        anchor={"north"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
      />
      <BoxAppron
        anchor={"south"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
      />
      <BoxAppron
        anchor={"east"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
      />
      <BoxAppron
        anchor={"west"}
        length={lengthValue}
        width={widthValue}
        height={heightValue}
        color={"#535353"}
        fabric="metalic"
      />
    </>
  );
}