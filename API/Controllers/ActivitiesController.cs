
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController(AppDbContext context, IMediator mediator) : BaseApiController
    {
        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await mediator.Send(new GetActivityList.Query());
        }

        [HttpGet("{id}")]  //api/activities/fdfkd
        public async Task<ActionResult<Activity>> GetActivities(Guid id){
            return await context.Activities.FindAsync(id);
        }
    }   
}