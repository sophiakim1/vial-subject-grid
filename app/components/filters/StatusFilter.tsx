import { Checkbox } from "@mantine/core";
import React from "react";

interface StatusFilterProps {
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({
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
        checked={selectedValues.includes("Pending")}
        value="Pending"
        label="Pending"
        onChange={handleCheckboxChange}
      />
      <Checkbox
        checked={selectedValues.includes("Approved")}
        value="Approved"
        label="Approved"
        onChange={handleCheckboxChange}
      />
      <Checkbox
        checked={selectedValues.includes("In Progress")}
        value="In Progress"
        label="In Progress"
        onChange={handleCheckboxChange}
      />
      <Checkbox
        checked={selectedValues.includes("Released")}
        value="Released"
        label="Released"
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default StatusFilter;
