import { Heading } from "@chakra-ui/react";
import React, { forwardRef, useImperativeHandle, useState, Ref } from "react";

type RefProps = {};

export type RefFunctionType = {
  changeValue: (newValue) => void;
};

const DynamicText = forwardRef((props: RefProps, ref: Ref<RefFunctionType>) => {
  const [value, setValue] = useState("Random Text");
  useImperativeHandle(ref, () => ({
    changeValue(newValue) {
      setValue(newValue);
    },
  }));

  return (
    <Heading as="h1" size="md">
      {value}
    </Heading>
  );
});

export default DynamicText;
