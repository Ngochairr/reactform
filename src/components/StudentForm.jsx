import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  addStudent,
  updateStudent,
} from "../redux/actions/studentActions";

export default function StudentForm({ editingStudent, setEditingStudent }) {

  const dispatch = useDispatch();

  const [maSV, setMaSV] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  /*
    LIFECYCLE

    Khi editingStudent thay đổi,
    useEffect sẽ chạy.
  */
  useEffect(() => {

    if (editingStudent) {

      setMaSV(editingStudent.maSV);
      setHoTen(editingStudent.hoTen);
      setSoDienThoai(editingStudent.soDienThoai);
      setEmail(editingStudent.email);

    }

  }, [editingStudent]);

  const validate = () => {

    const newErrors = {};

    if (!maSV.trim()) {
      newErrors.maSV =
        "Vui lòng nhập mã sinh viên";
    }

    if (!hoTen.trim()) {
      newErrors.hoTen =
        "Vui lòng nhập họ tên";
    }

    if (!soDienThoai.trim()) {

      newErrors.soDienThoai =
        "Vui lòng nhập số điện thoại";

    } else if (!/^[0-9]{10}$/.test(soDienThoai)) {

      newErrors.soDienThoai =
        "Số điện thoại phải có 10 chữ số";
    }

    if (!email.trim()) {

      newErrors.email =
        "Vui lòng nhập email";

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {

      newErrors.email =
        "Email không hợp lệ";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {

    if (!validate()) {
      return;
    }

    const student = {
      maSV,
      hoTen,
      soDienThoai,
      email,
    };

    // EDIT
    if (editingStudent) {

      dispatch(updateStudent(student));

      setEditingStudent(null);

    }

    // ADD
    else {

      dispatch(addStudent(student));

    }

    reset();
  };

  const reset = () => {

    setMaSV("");
    setHoTen("");
    setSoDienThoai("");
    setEmail("");

    setErrors({});

    setEditingStudent(null);
  };

  return (
    <div className="card shadow-sm mb-4">

      <div className="card-header">

        <h5 className="mb-0">
          Thông tin sinh viên
        </h5>

      </div>

      <div className="card-body">

        <div className="row g-3">

          {/* MÃ SV */}

          <div className="col-md-6">

            <label className="form-label">
              Mã sinh viên
            </label>

            <input
              className={`form-control ${
                errors.maSV
                  ? "is-invalid"
                  : ""
              }`}
              value={maSV}
              onChange={(e) =>
                setMaSV(e.target.value)
              }
            />

            {errors.maSV && (
              <div className="invalid-feedback">
                {errors.maSV}
              </div>
            )}

          </div>


          {/* HỌ TÊN */}

          <div className="col-md-6">

            <label className="form-label">
              Họ tên
            </label>

            <input
              className={`form-control ${
                errors.hoTen
                  ? "is-invalid"
                  : ""
              }`}
              value={hoTen}
              onChange={(e) =>
                setHoTen(e.target.value)
              }
            />

            {errors.hoTen && (
              <div className="invalid-feedback">
                {errors.hoTen}
              </div>
            )}

          </div>


          {/* SĐT */}

          <div className="col-md-6">

            <label className="form-label">
              Số điện thoại
            </label>

            <input
              className={`form-control ${
                errors.soDienThoai
                  ? "is-invalid"
                  : ""
              }`}
              value={soDienThoai}
              onChange={(e) =>
                setSoDienThoai(e.target.value)
              }
            />

            {errors.soDienThoai && (
              <div className="invalid-feedback">
                {errors.soDienThoai}
              </div>
            )}

          </div>


          {/* EMAIL */}

          <div className="col-md-6">

            <label className="form-label">
              Email
            </label>

            <input
              className={`form-control ${
                errors.email
                  ? "is-invalid"
                  : ""
              }`}
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            {errors.email && (
              <div className="invalid-feedback">
                {errors.email}
              </div>
            )}

          </div>

        </div>


        {/* BUTTON */}

        <button
          className="btn btn-success mt-4 me-2"
          onClick={handleSubmit}
        >
          {editingStudent
            ? "Cập nhật"
            : "Thêm sinh viên"}
        </button>

        <button
          className="btn btn-secondary mt-4"
          onClick={reset}
        >
          Reset
        </button>

      </div>
    </div>
  );
}