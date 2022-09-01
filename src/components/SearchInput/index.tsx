import { Input } from "@nextui-org/react";
import React, { FormEvent, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FormMotion } from "./styles";

const SearchInput: React.FC<{ showSearch: boolean }> = ({ showSearch }) => {
  const [valueSearch, setValueSearch] = useState("");
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    !showSearch
      ? setTimeout(() => setIsPresent(false), 1000)
      : setIsPresent(true);
  }, [showSearch, setIsPresent]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(valueSearch);
  };

  return (
    <>
      <AnimatePresence>
        {isPresent && (
          <FormMotion
            initial={{ width: 0, opacity: 0 }}
            animate={
              showSearch ? { width: 250, opacity: 1 } : { width: 0, opacity: 0 }
            }
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
