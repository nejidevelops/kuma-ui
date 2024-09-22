import { Box, Heading, css, Spacer, Flex, Text, Button } from "@kuma-ui/core";
function App() {
  return (
    <Box as="main" display="flex" flexDir={["column", "row"]}>
      <Heading
        as="h3"
        className={css`
          color: red;
          @media (max-width: sm) {
            color: blue;
          }
        `}
      >
        Kuma UI
      </Heading>
      <Spacer size={4} />
      <Flex flexDir={`column`}>
        <Text as="p" fontSize={24}>
          Headless UI Component Library
        </Text>
        <Button>Getting Started</Button>
      </Flex>
    </Box>
  );
}

export default App;