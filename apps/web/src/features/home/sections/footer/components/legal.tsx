export function Legal() {
    const year = new Date().getFullYear();

    return (
        <p className='text-muted-foreground text-xs'>&copy; {year} Ordo. All rights reserved.</p>
    );
}
