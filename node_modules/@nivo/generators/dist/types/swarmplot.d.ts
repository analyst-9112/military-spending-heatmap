declare type SwarmPlotDatum = {
    id: string;
    categories?: number[];
    group: string;
    price: number;
    volume: number;
};
export declare const generateSwarmPlotData: (groups: string[], { min, max, categoryCount }: {
    min?: number | undefined;
    max?: number | undefined;
    categoryCount?: number | undefined;
}) => {
    groups: string[];
    data: SwarmPlotDatum[];
};
export declare const randomizeSwarmPlotData: (previousData: ReturnType<typeof generateSwarmPlotData>) => {
    groups: string[];
    data: {
        group: string;
        price: number;
        volume: number;
        id: string;
        categories?: number[] | undefined;
    }[];
};
export {};
//# sourceMappingURL=swarmplot.d.ts.map