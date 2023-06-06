import { html } from "htm/preact";
import styles from "./styles.css" assert { type: "css", inject: "scoped" };

export default function Label() {
  return html`
    <div class=${styles}>
      This is a text: <span class="text">Hello World</span>
    </div>
  `;
}
