import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Select from "../components/Select";
import DefaultDemo from "./DefaultDemo";
//import { Button, Welcome } from '@storybook/react/demo';



//
// const style = {
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     width: '100vw',
//     height:'100vh',
// };

const items = ['Item1','Item2','Item3','Item4',]

const Presentation = () => (
        <DefaultDemo items={items}/>
    );




storiesOf('Javascript Ninja', module).add('DefaultDemo', () => (
    <Presentation />));



// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
