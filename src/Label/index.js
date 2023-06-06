import { html } from "htm/preact";
import scopeName from "./styles.css" assert { type: "css", inject: "scoped" };
import Button from "../Button/index.js";

export default function Label() {
  return html`
    <div style-scope=${scopeName}>
      This is a text: <span class="text">Hello World</span>, and it contains a button: <${Button} />
    </div>
  `;
}
