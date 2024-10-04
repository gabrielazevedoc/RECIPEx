// src/components/CadastroReceita.js
import React, { useState } from 'react';
import './RecipeForm.scss';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    categoria: '',
    nomeReceita: '',
    ingredientes: '',
    modoPreparo: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!formData.categoria || !formData.nomeReceita || !formData.ingredientes || !formData.modoPreparo) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError('');
    console.log('Dados do formulário enviados:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor
  };

  return (
    <form className="cadastro-receita-form" onSubmit={handleSubmit}>
      <h2>Cadastrar receita</h2>
      <p>Por favor, preencha todas as informações para melhor futuro:</p>

      <label htmlFor="categoria">Categoria</label>
      <select
        name="categoria"
        value={formData.categoria}
        onChange={handleChange}
        required
      >
        <option value="">Escolha a categoria</option>
        <option value="doce">Doce</option>
        <option value="salgado">Salgado</option>
        <option value="bebida">Bebida</option>
      </select>

      <label htmlFor="nomeReceita">Nome da receita</label>
      <input
        type="text"
        name="nomeReceita"
        placeholder="Digite o nome"
        value={formData.nomeReceita}
        onChange={handleChange}
        required
      />

      <label htmlFor="ingredientes">Ingredientes</label>
      <textarea
        name="ingredientes"
        placeholder="Digite os ingredientes e quantidades"
        value={formData.ingredientes}
        onChange={handleChange}
        required
      ></textarea>

      <label htmlFor="modoPreparo">Modo de preparo</label>
      <textarea
        name="modoPreparo"
        placeholder="Descrição"
        value={formData.modoPreparo}
        onChange={handleChange}
        required
      ></textarea>

      {error && <p className="error-message">{error}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default RecipeForm;
