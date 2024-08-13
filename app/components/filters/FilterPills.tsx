import { FilterKey, Filters } from "@/app/global/interfaces";
import { Pill } from "@mantine/core";
import React from "react";
import styles from "./FilterPills.module.css";

export interface FilterPillsProps {
  filters: Filters;
  handleRemoveFilter: (key: FilterKey, value: string) => void;
}

const FilterPills: React.FC<FilterPillsProps> = ({
  filters,
  handleRemoveFilter,
}) => {
  const pills = [
    ...filters.gender.map((gender, index) => (
      <Pill
        key={`gender-${index}`}
        withRemoveButton
        onRemove={() => handleRemoveFilter(FilterKey.Gender, gender)}
        styles={{
          root: { backgroundColor: "#fff", marginRight: "5px" },
        }}
      >
        {gender}
      </Pill>
    )),
    ...filters.status.map((status, index) => (
      <Pill
        key={`status-${index}`}
        withRemoveButton
        onRemove={() => handleRemoveFilter(FilterKey.Status, status)}
        styles={{
          root: { backgroundColor: "#fff", marginRight: "5px" },
        }}
      >
        {status}
      </Pill>
    )),
  ];

  return <div className={styles.pillContainer}>{pills}</div>;
};

export default FilterPills;
