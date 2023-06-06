import { html } from "htm/preact";
import scopeName from "./styles.css" assert { type: "css", inject: "scoped" };

export default function Button() {
  return html`
    <button style-scope=${scopeName}>
      This button is <span class="text">blue</span>
    </button>
  `;
}
