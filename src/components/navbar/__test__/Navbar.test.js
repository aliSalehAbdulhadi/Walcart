import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import StoreCard from "../../storeCard/StoreCard";

describe("Navbar", () => {
  test("check how many items in cart", () => {
    render(
      <>
        <Navbar />
        <StoreCard description="a" rating={0} />
      </>,
    );
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    fireEvent.click(addToCartButton);
    const cartLength = screen.getByRole("cartLength");
    expect(cartLength).toBeInTheDocument();
    expect(cartLength.textContent).toBe("1");
  });
});
