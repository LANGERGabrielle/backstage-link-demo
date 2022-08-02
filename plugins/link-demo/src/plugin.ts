import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { groupRouteRef, websiteRouteRef } from './routes';

export const linkDemoPlugin = createPlugin({
  id: 'link-demo',
});

export const LinkDemoGroupPage = linkDemoPlugin.provide(
  createRoutableExtension({
    name: 'LinkDemoGroupPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: groupRouteRef,
  }),
);

export const LinkDemoWebsitePage = linkDemoPlugin.provide(
  createRoutableExtension({
    name: 'LinkDemoWebsitePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: websiteRouteRef,
  }),
);
