
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries
{
    public class GetActivityList
    { // receives a Query req and returns a List<Activity> from the handler
        public class Query: IRequest<List<Activity>>{}

        public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>> //b/c we are using an interface we need to implement methods
        {
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}