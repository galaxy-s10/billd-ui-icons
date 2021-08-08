export default BugtwoTone;
declare namespace BugtwoTone {
    const type: string;
    const children: {
        type: string;
        isRootNode: boolean;
        name: string;
        attributes: {
            class: string;
            viewBox: string;
        };
        children: ({
            type: string;
            name: string;
            attributes: {
                d: string;
                fill?: undefined;
            };
            children: any[];
        } | {
            type: string;
            name: string;
            attributes: {
                d: string;
                fill: string;
            };
            children: any[];
        })[];
    }[];
    const name: string;
    const theme: string;
}
