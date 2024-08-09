"use client";
import { Table } from "@mantine/core";

export default function Home() {
  const subjects = [
    { id: 1, name: "Sophia Kim", age: 28, gender: "F", diagnosisDate: "2024-08-09", status: "Pending" },
    { id: 2, name: "Dixie Elvin", age: 28, gender: "M", diagnosisDate: "2024-07-10", status: "Approved" },
    { id: 3, name: "Winton Navy", age: 28, gender: "M", diagnosisDate: "2024-04-11", status: "In Progress" },
    { id: 4, name: "Scout Caleb", age: 28, gender: "M", diagnosisDate: "2023-12-12", status: "Released" },
    { id: 5, name: "Fleur Sally", age: 28, gender: "F", diagnosisDate: "2023-11-15", status: "Released" },
  ];

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
