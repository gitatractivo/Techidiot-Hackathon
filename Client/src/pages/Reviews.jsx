import React from "react";
import "../index.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Reviews() {
  return (
    <section className="w-5/6 mx-auto mt-28">
      <div className=" w-11/12 mx-auto flex flex-col justify-center items-center gap-4 mb-10">
        <div className="w-5/12 text-center">
          <h1 style={{ fontSize: 30 }}>Reviews</h1>
        </div>
        <div>
          These quotes represent a few of the many positive reviews that we have
          received for therapists who work with BetterHelp. We don't pay anyone
          to provide their review and they are all made voluntarily. Some
          people's experience receiving therapy with BetterHelp might be
          different. If you would like to review your therapist, please send
          your review to
        </div>
      </div>

      
      <div className="flex flex-col gap-6 md:flex-row md:gap-4">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography> */}
            <Typography variant="h5" component="div">
              Samarth Bagga
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              19.03.23
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
              <br />
            </Typography>
          </CardContent>
          {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography> */}
            <Typography variant="h5" component="div">
              Samarth Bagga
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              19.03.23
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
              <br />
            </Typography>
          </CardContent>
          {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography> */}
            <Typography variant="h5" component="div">
              Samarth Bagga
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              19.03.23
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
              <br />
            </Typography>
          </CardContent>
          {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
      </div>
    </section>
  );
}

export default Reviews;
