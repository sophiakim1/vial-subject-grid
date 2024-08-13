import { Table } from "@mantine/core";
import {
  IconSortAscendingLetters,
  IconSortAscendingNumbers,
  IconSortDescendingLetters,
  IconSortDescendingNumbers,
} from "@tabler/icons-react";
import {
  SortKey,
  SortOptions,
  SortOrder,
  Status,
  Subject,
} from "../../global/interfaces";
import styles from "./GridSection.module.css";
import { Dispatch, SetStateAction } from "react";

export interface GridSectionProps {
  subjects: Subject[];
  setSubjects: Dispatch<SetStateAction<Subject[]>>;
  sortOption?: SortOptions;
  setSortOption: (sortOption: SortOptions) => void;
  sortSubjectsByAttribute: (subjects: Subject[], key: SortKey) => Subject[];
  filteredSubjects: Subject[];
}

const GridSection: React.FC<GridSectionProps> = ({
  subjects,
  setSubjects,
  sortOption,
  setSortOption,
  sortSubjectsByAttribute,
  filteredSubjects,
}) => {
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

  return (
    <div className={styles.table_body}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th
              onClick={() =>
                setSubjects((prev) => [
                  ...sortSubjectsByAttribute(prev, SortKey.Name),
                ])
              }
              style={{ cursor: "pointer" }}
            >
              Name
              {sortOption?.key === SortKey.Name ? (
                sortOption.order === SortOrder.Asc ? (
                  <IconSortAscendingLetters className={styles.iconPadding} />
                ) : (
                  <IconSortDescendingLetters className={styles.iconPadding} />
                )
              ) : (
                <IconSortAscendingLetters className={styles.iconPadding} />
              )}
            </Table.Th>
            <Table.Th
              onClick={() =>
                setSubjects((prev) => [
                  ...sortSubjectsByAttribute(prev, SortKey.Age),
                ])
              }
              style={{ cursor: "pointer" }}
            >
              Age
              {sortOption?.key === SortKey.Age ? (
                sortOption.order === SortOrder.Asc ? (
                  <IconSortAscendingNumbers className={styles.iconPadding} />
                ) : (
                  <IconSortDescendingNumbers className={styles.iconPadding} />
                )
              ) : (
                <IconSortAscendingNumbers className={styles.iconPadding} />
              )}
            </Table.Th>
            <Table.Th>Gender</Table.Th>
            <Table.Th
              onClick={() =>
                setSubjects((prev) => [
                  ...sortSubjectsByAttribute(prev, SortKey.DiagnosisDate),
                ])
              }
              style={{ cursor: "pointer" }}
            >
              Diagnosis Date
              {sortOption?.key === SortKey.DiagnosisDate ? (
                sortOption.order === SortOrder.Asc ? (
                  <IconSortAscendingNumbers className={styles.iconPadding} />
                ) : (
                  <IconSortDescendingNumbers className={styles.iconPadding} />
                )
              ) : (
                <IconSortAscendingNumbers className={styles.iconPadding} />
              )}
            </Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{gridRows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default GridSection;
