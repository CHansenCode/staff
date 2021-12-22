export const Logo = ({ height, width }) => {
  return (
    <svg
      height={height ? height : '125px'}
      width={width ? width : '300px'}
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink" // Throws error, jsx namespace not supported yet
      viewBox="0 0 600 250"
    >
      <defs>
        <style>
          {`
            #staffup_logo_redBG {
              fill: url(#linear-gradient);
            }
            #staffup_logo_blueBG {
              fill: url(#linear-gradient-2);
            }
            #staffup_logo_text {
              fill: #fff;
            }
            #staffup_logo_star {
              fill: #fff;
            }
          `}
        </style>

        <linearGradient
          id="linear-gradient"
          x1="487.55"
          y1="263.97"
          x2="487.55"
          y2="-6.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.04" stopColor="#55272b" />
          <stop offset="0.09" stopColor="#5e272b" />
          <stop offset="0.19" stopColor="#78272a" />
          <stop offset="0.2" stopColor="#7d272a" />
          <stop offset="0.39" stopColor="#af2328" />
          <stop offset="0.55" stopColor="#de1e25" />
          <stop offset="0.72" stopColor="#ec322f" />
          <stop offset="0.87" stopColor="#ef4c41" />
          <stop offset="0.98" stopColor="#f1584d" />
        </linearGradient>

        <linearGradient
          id="linear-gradient-2"
          x1="183.8"
          y1="259.89"
          x2="183.8"
          y2="-4.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.02" stopColor="#2a2b47" />
          <stop offset="0.24" stopColor="#1d3c64" />
          <stop offset="0.32" stopColor="#174371" />
          <stop offset="0.57" stopColor="#095282" />
          <stop offset="0.8" stopColor="#1270a5" />
          <stop offset="1" stopColor="#128ecc" />
        </linearGradient>
      </defs>

      <title>Home</title>

      <path
        id="staffup_logo_redBG"
        d="M565.15,0h-190V250h190A34.86,34.86,0,0,0,600,215.12V34.88A34.86,34.86,0,0,0,565.15,0Z"
      />
      <path
        id="staffup_logo_blueBG"
        d="M0,215.12A34.86,34.86,0,0,0,34.85,250H367.6V0H34.85A34.86,34.86,0,0,0,0,34.88Z"
      />

      <g id="staffup_logo_text">
        <path d="M54.64,157.76a4.9,4.9,0,1,0,0,9.8h12.6a12.7,12.7,0,0,1,0,25.4H42.58V185.7H67.24a5.44,5.44,0,1,0,0-10.88H54.64a12.16,12.16,0,0,1,0-24.31H74.85v7.25Z" />
        <path d="M148.46,167.56H131.78a12.7,12.7,0,0,0,0,25.4h23.94V162.55a12.06,12.06,0,0,0-12.05-12.05H122.35v7.25h21.31a4.9,4.9,0,0,1,4.89,4.9Zm0,18.14H131.78a5.44,5.44,0,1,1,0-10.88h16.68Z" />
        <path d="M103.86,185.7a4.35,4.35,0,0,1-4.35-4.35V157.76H112.2v-7.25H99.51V131.64H92.26V150.5h-7.5v7.26h7.5v22.5A12.7,12.7,0,0,0,105,193h6V185.7Z" />
        <path d="M179.29,144.34a5.44,5.44,0,0,1,5.44-5.45h10.34v-7.25H184.73a12.7,12.7,0,0,0-12.7,12.7v6.16h-6.89v7.26H172V193h7.26v-35.2h24.29V193h7.25v-35.2h14.51v-7.25H210.83v-6.17a5.45,5.45,0,0,1,5.44-5.45h10.35v-7.25H216.27a12.69,12.69,0,0,0-12.69,12.7v6.17H179.29Z" />
        <path d="M257.94,185.7a5.43,5.43,0,0,1-5.44-5.44V150.51h-7.26v29.75a12.71,12.71,0,0,0,12.7,12.7h23.93V150.51h-7.25V185.7Z" />
        <path d="M315.8,150.51H294.37v58.78h7.25V193H315.8c8.48,0,15.74-9.5,15.74-21.23S324.28,150.51,315.8,150.51Zm.12,35.19h-14.3V157.76H315.8c5.12,0,8.48,6.26,8.48,14S320.92,185.7,315.92,185.7Z" />
      </g>

      <polygon
        id="staffup_logo_star"
        points="518.58 139.87 537.67 200.81 486.27 163.36 434.88 200.81 453.97 139.87 403.31 102.42 466.45 102.42 486.27 42.58 506.1 102.42 569.24 102.42 518.58 139.87"
      />
    </svg>
  );
};
