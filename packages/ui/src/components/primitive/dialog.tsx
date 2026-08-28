'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';

function DialogRoot(props: DialogPrimitive.Root.Props) {
    return <DialogPrimitive.Root {...props} />;
}

function DialogTrigger(props: DialogPrimitive.Trigger.Props) {
    return <DialogPrimitive.Trigger {...props} />;
}

function DialogPortal(props: DialogPrimitive.Portal.Props) {
    return <DialogPrimitive.Portal {...props} />;
}

function DialogViewport(props: DialogPrimitive.Viewport.Props) {
    return <DialogPrimitive.Viewport {...props} />;
}

function DialogPopup(props: DialogPrimitive.Popup.Props) {
    return <DialogPrimitive.Popup {...props} />;
}

function DialogTitle(props: DialogPrimitive.Title.Props) {
    return <DialogPrimitive.Title {...props} />;
}

function DialogClose(props: DialogPrimitive.Close.Props) {
    return <DialogPrimitive.Close {...props} />;
}

export {
    DialogClose,
    DialogPopup,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
    DialogViewport,
};
