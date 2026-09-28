import {
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from "../actions/studentActions";

const initialState = {
  students: [],
};

export default function studentReducer(
  state = initialState,
  action
) {
  switch (action.type) {

    case ADD_STUDENT:
      return {
        ...state,
        students: [
          ...state.students,
          action.payload,
        ],
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) =>
            student.maSV !== action.payload
        ),
      };

    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.maSV === action.payload.maSV
            ? action.payload
            : student
        ),
      };

    default:
      return state;
  }
}