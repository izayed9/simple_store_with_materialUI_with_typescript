import { makePublicRoute } from "lib/routes";
import {trimEnd} from 'lodash-es';

const generateRoute = (path: string, params: string[]) => {
    return [trimEnd(makePublicRoute(path), '/'), params.join('/')].join('/');
  };


const BottomNavMenuItems = [
    {
      name: 'CRREAR',
      matcher: '/crrear',
      routeCallback: (params: string[] = []) =>
        generateRoute('/crrear', params),
      persistLocation: true,
    },
    {
      name: 'TUTORIALS',
      matcher: '/tutorals',
      routeCallback: (params: string[] = []) =>
        generateRoute('/tutorals', params),
      persistLocation: true,
    },

    {
        name: 'SOFTWARE DESIGN',
        matcher: '/software-design',
        routeCallback: (params: string[] = []) =>
          generateRoute('/software-design', params),
        persistLocation: true,
    },
    {
        name: 'TESTING',
        matcher: '/testing',
        routeCallback: (params: string[] = []) =>
          generateRoute('/testing', params),
        persistLocation: true,
      },

];


export default BottomNavMenuItems;