using System.Web.Optimization;

namespace Ufostranky
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/everypage").Include(
                        "~/Scripts/jquery-{version}.min.js",
                        "~/Scripts/modernizr-*",
                        "~/Scripts/respond.min.js",
                        "~/Scripts/pause.js",
                        "~/Scripts/script.js",
                        "~/Scripts/jquery-ui-{version}.min.js",
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/guestbook").Include("~/Scripts/guestbook.js"));

            bundles.Add(new ScriptBundle("~/bundles/squareStuff").Include("~/Scripts/squareStuff.js"));

            bundles.Add(new ScriptBundle("~/bundles/Morse").Include("~/Scripts/Morse.js"));

            // STYLES
            // tohle asi neni dobre
            // bundles.Add(new StyleBundle("~/Content/datepicker").Include("~/Content/themes/base/datepicker.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/Site.css"));

            bundles.Add(new StyleBundle("~/Content/guestbook").Include("~/Content/guestbook.css"));

            bundles.Add(new StyleBundle("~/Content/squareStuff").Include("~/Content/squareStuff.css"));

            bundles.Add(new StyleBundle("~/Content/Morse").Include("~/Content/Morse.css"));

            bundles.Add(new StyleBundle("~/Content/ProgrammingLanguage").Include("~/Content/ProgrammingLanguage.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = true;
        }
    }
}
