import { Box, Container } from "@chakra-ui/react";
import AuthContext from "config/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const auth = useContext(AuthContext);
  return (
    <Box position="fixed" as="nav" w="100%">
      <Container display="flex" p={4} maxW="container.md" alignItems="center" justifyContent="space-between">
        <Link href="/">Home</Link>
        {auth.user ? (
          <>
            <Link href="/blog">Blogs</Link>
            <Link href="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
