import { Home } from 'renderer/page/home';
import { NoMatch } from 'renderer/page/noMatch/idnex';

export const routeConfigs: IRouteConfig[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NoMatch,
  },
];
