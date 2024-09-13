import React, { useState } from "react";

const InputForm = () => {
  const [surahNo, setSurahNo] = useState("");
  const [ayahNo, setAyahNo] = useState("");
  const [error, setError] = useState(null);
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
      <button className="px-4 py-2 rounded-sm bg-white text-black font-medium mt-4">
        Generate Snap
      </button>
    </div>
  );
};

export default InputForm;
