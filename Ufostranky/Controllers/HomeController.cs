using System.Web.Mvc;

namespace Ufostranky.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult Index()
        {
            return View();
        }
    }
}