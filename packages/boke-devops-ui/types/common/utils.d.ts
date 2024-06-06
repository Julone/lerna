export declare const allProps: {
    name: string;
    default: string;
    type: StringConstructor;
    description: string;
    inDemo: boolean;
    options: string[];
}[];
export declare const defaultOptions: Record<string, any>;
declare const utils: {
    options: {
        [x: string]: any;
    };
};
export default utils;
export declare function getDefault(key: string): any;
export declare function toLowerCase<T extends string>(str: T): Lowercase<T>;
export declare function toUpperCase<T extends string>(str: T): Uppercase<T>;
