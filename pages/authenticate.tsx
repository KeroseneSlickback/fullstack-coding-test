import { Box, Button, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const authenticate = () => {
  return (
    <Stack align="center" justify="center" height="100vh">
      <Head>
        <title>Authenicate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as="main" w="24rem">
        <Box border="2px" w="100%" height="100%" p={6}>
          <VStack spacing={4} align="flex-start" w="full">
            <Heading>Please Authenicate</Heading>
            <HStack>
              <Link href="/signup">
                <Button backgroundColor="pink.100">Signup</Button>
              </Link>
              <Link href="/login">
                <Button backgroundColor="blue.100">Login</Button>
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default authenticate;
