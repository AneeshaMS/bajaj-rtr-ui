import * as React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const Cart = () => (
  <Svg width={40} height={40} viewBox="0 0 30 30" fill="none">
    <Circle cx={15} cy={15} r={15} fill="white" />
    <G clipPath="url(#clip0_1_388)">
      <Path
        d="M11.75 22.5C12.1642 22.5 12.5 22.1642 12.5 21.75C12.5 21.3358 12.1642 21 11.75 21C11.3358 21 11 21.3358 11 21.75C11 22.1642 11.3358 22.5 11.75 22.5Z"
        stroke="#6FA186"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 22.5C20.4142 22.5 20.75 22.1642 20.75 21.75C20.75 21.3358 20.4142 21 20 21C19.5858 21 19.25 21.3358 19.25 21.75C19.25 22.1642 19.5858 22.5 20 22.5Z"
        stroke="#6FA186"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.75 6.75H8.75L10.76 16.7925C10.8286 17.1378 11.0164 17.448 11.2907 17.6687C11.5649 17.8895 11.908 18.0067 12.26 18H19.55C19.902 18.0067 20.2451 17.8895 20.5193 17.6687C20.7936 17.448 20.9814 17.1378 21.05 16.7925L22.25 10.5H9.5"
        stroke="#6FA186"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_388">
        <Rect width={18} height={18} fill="white" transform="translate(5 6)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Cart;
