interface ButtonProps {
    small?: boolean;
}
export declare const DefaultBtnContainer: import("styled-components").StyledComponent<"div", any, DefaultBtnContainerProps, never>;
interface DefaultBtnContainerProps {
    block: boolean;
    disabled: boolean;
    removeHoverEffect: boolean;
}
export declare const DefaultBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & DefaultBtnProps, never>;
interface DefaultBtnProps {
    block: boolean;
}
export declare const PrimaryContainer: import("styled-components").StyledComponent<"div", any, PrimaryContainerProps, never>;
interface PrimaryContainerProps {
    block: boolean;
    disabled: boolean;
}
export declare const PrimaryBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & PrimaryBtnProps, never>;
interface PrimaryBtnProps {
    block: boolean;
}
export declare const SecondaryBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & SecondaryBtnProps, never>;
interface SecondaryBtnProps {
    block: boolean;
}
export declare const SecondaryContainer: import("styled-components").StyledComponent<"div", any, SecondaryContainerProps, never>;
interface SecondaryContainerProps {
    block: boolean;
    disabled: boolean;
}
export declare const GhostBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & GhostBtnProps, never>;
interface GhostBtnProps {
    block: boolean;
}
export declare const GhostBtnContainer: import("styled-components").StyledComponent<"div", any, GhostBtnContainerProps, never>;
interface GhostBtnContainerProps {
    block: boolean;
    disabled: boolean;
    removeHoverEffect: boolean;
}
export declare const LinkBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & LinkBtnProps, never>;
interface LinkBtnProps {
    block?: boolean;
}
export {};
