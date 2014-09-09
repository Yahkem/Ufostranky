using System.ComponentModel.DataAnnotations;

namespace Ufostranky.Models
{
    public class OS
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "Required"), Display(Name = "OS")]
        [StringLength(50, ErrorMessage = "Max 50")]
        public string Name { get; set; }
    }
}