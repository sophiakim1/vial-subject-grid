import { Checkbox } from "@mantine/core";
import React from "react";
import styles from "../../page.module.css";

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
    <div className={styles.filterOption}>
      <Checkbox
        checked={selectedValues.includes("Male")}
        value="Male"
        label="Male"
        onChange={handleCheckboxChange}
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
      <Checkbox
        checked={selectedValues.includes("Female")}
        value="Female"
        label="Female"
        onChange={handleCheckboxChange}
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
    </div>
  );
};

export default GenderFilter;
