import Head from "next/head";
import DynamicText, { RefFunctionType } from "components/DynamicText";
import { Input, Stack } from "@chakra-ui/react";
import { useRef } from "react";

const Home = () => {
  const textRef = useRef<RefFunctionType>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (textRef.current) {
      textRef.current.changeValue(e.target.value);
    }
  };

  return (
    <Stack align="center" justify="center" height="100vh">
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as="main" maxW="12rem">
        <DynamicText ref={textRef} />
        <Input placeholder="Enter Text..." onChange={onChange} size="sm" />
      </Stack>
    </Stack>
  );
};

export default Home;
