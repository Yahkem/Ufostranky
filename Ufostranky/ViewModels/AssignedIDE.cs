using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ufostranky.ViewModels
{
    public class AssignedIDE : IAssigned
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Assigned { get; set; }
    }
}