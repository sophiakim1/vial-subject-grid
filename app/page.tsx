"use client";
import { Checkbox, Table } from "@mantine/core";
import { useEffect, useState } from "react";
import FilterSection from "./components/filters/FilterSection";

export default function Home() {
  const [filters, setFilters] = useState<{
    gender: string[];
    status: string[];
  }>({ gender: [], status: [] });
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);

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

  const gridRows = filteredSubjects.map((subject) => (
    <Table.Tr key={subject.id}>
      <Table.Td>{subject.name}</Table.Td>
      <Table.Td>{subject.age}</Table.Td>
      <Table.Td>{subject.gender}</Table.Td>
      <Table.Td>{subject.diagnosisDate}</Table.Td>
      <Table.Td>{subject.status}</Table.Td>
    </Table.Tr>
  ));

  const handleFilterChange = (newFilters: {
    gender: string[];
    status: string[];
  }) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <FilterSection onFilterChange={handleFilterChange} />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Age</Table.Th>
            <Table.Th>Gender</Table.Th>
            <Table.Th>Diagnosis Date</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{gridRows}</Table.Tbody>
      </Table>
    </div>
  );
}
