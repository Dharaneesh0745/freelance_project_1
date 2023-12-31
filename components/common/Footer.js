import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="'s" caption="LWD" className="logobg" />
              <br />
              <span>Any Queries? Feel free to Reach out us</span>
              <br />
              <br />

              <h3>
                <span>Koushik - </span>
                <a href="tel:9843331284">+91 9843331284</a>
              </h3>
              <br />
              <button className="button-primary">Request</button>
            </div>
            <ul>
              <h3>Visit to pages</h3>

              <li>
                <Link href="/">Our team</Link>
              </li>

              <li>
                <Link href="/">Blog</Link>
              </li>

              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>

            <ul>
              <h3>Connect</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillTwitterSquare size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>&copy; 2024 Learn with Doctors. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
