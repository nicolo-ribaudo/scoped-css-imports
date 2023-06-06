import { render } from "preact";
import { html } from "htm/preact";
import "preact/debug";

import Label from "./Label/index.js";
import Button from "./Button/index.js";

render(html`<${Label} useButton /> <${Button} />`, document.getElementById("app"));
