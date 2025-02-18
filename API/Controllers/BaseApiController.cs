using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{   

    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator? _mediator;
        
        //The class within the foler has access to the class (ei, ActivitiesController)
        protected IMediator Mediator => _mediator??= HttpContext.RequestServices.GetService<IMediator>() 
            ?? throw new InvalidOperationException("IMediator service is unavailable");  //??= if this is null, we assign whatever is next to it
    }
}