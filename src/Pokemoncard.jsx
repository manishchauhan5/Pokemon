export const Pokemoncard = ({pokemonData}) =>{
    return(
        <>
        <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex flex-col items-center w-auto mb-4">
            <figure className="flex flex-col items-center rounded-full bg-opacity-30 transition-transform duration-300 transform hover:scale-105 md:w-36 lg:h-36 w-56 h-32">
                <img 
                src={pokemonData.sprites.other.dream_world.front_default} 
                alt={pokemonData.name}
                 className="h-36 p-4"
                />
            </figure>

            <h2 className="my-2 text-lg font-semibold capitalize">{pokemonData.name}</h2>

            <div>
                <p className="bg-[#48e6dc] rounded-xl py-0.5 md:px-5 px-2 text-sm">
                    {
                       pokemonData.types.map((curType) => curType.type.name).join(",")
                    }
                </p>
            </div>

            {/* for data */}
            <div className="grid grid-cols-3 md:text-sm text-xs justify-items-center items-center mt-4 w-full px-3 md:px-2">
                <p>
                    <span className="font-bold">Height: </span>{pokemonData.height}
                </p>
                <p>
                    <span className="font-bold">Weight: </span>{pokemonData.weight}
                </p>
                <p>
                    <span className="font-bold">Speed: </span>{pokemonData.stats[5].base_stat}
                </p>
            </div> 

            <div className="grid grid-cols-3 md:text-sm text-xs justify-items-center items-center mt-3 md:my-4 w-full px-3 md:px-2">
                <div className="flex flex-col text-center">
                    <p>{pokemonData.base_experience}</p>
                    <span className="font-bold">Experiance:</span>
                </div>
                <div className="flex flex-col text-center">
                <p>{pokemonData.stats[1].base_stat}</p>
                <span className="font-bold">Attack:</span>
                </div>
                <div className="flex flex-col text-center">
                <p>
                    {pokemonData.abilities
                    .map((abilityInfo) => abilityInfo.ability.name)
                    .slice(0,1)
                    .join(", ")}
                </p>
                <span className="font-bold">Abilities</span>
                </div>
            </div>

        </div>

    
        </>
    );
};