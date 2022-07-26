import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import StoreCard from "../StoreCard";
import placeholderData from "../../../data/fakeData/fakeData.json";
import Cart from "../../cart/Cart";
import Navbar from "../../navbar/Navbar";

describe("Store card", () => {
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

  test("removing single item from cart", () => {
    render(<StoreCard description="a" rating={0} />);
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });

    fireEvent.click(addToCartButton);
    const removeButton = screen.getByRole("button", {
      name: /remove from cart/i,
    });
    expect(addToCartButton).not.toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
  });

  test("increasing item quantity", () => {
    render(
      <>
        <StoreCard description="a" rating={0} /> <Navbar />
      </>,
    );
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    fireEvent.click(addToCartButton);

    // quantity not increasing
    const increaseButton = screen.getByRole("button", {
      name: "+",
    });
    fireEvent.click(increaseButton);

    const cartLength = screen.getByRole("cartLength");
    expect(cartLength.textContent).toBe("1");
  });
});
