import React from "react";
import html2pdf from "html2pdf.js";

const HtmlToPdfConverter = () => {
  const convertToPdf = () => {
    const element = document.getElementById("content-to-convert");
    const opt = {
      margin: 10,
      filename: "converted.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  const generateMockData = (rows, cols) => {
    const data = [];
    for (let i = 1; i <= rows; i++) {
      const row = [];
      for (let j = 1; j <= cols; j++) {
        row.push(`Row ${i}, Cell ${j}`);
      }
      data.push(row);
    }
    return data;
  };

  const tableData = generateMockData(30, 6);

  return (
    <div>
      {/* Button to trigger the conversion */}
      <button onClick={convertToPdf}>Convert to PDF</button>

      {/* Content (big table with mock data) to be converted to PDF */}
      <table id="content-to-convert">
        <thead>
          <tr>
            {Array.from({ length: 6 }, (_, i) => (
              <th key={i}>Column {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cellData, cellIndex) => (
                <td key={cellIndex}>{cellData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HtmlToPdfConverter;
