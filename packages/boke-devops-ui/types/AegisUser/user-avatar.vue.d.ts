declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    id?: string | number | undefined;
    size?: number | "default" | "small" | "large" | undefined;
    hidePopover?: boolean | undefined;
    onlyIcon?: boolean | undefined;
    onlyName?: boolean | undefined;
    linkType?: any;
    userinfo?: any;
    shape?: string | undefined;
    animated?: boolean | undefined;
    insidePopover?: boolean | undefined;
    noID?: boolean | undefined;
    noDialogDetail?: boolean | undefined;
    tag?: boolean | undefined;
    closable?: boolean | undefined;
    color?: string | undefined;
    disabled?: boolean | undefined;
    suffix?: string | undefined;
}>, {
    id: string;
    size: number;
    hidePopover: boolean;
    onlyIcon: boolean;
    onlyName: boolean;
    linkType: string;
    userinfo: null;
    shape: string;
    animated: boolean;
    insidePopover: boolean;
    noID: boolean;
    noDialogDetail: boolean;
    tag: boolean;
    closable: boolean;
    color: string;
    disabled: boolean;
    suffix: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onScaleAvator: (...args: any[]) => void;
    close: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    id?: string | number | undefined;
    size?: number | "default" | "small" | "large" | undefined;
    hidePopover?: boolean | undefined;
    onlyIcon?: boolean | undefined;
    onlyName?: boolean | undefined;
    linkType?: any;
    userinfo?: any;
    shape?: string | undefined;
    animated?: boolean | undefined;
    insidePopover?: boolean | undefined;
    noID?: boolean | undefined;
    noDialogDetail?: boolean | undefined;
    tag?: boolean | undefined;
    closable?: boolean | undefined;
    color?: string | undefined;
    disabled?: boolean | undefined;
    suffix?: string | undefined;
}>, {
    id: string;
    size: number;
    hidePopover: boolean;
    onlyIcon: boolean;
    onlyName: boolean;
    linkType: string;
    userinfo: null;
    shape: string;
    animated: boolean;
    insidePopover: boolean;
    noID: boolean;
    noDialogDetail: boolean;
    tag: boolean;
    closable: boolean;
    color: string;
    disabled: boolean;
    suffix: string;
}>>> & {
    onOnScaleAvator?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    id: string | number;
    size: number | "default" | "small" | "large";
    hidePopover: boolean;
    onlyIcon: boolean;
    onlyName: boolean;
    linkType: any;
    userinfo: any;
    shape: string;
    animated: boolean;
    insidePopover: boolean;
    noID: boolean;
    noDialogDetail: boolean;
    tag: boolean;
    closable: boolean;
    color: string;
    disabled: boolean;
    suffix: string;
}, {}>, {
    prefix?(_: {}): any;
    default?(_: {
        scoped: any;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
