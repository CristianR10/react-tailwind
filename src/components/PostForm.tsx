import { useState, ChangeEvent } from "react";

type Props = {
  onAdd: (title: string, body: string) => void;
};

export const PostForm = ({ onAdd }: Props) => {
  const [addTitleText, setAddTitleText] = useState("");
  const [addBodyText, setAddBodyText] = useState("");

  const handleAddTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(event.target.value);
  };

  const handleAddBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(event.target.value);
  };

  const handleAddClick = async () => {
    if (addTitleText && addBodyText) {
      onAdd(addTitleText, addBodyText);
    } else {
      alert("Preencha os dados");
    }
  };

  return (
    <fieldset className="border-2 p-5">
      <legend>Adicionar Novo Post</legend>

      <input
        value={addTitleText}
        onChange={handleAddTitleChange}
        className="block border"
        type="text"
        placeholder="Digite um título"
      />
      <textarea
        onChange={handleAddBody}
        value={addBodyText}
        className="block border"
      ></textarea>
      <button className="block border" onClick={handleAddClick}>
        {" "}
        Adicionar
      </button>
    </fieldset>
  );
};
