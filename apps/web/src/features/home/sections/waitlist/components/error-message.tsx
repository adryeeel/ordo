interface Props {
    message?: string;
}

export function ErrorMessage({ message }: Props) {
    if (!message) return null;

    return <p className='group-data-[invalid=true]:text-destructive text-sm'>{message}</p>;
}
