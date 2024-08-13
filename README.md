<div align="center">
  <img src="/app/asset/logo.png" alt="Vial Logo" width="200">
</div>
<H1 align="center">Vial - Subject Grid Display Application</H1>

<p  align="center">This is a Next.js project designed to provide a user-friendly interface for displaying and managing subject data. Built with modern technologies such as React, TypeScript, and Mantine, the application features a responsive grid layout that allows users to view, filter, and sort subject information efficiently.</p>

## 🗺️ Map
[📦 Installation](#installation)

[🔓 Preview](#preview)

[⚙️ Built With](#built-with)

[💡 Features](#features)

## Installation

First, run the development server:

```bash
yarn install
# then
yarn add react react-dom next
# then
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Preview
<img src="./public/image/Screenshot.png" alt="Screenshot of the project" width="950"></li>

## Built With
<ul>
    <li><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React badge" width="100"></li>
    <li><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript badge" width="100"></li>
    <li><img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js badge" width="100"></li>
    <li><img src="https://img.shields.io/badge/postcss-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white" alt="Postcss badge" width="100"></li>
    <li><img src="https://img.shields.io/badge/Mantine-0066cc" alt="Mantine" width="100"></li>
    <li><img src="https://img.shields.io/badge/TablerIcons-ffbf00" alt="Tabler" width="100"></li>
    <li><img src="http://ForTheBadge.com/images/badges/built-with-love.svg" alt="Built with love badge" width="100"></li>
</ul>

## Features
1. **Data Fetching**:
    - Created a sleep function that pauses execution for a specified number of milliseconds. Combined the sleep function and mock data to simulate the behavior of a real-world API that might have network latency and returns a predefined set of data.
    - Created a subjects array containing mock data. Each subject is represented as an object with various attributes: ID, Name, Age, Gender, Diagnosis Date, and Status.

2. **Grid Display**:
    - Rendered subject data in a visually appealing and user-friendly grid or table format.
    - Utilized Mantine for styling, ensuring that the design was modern, responsive, and consistent with the overall look and feel of the application.

3. **Filtering Capability**:
    - Implemented a filtering feature that allowed users to refine the displayed subject data based on specific attributes like Gender, Diagnosis Date, and Status.
    - Included intuitive UI elements, such as checkboxes and pills, to make the filtering process seamless and accessible to users.

4. **Sorting Feature**:
    - Implement sorting via clickable table headers or separate sorting controls.
    - Enabled users to sort the displayed data by key attributes such as Name, Age, and Diagnosis Date.
    - Incorporated sorting functionality via clickable table headers, allowing users to easily rearrange the data. Implemented icons to match ascending or descending order.

5. **Dynamic Interactions**:
    - Added a search bar that allowed users to quickly find subjects by typing their names, enhancing the usability and efficiency of data retrieval. The search functionality did not discriminate between uppercase and lowercase letters and accommodated variations in the order of first name and last name.
    - Implemented an infinite scroll feature to improve the handling of large data sets, ensuring that users could view more subjects without the need for pagination, thereby enhancing the overall user experience.

6. **Responsiveness**:
    - Ensured that the application was fully responsive, providing an optimal user experience across various devices and screen sizes. This included adapting layouts and elements to ensure usability on both mobile and desktop environments.

7. **Accessibility**:
    - Adhered to accessibility standards, such as the Web Content Accessibility Guidelines (WCAG), to ensure that the application was inclusive and usable by all users, including those with disabilities. This included considerations for color contrast, keyboard navigation, and screen reader compatibility.

8. **GitHub Project Board**:
    - Utilized the [GitHub Project Board](https://github.com/users/sophiakim1/projects/2) to manage and track the progress of tasks and features throughout the development process. This tool facilitated organized and efficient project management, ensuring that all tasks were visible, assigned, and completed in a timely manner.

9. **Unit Testing**:
    - Developed a test case to ensure that the FilterSection component renders correctly. The test utilized the render function and verified the component's successful rendering by asserting that it exists in the document.
    - The test ensured that all status options ("Pending," "Approved," "Testing," and "Released") were present as checkboxes in the document, verifying the correct implementation of the status filter.
    - The test rendered the FilterSection component with predefined filter values and verified that the corresponding checkboxes for gender and status filters were correctly checked or unchecked.

<br>
<br>
<p align="center">Thank you for checking out! Hope you find it useful and easy to use. If you have any questions or feedback, please feel free to reach out.🤚</p>