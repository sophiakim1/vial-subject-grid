import React, { useEffect, useState } from "react";
import GenderFilter from "./GenderFilter";
import StatusFilter from "./StatusFilter";

interface FilterSectionProps {
  onFilterChange: (filters: {
    gender: string[];
    status: string[];
  }) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange }) => {
  const [gender, setGender] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);

  useEffect(() => {
    onFilterChange({ gender, status });
  }, [gender, status]);

  return (
    <div>
      <GenderFilter
        selectedValues={gender}
        onChange={(values) => {
          setGender(values);
        }}
      />
      <StatusFilter
        selectedValues={status}
        onChange={(values) => {
          setStatus(values);
        }}
      />
    </div>
  );
};

export default FilterSection;
