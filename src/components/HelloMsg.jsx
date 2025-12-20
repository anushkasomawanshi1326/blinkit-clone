import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HelloMessage from "../HelloMsg";

describe("HelloMessage Component", () => {
  test("renders the component with correct styles", () => {
    const { getByText } = render(<HelloMessage />);

    const heading = getByText("Hello, React!");
    const text = getByText("This is a simple React functional component.");

    expect(heading).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    expect(heading).toHaveStyle("color: #333");
    expect(text).toHaveStyle("color: #555");
  });
});
