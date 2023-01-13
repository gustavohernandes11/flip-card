import {useState} from "react";
import "./styles/layout.scss";
import "./styles/modules.scss";

function App() {
	const [isFlipped, setisFlipped] = useState(true);
	return (
		<div className="container">
			<main>
				<h1 className="title">Flip Card Effect</h1>
				<div className="card-container">
					<div
						className={`card-flipper ${isFlipped && "is-flipped"}`}
					>
						<div className="card-front">front side</div>
						<div className="card-back">back side</div>
					</div>
				</div>
				<button
					className="button"
					onClick={() => setisFlipped(!isFlipped)}
				>
					Flip card
				</button>
			</main>
		</div>
	);
}

export default App;
