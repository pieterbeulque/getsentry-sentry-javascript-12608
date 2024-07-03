import { createElement } from "react";
import ReactDOM from "react-dom";

import { browserTracingIntegration, init } from "@sentry/react";

init({
  dsn: "https://test",
  integrations: [browserTracingIntegration()],
});

const App = () => {
  return <div>Hello</div>;
};

ReactDOM.render(createElement(App), document.querySelector("#pro-editor"));
