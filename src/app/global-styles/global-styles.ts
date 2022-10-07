import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import InterBold from "../../assets/fonts/Inter-Bold.ttf";
import InterMedium from "../../assets/fonts/Inter-Medium.ttf";
import InterSemiBold from "../../assets/fonts/Inter-SemiBold.ttf";
import InterRegular from "../../assets/fonts/Inter-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
        font-family: 'InterBold';
        src: url(${InterBold}) format('truetype');
        font-weight: 700;
    }
  @font-face {
        font-family: 'InterRegular';
        src: url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
  @font-face {
        font-family: 'InterMedium';
        src: url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
  @font-face {
        font-family: 'InterSemiBold';
        src: url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
`;
