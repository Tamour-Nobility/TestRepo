import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import EcommercePage from "../pages/Dashboard/EcommercePage.vue";
import CRMPage from "../pages/Dashboard/CRMPage.vue";
import ProjectManagementPage from "../pages/Dashboard/ProjectManagementPage.vue";
import LMSPage from "../pages/Dashboard/LMSPage.vue";
import HelpDeskPage from "../pages/Dashboard/HelpDeskPage.vue";
import AnalyticsPage from "../pages/Dashboard/AnalyticsPage.vue";
import CryptoPage from "../pages/Dashboard/CryptoPage.vue";
import SalesPage from "../pages/Dashboard/SalesPage.vue";
import HospitalPage from "../pages/Dashboard/HospitalPage.vue";
import MarketingPage from "../pages/Dashboard/MarketingPage.vue";
import NFTPage from "../pages/Dashboard/NFTPage.vue";
import SaaSPage from "../pages/Dashboard/SaaSPage.vue";
import RealEstatePage from "../pages/Dashboard/RealEstatePage.vue";
import ShipmentPage from "../pages/Dashboard/ShipmentPage.vue";
import FinancePage from "../pages/Dashboard/FinancePage.vue";
import HomePage from "../pages/HomePage.vue";
import FeaturesPage from "../pages/FeaturesPage.vue";
import OurTeamPage from "../pages/OurTeamPage.vue";
import FAQPage from "../pages/FAQPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import CalendarPage from "../pages/Apps/CalendarPage.vue";
import ToDoListPage from "../pages/Apps/ToDoListPage.vue";
import ContactsPage from "../pages/Apps/ContactsPage.vue";
import ChatPage from "../pages/Apps/ChatPage.vue";
import InboxPage from "../pages/Apps/Email/InboxPage.vue";
import ComposePage from "../pages/Apps/Email/ComposePage.vue";
import ReadEmailPage from "../pages/Apps/Email/ReadEmailPage.vue";
import SnoozedPage from "../pages/Apps/Email/SnoozedPage.vue";
import DraftPage from "../pages/Apps/Email/DraftPage.vue";
import SentMailPage from "../pages/Apps/Email/SentMailPage.vue";
import TrashPage from "../pages/Apps/Email/TrashPage.vue";
import SpamPage from "../pages/Apps/Email/SpamPage.vue";
import StarredPage from "../pages/Apps/Email/StarredPage.vue";
import ImportantPage from "../pages/Apps/Email/ImportantPage.vue";
import KanbanBoardPage from "../pages/Apps/KanbanBoardPage.vue";
import MyDrivePage from "../pages/Apps/FileManager/MyDrivePage.vue";
import AssetsPage from "../pages/Apps/FileManager/AssetsPage.vue";
import ProjectsPage from "../pages/Apps/FileManager/ProjectsPage.vue";
import PersonalPage from "../pages/Apps/FileManager/PersonalPage.vue";
import ApplicationsPage from "../pages/Apps/FileManager/ApplicationsPage.vue";
import DocumentsPage from "../pages/Apps/FileManager/DocumentsPage.vue";
import MediaPage from "../pages/Apps/FileManager/MediaPage.vue";
import RecantsPage from "../pages/Apps/FileManager/RecantsPage.vue";
import ImportantFilesPage from "../pages/Apps/FileManager/ImportantFilesPage.vue";
import SpamFilesPage from "../pages/Apps/FileManager/SpamFilesPage.vue";
import TrashFilesPage from "../pages/Apps/FileManager/TrashFilesPage.vue";
import ProductsGridPage from "../pages/Ecommerce/ProductsGridPage.vue";
import ProductsListPage from "../pages/Ecommerce/ProductsListPage.vue";
import ProductDetailsPage from "../pages/Ecommerce/ProductDetailsPage.vue";
import CreateProductPage from "../pages/Ecommerce/CreateProductPage.vue";
import EditProductPage from "../pages/Ecommerce/EditProductPage.vue";
import CartPage from "../pages/Ecommerce/CartPage.vue";
import CheckoutPage from "../pages/Ecommerce/CheckoutPage.vue";
import OrdersPage from "../pages/Ecommerce/OrdersPage.vue";
import OrderDetailsPage from "../pages/Ecommerce/OrderDetailsPage.vue";
import CreateOrderPage from "../pages/Ecommerce/CreateOrderPage.vue";
import OrderTrackingPage from "../pages/Ecommerce/OrderTrackingPage.vue";
import CustomersPage from "../pages/Ecommerce/CustomersPage.vue";
import CustomerDetailsPage from "../pages/Ecommerce/CustomerDetailsPage.vue";
import CategoriesPage from "../pages/Ecommerce/CategoriesPage.vue";
import SellersPage from "../pages/Ecommerce/SellersPage.vue";
import SellerDetailsPage from "../pages/Ecommerce/SellerDetailsPage.vue";
import CreateSellerPage from "../pages/Ecommerce/CreateSellerPage.vue";
import ReviewsPage from "../pages/Ecommerce/ReviewsPage.vue";
import RefundsPage from "../pages/Ecommerce/RefundsPage.vue";
import CRMContactsPage from "../pages/CRM/CRMContactsPage.vue";
import CRMCustomersPage from "../pages/CRM/CRMCustomersPage.vue";
import LeadsPage from "../pages/CRM/LeadsPage.vue";
import DealsPage from "../pages/CRM/DealsPage.vue";
import ProjectOverviewPage from "../pages/ProjectManagement/ProjectOverviewPage.vue";
import ProjectsListPage from "../pages/ProjectManagement/ProjectsListPage.vue";
import CreateProjectPage from "../pages/ProjectManagement/CreateProjectPage.vue";
import ClientsPage from "../pages/ProjectManagement/ClientsPage.vue";
import TeamsPage from "../pages/ProjectManagement/TeamsPage.vue";
import KanbanBoardsPage from "../pages/ProjectManagement/KanbanBoardsPage.vue";
import UserPage from "../pages/ProjectManagement/UserPage.vue";
import CoursesListPage from "../pages/LMS/CoursesListPage.vue";
import CourseDetailsPage from "../pages/LMS/CourseDetailsPage.vue";
import LessonPreviewPage from "../pages/LMS/LessonPreviewPage.vue";
import CreateCoursePage from "../pages/LMS/CreateCoursePage.vue";
import EditCoursePage from "../pages/LMS/EditCoursePage.vue";
import InstructorsPage from "../pages/LMS/InstructorsPage.vue";
import TicketsPage from "../pages/HelpDesk/TicketsPage.vue";
import TicketDetailsPage from "../pages/HelpDesk/TicketDetailsPage.vue";
import AgentsPage from "../pages/HelpDesk/AgentsPage.vue";
import ReportsPage from "../pages/HelpDesk/ReportsPage.vue";
import MarketplacePage from "../pages/NFTMarketplace/MarketplacePage.vue";
import ExploreAllPage from "../pages/NFTMarketplace/ExploreAllPage.vue";
import LiveAuctionPage from "../pages/NFTMarketplace/LiveAuctionPage.vue";
import NFTDetailsPage from "../pages/NFTMarketplace/NFTDetailsPage.vue";
import CreatorsPage from "../pages/NFTMarketplace/CreatorsPage.vue";
import CreatorDetailsPage from "../pages/NFTMarketplace/CreatorDetailsPage.vue";
import WalletConnectPage from "../pages/NFTMarketplace/WalletConnectPage.vue";
import RealEstateCustomersPage from "../pages/RealEstate/RealEstateCustomersPage.vue";
import PropertyListPage from "../pages/RealEstate/PropertyListPage.vue";
import PropertyOverviewPage from "../pages/RealEstate/PropertyOverviewPage.vue";
import AddPropertyPage from "../pages/RealEstate/AddPropertyPage.vue";
import AgentlistPage from "../pages/RealEstate/AgentlistPage.vue";
import AgentOverviewPage from "../pages/RealEstate/AgentOverviewPage.vue";
import AddAgentPage from "../pages/RealEstate/AddAgentPage.vue";
import WalletPage from "../pages/Finance/WalletPage.vue";
import TransactionPage from "../pages/Finance/TransactionPage.vue";
import EventsPage from "../pages/Events/EventsPage.vue";
import EventsListPage from "../pages/Events/EventsListPage.vue";
import EventDetailsPage from "../pages/Events/EventDetailsPage.vue";
import CreateAnEventPage from "../pages/Events/CreateAnEventPage.vue";
import EditAnEventPage from "../pages/Events/EditAnEventPage.vue";
import ProfilePage from "../pages/Social/ProfilePage.vue";
import SettingsPage from "../pages/Social/SettingsPage.vue";
import InvoicesPage from "../pages/Invoices/InvoicesPage.vue";
import InvoiceDetailsPage from "../pages/Invoices/InvoiceDetailsPage.vue";
import CreateInvoicePage from "../pages/Invoices/CreateInvoicePage.vue";
import EditInvoicePage from "../pages/Invoices/EditInvoicePage.vue";
import TeamMembersPage from "../pages/Users/TeamMembersPage.vue";
import UsersListPage from "../pages/Users/UsersListPage.vue";
import AddUserPage from "../pages/Users/AddUserPage.vue";
import UserProfilePage from "../pages/Profile/UserProfilePage.vue";
import UserTeamPage from "../pages/Profile/UserTeamPage.vue";
import UserProjectsPage from "../pages/Profile/UserProjectsPage.vue";
import StarterPage from "../pages/StarterPage.vue";
import MaterialSymbolsPage from "../pages/Icons/MaterialSymbolsPage.vue";
import FeatherIconPage from "../pages/Icons/FeatherIconPage.vue";
import RemixIconPage from "../pages/Icons/RemixIconPage.vue";
import AlertsPage from "../pages/UIElements/AlertsPage.vue";
import AvatarPage from "../pages/UIElements/AvatarPage.vue";
import ButtonsPage from "../pages/UIElements/ButtonsPage.vue";
import BadgesPage from "../pages/UIElements/BadgesPage.vue";
import CardsPage from "../pages/UIElements/CardsPage.vue";
import CarouselsPage from "../pages/UIElements/CarouselsPage.vue";
import DropdownsPage from "../pages/UIElements/DropdownsPage.vue";
import GridsPage from "../pages/UIElements/GridsPage.vue";
import ImagesPage from "../pages/UIElements/ImagesPage.vue";
import ListPage from "../pages/UIElements/ListPage.vue";
import ModalsPage from "../pages/UIElements/ModalsPage.vue";
import NavsPage from "../pages/UIElements/NavsPage.vue";
import PaginationsPage from "../pages/UIElements/PaginationsPage.vue";
import PopoverTooltipsPage from "../pages/UIElements/PopoverTooltipsPage.vue";
import ProgressPage from "../pages/UIElements/ProgressPage.vue";
import SpinnersPage from "../pages/UIElements/SpinnersPage.vue";
import TabsPage from "../pages/UIElements/TabsPage.vue";
import AccordionsPage from "../pages/UIElements/AccordionsPage.vue";
import DateTimePickerPage from "../pages/UIElements/DateTimePickerPage.vue";
import VideosPage from "../pages/UIElements/VideosPage.vue";
import BasicTablePage from "../pages/Tables/BasicTablePage.vue";
import DataTablePage from "../pages/Tables/DataTablePage.vue";
import BasicElementsPage from "../pages/Forms/BasicElementsPage.vue";
import AdvancedElementsPage from "../pages/Forms/AdvancedElementsPage.vue";
import ValidationPage from "../pages/Forms/ValidationPage.vue";
import WizardPage from "../pages/Forms/WizardPage.vue";
import EditorsPage from "../pages/Forms/EditorsPage.vue";
import FileUploadPage from "../pages/Forms/FileUploadPage.vue";
import ApexChartsPage from "../pages/ApexChartsPage.vue";
import LoginPage from "../pages/Authentication/LoginPage.vue";
import RegisterPage from "../pages/Authentication/RegisterPage.vue";
import ResetPasswordPage from "../pages/Authentication/ResetPasswordPage.vue";
import ForgetPasswordPage from "../pages/Authentication/ForgetPasswordPage.vue";
import LockScreenPage from "../pages/Authentication/LockScreenPage.vue";
import LogOutPage from "../pages/Authentication/LogOutPage.vue";
import ConfirmMailPage from "../pages/Authentication/ConfirmMailPage.vue";
import PricingPage from "../pages/ExtraPages/PricingPage.vue";
import FAQsPage from "../pages/ExtraPages/FAQsPage.vue";
import TimelinePage from "../pages/ExtraPages/TimelinePage.vue";
import AnimationPage from "../pages/ExtraPages/AnimationPage.vue";
import ClipBoardPage from "../pages/ExtraPages/ClipBoardPage.vue";
import DragDropPage from "../pages/ExtraPages/DragDropPage.vue";
import RangeSliderPage from "../pages/ExtraPages/RangeSliderPage.vue";
import RatingsPage from "../pages/ExtraPages/RatingsPage.vue";
import ToastsPage from "../pages/ExtraPages/ToastsPage.vue";
import CheckRadioPage from "../pages/ExtraPages/CheckRadioPage.vue";
import SelectPage from "../pages/ExtraPages/SelectPage.vue";
import ScrollbarPage from "../pages/ExtraPages/ScrollbarPage.vue";
import TypographyPage from "../pages/ExtraPages/TypographyPage.vue";
import GalleryPage from "../pages/ExtraPages/GalleryPage.vue";
import SearchPage from "../pages/ExtraPages/SearchPage.vue";
import BlankPage from "../pages/ExtraPages/BlankPage.vue";
import InternalErrorPage from "../pages/Error/InternalErrorPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import WidgetsPage from "../pages/WidgetsPage.vue";
import GoogleMapPage from "../pages/GoogleMapPage.vue";
import NotificationPage from "../pages/NotificationPage.vue";
import MemberPage from "../pages/MemberPage.vue";
import MyProfilePage from "../pages/MyProfilePage.vue";
import AccountSettingsPage from "../pages/Settings/AccountSettingsPage.vue";
import ChangePasswordPage from "../pages/Settings/ChangePasswordPage.vue";
import ConnectionsPage from "../pages/Settings/ConnectionsPage.vue";
import PrivacyPolicyPage from "../pages/Settings/PrivacyPolicyPage.vue";
import TermsConditionsPage from "../pages/Settings/TermsConditionsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "EcommercePage",
    component: EcommercePage,
  },
  {
    path: "/dashboard/crm",
    name: "CRMPage",
    component: CRMPage,
  },
  {
    path: "/dashboard/project-management",
    name: "ProjectManagementPage",
    component: ProjectManagementPage,
  },
  {
    path: "/dashboard/lms",
    name: "LMSPage",
    component: LMSPage,
  },
  {
    path: "/dashboard/help-desk",
    name: "HelpDeskPage",
    component: HelpDeskPage,
  },
  {
    path: "/dashboard/analytics",
    name: "AnalyticsPage",
    component: AnalyticsPage,
  },
  {
    path: "/dashboard/crypto",
    name: "CryptoPage",
    component: CryptoPage,
  },
  {
    path: "/dashboard/sales",
    name: "SalesPage",
    component: SalesPage,
  },
  {
    path: "/dashboard/hospital",
    name: "HospitalPage",
    component: HospitalPage,
  },
  {
    path: "/dashboard/marketing",
    name: "MarketingPage",
    component: MarketingPage,
  },
  {
    path: "/dashboard/nft",
    name: "NFTPage",
    component: NFTPage,
  },
  {
    path: "/dashboard/saas",
    name: "SaaSPage",
    component: SaaSPage,
  },
  {
    path: "/dashboard/real-estate",
    name: "RealEstatePage",
    component: RealEstatePage,
  },
  {
    path: "/dashboard/shipment",
    name: "ShipmentPage",
    component: ShipmentPage,
  },
  {
    path: "/dashboard/finance",
    name: "FinancePage",
    component: FinancePage,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/features",
    name: "FeaturesPage",
    component: FeaturesPage,
  },
  {
    path: "/our-team",
    name: "OurTeamPage",
    component: OurTeamPage,
  },
  {
    path: "/faq",
    name: "FAQPage",
    component: FAQPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/apps/calendar",
    name: "CalendarPage",
    component: CalendarPage,
  },
  {
    path: "/apps/to-do-list",
    name: "ToDoListPage",
    component: ToDoListPage,
  },
  {
    path: "/apps/contacts",
    name: "ContactsPage",
    component: ContactsPage,
  },
  {
    path: "/apps/chat",
    name: "ChatPage",
    component: ChatPage,
  },
  {
    path: "/apps/email/inbox",
    name: "InboxPage",
    component: InboxPage,
  },
  {
    path: "/apps/email/compose",
    name: "ComposePage",
    component: ComposePage,
  },
  {
    path: "/apps/email/read-email",
    name: "ReadEmailPage",
    component: ReadEmailPage,
  },
  {
    path: "/apps/email/snoozed",
    name: "SnoozedPage",
    component: SnoozedPage,
  },
  {
    path: "/apps/email/draft",
    name: "DraftPage",
    component: DraftPage,
  },
  {
    path: "/apps/email/sent-mail",
    name: "SentMailPage",
    component: SentMailPage,
  },
  {
    path: "/apps/email/trash-email",
    name: "TrashPage",
    component: TrashPage,
  },
  {
    path: "/apps/email/spam",
    name: "SpamPage",
    component: SpamPage,
  },
  {
    path: "/apps/email/starred",
    name: "StarredPage",
    component: StarredPage,
  },
  {
    path: "/apps/email/important",
    name: "ImportantPage",
    component: ImportantPage,
  },
  {
    path: "/apps/kanban-board",
    name: "KanbanBoardPage",
    component: KanbanBoardPage,
  },
  {
    path: "/apps/file-manager/my-drive",
    name: "MyDrivePage",
    component: MyDrivePage,
  },
  {
    path: "/apps/file-manager/assets",
    name: "AssetsPage",
    component: AssetsPage,
  },
  {
    path: "/apps/file-manager/projects",
    name: "ProjectsPage",
    component: ProjectsPage,
  },
  {
    path: "/apps/file-manager/personal",
    name: "PersonalPage",
    component: PersonalPage,
  },
  {
    path: "/apps/file-manager/applications",
    name: "ApplicationsPage",
    component: ApplicationsPage,
  },
  {
    path: "/apps/file-manager/documents",
    name: "DocumentsPage",
    component: DocumentsPage,
  },
  {
    path: "/apps/file-manager/media",
    name: "MediaPage",
    component: MediaPage,
  },
  {
    path: "/apps/file-manager/recents",
    name: "RecantsPage",
    component: RecantsPage,
  },
  {
    path: "/apps/file-manager/important",
    name: "ImportantFilesPage",
    component: ImportantFilesPage,
  },
  {
    path: "/apps/file-manager/spam",
    name: "SpamFilesPage",
    component: SpamFilesPage,
  },
  {
    path: "/apps/file-manager/trash",
    name: "TrashFilesPage",
    component: TrashFilesPage,
  },
  {
    path: "/ecommerce/products-grid",
    name: "ProductsGridPage",
    component: ProductsGridPage,
  },
  {
    path: "/ecommerce/products-list",
    name: "ProductsListPage",
    component: ProductsListPage,
  },
  {
    path: "/ecommerce/product-details",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/ecommerce/create-product",
    name: "CreateProductPage",
    component: CreateProductPage,
  },
  {
    path: "/ecommerce/edit-product",
    name: "EditProductPage",
    component: EditProductPage,
  },
  {
    path: "/ecommerce/cart",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/ecommerce/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
  {
    path: "/ecommerce/orders",
    name: "OrdersPage",
    component: OrdersPage,
  },
  {
    path: "/ecommerce/order-details",
    name: "OrderDetailsPage",
    component: OrderDetailsPage,
  },
  {
    path: "/ecommerce/create-order",
    name: "CreateOrderPage",
    component: CreateOrderPage,
  },
  {
    path: "/ecommerce/order-tracking",
    name: "OrderTrackingPage",
    component: OrderTrackingPage,
  },
  {
    path: "/ecommerce/customers",
    name: "CustomersPage",
    component: CustomersPage,
  },
  {
    path: "/ecommerce/customer-details",
    name: "CustomerDetailsPage",
    component: CustomerDetailsPage,
  },
  {
    path: "/ecommerce/categories",
    name: "CategoriesPage",
    component: CategoriesPage,
  },
  {
    path: "/ecommerce/sellers",
    name: "SellersPage",
    component: SellersPage,
  },
  {
    path: "/ecommerce/seller-details",
    name: "SellerDetailsPage",
    component: SellerDetailsPage,
  },
  {
    path: "/ecommerce/create-seller",
    name: "CreateSellerPage",
    component: CreateSellerPage,
  },
  {
    path: "/ecommerce/reviews",
    name: "ReviewsPage",
    component: ReviewsPage,
  },
  {
    path: "/ecommerce/refunds",
    name: "RefundsPage",
    component: RefundsPage,
  },
  {
    path: "/crm/contacts",
    name: "CRMContactsPage",
    component: CRMContactsPage,
  },
  {
    path: "/crm/customers",
    name: "CRMCustomersPage",
    component: CRMCustomersPage,
  },
  {
    path: "/crm/leads",
    name: "LeadsPage",
    component: LeadsPage,
  },
  {
    path: "/crm/deals",
    name: "DealsPage",
    component: DealsPage,
  },
  {
    path: "/project-management/project-overview",
    name: "ProjectOverviewPage",
    component: ProjectOverviewPage,
  },
  {
    path: "/project-management/project-list",
    name: "ProjectsListPage",
    component: ProjectsListPage,
  },
  {
    path: "/project-management/create-project",
    name: "CreateProjectPage",
    component: CreateProjectPage,
  },
  {
    path: "/project-management/clients",
    name: "ClientsPage",
    component: ClientsPage,
  },
  {
    path: "/project-management/teams",
    name: "TeamsPage",
    component: TeamsPage,
  },
  {
    path: "/project-management/kanban-board",
    name: "KanbanBoardsPage",
    component: KanbanBoardsPage,
  },
  {
    path: "/project-management/user",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/lms/courses-list",
    name: "CoursesListPage",
    component: CoursesListPage,
  },
  {
    path: "/lms/course-details",
    name: "CourseDetailsPage",
    component: CourseDetailsPage,
  },
  {
    path: "/lms/lesson-preview",
    name: "LessonPreviewPage",
    component: LessonPreviewPage,
  },
  {
    path: "/lms/create-course",
    name: "CreateCoursePage",
    component: CreateCoursePage,
  },
  {
    path: "/lms/edit-course",
    name: "EditCoursePage",
    component: EditCoursePage,
  },
  {
    path: "/lms/instructors",
    name: "InstructorsPage",
    component: InstructorsPage,
  },
  {
    path: "/help-desk/tickets",
    name: "TicketsPage",
    component: TicketsPage,
  },
  {
    path: "/help-desk/ticket-details",
    name: "TicketDetailsPage",
    component: TicketDetailsPage,
  },
  {
    path: "/help-desk/agents",
    name: "AgentsPage",
    component: AgentsPage,
  },
  {
    path: "/help-desk/reports",
    name: "ReportsPage",
    component: ReportsPage,
  },
  {
    path: "/nft-marketplace/marketplace",
    name: "MarketplacePage",
    component: MarketplacePage,
  },
  {
    path: "/nft-marketplace/explore-all",
    name: "ExploreAllPage",
    component: ExploreAllPage,
  },
  {
    path: "/nft-marketplace/live-auction",
    name: "LiveAuctionPage",
    component: LiveAuctionPage,
  },
  {
    path: "/nft-marketplace/nft-details",
    name: "NFTDetailsPage",
    component: NFTDetailsPage,
  },
  {
    path: "/nft-marketplace/creators",
    name: "CreatorsPage",
    component: CreatorsPage,
  },
  {
    path: "/nft-marketplace/creator-details",
    name: "CreatorDetailsPage",
    component: CreatorDetailsPage,
  },
  {
    path: "/nft-marketplace/wallet-connect",
    name: "WalletConnectPage",
    component: WalletConnectPage,
  },
  {
    path: "/real-estate/real-estate-customers",
    name: "RealEstateCustomersPage",
    component: RealEstateCustomersPage,
  },
  {
    path: "/real-estate/property-list",
    name: "PropertyListPage",
    component: PropertyListPage,
  },
  {
    path: "/real-estate/property-overview",
    name: "PropertyOverviewPage",
    component: PropertyOverviewPage,
  },
  {
    path: "/real-estate/add-property",
    name: "AddPropertyPage",
    component: AddPropertyPage,
  },
  {
    path: "/real-estate/agent-list",
    name: "AgentlistPage",
    component: AgentlistPage,
  },
  {
    path: "/real-estate/agent-overview",
    name: "AgentOverviewPage",
    component: AgentOverviewPage,
  },
  {
    path: "/real-estate/add-agent",
    name: "AddAgentPage",
    component: AddAgentPage,
  },
  {
    path: "/finance/wallet",
    name: "WalletPage",
    component: WalletPage,
  },
  {
    path: "/finance/transaction",
    name: "TransactionPage",
    component: TransactionPage,
  },
  {
    path: "/events",
    name: "EventsPage",
    component: EventsPage,
  },
  {
    path: "/events/events-list",
    name: "EventsListPage",
    component: EventsListPage,
  },
  {
    path: "/events/event-details",
    name: "EventDetailsPage",
    component: EventDetailsPage,
  },
  {
    path: "/events/create-an-event",
    name: "CreateAnEventPage",
    component: CreateAnEventPage,
  },
  {
    path: "/events/edit-an-event",
    name: "EditAnEventPage",
    component: EditAnEventPage,
  },
  {
    path: "/social/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/social/settings",
    name: "SettingsPage",
    component: SettingsPage,
  },
  {
    path: "/invoices/invoice-list",
    name: "InvoicesPage",
    component: InvoicesPage,
  },
  {
    path: "/invoices/invoice-details",
    name: "InvoiceDetailsPage",
    component: InvoiceDetailsPage,
  },
  {
    path: "/invoices/create-invoice",
    name: "CreateInvoicePage",
    component: CreateInvoicePage,
  },
  {
    path: "/invoices/edit-invoice",
    name: "EditInvoicePage",
    component: EditInvoicePage,
  },
  {
    path: "/users/team-members",
    name: "TeamMembersPage",
    component: TeamMembersPage,
  },
  {
    path: "/users/users-list",
    name: "UsersListPage",
    component: UsersListPage,
  },
  {
    path: "/users/add-user",
    name: "AddUserPage",
    component: AddUserPage,
  },
  {
    path: "/profile/user-profile",
    name: "UserProfilePage",
    component: UserProfilePage,
  },
  {
    path: "/profile/teams",
    name: "UserTeamPage",
    component: UserTeamPage,
  },
  {
    path: "/profile/my-projects",
    name: "UserProjectsPage",
    component: UserProjectsPage,
  },
  {
    path: "/starter",
    name: "StarterPage",
    component: StarterPage,
  },
  {
    path: "/icons/material-icons",
    name: "MaterialSymbolsPage",
    component: MaterialSymbolsPage,
  },
  {
    path: "/icons/feathericon",
    name: "FeatherIconPage",
    component: FeatherIconPage,
  },
  {
    path: "/icons/remixicon",
    name: "RemixIconPage",
    component: RemixIconPage,
  },
  {
    path: "/ui-elements/alerts",
    name: "AlertsPage",
    component: AlertsPage,
  },
  {
    path: "/ui-elements/avatar",
    name: "AvatarPage",
    component: AvatarPage,
  },
  {
    path: "/ui-elements/buttons",
    name: "ButtonsPage",
    component: ButtonsPage,
  },
  {
    path: "/ui-elements/badges",
    name: "BadgesPage",
    component: BadgesPage,
  },
  {
    path: "/ui-elements/cards",
    name: "CardsPage",
    component: CardsPage,
  },
  {
    path: "/ui-elements/carousels",
    name: "CarouselsPage",
    component: CarouselsPage,
  },
  {
    path: "/ui-elements/dropdowns",
    name: "DropdownsPage",
    component: DropdownsPage,
  },
  {
    path: "/ui-elements/grids",
    name: "GridsPage",
    component: GridsPage,
  },
  {
    path: "/ui-elements/images",
    name: "ImagesPage",
    component: ImagesPage,
  },
  {
    path: "/ui-elements/list",
    name: "ListPage",
    component: ListPage,
  },
  {
    path: "/ui-elements/modals",
    name: "ModalsPage",
    component: ModalsPage,
  },
  {
    path: "/ui-elements/navs",
    name: "NavsPage",
    component: NavsPage,
  },
  {
    path: "/ui-elements/paginations",
    name: "PaginationsPage",
    component: PaginationsPage,
  },
  {
    path: "/ui-elements/popover-tooltips",
    name: "PopoverTooltipsPage",
    component: PopoverTooltipsPage,
  },
  {
    path: "/ui-elements/progress",
    name: "ProgressPage",
    component: ProgressPage,
  },
  {
    path: "/ui-elements/spinners",
    name: "SpinnersPage",
    component: SpinnersPage,
  },
  {
    path: "/ui-elements/tabs",
    name: "TabsPage",
    component: TabsPage,
  },
  {
    path: "/ui-elements/accordions",
    name: "AccordionsPage",
    component: AccordionsPage,
  },
  {
    path: "/ui-elements/date-time-picker",
    name: "DateTimePickerPage",
    component: DateTimePickerPage,
  },
  {
    path: "/ui-elements/videos",
    name: "VideosPage",
    component: VideosPage,
  },
  {
    path: "/tables/basic-table",
    name: "BasicTablePage",
    component: BasicTablePage,
  },
  {
    path: "/tables/data-tables",
    name: "DataTablePage",
    component: DataTablePage,
  },
  {
    path: "/forms/basic-elements",
    name: "BasicElementsPage",
    component: BasicElementsPage,
  },
  {
    path: "/forms/advanced-elements",
    name: "AdvancedElementsPage",
    component: AdvancedElementsPage,
  },
  {
    path: "/forms/validation",
    name: "ValidationPage",
    component: ValidationPage,
  },
  {
    path: "/forms/wizard",
    name: "WizardPage",
    component: WizardPage,
  },
  {
    path: "/forms/editors",
    name: "EditorsPage",
    component: EditorsPage,
  },
  {
    path: "/forms/file-upload",
    name: "FileUploadPage",
    component: FileUploadPage,
  },
  {
    path: "/apex-charts",
    name: "ApexChartsPage",
    component: ApexChartsPage,
  },
  {
    path: "/authentication/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/authentication/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/authentication/reset-password",
    name: "ResetPasswordPage",
    component: ResetPasswordPage,
  },
  {
    path: "/authentication/forget-password",
    name: "ForgetPasswordPage",
    component: ForgetPasswordPage,
  },
  {
    path: "/authentication/lock-screen",
    name: "LockScreenPage",
    component: LockScreenPage,
  },
  {
    path: "/authentication/logout",
    name: "LogOutPage",
    component: LogOutPage,
  },
  {
    path: "/authentication/confirm-mail",
    name: "ConfirmMailPage",
    component: ConfirmMailPage,
  },
  {
    path: "/extra-pages/pricing-plan",
    name: "PricingPage",
    component: PricingPage,
  },
  {
    path: "/extra-pages/faq",
    name: "FAQsPage",
    component: FAQsPage,
  },
  {
    path: "/extra-pages/timeline",
    name: "TimelinePage",
    component: TimelinePage,
  },
  {
    path: "/extra-pages/animation",
    name: "AnimationPage",
    component: AnimationPage,
  },
  {
    path: "/extra-pages/clip-board",
    name: "ClipBoardPage",
    component: ClipBoardPage,
  },
  {
    path: "/extra-pages/drag-drop",
    name: "DragDropPage",
    component: DragDropPage,
  },
  {
    path: "/extra-pages/range-slider",
    name: "RangeSliderPage",
    component: RangeSliderPage,
  },
  {
    path: "/extra-pages/ratings",
    name: "RatingsPage",
    component: RatingsPage,
  },
  {
    path: "/extra-pages/toasts",
    name: "ToastsPage",
    component: ToastsPage,
  },
  {
    path: "/extra-pages/check-radio",
    name: "CheckRadioPage",
    component: CheckRadioPage,
  },
  {
    path: "/extra-pages/select",
    name: "SelectPage",
    component: SelectPage,
  },
  {
    path: "/extra-pages/scrollbar",
    name: "ScrollbarPage",
    component: ScrollbarPage,
  },
  {
    path: "/extra-pages/typography",
    name: "TypographyPage",
    component: TypographyPage,
  },
  {
    path: "/extra-pages/gallery",
    name: "GalleryPage",
    component: GalleryPage,
  },
  {
    path: "/extra-pages/search",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/extra-pages/blank-page",
    name: "BlankPage",
    component: BlankPage,
  },
  {
    path: "/error/internal-error",
    name: "InternalErrorPage",
    component: InternalErrorPage,
  },
  {
    path: "/widgets",
    name: "WidgetsPage",
    component: WidgetsPage,
  },
  {
    path: "/google-map",
    name: "GoogleMapPage",
    component: GoogleMapPage,
  },
  {
    path: "/notification",
    name: "NotificationPage",
    component: NotificationPage,
  },
  {
    path: "/members",
    name: "MemberPage",
    component: MemberPage,
  },
  {
    path: "/my-profile",
    name: "MyProfilePage",
    component: MyProfilePage,
  },
  {
    path: "/settings/account-settings",
    name: "AccountSettingsPage",
    component: AccountSettingsPage,
  },
  {
    path: "/settings/change-password",
    name: "ChangePasswordPage",
    component: ChangePasswordPage,
  },
  {
    path: "/settings/connections",
    name: "ConnectionsPage",
    component: ConnectionsPage,
  },
  {
    path: "/settings/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  {
    path: "/settings/terms-conditions",
    name: "TermsConditionsPage",
    component: TermsConditionsPage,
  },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
