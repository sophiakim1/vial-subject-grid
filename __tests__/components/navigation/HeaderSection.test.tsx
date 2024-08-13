/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { render } from "../../../test-utils/index";
import HeaderSection from "@/app/components/navigation/HeaderSection";

describe("Navigation", () => {
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

  it("renders the HeaderSection and the Logo", () => {
    const headerSection = render(<HeaderSection />);
    // Make sure the HeaderSection is in the document
    expect(headerSection).toBeTruthy();

    // Make sure the HeaderSection has a logo
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the About link in the HeaderSection", () => {
    render(<HeaderSection />);
    // Make sure the About link is in the document
    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();
  });
});
