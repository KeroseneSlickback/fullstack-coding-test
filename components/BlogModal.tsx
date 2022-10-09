import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { ArticleType } from "pages/blog";
import React from "react";

type Props = {
  article: ArticleType;
  clearSelectedArticle: () => void;
};

const BlogModal = (props: Props) => {
  return (
    <Flex
      pos="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      zIndex="1"
      backgroundColor="rgba(0, 0, 0, 0.75)"
      onClick={props.clearSelectedArticle}
      flexDirection="column"
      alignItems="center"
      justifyContent="center">
      <Flex h="500px" w="500px" backgroundColor="gray.500" p="4" flexDirection="column" alignItems="center">
        <Heading as="h5" textAlign="center">
          {props.article.title}
        </Heading>
        <Image src={`data:image/png;base64,${props.article.image}`} objectFit="cover" mt="2" />
      </Flex>
    </Flex>
  );
};

export default BlogModal;
