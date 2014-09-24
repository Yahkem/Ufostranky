using System.ComponentModel.DataAnnotations;

namespace Ufostranky.Models
{
    public class Paradigm : IName
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "Required"), Display(Name = "Paradigm")]
        [StringLength(50, ErrorMessage = "Max 50")]
        public string Name { get; set; }
    }
}