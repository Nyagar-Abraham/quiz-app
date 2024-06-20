import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Question from '../components/Question';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from './QuestionSlice';

function Questions() {
	const { status } = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<div>
			<div>
				<Button
					state={status === 'idle' || status === 'done'}
					disable={status === 'active'}
					onClick={() => {
						navigate(-1, { replace: true });
						dispatch(reset());
					}}
				>
					{' '}
					&larr;select new quiz
				</Button>
			</div>
			<Question />
		</div>
	);
}

export default Questions;
