using System;

namespace Angular2Mvc.Models
{
    public class Skill
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime YearFrom { get; set; }
        public DateTime YearTo { get; set; }
        public string Version { get; set; }
    }
}