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
            <a href="mailto:skoushik122002@gmail.com">
              <button className="button-primary">Request</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
