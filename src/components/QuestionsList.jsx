import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	finishQuiz,
	nextQuestion,
	previousQuestion,
	submitAnswer,
} from '../pages/QuestionSlice';
import Button from './Button';

function QuestionsList() {
	const [submit, setSubmit] = useState(false);
	const dispatch = useDispatch();
	const { question, quiz, index } = useSelector((state) => state);

	const { question: curQuestion, options, answer } = question;

	function handleSubmit(index) {
		dispatch(submitAnswer(index));
		setSubmit(true);
	}
	function handleNext() {
		if (index + 1 !== quiz?.questions?.length) {
			dispatch(nextQuestion());
		} else {
			dispatch(finishQuiz());
		}
		setSubmit(false);
	}
	function handlePrev() {
		dispatch(previousQuestion());
		setSubmit(false);
	}

	return (
		<div className="my-5 ">
			<h2 className="font-semibold m-b2 ">
				<span className="dark:text-slate-300 mr-2">({index + 1})</span>
				{curQuestion}
			</h2>
			<ul className="flex flex-col items-center mt-6 gap-2">
				{options.map((option, index) => (
					<li
						onClick={() => handleSubmit(index)}
						key={option}
						className={`w-3/4 py-2 px-3  bg-orange-400 dark:bg-slate-950 rounded-md text-sm dark:text-blue-100 hover:bg-orange-500  dark:hover:bg-slate-700 hover:translate-x-2 -hover:translate-y-1 transition-all ${
							submit
								? answer === option
									? ' !bg-blue-600 dark:!bg-orange-500 cursor-not-allowed'
									: 'dark:!bg-blue-500 cursor-not-allowed !bg-orange-500'
								: ''
						} `}
					>
						{option}
					</li>
				))}
			</ul>

			<div className="flex items-center justify-between mt-6 sm:mx-[4.2rem]">
				{index > 0 && <Button onClick={handlePrev}>&larr;prev</Button>}
				{submit && (
					<div className="space-x-2 ml-auto">
						<Button state={submit} onClick={handleNext}>
							{index + 1 !== quiz?.questions?.length ? (
								<span>next&rarr; </span>
							) : (
								'finish'
							)}
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export default QuestionsList;
