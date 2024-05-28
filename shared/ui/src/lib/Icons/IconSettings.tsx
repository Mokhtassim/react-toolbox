import React, { FC } from 'react';

import { createIcon } from '@chakra-ui/react';

import { Icon, IconProps } from './Icon';

const SvgIcon = createIcon({
  displayName: 'Settings',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M12.012 2.25c.734.009 1.466.093 2.182.253a.75.75 0 01.582.649l.17 1.527a1.384 1.384 0 001.928 1.116l1.4-.615a.75.75 0 01.85.174 9.793 9.793 0 012.204 3.792.75.75 0 01-.271.826l-1.242.915a1.38 1.38 0 00.001 2.226l1.242.915a.75.75 0 01.272.826 9.799 9.799 0 01-2.204 3.792.75.75 0 01-.848.175l-1.406-.616a1.381 1.381 0 00-1.927 1.113l-.169 1.526a.75.75 0 01-.572.648 9.518 9.518 0 01-4.406 0 .75.75 0 01-.572-.648l-.168-1.524a1.382 1.382 0 00-1.925-1.11l-1.407.616a.75.75 0 01-.849-.175 9.798 9.798 0 01-2.203-3.796.75.75 0 01.271-.826l1.243-.916a1.381 1.381 0 000-2.226l-1.243-.914a.75.75 0 01-.271-.826 9.793 9.793 0 012.204-3.792.75.75 0 01.85-.174l1.4.615a1.387 1.387 0 001.93-1.118l.17-1.526a.75.75 0 01.583-.649c.717-.16 1.45-.244 2.201-.253zM12 9a3 3 0 100 6 3 3 0 000-6z"
        fill="currentColor"
      />
    </>
  ),
});

export const IconSettings: FC<IconProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Icon icon={SvgIcon} {...props} />;
};
