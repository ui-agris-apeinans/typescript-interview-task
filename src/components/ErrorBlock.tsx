import { FC, memo } from 'react';

interface IErrorBlock {
  error: String
}

const ErrorBlock: FC<IErrorBlock> = ({ error }) => {

  return (
    <div className="error mt-8px">
      {error && <span>{error}</span>}
    </div>
  )
}

export default memo(ErrorBlock);
