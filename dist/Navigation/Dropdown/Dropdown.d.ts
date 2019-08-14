import * as React from 'react';
import Icon from '../../General/Icon';
import { DropdownContainer, DropdownHeader, DropdownBody } from '../../Style/Navigation/DropdownStyle';
import { Props as DropdownItemProps } from './DropdownItem';
declare class Dropdown extends React.Component<Props, State> {
    static Item: React.FunctionComponent<DropdownItemProps>;
    static defaultProps: {
        showHoverLine: boolean;
        dropDownPlacement: string;
        noLineBreak: boolean;
        iconDefaultColor: string;
        showFullWidth: boolean;
    };
    dropdownBodyRef: React.RefObject<HTMLUListElement>;
    constructor(props: Props);
    handleOpen: () => void;
    hoverOpen: () => void;
    hoverClose: () => void;
    handleClose: () => void;
    handleClickItem: (onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    handleMouseEnter: (index: number) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare type PropsFromDropdownContainer = Omit<React.ComponentPropsWithoutRef<typeof DropdownContainer>, 'onChange'>;
declare type PropsFromDropdownHeader = Pick<React.ComponentPropsWithoutRef<typeof DropdownHeader>, 'disabled' | 'showHoverLine' | 'showFullWidth'>;
declare type PropsFromDropdownBody = Pick<React.ComponentPropsWithoutRef<typeof DropdownBody>, 'dropDownPlacement' | 'noLineBreak' | 'showFullWidth' | 'showHoverLine'>;
interface Props extends PropsFromDropdownContainer, PropsFromDropdownHeader, PropsFromDropdownBody {
    children: React.ReactNode;
    label: string;
    hoverToOpen?: boolean;
    leftIconName?: React.ComponentPropsWithoutRef<typeof Icon>['name'];
    itemElement?: React.ReactNode;
    iconDefaultColor: string;
    onChange?(value: string): void;
}
interface State {
    isOpen: boolean;
    dropdownLabel: string;
    cursor: number;
}
export default Dropdown;
