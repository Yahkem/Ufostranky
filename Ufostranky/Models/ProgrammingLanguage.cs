using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ufostranky.Models
{
    public class ProgrammingLanguage : IName
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "Required"), StringLength(100, ErrorMessage = "Max 100 chars")]
        public string Name { get; set; }

        [StringLength(50, ErrorMessage = "Max 50")]
        public string Appeared { get; set; }

        [Display(Name = "Creator(s)"), StringLength(300, ErrorMessage = "Max 300")]
        public string Creators { get; set; }

        [Display(Name = "Current developer"), StringLength(100, ErrorMessage = "Max 100 chars")]
        public string CurrentDeveloper { get; set; }

        [Display(Name = "Latest version"), StringLength(50)]
        public string LatestVersion { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd. MM. yyyy}")]
        [Display(Name = "Date of latest verion")]
        public DateTime? LatestVersionDate { get; set; }

        [StringLength(250)]
        public string Usage { get; set; }

        // M:N
        public virtual ICollection<TypingDiscipline> TypingDisciplines { get; set; }
        public virtual ICollection<Paradigm> Paradigms { get; set; }
        public virtual ICollection<IDE> IDEs { get; set; }
        public virtual ICollection<ProgrammingLanguage> InfluencedBy { get; set; }
        public virtual ICollection<ProgrammingLanguage> Influenced { get; set; }

        // DateDisplay
        public string LatestVersionDateDisplay 
        {
            get
            {
                if (LatestVersionDate.HasValue)
                {
                    string day = LatestVersionDate.Value.Day.ToString();
                    string month = LatestVersionDate.Value.Month.ToString();
                    string year = LatestVersionDate.Value.Year.ToString();

                    return String.Format("{0}. {1}. {2}", day, month, year);
                }
                else
                {
                    return String.Empty;
                }
            }
        }
    }
}