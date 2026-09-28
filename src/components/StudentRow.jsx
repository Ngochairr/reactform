import { useDispatch } from "react-redux";
import { deleteStudent } from "../redux/actions/studentActions";

export default function StudentRow({ student, onEdit }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteStudent(student.maSV));
  };

  return (
    <tr>
      <td>{student.maSV}</td>
      <td>{student.hoTen}</td>
      <td>{student.soDienThoai}</td>
      <td>{student.email}</td>

      <td>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => onEdit(student)}
        >
          Sửa
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={handleDelete}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}