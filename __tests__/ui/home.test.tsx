import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../../pages/HomePage";

test("display 'shop' button in home page", () => {
  render(<HomePage />);
  const shopButton = screen.getByRole("button", { name: /shop/i });
  expect(shopButton).toBeInTheDocument();
});
