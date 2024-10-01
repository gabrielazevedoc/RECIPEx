using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipexAPI.Models
{
    public class Recipe
    {
        public Recipe(int id, string name, string category, string ingredients, string description)
        {
            Id = id;
            Name = name;
            Category = category;
            Ingredients = ingredients;
            Description = description;
            CreatedAt = DateTime.Now;
        }

        public int Id {get; set;}
        public string Name {get; set;}
        public string Category {get; set;}
        public string Ingredients {get; set;}
        public string Description {get; set;}
        public DateTime CreatedAt {get; set;}

    }
}