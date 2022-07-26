import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import NavBar from "../../navbar/Navbar";
import StoreCard from "../../storeCard/StoreCard";

describe("Store card and cart test", () => {
  // Not working
  test("check if cart component appears when clicking the cart button in nav", () => {
    render(
      <>
        <Cart /> <NavBar />
      </>,
    );
    const cartButton = screen.getByRole("cartButton");
    const cartDiv = screen.getByRole("cartDiv");
    expect(cartDiv).toHaveStyle({ display: "block" });
  });

  test("check adding items to cart", () => {
    render(
      <>
        <Cart /> <StoreCard description="a" rating={0} />
      </>,
    );
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    const cartNoItemsHeading = screen.getByRole("heading", {
      name: /no items in cart/i,
    });
    expect(addToCartButton).toBeInTheDocument();
    expect(cartNoItemsHeading).toBeInTheDocument();
    fireEvent.click(addToCartButton);
    expect(addToCartButton).not.toBeInTheDocument();
    expect(cartNoItemsHeading).not.toBeInTheDocument();
  });

  test("removing all items from cart", () => {
    render(
      <>
        <Cart /> <StoreCard description="a" rating={0} />
      </>,
    );
    const removeAllItems = screen.getByRole("button", { name: /clear cart/i });
    expect(removeAllItems).toBeInTheDocument();
    fireEvent.click(removeAllItems);

    const cartNoItemsHeading = screen.getByRole("heading", {
      name: /no items in cart/i,
    });
    expect(cartNoItemsHeading).toBeInTheDocument();
    expect(removeAllItems).not.toBeInTheDocument();
  });
});
