// src/components/CadastroReceita.js
import React, { useState } from 'react';
import './RecipeForm.scss';

import RecipeService from '../service/RecipeService'

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    ingredients: '',
    description: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples
    if (!formData.name || !formData.category || !formData.ingredients || !formData.description) {
      setError('Por favor, preencha todos os campos.');
      return;
    }


    try{
      await RecipeService.createRecipe(formData)
      setError('');
      setSuccess('Receita cadastrada com sucesso')

      setFormData({
        name: '',
        category: '',
        ingredients: '',
        description: '',
      })

    }catch(error){
      
      setError('Erro ao cadastrar receita');
      setSuccess(null);
    }

    
    console.log('Dados do formulário enviados:', formData);

  };

  return (
    <form className="cadastro-receita-form" onSubmit={handleSubmit}>
      <h2>Cadastrar receita</h2>
      <p>Por favor, preencha todas as informações:</p>

      <label htmlFor="name">Nome da receita</label>
      <input
        type="text"
        name="name"
        placeholder="Digite o nome"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="category">Categoria</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Escolha a categoria</option>
        <option value="carnes">Carnes</option>
        <option value="aves">Aves</option>
        <option value="peixes">Peixes</option>
        <option value="vegetais">Vegetais</option>
        <option value="sobremesa">Sobremesas</option>
      </select>

      <label htmlFor="ingredients">Ingredientes</label>
      <textarea
        name="ingredients"
        placeholder="Digite os ingredientes e quantidades"
        value={formData.ingredients}
        onChange={handleChange}
        required
      ></textarea>

      <label htmlFor="description">Modo de preparo</label>
      <textarea
        name="description"
        placeholder="Descrição"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default RecipeForm;
