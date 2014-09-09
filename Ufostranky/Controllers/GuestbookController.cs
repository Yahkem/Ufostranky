using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using System.Web.Mvc;
using Ufostranky.Models;
using System.Data.Entity;


namespace Ufostranky.Controllers
{
    public class GuestbookController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Guestbook
        public async Task<ViewResult> Index()
        {
            List<Guestbook> list = await db.Guestbook.ToListAsync();
            list.Reverse();
            return View(list);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<RedirectToRouteResult> Index([Bind(Include = "Author,Text")] Guestbook guestbook)
        {
            if (ModelState.IsValid)
            {
                guestbook.Created = DateTime.Now;

                if (guestbook.Author == null)
                    guestbook.Author = "Smradlavý anonym";

                db.Guestbook.Add(guestbook);
                await db.SaveChangesAsync();
            }

            return RedirectToAction("Index");
        }

        public RedirectToRouteResult Create()
        {
            return RedirectToAction("Index");
        }

        // GET: Guestbook/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Guestbook guestbook = await db.Guestbook.FindAsync(id);
            if (guestbook == null)
            {
                return HttpNotFound();
            }
            return View(guestbook);
        }

        // POST: Guestbook/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<RedirectToRouteResult> DeleteConfirmed(int id)
        {
            Guestbook guestbook = await db.Guestbook.FindAsync(id);
            db.Guestbook.Remove(guestbook);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
