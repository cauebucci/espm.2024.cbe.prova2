import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
ReactDOM.render(
// O componente react.StrictMode não produz nenhuma saída visível, apenas ativa uma série
// de verificações e validações (quando utilizados os scripts de desenvolvimento) para os
// filhos, que no nosso caso é o aplicativo todo!
// https://reactjs.org/docs/strict-mode.html
React.createElement(React.StrictMode, null,
    React.createElement(App, null)), 
// O segundo parâmetro do método render() indica dentro de qual elemento da
// página a aplicação será efetivamente renderizada.
document.getElementById("root"));
//# sourceMappingURL=index.js.map