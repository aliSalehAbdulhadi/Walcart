import Cart from "../cart/Cart";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Cart />

      {children}
    </div>
  );
};

export default Layout;
