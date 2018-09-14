import React from 'react';
import { storiesOf } from '@storybook/react';

import DefaultDemo from "./DefaultDemo";
import MultipleDemo from "./MultipleDemo";
import CssCustomizeDemo from  './CssCustomizeDemo'
import ValueCustomizeDemo from './ValueCustomizeDemo'
import DemoDialog from './Demo@1.0.0/index'
import DemoDialog2 from './Demo@2.0.0/index'
import DemoDialog3 from './Demo@3.0.0/index'
import DemoDialog4 from './Demo@4.0.0/index'

const items = ['Item 1','Item 2','Item 3','Item 4',]


const Presentation = () => (
        <DefaultDemo items={items}/>
    );


storiesOf('Basic React', module)
    .add('DemoDialog', () => <DemoDialog />)
    .add('DemoDialog2', () => <DemoDialog2 />)
    .add('DemoDialog3', () => <DemoDialog3 />)
    .add('DemoDialog4', () => <DemoDialog4 />);

storiesOf('Javascript Ninja', module)
    .add('DefaultDemo', () => <Presentation />)
    .add('Multiple Demo',()=> <MultipleDemo items={items}/>)
    .add('Css Customize Demo',()=> <CssCustomizeDemo items={items}/>)
    .add('Value Customize Demo',()=> <ValueCustomizeDemo items={items}/>);



