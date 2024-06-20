import { useQuery } from 'react-query';
import { getQuestions } from '../services/api';
// import { useParams } from 'react-router-dom';

export function useQuestions() {
	const { data, isLoading } = useQuery({
		queryKey: ['questions'],
		queryFn: getQuestions,
	});

	return { data, isLoading };
}
// export async function useQuestion() {

// 	const { data: { data } = {}, isLoading } = useQuery({
// 		queryKey: ['question'],
// 		queryFn: () => getQuestion(id),
// 	});
// 	console.log(data);

// 	return { data, isLoading };
// }
