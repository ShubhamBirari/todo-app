import React from "react";

const Navbar = () => {
  const menu = [
    {
      name: "About",
      child: [],
    },
    {
      name: "Solutions",
      child: [
        {
          name: "TEST",
          child: [],
        },
      ],
    },
    {
      name: "Services",
      child: [
        {
          name: "TEST",
          child: [],
        },
      ],
    },
    {
      name: "Testimonials",
      child: [],
    },
    {
      name: "Careers",
      child: [],
    },
    {
      name: "Blog",
      child: [],
    },
    {
      name: "Contact",
      child: [],
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-4 pt-2">
        <a className="navbar-brand" href="#">
          <img src="/assets/images/Logo.svg" alt="logo" className="nav-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {menu.map((item, index) => (
              <li
                className={
                  "nav-item" + item.child.length > 0 ? " dropdown" : ""
                }
                key={index}
              >
                <a
                  className={
                    "nav-link px-4 active" +
                    (item.child.length > 0 ? " dropdown-toggle" : "")
                  }
                  aria-current="page"
                  href="#"
                >
                  {item.name}
                </a>

                {item.child.length > 0 && (
                  <ul className="dropdown-menu">
                    {item.child.map((temp, index) => (
                      <li className="px-2" key={index}>
                        <a className="dropdown-item" href="#">
                          {temp.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
