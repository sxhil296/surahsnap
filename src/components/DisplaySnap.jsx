import React from "react";
import DownloadButton from "./DownloadButton";

const DisplaySnap = ({ ayah }) => {
  return (
    <div>
      <div
        id="ayah-snap"
        className="mt-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600  p-4 flex justify-center items-center flex-col rounded-md  w-full max-w-md min-h-[200px] md:min-h-[250px]"
      >
        {/* Arabic Ayah */}
        <p className="text-center text-white text-2xl mb-4 pt-6" dir="rtl">
          {ayah.arabic}
        </p>

        {/* English Translation */}
        <p className="text-center text-white text-lg mb-2 font-medium">
          {ayah.translation}
        </p>

        {/* Surah Name and Ayah Number */}
        <p className="text-sm text-gray-200 text-center pb-4">
          Quran | {ayah.surahNumber} : {ayah.ayahNumber}
        </p>
      </div>
      <DownloadButton targetId="ayah-snap" />
    </div>
  );
};

export default DisplaySnap;
