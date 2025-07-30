import React, { useState } from "react";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);
  const [newFileName, setNewFileName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddFile = () => {
    if (newFileName.trim()) {
      setFiles([...files, { name: newFileName, id: Date.now() }]);
      setNewFileName("");
    }
  };

  const handleDeleteFile = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const handleEditFileName = (id, newName) => {
    setFiles(
      files.map((file) => (file.id === id ? { ...file, name: newName } : file))
    );
  };

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Tra cứu Thủ tục hành chính</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Nhập tên tệp..."
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleAddFile} style={{ padding: "8px 12px" }}>
          ➕ Thêm
        </button>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button style={{ padding: "8px 12px" }}>🔍 Tra cứu</button>
      </div>

      {filteredFiles.map((file) => (
        <div
          key={file.id}
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            value={file.name}
            onChange={(e) => handleEditFileName(file.id, e.target.value)}
            style={{ flex: 1, padding: "6px", border: "none" }}
          />
          <button
            onClick={() => handleDeleteFile(file.id)}
            style={{
              marginLeft: "10px",
              padding: "6px 10px",
              backgroundColor: "#ff4d4d",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            🗑️ Xóa
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;