import { Input } from "@nextui-org/react";
import React, { FormEvent, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FormMotion } from "./styles";
import { useDispatch } from "react-redux";
import { setName } from "../../store/modules/filters/actions";

interface IAnimate {
  open: {
    height?: number;
    y?: number;
    width?: number;
    opacity?: number;
  };
  exit: {
    height?: number;
    y?: number;
    width?: number;
    opacity?: number;
  };
}

const SearchInput: React.FC<{
  showSearch: boolean;
  animateActions: IAnimate;
}> = ({ showSearch, animateActions }) => {
  const [valueSearch, setValueSearch] = useState("");
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    !showSearch
      ? setTimeout(() => setIsPresent(false), 1000)
      : setIsPresent(true);
  }, [showSearch, setIsPresent]);

  const dispatch = useDispatch();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setName(valueSearch));
  };

  useEffect(() => {
    dispatch(setName(valueSearch));
  }, [valueSearch, dispatch]);

  return (
    <>
      <AnimatePresence>
        {isPresent && (
          <FormMotion
            initial={animateActions.exit}
            animate={showSearch ? animateActions.open : animateActions.exit}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => submit(e)}
          >
            <Input
              aria-label="Search"
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
            />
          </FormMotion>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchInput;
