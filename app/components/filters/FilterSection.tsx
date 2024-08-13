import React, { useEffect, useState } from "react";
import GenderFilter from "./GenderFilter";
import StatusFilter from "./StatusFilter";
import styles from "../../page.module.css";

interface FilterSectionProps {
  filters: {
    gender: string[];
    status: string[];
  };
  onFilterChange: (filters: { gender: string[]; status: string[] }) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div className={styles.filterbox}>
      <div>
        <div className={styles.title}>Gender</div>
        <GenderFilter
          selectedValues={filters.gender}
          onChange={(values) => {
            onFilterChange({ ...filters, gender: values });
          }}
        />
      </div>

      <div>
        <div className={styles.title}>Status</div>
        <StatusFilter
          selectedValues={filters.status}
          onChange={(values) => {
            onFilterChange({ ...filters, status: values });
          }}
        />
      </div>
    </div>
  );
};

export default FilterSection;
