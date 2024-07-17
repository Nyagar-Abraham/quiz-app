import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import { reset, startQuiz } from '../pages/QuestionSlice';
import QuestionsList from './QuestionsList';
import Finish from './Finish';
import { useNavigate } from 'react-router-dom';

function Question() {
	const { quiz, status } = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	if (status === 'idle')
		return <p className="text-center my-10">Click back to restart</p>;

	if (status === 'done') return <Finish />;

	return (
		<div>
			<div
				className="text-center mt-6 rounded-md flex items-center max-xs:flex-col max-sm:gap-2 justify-between 
  "
			>
				<h2 className="font-semibold text-sm  text-start mr-l uppercase tracking-wide flex gap-2 px-2 dark:bg-slate-950 py-1 rounded-sm">
					<img
						className="h-6"
						src={`../starter-code${quiz?.icon?.substring(1)}`}
						alt={quiz.title}
					/>
					<span>{quiz?.title} Questions</span>
				</h2>
				<div className="space-x-2">
					{status === 'active' && (
						<Button
							onClick={() => {
								dispatch(reset());
								navigate('/', { replace: true });
							}}
						>
							reset
						</Button>
					)}
					<Button
						onClick={() => {
							dispatch(startQuiz());
						}}
					>
						start quiz
					</Button>
				</div>
			</div>
			{status === 'active' && <QuestionsList />}
		</div>
	);
}

export default Question;
