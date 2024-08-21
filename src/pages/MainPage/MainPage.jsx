import { useState } from "react";
import InputHeader from "components/InputHeader";
import "./MainPage.scss";

const MainPage = () => {
  const [inputBlocks, setInputBlocks] = useState([{ id: 0 }]);

  const handleAddMore = () => {
    if (inputBlocks.length < 5) {
      setInputBlocks([...inputBlocks, { id: Date.now() }]);
    } else {
      window.alert(
        "Для додавання видаліть блок, оскільки максимальна кількість блоків — 5."
      );
    }
  };

  return (
    <>
      {inputBlocks.map((block, index) => (
        <div key={block.id}>
          {index > 0 && <div className="page-container-line" />}

          <InputHeader
            block={block}
            inputBlocks={inputBlocks}
            setInputBlocks={setInputBlocks}
          />
        </div>
      ))}

      <button
        className="add-more-button"
        onClick={handleAddMore}
      >
        +
      </button>
    </>
  );
};

export default MainPage;
