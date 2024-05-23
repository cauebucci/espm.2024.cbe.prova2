import React, { useState } from "react";
import Secao from "../models/cards";
import Cards from "../models/cards";
import { Button, Card, CardBody } from "react-bootstrap";
import CardsImagem from "../models/cardsImagem";

interface ItemCardImagem {
	card: CardsImagem;
}

function ItemCardsImagem(props: ItemCardImagem) {
	return (
		<Card>
			<CardBody style={{
						backgroundImage: props.card.imagem,
                        height: "500px",
                        borderRadius: "10px"
					}}>
                    <div style={{
                        paddingTop: "300px"
                    }}>
                        <div>
                        <small style={{
                            color: "white"
                        }}>
                            {props.card.tipo}
                        </small>
                    </div>
                    <div>
                        <h6 style={{
                            color: "white"
                        }}>
                            {props.card.titulo}
                        </h6>
                    </div>
                    <div>
                        <Button style={{
                            backgroundColor: "transparent",
                            borderColor: "white"
                        }}>
                            CASE STUDY
                        </Button>
                    </div>
                </div>
				
			</CardBody>
		</Card>
	);
}

export default ItemCardsImagem;
