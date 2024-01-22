import React from "react";
import { Typography } from "@mui/material";
export const Texts = () => {
  return (
    <>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      {/* gutterBottom: gutterBottom using for margin bottom */}
      {/* component : set component h1 the element change into h1 */}
      <Typography variant="h6" component='h1'  gutterBottom >H6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        debitis ratione porro nulla quas sunt iure perspiciatis vitae
        voluptatibus suscipit praesentium, labore aperiam repellat corporis
        tempora commodi. Corporis, cum numquam.
      </Typography>
      <Typography variant="body2">        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        debitis ratione porro nulla quas sunt iure perspiciatis vitae
        voluptatibus suscipit praesentium, labore aperiam repellat corporis
        tempora commodi. Corporis, cum numquam.</Typography>

        <Typography variant="button">Button</Typography>
      <Typography variant="caption">caption</Typography>

      <Typography variant="overline">overline</Typography>
      <Typography variant="inherit">inherit</Typography>


    </>
  );
};
