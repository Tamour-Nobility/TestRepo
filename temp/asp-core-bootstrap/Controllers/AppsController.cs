using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using trezo_asp_mvc.Models;

namespace trezo_asp_mvc.Controllers;

public class AppsController(ILogger<AppsController> logger) : Controller
{
    private readonly ILogger<AppsController> _logger = logger;

    public IActionResult Calendar()
    {
        return View();
    }
    public IActionResult TO_DO_LIST()
    {
        return View();
    }
    public IActionResult Contacts()
    {
        return View();
    }
    public IActionResult Chat()
    {
        return View();
    }
    public IActionResult Inbox()
    {
        return View();
    }
    public IActionResult Compose()
    {
        return View();
    }
    public IActionResult Read_Email()
    {
        return View();
    }
    public IActionResult Snoozed()
    {
        return View();
    }
    public IActionResult Draft()
    {
        return View();
    }
    public IActionResult Sent_Mail()
    {
        return View();
    }
    public IActionResult Trash_Email()
    {
        return View();
    }
    public IActionResult Spam()
    {
        return View();
    }
    public IActionResult Starred()
    {
        return View();
    }
    public IActionResult Important()
    {
        return View();
    }
    public IActionResult Kanban_Board()
    {
        return View();
    }
    public IActionResult File_Manager()
    {
        return View();
    }
    public IActionResult Assets()
    {
        return View();
    }
    public IActionResult Projects()
    {
        return View();
    }
    public IActionResult Personal()
    {
        return View();
    }
    public IActionResult Applications()
    {
        return View();
    }
    public IActionResult Documents()
    {
        return View();
    }
    public IActionResult Media()
    {
        return View();
    }
    public IActionResult Recents()
    {
        return View();
    }
    public IActionResult Drive_Important()
    {
        return View();
    }
    public IActionResult Drive_Spam()
    {
        return View();
    }
    public IActionResult Drive_Trash()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
