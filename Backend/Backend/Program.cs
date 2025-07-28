using Backend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// services
builder.Services.AddControllers();

string connectionString = builder.Configuration.GetConnectionString("Default") ?? throw new ArgumentNullException("connectionString is null");

builder.Services.AddDbContext<AppDbContext>(op => op.UseSqlite(connectionString));

var app = builder.Build();

// middlewares
app.MapControllers();

app.Run();
