import { Box, Flex, Grid, Heading, Image, Stack, VStack } from "@chakra-ui/react";
import { RequireAuth } from "config/RequireAuth";
import Head from "next/head";
import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "config/firebase";
import BlogModal from "components/BlogModal";

export interface ArticleType {
  id: string;
  image: string;
  title: string;
}

export async function getServerSideProps() {
  const articles = [];
  const dbInstance = collection(db, "Blog Articles");
  await getDocs(dbInstance).then((data) => {
    data.docs.map((item) => {
      articles.push({ id: item.id, image: item.data().image, title: item.data().title });
    });
  });
  return {
    props: {
      articles,
    },
  };
}

type Props = {
  articles: ArticleType[];
};

const blog = ({ articles }: Props) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleType | null>(null);

  const articleSelect = (articleId) => {
    const foundArticle = articles.find((article) => article.id === articleId);
    setSelectedArticle(foundArticle);
  };

  const clearSelectedArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <RequireAuth>
      <>
        <Stack align="center" justify="center" height="100vh">
          <Head>
            <title>Blog</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Stack as="main" w="50rem">
            <Box border="2px" w="100%" height="100%" p={6}>
              <VStack spacing={4} align="flex-start" justify="center" w="100%" h="100%">
                <Heading>Blog</Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap="2" justifyItems="center" w="100%">
                  {articles
                    ? articles.map((article, id) => {
                        return (
                          <Flex
                            key={id}
                            h="250px"
                            w="250px"
                            backgroundColor="gray.100"
                            p="4"
                            flexDirection="column"
                            alignItems="center"
                            style={{ cursor: "pointer" }}
                            onClick={() => articleSelect(article.id)}>
                            <Heading as="h5" textAlign="center">
                              {article.title}
                            </Heading>
                            <Image
                              src={`data:image/png;base64,${article.image}`}
                              boxSize="160px"
                              objectFit="cover"
                              mt="2"
                            />
                          </Flex>
                        );
                      })
                    : null}
                </Grid>
              </VStack>
            </Box>
          </Stack>
        </Stack>
        {selectedArticle ? <BlogModal article={selectedArticle} clearSelectedArticle={clearSelectedArticle} /> : null}
      </>
    </RequireAuth>
  );
};

export default blog;
