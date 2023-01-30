import { memo } from "react";
import { BiChevronDown } from "react-icons/bi";

const Dropdown = (props) => {
	return (
		<div className="group relative">
			<button className="inline-flex">
				{props.label}{" "}
				<span className="ml-1">
					<BiChevronDown size={24} />
				</span>
			</button>
			<nav
				tabndex="0"
				className="z-10 bg-white invisible shadow rounded w-60 absolute -left-14 top-full transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1"
			>
				<ul className="py-1">{props.children}</ul>
			</nav>
		</div>
	);
};

export default memo(Dropdown);
