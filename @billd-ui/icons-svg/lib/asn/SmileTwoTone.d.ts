export default SmileTwoTone;
declare namespace SmileTwoTone {
    const type: string;
    const children: {
        type: string;
        isRootNode: boolean;
        name: string;
        attributes: {
            viewBox: string;
        };
        children: {
            type: string;
            name: string;
            attributes: {
                fill: string;
                d: string;
            };
            children: any[];
        }[];
    }[];
    const name: string;
    const theme: string;
}