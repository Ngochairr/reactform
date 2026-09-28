import { useSelector } from "react-redux";
import StudentRow from "./StudentRow";

export default function StudentTable({ search, onEdit }) {
  const students = useSelector(
    (state) => state.students
  );

  const filteredStudents = students.filter(
    (student) =>
      student.maSV
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.hoTen
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.soDienThoai.includes(search) ||
      student.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h5 className="mb-0">
          Danh sách sinh viên
        </h5>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Thao tác</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <StudentRow
                  key={student.maSV}
                  student={student}
                  onEdit={onEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}