export interface ParentData {
    parentField1: string;
    parentField2: string;

    primaryAddress: AddressData[];
};


export interface AddressData {
    id: number;
    address: string;
    city: string;
};

export interface REPListData {
    test: string;
    adresssList: AddressData[];
};

