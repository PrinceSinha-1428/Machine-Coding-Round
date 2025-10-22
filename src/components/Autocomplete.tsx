import { useEffect, useState } from "react";


interface Recipe {
  id: number;
  name: string;
  ingredients?: string[];
  instructions?: string[];
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  servings?: number;
  difficulty?: string;
  cuisine?: string;
  caloriesPerServing?: number;
  tags?: string[];
  userId?: number;
  image?: string;
  rating?: number;
  reviewCount?: number;
  mealType?: string[];
}

const Autocomplete = () => {

  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Recipe[]>([]);
  const [show, setShow] = useState<boolean>(false);

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
    const data = await response.json();
    setResults(data?.recipes);
  }

  useEffect(() => {
   const timer = setTimeout(fetchData,300) ;
   return () => {
    clearTimeout(timer);
   }
  },[search])

  return (
    <div className="flex min-h-screen justify-center p-10 ">
      <div className="flex flex-col items-center  max-w-full">
        <h1 className="text-4xl text-bold mb-5">Autocomplete Search Bar</h1>
        <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        type="text" 
        className="border border-black p-2  w-[500px] outline-none" 
        placeholder="Search.." />
        { show && <div className="flex flex-col space-y-1 text-left border border-black w-full p-2 h-[500px] overflow-y-scroll mt-2 m-auto">
        {results && results.map((recipe) => (
          <span className="hover:bg-gray-200 p-2 cursor-pointer "  key={recipe.id}>{recipe.name}</span>
        ))}
        </div>}
      </div>
    </div>
  );
}

export default Autocomplete;
