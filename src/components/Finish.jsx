import { useSelector } from 'react-redux';

/* eslint-disable react/prop-types */
function Finish() {
	const { points, quiz } = useSelector((state) => state);
	return (
		<div>
			<div className="my-16 text-center p-4 rounded-md bg-orange-500 w-4/5 mx-auto ">
				<p className="mb-3">
					👏🏾 Congratulations ,you just finished the {quiz.title} quiz{' '}
				</p>
				<p>
					you scored <strong>{points}%</strong>{' '}
				</p>
			</div>
		</div>
	);
}

export default Finish;
