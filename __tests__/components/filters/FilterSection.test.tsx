/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { render } from "../../../test-utils/index";
import FilterSection from "@/app/components/filters/FilterSection";
import { Gender, Status } from "@/app/global/interfaces";

describe("FilterSection", () => {
  beforeAll(() => {
    // Workaround from https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("renders the FilterSection", () => {
    const filterSection = render(
      <FilterSection
        filters={{ gender: [], status: [] }}
        onFilterChange={() => {}}
      />
    );
    // Make sure the HeaderSection is in the document
    expect(filterSection).toBeTruthy();
  });

  it("renders the Gender filter", () => {
    render(
      <FilterSection
        filters={{ gender: [], status: [] }}
        onFilterChange={() => {}}
      />
    );

    // Make sure the Gender filter is in the document
    const genderFilter = screen.getByText("Gender");
    expect(genderFilter).toBeInTheDocument();
    const maleCheckbox = screen.getByText(Gender.Male);
    expect(maleCheckbox).toBeInTheDocument();
    const femaleCheckbox = screen.getByText(Gender.Female);
    expect(femaleCheckbox).toBeInTheDocument();
  });

  it("renders the Status filter", () => {
    render(
      <FilterSection
        filters={{ gender: [], status: [] }}
        onFilterChange={() => {}}
      />
    );
    // Make sure the Status filter is in the document
    const statusFilter = screen.getByText("Status");
    expect(statusFilter).toBeInTheDocument();
    const pendingCheckbox = screen.getByText("Pending");
    expect(pendingCheckbox).toBeInTheDocument();
    const approvedCheckbox = screen.getByText("Approved");
    expect(approvedCheckbox).toBeInTheDocument();
    const testingCheckbox = screen.getByText("Testing");
    expect(testingCheckbox).toBeInTheDocument();
    const releasedCheckbox = screen.getByText("Released");
    expect(releasedCheckbox).toBeInTheDocument();
  });

  it("renders the Gender and Status filter with correct checkbox values with given input", () => {
    render(
      <FilterSection
        filters={{
          gender: [Gender.Male],
          status: [Status.Approved, Status.Released],
        }}
        onFilterChange={() => {}}
      />
    );

    // Make sure the Gender filter checkboxes are checked
    const maleCheckbox = screen.getByLabelText(Gender.Male);
    expect(maleCheckbox).toBeChecked();
    const femaleCheckbox = screen.getByLabelText(Gender.Female);
    expect(femaleCheckbox).not.toBeChecked();

    // Make sure the Status filter checkboxes are checked
    const pendingCheckbox = screen.getByLabelText(Status.Pending);
    expect(pendingCheckbox).not.toBeChecked();
    const approvedCheckbox = screen.getByLabelText(Status.Approved);
    expect(approvedCheckbox).toBeChecked();
    const testingCheckbox = screen.getByLabelText(Status.Testing);
    expect(testingCheckbox).not.toBeChecked();
    const releasedCheckbox = screen.getByLabelText(Status.Released);
    expect(releasedCheckbox).toBeChecked();
  });
});
