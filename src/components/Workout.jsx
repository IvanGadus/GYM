import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExcerciseCard from "./ExcerciseCard";

export default function Workout(props) {
	const { workout } = props;
	return (
		<SectionWrapper
			id={"workout"}
			header={"Vitaj."}
			title={["Pozor", "tréningová", "zóna."]}
		>
			<div className="flex flex-col gap-4">
				{workout?.map((item, itemIndex) => {
					return (
						<ExcerciseCard excercise={item} key={itemIndex} index={itemIndex} />
					);
				})}
			</div>
		</SectionWrapper>
	);
}
