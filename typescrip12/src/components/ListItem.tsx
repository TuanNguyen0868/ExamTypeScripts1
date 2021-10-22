import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Picture from "../common/image/picture1.jpg";

function createDataItem(id: number, name: string, title: string) {
  return { id, name, title };
}

const dataItems = [
  createDataItem(1, "Lizard 1", "Title 1"),
  createDataItem(2, "Lizard 2", "Title 2"),
  createDataItem(3, "Lizard 3", "Title 3"),
  createDataItem(4, "Lizard 4", "Title 4"),
];

export default function ListItem() {
 
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        overflow: "hidden",
        background:
          "radial-gradient(at center center, rgb(72 76 122) 1%, rgba(62, 99, 249, 0) 100%)",
        transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
      }}
    >
      <ul style={{ display: "flex" }}>
        {dataItems.map((item) => (
          <li key={item.id} style={{ padding: 10, listStyleType: "none" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Picture}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
