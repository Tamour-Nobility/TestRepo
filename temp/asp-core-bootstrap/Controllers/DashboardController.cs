using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using trezo_asp_mvc.Models;

namespace trezo_asp_mvc.Controllers;

public class DashboardController(ILogger<DashboardController> logger) : Controller
{
    private readonly ILogger<DashboardController> _logger = logger;

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult CRM()
    {
        return View();
    }
    public IActionResult Project_Management()
    {
        return View();
    }

    public IActionResult LMS()
    {
        return View();
    }
    public IActionResult Help_Desk()
    {
        return View();
    }
    public IActionResult Analytics()
    {
        return View();
    }
    public IActionResult Crypto()
    {
        return View();
    }
    public IActionResult Sales()
    {
        return View();
    }
    public IActionResult Hospital()
    {
        return View();
    }
    public IActionResult Marketing()
    {
        return View();
    }
    public IActionResult NFT()
    {
        return View();
    }
    public IActionResult Saas()
    {
        return View();
    }
    public IActionResult Real_Estate()
    {
        return View();
    }
    public IActionResult Shipment()
    {
        return View();
    }
    public IActionResult Finance()
    {
        return View();
    }
    public IActionResult HRM()
    {
        return View();
    }
    public IActionResult School()
    {
        return View();
    }
    public IActionResult Call_Center()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
