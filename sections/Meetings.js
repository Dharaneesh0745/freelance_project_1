import { meetings } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Meetings = () => {
  return (
    <>
      <section className="showcase bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Meetings" /> <br />
            <br />
            {/* <Title
              title="Fresh ideas. Bold design. Smart realisation."
              className="title-bg"
            /> */}
          </div>
          <br />
          <br />
          <div className="grid-3">
            {meetings.map((item) => (
              <div>
                <Card data={item} key={item.id} caption={item.post} />
                <div className="meeting-btn">
                  <a href="https://us05web.zoom.us/j/2784399180?pwd=nho11CoB3CY0Jb4MkGls3wRPLiLLv8.1&omn=88693935203">
                    <button className="button-primary">Join now</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="py btn">
            <button className="secondary-button">View More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Meetings;
