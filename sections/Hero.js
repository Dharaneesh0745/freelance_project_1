import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title=" with Doctors" caption="Learn" className="logobg" />
          <h1 className="hero-title">
            You medical people will have more lives to answer for in the other
            world than even we generals.
          </h1>

          <div className="sub-heading">
            <TitleSm title="Biology" /> <span>.</span>
            <TitleSm title="Botany" /> <span>.</span>
            <TitleSm title="Zoology" />
          </div>
          <button className="button-primary">Get Started</button>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Famous quote by Thomas Edison," />
            <p>
              "The Doctor of the future will give no medicine but will interest
              his patients in the care of the human frame, in diet and in the
              cause and prevention of disease."
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Expertise /> */}
      <Banner />
      <Testimonial />
      {/* <ShowCase />
      <Brand /> */}

      {/* <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard /> */}
    </>
  );
};

export default Hero;
