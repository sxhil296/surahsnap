import React from "react";
import html2canvas from "html2canvas";

const DownloadButton = ({ targetId }) => {
  const handleDownload = async () => {
    const element = document.getElementById(targetId);
    if (element) {
      try {
        const canvas = await html2canvas(element);
        const dataUrl = canvas.toDataURL("image/png");

        // Create a link element and simulate a click to download the image
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "ayah-snap.png";
        link.click();
      } catch (error) {
        console.error("Error capturing image", error);
      }
    } else {
      console.error("Element not found");
    }
  };

  return (
    <div className="flex justify-center">
        <button
      className="px-4 py-2 rounded-[4px] shadow-md bg-teal-600  hover:bg-teal-700 text-white font-medium mt-6"
      onClick={handleDownload}
    >
      Download
    </button>
    </div>
  );
};

export default DownloadButton;
