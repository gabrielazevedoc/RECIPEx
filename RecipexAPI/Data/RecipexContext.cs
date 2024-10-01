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
            : base(options)
        {
        }

        public DbSet<Recipe> Recipes { get; set; }
    }
}