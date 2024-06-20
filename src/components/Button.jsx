/* eslint-disable react/prop-types */
function Button({ children, onClick, state, disable }) {
	const base =
		'dark:bg-slate-950 rounded-sm dark:hover:bg-slate-700 dark:focus:ring-slate-500 dark:focus:ring  px-4 py-1  bg-orange-400 hover:bg-orange-500 focus:ring focus:ring-orange-600';
	if (onClick)
		return (
			<button
				disabled={disable}
				className={`${base} ${
					state ? 'dark:bg-orange-500 bg-blue-500 hover:bg-blue-600' : ''
				}`}
				onClick={onClick}
			>
				{children}
			</button>
		);

	return (
		<button
			className={`h-8 w-8 dark:bg-slate-300 flex items-center justify-center rounded-md  `}
		>
			{children}
		</button>
	);
}

export default Button;
