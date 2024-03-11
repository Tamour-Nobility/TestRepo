export class searchFacilty{
    Status :string;
    Response=new Response;
}
export class Response {
    PracticeCode:number;
    FacilityCode: string;
    FacilityName: string;
    FacilityType: string;
    NPI: string;
    ZIP: string;
    City: string;
    State: string;
    Phone: string;
}