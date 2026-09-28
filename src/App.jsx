import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Search from "./components/Search";

export default function App() {
  const [search, setSearch] = useState("");

  const [editingStudent, setEditingStudent] = useState(null);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">
        QUẢN LÝ SINH VIÊN
      </h2>

      <StudentForm
        editingStudent={editingStudent}
        setEditingStudent={setEditingStudent}
      />

      <Search
        search={search}
        setSearch={setSearch}
      />

      <StudentTable
        search={search}
        onEdit={setEditingStudent}
      />
    </div>
  );
}