/*
  Andrew Mainella
  Most of the icons are taken from https://www.svgrepo.com/
*/
import { ViewStyle } from "react-native";
import Svg, { Circle, Defs, G, LinearGradient, Path, Polygon, Rect, Stop } from "react-native-svg";

type iconProps = {
  width: number,
  height: number,
  style?: ViewStyle | undefined
}

//https://www.svgrepo.com/svg/506663/home
export function HomeIcon({ width, height, style }: iconProps) {
  return (
    <Svg fill="#000000" viewBox="0 0 32 32" width={width} height={height} style={style}>
      <Path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"/>
    </Svg>
  )
}

export function CodingIcon({ width, height, style }: iconProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={width} height={height} style={style}>
      <Path d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export function ActivityIcon({ width, height, style }: iconProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={width} height={height} style={style}>
      <Path d="M3 12H6L9 21L16 3L18 12H21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

export function CloseIcon({ width, height, style }: iconProps) {
  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
        fill="#0F1729"
      />
    </Svg>
  );
}

export function MoreVIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} fill="#000000" viewBox="0 0 24 24">
      <G id="SVGRepo_iconCarrier">
        <Path d="M10,4a2,2,0,1,1,2,2A2,2,0,0,1,10,4Zm2,10a2,2,0,1,0-2-2A2,2,0,0,0,12,14Zm0,8a2,2,0,1,0-2-2A2,2,0,0,0,12,22Z"/>
      </G>
    </Svg>
  )
}

export function MoreHIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} fill="#000000" viewBox="0 0 24 24">
      <G id="SVGRepo_iconCarrier">
        <Path d="M2,12a2,2,0,1,1,2,2A2,2,0,0,1,2,12Zm10,2a2,2,0,1,0-2-2A2,2,0,0,0,12,14Zm8-4a2,2,0,1,0,2,2A2,2,0,0,0,20,10Z"/>
      </G>
    </Svg>
  )
}

export function ContactIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} fill="#000000" viewBox="0 0 24 24">
      <G id="SVGRepo_iconCarrier">
        <Path d="M4,21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3ZM12,7.5a2,2,0,1,1-2,2A2,2,0,0,1,12,7.5ZM8.211,16.215a4,4,0,0,1,7.578,0A.993.993,0,0,1,14.83,17.5H9.18A1,1,0,0,1,8.211,16.215Z"/>
      </G>
    </Svg>
  )
}

export function SettingIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 24 24" fill="none">
      <Path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" fill="#000000"/>
    </Svg>
  )
}

export function TrashIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 24 24" fill="none">
      <G id="SVGRepo_iconCarrier">
        <Path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </G>
    </Svg>
  )
}

export function MailIcon({ width, height, style }: iconProps) {
  return (
    <Svg  width={width} height={height} style={style}  viewBox="0 0 24 24" fill="none" >
      <G id="SVGRepo_iconCarrier">
        <Path d="M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </G>
    </Svg>
  )
}

export function SendIcon({ width, height, style }: iconProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={width} height={height} style={style}>
      <Path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

//Things I have worked with
export function GitIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 32 32" fill="#000000">
      <G id="SVGRepo_iconCarrier">
        <Path d="M29.472,14.753,17.247,2.528a1.8,1.8,0,0,0-2.55,0L12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314,2.528,14.7a1.8,1.8,0,0,0,0,2.551L14.753,29.472a1.8,1.8,0,0,0,2.55,0L29.472,17.3a1.8,1.8,0,0,0,0-2.551" fill="#dd4c35"/>
        <Path d="M12.158,5.067l3.22,3.22a2.141,2.141,0,0,1,2.712,2.73l3.1,3.1a2.143,2.143,0,1,1-1.285,1.21l-2.895-2.895v7.617a2.141,2.141,0,1,1-1.764-.062V12.3a2.146,2.146,0,0,1-1.165-2.814L10.911,6.314" fill="#fff"/>
      </G>
    </Svg>
  )
}

export function JavascriptIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} role="img" viewBox="0 0 512 512" fill="#000000">
      <G id="SVGRepo_iconCarrier">
        <Rect width="512" height="512" rx="15%" fill="#f7df1e"/>
        <Path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"/>
      </G>
    </Svg>
  )
}

export function TypescriptIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 32 32" fill="#000000">
      <G id="SVGRepo_iconCarrier">
        <Rect x="2" y="2" width="28" height="28" rx="1.312" fill="#3178c6" />
        <Path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z" fill="#ffffff" fillRule="evenodd" />
      </G>
    </Svg>
  )
}

