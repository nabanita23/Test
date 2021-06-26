//Write your test case here
import { render, screen } from "@testing-library/react";
import CalendarComponent from "./CalendarComponent";

test("renders  react link", () => {
  render(<CalendarComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
