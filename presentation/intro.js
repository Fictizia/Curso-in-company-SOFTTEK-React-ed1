import React from "react";
import { Heading, List, ListItem, Text } from "spectacle";

export class Intro extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} caps textColor="quaternary">
          Temario
        </Heading>
        <List>
          <ListItem>Capitulo I: Tutorial '3 en Raya'</ListItem>
          <ListItem>Capitulo II: Conceptos básicos</ListItem>
          <ListItem>Capitulo III: Conceptos avanzados</ListItem>
        </List>
      </React.Fragment>
    );
  }
}
