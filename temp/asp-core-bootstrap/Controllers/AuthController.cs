using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using trezo_asp_mvc.Models;

namespace trezo_asp_mvc.Controllers;

public class AuthController(ILogger<AuthController> logger) : Controller
{
    private readonly ILogger<AuthController> _logger = logger;

    public IActionResult Login()
    {
        return View();
    }

    public IActionResult Register()
    {
        return View();
    }
    public IActionResult Forget_Password()
    {
        return View();
    }

    public IActionResult Reset_Password()
    {
        return View();
    }
    public IActionResult Lock_Screen()
    {
        return View();
    }
    public IActionResult Logout()
    {
        return View();
    }
    public IActionResult Confirm_Mail()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
