import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumePreview({ data }) {

  const downloadPDF = () => {

    const input = document.getElementById("resume");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();

      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div>

      <div id="resume" className="resume">

        <h2>{data.name}</h2>
        <p>{data.email}</p>
        <p>{data.phone}</p>

        <h3>Skills</h3>
        <p>{data.skills}</p>

        <h3>Education</h3>
        <p>{data.education}</p>

        <h3>Experience</h3>
        <p>{data.experience}</p>

      </div>

      <button onClick={downloadPDF}>Download PDF</button>

    </div>
  );
}

export default ResumePreview;