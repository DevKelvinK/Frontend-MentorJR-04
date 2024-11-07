import styles from "./Main.module.css";

import { Card } from "./Card";

import imgCard1 from "../assets/illustration-grow-together.svg";
import imgCard2 from "../assets/illustration-flowing-conversation.svg";
import imgCard3 from "../assets/illustration-your-users.svg";

export function Main() {
  return (
    <main className={styles.main}>
      <section>
        <Card
          h2="Grow Together"
          paragraph="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
          src={imgCard1}
        />

        <Card
          h2="Flowing Conversations"
          paragraph="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          src={imgCard2}
          customClass="cardReverse"
        />

        <Card
          h2="Your Users"
          paragraph="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
          src={imgCard3}
        />
      </section>

      <div className={styles.containerCTA}>
        <section className={styles.cta} id="cta">
          <h2>Ready To Build Your Community?</h2>

          <a href="">Get Started For Free</a>
        </section>
      </div>
    </main>
  );
}
