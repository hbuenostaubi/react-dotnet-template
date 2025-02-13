import {Typography, List, ListItem, ListItemText} from "@mui/material";
import {useEffect, useState } from "react";
import axios from "axios";


function App() {
  // We expect an array within the activities variable
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(res=> setActivities(res.data))

    return () => { }
  }, []);

  return (
    <>
      <Typography variant="h4">Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))
        }
      </List>
    </>
  )
}

export default App
