import React, { ReactNode } from 'react';
import '../../theme/base.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => <main>{children}</main>

export { Layout };
