import React from "react";
import { Col, Row } from "react-bootstrap";
import ItemCard from "./components/itemCards";
function App() {
    const cards = [{
            icone: "public/images/user.png",
            titulo: "Titulo",
            subtitulo: "Subtitulo"
        },
        {
            icone: "public/images/user.png",
            titulo: "Titulo",
            subtitulo: "Subtitulo"
        },
        {
            icone: "public/images/user.png",
            titulo: "Titulo",
            subtitulo: "Subtitulo"
        },
        {
            icone: "public/images/user.png",
            titulo: "Titulo",
            subtitulo: "Subtitulo"
        },
    ];
    return (React.createElement("div", { className: "limitador" },
        React.createElement("div", { style: {
                backgroundImage: 'url(public/images/569754.webp)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                padding: '250px 60px 100px',
                minHeight: '100vh',
                boxSizing: 'border-box'
            } },
            React.createElement("div", null,
                React.createElement("h1", { style: {
                        fontSize: "500%",
                        color: "orange",
                        textAlign: "center",
                        maxWidth: "550px",
                        margin: "0px auto 0px auto"
                    } }, "CREATIVE"),
                React.createElement("p", { style: {
                        color: "white",
                        textAlign: "center",
                        padding: "0px",
                        maxWidth: "550px",
                        margin: "0px auto 0px auto"
                    } }, "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.")),
            React.createElement("div", { style: {
                    textAlign: 'center',
                    paddingTop: '10px'
                } },
                React.createElement("button", { style: {
                        color: "white",
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        borderRadius: '99px',
                        padding: '50px 20px;'
                    } }, "CONTACT US"))),
        React.createElement(Row, null, cards.map(card => React.createElement(Col, null,
            React.createElement(ItemCard, { card: card }))))));
}
export default App;
//# sourceMappingURL=app.js.map