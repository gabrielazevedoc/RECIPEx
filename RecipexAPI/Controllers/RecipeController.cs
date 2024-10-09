using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipexAPI.Data;
using RecipexAPI.Models;

[Route("api/[controller]")]
[ApiController]
public class RecipeController : ControllerBase
{
    private readonly RecipexContext _context;

    public RecipeController(RecipexContext context)
    {
        _context = context;
    }

    [HttpGet("category/{category}")]
    public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipesByCategory(string category)
    {
       
        var recipes = await _context.Recipes
                                    .Where(r => r.Category.Equals(category, StringComparison.OrdinalIgnoreCase))
                                    .ToListAsync();

        if (!recipes.Any())
        {
            return NotFound();
        }

        return recipes;
    }

    // GET: api/Recipe
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
    {
        return await _context.Recipes.ToListAsync();
    }

    // GET: api/Recipe/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Recipe>> GetRecipe(int id)
    {
        var recipe = await _context.Recipes.FindAsync(id);

        if (recipe == null)
        {
            return NotFound();
        }

        return recipe;
    }

    // POST: api/Recipe
    [HttpPost]
    public async Task<ActionResult<Recipe>> PostRecipe(Recipe recipe)
    {
        recipe.CreatedAt = DateTime.Now;
        _context.Recipes.Add(recipe);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetRecipe), new { id = recipe.Id }, recipe);
    }

    // PUT: api/Recipe/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutRecipe(int id, Recipe recipe)
    {
        if (id != recipe.Id)
        {
            return BadRequest();
        }

        _context.Entry(recipe).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!RecipeExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // DELETE: api/Recipe/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRecipe(int id)
    {
        var recipe = await _context.Recipes.FindAsync(id);
        if (recipe == null)
        {
            return NotFound();
        }

        _context.Recipes.Remove(recipe);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool RecipeExists(int id)
    {
        return _context.Recipes.Any(e => e.Id == id);
    }
}