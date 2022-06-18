import React from "react";
import "./bids.css";
import { AiFillHeart } from "react-icons/ai";
import netflix from "../../assets/netflix.jpg";
import sr from "../../assets/sr.png";
import aarong from "../../assets/aarong.png";
import rokomari from "../../assets/rokomari.jpg";
import gaan from "../../assets/gaan.jpg";
import { Link } from "react-router-dom";

const Bids = ({ title }) => {
  return (
    <div className="bids section__padding">
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="bids-container-card">
          <div className="card-column">
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={netflix} alt="" />
                <Link to={`/post/123`}>
                  <p className="bids-title">Netflix Subscription</p>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>
                  1.25 <span>ETH</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 55 k
                </p>
              </div>
            </div>
          </div>
          <div className="card-column">
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={sr} alt="" />
                <Link to={`/post/123`}>
                  <p className="bids-title">10% Discount on Secret Recipe</p>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>
                  0.20 <span>ETH</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 25 k
                </p>
              </div>
            </div>
          </div>
          <div className="card-column">
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={aarong} alt="" />
                <Link to={`/post/123`}>
                  <p className="bids-title">Aarong Gift Voucher $50</p>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>
                  0.55 <span>ETH</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 55
                </p>
              </div>
            </div>
          </div>
          <div className="card-column">
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={rokomari} alt="" />
                <Link to={`/post/123`}>
                  <p className="bids-title">Free Book from Rokomari</p>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>
                  0.87 <span>ETH</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 82
                </p>
              </div>
            </div>
          </div>
          <div className="card-column">
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={gaan} alt="" />
                <Link to={`/post/123`}>
                  <p className="bids-title">Subscription of Gaan</p>
                </Link>
              </div>
              <div className="bids-card-bottom">
                <p>
                  0.09 <span>ETH</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 22
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="load-more">
        <button>Load More</button>
      </div>
    </div>
  );
};

export default Bids;
