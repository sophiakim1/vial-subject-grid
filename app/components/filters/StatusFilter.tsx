import { Checkbox } from "@mantine/core";
import React from "react";
import styles from "../../page.module.css";

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
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
      <Checkbox
        checked={selectedValues.includes("Approved")}
        value="Approved"
        label="Approved"
        onChange={handleCheckboxChange}
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
      <Checkbox
        checked={selectedValues.includes("Testing")}
        value="Testing"
        label="Testing"
        onChange={handleCheckboxChange}
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
      <Checkbox
        checked={selectedValues.includes("Released")}
        value="Released"
        label="Released"
        onChange={handleCheckboxChange}
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
    </div>
  );
};

export default StatusFilter;
