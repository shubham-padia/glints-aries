export declare const AutoCompleteContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const AutoCompleteWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const AutoCompleteLabel: import("styled-components").StyledComponent<"label", any, AutoCompleteLabelProps, never>;
interface AutoCompleteLabelProps {
    small: boolean;
    floating: boolean;
    status: string;
}
export declare const AutoCompleteInput: import("styled-components").StyledComponent<"input", any, AutoCompleteInputProps, never>;
interface AutoCompleteInputProps {
    floating?: boolean;
    small?: boolean;
    status?: string;
}
export declare const AutoCompleteListWrapper: import("styled-components").StyledComponent<"ul", any, AutoCompleteListWrapperProps, never>;
interface AutoCompleteListWrapperProps {
    open: boolean;
    small: boolean;
}
export declare const AutoCompleteItemWrapper: import("styled-components").StyledComponent<"li", any, AutoCompleteItemWrapperProps, never>;
interface AutoCompleteItemWrapperProps {
    disabled?: boolean;
}
export {};
