"use client";
import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import FilterSection from "./components/filters/FilterSection";

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
    setFilteredSubjects(filteredData);
  }, [filters, subjects]);

  const handleFilterChange = (newFilters: {
    gender: string[];
    status: string[];
  }) => {
    setFilters(newFilters);
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

  const gridRows = filteredSubjects.map((subject) => (
    <Table.Tr key={subject.id}>
      <Table.Td>{subject.name}</Table.Td>
      <Table.Td>{subject.age}</Table.Td>
      <Table.Td>{subject.gender}</Table.Td>
      <Table.Td>{subject.diagnosisDate}</Table.Td>
      <Table.Td>{subject.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <FilterSection onFilterChange={handleFilterChange} />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th
              onClick={() =>
                setSubjects((prev) => [
                  ...sortSubjectsByAttribute(prev, "name"),
                ])
              }
            >
              Name
            </Table.Th>
            <Table.Th
              onClick={() =>
                setSubjects((prev) => [...sortSubjectsByAttribute(prev, "age")])
              }
            >
              Age
            </Table.Th>
            <Table.Th>Gender</Table.Th>
            <Table.Th
              onClick={() =>
                setSubjects((prev) => [
                  ...sortSubjectsByAttribute(prev, "diagnosisDate"),
                ])
              }
            >
              Diagnosis Date
            </Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{gridRows}</Table.Tbody>
      </Table>
    </div>
  );
}
