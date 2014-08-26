using System.Web.Mvc;
using Ufostranky.Models;

namespace Ufostranky.Controllers
{
    public class SquareShitController : Controller
    {
        // GET: SquareShit
        public ActionResult Index()
        {
            SquareShit squares = new SquareShit();
            squares.MakePositions();
            return View(squares);
        }
    }
}