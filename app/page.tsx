"use client";
import { Table } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Home() {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    // Fetch subjects from GET /api/subjects
    fetch("/api/subjects")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  const rows = subjects.map((subject) => (
    <Table.Tr key={subject.id}>
      <Table.Td>{subject.name}</Table.Td>
      <Table.Td>{subject.age}</Table.Td>
      <Table.Td>{subject.gender}</Table.Td>
      <Table.Td>{subject.diagnosisDate}</Table.Td>
      <Table.Td>{subject.status}</Table.Td>
    </Table.Tr>
  ));

  return (
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
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
