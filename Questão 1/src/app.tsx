import React from "react";
import Secao from "./models/cards";
import ItemSecao from "./components/itemCards";
import { Button, CardBody, Col, Row } from "react-bootstrap";
import Cards from "./models/cards";
import ItemCard from "./components/itemCards";
import CardsImagem from "./models/cardsImagem";
import ItemCardsImagem from "./components/itemCardsImagem";

function App() {
	const cards: Cards[] = [{
		icone: "public/images/user.png",
		titulo: "Titulo 1",
		subtitulo: "Subtitulo 1"
	},
	{
		icone: "public/images/user.png",
		titulo: "Titulo 2",
		subtitulo: "Subtitulo 2"
	},
	{
		icone: "public/images/user.png",
		titulo: "Titulo 3",
		subtitulo: "Subtitulo 3"
	},
	{
		icone: "public/images/user.png",
		titulo: "Titulo 4",
		subtitulo: "Subtitulo 4"
	},
	{
		icone: "public/images/user.png",
		titulo: "Titulo 5",
		subtitulo: "Subtitulo 5"
	},
	{
		icone: "public/images/user.png",
		titulo: "Titulo 6",
		subtitulo: "Subtitulo 6"
	},
	];

	const cardsImagem: CardsImagem[] = [{
		imagem: "url(public/images/569754.webp)",
		titulo: "Titulo 1",
		tipo: "Tipo 1"
	},
	{
		imagem: "url(public/images/569754.webp)",
		titulo: "Titulo 2",
		tipo: "Tipo 2"
	},
	{
		imagem: "url(public/images/569754.webp)",
		titulo: "Titulo 3",
		tipo: "Tipo 3"
	},
	];

	return (
		<div className="limitador">
			<div style={{
					backgroundImage: 'url(public/images/569754.webp)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					padding: '250px 60px 100px',
					minHeight: '100vh',
					boxSizing: 'border-box'
				}}>
				<div>
					<h1 style={{
						 fontSize: "500%",
						 color: "orange",  
						 textAlign: "center",
						 maxWidth: "550px",
						 margin: "0px auto 0px auto"
					}}>
						CREATIVE
					</h1>
					<p style={{
						color: "white",
						textAlign: "center",
						padding: "0px",
						maxWidth: "550px",
						margin: "0px auto 0px auto"
					}}>
						There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.
					</p>
				</div>
				<div style={{
					textAlign: 'center',
					paddingTop: '10px'
				}}>
					<Button style={{
						borderRadius: "10px",
						backgroundColor: "transparent",
						borderColor: "white"
					}}>
						CONTACT US
					</Button>
				</div>
        	</div>
			<div style={{
				margin: "10px",
				marginTop: "50px",
				marginBottom: "50px"

			}}>
				<Row>
					{cards.map(card =>
						<Col md="4" style={{
							marginBottom: "10px",
							padding: "10px"
						}}>
							<ItemCard key={card.titulo} card={card} />
						</Col>
					)}
				</Row>
			</div>

			<div style={{
				backgroundColor: "#d3d3d3",
				margin: "10px",
				borderRadius: "10px"
			}}>
				<div style={{
					padding: "10px"
				}}>
					<h1 style={{
						fontWeight: "bold"
					}}>
						Our Portfolio
					</h1>
					<p>
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
					</p>
					<div style={{
				margin: "10px"
			}}>
				<Row>
					{cardsImagem.map(card =>
						<Col md="4" style={{
							marginBottom: "10px",
							padding: "10px"
						}}>
							<ItemCardsImagem key={card.titulo} card={card} />
						</Col>
					)}
				</Row>
			</div>
				</div>
			</div>
			
			<div style={{
				marginTop: "50px",
				marginBottom: "50px",
				margin: "10px"
			}}>
				<h1 style={{
					fontWeight: "bold",
					textAlign: "center"
				}}>
					Our Fun Facts
				</h1>
				<Row>
					<Col md="4">
						<h1 style={{
							color: "orange",
							textAlign: "center",
							fontWeight: "bold"
						}}>	
							199+
						</h1>
						<p>
						The standard chunk of Lorem losum used since the 1500s is reproduced below for those,
						</p>
					</Col>
					<Col md="4">
						<h1 style={{
							color: "orange",
							textAlign: "center",
							fontWeight: "bold"
						}}>	
							575+
						</h1>
						<p>
						The standard chunk of Lorem losum used since the 1500s is reproduced below for those,
						</p>
					</Col>
					<Col md="4">
						<h1 style={{
							color: "orange",
							textAlign: "center",
							fontWeight: "bold"
						}}>	
							69+
						</h1>
						<p>
						The standard chunk of Lorem losum used since the 1500s is reproduced below for those,
						</p>
					</Col>
					
				</Row>
			</div>
			
		</div>

	);
}

export default App;
