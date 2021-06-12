import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import P from '../components/P'

export default () => (
  <Layout
    prev="/examples/around-the-web/"
    prevLabel="Examples: around the web"
    next="/considerations/"
    nextLabel="Considerations"
    title="Browser support"
    description="This package is not supported in Internet Explorer. If you experience problems in other browsers, make sure you're using an SVG instead of regular HTML elements in the component."
  >
    <H1>Browser support</H1>
    <P large smallMargin>
      This package is not supported in Internet Explorer. If you're having problems on iOS (which has a few bugs regarding SVG filters), you can apply the following changes:
    </P>
    <List
      items={[
        'Make sure there is enough extra space on all sides inside the SVG',
        'Animate all elements (instead of just a selection) to reduce artifacts',
      ]}
    />
  </Layout>
)

const List = ({ items }: { items: string[] }) => (
  <ul className="font-semibold">
    {items.map((item, key) => (
      <li
        key={key}
        className={`
        flex
        items-center
        ${key === items.length - 1 ? '' : 'mb-3'}
      `}
      >
        <div className="mr-2">👉</div>
        <div>{item}</div>
      </li>
    ))}
  </ul>
)
