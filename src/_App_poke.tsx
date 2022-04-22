import { ChangeEvent, useEffect, useState } from "react";
import { Pokemon } from "./types/Pokemon";

const App = () => {
  const [poke, setPoke] = useState<Pokemon[]>([]);
  // state loading false
  const [load, setLoading] = useState(false);

  useEffect(() => {
    loadPoke();
  }, []);

  const loadPoke = async () => {
    try {
      setLoading(true);
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
      let json = await response.json();
      setLoading(false);
      setPoke(json.results);
    } catch (error) {
      setLoading(false);
      alert("Erro! tente mais tarde");
      console.error(error);
    }
  };

  const loadPokeMore = () => {
    // let namePokemon = document.querySelector('this');
    // let urlHabilites = `https://pokeapi.co/api/v2/${namePokemon}`;
    // console.log(namePokemon, "ooooxi");
  };

  return (
    <div>
      <button className="block bg-blue-400 p-5" onClick={loadPoke}>
        Carregar Pokemon
      </button>

      {load && <div>Carregando</div>}

      {!load && (
        <>
          <p>Total de Pokemons: {poke.length}</p>
          <div className="grid grid-cols-6 gap-3">
            {poke.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center classpoke"
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${++index}.png`}
                  className="w-32 block"
                />
                {item.name}
                <button className="bg-blue-400 p-5" onClick={loadPokeMore}>
                  Ver mais
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;

// https://pokeapi.co/api/v2/pokemon/
