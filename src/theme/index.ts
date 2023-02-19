import { extendTheme, theme as base, type ThemeConfig, ComponentStyleConfig, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles: ComponentStyleConfig = {
  // overriding the "Input" and "Select" components' default style.
  variants: {
    filled: {
      // we set the default variant to "filled" below for Inputs.
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    // the border radius is different for each size.
    md: {
      field: {
        /* an Input has 3 parts: Addon, Field and Element:
        https://chakra-ui.com/docs/components/input/theming */
        /* a Select has 2 parts: Field and Icon:
				https://chakra-ui.com/docs/components/select/theming */
        borderRadius: "none",
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "base.500",
  },
};

type MyCustomConfig = {
  colors: { brand: Record<number, string> };
  fonts: Record<string, string>;
  components: object;
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
  components: {
    Input: inputSelectStyles,
    Select: inputSelectStyles,
    Checkbox: {
      baseStyle: {
        control: {
          /* a Checkbox has 4 parts: Control, Icon, Container and Label:
					https://chakra-ui.com/docs/components/checkbox/theming */
          borderRadius: "radii.none", // same as "none".
          ...brandRing,
        },
      },
    },
    /* Button: { // this also works...
      baseStyle: {
        borderRadius: 0, // same as "none".
      },
    }, */
    Button: {
      variants: {
        primary: (props) => ({
          rounded: "none",
          ...brandRing,
          color: mode("white", "gray.800")(props),
          backgroundColor: mode("brand.500", "brand.200")(props),
          _hover: {
            backgroundColor: mode("brand.600", "brand.300")(props),
          },
          _active: {
            backgroundColor: mode("brand.700", "brand.400")(props),
          },
        }),
      },
    },
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
