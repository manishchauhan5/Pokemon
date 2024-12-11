import {useEffect, useState} from "react";
import { Pokemoncard } from "./Pokemoncard";
export const Pokemon = () =>{
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const API ="https://pokeapi.co/api/v2/pokemon?limit=220";

    const fetchPokemon = async() =>{
        try{
            const res = await fetch(API)
            const data = await res.json();
            // console.log(data);


            const detailedPokemonData = data.results.map(async(curPokemon) =>{
            const res = await fetch(curPokemon.url);
            const data = await res.json();
            return data;
            });
            // console.log(detailedPokemonData);
            const detailedResponses = await Promise.all(detailedPokemonData);
            console.log(detailedResponses);
            setPokemon(detailedResponses);
            setLoading(false);

        } catch(error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        fetchPokemon();
    },[]);

    //search functionality

    const searchData = pokemon.filter((curPokemon) =>
         curPokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    
    if(loading){
        return(
            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
        );
    }

    if(error){
        return(
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold text-red-500">{error.message}</h1>
            </div>
        );
    }



    return(
    <>
        <section className="p-4 flex flex-col items-center text-center">
            <header className="text-center mb-4">
                <h1 className="text-3xl font-bold">Let's Catch Pokemon</h1>
            </header>
            <div>
                <input 
                type="text" 
                placeholder="Search Pokemon" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64 px-4 py-2 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out mb-5"/>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 px-12 md:px-24">
                    {
                        // pokemon.map((curPokemon) =>{
                            searchData.map((curPokemon) =>{
                            return(
                                <Pokemoncard 
                                key={curPokemon.id} pokemonData={curPokemon}
                                />
                            )
                        })
                    }
            </div>
        </section>        
    </>
    );
};