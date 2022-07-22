import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StoreCard from "../StoreCard";
import placeholderData from "../../../data/fakeData/fakeData.json";

test("display the correct item data in store card", () => {
  render(
    <StoreCard
      title={placeholderData.title}
      description={placeholderData.description}
      rating={placeholderData.rating.rate}
      price={placeholderData.price}
      id={placeholderData.id}
    />,
  );
  const title = screen.getByRole("heading", {
    name: /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i,
  });
  expect(title).toBeInTheDocument();

  const image = screen.getByRole("img", {
    name: /card pic/i,
  });
  expect(image).toBeInTheDocument();

  const price = screen.getByRole("heading", { name: /109.95/i });
  expect(price).toBeInTheDocument();
});
