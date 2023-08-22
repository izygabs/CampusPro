import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../Dashboard.css";
import AddItems from "./AddItems";
import Changepassword from "./Changepassword";
import ProfileInfo from "./Profile_info";
import OverlayComponent from "./OverlayComp";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Welcome from "./Welcome";
// import Content from "./Content";

const Dashboard = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isTokenExp, setIsTokenExp] = useState(false);
  const [userID, setUserID] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userType, setUserType] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/getTokenExpiration", {
      headers: {
        Authorization: "campusProUserToken", // Include your actual token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsTokenExp(data.isTokenExpired);

        const token = jwtDecode(data.campusToken);
        // console.log(token);
        token && setLoading(true);
        const { _id, fName, lName, userType, email } = token;
        setUserID(_id);
        setEmail(email);
        setFirstName(fName);
        setLastName(lName);
        setUserType(userType);
        // Redirect to login if token is expired
        if (data.isTokenExpired) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error fetching token status:", error);
      });
  }, [navigate]);

  const handleButtonClicked = (component) => {
    setSelectedComponent(component);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };
  let userName = firstName + " " + lastName;

  return (
    <div className="dash">
      <svg
        xmlnsSvg="http://www.w3.org/2000/svg"
        class="d-none height='40px' width='40px'"
      >
        <symbol id="calendar3" viewBox="0 0 16 16">
          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </symbol>
        <symbol id="cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
        <symbol id="chevron-right" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </symbol>
        <symbol id="door-closed" viewBox="0 0 16 16">
          <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
          <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
        </symbol>
        <symbol id="file-earmark" viewBox="0 0 16 16">
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
        </symbol>
        <symbol id="file-earmark-text" viewBox="0 0 16 16">
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
        </symbol>
        <symbol id="gear-wide-connected" viewBox="0 0 16 16">
          <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
        </symbol>
        <symbol id="graph-up" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
          />
        </symbol>
        <symbol id="house-fill" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        </symbol>
        <symbol id="list" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </symbol>
        <symbol id="people" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
        </symbol>

        <symbol id="search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </symbol>
      </svg>

      <div
        class="navbar sticky-top bg-dark text-white flex-md-nowrap p-3 shadow"
        // data-bs-theme="dark"
      >
        <Link to="/">
          <img
            src={require("../images/campuspro(6).png")}
            className="dashboard-logo"
            alt=""
          />
        </Link>
        <div className="dashboard-search"></div>
        <div class="username">
          <DropdownButton
            id="dropdown-basic-button"
            title={loading ? userName : ""}
            className="userName-dropdown"
            variant="secondary"
          >
            <Dropdown.Item
              onClick={() =>
                handleButtonClicked(
                  isTokenExp ? (
                    navigate("/login")
                  ) : (
                    <ProfileInfo userID={userID} />
                  )
                )
              }
            >
              My Profile
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                handleButtonClicked(
                  isTokenExp ? (
                    navigate("/login")
                  ) : (
                    <Changepassword Email={email} />
                  )
                )
              }
            >
              Login & Security
            </Dropdown.Item>
            <Dropdown.Item
              onClick={async () => {
                const logout = await axios.get("/api/logout");
                if (logout) {
                  navigate("/login");
                }
              }}
            >
              Sign Out
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <ul class="navbar-nav flex-row d-md-none">
          <li class="nav-item text-nowrap">
            <button
              class="nav-link px-3 text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSearch"
              aria-controls="navbarSearch"
              aria-expanded="false"
              aria-label="Toggle search"
            >
              <svg
                class="bi"
                style={{ width: "20px", height: "20px", color: "white" }}
              >
                <use xlinkHref="#search" />
              </svg>
            </button>
          </li>
          <li class="nav-item text-nowrap">
            <button
              class="nav-link px-3 text-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                class="bi"
                style={{ width: "20px", height: "20px", color: "white" }}
              >
                <use xlinkHref="#list" />
              </svg>
            </button>
          </li>
        </ul>

        <div id="navbarSearch" class="navbar-search w-100 collapse">
          <input
            class="form-control w-100 rounded-0 border-0"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="sidebar border border-right col-md-3 col-lg-2 p-0  ">
            <div
              class="offcanvas-md offcanvas-end bg-warning"
              tabindex="-1"
              id="sidebarMenu"
              aria-labelledby="sidebarMenuLabel"
            >
              <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul class="nav flex-column">
                  <li class="nav-item ">
                    <a
                      class="nav-link d-flex  align-items-center gap-2 active "
                      aria-current="page"
                      onClick={() =>
                        handleButtonClicked(
                          isTokenExp ? (
                            navigate("/login")
                          ) : (
                            <div>
                              <h1>Welcome back, {firstName}</h1>
                              <div className="db-content">
                                <h6>WHAT'S NEXT</h6>
                                <h3>
                                  Let's continue with creating your property and
                                  items!
                                </h3>
                                <p>
                                  Your info is pending verified, just continue
                                  with listing your property now.
                                </p>
                                <button
                                  onClick={() =>
                                    handleButtonClicked(
                                      isTokenExp ? (
                                        navigate("/login")
                                      ) : (
                                        <AddItems />
                                      )
                                    )
                                  }
                                >
                                  Go to Create Your Property
                                </button>
                              </div>
                              <div className="db-confirm">
                                <p>Pending Confirmation</p>
                                <h3>The property is pending</h3>
                              </div>
                            </div>
                          )
                        )
                      }
                    >
                      <svg class="bi" style={{ width: "20px", height: "20px" }}>
                        <use xlinkHref="#house-fill" />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li class={userType == "merchant" ? "hideBtn" : "nav-item"}>
                    <a class="nav-link d-flex  align-items-center gap-2">
                      <svg class="bi" style={{ width: "20px", height: "20px" }}>
                        <use xlinkHref="#file-earmark" />
                      </svg>
                      Properties
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2" href="">
                      <svg class="bi" style={{ width: "20px", height: "20px" }}>
                        <use xlinkHref="#cart" />
                      </svg>
                      Items
                    </a>
                  </li>
                </ul>
                {/* <hr
                  class="my-4 "
                  style={{ color: "black", width: "13.1rem" }}
                /> */}

                <ul class="nav flex-column mb-auto">
                  <li class="nav-item">
                    <a class="nav-link d-flex align-items-center gap-2">
                      <svg class="bi" style={{ width: "20px", height: "20px" }}>
                        <use xlinkHref="#gear-wide-connected" />
                      </svg>

                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Account"
                        className="dropdown"
                        variant="Warning"
                      >
                        <Dropdown.Item
                          onClick={() =>
                            handleButtonClicked(
                              isTokenExp ? (
                                navigate("/login")
                              ) : (
                                <ProfileInfo userID={userID} />
                              )
                            )
                          }
                        >
                          My Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            handleButtonClicked(
                              isTokenExp ? (
                                navigate("/login")
                              ) : (
                                <Changepassword Email={email} />
                              )
                            )
                          }
                        >
                          Login & Security
                        </Dropdown.Item>
                      </DropdownButton>
                    </a>
                  </li>
                  <li class="nav-item signOut">
                    <a
                      class="nav-link d-flex align-items-center gap-2 signOut"
                      onClick={async () => {
                        const logout = await axios.get("/api/logout");
                        if (logout) {
                          navigate("/login");
                        }
                      }}
                    >
                      <svg class="bi" style={{ width: "20px", height: "20px" }}>
                        <use xlinkHref="#door-closed" />
                      </svg>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>

              <div class="btn-toolbar ms-5 mb-2 mb-md-0">
                <div class="btn-group me-2 specialBtn">
                  <button
                    type="button"
                    class={
                      userType == "merchant"
                        ? "hideBtn"
                        : "btn btn-sm btn-outline-dark"
                    }
                  >
                    Create Property
                  </button>
                  {/* <Link to="/add-items"> */}
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      handleButtonClicked(
                        isTokenExp ? navigate("/login") : <AddItems />
                      )
                    }
                  >
                    Create Items
                  </button>
                  {/* </Link> */}
                </div>
                {/* <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
                >
                  <svg class="bi" style={{ width: "20px", height: "20px" }}>
                    <use xlinkHref="#calendar3" />
                  </svg>
                  This week
                </button> */}
              </div>
              <div class="username">{/* <h6>{"Gabriel Isaiah"}</h6> */}</div>
            </div>

            <div className="overComp">
              {showOverlay ? (
                <OverlayComponent
                  component={selectedComponent}
                  onClose={handleCloseOverlay}
                />
              ) : (
                /* <Welcome
                  firstName={firstName}
                  // handleChange={handleButtonClicked(
                  //   isTokenExp ? navigate("/login") : <AddItems />
                  // )}
                /> */
                <div>
                  <h1>Welcome back, {firstName}</h1>
                  <div className="db-content">
                    <h6>WHAT'S NEXT</h6>
                    <h3>
                      Let's continue with creating your property and items!
                    </h3>
                    <p>
                      Your info is pending verified, just continue with listing
                      your property now.
                    </p>
                    <button
                      onClick={() =>
                        handleButtonClicked(
                          isTokenExp ? navigate("/login") : <AddItems />
                        )
                      }
                    >
                      Go to Create Your Property
                    </button>
                  </div>
                  <div className="db-confirm">
                    <p>Pending Confirmation</p>
                    <h3>The property is pending</h3>
                  </div>
                </div>
              )}
            </div>
            {/* <Welcome /> */}
          </main>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
