import { Tooltip } from '@/components/Tooltip/Tooltip';
import { CheckIcon, ShareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export const CopyLinkButton = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 500);
  };

  return (
    <Tooltip label='このイベントのURLをコピー'>
      <button type='button' aria-label='このイベントのURLをコピー' onClick={copyUrl}>
        {hasCopied ? (
          <CheckIcon color='white' className='h-8 w-8 hover:opacity-80 lg:h-9 lg:w-9' />
        ) : (
          <ShareIcon color='white' className='h-8 w-8 hover:opacity-80 lg:h-9 lg:w-9' />
        )}
      </button>
    </Tooltip>
  );
};
