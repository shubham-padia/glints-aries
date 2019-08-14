export declare const TextFieldContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TextFieldLabel: import("styled-components").StyledComponent<"label", any, TextFieldLabelProps, never>;
interface TextFieldLabelProps {
    small: boolean;
    floating: boolean;
    status: string;
}
export declare const TextFieldInput: import("styled-components").StyledComponent<"input", any, TextFieldInputProps, never>;
interface TextFieldInputProps {
    small?: boolean;
    status?: string;
    disableTyping?: boolean;
    floating?: boolean;
}
export {};
