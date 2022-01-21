// @flow

import React from 'react';
import { APP_NAME } from '../config';

const Footer = (): React$Element<"div"> => (
  <div className='container mt-5'>
    <hr />
    <footer>
      <p>© {APP_NAME} 2022</p>
    </footer>
  </div>
);

export default Footer;
