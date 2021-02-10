import { Button } from "@chakra-ui/button";
import { Heading, Link } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../component/layout/Layout";

const Page1 = () => {
  return (
    <Layout>
      <Heading>This is page 1</Heading>
      <Link as={NavLink} to={"/page2"}>
        <Button>Go to page 2</Button>
      </Link>
    </Layout>
  );
};

export default Page1;
