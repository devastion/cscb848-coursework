import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Test the application", () => {
  test("Sanity check", () => {
    expect(true).toBe(true);
  });

  test("Check if app calculates correctly", async () => {
    render(<App />);
    const weight = screen.getByTestId("weight");
    const reps = screen.getByTestId("reps");
    const max = screen.getByTestId("max");

    await fireEvent.change(weight, { target: { value: 100 } });
    expect(max.textContent).toBe("100");

    await fireEvent.change(reps, { target: { value: 12 } });
    expect(max.textContent).toBe("144");
  });

  test("Test if warning show up", async () => {
    render(<App />);
    const reps = screen.getByTestId("reps");

    await fireEvent.change(reps, { target: { value: 16 } });

    const warn = screen.getByTestId("repswarn");
    expect(warn).toBeInTheDocument();
  });
});
