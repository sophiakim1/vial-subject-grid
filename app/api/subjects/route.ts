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
    age: 27,
    gender: "Female",
    diagnosisDate: "2024-08-09",
    status: "Pending",
  },
  {
    id: 2,
    name: "Dixie Elvin",
    age: 32,
    gender: "Male",
    diagnosisDate: "2024-07-10",
    status: "Approved",
  },
  {
    id: 3,
    name: "Winton Navy",
    age: 25,
    gender: "Male",
    diagnosisDate: "2024-04-11",
    status: "Testing",
  },
  {
    id: 4,
    name: "Scout Caleb",
    age: 24,
    gender: "Male",
    diagnosisDate: "2023-12-12",
    status: "Released",
  },
  {
    id: 5,
    name: "Fleur Sally",
    age: 41,
    gender: "Female",
    diagnosisDate: "2023-11-15",
    status: "Released",
  },
  {
    id: 6,
    name: "Leanora Lynne",
    age: 32,
    gender: "Female",
    diagnosisDate: "2020-04-23",
    status: "Testing",
  },
  {
    id: 7,
    name: "Sybella Marie",
    age: 31,
    gender: "Female",
    diagnosisDate: "2008-12-19",
    status: "Testing",
  },
  {
    id: 8,
    name: "Leigh Jordyn",
    age: 23,
    gender: "Male",
    diagnosisDate: "2023-06-09",
    status: "Released",
  },
  {
    id: 9,
    name: "Marjorie Oakley",
    age: 43,
    gender: "Female",
    diagnosisDate: "2011-05-12",
    status: "Released",
  },
  {
    id: 10,
    name: "Gussie Beulah",
    age: 28,
    gender: "Male",
    diagnosisDate: "2012-03-21",
    status: "Approved",
  },
  {
    id: 11,
    name: "Acacia Bailee",
    age: 21,
    gender: "Female",
    diagnosisDate: "2023-07-13",
    status: "Testing",
  },
  {
    id: 12,
    name: "Wallis Kipling",
    age: 45,
    gender: "Male",
    diagnosisDate: "2003-12-16",
    status: "Released",
  },
  {
    id: 13,
    name: "Edgar Elfreda",
    age: 41,
    gender: "Male",
    diagnosisDate: "2022-10-05",
    status: "Released",
  },
  {
    id: 14,
    name: "Theodor Hoyt",
    age: 33,
    gender: "Male",
    diagnosisDate: "2014-09-10",
    status: "Approved",
  },
  {
    id: 15,
    name: "Wynter Julius",
    age: 25,
    gender: "Male",
    diagnosisDate: "2024-08-10",
    status: "Testing",
  },
];