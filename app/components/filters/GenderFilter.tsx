import { Checkbox } from "@mantine/core";
import React from "react";

interface GenderFilterProps {
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

const GenderFilter: React.FC<GenderFilterProps> = ({
  selectedValues,
  onChange,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newValues = event.target.checked
      ? [...selectedValues, value]
      : selectedValues.filter((v) => v !== value);
    onChange(newValues);
  };

  return (
    <div>
      <Checkbox
        checked={selectedValues.includes("M")}
        value="M"
        label="M"
        onChange={handleCheckboxChange}
      />
      <Checkbox
        checked={selectedValues.includes("F")}
        value="F"
        label="F"
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default GenderFilter;
