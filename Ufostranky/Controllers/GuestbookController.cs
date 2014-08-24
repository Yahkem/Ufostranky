﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using Ufostranky.Models;

namespace Ufostranky.Controllers
{
    public class GuestbookController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Guestbook
        public ActionResult Index()
        {
            List<Guestbook> list = db.Guestbook.ToList();
            list.Reverse();
            return View(list);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index([Bind(Include = "Id,Author,Text")] Guestbook guestbook)
        {
            if (ModelState.IsValid)
            {
                guestbook.Created = DateTime.Now;
                if (guestbook.Author == null)
                    guestbook.Author = "Smradlavý anonym";
                db.Guestbook.Add(guestbook);
                db.SaveChanges();
            }

            return Index();
        }

        // GET: Guestbook/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Guestbook guestbook = db.Guestbook.Find(id);
            if (guestbook == null)
            {
                return HttpNotFound();
            }
            return View(guestbook);
        }

        // POST: Guestbook/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Guestbook guestbook = db.Guestbook.Find(id);
            db.Guestbook.Remove(guestbook);
            db.SaveChanges();
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
