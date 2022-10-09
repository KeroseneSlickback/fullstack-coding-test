import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import { useAuth } from "config/AuthContext";
import Head from "next/head";
import Router from "next/router";
import React from "react";

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    Router.push("/authenticate");
  };
  return (
    <Stack align="center" justify="center" height="100vh">
      <Head>
        <title>Logout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as="main" w="24rem">
        <Box border="2px" w="100%" height="100%" p={6}>
          <VStack spacing={4} align="flex-start" w="full">
            <Heading>Logout</Heading>
            <Button mt={4} onClick={handleLogout}>
              Logout
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Logout;
