import * as React from 'react';
import { ProfilePictureContainer } from '../../Style/General/ProfilePictureStyle';
declare class ProfilePicture extends React.Component<Props, State> {
    state: {
        isHover: boolean;
    };
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    render(): JSX.Element;
}
interface Props extends React.ComponentPropsWithoutRef<typeof ProfilePictureContainer> {
    editable?: boolean;
    children: React.ReactNode;
}
interface State {
    isHover: boolean;
}
export default ProfilePicture;
