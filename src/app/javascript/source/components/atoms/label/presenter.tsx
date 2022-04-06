import React, { FC } from 'react';
import { LabelType } from './type';
import { Label, LabelLink } from './style';

const Presenter: FC<LabelType> = ({ fs, cl, fw, lh, href, children }) => {
  return href ? (
    <>
      <LabelLink to={href} cl={cl} fs={fs} fw={fw} lh={lh}>
        {children}
      </LabelLink>
    </>
  ) : (
    <Label cl={cl} fs={fs} fw={fw} lh={lh}>
      {children}
    </Label>
  );
};

export default Presenter;
