export default Html5TwoTone;
declare namespace Html5TwoTone {
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
