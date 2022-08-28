import { makePublicRoute } from "lib/routes";
import {trimEnd} from 'lodash-es';

const generateRoute = (path: string, params: string[]) => {
    return [trimEnd(makePublicRoute(path), '/'), params.join('/')].join('/');
  };


const navMenuItems = [
    {
      name: 'STORE',
      matcher: '/store',
      routeCallback: (params: string[] = []) =>
        generateRoute('/store', params),
      persistLocation: true,
    },
    {
      name: 'BLOG',
      matcher: '/blog',
      routeCallback: (params: string[] = []) =>
        generateRoute('/blog', params),
      persistLocation: true,
    },
    {
      name: 'AUTHORS',
      matcher: '/authors',
      routeCallback: (params: string[] = []) =>
        generateRoute('/authors', params),
      persistLocation: true,
    },

];


export default navMenuItems;