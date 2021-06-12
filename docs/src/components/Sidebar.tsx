import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div
    className="
      mt-8
      md:mt-0
      w-full
      md:w-1/3
      lg:w-1/4
      flex-none
      mr-8
      lg:mr-16
      order-last
      md:order-first
    "
  >
    <div className="bg-cool-gray-100 rounded-lg md:sticky md:top-8 md:mt-2 p-6">
      <A href="/" title="Home" upper />
      <ul className="ml-4">
        <li>
          <A href="/" title="Installation" />
        </li>
        <li>
          <A href="/" title="Usage" />
        </li>
      </ul>
      <A href="/properties/" title="Properties" upper margin />
      <ul className="ml-4">
        <li>
          <A href="/properties/intensity/" title="intensity" />
        </li>
        <li>
          <A href="/properties/composite/" title="composite" />
        </li>
        <li>
          <A href="/properties/id/" title="id" />
        </li>
        <li>
          <A href="/properties/layer/" title="layer" />
        </li>
        <li>
          <A href="/properties/svgProps/" title="svgProps" />
        </li>
      </ul>
      <A href="/tutorial/" title="Tutorial" upper margin />
      <A href="/examples/" title="Examples" upper smallMargin />
      <ul className="ml-4">
        <li>
          <A href="/examples/dotted-loader/" title="Dotted loader" />
        </li>
        <li>
          <A href="/examples/rotating-loader/" title="Rotating loader" />
        </li>
        <li>
          <A href="/examples/random-blob/" title="Random blob" />
        </li>
        <li>
          <A href="/examples/around-the-web/" title="Around the web" />
        </li>
      </ul>
      <A href="/browser-support/" title="Browser support" upper margin />
      <A href="/considerations/" title="Considerations" upper smallMargin />
    </div>
  </div>
)

const A = ({
  href,
  title,
  upper,
  margin,
  smallMargin,
}: {
  href: string
  title: string
  upper?: boolean
  margin?: boolean
  smallMargin?: boolean
}) => (
  <Link
    to={href}
    className={`
      hover:text-purple-600
      block
      py-1
      ${smallMargin ? 'mt-3' : margin ? 'mt-6' : ''}
      ${upper ? 'text-sm font-bold tracking-wide uppercase mb-1' : ''}
  `}
  >
    {title}
  </Link>
)
