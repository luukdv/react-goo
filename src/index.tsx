import React, { ReactNode, SVGAttributes } from 'react'

const Goo = ({
  children,
  intensity = 'medium',
  id = 'gooey-react',
  layer,
  svgProps,
}: {
  children: ReactNode;
  intensity?: 'weak' | 'medium' | 'strong';
  id?: string;
  layer?: ReactNode,
  svgProps?: SVGAttributes<{}>;
}) => {
  const blur = intensity === 'weak' ? 8 : intensity === 'strong' ? 16 : 12
  const alpha = blur * 6
  const shift = alpha / -2
  const r = '1 0 0 0 0'
  const g = '0 1 0 0 0'
  const b = '0 0 1 0 0'
  const a = `0 0 0 ${alpha} ${shift}`

  return (
    <>
      <svg
        data-testid="svg"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
        }}
      >
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            data-testid="filter"
            id={id}
          >
            <feGaussianBlur
              data-testid="blur"
              stdDeviation={blur}
            />
            <feColorMatrix
              values={`${r} ${g} ${b} ${a}`}
            />
          </filter>
        </defs>
      </svg>
      <svg
        data-testid="element"
        {...svgProps}
      >
        <g style={{ filter: `url(#${id})` }}>
          {children}
        </g>
        {layer && (
          <g>{layer}</g>
        )}
      </svg>
    </>
  )
}

export default Goo
