namespace Domain
{
    public class Activity
    {   
        //We are using Entity framework - Id properties are called guids (specifically needs to be called Id as a primary key)
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string Title {get; set; }

        public DateTime Date { get; set; }

        public string Description { get; set; }

        public string Category { get; set; }

        public string City { get; set; }

        public string Venue { get; set; }
    }
}