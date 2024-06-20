function Heading() {
	return (
		<div className="text-center">
			<h1 className="text-2xl font-light">
				{' '}
				Welcome to the <br />{' '}
				<span className="font-semibold"> Frontend Quiz!</span>
			</h1>
			<p className="text-xs text-orange-700 dark:text-slate-500 mt-4">
				{' '}
				Pick a subject to get started.
			</p>
		</div>
	);
}

export default Heading;
