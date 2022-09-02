import { Radio } from "@nextui-org/react";
import React from "react";

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

enum ValuePrice {
  optionA = "0-40",
  optionB = "40-60",
  optionC = "100-200",
  optionD = "200-500",
  optionE = "500-",
}

const RadioGroup: React.FC<IProps> = ({ setValue }) => {
  return (
    <Radio.Group onChange={setValue} label="Por preço">
      <Radio value={ValuePrice.optionA}>Até R$40</Radio>
      <Radio value={ValuePrice.optionB}>R$40 A R$60</Radio>
      <Radio value={ValuePrice.optionC}>R$100 A R$200</Radio>
      <Radio value={ValuePrice.optionD}>R$200 A R$500</Radio>
      <Radio value={ValuePrice.optionE}>Acima de R$500</Radio>
    </Radio.Group>
  );
};

export default RadioGroup;
