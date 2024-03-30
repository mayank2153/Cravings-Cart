import React from "react";
import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

test("check it baby", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});
// here 
