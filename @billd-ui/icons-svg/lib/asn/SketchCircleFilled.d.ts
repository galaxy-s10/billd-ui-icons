export default SketchCircleFilled;
declare namespace SketchCircleFilled {
    const type: string;
    const children: {
        type: string;
        isRootNode: boolean;
        name: string;
        attributes: {
            class: string;
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
