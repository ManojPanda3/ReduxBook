// components/head.js
import { Fragment, NextHead } from "react";
import { GoogleFonts } from "next-google-fonts";
import { Fragment } from "react";

export const Head = ({ children, title }) => (
  <Fragment>
    <NextHead>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>

      {children}
    </NextHead>
  </Fragment>
);
