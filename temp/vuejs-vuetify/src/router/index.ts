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
import HomePage from "../pages/HomePage.vue";
import FeaturesPage from "../pages/FeaturesPage.vue";
import OurTeamPage from "../pages/OurTeamPage.vue";
import FAQPage from "../pages/FAQPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ToDoListPage from "../pages/Apps/ToDoListPage.vue";
import CalendarPage from "../pages/Apps/CalendarPage.vue";
import ContactsPage from "../pages/Apps/ContactsPage.vue";
import ChatPage from "../pages/Apps/ChatPage.vue";
import InboxPage from "../pages/Apps/Email/InboxPage.vue";
import ComposePage from "../pages/Apps/Email/ComposePage.vue";
import ReadEmailPage from "../pages/Apps/Email/ReadEmailPage.vue";
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
import RemixIconPage from "../pages/Icons/RemixIconPage.vue";
import AlertsPage from "../pages/UIElements/AlertsPage.vue";
import AutocompletePage from "../pages/UIElements/AutocompletePage.vue";
import AvatarsPage from "../pages/UIElements/AvatarsPage.vue";
import AccordionPage from "../pages/UIElements/AccordionPage.vue";
import BadgesPage from "../pages/UIElements/BadgesPage.vue";
import BreadcrumbPage from "../pages/UIElements/BreadcrumbPage.vue";
import ButtonTogglePage from "../pages/UIElements/ButtonTogglePage.vue";
import ButtonsPage from "../pages/UIElements/ButtonsPage.vue";
import CardsPage from "../pages/UIElements/CardsPage.vue";
import CarouselsPage from "../pages/UIElements/CarouselsPage.vue";
import CheckboxPage from "../pages/UIElements/CheckboxPage.vue";
import ChipsPage from "../pages/UIElements/ChipsPage.vue";
import ColorPickerPage from "../pages/UIElements/ColorPickerPage.vue";
import DatepickerPage from "../pages/UIElements/DatepickerPage.vue";
import DialogPage from "../pages/UIElements/DialogPage.vue";
import DividerPage from "../pages/UIElements/DividerPage.vue";
import DragDropPage from "../pages/UIElements/DragDropPage.vue";
import ExpansionPage from "../pages/UIElements/ExpansionPage.vue";
import GridPage from "../pages/UIElements/GridPage.vue";
import IconPage from "../pages/UIElements/IconPage.vue";
import ImagesPage from "../pages/UIElements/ImagesPage.vue";
import InputPage from "../pages/UIElements/InputPage.vue";
import ListPage from "../pages/UIElements/ListPage.vue";
import ListboxPage from "../pages/UIElements/ListboxPage.vue";
import MenusPage from "../pages/UIElements/MenusPage.vue";
import NavigationDrawersPage from "../pages/UIElements/NavigationDrawersPage.vue";
import PaginationPage from "../pages/UIElements/PaginationPage.vue";
import ProgressBarPage from "../pages/UIElements/ProgressBarPage.vue";
import RadioPage from "../pages/UIElements/RadioPage.vue";
import SelectPage from "../pages/UIElements/SelectPage.vue";
import SwitchesPage from "../pages/UIElements/SwitchesPage.vue";
import SliderPage from "../pages/UIElements/SliderPage.vue";
import SpacingPage from "../pages/UIElements/SpacingPage.vue";
import SnackbarPage from "../pages/UIElements/SnackbarPage.vue";
import StepperPage from "../pages/UIElements/StepperPage.vue";
import TablePage from "../pages/UIElements/TablePage.vue";
import TextFieldsPage from "../pages/UIElements/TextFieldsPage.vue";
import TabsPage from "../pages/UIElements/TabsPage.vue";
import ToolbarPage from "../pages/UIElements/ToolbarPage.vue";
import TooltipsPage from "../pages/UIElements/TooltipsPage.vue";
import TypographyPage from "../pages/UIElements/TypographyPage.vue";
import VideosPage from "../pages/UIElements/VideosPage.vue";
import UtilitiesPage from "../pages/UIElements/UtilitiesPage.vue";
import BasicTablePage from "../pages/Tables/BasicTablePage.vue";
import DataTablePage from "../pages/Tables/DataTablePage.vue";
import BasicElementsPage from "../pages/Forms/BasicElementsPage.vue";
import AdvancedElementsPage from "../pages/Forms/AdvancedElementsPage.vue";
import EditorsPage from "../pages/Forms/EditorsPage.vue";
import FileUploadPage from "../pages/Forms/FileUploadPage.vue";
import LineChartsPage from "../pages/Charts/LineChartsPage.vue";
import AreaChartsPage from "../pages/Charts/AreaChartsPage.vue";
import ColumnChartsPage from "../pages/Charts/ColumnChartsPage.vue";
import MixedChartsPage from "../pages/Charts/MixedChartsPage.vue";
import RadialBarChartsPage from "../pages/Charts/RadialBarChartsPage.vue";
import RadarChartsPage from "../pages/Charts/RadarChartsPage.vue";
import PieChartsPage from "../pages/Charts/PieChartsPage.vue";
import PolarChartsPage from "../pages/Charts/PolarChartsPage.vue";
import MoreChartsPage from "../pages/Charts/MoreChartsPage.vue";
import SignInPage from "../pages/Authentication/SignInPage.vue";
import SignUpPage from "../pages/Authentication/SignUpPage.vue";
import ResetPasswordPage from "../pages/Authentication/ResetPasswordPage.vue";
import ForgotPasswordPage from "../pages/Authentication/ForgotPasswordPage.vue";
import LockScreenPage from "../pages/Authentication/LockScreenPage.vue";
import LogoutPage from "../pages/Authentication/LogoutPage.vue";
import ConfirmEmailPage from "../pages/Authentication/ConfirmEmailPage.vue";
import PricingPage from "../pages/ExtraPages/PricingPage.vue";
import TimelinePage from "../pages/ExtraPages/TimelinePage.vue";
import FAQsPage from "../pages/ExtraPages/FAQsPage.vue";
import GalleryPage from "../pages/ExtraPages/GalleryPage.vue";
import TestimonialsPage from "../pages/ExtraPages/TestimonialsPage.vue";
import SearchPage from "../pages/ExtraPages/SearchPage.vue";
import ComingSoonPage from "../pages/ExtraPages/ComingSoonPage.vue";
import BlankPage from "../pages/ExtraPages/BlankPage.vue";
import InternalErrorPage from "../pages/Error/InternalErrorPage.vue";
import ErrorPage from "../pages/Error/ErrorPage.vue";
import WidgetsPage from "../pages/WidgetsPage.vue";
import MapsPage from "../pages/MapsPage.vue";
import NotificationsPage from "../pages/NotificationsPage.vue";
import MembersPage from "../pages/MembersPage.vue";
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
    path: "/team",
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
    path: "/apps/to-do-list",
    name: "ToDoListPage",
    component: ToDoListPage,
  },
  {
    path: "/apps/calendar",
    name: "CalendarPage",
    component: CalendarPage,
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
    path: "/apps/email/read",
    name: "ReadEmailPage",
    component: ReadEmailPage,
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
    path: "/project-management/projects-list",
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
    path: "/project-management/users",
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
    path: "/events/events-grid",
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
    path: "/invoices",
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
    path: "/profile/projects",
    name: "UserProjectsPage",
    component: UserProjectsPage,
  },
  {
    path: "/starter",
    name: "StarterPage",
    component: StarterPage,
  },
  {
    path: "/icons/material-symbols",
    name: "MaterialSymbolsPage",
    component: MaterialSymbolsPage,
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
    path: "/ui-elements/autocomplete",
    name: "AutocompletePage",
    component: AutocompletePage,
  },
  {
    path: "/ui-elements/avatars",
    name: "AvatarsPage",
    component: AvatarsPage,
  },
  {
    path: "/ui-elements/accordion",
    name: "AccordionPage",
    component: AccordionPage,
  },
  {
    path: "/ui-elements/badges",
    name: "BadgesPage",
    component: BadgesPage,
  },
  {
    path: "/ui-elements/breadcrumb",
    name: "BreadcrumbPage",
    component: BreadcrumbPage,
  },
  {
    path: "/ui-elements/button-toggle",
    name: "ButtonTogglePage",
    component: ButtonTogglePage,
  },
  {
    path: "/ui-elements/buttons",
    name: "ButtonsPage",
    component: ButtonsPage,
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
    path: "/ui-elements/checkbox",
    name: "CheckboxPage",
    component: CheckboxPage,
  },
  {
    path: "/ui-elements/chips",
    name: "ChipsPage",
    component: ChipsPage,
  },
  {
    path: "/ui-elements/color-picker",
    name: "ColorPickerPage",
    component: ColorPickerPage,
  },
  {
    path: "/ui-elements/datepicker",
    name: "DatepickerPage",
    component: DatepickerPage,
  },
  {
    path: "/ui-elements/dialog",
    name: "DialogPage",
    component: DialogPage,
  },
  {
    path: "/ui-elements/divider",
    name: "DividerPage",
    component: DividerPage,
  },
  {
    path: "/ui-elements/drag-drop",
    name: "DragDropPage",
    component: DragDropPage,
  },
  {
    path: "/ui-elements/expansion",
    name: "ExpansionPage",
    component: ExpansionPage,
  },
  {
    path: "/ui-elements/grid",
    name: "GridPage",
    component: GridPage,
  },
  {
    path: "/ui-elements/icon",
    name: "IconPage",
    component: IconPage,
  },
  {
    path: "/ui-elements/images",
    name: "ImagesPage",
    component: ImagesPage,
  },
  {
    path: "/ui-elements/input",
    name: "InputPage",
    component: InputPage,
  },
  {
    path: "/ui-elements/list",
    name: "ListPage",
    component: ListPage,
  },
  {
    path: "/ui-elements/listbox",
    name: "ListboxPage",
    component: ListboxPage,
  },
  {
    path: "/ui-elements/menus",
    name: "MenusPage",
    component: MenusPage,
  },
  {
    path: "/ui-elements/navigation-drawers",
    name: "NavigationDrawersPage",
    component: NavigationDrawersPage,
  },
  {
    path: "/ui-elements/pagination",
    name: "PaginationPage",
    component: PaginationPage,
  },
  {
    path: "/ui-elements/progress-bar",
    name: "ProgressBarPage",
    component: ProgressBarPage,
  },
  {
    path: "/ui-elements/radio",
    name: "RadioPage",
    component: RadioPage,
  },
  {
    path: "/ui-elements/select",
    name: "SelectPage",
    component: SelectPage,
  },
  {
    path: "/ui-elements/switches",
    name: "SwitchesPage",
    component: SwitchesPage,
  },
  {
    path: "/ui-elements/slider",
    name: "SliderPage",
    component: SliderPage,
  },
  {
    path: "/ui-elements/spacing",
    name: "SpacingPage",
    component: SpacingPage,
  },
  {
    path: "/ui-elements/snackbar",
    name: "SnackbarPage",
    component: SnackbarPage,
  },
  {
    path: "/ui-elements/stepper",
    name: "StepperPage",
    component: StepperPage,
  },
  {
    path: "/ui-elements/table",
    name: "TablePage",
    component: TablePage,
  },
  {
    path: "/ui-elements/text-fields",
    name: "TextFieldsPage",
    component: TextFieldsPage,
  },
  {
    path: "/ui-elements/tabs",
    name: "TabsPage",
    component: TabsPage,
  },
  {
    path: "/ui-elements/toolbar",
    name: "ToolbarPage",
    component: ToolbarPage,
  },
  {
    path: "/ui-elements/tooltip",
    name: "TooltipsPage",
    component: TooltipsPage,
  },
  {
    path: "/ui-elements/typography",
    name: "TypographyPage",
    component: TypographyPage,
  },
  {
    path: "/ui-elements/videos",
    name: "VideosPage",
    component: VideosPage,
  },
  {
    path: "/ui-elements/utilities",
    name: "UtilitiesPage",
    component: UtilitiesPage,
  },
  {
    path: "/tables/basic-table",
    name: "BasicTablePage",
    component: BasicTablePage,
  },
  {
    path: "/tables/data-table",
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
    path: "/forms/editors",
    name: "EditorsPage",
    component: EditorsPage,
  },
  {
    path: "/forms/file-uploader",
    name: "FileUploadPage",
    component: FileUploadPage,
  },
  {
    path: "/charts/line-charts",
    name: "LineChartsPage",
    component: LineChartsPage,
  },
  {
    path: "/charts/area-charts",
    name: "AreaChartsPage",
    component: AreaChartsPage,
  },
  {
    path: "/charts/column-charts",
    name: "ColumnChartsPage",
    component: ColumnChartsPage,
  },
  {
    path: "/charts/mixed-charts",
    name: "MixedChartsPage",
    component: MixedChartsPage,
  },
  {
    path: "/charts/radialbar-charts",
    name: "RadialBarChartsPage",
    component: RadialBarChartsPage,
  },
  {
    path: "/charts/radar-charts",
    name: "RadarChartsPage",
    component: RadarChartsPage,
  },
  {
    path: "/charts/pie-charts",
    name: "PieChartsPage",
    component: PieChartsPage,
  },
  {
    path: "/charts/polar-charts",
    name: "PolarChartsPage",
    component: PolarChartsPage,
  },
  {
    path: "/charts/more-charts",
    name: "MoreChartsPage",
    component: MoreChartsPage,
  },
  {
    path: "/authentication/sign-in",
    name: "SignInPage",
    component: SignInPage,
  },
  {
    path: "/authentication/sign-up",
    name: "SignUpPage",
    component: SignUpPage,
  },
  {
    path: "/authentication/reset-password",
    name: "ResetPasswordPage",
    component: ResetPasswordPage,
  },
  {
    path: "/authentication/forgot-password",
    name: "ForgotPasswordPage",
    component: ForgotPasswordPage,
  },
  {
    path: "/authentication/lock-screen",
    name: "LockScreenPage",
    component: LockScreenPage,
  },
  {
    path: "/authentication/logout",
    name: "LogoutPage",
    component: LogoutPage,
  },
  {
    path: "/authentication/confirm-email",
    name: "ConfirmEmailPage",
    component: ConfirmEmailPage,
  },
  {
    path: "/extra-pages/pricing",
    name: "PricingPage",
    component: PricingPage,
  },
  {
    path: "/extra-pages/timeline",
    name: "TimelinePage",
    component: TimelinePage,
  },
  {
    path: "/extra-pages/faq",
    name: "FAQsPage",
    component: FAQsPage,
  },
  {
    path: "/extra-pages/gallery",
    name: "GalleryPage",
    component: GalleryPage,
  },
  {
    path: "/extra-pages/testimonials",
    name: "TestimonialsPage",
    component: TestimonialsPage,
  },
  {
    path: "/extra-pages/search",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/extra-pages/coming-soon",
    name: "ComingSoonPage",
    component: ComingSoonPage,
  },
  {
    path: "/extra-pages/blank-page",
    name: "BlankPage",
    component: BlankPage,
  },
  {
    path: "/errors/internal-error",
    name: "InternalErrorPage",
    component: InternalErrorPage,
  },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
  {
    path: "/widgets",
    name: "WidgetsPage",
    component: WidgetsPage,
  },
  {
    path: "/maps",
    name: "MapsPage",
    component: MapsPage,
  },
  {
    path: "/notifications",
    name: "NotificationsPage",
    component: NotificationsPage,
  },
  {
    path: "/members",
    name: "MembersPage",
    component: MembersPage,
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
