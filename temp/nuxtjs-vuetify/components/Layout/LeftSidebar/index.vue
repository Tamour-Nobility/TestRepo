<template>
  <div
    :class="[
      'sidebar-area bg-white box-shadow',
      { active: stateStoreInstance.open },
    ]"
    id="SidebarTheme"
  >
    <div class="logo bg-white">
      <NuxtLink to="/dashboard" class="d-flex align-items-center">
        <v-img src="~/assets/images/logo-icon.png" alt="logo" />
        <span class="fw-bold text-black position-relative">Trezo</span>
      </NuxtLink>
    </div>
    <div
      :class="['burger-menu', { active: stateStoreInstance.open }]"
      @click="stateStoreInstance.onChange"
    >
      <span class="top-bar"></span>
      <span class="middle-bar"></span>
      <span class="bottom-bar"></span>
    </div>
    <div class="virtual-scroll">
      <div class="sidebar-inner">
        <div class="sidebar-menu">
          <LayoutLeftSidebarAccordionSlot>
            <span class="sub-title">MAIN</span>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">dashboard</span>
                  <span class="title">Dashboard</span>
                  <span class="badge rounded-circle">9</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/dashboard" class="sidemenu-link">
                      eCommerce
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/dashboard/crm" class="sidemenu-link">
                      CRM
                      <span
                        class="trezo-badge d-inline-block position-relative style-two"
                      >
                        Hot
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/dashboard/project-management"
                      class="sidemenu-link"
                    >
                      Project Management
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/dashboard/lms" class="sidemenu-link">
                      LMS
                      <span
                        class="trezo-badge d-inline-block position-relative style-two"
                      >
                        Top
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/dashboard/help-desk" class="sidemenu-link">
                      HelpDesk
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/dashboard/analytics" class="sidemenu-link">
                      Analytics
                      <span
                        class="trezo-badge d-inline-block position-relative"
                      >
                        New
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/dashboard/crypto" class="sidemenu-link">
                      Crypto
                      <span
                        class="trezo-badge d-inline-block position-relative"
                      >
                        New
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/dashboard/sales" class="sidemenu-link">
                      Sales
                      <span
                        class="trezo-badge d-inline-block position-relative"
                      >
                        New
                      </span>
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/dashboard/hospital" class="sidemenu-link">
                      Hospital
                      <span
                        class="trezo-badge d-inline-block position-relative"
                      >
                        New
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">note_stack</span>
                  <span class="title">Front Pages</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/" class="sidemenu-link"> Home </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/features" class="sidemenu-link">
                      Features
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/team" class="sidemenu-link">
                      Our Team
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/faq" class="sidemenu-link"> FAQ’s </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/contact" class="sidemenu-link">
                      Contact
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <span class="sub-title">APPS</span>
            <NuxtLink to="/apps/to-do-list" class="sidebar-menu-link">
              <span class="material-symbols-outlined">
                format_list_bulleted
              </span>
              <span class="title">To Do List</span>
            </NuxtLink>
            <NuxtLink to="/apps/calendar" class="sidebar-menu-link">
              <span class="material-symbols-outlined">date_range</span>
              <span class="title">Calendar</span>
            </NuxtLink>
            <NuxtLink to="/apps/contacts" class="sidebar-menu-link">
              <span class="material-symbols-outlined">contact_page</span>
              <span class="title">Contacts</span>
            </NuxtLink>
            <NuxtLink to="/apps/chat" class="sidebar-menu-link">
              <span class="material-symbols-outlined">chat</span>
              <span class="title">Chat</span>
            </NuxtLink>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">mail</span>
                  <span class="title">Email</span>
                  <span class="badge rounded-circle two">3</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/apps/email/inbox" class="sidemenu-link">
                      Inbox
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/apps/email/compose" class="sidemenu-link">
                      Compose
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/apps/email/read" class="sidemenu-link">
                      Read
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <NuxtLink to="/apps/kanban-board" class="sidebar-menu-link">
              <span class="material-symbols-outlined">team_dashboard</span>
              <span class="title">Kanban Board</span>
            </NuxtLink>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">folder_open</span>
                  <span class="title">File Manager</span>
                  <span class="badge rounded-circle three">7</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/apps/file-manager/my-drive"
                      class="sidemenu-link"
                    >
                      My Drive
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/apps/file-manager/assets"
                      class="sidemenu-link"
                    >
                      Assets
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/apps/file-manager/projects"
                      class="sidemenu-link"
                    >
                      Projects
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/apps/file-manager/personal"
                      class="sidemenu-link"
                    >
                      Personal
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/apps/file-manager/applications"
                      class="sidemenu-link"
                    >
                      Applications
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/apps/file-manager/documents"
                      class="sidemenu-link"
                    >
                      Documents
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/apps/file-manager/media"
                      class="sidemenu-link"
                    >
                      Media
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <span class="sub-title">PAGES</span>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">shopping_cart</span>
                  <span class="title">eCommerce</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/products-grid"
                      class="sidemenu-link"
                    >
                      Products Grid
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/products-list"
                      class="sidemenu-link"
                    >
                      Products List
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/product-details"
                      class="sidemenu-link"
                    >
                      Product Details
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/create-product"
                      class="sidemenu-link"
                    >
                      Create Product
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/edit-product"
                      class="sidemenu-link"
                    >
                      Edit Product
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ecommerce/cart" class="sidemenu-link">
                      Cart
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ecommerce/checkout" class="sidemenu-link">
                      Checkout
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ecommerce/orders" class="sidemenu-link">
                      Orders
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/order-details"
                      class="sidemenu-link"
                    >
                      Order Details
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/create-order"
                      class="sidemenu-link"
                    >
                      Create Order
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/order-tracking"
                      class="sidemenu-link"
                    >
                      Order Tracking
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ecommerce/customers" class="sidemenu-link">
                      Customers
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/customer-details"
                      class="sidemenu-link"
                    >
                      Customer Details
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ecommerce/categories" class="sidemenu-link">
                      Categories
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ecommerce/sellers" class="sidemenu-link">
                      Sellers
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/seller-details"
                      class="sidemenu-link"
                    >
                      Seller Details
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ecommerce/create-seller"
                      class="sidemenu-link"
                    >
                      Create Seller
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ecommerce/reviews" class="sidemenu-link">
                      Reviews
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ecommerce/refunds" class="sidemenu-link">
                      Refunds
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">handshake</span>
                  <span class="title">CRM</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/crm/contacts" class="sidemenu-link">
                      Contacts
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/crm/customers" class="sidemenu-link">
                      Customers
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/crm/leads" class="sidemenu-link">
                      Leads
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/crm/deals" class="sidemenu-link">
                      Deals
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">description</span>
                  <span class="title">Project Management</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/project-management/project-overview"
                      class="sidemenu-link"
                    >
                      Project Overview
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/project-management/projects-list"
                      class="sidemenu-link"
                    >
                      Projects List
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/project-management/create-project"
                      class="sidemenu-link"
                    >
                      Create Project
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/project-management/clients"
                      class="sidemenu-link"
                    >
                      Clients
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/project-management/teams"
                      class="sidemenu-link"
                    >
                      Teams
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/project-management/kanban-board"
                      class="sidemenu-link"
                    >
                      Kanban Board
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/project-management/users"
                      class="sidemenu-link"
                    >
                      Users
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">auto_stories</span>
                  <span class="title">LMS</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/lms/courses-list" class="sidemenu-link">
                      Courses List
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/lms/course-details" class="sidemenu-link">
                      Course Details
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/lms/lesson-preview" class="sidemenu-link">
                      Lesson Preview
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/lms/create-course" class="sidemenu-link">
                      Create Course
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/lms/edit-course" class="sidemenu-link">
                      Edit Course
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/lms/instructors" class="sidemenu-link">
                      Instructors
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">support</span>
                  <span class="title">Help Desk</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/help-desk/tickets" class="sidemenu-link">
                      Tickets
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/help-desk/ticket-details"
                      class="sidemenu-link"
                    >
                      Ticket Details
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/help-desk/agents" class="sidemenu-link">
                      Agents
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/help-desk/reports" class="sidemenu-link">
                      Reports
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">local_activity</span>
                  <span class="title">Events</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/events/events-grid" class="sidemenu-link">
                      Events Grid
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/events/events-list" class="sidemenu-link">
                      Events List
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/events/event-details" class="sidemenu-link">
                      Event Details
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/events/create-an-event"
                      class="sidemenu-link"
                    >
                      Create An Event
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/events/edit-an-event" class="sidemenu-link">
                      Edit An Event
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">share</span>
                  <span class="title">Social</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/social/profile" class="sidemenu-link">
                      Profile
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/social/settings" class="sidemenu-link">
                      Settings
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">content_paste</span>
                  <span class="title">Invoices</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/invoices" class="sidemenu-link">
                      Invoices
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/invoices/invoice-details"
                      class="sidemenu-link"
                    >
                      Invoice Details
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/invoices/create-invoice"
                      class="sidemenu-link"
                    >
                      Create Invoice
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/invoices/edit-invoice" class="sidemenu-link">
                      Edit Invoice
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">person</span>
                  <span class="title">Users</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/users/team-members" class="sidemenu-link">
                      Team Members
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/users/users-list" class="sidemenu-link">
                      Users List
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/users/add-user" class="sidemenu-link">
                      Add User
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">account_box</span>
                  <span class="title">Profile</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/profile/user-profile" class="sidemenu-link">
                      User Profile
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/profile/teams" class="sidemenu-link">
                      Teams
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/profile/projects" class="sidemenu-link">
                      Projects
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <NuxtLink to="/starter" class="sidebar-menu-link">
              <span class="material-symbols-outlined">star_border</span>
              <span class="title">Starter</span>
            </NuxtLink>

            <span class="sub-title">MODULES</span>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">emoji_emotions</span>
                  <span class="title">Icons</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/icons/material-symbols"
                      class="sidemenu-link"
                    >
                      Material Symbols
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/icons/remixicon" class="sidemenu-link">
                      Remixicon
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">qr_code_scanner</span>
                  <span class="title">UI Elements</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/alerts" class="sidemenu-link">
                      Alerts
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/autocomplete"
                      class="sidemenu-link"
                    >
                      Autocomplete
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/avatars" class="sidemenu-link">
                      Avatars
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/accordion" class="sidemenu-link">
                      Accordion
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/badges" class="sidemenu-link">
                      Badges
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/breadcrumb"
                      class="sidemenu-link"
                    >
                      Breadcrumb
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/button-toggle"
                      class="sidemenu-link"
                    >
                      Button Toggle
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/buttons" class="sidemenu-link">
                      Buttons
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/cards" class="sidemenu-link">
                      Cards
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/carousels" class="sidemenu-link">
                      Carousels
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/checkbox" class="sidemenu-link">
                      Checkbox
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/chips" class="sidemenu-link">
                      Chips
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/color-picker"
                      class="sidemenu-link"
                    >
                      Color Picker
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/datepicker"
                      class="sidemenu-link"
                    >
                      Datepicker
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/dialog" class="sidemenu-link">
                      Dialog
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/divider" class="sidemenu-link">
                      Divider
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/drag-drop" class="sidemenu-link">
                      Drag & Drop
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/expansion" class="sidemenu-link">
                      Expansion
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/grid" class="sidemenu-link">
                      Grid
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/icon" class="sidemenu-link">
                      Icon
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/images" class="sidemenu-link">
                      Images
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/input" class="sidemenu-link">
                      Input
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/list" class="sidemenu-link">
                      List
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/listbox" class="sidemenu-link">
                      Listbox
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/menus" class="sidemenu-link">
                      Menus
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/navigation-drawers"
                      class="sidemenu-link"
                    >
                      Navigation Drawers
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/pagination"
                      class="sidemenu-link"
                    >
                      Pagination
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/progress-bar"
                      class="sidemenu-link"
                    >
                      Progress Bar
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/radio" class="sidemenu-link">
                      Radio
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/select" class="sidemenu-link">
                      Select
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/switches" class="sidemenu-link">
                      Switches
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/slider" class="sidemenu-link">
                      Slider
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/spacing" class="sidemenu-link">
                      Spacing
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/snackbar" class="sidemenu-link">
                      Snackbar
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/stepper" class="sidemenu-link">
                      Stepper
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/table" class="sidemenu-link">
                      Table
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/text-fields"
                      class="sidemenu-link"
                    >
                      Text Fields
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/tabs" class="sidemenu-link">
                      Tabs
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/toolbar" class="sidemenu-link">
                      Toolbar
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/tooltip" class="sidemenu-link">
                      Tooltip
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/ui-elements/typography"
                      class="sidemenu-link"
                    >
                      Typography
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/videos" class="sidemenu-link">
                      Videos
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/ui-elements/utilities" class="sidemenu-link">
                      _Utilities
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">table_chart</span>
                  <span class="title">Tables</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/tables/basic-table" class="sidemenu-link">
                      Basic Table
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/tables/data-table" class="sidemenu-link">
                      Data Table
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">forum</span>
                  <span class="title">Forms</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/forms/basic-elements" class="sidemenu-link">
                      Basic Elements
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/forms/advanced-elements"
                      class="sidemenu-link"
                    >
                      Advanced Elements
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/forms/editors" class="sidemenu-link">
                      Editors
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/forms/file-uploader" class="sidemenu-link">
                      File Uploader
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">pie_chart</span>
                  <span class="title">Charts</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/charts/line-charts" class="sidemenu-link">
                      Line
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/charts/area-charts" class="sidemenu-link">
                      Area
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/charts/column-charts" class="sidemenu-link">
                      Column
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/charts/mixed-charts" class="sidemenu-link">
                      Mixed
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/charts/radialbar-charts"
                      class="sidemenu-link"
                    >
                      RadialBar
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/charts/radar-charts" class="sidemenu-link">
                      Radar
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/charts/pie-charts" class="sidemenu-link">
                      Pie
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/charts/polar-charts" class="sidemenu-link">
                      Polar
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/charts/more-charts" class="sidemenu-link">
                      More
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">lock_open</span>
                  <span class="title">Authentication</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/authentication/sign-in"
                      class="sidemenu-link"
                    >
                      Sign In
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/authentication/sign-up"
                      class="sidemenu-link"
                    >
                      Sign Up
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/authentication/forgot-password"
                      class="sidemenu-link"
                    >
                      Forgot Password
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/authentication/reset-password"
                      class="sidemenu-link"
                    >
                      Reset Password
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/authentication/confirm-email"
                      class="sidemenu-link"
                    >
                      Confirm Email
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/authentication/lock-screen"
                      class="sidemenu-link"
                    >
                      Lock Screen
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/authentication/logout" class="sidemenu-link">
                      Logout
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">content_copy</span>
                  <span class="title">Extra Pages</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/extra-pages/pricing" class="sidemenu-link">
                      Pricing
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/extra-pages/timeline" class="sidemenu-link">
                      Timeline
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/extra-pages/faq" class="sidemenu-link">
                      FAQ
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/extra-pages/gallery" class="sidemenu-link">
                      Gallery
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/extra-pages/testimonials"
                      class="sidemenu-link"
                    >
                      Testimonials
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/extra-pages/search" class="sidemenu-link">
                      Search
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/extra-pages/coming-soon"
                      class="sidemenu-link"
                    >
                      Coming Soon
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/extra-pages/blank-page"
                      class="sidemenu-link"
                    >
                      Blank Page
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">error</span>
                  <span class="title">Errors</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink to="/errors/not-found" class="sidemenu-link">
                      404 Error
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/errors/internal-error" class="sidemenu-link">
                      Internal Error
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <NuxtLink to="/widgets" class="sidebar-menu-link">
              <span class="material-symbols-outlined">widgets</span>
              <span class="title">Widgets</span>
            </NuxtLink>
            <NuxtLink to="/maps" class="sidebar-menu-link">
              <span class="material-symbols-outlined">map</span>
              <span class="title">Maps</span>
            </NuxtLink>
            <NuxtLink to="/notifications" class="sidebar-menu-link">
              <span class="material-symbols-outlined">notifications</span>
              <span class="title">Notifications</span>
            </NuxtLink>
            <NuxtLink to="/members" class="sidebar-menu-link">
              <span class="material-symbols-outlined">people</span>
              <span class="title">Members</span>
            </NuxtLink>

            <span class="sub-title">OTHERS</span>
            <NuxtLink to="/my-profile" class="sidebar-menu-link">
              <span class="material-symbols-outlined">account_circle</span>
              <span class="title">My Profile</span>
            </NuxtLink>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">settings</span>
                  <span class="title">Settings</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/settings/account-settings"
                      class="sidemenu-link"
                    >
                      Account Settings
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/settings/change-password"
                      class="sidemenu-link"
                    >
                      Change Password
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink to="/settings/connections" class="sidemenu-link">
                      Connections
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/settings/privacy-policy"
                      class="sidemenu-link"
                    >
                      Privacy Policy
                    </NuxtLink>
                  </li>
                  <li class="sidemenu-item">
                    <NuxtLink
                      to="/settings/terms-conditions"
                      class="sidemenu-link"
                    >
                      Terms & Conditions
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <LayoutLeftSidebarAccordionItem>
              <template v-slot:accordion-trigger>
                <div class="title-header">
                  <span class="material-symbols-outlined">unfold_more</span>
                  <span class="title">Multi Level Menu</span>
                  <i class="arrow-right ri-arrow-right-s-line"></i>
                </div>
              </template>

              <template v-slot:accordion-content>
                <ul class="sidebar-sub-menu">
                  <li class="sidemenu-item">
                    <a href="javascript:void(0)" class="sidemenu-link">
                      First
                    </a>
                  </li>
                  <li class="sidemenu-item">
                    <LayoutLeftSidebarAccordionSlot>
                      <LayoutLeftSidebarAccordionItem>
                        <template v-slot:accordion-trigger>
                          <div class="title-header">
                            <span class="title">Second</span>
                            <i class="arrow-right ri-arrow-right-s-line"></i>
                          </div>
                        </template>
                        <template v-slot:accordion-content>
                          <ul class="sidebar-sub-menu">
                            <li class="sidemenu-item">
                              <a
                                href="javascript:void(0)"
                                class="sidemenu-link"
                              >
                                Second 1
                              </a>
                            </li>
                            <li class="sidemenu-item">
                              <LayoutLeftSidebarAccordionSlot>
                                <LayoutLeftSidebarAccordionItem>
                                  <template v-slot:accordion-trigger>
                                    <div class="title-header">
                                      <span class="title">Second 2</span>
                                      <i
                                        class="arrow-right ri-arrow-right-s-line"
                                      ></i>
                                    </div>
                                  </template>
                                  <template v-slot:accordion-content>
                                    <ul class="sidebar-sub-menu">
                                      <li class="sidemenu-item">
                                        <a
                                          href="javascript:void(0)"
                                          class="sidemenu-link"
                                        >
                                          Third 1
                                        </a>
                                      </li>
                                    </ul>
                                  </template>
                                </LayoutLeftSidebarAccordionItem>
                              </LayoutLeftSidebarAccordionSlot>
                            </li>
                          </ul>
                        </template>
                      </LayoutLeftSidebarAccordionItem>
                    </LayoutLeftSidebarAccordionSlot>
                  </li>
                  <li class="sidemenu-item">
                    <a href="javascript:void(0)" class="sidemenu-link">
                      Third
                    </a>
                  </li>
                </ul>
              </template>
            </LayoutLeftSidebarAccordionItem>
            <NuxtLink to="/authentication/logout" class="sidebar-menu-link">
              <span class="material-symbols-outlined">logout</span>
              <span class="title">Logout</span>
            </NuxtLink>
          </LayoutLeftSidebarAccordionSlot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import stateStore from "~/utils/store";

