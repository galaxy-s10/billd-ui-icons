export default RestOutlined;
declare namespace RestOutlined {
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
                d?: undefined;
            };
            children: any[];
        } | {
            type: string;
            name: string;
            attributes: {
                d: string;
            };
            children: any[];
        })[];
    }[];
    const name: string;
    const theme: string;
}
