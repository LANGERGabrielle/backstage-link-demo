import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { linkDemoPlugin, LinkDemoPage } from '../src/plugin';

createDevApp()
  .registerPlugin(linkDemoPlugin)
  .addPage({
    element: <LinkDemoPage />,
    title: 'Root Page',
    path: '/link-demo'
  })
  .render();
