declare type Options = Partial<{
    size: number;
    keys: Array<{
        key: string;
        random?: [number, number];
        shuffle?: string[];
    }>;
}>;
export declare const generateParallelCoordinatesData: ({ size, keys, }?: Options) => {}[];
export {};
//# sourceMappingURL=parallelCoordinates.d.ts.map