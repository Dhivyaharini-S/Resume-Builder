import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumePreview({ data }) {

  const downloadPDF = () => {

    const input = document.getElementById("resume");

    html2canvas(input, {
      scale: 2,
      useCORS: true
    }).then((canvas) => {

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      pdf.save("resume.pdf");
    });
  };

  return (
    <div>

      <div id="resume" className="resume">

        {/* Profile Photo */}
        {data.photo && (
          <img
            src={data.photo}
            alt="Profile"
            className="profile-photo"
          />
        )}

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

      <button onClick={downloadPDF}>
        Download PDF
      </button>

    </div>
  );
}

export default ResumePreview;
