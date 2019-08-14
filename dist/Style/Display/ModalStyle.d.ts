export declare const ModalContainer: import("styled-components").StyledComponent<"div", any, ModalContainerProps, never>;
interface ModalContainerProps {
    isOpen: boolean;
    centering: boolean;
    removeAnimation: boolean;
}
export declare const ModalDialog: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ModalContentArea: import("styled-components").StyledComponent<"div", any, ModalContentAreaProps, never>;
interface ModalContentAreaProps {
    hideContentArea?: boolean;
    size?: string;
    centering?: boolean;
    removeAnimation?: boolean;
    isOpen?: boolean;
}
export declare const ModalHeader: import("styled-components").StyledComponent<"header", any, {}, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"section", any, ModalBodyProps, never>;
interface ModalBodyProps {
    hideContentArea: boolean;
}
export declare const ModalFooter: import("styled-components").StyledComponent<"footer", any, {}, never>;
export {};
