import { html } from "htm/preact";
import scopeName from "./styles.css" assert { type: "css", inject: "scoped" };
import Label from "../Label/index.js"

export default function Button({ useLabel }) {
  return html`
    <button style-scope=${scopeName}>
      This button is <span class="text">blue</span>
      ${useLabel ? html`<br /><${Label} />` : null}
    </button>
  `;
}
