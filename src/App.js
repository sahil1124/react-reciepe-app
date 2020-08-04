import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
    const APP_ID = "a5ebd362";

    const APP_KEY = "19093f117e876046558459edc4af4e4f	";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("banana");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async event => {
        // event.preventDefault();
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updatesSearch = event => {
        //  event.preventDefault()
        setSearch(event.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    };
    return ( <
        div className = "App" >
        <
        form className = "search-form"
        onSubmit = { getSearch } >
        <
        input className = "search-bar"
        type = "text"
        name = "search"
        value = { search }
        onChange = { updatesSearch }
        /> <
        button className = "search-button btn btn-danger btn-lg"
        type = "submit" >
        Search <
        /button> <
        /form> <
        div className = "recipes" > {
            recipes.map(recipe => ( <
                Recipe key = { recipe.recipe.label }
                title = { recipe.recipe.label }
                calories = { recipe.recipe.calories }
                image = { recipe.recipe.image }
                ingredients = { recipe.recipe.ingredients }
                />
            ))
        } <
        /div> <
        /div>
    );
};

export default App;