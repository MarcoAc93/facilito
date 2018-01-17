export default function userReducer(action, state = { }) {
	switch(action.type) {
		case 'LOG_IN':
			return { jwt: action.jwt };

		default:
			return state;
	}
}