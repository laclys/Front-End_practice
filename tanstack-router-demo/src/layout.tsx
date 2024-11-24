import { useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const Layout = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-2 flex gap-2 items-center">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to={`/about/${count}`} className="[&.active]:font-bold">
          About
        </Link>
        <button className="ml-2" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <span className="p-2">Count: {count}</span>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export default Layout;
