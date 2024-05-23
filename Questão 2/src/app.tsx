import React from "react";
import Aba from "./models/aba";
import ComponenteAbas from "./components/componenteAbas";

function App() {
	return (
		<ComponenteAbas>
			<Aba titulo="Aba 1">
				<p>Texto 1</p>
			</Aba>
			<Aba titulo="Aba 2">
				<p>Texto 2</p>
			</Aba>
			<Aba titulo="Aba 3">
				<p>Texto 3</p>
			</Aba>
		</ComponenteAbas>
	);
}

export default App;
