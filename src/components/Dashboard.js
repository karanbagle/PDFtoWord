import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleConvertToWord = async () => {
    if (pdfFile) {
      const formData = new FormData();
      formData.append("file", pdfFile);

      setLoading(true);
      setProgress(0);

      try {
        const response = await axios.post(
          "https://pdftoword-zc14.onrender.com/convert",
          formData,
          {
            responseType: "blob",
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress(percentCompleted);
            },
          }
        );

        // Create a download link for the converted file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${pdfFile.name.replace(".pdf", "")}.docx`
        );
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error("Error converting PDF to Word:", error);
        alert("Conversion failed. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please select a PDF file to convert.");
    }
  };

  return (
    <div className="dashboard">
      <h1 className="title">PDF to Word Converter</h1>
      <div className="input-container">
        <input
          type="file"
          className="file-input"
          accept=".pdf"
          onChange={handleFileChange}
        />
        <button
          className="convert-button"
          onClick={handleConvertToWord}
          disabled={loading || !pdfFile}
        >
          {loading ? "Converting..." : "Convert to Word"}
        </button>
        {loading && (
          <div className="loading-bar">
            <div
              className="loading-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
