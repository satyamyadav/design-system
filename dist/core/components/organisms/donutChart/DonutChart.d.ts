/// <reference types="react" />
import { BaseProps } from '@/utils/types';
export interface Data {
    name: string;
    value: any;
}
export interface DonutChartProps extends BaseProps {
    data: Data[];
    withLegends?: boolean;
    withTooltip?: boolean;
    withActiveSegment?: boolean;
    colors?: string[];
    withCenterText: boolean;
    colorOfTotalCount?: string;
    radius?: number;
    width?: number;
}
export declare const DonutChart: (props: DonutChartProps) => JSX.Element;
export default DonutChart;
