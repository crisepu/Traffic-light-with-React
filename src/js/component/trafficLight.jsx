import React, { useState } from "react";

const TrafficLight = () => {
	const [selectedlight, setSelectedLight] = useState("");

	return (
		<div className="container">
			<div className="row justify-content-sm-center position-absolute top-0 start-50 translate-middle-x">
				<div className="row justify-content-md-center">
					<div className="topTrafficLight"></div>
				</div>
				<div className="trafficLight row justify-content-sm-center">
					<div
						onClick={() => setSelectedLight("redLight")}
						className={
							"redLight" +
							(selectedlight === "redLight" ? " glow" : "")
						}></div>
					<div
						onClick={() => setSelectedLight("yellowLight")}
						className={
							"yellowLight" +
							(selectedlight === "yellowLight" ? " glow" : "")
						}></div>
					<div
						onClick={() => setSelectedLight("greenLight")}
						className={
							"greenLight" +
							(selectedlight === "greenLight" ? " glow" : "")
						}></div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