export function SwiftIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 32 32" fill="#000000">
      <G id="SVGRepo_iconCarrier">
        <Defs>
          <LinearGradient id="a" x1="-134.494" y1="-171.82" x2="-134.497" y2="-171.89" gradientTransform="matrix(240, 0, 0, -205.6, 32295, -35312.585)" gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor="#f88535"/>
            <Stop offset="1" stopColor="#fd2221"/>
          </LinearGradient>
        </Defs>
        <Path d="M19.422,4.007s6.217,3.554,7.844,9.2c1.466,5.1.292,7.534.292,7.534a8.915,8.915,0,0,1,1.742,2.8,4.825,4.825,0,0,1,.29,4.453s-.1-2.08-3.2-2.511c-2.841-.4-3.874,2.366-9.3,2.232A18.435,18.435,0,0,1,2,19.354C4.651,20.8,8.124,23.045,12.449,22.7s5.228-1.674,5.228-1.674A66.9,66.9,0,0,1,4.891,7.643c3.4,2.845,11.822,8.507,11.626,8.363A75.826,75.826,0,0,1,8.092,6.24S20.728,16.629,21.745,16.563c.418-.861,2.579-5.318-2.324-12.557Z" fill="url(#a)"/>
      </G>
    </Svg>
  )
}

export function ReactIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 32 32" fill="#000000">
      <G id="SVGRepo_iconCarrier">
        <Circle cx="16" cy="15.974" r="2.5" fill={"#00d8ff"}/>
        <Path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" fill={"#00d8ff"} />
        <Path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" fill={"#00d8ff"} />
        <Path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" fill={"#00d8ff"} />
      </G>
    </Svg>
  )
}

export function PythonIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 32 32" fill="none">
      <G id="SVGRepo_iconCarrier">
        <Path fillRule="evenodd" clipRule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
        <Defs>
          <LinearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#327EBD"/>
            <Stop offset="1" stopColor="#1565A7"/>
          </LinearGradient>
          <LinearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#FFDA4B"/>
            <Stop offset="1" stopColor="#F9C600"/>
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  )
}

export function JavaIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 32 32" fill="none">
      <G id="SVGRepo_iconCarrier">
        <Path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00"/>
        <Path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00"/>
        <Path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1"/>
        <Path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1"/>
        <Path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1"/>
        <Path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1"/>
        <Path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1"/>
        <Path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1"/>
      </G>
    </Svg>
  )
}

export function AzureIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 96 96">
      <Defs>
        <LinearGradient id="e399c19f-b68f-429d-b176-18c2117ff73c" x1="-1032.172" x2="-1059.213" y1="145.312" y2="65.426" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#114a8b" />
          <Stop offset="1" stopColor="#0669bc" />
        </LinearGradient>
        <LinearGradient id="ac2a6fc2-ca48-4327-9a3c-d4dcc3256e15" x1="-1023.725" x2="-1029.98" y1="108.083" y2="105.968" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopOpacity=".3"/>
          <Stop offset=".071" stopOpacity=".2"/>
          <Stop offset=".321" stopOpacity=".1"/>
          <Stop offset=".623" stopOpacity=".05"/>
          <Stop offset="1" stopOpacity="0"/>
        </LinearGradient>
        <LinearGradient id="a7fee970-a784-4bb1-af8d-63d18e5f7db9" x1="-1027.165" x2="-997.482" y1="147.642" y2="68.561" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#3ccbf4"/>
          <Stop offset="1" stopColor="#2892df"/>
        </LinearGradient>
      </Defs>
      <Path fill="url(#e399c19f-b68f-429d-b176-18c2117ff73c)" d="M33.338 6.544h26.038l-27.03 80.087a4.152 4.152 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.152 4.152 0 0 1 3.934-2.825z"/>
      <Path fill="#0078d4" d="M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.38z"/>
      <Path fill="url(#ac2a6fc2-ca48-4327-9a3c-d4dcc3256e15)" d="M33.338 6.544a4.118 4.118 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.443 4.443 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.237 4.237 0 0 0 2.666.972H81.24L71.024 60.261l-29.781.007L59.47 6.544z"/>
      <Path fill="url(#a7fee970-a784-4bb1-af8d-63d18e5f7db9)" d="M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z"/>
    </Svg>
  )
}

export function ProcessingIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 800 800" fill="none">
      <Path d="M400 500C700 500 700 100 400 100" stroke="#0468FF" strokeWidth="150"/>
      <Path d="M400 200L100 600" stroke="#1F34AB" strokeWidth="150"/>
      <Path d="M100 300L200 500" stroke="#85AEFF" strokeWidth="150"/>
    </Svg>
  )
}

export function FirebaseIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 32 32" fill="#000000">
      <G id="SVGRepo_iconCarrier">
        <Path d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z" fill="#ffc24a"/>
        <Path d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z" fill="#ffa712"/>
        <Path d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z" fill="#f4bd62"/>
        <Path d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z" fill={"#ffa50e"}/>
        <Polygon points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601" fill={"#f6820c"}/>
        <Path d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0" fill={"#fde068"} />
        <Path d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z" fill={"#fcca3f"} />
        <Path d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z" fill={"#eeab37"} />
      </G>
    </Svg>
  )
}

