import { Suspense } from 'react';
import Heading from '../components/Heading';
import Navigation from '../components/Navigation';
import Spinner from '../components/spinner';

function Home() {
	


	return (
		<div className="grid gap-10 sm:grid-cols-2 mb-10">
			<Heading />
			<Suspense fallback={<Spinner />}>
				<Navigation />
			</Suspense>
		</div>
	);
}

export default Home;
