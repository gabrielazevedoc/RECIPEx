import axios from 'axios';

const API_URL = 'http://localhost:5000/api/recipe'; // Altere para o endereço da sua API

// Funções de consumo da API
const RecipeService = {
    getAllRecipes: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    getRecipeById: async (id) => {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    },

    createRecipe: async (recipe) => {
        const response = await axios.post(API_URL, recipe);
        return response.data;
    },

    updateRecipe: async (id, recipe) => {
        const response = await axios.put(`${API_URL}/${id}`, recipe);
        return response.data;
    },

    deleteRecipe: async (id) => {
        await axios.delete(`${API_URL}/${id}`);
    }
};

export default RecipeService;
