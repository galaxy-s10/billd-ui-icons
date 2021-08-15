export default FastBackwardFilled;
declare namespace FastBackwardFilled {
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
                d: string;
            };
            children: any[];
        }[];
    }[];
    const name: string;
    const theme: string;
}
