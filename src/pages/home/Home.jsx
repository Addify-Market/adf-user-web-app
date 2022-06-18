import React from "react";
import { Bids, Description, Header } from "../../components";

const Home = () => {
  return (
    <div>
      <Header description="Addify is an WEB2 application that makes the WEB3 more powerful & useful" />
      <Description />
      <Bids title="Popular Addons" />
    </div>
  );
};

export default Home;
