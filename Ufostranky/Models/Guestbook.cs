using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web.Mvc;

namespace Ufostranky.Models
{
    [Table("Guestbook")]
    public class Guestbook
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Autor")]
        [AllowHtml]
        [StringLength(75, ErrorMessage = "Jestli máš jméno delší, než 75 znaků, jdi <a href='https://answers.yahoo.com/question/index?qid=20090620204026AAwdHzf'>sem</a>")]
        public string Author { get; set; }

        [Required(ErrorMessage = "Musíte zadat text příspěvku")]
        [AllowHtml]
        [StringLength(1000, ErrorMessage = "Ty se opovažuješ zadat text delší, než 1000 znaků?!")]
        public string Text { get; set; }

        [Display(Name = "Vytvořeno: ")]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:dd.MM.yyyy HH:mm:ss}")]
        public DateTime Created { get; set; }
    }
}