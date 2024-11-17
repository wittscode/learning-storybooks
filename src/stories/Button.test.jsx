import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("should render Button", () => {
  const label = "Click me";
  render(<Button label={label} />);
  const btnElm = screen.getByRole("button");
  expect(btnElm).toBeInTheDocument();
  expect(btnElm).toHaveTextContent("Click");
});

test("should render primary button with correct class", () => {
  render(<Button label="Primary" primary={true} />);
  const btnElm = screen.getByRole("button");

  expect(btnElm).toHaveClass("storybook-button--primary");
});

test("should render secondary button by default", () => {
  render(<Button label="Secondary" />);
  const btnElm = screen.getByRole("button");

  expect(btnElm).toHaveClass("storybook-button--secondary");
});

test("should apply correct size class", () => {
  render(<Button label="Size Test" size="large" />);
  const btnElm = screen.getByRole("button");

  expect(btnElm).toHaveClass("storybook-button--large");
});

test("should apply custom background color", () => {
  render(<Button label="Color Test" backgroundColor="#ff0000" />);
  const btnElm = screen.getByRole("button");

  expect(btnElm).toHaveStyle({ backgroundColor: "#ff0000" });
});

test("should handle click events", () => {
  const handleClick = jest.fn();
  render(<Button label="Click Test" onClick={handleClick} />);
  const btnElm = screen.getByRole("button");

  btnElm.click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
