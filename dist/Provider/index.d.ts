import * as React from 'react';
export declare class Uikit {
    publicPath: string;
    assetsMap: Map<string, string>;
    Link: React.ComponentType<any>;
    constructor(publicPath: string, LinkComponent: React.ComponentType<any>);
    getUrl: (assetPath: string) => string;
}
export declare const UikitProvider: React.ComponentClass<import("create-react-context").ProviderProps<Uikit>, any>;
export declare const UikitConsumer: React.ComponentClass<import("create-react-context").ConsumerProps<Uikit>, any>;
