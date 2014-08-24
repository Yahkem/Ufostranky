using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Ufostranky.Startup))]
namespace Ufostranky
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
