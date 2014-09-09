using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ufostranky.Models
{
    public class ProgrammingLanguage
    {
        public int ID { get; set; }

        [Required, StringLength(100)]
        public string Name { get; set; }

        [DataType(DataType.Date), Display(Name = "Appeared")]
        [DisplayFormat(DataFormatString = "{0:dd.MM.yyyy}", ApplyFormatInEditMode = true)]
        public string Appeared { get; set; }

        [Display(Name = "Creator(s)")]
        public string[] Creators { get; set; }

        public string Developer { get; set; }

        [Display(Name = "Latest Version"), StringLength(50)]
        public string LatestVersion { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd.MM.yyyy}", ApplyFormatInEditMode = true)]
        public DateTime LatestVersionDate { get; set; }

        [Display(Name = "Code Sample")]
        public string CodeSample { get; set; }

        [Display(Name = "")]
        public string UsedIn { get; set; }

        [Required(ErrorMessage = "TypingDiscipline Required")]
        public ICollection<TypingDiscipline> TypingDisciplines { get; set; }

        [Required(ErrorMessage = "Paradigm Required")]
        public ICollection<Paradigm> Paradigms { get; set; }

        public ICollection<IDE> IDEs { get; set; } 

        public ICollection<ProgrammingLanguage> InfluencedBy { get; set; }
        public ICollection<ProgrammingLanguage> Influenced { get; set; }
    }
}