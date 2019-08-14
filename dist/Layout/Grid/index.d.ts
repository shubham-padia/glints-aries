import GlintsContainer from '../../Style/GlintsContainerStyle';
import Col from './Col';
import Row from './Row';
declare type Grid = typeof GlintsContainer & {
    Col?: typeof Col;
    Row?: typeof Row;
};
declare const Grid: Grid;
export default Grid;
