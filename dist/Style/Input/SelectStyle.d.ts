export declare const SelectContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SelectWrapper: import("styled-components").StyledComponent<"div", any, SelectWrapperProps, never>;
interface SelectWrapperProps {
    isFocus: boolean;
}
export declare const SelectLabel: import("styled-components").StyledComponent<"label", any, SelectLabelProps, never>;
interface SelectLabelProps {
    floating: boolean;
    small: boolean;
    status: string;
}
export declare const SelectInput: import("styled-components").StyledComponent<"input", any, SelectInputProps, never>;
interface SelectInputProps {
    disableTyping?: boolean;
    floating?: boolean;
    small?: boolean;
    status?: string;
}
export declare const SelectListWrapper: import("styled-components").StyledComponent<"ul", any, SelectListWrapperProps, never>;
interface SelectListWrapperProps {
    open: boolean;
    small: boolean;
}
export declare const SelectItemWrapper: import("styled-components").StyledComponent<"li", any, SelectItemWrapperProps, never>;
interface SelectItemWrapperProps {
    disabled?: boolean;
}
export {};
