export default function Search({ search, setSearch }) {
  return (
    <div className="mb-3">

      <input
        type="text"
        className="form-control"
        placeholder="Tìm kiếm sinh viên..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}