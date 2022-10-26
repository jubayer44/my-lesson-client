import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

import img from "../Images/pdf-img.jpg";

const PDFFile = ({ courses }) => {
  const { title, description } = courses;

  const pdfGenerate = () => {
    const doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(img, "JPG", 65, 20, 500, 400);
    doc.addPage();
    doc.text(60, 20, title);
    doc.text(60, 60, doc.splitTextToSize(description, 500));

    doc.save("a.pdf");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Link to="" onClick={pdfGenerate}>
        <FaDownload className="text-[30px] mr-6" />
      </Link>
    </div>
  );
};

export default PDFFile;
