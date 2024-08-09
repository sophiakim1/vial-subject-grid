import { NextResponse } from "next/server";

/**
 * Sleep function to mock API latency
 * @param ms time in milliseconds
 * @returns Promise<void>
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * GET /api/subjects
 * Returns a list of subjects after waiting for 0.1 seconds
 * @returns Promise<void>
 */
export async function GET() {
  // Simulate API latency
  await sleep(100);
  return NextResponse.json(subjects);
}

const subjects = [
  {
    id: 1,
    name: "Sophia Kim",
    age: 28,
    gender: "F",
    diagnosisDate: "2024-08-09",
    status: "Pending",
  },
  {
    id: 2,
    name: "Dixie Elvin",
    age: 32,
    gender: "M",
    diagnosisDate: "2024-07-10",
    status: "Approved",
  },
  {
    id: 3,
    name: "Winton Navy",
    age: 25,
    gender: "M",
    diagnosisDate: "2024-04-11",
    status: "In Progress",
  },
  {
    id: 4,
    name: "Scout Caleb",
    age: 24,
    gender: "M",
    diagnosisDate: "2023-12-12",
    status: "Released",
  },
  {
    id: 5,
    name: "Fleur Sally",
    age: 41,
    gender: "F",
    diagnosisDate: "2023-11-15",
    status: "Released",
  },
];