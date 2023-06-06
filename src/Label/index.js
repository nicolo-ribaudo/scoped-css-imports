import { html } from "htm/preact";
import scopeName from "./styles.css" assert { type: "css", inject: "scoped" };
import Button from "../Button/index.js";

export default function Label({ useButton }) {
  return html`
    <div style-scope=${scopeName}>
      This is a text: <span class="text">Hello World</span>
      ${useButton ? html`, and it contains a button: <${Button} useLabel />` : null}
    </div>
  `;
}
