import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/layout/__stories__/Header.story');
  require('../src/components/layout/__stories__/Footer.story');
  require('../src/components/table/__stories__/Table.story');
}

configure(loadStories, module);
