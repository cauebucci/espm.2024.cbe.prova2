import React, { useState } from "react";
import Secao from "../models/cards";
import Cards from "../models/cards";
import { Card, CardBody } from "react-bootstrap";

interface ItemCardProps {
	card: Cards;
}

function ItemCard(props: ItemCardProps) {
	return (
		<Card>
			<CardBody style={{
						backgroundColor: "#d3d3d3"
					}}>
				<div>
					<img width={10} src={props.card.icone} />
				</div>
				<div>
					<h5>
						{props.card.titulo}
					</h5>
				</div>
				<div>
					<p>
						{props.card.subtitulo}
					</p>
				</div>
			</CardBody>
		</Card>
	);
}

export default ItemCard;
