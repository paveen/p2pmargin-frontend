import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '.';

export const Card = (props) => {
  const { title, subTitle, icon, buttonText, onButtonClick, children } = props;
  return (
    <div
      className="w-card flex flex-col items-center 
    text-center rounded-xl px-7 py-6 bg-blue-450
    bg-gradient-to-br from-blue-450 to-skyblue-450"
    >
      <h2 className="text-3xl text-white">{title}</h2>
      {icon}
      <h4 className="text-lg text-white">{subTitle}</h4>
      <hr className="w-2/5 bg-white my-4 p-px" />
      <p className="text-2xl flex-1 text-white">{children}</p>
      <Button
        fullWidth
        className="mt-4"
        variant="filled"
        size="medium"
        textColor="white"
      >
        {buttonText}
      </Button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
