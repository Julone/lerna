declare const _default: import("vue").DefineComponent<Readonly<{
    userinfo?: any;
}>, any, {
    showViewer: boolean;
    spacer: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    isDark: boolean;
    extraInfo: null;
    seeAllProjects: boolean;
    seeAllRoles: boolean;
}, {
    projectslist(): any;
    projectslistCount(): any;
    extraInfogroups(): any;
    extraInfogroupsCount(): any;
}, {
    onChat(account: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    userinfo?: any;
}>>>, {
    readonly userinfo?: any;
}, {}>;
export default _default;