export default defineComponent({
  name: "LeftSidebar",
  setup() {
    const stateStoreInstance = stateStore;

    return {
      stateStoreInstance,
    };
  },
});
</script>

<style lang="scss">
.sidebar-area {
  transition: var(--transition);
  border-radius: 0 10px 10px 0;
  overflow: hidden;
  position: fixed;
  height: 100vh;
  width: 260px;
  z-index: 222;
  left: 0;
  top: 0;

  .virtual-scroll {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
      width: 5px;
    }
    &::-webkit-scrollbar:horizontal {
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-track {
      background: var(--whiteColor);
    }
  }
  .logo {
    border-bottom: 1px solid var(--borderColor);
    padding: 15px 25px 19px;
    position: absolute;
    z-index: 2;
    right: 0;
    left: 0;
    top: 0;
    a {
      transition: unset;
      span {
        margin-left: 8px;
        font-size: 24px;
        top: 1px;
      }
    }
  }
  .burger-menu {
    top: 25px;
    z-index: 3;
    opacity: 0;
    right: 15px;
    cursor: pointer;
    position: absolute;
    visibility: hidden;
    transition: var(--transition);

    span {
      height: 1px;
      width: 25px;
      margin: 6px 0;
      display: block;
      background: var(--blackColor);
      transition: var(--transition);
    }
    &.active {
      opacity: 1;
      visibility: visible;

      span {
        &.top-bar {
          transform: rotate(45deg);
          transform-origin: 10% 10%;
        }
        &.middle-bar {
          opacity: 0;
        }
        &.bottom-bar {
          transform: rotate(-45deg);
          transform-origin: 10% 90%;
          margin-top: 5px;
        }
      }
    }
  }
  .sidebar-inner {
    padding: 90px 20px 20px 25px;
    .sidebar-menu {
      .sub-title {
        display: block;
        font-size: 12px;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: #8695aa;
        &:not(:first-child) {
          margin-top: 10px;
        }
      }
    }
  }
  .accordion {
    .accordion__item {
      color: var(--blackColor);
      background-color: transparent;
      list-style-type: none;
      margin-bottom: 5px;

      .title-header {
        transition: var(--transition);
        background-color: transparent;
        color: var(--blackColor);
        border-radius: 7px;
        position: relative;
        display: block;
        height: auto;
        font-size: var(--fontSize);
        font-weight: 500;
        padding: 8px 20px 8px 40px;
        cursor: pointer;
        i,
        .material-symbols-outlined {
          transition: var(--transition);
          transform: translateY(-50%);
          color: var(--bodyColor);
          position: absolute;
          font-size: 22px;
          line-height: 1;
          left: 12px;
          top: 50%;

          &.arrow-right {
            left: auto;
            right: 5px;
            font-size: 19px;
            margin-top: 0;
            color: rgba(0, 0, 0, 0.54);
            line-height: 0.8;
          }
        }
        .badge {
          top: 50%;
          right: 34px;
          width: 20px;
          height: 20px;
          font-size: 12px;
          color: #fd5812;
          line-height: 20px;
          position: absolute;
          transform: translateY(-50%);
          background-color: #fff5ed;
          padding: 0 6px;
          &.two {
            color: #00b69b;
            background: #00b69b12;
          }
          &.three {
            color: #ee368c;
            background: #ee368c1a;
          }
        }
        &:hover {
          color: var(--blackColor);
          background-color: #f6f7f9;
        }
      }
      .accordion__trigger {
        &.accordion__trigger_active {
          background-color: #f5f5f9;
          border-radius: 5px;

          .title-header {
            i,
            .material-symbols-outlined {
              color: var(--blackColor);
              &.arrow-right {
                transform: rotate(90deg);
                top: 27%;
              }
            }
          }
        }
      }
      .accordion__content {
        padding: 4px 0 0;

        .sidebar-sub-menu {
          padding-left: 0;
          list-style-type: none;
          margin: {
            top: 0;
            bottom: 0;
          }
          .sidemenu-item {
            margin-bottom: 4px;
            .sidemenu-link {
              display: block;
              position: relative;
              border-radius: 7px;
              color: var(--bodyColor);
              transition: var(--transition);
              font-size: var(--fontSize);
              font-weight: 500;
              padding: 8px 10px 8px 38px;
              &::after {
                top: 50%;
                left: 18px;
                width: 10px;
                content: "";
                height: 10px;
                transition: 0.3s;
                border-radius: 50%;
                position: absolute;
                transform: translateY(-50%);
                border: 1px solid var(--bodyColor);
              }
              .trezo-badge {
                top: -1px;
                color: #fd5812;
                padding: 2px 6px;
                margin-left: 5px;
                border-radius: 3px;
                line-height: initial;
                background-color: #ffe8d4;
                font-size: 10px;
                font-weight: 400;
                &:before {
                  top: 50%;
                  left: -3px;
                  width: 6px;
                  height: 6px;
                  content: "";
                  position: absolute;
                  background: #ffe8d4;
                  transform: translateY(-50%) rotate(45deg);
                }
                &.style-two {
                  color: #25b003;
                  background-color: #d8ffc8;
                  &:before {
                    background: #d8ffc8;
                  }
                }
              }
              &:hover,
              &.active,
              &.router-link-active {
                background-color: #ecf0ff;
                color: var(--primaryColor);

                .badge {
                  background: var(--whiteColor);
                }
                &::after {
                  border-color: var(--primaryColor);
                }
              }
              .badge {
                top: -1px;
                color: #fd5812;
                padding: 2px 6px;
                margin-left: 5px;
                border-radius: 3px;
                line-height: initial;
                background-color: #ffe8d4;
                font-size: 10px;
                font-weight: 400;
              }
            }
            .accordion {
              .accordion__item {
                .title-header {
                  &::after {
                    top: 50%;
                    left: 18px;
                    width: 10px;
                    content: "";
                    height: 10px;
                    transition: 0.3s;
                    border-radius: 50%;
                    position: absolute;
                    transform: translateY(-50%);
                    border: 1px solid var(--bodyColor);
                  }
                }
                .accordion__trigger {
                  &.accordion__trigger_active {
                    background-color: #e7effd !important;
                    .title-header {
                      color: var(--primaryColor) !important;
                    }
                  }
                }
                .accordion__content {
                  padding-left: 20px;
                }
              }
            }
          }
        }
      }
    }
    .sidebar-menu-link {
      transition: var(--transition);
      color: var(--blackColor);
      margin-bottom: 5px;
      position: relative;
      border-radius: 7px;
      display: block;
      padding: 11.5px 30px 11.5px 40px;
      font-size: var(--fontSize);
      font-weight: 500;
      i,
      .material-symbols-outlined {
        transition: var(--transition);
        transform: translateY(-50%);
        color: var(--bodyColor);
        position: absolute;
        font-size: 22px;
        line-height: 1;
        left: 12px;
        top: 50%;
      }
      &:hover,
      &.router-link-active {
        color: var(--primaryColor);
        background-color: #f6f7f9;
        i,
        .material-symbols-outlined {
          color: var(--primaryColor);
        }
      }
    }
  }
  &.active {
    width: 60px;

    .logo {
      padding: {
        left: 12px;
        right: 12px;
      }
      a {
        span {
          display: none;
        }
      }
    }
    .sidebar-inner {
      padding: {
        top: 80px;
        left: 12px;
        right: 12px;
      }
    }
    .sidebar-menu {
      .sub-title {
        display: none;
      }
    }
    .accordion {
      .accordion__item {
        margin: {
          top: 3px;
          bottom: 3px;
        }
        .title-header {
          padding: 0;
          width: 36px;
          height: 36px;

          .arrow-right {
            display: none;
          }
          .title {
            display: none;
          }
          .badge {
            display: none;
          }
          .material-symbols-outlined {
            left: 4px;
          }
        }
        .accordion__content {
          display: none;
        }
      }
      .sidebar-menu-link {
        padding: 0;
        width: 36px;
        height: 36px;

        i,
        .material-symbols-outlined {
          left: 4px;
        }
        .title {
          display: none;
        }
      }
    }
    .burger-menu {
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      width: 260px;

      .logo {
        padding: {
          left: 15px;
          right: 15px;
        }
        a {
          span {
            display: inline-block;
          }
        }
      }
      .burger-menu {
        opacity: 1;
        visibility: visible;
      }
      .sidebar-inner {
        padding: {
          top: 100px;
          left: 15px;
          right: 15px;
        }
      }
      .sidebar-menu {
        .sub-title {
          display: block;
        }
      }
      .accordion {
        .accordion__item {
          margin: {
            top: 0;
            bottom: 0;
          }
          .title-header {
            width: auto;
            height: auto;
            padding: {
              bottom: 14px;
              right: 60px;
              left: 37px;
              top: 14px;
            }
            .arrow-right {
              display: block;
            }
            .title {
              display: block;
            }
            .badge {
              display: inline-block;
            }
          }
          .accordion__content {
            display: block;
          }
        }
        .sidebar-menu-link {
          width: auto;
          height: auto;
          padding: {
            bottom: 14px;
            right: 60px;
            left: 37px;
            top: 14px;
          }
          i {
            left: 15px;
            right: auto;
            text-align: unset;
          }
          .title {
            display: block;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sidebar-area {
    width: 250px;
    left: -100%;

    .logo {
      padding: {
        top: 15px;
        bottom: 15px;
      }
      a {
        span {
          margin-left: 15px;
        }
      }
    }
    .sidebar-menu {
      .sub-title {
        font-size: 13px;
      }
    }
    .burger-menu {
      top: 25px;
      right: 12px;
    }
    .sidebar-inner {
      padding-top: 75px;
    }
    .accordion {
      .accordion__item {
        .title-header {
          font-size: 13px;
          padding: 8px 25px 8px 37px;
          .material-symbols-outlined {
            font-size: 18px;
            left: 12px !important;
          }
          .title {
            font-size: 13px;
          }
          .badge {
            right: 28px;
            width: 18px;
            height: 18px;
            font-size: 11px;
            line-height: 18px;
          }
        }
        .accordion__content {
          .sidebar-sub-menu {
            .sidemenu-item {
              .sidemenu-link {
                font-size: 13px;
                padding: 7px 10px 7px 35px;
                &::after {
                  left: 15px;
                  width: 5px;
                  height: 5px;
                }
              }
            }
          }
        }
      }
      .sidebar-menu-link {
        font-size: 13px;
        padding: 8px 25px 8px 37px;
        i {
          font-size: 14px;
          left: 12px;
        }
      }
    }
    &.active {
      width: 250px;
      left: 0;

      .logo {
        padding: {
          left: 12px;
          right: 12px;
        }
        a {
          span {
            display: inline-block;
          }
        }
      }
      .burger-menu {
        opacity: 1;
        visibility: visible;
      }
      .sidebar-inner {
        padding: {
          top: 75px;
          left: 12px;
          right: 12px;
        }
      }
      .sidebar-menu {
        .sub-title {
          display: block;
        }
      }
      .accordion {
        .accordion__item {
          .title-header {
            width: auto;
            height: auto;
            padding: {
              bottom: 13px;
              right: 50px;
              left: 34px;
              top: 13px;
            }
            display: block;
            .title {
              display: block !important;
            }
            .badge {
              display: block !important;
              right: 35px;
            }
            .arrow-right {
              display: block !important;
            }
            .accordion__content {
              width: auto;
              height: auto;
              display: block !important;
              padding: {
                bottom: 13px;
                right: 50px;
                left: 34px;
                top: 13px;
              }
              i {
                left: 12px;
                right: auto;
                text-align: unset;
              }
              .badge {
                display: inline-block !important;
              }
            }
          }
          .accordion__content {
            display: block;
          }
        }
        .sidebar-menu-link {
          width: auto;
          height: auto;
          padding: {
            bottom: 13px;
            right: 50px;
            left: 34px;
            top: 13px;
          }
          i {
            left: 12px;
            right: auto;
            text-align: unset;
          }
          .title {
            display: block;
          }
        }
      }
      &:hover {
        width: 250px;

        .logo {
          padding: {
            left: 12px;
            right: 12px;
          }
          a {
            span {
              display: inline-block;
            }
          }
        }
        .burger-menu {
          opacity: 1;
          visibility: visible;
        }
        .sidebar-inner {
          padding: {
            top: 75px;
            left: 12px;
            right: 12px;
          }
        }
        .sidebar-menu {
          .sub-title {
            display: block;
          }
        }
        .accordion {
          .accordion__item {
            margin: {
              top: 0;
              bottom: 0;
            }
            .title-header {
              width: auto;
              height: auto;
              padding: {
                bottom: 13px;
                right: 50px;
                left: 34px;
                top: 13px;
              }
              .title {
                display: block;
              }
              .badge {
                display: inline-block;
                right: 35px;
              }
            }
            .accordion__content {
              display: block;
            }
          }
          .sidebar-menu-link {
            width: auto;
            height: auto;
            padding: {
              bottom: 13px;
              right: 50px;
              left: 34px;
              top: 13px;
            }
            i {
              left: 12px;
              right: auto;
              text-align: unset;
            }
            .title {
              display: block;
            }
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sidebar-area {
    left: -100%;

    .sidebar-inner {
      padding-top: 85px;
    }
    &.active {
      width: 260px;
      left: 0;

      .logo {
        padding: {
          left: 15px;
          right: 15px;
        }
        a {
          span {
            display: inline-block;
          }
        }
      }
      .burger-menu {
        opacity: 1;
        visibility: visible;
      }
      .sidebar-inner {
        padding: {
          top: 80px;
          left: 15px;
          right: 15px;
        }
      }
      .sidebar-menu {
        .sub-title {
          display: block;
        }
      }
      .accordion {
        .accordion__item {
          margin: {
            top: 0;
            bottom: 0;
          }
          .title-header {
            width: auto;
            height: auto;
            padding: {
              bottom: 14px;
              right: 60px;
              left: 37px;
              top: 14px;
            }
            .arrow-right {
              display: block;
            }
            .title {
              display: block;
            }
            .badge {
              display: inline-block;
            }
          }
          .accordion__content {
            display: block;
          }
        }
        .sidebar-menu-link {
          width: auto;
          height: auto;
          padding: {
            bottom: 14px;
            right: 60px;
            left: 37px;
            top: 14px;
          }
          i {
            left: 15px;
            right: auto;
            text-align: unset;
          }
          .title {
            display: block;
          }
        }
      }
      &:hover {
        width: 260px;

        .sidebar-inner {
          padding-top: 80px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sidebar-area {
    left: -100%;

    &.active {
      width: 260px;
      left: 0;

      .logo {
        padding: {
          left: 15px;
          right: 15px;
        }
        a {
          span {
            display: inline-block;
          }
        }
      }
      .burger-menu {
        opacity: 1;
        visibility: visible;
      }
      .sidebar-inner {
        padding: {
          top: 80px;
          left: 15px;
          right: 15px;
        }
      }
      .sidebar-menu {
        .sub-title {
          display: block;
        }
      }
      .accordion {
        .accordion__item {
          margin: {
            top: 0;
            bottom: 0;
          }
          .title-header {
            width: auto;
            height: auto;
            padding: {
              bottom: 14px;
              right: 60px;
              left: 37px;
              top: 14px;
            }
            .arrow-right {
              display: block;
            }
            .title {
              display: block;
            }
            .badge {
              display: inline-block;
            }
          }
          .accordion__content {
            display: block;
          }
        }
        .sidebar-menu-link {
          width: auto;
          height: auto;
          padding: {
            bottom: 14px;
            right: 60px;
            left: 37px;
            top: 14px;
          }
          i {
            left: 15px;
            right: auto;
            text-align: unset;
          }
          .title {
            display: block;
          }
        }
      }
      &:hover {
        width: 260px;

        .sidebar-inner {
          padding-top: 80px;
        }
      }
    }
  }
}
</style>
