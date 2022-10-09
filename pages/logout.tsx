import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

type Props = {};

const Logout = (props: Props) => {
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
            <Button mt={4} type="submit">
              Logout
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Logout;
