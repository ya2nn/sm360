import React, { useState } from 'react';

const useInput = ({
  defaultValue
}) => {
  const [value, setValue] = useState(defaultValue);

  function onChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange
  };
};

export default useInput;