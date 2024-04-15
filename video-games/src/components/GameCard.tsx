import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Img } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
