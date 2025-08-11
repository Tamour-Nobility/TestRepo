using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using trezo_asp_mvc.Models;

namespace trezo_asp_mvc.Controllers;

public class TicketsController(ILogger<TicketsController> logger) : Controller
{
    private readonly ILogger<TicketsController> _logger = logger;

    public IActionResult Index()
    {
        return View();
    }
    public IActionResult Details()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
