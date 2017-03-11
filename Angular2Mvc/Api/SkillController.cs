using Angular2Mvc.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Angular2Mvc.Api
{
    [RoutePrefix("api")]
    public class SkillController : ApiController
    {
        private readonly List<Skill> allSkills;

        public SkillController()
        {
            allSkills = new List<Skill>
            {
                new Skill { Id = 1, Name = ".Net", Version = "4.5", YearFrom = new DateTime(2010,04,01), YearTo = DateTime.Now },
                new Skill { Id = 2, Name = ".MVC", Version = "6.0", YearFrom = new DateTime(2013,09,01), YearTo = DateTime.Now },
                new Skill { Id = 3, Name = "ASP.Net", Version = "4.0", YearFrom = new DateTime(2010,04,01), YearTo = DateTime.Now },
                new Skill { Id = 4, Name = "jQuery", Version = "1.10.2", YearFrom = new DateTime(2010,04,01), YearTo = DateTime.Now },
                new Skill { Id = 5, Name = "Angular", Version = "2.0", YearFrom = new DateTime(2010,04,01), YearTo = DateTime.Now },
                new Skill { Id = 6, Name = "SQL", Version = "2012", YearFrom = new DateTime(2010,04,01), YearTo = DateTime.Now }
            };
        }

        

        [Route("all-skills")]
        public async Task<HttpResponseMessage> GetSkills()
        {
            var response = Request.CreateResponse(HttpStatusCode.OK, await Task.FromResult(allSkills));
            return response;
        }
    }
}
