export interface IProduct {
    id: number,
    categoryId?: number,
    productName: string,
    productImage:string,
    productRate?: number,
    productQuntity?: number,
    manufacturerCountry?:number,
    manufacturerState?: number,
    manufacturerCity?: number,
    productManufacturerDate?: Date,
    productQuality?: string[],
    manufacturerAddress?:IAddress[]
}


export interface IAddress {
    street: string,
    pincode: string
}