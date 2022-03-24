import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        height: 100,
        boxSizing: "border-box",
        position: "fixed",
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        boxShadow: "0 0 4px #000",
        justifyContent: "space-between",
        paddingLeft: "50px",
        paddingRight: "35px",
        backgroundColor: "white",
        bottom: 60,
        top: 0,
        zIndex: 200,
      }}
    >
      <div
        style={{
          height: "50%",
          width: "10%",
          backgroundImage: `url(./SS-Logo.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <ul
        style={{
          width: "80%",
          //   height: "100%",
          display: "flex",
          padding: "10px",
          listStyleType: "none",
        }}
      >
        <li style={{ padding: 15, fontWeight: "500", fontSize: 18 }}>
          Book an Eye Test
        </li>
        <li style={{ padding: 15, fontWeight: "500", fontSize: 18 }}>Offers</li>
        <li style={{ padding: 15, fontWeight: "500", fontSize: 18 }}>
          Spactacles
        </li>
        <li style={{ padding: 15, fontWeight: "500", fontSize: 18 }}>
          Sunglasses
        </li>
        <li style={{ padding: 15, fontWeight: "500", fontSize: 18 }}>
          Contact Lenses
        </li>
        <li style={{ padding: 15, fontWeight: "500", fontSize: 18 }}>
          Find a store
        </li>
        <li style={{ display: "flex", alignItems: "center", paddingLeft: 30 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi    bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </li>
        <li style={{ display: "flex", alignItems: "center", paddingLeft: 30 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </li>
        <li style={{ display: "flex", alignItems: "center", paddingLeft: 30 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
