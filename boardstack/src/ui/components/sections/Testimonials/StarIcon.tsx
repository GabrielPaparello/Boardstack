export interface IconProps {
  fill?: string;
  stroke?: string;
  className?: string;
}
function Icon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
      className={`${className} `}
    >
      <path
        stroke="#121416"
        strokeWidth="2"
        d="M8.258 8.322l.526-.08.228-.481 3.051-6.464s0 0 0 0 0 0 0 0c.185-.392.684-.4.874 0v.001l3.051 6.463.227.481.527.08 6.827 1.04h0c.183.028.334.155.401.372a.593.593 0 01-.136.604h0l-4.94 5.03-.356.361.083.501 1.168 7.103s0 0 0 0a.57.57 0 01-.213.567.43.43 0 01-.487.04h0l-6.108-3.354-.481-.264-.481.264L5.91 23.94l-.003.002a.424.424 0 01-.483-.04.573.573 0 01-.214-.568s0 0 0 0 0 0 0 0L6.38 16.23l.083-.5-.356-.363-4.94-5.028h0a.593.593 0 01-.136-.605c.067-.217.218-.344.4-.372h.001l6.827-1.04z"
      ></path>
    </svg>
  );
}

export default Icon;
