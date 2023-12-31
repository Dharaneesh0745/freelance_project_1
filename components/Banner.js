import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="Are you looking forward to start a learning career with us?" />{" "}
            <br />
            <TitleLogo title="Lets take your learning to the next level!" />
          </div>
          <div>
            <button className="button-primary">Request</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
