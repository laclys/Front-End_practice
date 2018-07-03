import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/button.stories.js');
}

configure(loadStories, module);