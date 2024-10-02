import React from "react";
import Button from "./Button";

export default function Hero() {
	return (
		<div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
			<div className="flex flex-col gap-4">
				<p>Prišiel čas na cvičenie</p>
				<h1 className="uppercase font-bold text-5xl sm:text-6xl md:text-7xl">
					WORK<span className="text-blue-400">OUT</span>
				</h1>
			</div>
			<p className="text-base md:text-balance font-light">
				Lorem, ipsum dolor sit amet{" "}
				<span className="text-blue-400 font-medium">
					consectetur adipisicing elit
				</span>
				. Delectus labore aliquid magni architecto{" "}
				<span className="text-blue-400 font-medium">tenetur</span> nostrum
				dolores illum maxime explicabo deleniti temporibus nihil voluptate iste
				similique id doloremque ad, ut ducimus!
			</p>
			<Button
				func={() => {
					window.location.href = "#generate";
				}}
				text={"Prijať a zacať"}
			/>
		</div>
	);
}
