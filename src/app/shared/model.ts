export class Model {
    id: number;
    name: String;
    description: String;
    status: Object;
    expiryDate: Date;


    constructor(id:number, name:String, description:String, status:Object, expiryDate:Date){
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.expiryDate = expiryDate;
    }
}

