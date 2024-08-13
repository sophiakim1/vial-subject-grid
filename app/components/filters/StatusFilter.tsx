import { Checkbox } from "@mantine/core";
import React from "react";
import styles from "./FilterSection.module.css";
import { Status } from "../../global/interfaces";

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
        checked={selectedValues.includes(Status.Pending)}
        value={Status.Pending}
        label={Status.Pending}
        onChange={handleCheckboxChange}
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
      <Checkbox
        checked={selectedValues.includes(Status.Approved)}
        value={Status.Approved}
        label={Status.Approved}
        onChange={handleCheckboxChange}
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
      <Checkbox
        checked={selectedValues.includes(Status.Testing)}
        value={Status.Testing}
        label={Status.Testing}
        onChange={handleCheckboxChange}
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
      <Checkbox
        checked={selectedValues.includes(Status.Released)}
        value={Status.Released}
        label={Status.Released}
        onChange={handleCheckboxChange}
        classNames={{ input: styles.checkbox }}
        className={styles.filterOption}
      />
    </div>
  );
};

export default StatusFilter;
