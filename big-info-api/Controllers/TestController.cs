using Microsoft.AspNetCore.Mvc;

namespace big_info_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Index()
        {
            return new string[] { "value 1", "value 2" };
        }
    }
}
