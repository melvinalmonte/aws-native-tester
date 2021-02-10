import { Flex } from "@chakra-ui/layout";
import React from "react";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Flex
        direction={"column"}
        align={"left"}
        maxW={{ xl: "1344px" }}
        m={"0 auto"}
        p={4}
      >
        {children}
      </Flex>
    </div>
  );
};

export default Layout;
