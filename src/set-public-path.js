import { setPublicPath } from 'systemjs-webpack-interop';

setPublicPath(`@${process.env.ORG_NAME}/${process.env.PROJECT_NAME}`);
