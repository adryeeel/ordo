import { forwardRef, Children } from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@ordo/ui/lib/utils';
import { buttonVariants } from '@ordo/ui/primitive/button';

type AnchorVariants = VariantProps<typeof buttonVariants>;
type AnchorAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface AnchorProps extends AnchorAttributes, AnchorVariants {
    external?: boolean;
}

export const AnchorButton = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
    const {
        rel,
        size,
        target,
        variant,
        external,
        children,
        className,
        'aria-label': ariaLabel,
        ...rest
    } = props;

    const hasTextContent = Children.toArray(children).some(
        (child) => typeof child === 'string' || typeof child === 'number',
    );

    if (process.env.NODE_ENV !== 'production' && !hasTextContent && !ariaLabel) {
        console.warn(
            'AnchorButton: icon-only link is missing an aria-label. Screen readers will have no accessible name for it.',
        );
    }
    const isExternal = external ?? target === '_blank';

    const label = isExternal && ariaLabel ? `${ariaLabel} (opens in a new tab)` : ariaLabel;

    return (
        <a
            ref={ref}
            aria-label={label}
            target={isExternal ? '_blank' : target}
            rel={isExternal ? cn('noopener noreferrer', rel) : rel}
            className={cn(buttonVariants({ variant, size, className }))}
            {...rest}
        >
            {children}
        </a>
    );
});
