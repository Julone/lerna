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
    noID: {
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
    disabledPopover: {
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
    data: import("vue").Ref<any>;
    user_icon: import("vue").Ref<any>;
    isLoading: import("vue").Ref<boolean>;
    isHigh: () => any;
    props: import(".pnpm/@vue+shared@3.4.31/node_modules/@vue/shared").LooseRequired<{
        readonly size: string | number;
        readonly data: any;
        readonly color: string;
        readonly closable: boolean;
        readonly shape: string;
        readonly disabled: boolean;
        readonly hidePopover: boolean;
        readonly onlyIcon: boolean;
        readonly onlyName: boolean;
        readonly noID: boolean;
        readonly linkType: any;
        readonly disabledPopover: boolean;
        readonly tag: boolean;
        readonly suffix: string;
        readonly is_highlight: Function;
        readonly onClose?: ((...args: any[]) => any) | undefined;
    } & {}>;
    attrs: {
        [x: string]: unknown;
    };
    emit: (event: "close", ...args: any[]) => void;
    onClose: () => void;
    global_disabled_avatar_card: boolean;
    targetRef: import("vue").Ref<any>;
    avatarRef: import("vue").Ref<any>;
    popoverVisible: import("vue").Ref<boolean>;
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
    noID: {
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
    disabledPopover: {
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
    data: any;
    color: string;
    closable: boolean;
    shape: string;
    disabled: boolean;
    hidePopover: boolean;
    onlyIcon: boolean;
    onlyName: boolean;
    noID: boolean;
    linkType: any;
    disabledPopover: boolean;
    tag: boolean;
    suffix: string;
    is_highlight: Function;
}, {}>;
export default _default;
