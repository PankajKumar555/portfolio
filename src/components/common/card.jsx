import React from "react";
import "./styles/card.css";

const Card = (props) => {
	const { body } = props;
	return (
		<div className="card">
			<div className="card-container">
				<div className="card-body">
					<div className="card-text">{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
