export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};

export const deleteStudent = (maSV) => {
  return {
    type: DELETE_STUDENT,
    payload: maSV,
  };
};

export const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    payload: student,
  };
};