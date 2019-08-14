import * as React from 'react';
import { ProgressContainer } from '../../Style/Display/ProgressStyle';
declare const Progress: React.FunctionComponent<Props>;
interface Props extends Omit<React.ComponentPropsWithoutRef<typeof ProgressContainer>, 'progress'> {
    percentage: number;
    percentageRange?: [] | [number] | [number, number];
    size?: number;
    content?: React.ReactNode;
}
export default Progress;
