import React from 'react';
import { storiesOf } from '@storybook/react';
import {Button} from '../components/Button';
import { withInfo } from '@storybook/addon-info';
import { action, configureActions } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import button from './button.md'

// storiesOf('Button', module)
//   .add('基本用法',
//     withInfo(`
//       description or documentation about my component, supports markdown
    
//       ~~~js
//       <Button>测试按钮</Button>
//       ~~~
    
//     `)(() =>
//       <Button>测试按钮</Button>
//     )
//   )

storiesOf('Button', module)
  .add('基本用法',
    withInfo({
      // inline: true,
      markdwon: button
    })(() =>
      <Button onClick={ action('clicked')}>测试按钮</Button>
    )

  )
  .add('First', () => (
    <button onClick={linkTo('Button', 'Second')}>Go to "Second"</button>
  ))
  .add('Second', () => (
    <button onClick={linkTo('Button', 'First')}>Go to "First"</button>
  ))
