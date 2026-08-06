import React from 'react';

const PrintCVButton = ({ label = 'EXPORT CV / PDF 🖨️', cvUrl = '/cv.html' }) => {
  const handlePrint = () => {
    // Open cv.html in a new window or trigger printing directly
    const printWindow = window.open(cvUrl, '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <button className="print-cv-btn" onClick={handlePrint} title="Generate PDF CV">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 6 2 18 2 18 9"></polyline>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
        <rect x="6" y="14" width="12" height="8"></rect>
      </svg>
      <span>{label}</span>
    </button>
  );
};

export default PrintCVButton;
