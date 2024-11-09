import styles from "./Footer.module.css";

import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

import logoWhite from "../assets/logoWhite.svg";
import iconLocation from "../assets/icon-location.svg";
import iconPhone from "../assets/icon-phone.svg";
import iconEmail from "../assets/icon-email.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <section className={styles.locationAndContacts}>
            <img
              src={logoWhite}
              className={styles.logoWhite}
              alt="Logomarca Huddle"
            />

            <div className={styles.location}>
              <img src={iconLocation} />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <div>
              <div className={styles.contact}>
                <img src={iconPhone} />
                <span>+1-543-123-4567</span>
              </div>

              <div className={styles.contact}>
                <img src={iconEmail} />
                <span>example@huddle.com</span>
              </div>
            </div>
          </section>

          <nav className={styles.columnsNav}>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">What We Do</a>
              </li>

              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#">Career</a>
              </li>

              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>

        <section className={styles.socialMediaAndCopy}>
          <nav>
            <a
              href="http://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoFacebook />
            </a>

            <a
              href="http://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoTwitter />
            </a>

            <a
              href="http://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoInstagram />
            </a>
          </nav>

          <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </section>
      </div>
    </footer>
  );
}
