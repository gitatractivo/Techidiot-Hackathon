import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import { Link } from "react-router-dom";

export default function MediaCard({ dataSet }) {
  return (
    <Card sx={{ maxWidth: 345 ,marginBottom: "20px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://robohash.org/${dataSet.name}.png?size=620x350`}
        title="green iguana"
      />
      <CardContent>
        <div className="text-center font-bold text-md mb-1">
          {dataSet.major}
        </div>
        <div className="p-2">
          <div className="flex flex-row items-center justify-start w-full gap-x-1">
            <StarIcon></StarIcon>
            <span className="font-bold">Specialization</span>
          </div>
          <div>
            {dataSet.specialization.map((onedata) => (
              <h1>{onedata}</h1>
            ))}
          </div>
        </div>
        <div className="p-2 mt-2">
          <div className="flex flex-row items-center justify-start w-full gap-x-1">
            <EventAvailableOutlinedIcon/>
            <span className="font-bold capitalize">next available date</span>
          </div>
          <p>{dataSet.next_available_date}</p>
        </div>
      </CardContent>
      <CardActions>
        <div className="flex flex-col md:flex-row justify-center w-full items-center gap-x-10 mt-1 px-4 py-2">
          <Button size="small" variant="contained" color="warning">
            <Link to="/profile">View Profile</Link>
          </Button>
          <Button size="small" variant="contained" color="secondary">
            Book Session
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
