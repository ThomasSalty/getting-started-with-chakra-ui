import { extendTheme, theme as base, type ThemeConfig, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";

type MyCustomConfig = {
  colors: { brand: Record<number, string> };
  fonts: Record<string, string>;
};

const config: ThemeConfig & MyCustomConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
  colors: {
    brand: {
      50: "#f5fee5",
      100: "#e1fbb2",
      200: "#cdf781",
      300: "#b8ee56",
      400: "#a2e032",
      500: "#8ac919",
      600: "#71ab09",
      700: "#578602",
      800: "#3c5e00",
      900: "#203300",
    },
  },
  fonts: {
    // heading: "Montserrat",
    // body: "Inter",
    heading: `Montserrat, ${base.fonts.heading}`, // adding fallback.
    body: `Inter, ${base.fonts.body}`, // adding fallback.
  },
};

const theme = extendTheme(
  config,
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"], // this is optional, if I skip it = all components.
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
