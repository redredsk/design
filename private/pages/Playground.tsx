import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

import Column from '../components/Column';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Row from '../components/Row';
import Text from '../components/Text';

import css from './Playground.css';

console.log(css);

class Playground extends Page {
  constructor () {
    super(-1, 'Playground');
  }

  element () {
    return (
      <Container>
        <Row alignItems="#" justifyContent="#" mY={4}>
          <Column className="border p-y-2" columnSize="width">Column 1</Column>
          <Column className="border p-y-4" columnSize="width">Column 2</Column>
        </Row>
        <Row alignItems="end" flexDirection="row-reverse" justifyContent="end" mY={4}>
          <Column className="border p-y-2" columnSize="width">Column 1</Column>
          <Column className="border p-y-4" columnSize="width">Column 2</Column>
        </Row>
        <Row mY={4}>
          <Column className="border p-y-2">1</Column>
          <Column className="border p-y-2">2</Column>
          <Column className="border p-y-2">3</Column>
          <Column className="border p-y-2">4</Column>
          <Column className="border p-y-2">5</Column>
          <Column className="border p-y-2">6</Column>
          <Column className="border p-y-2">7</Column>
          <Column className="border p-y-2">8</Column>
          <Column className="border p-y-2">9</Column>
          <Column className="border p-y-2">10</Column>
          <Column className="border p-y-2">11</Column>
          <Column className="border p-y-2">12</Column>
        </Row>
        <Row alignItems="#" mY={4}>
          <Column className="border p-y-2" columnOffset={1} columnSize={4}>Column 1</Column>
          <Column className="border p-y-4" columnOffset={2} columnSize={4}>Column 2</Column>
        </Row>
        <div className="m-y-4">
          <Heading textSize={1}>Heading</Heading>
          <Heading textSize={2}>Heading</Heading>
          <Heading textSize={3}>Heading</Heading>
          <Heading textSize={4}>Heading</Heading>
          <Heading textSize={5}>Heading</Heading>
          <Heading textSize={6}>Heading</Heading>
          <Link to="#">Link</Link>
          <Text>Text</Text>
        </div>
      </Container>
    );
  }

  template = template();
}

export default Playground;
