import { useState } from "react";
import { ChevronRight, RectangleHorizontal } from "lucide-react";

function HomePage() {
  const [colorCount, setColorCount] = useState(4);

  const colorBlock = [...Array(6)].map((item, index) => {
    if (index < colorCount) {
      return (
        <div key={index}>
          <RectangleHorizontal
            size={16}
            color="#04f500"
            strokeWidth={2.75}
            absoluteStrokeWidth
          />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <RectangleHorizontal
            size={16}
            color="#000000"
            strokeWidth={3}
            absoluteStrokeWidth
          />
        </div>
      );
    }
  });

  const handleClick = () => {
    alert("Testing alert");
  };

  return (
    <div className="font-sans p-4 m-10 border w-80 shadow-2xl rounded-xl text-wrap">
      <div className="text-left mb-3">Testing The Stress</div>
      <div className="font-bold mb-3">Stress Level Below</div>
      <div className="flex justify-between items-center">
        <div className="flex">{colorBlock}</div>
        <span>Stress Level: {colorCount}</span>
      </div>
      <div className="text-right">
        <button
          onClick={handleClick}
          className="inline-flex items-center text-blue-800 cursor-pointer font-bold mt-3"
        >
          Button Testing As Alert 
          <div className="ml-1">
            <ChevronRight size={20} color="#1a53ff" strokeWidth={1.75} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
