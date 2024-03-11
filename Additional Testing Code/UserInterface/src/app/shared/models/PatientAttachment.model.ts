
export class PatientAttachmentModel {
    Patient_Attachment_Id: number;
    Attachment_TypeCode_Id: string;
    Attachment_TypeCode_Description: string;
    Patient_Account: number;
    FileName: string;
    FilePath: string;
    CreatedBy: number;
    CreatedByUsername: string;
    CreatedDate: Date;
    ModifiedBy?: number;
    ModifiedByUsername?: string;
    ModifiedDate?: Date;
}
