import React from 'react';

export const ArrowIcon = (props) => {
  return (
    <svg
      width={17}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.253 7.563A.75.75 0 01.9 6.82l.102-.007h13.184L9.424 2.07a.75.75 0 01.974-1.135l.084.072 6.05 6.024a.751.751 0 01.22.503V7.592l-.002.044.003-.073a.762.762 0 01-.148.447l-.006.009a.776.776 0 01-.066.075l-6.05 6.025a.75.75 0 01-1.132-.979l.073-.084 4.76-4.742H1.004a.75.75 0 01-.75-.75z"
        fill={props.color ? props.color : '#909090'}
      />
    </svg>
  );
};
