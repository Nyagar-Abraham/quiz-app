/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchQuiz, selectQuiz } from '../pages/QuestionSlice';
import Button from './Button';
import Spinner from './spinner';

function Navigation() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchQuiz());
	}, [dispatch]);

	const { status, questions } = useSelector((state) => state);

	if (status === 'loading') return <Spinner />;

	return (
		<ul className="flex flex-col gap-2 items-center ">
			{questions?.map((question) => (
				<NavLink
					key={question?.title}
					image={question?.icon}
					title={question?.title}
					question={question}
				/>
			))}
		</ul>
	);
}

function NavLink({ title, image, question }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<li
			onClick={() => {
				navigate(`/questions/${question?.id}`);
				dispatch(selectQuiz(question?.id));
			}}
			className="w-4/5 flex items-center gap-2 dark:bg-slate-950 px-3 py-1 rounded-md bg-orange-400 dark:hover:bg-slate-700 dark:hover:text-slate-200 hover:bg-orange-500"
		>
			<Button>
				<img
					className="h-6 "
					src={'../starter-code' + image.substring(1)}
					alt="img"
				/>
			</Button>

			<p>{title}</p>
		</li>
	);
}

export default Navigation;
