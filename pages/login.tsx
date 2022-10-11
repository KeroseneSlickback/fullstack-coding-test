import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import { useAuth } from "config/AuthContext";
import Head from "next/head";
import Router from "next/router";
import React, { ChangeEvent, useState } from "react";

interface UserType {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useAuth();
  const [userInfo, setUserInfo] = useState<UserType>({
    email: "",
    password: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await login(userInfo.email, userInfo.password);
      Router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Stack align="center" justify="center" height="100vh">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as="main" w="24rem">
        <Box border="2px" w="100%" height="100%" p={6}>
          <VStack spacing={4} align="flex-start" w="full">
            <Heading>Login</Heading>
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
              <Button mt={4} type="submit">
                Login
              </Button>
            </form>
          </VStack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Login;
