import React from 'react'
import Divider from '../../components/Divider'
import H1 from '../../components/H1'
import Tag from '../../components/Tag'
import Example from '../../components/Example'
import Code from '../../components/Code'
import Goo from 'gooey-react'
import Goo2 from '../../../../src'
import P from '../../components/P'
import Layout from '../../components/Layout'

export default () => (
  <Layout
    prev="/properties/intensity/"
    prevLabel="Prop: intensity"
    next="/properties/id/"
    nextLabel="Prop: id"
    title="Prop: composite"
    description="By default, the effect is applied to everything within the component. With this approach, the goo is at its most effective: both shapes and colors will merge together."
  >
    <H1>Prop: composite</H1>
    <P large smallMargin>
      By default, the effect is applied to everything within the component. With
      this approach, the goo is at its most effective: both shapes and colors
      will merge together. However, certain things (like sharp edges) will end
      up being morphed or invisible.
    </P>
    <P large>
      There are two ways to solve this problem. The recommended way is to simply
      move those elements outside of the component and place them on top. In
      some cases, this isn't practical. The <Tag>composite</Tag> property can be
      used as an alternative. It will essentially duplicate everything inside
      the component, and place it on top without alterations.
    </P>
    <Divider />
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-6 lg:mb-8">
      <PreviewOne composite={false} id="example_one_left" margin />
      <PreviewOne composite={true} id="example_one_right" />
    </div>
    <P>As you can see, colors will not blend when you apply a composite.</P>
    <Divider />
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-6 lg:mb-8">
    <PreviewTwoTest id="example_two_left" margin />
      <PreviewTwo composite={true} id="example_two_right" />
    </div>
    <P>
      On the other hand, a rectangle with still render as expected. As noted,
      this can also be achieved by moving the rectangle outside of the component
      and placing it on top manually.
    </P>
  </Layout>
)

const PreviewOne = ({
  composite,
  id,
  margin,
}: {
  composite: boolean
  id: string
  margin?: boolean
}) => (
  <div
    className={`
    flex
    flex-col
    items-start
    ${margin ? 'mb-8 md:mb-12 lg:mb-0' : ''}
  `}
  >
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      {composite && <span className="text-purple-700">{' composite'}</span>}
      <span className="text-blue-700">{'>'}</span>
      <span className="text-cool-gray-500 select-none"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <Example>
      <Goo composite={composite} id={id} intensity="strong">
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          className="w-64 h-64"
        >
          <g>
            <circle cx="34.3%" cy="50%" r="40" fill="deepskyblue" />
            <circle cx="65.7%" cy="50%" r="40" fill="cornflowerblue" />
          </g>
        </svg>
      </Goo>
    </Example>
  </div>
)

const PreviewTwoTest = ({
  id,
  margin,
}: {
  id: string
  margin?: boolean
}) => (
  <div
    className={`
    flex
    flex-col
    items-start
    ${margin ? 'mb-8 md:mb-12 lg:mb-0' : ''}
  `}
  >
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
      <span className="text-cool-gray-500 select-none"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <Example>
      <Goo2 id={id} svgProps={{ role: 'img', "aria-label": 'img', className: 'w-64 h-64' }}
        layer={
          <rect
            x="20%"
            y="47.5%"
            width="60%"
            height="25%"
            fill="blue"
          />
        }
      >
        <circle
          cx="50%"
          cy="60%"
          r="24"
          fill="mediumturquoise"
          style={{
            animation: 'rise 1.5s ease-in-out infinite alternate',
          }}
        />
        <rect
          x="20%"
          y="47.5%"
          width="60%"
          height="25%"
          fill="blue"
        />
      </Goo2>
    </Example>
  </div>
)


const PreviewTwo = ({
  composite,
  id,
  margin,
}: {
  composite: boolean
  id: string
  margin?: boolean
}) => (
  <div
    className={`
    flex
    flex-col
    items-start
    ${margin ? 'mb-8 md:mb-12 lg:mb-0' : ''}
  `}
  >
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      {composite && <span className="text-purple-700">{' composite'}</span>}
      <span className="text-blue-700">{'>'}</span>
      <span className="text-cool-gray-500 select-none"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <Example>
      <Goo composite={composite} id={id}>
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          className="w-64 h-64"
        >
          <g>
            <circle
              cx="50%"
              cy="60%"
              r="24"
              fill="mediumturquoise"
              style={{
                animation: 'rise 1.5s ease-in-out infinite alternate',
              }}
            />
            <rect
              x="20%"
              y="47.5%"
              width="60%"
              height="25%"
              fill="blue"
            />
          </g>
        </svg>
      </Goo>
    </Example>
  </div>
)
