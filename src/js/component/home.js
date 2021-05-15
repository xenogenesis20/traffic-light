import React, { useState } from "react";

//create your first component
export function Home() {
	const [active, setActive] = useState(null);

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center ">
			<div
				className={active !== "red" ? "light" : "light red"}
				onClick={() => {
					setActive("red");
				}}></div>
			<div
				onClick={() => {
					setActive("yellow");
				}}
				className={
					active !== "yellow" ? "light" : "light yellow"
				}></div>
			<div
				onClick={() => {
					setActive("green");
				}}
				className={active !== "green" ? "light" : "light green"}></div>
		</div>
	);
}
