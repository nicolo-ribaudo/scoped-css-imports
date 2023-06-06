# Scoped CSS imports in JS

```js
import styles from "./styles.css" with { type: "css", inject: "scoped" };
```

Using [JS import attributes](https://github.com/tc39/proposal-import-attributes) and the [CSS @scope rule](https://keithjgrant.com/posts/2023/04/scoped-css-is-back), we could have automatically injected CSS modules imported from JS files, that are specific to a component and don't conflict with other styles in the page.

You can see an example in the `src/` directory: both `Button` and `Label` internally use a `.text` class, but they don't conflict with each other.

You can run this example at https://nicolo-ribaudo.github.io/scoped-css-imports/, using Chrome with the _Experimental Web Platform features_ flag enabled in [chrome://flags/](chrome://flags/).
