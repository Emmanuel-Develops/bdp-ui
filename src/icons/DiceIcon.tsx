import * as React from "react";
import { SVGProps } from "react";

const DiceIcon = ({
  width = 23,
  height,
  pathProps,
  ...props
}: SVGProps<SVGSVGElement> & { pathProps?: SVGProps<SVGPathElement> }) => (
  // height is destructed and unused, scaling is defined by width
  // pathProps is destructured and unused

  <svg
    width={width}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.341 13.159C9.68198 12.5 8.62132 12.5 6.5 12.5C4.37868 12.5 3.31802 12.5 2.65901 13.159M10.341 13.159C11 13.818 11 14.8787 11 17C11 19.1213 11 20.182 10.341 20.841M2.65901 13.159C2 13.818 2 14.8787 2 17C2 19.1213 2 20.182 2.65901 20.841M2.65901 20.841C3.31802 21.5 4.37868 21.5 6.5 21.5C8.62132 21.5 9.68198 21.5 10.341 20.841"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <path
      d="M15.2218 4.77817C16.7406 6.29696 17.5 7.05635 17.5 8C17.5 8.94365 16.7406 9.70304 15.2218 11.2218C13.703 12.7406 12.9436 13.5 12 13.5C11.0563 13.5 10.297 12.7406 8.77817 11.2218C7.25939 9.70304 6.5 8.94365 6.5 8C6.5 7.05635 7.25939 6.29696 8.77817 4.77817C10.297 3.25939 11.0563 2.5 12 2.5C12.9437 2.5 13.703 3.25939 15.2218 4.77817Z"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <path
      d="M21.341 13.159C20.682 12.5 19.6213 12.5 17.5 12.5C15.3787 12.5 14.318 12.5 13.659 13.159M21.341 13.159C22 13.818 22 14.8787 22 17C22 19.1213 22 20.182 21.341 20.841M13.659 13.159C13 13.818 13 14.8787 13 17C13 19.1213 13 20.182 13.659 20.841M13.659 20.841C14.318 21.5 15.3787 21.5 17.5 21.5C19.6213 21.5 20.682 21.5 21.341 20.841"
      stroke="currentColor"
      stroke-width="1.5"
    />
    <path
      d="M12.008 8H11.999"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default DiceIcon;
