using NPMAPI.Models;
using NPMAPI.Models.ViewModels;

namespace NPMAPI.Repositories
{
    public interface IPatientAttachment
    {
        ResponseModel Save(CreateAttachmentRequest request, long userId);
        ResponseModel Delete(long Id, long userId);
        ResponseModel GetAll(long patientAccount);
        ResponseModel Get(long attachmentId);
        ResponseModel GetAttachmentTypeCodesList();
    }
}
