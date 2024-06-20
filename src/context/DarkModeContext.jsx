/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(
		window.matchMedia('(prefers-color-schema:dark)').matches,
		'isDarkMode'
	);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
		} else {
			document.documentElement.classList.add('light');
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);

	function toggleDarkMode() {
		setIsDarkMode((isDark) => !isDark);
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

function useDarkMode() {
	const context = useContext(DarkModeContext);
	if (context === undefined)
		throw new Error('DarkModeContext was used outside of darkModeProvider ');
	return context;
}

export { DarkModeProvider, useDarkMode };
