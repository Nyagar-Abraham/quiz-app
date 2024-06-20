import { Outlet } from 'react-router-dom';
import DarkModeButton from '../components/DarkModeButton';

function AppLayout() {
	return (
		<div className=" mx-3 sm:w-4/5 md:max-w-xl sm:mx-auto mt-5 sm:mt-10 px-4 py-2 rounded-md dark:bg-slate-900 bg-orange-300 ">
			<DarkModeButton />
			<main className="mt-6">
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
