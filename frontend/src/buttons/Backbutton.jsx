import React from "react";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBackOutline } from "react-icons/io5";

function BackButton() {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(-1)}
			style={{
				transition: "transform 0.6s ease",
			}}
			className="bg-[#001806] h-[35px] w-[35px] px-1 text-white p-[3px] top-2 md:-top-2 absolute mt-[90px] float-right rounded-full
			ms-[20px] hover:bg-[#11ef48] transition-colors duration-200"
		>
			<span className="text-[22px] font-bold ">
				<IoReturnUpBackOutline />{" "}
			</span>
		</button>
	);
}

export default BackButton;
