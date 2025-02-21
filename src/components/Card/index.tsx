import classnames from 'classnames'
import React, { forwardRef } from 'react'

import { BaseComponentProps } from '@models/BaseProps'
import './style.scss'

interface CardProps extends BaseComponentProps {
    ref?: React.ForwardedRef<HTMLDivElement>
}

export const Card = forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref) => {
    const { className, style, children } = props
    return (
        <div className={classnames('card', className)} style={style} ref={ref}>
            { children }
        </div>
    )
})
