import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>
                    <span>Kousik - </span>
                    <a href="tel:9843331284">+91 9843331284</a>
                  </h3>
                </div>
                <div className="box">
                  <FiMail size={30} className="icons" />
                  <h3>
                    <span>Kousik E-mail - </span>
                    <a href="mailto:skoushik122002@gmail.com">
                      skoushik122002@gmail.com
                    </a>
                  </h3>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Coimbatore, TN</h3>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillTwitterSquare size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.{" "}
              </p>

              <form>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>E-mail</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Mobile number</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>School Name</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="inputs">
                  <span>Type enquiry details*</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>
                <button className="button-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
