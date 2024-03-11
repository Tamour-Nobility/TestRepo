using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using NPMAPI.Enums;
using NPMAPI.Models;
using NPMAPI.Models.ViewModels;
namespace NPMAPI.Repositories
{
    public interface IPracticeRepository
    {
        #region Practice
        // string PracticeList();
        ResponseModel GetPractices();
        ResponseModel GetPractice(long? practiceId);
        ResponseModel ActivateInActivePractice(long practiceId, bool isActive);
        ResponseModel PostSavePractice(Practice model, long userId);
        ResponseModel GetPracticeSelectList(string searchText);
        PracticeFTPViewModel GetPracticeFTPInfo(long practiceCode, FTPType type);
        #endregion Practice
        #region PracticeSpecialInstructions
        ResponseModel GetSpecialInstructionList(long PracticeId);
        ResponseModel GetSpecialInstruction(long QuestionId, long PracticeId);
        ResponseModel GetSpecialInstructionQuestionByCategory(long CategoryId);
        ResponseModel SaveSpecialInstruction([FromBody] Practice_Special_Instruction_Answers model, long id);
        ResponseModel DeleteSpecialInstruction(long QuestionId, long PracticeId);
        #endregion PracticeSpecialInstructions
        #region PracticeNotes
        ResponseModel GetPracticeNotesList(long PracticeId);
        ResponseModel GetPracticeNote(long PracticeNotesId);
        ResponseModel SavePracticeNote([FromBody] Practice_Notes PracticeNote);
        ResponseModel DeletePracticetNote(long PracticeId, long PracticeNotesId);
        #endregion PracticeNotes
        ResponseModel GetPracticeResources(long practiceId, long LocationId);
        #region Provders
        ResponseModel GetProviders(long PracticeId);
        ResponseModel GetProvider(long providerId, long PracticeId);
        ResponseModel ActivateInActiveProvider(long providerId, long PracticeId, bool isActive);
        ResponseModel SaveProvider(Provider model);
        ResponseModel GetProviderNotesList(long ProviderId);
        ResponseModel GetProviderNote(long ProviderNotesId);
        ResponseModel SaveProviderNote([FromBody] Provider_Notes ProviderNote);
        ResponseModel DeleteProviderNote(long ProviderId, long ProviderNotesId);
        ResponseModel GetProviderWorkingHours(long ProviderId, long LocationId);
        ResponseModel GetProviderResources(long ProviderId);
        ResponseModel GetProviderPayers(long ProviderId, long LocationId);
        #endregion Provders
        #region PracticeLocation
        ResponseModel GetPracticeLocationList(long PracticeId);
        ResponseModel GetPracticeLocation(long PracticeId, long PracticeLocationId);
        ResponseModel SavePracticeLocation([FromBody] Practice_Locations PracticeLocation);
        ResponseModel DeletePracticeLocation(long PracticeId, long PracticeLocationId);
        #endregion PracticeLocation
        #region PracticeFacility
        ResponseModel GetPracticeFacilityList(long PracticeId);
        ResponseModel GetPracticeFacility(long PracticeId, long PracticeFacilityId);
        ResponseModel SavePracticeFacility(PRACTICE_FACILITY model);
        ResponseModel DeletePracticeFacility(long PracticeId, long PracticeFacilityId);
        #endregion PracticeFacility
        Task<ResponseModel> GetSpecializations();
        Task<ResponseModel> GetWcbRatings();
        Task<ResponseModel> GetSpecialityGroups();
        ResponseModel GetPracticeSpecialityCategoryOne(long GroupNo);
        ResponseModel GetPracticeSpecialityCategoryTwo(long GroupNo, int CatLevel);
        //List<PracticeFTPViewModel> GetFTPEnabledPractices();
        Task<List<PracticeFTPViewModel>> GetFTPEnabledPractices(long? practiceCode);
        ResponseModel AddPracticeSynchronization(PracticeSynchronizationModel model, long userId);
        ResponseModel GetPracticeSynchronization(long practiceid);
    }
}
