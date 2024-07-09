declare const _default: import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    hidePopover: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    onlyIcon: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    onlyName: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    linkType: {
        type: null;
        required: false;
        default: string;
    };
    data: {
        type: null;
        required: false;
        default: null;
    };
    shape: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    insidePopover: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noID: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noDialogDetail: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    suffix: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    is_highlight: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
}, {
    user_name: import("vue").ComputedRef<any>;
    dept_name: import("vue").ComputedRef<any>;
    user_id: import("vue").ComputedRef<any>;
    data: boolean;
    user_icon: import("vue").Ref<any>;
    isLoading: import("vue").Ref<boolean>;
    isHigh: () => any;
    props: import(".pnpm/@vue+shared@3.4.31/node_modules/@vue/shared").LooseRequired<{
        readonly size: string | number;
        readonly shape: string;
        readonly disabled: boolean;
        readonly color: string;
        readonly closable: boolean;
        readonly data: any;
        readonly hidePopover: boolean;
        readonly onlyIcon: boolean;
        readonly onlyName: boolean;
        readonly linkType: any;
        readonly insidePopover: boolean;
        readonly noID: boolean;
        readonly noDialogDetail: boolean;
        readonly tag: boolean;
        readonly suffix: string;
        readonly is_highlight: Function;
        readonly onClose?: ((...args: any[]) => any) | undefined;
    } & {}>;
    onShowPopover: () => void;
    onClosePopover: () => void;
    attrs: {
        [x: string]: unknown;
    };
    emit: (event: "close", ...args: any[]) => void;
    onClose: () => void;
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    hidePopover: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    onlyIcon: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    onlyName: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    linkType: {
        type: null;
        required: false;
        default: string;
    };
    data: {
        type: null;
        required: false;
        default: null;
    };
    shape: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    insidePopover: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noID: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noDialogDetail: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    tag: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    suffix: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    is_highlight: {
        type: FunctionConstructor;
        required: false;
        default: () => boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    size: string | number;
    shape: string;
    disabled: boolean;
    color: string;
    closable: boolean;
    data: any;
    hidePopover: boolean;
    onlyIcon: boolean;
    onlyName: boolean;
    linkType: any;
    insidePopover: boolean;
    noID: boolean;
    noDialogDetail: boolean;
    tag: boolean;
    suffix: string;
    is_highlight: Function;
}, {}>;
export default _default;
