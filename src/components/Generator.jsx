import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { PiSoundcloudLogo } from "react-icons/pi";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import { FaSortDown } from "react-icons/fa";
import { CgLayoutGrid } from "react-icons/cg";
import Button from "./Button";

const Header = (props) => {
	const { index, title, description } = props;

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-center gap-2">
				<p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
					{index}
				</p>
				<h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
			</div>
			<p className="text-sm sm:text-base mx-auto">{description}</p>
		</div>
	);
};

export default function Generator(props) {
	const {
		muscles,
		setMuscles,
		poison,
		setPoison,
		goals,
		setGoals,
		updateWorkout,
	} = props;
	const [showModal, setShowModal] = useState(false);

	const updateMuscles = (muscleGroup) => {
		if (muscles.includes(muscleGroup)) {
			setMuscles(muscles.filter((item) => item !== muscleGroup));
			return;
		}
		setMuscles([...muscles, muscleGroup]);
		if (muscles.length === 2) {
			setShowModal(false);
		}
		if (muscles.length > 3) {
			return;
		}
		if (poison !== "individual") {
			setMuscles([muscleGroup]);
			setShowModal(false);
			return;
		}
	};

	const toggleModal = () => {
		setShowModal((prev) => !prev);
	};
	return (
		<SectionWrapper
			id={"generate"}
			header={"Generuj tréningový plán."}
			title={["Lorem,", "ipsum", "dolor."]}
		>
			{/* ---- 01 section ---- */}
			<Header
				index={"01"}
				title={"Vyber si tréningový plán."}
				description={"Vyber si cvičenia, ktoré chceš vykonať."}
			/>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{Object.keys(WORKOUTS).map((item, itemIndex) => {
					return (
						<button
							onClick={() => {
								setMuscles([]);
								setPoison(item);
							}}
							className={
								"bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-900 " +
								(item === poison ? "border-blue-100" : "border-blue-500")
							}
							key={itemIndex}
						>
							<p className="capitalize">{item.replace("_", " ")}</p>
						</button>
					);
				})}
			</div>

			{/* ----	02 section ---- */}

			<Header
				index={"02"}
				title={"Zameraj sa na ciele."}
				description={"Zvoľ svalové oblasti."}
			/>
			<div
				className={`bg-slate-950 p-3 border border-solid border-blue-500 rounded-lg flex flex-col transition-all duration-200 ease-in-out hover:border-blue-900
			`}
			>
				<button
					onClick={() => toggleModal()}
					className="relative flex items-center justify-center  "
				>
					<p className="capitalize">
						{muscles.length == 0 ? "Vyber svalové skupiny." : muscles.join(" ")}
					</p>
					<FaSortDown className="absolute right-3 top-1/2 -translate-y-1/2" />
				</button>
				{showModal && (
					<div className="flex flex-col px-3 pb-3 gap-2 mt-3">
						{(poison === "individual"
							? WORKOUTS[poison]
							: Object.keys(WORKOUTS[poison])
						).map((item, itemIndex) => {
							return (
								<button
									onClick={() => {
										updateMuscles(item);
									}}
									className={
										"hover:text-blue-400 duration-200 " +
										(muscles.includes(item) ? "text-blue-400" : "")
									}
									key={itemIndex}
								>
									<p className="uppercase">{item}</p>
								</button>
							);
						})}
					</div>
				)}
			</div>

			{/* ---- 03 section ---- */}

			<Header
				index={"03"}
				title={"Staň sa atlétom."}
				description={"Zvoľ si konečný cieľ."}
			/>
			<div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
				{Object.keys(SCHEMES).map((item, itemIndex) => {
					return (
						<button
							onClick={() => {
								setGoals(item);
							}}
							className={
								"bg-slate-950 border  py-3 rounded-lg duration-200 hover:border-blue-900 " +
								(item === goals ? "border-blue-100" : "border-blue-500")
							}
							key={itemIndex}
						>
							<p className="capitalize">{item.replace("_", " ")}</p>
						</button>
					);
				})}
			</div>
			<Button func={updateWorkout} text={"Formulovať"} />
		</SectionWrapper>
	);
}
