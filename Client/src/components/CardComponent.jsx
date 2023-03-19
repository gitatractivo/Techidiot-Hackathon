import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import {Link} from "react-router-dom";


export default function MediaControlCard(props) {
  return (
    <section>
      <Link to="/Login">
      <div className="flex flex-col gap-6 md:flex-row md:gap-4">
        <Card sx={{ minWidth: 275 }}>
          <CardContent className="bg-[#159EEC] text-white">
            <Typography variant="h5" component="div">
              {props.heading}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <div>
                <Link>
                  {props.para}
                  <KeyboardTabIcon></KeyboardTabIcon>
                </Link>
              </div>
            </Typography>
            <Typography className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
              <br />
            </Typography>
            <img src="" alt="" />
          </CardContent>
        </Card>
      </div>
      </Link>
    </section>
  );
}
