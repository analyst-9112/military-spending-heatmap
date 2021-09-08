declare type Options = Partial<{
    float: boolean;
    markerCount: number;
    measureCount: number;
    rangeCount: number;
    subtitle: string;
    title: string;
}>;
export declare const generateBulletData: (id: string, max: number, { title, subtitle, rangeCount, measureCount, markerCount, float, }?: Options) => {
    id: string;
    title: string | undefined;
    subtitle: string | undefined;
    ranges: number[];
    measures: number[];
    markers: number[];
};
export {};
//# sourceMappingURL=bullet.d.ts.map