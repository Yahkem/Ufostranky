using System.ComponentModel.DataAnnotations;

namespace Ufostranky.Models
{
    public class TypingDiscipline : IName
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "Required"), Display(Name = "Typing Discipline")]
        [StringLength(50, ErrorMessage = "Max 50")]
        public string Name { get; set; }
    }
}