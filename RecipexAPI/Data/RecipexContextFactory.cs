using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace RecipexAPI.Data
{
    public class RecipexContextFactory : IDesignTimeDbContextFactory<RecipexContext>
    {
        public RecipexContext CreateDbContext(string[] args)
        {
            // Carregar as configurações do appsettings.json
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var optionsBuilder = new DbContextOptionsBuilder<RecipexContext>();
            
            // Configurar a conexão com o banco de dados
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlServer(connectionString);

            return new RecipexContext(optionsBuilder.Options);
        }
    }
}
