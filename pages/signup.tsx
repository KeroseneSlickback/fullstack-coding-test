import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React, { ChangeEvent, useState } from "react";

interface UserType {
  email: string;
  password: string;
  passwordConfirm: string;
}

const Signup = () => {
  const [userInfo, setUserInfo] = useState<UserType>({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (userInfo.password === userInfo.passwordConfirm) {
      console.log(userInfo);
    }
  };
  return (
    <Stack align="center" justify="center" height="100vh">
      <Head>
        <title>Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as="main" w="24rem">
        <Box border="2px" w="100%" height="100%" p={6}>
          <VStack spacing={4} align="flex-start" w="full">
            <Heading>Signup</Heading>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="email@email.com"
                  value={userInfo.email}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={userInfo.password}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  placeholder="confirm password"
                  value={userInfo.passwordConfirm}
                  onChange={handleFormChange}
                />
              </FormControl>
              <Button mt={4} type="submit">
                Signup
              </Button>
            </form>
          </VStack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Signup;
