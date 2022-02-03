import { FC, memo } from 'react';

interface IErrorBlock {
  error?: String
}

const ErrorBlock: FC<IErrorBlock> = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div data-testid="errorBlock" className="error mt-8px">
      {error}
    </div>
  )
}

export default memo(ErrorBlock);
