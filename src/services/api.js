import axios from 'axios';

export async function getQuestions() {
	try {
		const data = await axios.get('http://localhost:8000/quizzes');

		return data;
	} catch (error) {
		throw new Error('something went wrong');
	}
}
// export async function getQuestion(id) {
// 	try {
// 		const data = await axios.get(`http://localhost:8000/quizzes/${id}`);
// 		console.log(data);
// 		return data;
// 	} catch (error) {
// 		throw new Error('something went wrong');
// 	}
// }
