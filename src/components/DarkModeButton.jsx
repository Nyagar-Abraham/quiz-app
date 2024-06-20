import { FaSun, FaMoon } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';

function DarkModeButton() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<div className="text-end py-2">
			<button
				onClick={toggleDarkMode}
				className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none"
			>
				{isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
			</button>
		</div>
	);
}

export default DarkModeButton;
