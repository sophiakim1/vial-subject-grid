"use client";
import { Box, Button, Collapse, Group, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import FilterPills from "./components/filters/FilterPills";
import FilterSection from "./components/filters/FilterSection";
import GridSection from "./components/grid/GridSection";
import HeaderSection from "./components/navigation/HeaderSection";
import {
  FilterKey,
  Filters,
  SortKey,
  SortOptions,
  SortOrder,
  Subject,
} from "./global/interfaces";
import styles from "./page.module.css";

export default function Home() {
  const [filters, setFilters] = useState<Filters>({ gender: [], status: [] });
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);
  const [sortOption, setSortOption] = useState<SortOptions>();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch subjects from GET /api/subjects
    fetch("/api/subjects")
      .then((res) => res.json())
      .then((data) => {
        // Set subjects and filteredSubjects state
        // Initially, set both to the same data
        setSubjects(data);
        setFilteredSubjects(data);
      });
  }, []);

  useEffect(() => {
    let filteredData = subjects;
    // Apply filters if we have any filters selected
    if (filters.gender.length > 0) {
      filteredData = filteredData.filter((subject) =>
        filters.gender.includes(subject.gender)
      );
    }
    if (filters.status.length > 0) {
      filteredData = filteredData.filter((subject) =>
        filters.status.includes(subject.status)
      );
    }
    // Apply search query
    if (searchQuery) {
      filteredData = filteredData.filter((subject) =>
        subject.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredSubjects(filteredData);
  }, [filters, subjects, searchQuery]);

  const handleFilterChange = (newFilters: {
    gender: string[];
    status: string[];
  }) => {
    setFilters(newFilters);
  };

  const handleRemoveFilter = (type: FilterKey, value: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [type]: prevFilters[type].filter((item) => item !== value),
      };
      handleFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const sortSubjectsByAttribute = (subjects: Subject[], key: SortKey) => {
    // If the key is the same as the current sort key, toggle the order
    const order =
      sortOption?.key === key && sortOption.order === SortOrder.Asc
        ? SortOrder.Desc
        : SortOrder.Asc;

    const sortedSubjects = subjects.sort(function (a, b) {
      if (key === SortKey.Age) {
        return order === SortOrder.Asc ? a[key] - b[key] : b[key] - a[key];
      }
      return order === SortOrder.Asc
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });

    // Update sortOption state to remember the current sort key and order for the next sort
    setSortOption({ key, order });
    return sortedSubjects;
  };

  const [collapseOpened, { toggle: toggleCollapse }] = useDisclosure(true);

  return (
    <div>
      <HeaderSection />
      <FilterPills filters={filters} handleRemoveFilter={handleRemoveFilter} />
      <div className={styles.wrapper}>
        <div>
          <div className={styles.box}>
            <Box maw={400} mx="auto">
              <Group justify="center" mb={5}>
                <Button
                  onClick={toggleCollapse}
                  className={styles.collapseButton}
                >
                  Filter
                </Button>
              </Group>
              <Collapse in={collapseOpened}>
                <div>
                  <TextInput
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchBar}
                    leftSection={<IconSearch />}
                  />
                </div>
                <FilterSection
                  filters={filters}
                  onFilterChange={handleFilterChange}
                />
              </Collapse>
            </Box>
          </div>
        </div>

        <div className={styles.container}>
          <GridSection
            subjects={subjects}
            setSubjects={setSubjects}
            sortOption={sortOption}
            setSortOption={setSortOption}
            sortSubjectsByAttribute={sortSubjectsByAttribute}
            filteredSubjects={filteredSubjects}
          />
        </div>
      </div>
    </div>
  );
}
