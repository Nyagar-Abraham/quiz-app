import {
	configureStore,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit';

export const fetchQuiz = createAsyncThunk('questions/fetchQuiz', async () => {
	const res = await fetch(`/data.json`);
	const { quizzes } = await res.json();

	return { quizzes };
});

const initialState = {
	scores: [],
	questions: [],
	quiz: {},
	question: {},
	isCorrect: null,
	index: 0,
	status: 'idle',
	error: '',
	points: 0,
	highScore: 0,
};

const questionSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		selectQuiz(state, action) {
			state.quiz = state.questions.find(
				(question) => question.id === action.payload
			);
		},
		startQuiz(state) {
			state.status = 'active';
			state.question = state.quiz.questions.find(
				(question, i) => i === state.index
			);
		},
		submitAnswer(state, action) {
			const answer = state.question.options.find(
				(_, i) => i === action.payload
			);
			state.isCorrect = answer === state.question.answer;
			if (state.isCorrect) {
				state.points += 10;
				state.scores.push(10);
			} else {
				state.scores.push(0);
			}
		},
		finishQuiz(state) {
			state.highScore =
				state.highScore > state.points ? state.highScore : state.points;
			state.status = 'done';
		},
		nextQuestion(state) {
			state.index += 1;
			state.isCorrect = null;
			state.question = state.quiz.questions.find(
				(question, i) => i === state.index
			);
		},
		previousQuestion(state) {
			state.index -= 1;
			state.isCorrect = null;
			state.question = state.quiz.questions.find((_, i) => i === state.index);
			const deductedPoints = state.scores.find((score, i) => i === state.index);
			state.scores.splice(state.index, 1);
			state.points -= deductedPoints;
		},
		reset(state) {
			state.error = '';
			state.status = 'idle';
			state.index = 0;
			state.isCorrect = null;
			state.questions = [];
			state.question = {};
			state.quiz = {};
			state.points = 0;
			state.scores = [];
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchQuiz.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchQuiz.fulfilled, (state, action) => {
				state.status = 'ready';
				state.questions = action.payload.quizzes;
			})
			.addCase(fetchQuiz.rejected, (state, action) => {
				state.error = action.error.message;
				state.status = 'error';
			}),
});

export const {
	selectQuiz,
	startQuiz,
	submitAnswer,
	reset,
	nextQuestion,
	previousQuestion,
	finishQuiz,
} = questionSlice.actions;

const store = configureStore({
	reducer: questionSlice.reducer,
	// reducers: {
	// 	Questions: questionSlice.reducer,
	// },
});

export default store;
