import { Image } from "@chakra-ui/image";
import { Box, Center, Flex } from "@chakra-ui/layout";
import React from "react";

const Header = () => {
  return (
    <Center bg={"red.100"}>
      <Flex
        as={"nav"}
        align={"center"}
        justify={"space-between"}
        wrap={"wrap"}
        w={"100%"}
        maxW={{ xl: "1344px" }}
        p={2}
      >
        <Box d={"flex"}>
          <Image
            src={"/images/hen.svg"}
            alt={"Big Hen image"}
            ignoreFallback={true}
            maxW={"10%"}
          />
        </Box>
      </Flex>
    </Center>
  );
};

export default Header;
