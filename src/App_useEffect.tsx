import { ChangeEvent, useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${name} ${lastName}`);
  }, [name, lastName]);

  const handleNameClick = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleLastNameClick = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Digite seu Nome"
        value={name}
        onChange={handleNameClick}
      />
      <input
        type="text"
        placeholder="Digite seu Sobre Nome"
        value={lastName}
        onChange={handleLastNameClick}
      />
      <p>{fullName}</p>
    </div>
  );
};

export default App;
