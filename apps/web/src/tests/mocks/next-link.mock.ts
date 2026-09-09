import { type ComponentProps, createElement } from 'react';

export const Link = (props: ComponentProps<'a'>) => createElement('a', props);
