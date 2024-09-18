import React, { useState } from "react";
import axios from "axios";
import DisplaySnap from "./DisplaySnap";

const InputForm = () => {
  const [surahNo, setSurahNo] = useState("");
  const [ayahNo, setAyahNo] = useState("");
  const [maxAyahs, setMaxAyahs] = useState(null);
  const [ayah, setAyah] = useState(null);
  const [error, setError] = useState({ surah: "", ayah: "" });

  // Surah validation check
  const validateSurah = (surah) => {
    if (surah < 1 || surah > 114) {
      setError((prev) => ({
        ...prev,
        surah: "Surah number must be between 1 and 114",
      }));
      setMaxAyahs(null);
    } else {
      setError((prev) => ({ ...prev, surah: "" }));
      fetchSurahDetails(surah);
    }
  };

  // Ayah validation check
  const validateAyah = (ayah) => {
    if (ayah < 1 || (maxAyahs && ayah > maxAyahs)) {
      setError((prev) => ({
        ...prev,
        ayah: `Ayat number must be between 1 and ${maxAyahs}`,
      }));
    } else {
      setError((prev) => ({ ...prev, ayah: "" }));
    }
  };

  // Fetch Surah details (number of Ayahs)
  const fetchSurahDetails = async (surahNo) => {
    try {
      const response = await axios.get(
        `https://api.alquran.cloud/v1/surah/${surahNo}`
      );
      setMaxAyahs(response.data.data.numberOfAyahs);
    } catch (error) {
      console.error("Error fetching surah details", error);
    }
  };

  // Fetch both Arabic and English translation (en.asad)
  const fetchAyah = async () => {
    try {
      const response = await axios.get(
        `https://api.alquran.cloud/v1/ayah/${surahNo}:${ayahNo}/editions/quran-simple,en.asad`
      );

      console.log(response.data.data);
      const arabicAyah = response.data.data[0]; // Arabic Ayah
      const englishAyah = response.data.data[1]; // English Translation

      setAyah({
        arabic: arabicAyah.text,
        translation: englishAyah.text,
        surahName: englishAyah.surah.englishName,
        surahNumber: englishAyah.surah.number,
        ayahNumber: englishAyah.numberInSurah,
      });
    } catch (error) {
      console.log("Error fetching Ayah", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 w-full max-w-xl">
        {/* Surah Input */}
        <div className="flex-1">
          <input
            type="number"
            placeholder="Surah Number"
            value={surahNo}
            onChange={(e) => {
              const value = e.target.value;
              setSurahNo(value);
              validateSurah(parseInt(value, 10));
            }}
            className="w-full px-4 py-2 rounded-[4px] border border-gray-300 outline-none text-lg"
          />
          {error.surah && (
            <p className="text-red-500 text-sm mt-1">{error.surah}</p>
          )}
        </div>

        {/* Ayah Input */}
        <div className="flex-1">
          <input
            type="number"
            placeholder="Ayah Number"
            value={ayahNo}
            disabled={!maxAyahs}
            onChange={(e) => {
              const value = e.target.value;
              setAyahNo(value);
              validateAyah(parseInt(value, 10));
            }}
            className="w-full px-4 py-2 rounded-[4px] border border-gray-300 outline-none text-lg"
          />
          {error.ayah && (
            <p className="text-red-500 text-sm mt-1">{error.ayah}</p>
          )}
        </div>
      </div>

      {/* Button to Fetch Ayah */}
      <button
        className="w-full max-w-xs md:max-w-sm px-4 py-2 rounded-[4px] bg-teal-600 hover:bg-teal-700 text-white font-medium mt-4 transition-colors"
        onClick={fetchAyah}
        disabled={!surahNo || !ayahNo}
      >
        Generate Snap
      </button>

      {/* Display Ayah (Arabic and Translation) */}
      {ayah && <DisplaySnap ayah={ayah} />}
    </div>
  );
};

export default InputForm;
