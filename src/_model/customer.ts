export interface Student{
    id:number;
    name:string;
    address:string;
    fee:number;

}

export interface Studentmodel{
    list:Student[],
    errormessage:string
}