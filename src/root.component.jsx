import React from 'react';
import { mountRootParcel } from 'single-spa';
import ParcelComponent from 'single-spa-react/parcel';
import { createJss, rtl, jssPreset, StylesProvider, useTheme } from '@openemp/styleguide';
import { withAuth } from '@openemp/login';

// eslint-disable-next-line no-undef
const remoteImport = async (url) => System.import(url);
const jss = createJss({ plugins: [...jssPreset().plugins, rtl()] });

const Root = () => {
  const theme = useTheme();
  const lang = JSON.parse(localStorage.getItem('lang'));
  if (lang) {
    theme.direction = lang.dir;
    document.querySelector('body').setAttribute('dir', lang.dir);
  }

  return ['@openemp/navbar', '@openemp/drawer'].map((ele) => (
    <ParcelComponent
      key={ele}
      config={remoteImport(ele)}
      mountParcel={mountRootParcel}
      StylesProvider={StylesProvider}
      jss={jss}
    />
  ));
};

export default withAuth(Root);
