import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { Input, Stack } from "@chakra-ui/react";

const Home = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Stack align="center" justify="center" height="100vh">
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as="main">
        <DynamicText />
        <Input placeholder="Enter Text..." onChange={onChange} size="sm" />
      </Stack>
    </Stack>
  );
};

export default Home;
