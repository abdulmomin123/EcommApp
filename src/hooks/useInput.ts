import { useState } from 'react';

const useInput = (
  initialValue = ''
): [string, (value: string) => void, () => void] => {
  // State
  const [state, setState] = useState(initialValue);

  const resetState = () => setState('');

  return [state, setState, resetState];
};

export default useInput;
