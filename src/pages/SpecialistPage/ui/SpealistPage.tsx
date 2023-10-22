import React from "react";
import { useParams } from "react-router-dom";

const SpecialistPage = () => {
	const { id } = useParams<{ id: string }>();

	return <div></div>;
};

export default SpecialistPage;
