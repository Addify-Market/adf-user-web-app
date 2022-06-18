import React from "react";
import "./description.css";
// import { useSelector } from "react-redux";
import supplier from "../../assets/supplier.png";
import distributor from "../../assets/distributor.png";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import useHook from "../../hooks";
import { useNavigate } from "react-router-dom";
const Description = ({ title }) => {
  // const { user } = useSelector(state => state);

  let navigate = useNavigate();
  const { toggleUser } = useHook();
  const changeUserStatus = e => {
    e.preventDefault();
    console.log("hits");
    toggleUser(true, "addonOwner", false);
    navigate("/supplier/dashboard");
  };

  return (
    <div className="description-bids section__padding">
      <div className="description-bids-container">
        <div className="description-bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="description-container-card">
          <div className="description-card-columns">
            <div className="description-bids-card">
              <div className="description-bids-card-top">
                <img src={supplier} alt="" />
                <a
                  href="https://adf-supplier-web-app.vercel.app/"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="description-bids-title"> </p>
                  <p>
                    <Button
                      variant="contained"
                      style={{
                        background: "#ff22d8",
                        color: "#ffffff",
                        fontWeight: "bold"
                      }}
                    >
                      Be Popular
                    </Button>
                  </p>
                  {/* <p><Button color="" title="Connect" role="supplier" onclick= {changeUserStatus}/></p> */}
                </a>
              </div>
              <div className="description-bids-card-bottom">
                <p></p>
              </div>
            </div>
          </div>
          <div className="description-card-columns">
            <div className="description-bids-card">
              <div className="description-bids-card-top">
                <img src={distributor} alt="" />
                <a
                  href="https://adf-distributor-web-app.vercel.app/"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="description-bids-title"> </p>
                  <p>
                    <Button
                      variant="contained"
                      style={{
                        background: "#673ab7",
                        color: "#ffffff",
                        fontWeight: "bold"
                      }}
                    >
                      Be Favourite
                    </Button>
                  </p>
                </a>
              </div>
              <div className="description-bids-card-bottom">
                <p></p>
              </div>
            </div>
          </div>
          <div className="description-card-columns">
            <div className="description-bids-card">
              <div className="description-bids-card-top">
                <img src={user} alt="" />
                <Link
                  to={`/post/123`}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="description-bids-title"> </p>
                  <p>
                    <Button
                      variant="contained"
                      style={{
                        background: "#4caf50",
                        color: "#ffffff",
                        fontWeight: "bold"
                      }}
                      onClick={changeUserStatus}
                    >
                      Be Safe
                    </Button>
                  </p>
                </Link>
              </div>
              <div className="description-bids-card-bottom">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
