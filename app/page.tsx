"use client";
import { useRouter } from "next/navigation";
import { Table } from "@mantine/core";
import styles from "./page.module.css";
import { IconSortAscendingLetters } from "@tabler/icons-react";
import { IconSortDescendingLetters } from "@tabler/icons-react";
import { IconSortAscendingNumbers } from "@tabler/icons-react";
import { IconSortDescendingNumbers } from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import FilterSection from "./components/filters/FilterSection";
import Image from "next/image";
import logo from "./asset/logo.png";
import { Button, Group, TextInput, Collapse, Box, Pill } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Status, Subject } from "./global/interfaces";

export default function Home() {
  const [filters, setFilters] = useState<{
    gender: string[];
    status: string[];
  }>({ gender: [], status: [] });
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);
  const [sortOption, setSortOption] = useState<{
    key: "name" | "age" | "diagnosisDate";
    order: "asc" | "desc";
  }>();
  const router = useRouter();
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

  const handleRemoveFilter = (type: "gender" | "status", value: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [type]: prevFilters[type].filter((item) => item !== value),
      };
      handleFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const sortSubjectsByAttribute = (
    subjects: Subject[],
    key: "name" | "age" | "diagnosisDate"
  ) => {
    // If the key is the same as the current sort key, toggle the order
    const order =
      sortOption?.key === key && sortOption.order === "asc" ? "desc" : "asc";

    const sortedSubjects = subjects.sort(function (a, b) {
      if (key === "age") {
        return order === "asc" ? a[key] - b[key] : b[key] - a[key];
      }
      return order === "asc"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });

    // Update sortOption state to remember the current sort key and order for the next sort
    setSortOption({ key, order });
    return sortedSubjects;
  };

  const pills = [
    ...filters.gender.map((gender, index) => (
      <Pill
        key={`gender-${index}`}
        withRemoveButton
        onRemove={() => handleRemoveFilter("gender", gender)}
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
        onRemove={() => handleRemoveFilter("status", status)}
        styles={{
          root: { backgroundColor: "#fff", marginRight: "5px" },
        }}
      >
        {status}
      </Pill>
    )),
  ];

  const gridRows = filteredSubjects.map((subject) => {
    let statusClass = "";
    switch (subject.status) {
      case Status.Approved:
        statusClass = styles.statusApproved;
        break;
      case Status.Released:
        statusClass = styles.statusReleased;
        break;
      case Status.Testing:
        statusClass = styles.statusTesting;
        break;
      case Status.Pending:
        statusClass = styles.statusPending;
        break;
      default:
        break;
    }

    return (
      <Table.Tr key={subject.id}>
        <Table.Td data-label="Name">{subject.name}</Table.Td>
        <Table.Td data-label="Age">{subject.age}</Table.Td>
        <Table.Td data-label="Gender">{subject.gender}</Table.Td>
        <Table.Td data-label="Diagnosis Date">{subject.diagnosisDate}</Table.Td>
        <Table.Td data-label="Status">
          <span className={statusClass}>{subject.status}</span>
        </Table.Td>
      </Table.Tr>
    );
  });

  const [collapseOpened, { toggle: toggleCollapse }] = useDisclosure(true);

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Logo"
            className={styles.logo}
            width={120}
            height={50}
          />
        </div>

        <div className={styles.aboutContainer}>
          <button
            className={styles.aboutButton}
            onClick={() => router.push("/about")}
          >
            About
          </button>
        </div>
      </div>
      <div className={styles.pillContainer}>{pills}</div>

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
          <div className={styles.table_body}>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th
                    onClick={() =>
                      setSubjects((prev) => [
                        ...sortSubjectsByAttribute(prev, "name"),
                      ])
                    }
                    style={{ cursor: "pointer" }}
                  >
                    Name
                    {sortOption?.key === "name" ? (
                      sortOption.order === "asc" ? (
                        <IconSortAscendingLetters
                          className={styles.iconPadding}
                        />
                      ) : (
                        <IconSortDescendingLetters
                          className={styles.iconPadding}
                        />
                      )
                    ) : (
                      <IconSortAscendingLetters
                        className={styles.iconPadding}
                      />
                    )}
                  </Table.Th>
                  <Table.Th
                    onClick={() =>
                      setSubjects((prev) => [
                        ...sortSubjectsByAttribute(prev, "age"),
                      ])
                    }
                    style={{ cursor: "pointer" }}
                  >
                    Age
                    {sortOption?.key === "age" ? (
                      sortOption.order === "asc" ? (
                        <IconSortAscendingNumbers
                          className={styles.iconPadding}
                        />
                      ) : (
                        <IconSortDescendingNumbers
                          className={styles.iconPadding}
                        />
                      )
                    ) : (
                      <IconSortAscendingNumbers
                        className={styles.iconPadding}
                      />
                    )}
                  </Table.Th>
                  <Table.Th>Gender</Table.Th>
                  <Table.Th
                    onClick={() =>
                      setSubjects((prev) => [
                        ...sortSubjectsByAttribute(prev, "diagnosisDate"),
                      ])
                    }
                    style={{ cursor: "pointer" }}
                  >
                    Diagnosis Date
                    {sortOption?.key === "diagnosisDate" ? (
                      sortOption.order === "asc" ? (
                        <IconSortAscendingNumbers
                          className={styles.iconPadding}
                        />
                      ) : (
                        <IconSortDescendingNumbers
                          className={styles.iconPadding}
                        />
                      )
                    ) : (
                      <IconSortAscendingNumbers
                        className={styles.iconPadding}
                      />
                    )}
                  </Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{gridRows}</Table.Tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
