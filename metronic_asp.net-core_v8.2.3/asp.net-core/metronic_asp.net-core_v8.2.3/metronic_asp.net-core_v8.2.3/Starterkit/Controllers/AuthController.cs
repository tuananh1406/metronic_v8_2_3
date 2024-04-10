using Microsoft.AspNetCore.Mvc;
using Starterkit._keenthemes.libs;

namespace Starterkit.Controllers;

public class AuthController : Controller
{
    private readonly ILogger<DashboardsController> _logger;
    private readonly IKTTheme _theme;

    public AuthController(ILogger<DashboardsController> logger, IKTTheme theme)
    {
        _logger = logger;
        _theme = theme;
    }

    [HttpGet("/signin")]
    public IActionResult SignIn()
    {
        return View(_theme.GetPageView("Auth", "SignIn.cshtml"));
    }

    [HttpGet("/signup")]
    public IActionResult SignUp()
    {
        return View(_theme.GetPageView("Auth", "SignUp.cshtml"));
    }

    [HttpGet("/reset-password")]
    public IActionResult ResetPassword()
    {
        return View(_theme.GetPageView("Auth", "ResetPassword.cshtml"));
    }

    [HttpGet("/new-password")]
    public IActionResult NewPassword()
    {
        return View(_theme.GetPageView("Auth", "NewPassword.cshtml"));
    }    
}
