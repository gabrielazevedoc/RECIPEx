using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RecipexAPI.Models;

namespace RecipexAPI.Data
{
    public class RecipexContext : DbContext
    {
         public RecipexContext(DbContextOptions<RecipexContext> options)
            : base(options){}
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Recipe>()
                .Property(r => r.Id)
                .ValueGeneratedOnAdd();  // Configuração para auto incremento
        }

            
        public DbSet<Recipe> Recipes { get; set; }
    }
}