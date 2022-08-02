import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Page,
  Content,
} from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import type { ComponentEntity, GroupEntity } from '@backstage/catalog-model';
import {useRouteRef} from "@backstage/core-plugin-api";
import {groupRouteRef} from "../../routes";

export const ExampleComponent = () => {
  const { entity } = useEntity<ComponentEntity | GroupEntity>();

  const groupRoute = useRouteRef(groupRouteRef)

  return (
    <Page themeId="tool">
      <Content>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <InfoCard title="Information card">
              <Typography variant="body1">
                {entity.kind === 'Component' ? groupRoute() : 'Team component'}
              </Typography>
            </InfoCard>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