export function YoutubeIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 -7 48 48" fill="#000000">
      <G id="SVGRepo_iconCarrier">
        <G id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <G id="Color-" transform="translate(-200.000000, -368.000000)" fill="#CE1312">
            <Path d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z" id="Youtube" />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export function GithubIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 20 20" fill="#000000">
      <G id="SVGRepo_iconCarrier">
        <G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <G id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
            <G id="icons" transform="translate(56.000000, 160.000000)">
              <Path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]" />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}

export function RacketIcon({ width, height, style }: iconProps) {
  return (
    <Svg viewBox="0 0 32 32" fill="#000000" width={width} height={height} style={style}>
      <Circle cx="16" cy="16" r="14" fill="#fff"/>
      <Path d="M27.016,24.641a14,14,0,0,0-15.8-21.8C16.9,5.822,24.413,15.549,27.016,24.641Z" fill="#3e5ba9"/>
      <Path d="M13.995,10.93a24.3,24.3,0,0,0-7.22-5.46A14,14,0,0,0,5.463,25.217,39.56,39.56,0,0,1,13.995,10.93Z" fill="#9f1d20"/>
      <Path d="M16.575,14.1A32.645,32.645,0,0,0,9.43,28.365a14.016,14.016,0,0,0,13.3-.089A38.642,38.642,0,0,0,16.575,14.1Z" fill="#9f1d20"/>
    </Svg>
  )
}

export function LogoIcon({ width, height, style }: iconProps) {
  return (
    <Svg width={width} height={height} style={style} viewBox="0 0 33 33" fill="none">
      <Path d="m 9 24 z C 7 30 7 30 6 30 L 2 30 Q 0 30 1 28 L 10 7 Q 16 -5 22 7 L 32 28 Q 33 30 31 30 L 27 30 C 26 30 25 29 24 28 L 5 10 C 2 7 6 4 9 7 L 22 19 C 23 20 24 19 23 17 L 18 7 C 17 5 15 5 14 7 L 9 24" fill="white"/>
    </Svg>
  )
}

export function PencilIcon({ width, height, style }:iconProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={width} height={height} style={style}>
      <Path d="M9.65661 17L6.99975 17L6.99975 14M6.10235 14.8974L17.4107 3.58902C18.1918 2.80797 19.4581 2.80797 20.2392 3.58902C21.0202 4.37007 21.0202 5.6364 20.2392 6.41745L8.764 17.8926C8.22794 18.4287 7.95992 18.6967 7.6632 18.9271C7.39965 19.1318 7.11947 19.3142 6.8256 19.4723C6.49475 19.6503 6.14115 19.7868 5.43395 20.0599L3 20.9998L3.78312 18.6501C4.05039 17.8483 4.18403 17.4473 4.3699 17.0729C4.53497 16.7404 4.73054 16.424 4.95409 16.1276C5.20582 15.7939 5.50466 15.4951 6.10235 14.8974Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>)
}

export function PencilSlashIcon({ width, height, style }:iconProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={width} height={height} style={style}>
      <Path d="M13.325 7.67505L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L16.1534 10.5035M10.5 10.5L6.1026 14.8974C5.50491 15.4951 5.20606 15.7939 4.95434 16.1276C4.73078 16.424 4.53521 16.7404 4.37014 17.0729C4.18427 17.4473 4.05063 17.8483 3.78337 18.6501L3.00024 20.9998L5.43419 20.0599C6.14139 19.7868 6.495 19.6503 6.82584 19.4723C7.11972 19.3142 7.39989 19.1318 7.66345 18.9271C7.96016 18.6967 8.22819 18.4287 8.76425 17.8926L13.3284 13.3284M9.65685 17H7L7 14M3 3L21 21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

export function ChevronLeft({ width, height, style }:iconProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={width} height={height} style={style}>
      <Path d="M15 6L9 12L15 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

export function GlassesIcon({ width, height, style }:iconProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={width} height={height} style={style}>
      <Path d="M5.99992 5C5.73263 5 5.59899 5 5.48344 5.00894C4.12112 5.11436 3.00214 6.12702 2.7617 7.47208C2.7413 7.58617 2.728 7.71915 2.70141 7.98511L2.02072 14.5904M9.99992 15H13.9999M9.99992 15C9.99992 17.2091 8.20914 19 6 19C3.79086 19 2 17.2091 2 15C2 12.7909 3.79086 11 6 11C8.20914 11 9.99992 12.7909 9.99992 15ZM13.9999 15C13.9999 17.2091 15.7909 19 18 19C20.2091 19 22 17.2091 22 15C22 12.7909 20.2091 11 18 11C15.7909 11 13.9999 12.7909 13.9999 15ZM18.015 5C18.2823 5 18.4159 5 18.5315 5.00894C19.8938 5.11436 21.0127 6.12702 21.2532 7.47208C21.2736 7.58617 21.2869 7.71915 21.3135 7.98511L21.9804 14.602" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

export function ImagePlusIcon({ width, height, style }:iconProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" width={width} height={height} style={style}>
      <Path d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}