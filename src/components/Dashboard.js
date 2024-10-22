import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleConvertToWord = async () => {
    if (pdfFile) {
      const formData = new FormData();
      formData.append("file", pdfFile);

      setLoading(true);

      try {
        const response = await axios.post(
          "https://pdftoword-zc14.onrender.com/convert",
          formData,
          {
            responseType: "blob", // Important for downloading the file
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
      <h1>PDF to Word Converter</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleConvertToWord} disabled={loading}>
        {loading ? "Converting..." : "Convert to Word"}
      </button>
    </div>
  );
}

export default Dashboard;
