
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries
{
    public class GetActivityDetails
    {
        public class Query : IRequest<Activity>
        {
            // takes in a parameter of type string  (nullable reference type: need to notate optional or required)
            public required string Id { get; set; }
        }

        public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
        {
            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities.FindAsync([request.Id], cancellationToken);
                
                if (activity == null) throw new Exception("Activity not found");

                return activity;
            }
        }


    }
}