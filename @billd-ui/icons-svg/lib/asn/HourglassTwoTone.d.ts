export default HourglassTwoTone;
declare namespace HourglassTwoTone {
    const type: string;
    const children: {
        type: string;
        isRootNode: boolean;
        name: string;
        attributes: {
            viewBox: string;
        };
        children: ({
            type: string;
            name: string;
            attributes: {
                fill: string;
                d: string;
            };
            children: any[];
        } | {
            type: string;
            name: string;
            attributes: {
                d: string;
                fill?: undefined;
            };
            children: any[];
        })[];
    }[];
    const name: string;
    const theme: string;
}
