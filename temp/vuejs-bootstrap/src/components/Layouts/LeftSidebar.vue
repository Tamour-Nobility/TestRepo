<template>
  <div class="sidebar-area">
    <div class="logo position-relative">
      <RouterLink
        to="/dashboard"
        class="d-block text-decoration-none position-relative"
      >
        <img src="@/assets/images/logo-icon.png" alt="logo-icon" />
        <span class="logo-text fw-bold text-dark">Trezo</span>
      </RouterLink>
      <button
        class="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
        id="sidebar-burger-menu"
        @click="stateStoreInstance.onChange"
      >
        <i data-feather="x"></i>
      </button>
    </div>

    <div class="layout-menu menu-vertical menu hover-scroll-bar">
      <ul class="menu-inner">
        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">MAIN</span>
        </li>
        <li class="menu-item" :class="{ open: isOpen('dashboard') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('dashboard')"
          >
            <span class="material-symbols-outlined menu-icon">dashboard</span>
            <span class="title">Dashboard</span>
            <span class="count">15</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('dashboard')">
            <li class="menu-item">
              <RouterLink to="/dashboard" class="menu-link">
                eCommerce
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/dashboard/crm" class="menu-link">
                CRM
                <span class="new tag">Hot</span>
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/dashboard/project-management" class="menu-link">
                Project Management
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/lms" class="menu-link">
                LMS
                <span class="new tag">Top</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/help-desk" class="menu-link">
                HelpDesk
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/analytics" class="menu-link">
                Analytics
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/crypto" class="menu-link">
                Crypto
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/sales" class="menu-link">
                Sales
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/hospital" class="menu-link">
                Hospital
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/marketing" class="menu-link">
                Marketing
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/nft" class="menu-link">
                NFT
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/saas" class="menu-link">
                SaaS
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/real-estate" class="menu-link">
                Real Estate
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/shipment" class="menu-link">
                Shipment
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
            <li class="menu-item mb-0">
              <RouterLink to="/dashboard/finance" class="menu-link">
                Finance
                <span class="hot tag">New</span>
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('front-pages') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('front-pages')"
          >
            <span class="material-symbols-outlined menu-icon">note_stack</span>
            <span class="title">Front Pages</span>
          </a>
          <ul class="menu-sub" v-show="isOpen('front-pages')">
            <li class="menu-item">
              <RouterLink to="/" class="menu-link"> Home </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/features" class="menu-link">
                Features
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/our-team" class="menu-link">
                Our Team
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/faq" class="menu-link"> FAQ’s </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/contact" class="menu-link"> Contact </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">APPS</span>
        </li>

        <li class="menu-item">
          <RouterLink to="/apps/calendar" class="menu-link">
            <span class="material-symbols-outlined menu-icon">date_range</span>
            <span class="title">Calendar</span>
          </RouterLink>
        </li>

        <li class="menu-item">
          <RouterLink to="/apps/to-do-list" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              format_list_bulleted
            </span>
            <span class="title">To Do List</span>
          </RouterLink>
        </li>

        <li class="menu-item">
          <RouterLink to="/apps/contacts" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              contact_page
            </span>
            <span class="title">Contacts</span>
          </RouterLink>
        </li>

        <li class="menu-item">
          <RouterLink to="/apps/chat" class="menu-link">
            <span class="material-symbols-outlined menu-icon">chat</span>
            <span class="title">Chat</span>
          </RouterLink>
        </li>

        <li class="menu-item" :class="{ open: isOpen('email') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('email')"
          >
            <span class="material-symbols-outlined menu-icon">mail</span>
            <span class="title">Email</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('email')">
            <li class="menu-item">
              <RouterLink to="/apps/email/inbox" class="menu-link">
                Inbox
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/email/compose" class="menu-link">
                Compose
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/email/read-email" class="menu-link">
                Read Email
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/email/snoozed" class="menu-link">
                Snoozed
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/email/draft" class="menu-link">
                Draft
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/email/sent-mail" class="menu-link">
                Sent Mail
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/email/trash-email" class="menu-link">
                Trash
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/email/spam" class="menu-link">
                Spam
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/email/starred" class="menu-link">
                Starred
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/email/important" class="menu-link">
                Important
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <RouterLink to="/apps/kanban-board" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              space_dashboard
            </span>
            <span class="title">Kanban Board</span>
          </RouterLink>
        </li>

        <li class="menu-item" :class="{ open: isOpen('fileManager') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('fileManager')"
          >
            <span class="material-symbols-outlined menu-icon">folder</span>
            <span class="title">File Manager</span>
          </a>
          <ul class="menu-sub" v-show="isOpen('fileManager')">
            <li class="menu-item">
              <RouterLink to="/apps/file-manager/my-drive" class="menu-link">
                My Drive
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/file-manager/assets" class="menu-link">
                Assets
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/file-manager/projects" class="menu-link">
                Projects
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/file-manager/personal" class="menu-link">
                Personal
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink
                to="/apps/file-manager/applications"
                class="menu-link"
              >
                Applications
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/file-manager/documents" class="menu-link">
                Documents
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/apps/file-manager/media" class="menu-link">
                Media
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">PAGES</span>
        </li>

        <li class="menu-item" :class="{ open: isOpen('eCommerce') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('eCommerce')"
          >
            <span class="material-symbols-outlined menu-icon">
              shopping_cart
            </span>
            <span class="title">eCommerce</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('eCommerce')">
            <li class="menu-item">
              <RouterLink to="/ecommerce/products-grid" class="menu-link">
                Products Grid
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/products-list" class="menu-link">
                Products List
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/product-details" class="menu-link">
                Product Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/create-product" class="menu-link">
                Create Product
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/edit-product" class="menu-link">
                Edit Product
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/cart" class="menu-link">
                Cart
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/checkout" class="menu-link">
                Checkout
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/orders" class="menu-link">
                Orders
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/order-details" class="menu-link">
                Order Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/create-order" class="menu-link">
                Create Order
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/order-tracking" class="menu-link">
                Order Tracking
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/customers" class="menu-link">
                Customers
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/customer-details" class="menu-link">
                Customer Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/categories" class="menu-link">
                Categories
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/sellers" class="menu-link">
                Sellers
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/seller-details" class="menu-link">
                Seller Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/create-seller" class="menu-link">
                Create Seller
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/reviews" class="menu-link">
                Reviews
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ecommerce/refunds" class="menu-link">
                Refunds
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('crm') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('crm')"
          >
            <span class="material-symbols-outlined menu-icon">handshake</span>
            <span class="title">CRM</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('crm')">
            <li class="menu-item">
              <RouterLink to="/crm/contacts" class="menu-link">
                Contacts
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/crm/customers" class="menu-link">
                Customers
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/crm/leads" class="menu-link"> Leads </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/crm/deals" class="menu-link"> Deals </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('projectManagement') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('projectManagement')"
          >
            <span class="material-symbols-outlined menu-icon">
              content_paste
            </span>
            <span class="title">Project Management</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('projectManagement')">
            <li class="menu-item">
              <RouterLink
                to="/project-management/project-overview"
                class="menu-link"
              >
                Project Overview
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink
                to="/project-management/project-list"
                class="menu-link"
              >
                Project List
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink
                to="/project-management/create-project"
                class="menu-link"
              >
                Create Project
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/project-management/clients" class="menu-link">
                Clients
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/project-management/teams" class="menu-link">
                Teams
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink
                to="/project-management/kanban-board"
                class="menu-link"
              >
                Kanvan Board
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/project-management/user" class="menu-link">
                User
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('lms') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('lms')"
          >
            <span class="material-symbols-outlined menu-icon">
              auto_stories
            </span>
            <span class="title">LMS</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('lms')">
            <li class="menu-item">
              <RouterLink to="/lms/courses-list" class="menu-link">
                Courses List
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/lms/course-details" class="menu-link">
                Course Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/lms/lesson-preview" class="menu-link">
                Lesson Preview
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/lms/create-course" class="menu-link">
                Create Course
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/lms/edit-course" class="menu-link">
                Edit Course
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/lms/instructors" class="menu-link">
                Instructors
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('helpDesk') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('helpDesk')"
          >
            <span class="material-symbols-outlined menu-icon">support</span>
            <span class="title">Help Desk</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('helpDesk')">
            <li class="menu-item">
              <RouterLink to="/help-desk/tickets" class="menu-link">
                Tickets
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/help-desk/ticket-details" class="menu-link">
                Ticket Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/help-desk/agents" class="menu-link">
                Agents
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/help-desk/reports" class="menu-link">
                Reports
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('nftMarketplace') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('nftMarketplace')"
          >
            <span class="material-symbols-outlined menu-icon">store</span>
            <span class="title">NFT Marketplace</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('nftMarketplace')">
            <li class="menu-item">
              <RouterLink to="/nft-marketplace/marketplace" class="menu-link">
                Marketplace
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/nft-marketplace/explore-all" class="menu-link">
                Explore All
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/nft-marketplace/live-auction" class="menu-link">
                Live Auction
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/nft-marketplace/nft-details" class="menu-link">
                NFT Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/nft-marketplace/creators" class="menu-link">
                Creators
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink
                to="/nft-marketplace/creator-details"
                class="menu-link"
              >
                Creator Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink
                to="/nft-marketplace/wallet-connect"
                class="menu-link"
              >
                Wallet Connect
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('realEstate') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('realEstate')"
          >
            <span class="material-symbols-outlined menu-icon"
              >real_estate_agent</span
            >
            <span class="title">Real Estate</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('realEstate')">
            <li class="menu-item">
              <RouterLink
                to="/real-estate/real-estate-customers"
                class="menu-link"
              >
                Real Estate Customers
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/real-estate/property-list" class="menu-link">
                Property List
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/real-estate/property-overview" class="menu-link">
                Property Overview
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/real-estate/add-property" class="menu-link">
                Add Property
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/real-estate/agent-list" class="menu-link">
                Agent list
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/real-estate/agent-overview" class="menu-link">
                Agent Overview
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/real-estate/add-agent" class="menu-link">
                Add Agent
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('finance') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('finance')"
          >
            <span class="material-symbols-outlined menu-icon">support</span>
            <span class="title">Finance</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('finance')">
            <li class="menu-item">
              <RouterLink to="/finance/wallet" class="menu-link">
                Wallet
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/finance/transaction" class="menu-link">
                Transaction
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('events') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('events')"
          >
            <span class="material-symbols-outlined menu-icon">
              local_activity
            </span>
            <span class="title">Events</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('events')">
            <li class="menu-item">
              <RouterLink to="/events" class="menu-link"> Events </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/events/events-list" class="menu-link">
                Events List
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/events/event-details" class="menu-link">
                Event Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/events/create-an-event" class="menu-link">
                Create An Event
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/events/edit-an-event" class="menu-link">
                Edit An Event
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('social') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('social')"
          >
            <span class="material-symbols-outlined menu-icon">share</span>
            <span class="title">Social</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('social')">
            <li class="menu-item">
              <RouterLink to="/social/profile" class="menu-link">
                Profile
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/social/settings" class="menu-link">
                Settings
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('invoice') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('invoice')"
          >
            <span class="material-symbols-outlined menu-icon">
              content_paste
            </span>
            <span class="title">Invoice</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('invoice')">
            <li class="menu-item">
              <RouterLink to="/invoices/invoice-list" class="menu-link">
                Invoice List
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/invoices/invoice-details" class="menu-link">
                Invoice Details
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/invoices/create-invoice" class="menu-link">
                Create Invoice
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/invoices/edit-invoice" class="menu-link">
                Edit Invoice
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('users') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('users')"
          >
            <span class="material-symbols-outlined menu-icon">group_add</span>
            <span class="title">Users</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('users')">
            <li class="menu-item">
              <RouterLink to="/users/team-members" class="menu-link">
                Team Members
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/users/users-list" class="menu-link">
                Users List
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/users/add-user" class="menu-link">
                Add User
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('profile') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('profile')"
          >
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">Profile</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('profile')">
            <li class="menu-item">
              <RouterLink to="/profile/user-profile" class="menu-link">
                User Profile
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/profile/teams" class="menu-link">
                Teams
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/profile/my-projects" class="menu-link">
                Projects
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <RouterLink to="/starter" class="menu-link">
            <span class="material-symbols-outlined menu-icon">star</span>
            <span class="title">Starter</span>
          </RouterLink>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">MODULES</span>
        </li>

        <li class="menu-item" :class="{ open: isOpen('icons') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('icons')"
          >
            <span class="material-symbols-outlined menu-icon">
              add_reaction
            </span>
            <span class="title">Icons</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('icons')">
            <li class="menu-item">
              <RouterLink to="/icons/material-icons" class="menu-link">
                Material Icons
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/icons/feathericon" class="menu-link">
                Feathericon
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/icons/remixicon" class="menu-link">
                Remixicon
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('uiElements') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('uiElements')"
          >
            <span class="material-symbols-outlined menu-icon">
              gallery_thumbnail
            </span>
            <span class="title">UI Elements</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('uiElements')">
            <li class="menu-item">
              <RouterLink to="/ui-elements/alerts" class="menu-link">
                Alerts
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/avatar" class="menu-link">
                Avatar
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/buttons" class="menu-link">
                Buttons
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/badges" class="menu-link">
                Badges
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/cards" class="menu-link">
                Cards
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/carousels" class="menu-link">
                Carousels
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/dropdowns" class="menu-link">
                Dropdowns
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/grids" class="menu-link">
                Grids
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/images" class="menu-link">
                Images
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/list" class="menu-link">
                List
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/modals" class="menu-link">
                Modals
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/navs" class="menu-link">
                Navs
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/paginations" class="menu-link">
                Paginations
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/popover-tooltips" class="menu-link">
                Popover Tooltips
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/progress" class="menu-link">
                Progress
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/spinners" class="menu-link">
                Spinners
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/tabs" class="menu-link">
                Tabs
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/accordions" class="menu-link">
                Accordions
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/date-time-picker" class="menu-link">
                Date/Time Picker
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/ui-elements/videos" class="menu-link">
                Videos
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('tables') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('tables')"
          >
            <span class="material-symbols-outlined menu-icon">table</span>
            <span class="title">Tables</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('tables')">
            <li class="menu-item">
              <RouterLink to="/tables/basic-table" class="menu-link">
                Basic Table
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/tables/data-tables" class="menu-link">
                Data Table
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('forms') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('forms')"
          >
            <span class="material-symbols-outlined menu-icon">clarify</span>
            <span class="title">Forms</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('forms')">
            <li class="menu-item">
              <RouterLink to="/forms/basic-elements" class="menu-link">
                Basic Elements
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/forms/advanced-elements" class="menu-link">
                Advanced Elements
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/forms/validation" class="menu-link">
                Validation
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/forms/wizard" class="menu-link">
                Wizard
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/forms/editors" class="menu-link">
                Editors
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/forms/file-upload" class="menu-link">
                File Upload
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <RouterLink to="/apex-charts" class="menu-link">
            <span class="material-symbols-outlined menu-icon">donut_large</span>
            <span class="title">Apex Charts</span>
          </RouterLink>
        </li>

        <li class="menu-item" :class="{ open: isOpen('authentication') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('authentication')"
          >
            <span class="material-symbols-outlined menu-icon">lock</span>
            <span class="title">Authentication</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('authentication')">
            <li class="menu-item">
              <RouterLink to="/authentication/login" class="menu-link">
                Login
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/authentication/register" class="menu-link">
                Register
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/authentication/reset-password" class="menu-link">
                Reset Password
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink
                to="/authentication/forget-password"
                class="menu-link"
              >
                Forget Password
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/authentication/lock-screen" class="menu-link">
                Lock Screen
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/authentication/logout" class="menu-link">
                Log Out
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/authentication/confirm-mail" class="menu-link">
                Confirm Mail
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('extraPages') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('extraPages')"
          >
            <span class="material-symbols-outlined menu-icon">
              featured_video
            </span>
            <span class="title">Extra Pages</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('extraPages')">
            <li class="menu-item">
              <RouterLink to="/extra-pages/pricing-plan" class="menu-link">
                Pricing Plan
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/faq" class="menu-link">
                FAQ
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/timeline" class="menu-link">
                Timeline
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/animation" class="menu-link">
                Animation
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/clip-board" class="menu-link">
                Clip Board
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/drag-drop" class="menu-link">
                Drag & Drop
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/range-slider" class="menu-link">
                Range Slider
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/ratings" class="menu-link">
                Ratings
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/toasts" class="menu-link">
                Toasts
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/check-radio" class="menu-link">
                Check & Radio
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/select" class="menu-link">
                Select
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/scrollbar" class="menu-link">
                Scrollbar
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/typography" class="menu-link">
                Typography
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/gallery" class="menu-link">
                Gallery
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/search" class="menu-link">
                Search
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/extra-pages/blank-page" class="menu-link">
                Blank Page
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('errors') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('errors')"
          >
            <span class="material-symbols-outlined menu-icon">chat_error</span>
            <span class="title">Errors</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('errors')">
            <li class="menu-item">
              <RouterLink to="/error/internal-error" class="menu-link">
                Internal Error
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <RouterLink to="/widgets" class="menu-link">
            <span class="material-symbols-outlined menu-icon">widgets</span>
            <span class="title">Widgets</span>
          </RouterLink>
        </li>

        <li class="menu-item">
          <RouterLink to="/google-map" class="menu-link">
            <span class="material-symbols-outlined menu-icon">map</span>
            <span class="title">Google Map</span>
          </RouterLink>
        </li>

        <li class="menu-item">
          <RouterLink to="/notification" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              notifications
            </span>
            <span class="title">Notification</span>
          </RouterLink>
        </li>

        <li class="menu-item">
          <RouterLink to="/members" class="menu-link">
            <span class="material-symbols-outlined menu-icon">group</span>
            <span class="title">Members</span>
          </RouterLink>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">OTHERS</span>
        </li>

        <li class="menu-item">
          <RouterLink to="/my-profile" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">My Profile</span>
          </RouterLink>
        </li>

        <li class="menu-item" :class="{ open: isOpen('settings') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('settings')"
          >
            <span class="material-symbols-outlined menu-icon">settings</span>
            <span class="title">Settings</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('settings')">
            <li class="menu-item">
              <RouterLink to="/settings/account-settings" class="menu-link">
                Account Settings
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/settings/change-password" class="menu-link">
                Change Password
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/settings/connections" class="menu-link">
                Connections
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/settings/privacy-policy" class="menu-link">
                Privacy Policy
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/settings/terms-conditions" class="menu-link">
                Terms & Conditions
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <RouterLink to="/authentication/logout" class="menu-link">
            <span class="material-symbols-outlined menu-icon">logout</span>
            <span class="title">Logout</span>
          </RouterLink>
        </li>

        <!-- <li class="menu-item" :class="{ open: isOpen('multiLevelMenu') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('multiLevelMenu')"
          >
            <span class="material-symbols-outlined menu-icon">
              keyboard_arrow_down
            </span>
            <span class="title">Multi Level Menu</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('multiLevelMenu')">
            <li
              class="menu-item after-sub-menu menu-level"
              :class="{ open: isOpen('levelOne') }"
            >
              <a
                href="javascript:void(0);"
                class="menu-link menu-toggle"
                @click="toggleMenu('levelOne')"
              >
                <span class="title">Level One</span>
              </a>
              <ul class="menu-sub" v-show="isOpen('levelOne')">
                <li class="menu-item">
                  <RouterLink to="/#" class="menu-link"> Level Three </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import feather from "feather-icons";
import stateStore from "../../utils/store";

export default defineComponent({
  name: "LeftSidebar",
  setup() {
    const stateStoreInstance = stateStore;

    // Reactive state to track which menu items are open
    const openMenu = ref(null);

    // Method to toggle the menu items
    const toggleMenu = (menu) => {
      // If the same menu is clicked, toggle it; otherwise, open the clicked menu
      openMenu.value = openMenu.value === menu ? null : menu;
    };

    // Method to check if a menu is open
    const isOpen = (menu) => {
      return openMenu.value === menu;
    };

    onMounted(() => {
      feather.replace();
    });

    return {
      stateStoreInstance,
      toggleMenu,
      isOpen,
    };
  },
});
</script>
