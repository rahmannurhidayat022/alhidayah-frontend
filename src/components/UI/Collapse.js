import { BiChevronDown } from 'react-icons/bi';

const Collapse = (props) => {
	return (
		<div className="group relative w-full pr-3">
			<button className="w-full inline-flex justify-between">
				{props.label}
				<span>
					<BiChevronDown size={24} />
				</span>
			</button>
			<nav
				tabndex="0"
				className="bg-white hidden rounded-md transition-all group-focus-within:visible group-focus-within:block group-focus-within:translate-y-1"
			>
				<ul className="py-1">{props.children}</ul>
			</nav>
		</div>
	);
};

export default Collapse;
