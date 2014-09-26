namespace Ufostranky.Migrations
{
    using System.Data.Entity.Migrations;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Ufostranky.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.

            UserManager<ApplicationUser> manager = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(
                    new ApplicationDbContext()));

            for (byte i = 0; i < 5; ++i)
            {
                ApplicationUser user = new ApplicationUser
                {
                    UserName = "user" + i.ToString(),
                    Email = "user" + i.ToString() + @"@user.com"
                };

                manager.Create(user, string.Format("Password{0}", i.ToString()));
            }
        }
    }
}
