using System.Web.Mvc;

namespace Ufostranky.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}