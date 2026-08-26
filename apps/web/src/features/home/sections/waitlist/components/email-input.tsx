import { useFormContext } from '@/features/home/sections/waitlist/hooks';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface Props {
    className?: string;
}

export function EmailInput({ className }: Props) {
    const { validation, action } = useFormContext();
    const invalid = validation.success === false;

    const handleBlur = ({ target }: InputEvent) =>
        target.value && validation.checkEmail(target.value);

    const handleChange = () => invalid && validation.clear();

    return (
        <input
            id='email'
            type='email'
            name='email'
            autoComplete='off'
            placeholder='you@company.com'
            className={className}
            disabled={action.isPending}
            aria-invalid={invalid}
            aria-disabled={action.isPending}
            onBlur={handleBlur}
            onChange={handleChange}
        />
    );
}
