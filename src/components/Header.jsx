import styles from "./Header.module.css";

import Logo from "../assets/logo.svg";
import imgHero from "../assets/illustration-mockups.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <img src={Logo} alt="Logotipo Huddle" className={styles.logo} />

        <a href="#cta">Try It Free</a>
      </nav>

      <section className={styles.sectionHero}>
        <div>
          <h1>Build The Community Your Fans Will Love</h1>

          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. 
          </p>

          <a href="#cta">Get Started For Free</a>
        </div>

        <img src={imgHero} alt="Ilustração Hero" />
      </section>
    </header>
  );
}
