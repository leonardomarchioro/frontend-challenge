import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/modules/filters/actions";
import RadioGroup from "./RadioGroup";
import { DesktopView, MobileView, Title } from "./styles";

const PriceFilter: React.FC = () => {
  const [value, setValue] = useState<string | undefined>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(value!));
  }, [value, dispatch]);

  return (
    <>
      <DesktopView>
        <Title>Refine sua busca</Title>
        <RadioGroup setValue={setValue} />
      </DesktopView>
      <MobileView title="Refine sua busca">
        <RadioGroup setValue={setValue} />
      </MobileView>
    </>
  );
};

export default PriceFilter;
