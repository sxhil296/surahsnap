import React, { useState } from "react";
import axios from "axios";
const InputForm = () => {
  const [surahNo, setSurahNo] = useState("");
  const [ayahNo, setAyahNo] = useState("");
  const [error, setError] = useState(null);


  //valite input
  

  const fetchAyah = async () => {
    try {
      const response = await axios.get(
        `https://api.alquran.cloud/v1/ayah/${surahNo}:${ayahNo}`
      );
      const ayah = response.data;
      console.log(ayah);
      console.log(ayah.data.surah.numberOfAyahs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  flex-col justify-center items-center mt-6">
      <div className="flex justify-between gap-8">
        <div>
          <input
            type="number"
            placeholder="Surah Number"
            value={surahNo}
            onChange={(e) => setSurahNo(e.target.value)}
            className="px-4 py-2 rounded-sm border border-none outline-none"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Ayah Number"
            value={ayahNo}
            onChange={(e) => setAyahNo(e.target.value)}
            className="px-4 py-2 rounded-sm border border-none outline-none"
          />
        </div>
      </div>
      <button
        className="px-4 py-2 rounded-sm bg-white text-black font-medium mt-4"
        onClick={fetchAyah}
      >
        Generate Snap
      </button>
    </div>
  );
};

export default InputForm;
