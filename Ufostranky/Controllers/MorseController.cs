using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ufostranky.Controllers
{
    public class MorseController : Controller
    {
        // GET: Morse
        public ViewResult Index()
        {
            return View();
        }
    }
}