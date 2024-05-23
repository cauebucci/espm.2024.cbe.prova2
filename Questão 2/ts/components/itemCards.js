import React from "react";
import { Card, CardBody } from "react-bootstrap";
function ItemCard(props) {
    return (React.createElement(Card, null,
        React.createElement(CardBody, null,
            React.createElement("div", null,
                React.createElement("img", { src: props.card.icone })),
            React.createElement("div", null,
                React.createElement("h5", null, props.card.titulo)),
            React.createElement("div", null,
                React.createElement("p", null, props.card.subtitulo)))));
}
export default ItemCard;
//# sourceMappingURL=itemCards.js.map