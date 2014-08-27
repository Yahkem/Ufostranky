using System.Web.Mvc;
using Ufostranky.Models;

namespace Ufostranky.Controllers
{
    public class SquareStuffController : Controller
    {
        // GET: SquareStuff
        public ActionResult Index()
        {
            SquareStuff squares = new SquareStuff();

            return View(squares);
        }
    }
}