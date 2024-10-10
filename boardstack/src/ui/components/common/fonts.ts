import { Urbanist, Roboto } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export { urbanist, roboto };
