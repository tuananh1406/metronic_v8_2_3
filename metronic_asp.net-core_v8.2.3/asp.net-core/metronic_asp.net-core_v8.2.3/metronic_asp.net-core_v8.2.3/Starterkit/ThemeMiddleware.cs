using Starterkit._keenthemes;
using Starterkit._keenthemes.libs;
    
public class ThemeMiddleware {
    private readonly RequestDelegate _next;

    private readonly ILogger<ThemeMiddleware> _logger;

    public ThemeMiddleware(RequestDelegate next, ILogger<ThemeMiddleware> logger)
    {
        _logger = logger;
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context, IKTTheme theme, IKTBootstrapBase ktBootstrapBase)
    {
        ktBootstrapBase.Init(theme);

        await _next(context);
    }
}

public static class ThemeMiddlewareExtensions
{
    public static IApplicationBuilder UseThemeMiddleware(
        this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ThemeMiddleware>();
    }
}
