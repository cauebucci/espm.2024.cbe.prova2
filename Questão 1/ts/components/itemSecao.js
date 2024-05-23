import React from "react";
function ItemSecao(props) {
    return (React.createElement("div", { style: {
            backgroundImage: `url('${props.secao.backgroundImage}')`,
            backgroundPosition: props.secao.backgroundPosition,
            backgroundSize: "cover",
            padding: "250px 60px 100px",
            boxSizing: "border-box"
        } },
        React.createElement("div", { style: {
                maxWidth: "400px",
                margin: "0px auto 0px auto",
                textAlign: props.secao.align
            } },
            React.createElement("div", { style: {
                    color: props.secao.colorTitle,
                    fontSize: "40px"
                } }, props.secao.titulo),
            (props.secao.texto ? React.createElement("div", { style: {
                    color: props.secao.ColorText,
                    margin: "40px 0px"
                } }, props.secao.texto) : null),
            React.createElement("a", { style: {
                    display: "inline-block",
                    backgroundColor: props.secao.ColorLink,
                    padding: "10px 20px",
                    fontSize: "12px",
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "none",
                    borderRadius: "999px"
                } }, "VIEW MORE"))));
}
export default ItemSecao;
//# sourceMappingURL=itemSecao.js.map