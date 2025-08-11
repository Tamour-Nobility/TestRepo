using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using trezo_asp_mvc.Models;

namespace trezo_asp_mvc.Controllers;

public class HomeController(ILogger<HomeController> logger) : Controller
{
    private readonly ILogger<HomeController> _logger = logger;

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }
    public IActionResult Contact()
    {
        return View();
    }

    public IActionResult Features()
    {
        return View();
    }
    public IActionResult Our_team()
    {
        return View();
    }
    public IActionResult Faqs()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
