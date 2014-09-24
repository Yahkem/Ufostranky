using System.ComponentModel.DataAnnotations;

namespace Ufostranky.Models
{
    public class IDE : IName
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "Required"), Display(Name = "IDE")]
        [StringLength(100, ErrorMessage = "Max 100")]
        public string Name { get; set; }
    }
}