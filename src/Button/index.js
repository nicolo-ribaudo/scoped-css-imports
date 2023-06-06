import { html } from "htm/preact";
import styles from "./styles.css" assert { type: "css", inject: "scoped" };

export default function Button() {
  return html`
    <button class=${styles}>
      This button is <span class="text">blue</span>
    </button>
  `;
}
