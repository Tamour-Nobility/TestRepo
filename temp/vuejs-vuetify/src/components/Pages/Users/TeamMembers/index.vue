<template>
  <v-card
    class="team-member-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header mb-0">
      <form class="search-box position-relative">
        <label>
          <i class="material-symbols-outlined"> search </i>
        </label>
        <input
          type="text"
          class="input-search"
          placeholder="Search member here....."
        />
      </form>
      <RouterLink class="add-btn" to="/users/add-user">
        <i class="material-symbols-outlined"> add </i>
        Add New Member
      </RouterLink>
    </div>
  </v-card>
  <v-row>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user11.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Ava Turner
              </span>
              <span class="d-block"> Business Analyst </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            01 Jan 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            turner&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-445-4455
          </li>
          <li>
            <span class="text-black"> Location: </span>
            Washington D.C
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user12.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Ethan Parker
              </span>
              <span class="d-block"> Project Manager </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            10 Jan 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            parker&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-445-7788
          </li>
          <li>
            <span class="text-black"> Location: </span>
            San Diego
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user13.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Isabella Lee
              </span>
              <span class="d-block"> Team Leader </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            20 Jan 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            lee&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-333-2288
          </li>
          <li>
            <span class="text-black"> Location: </span>
            Los Angeles
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user14.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Thompson Torres
              </span>
              <span class="d-block"> Designer </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            01 Feb 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            torres&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-444-3355
          </li>
          <li>
            <span class="text-black"> Location: </span>
            Boston
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user15.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Lucas Lyon
              </span>
              <span class="d-block"> Technical Writer </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            10 Feb 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            lucas&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-455-9966
          </li>
          <li>
            <span class="text-black"> Location: </span>
            Chicago
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user16.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Morgan Sturges
              </span>
              <span class="d-block"> Data Analyst </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            01 Mar 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            morgan&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-225-7755
          </li>
          <li>
            <span class="text-black"> Location: </span>
            Las Vegas
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user17.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Sophia McNeel
              </span>
              <span class="d-block"> Sales Representative </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            15 Mar 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            sophia&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-444-8822
          </li>
          <li>
            <span class="text-black"> Location: </span>
            San Francisco
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user18.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Rodriguez Meade
              </span>
              <span class="d-block"> Manager </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            01 Apr 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            meade&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-455-4411
          </li>
          <li>
            <span class="text-black"> Location: </span>
            Houston
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user19.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Michael Mackenzie
              </span>
              <span class="d-block"> Web Developer </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            10 Apr 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            michael&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-555-9922
          </li>
          <li>
            <span class="text-black"> Location: </span>
            Oklahoma City
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user20.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Charles Tharp
              </span>
              <span class="d-block"> Accountant </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            01 May 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            charles&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-433-2255
          </li>
          <li>
            <span class="text-black"> Location: </span>
            Austin
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user21.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Tina Bell
              </span>
              <span class="d-block"> Executive Assistant </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            10 May 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            tina&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-444-3399
          </li>
          <li>
            <span class="text-black"> Location: </span>
            Portland
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" xl="3" sm="6">
      <v-card
        class="team-member-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="v-card-header info d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <v-img
                src="@/assets/images/users/user22.jpg"
                class="rounded-circle"
                alt="user-image"
              />
            </div>
            <div>
              <span class="title d-block fw-medium text-black">
                Melvin Larocque
              </span>
              <span class="d-block"> Business Analyst </span>
            </div>
          </div>
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                type="button"
                v-bind="props"
                class="position-relative dot-btn p-0 bg-transparent border-none"
              >
                <i class="ri-more-fill"></i>
              </button>
            </template>
            <v-list class="menu-content">
              <button type="button" class="bg-transparent border-none">
                View
              </button>
              <button type="button" class="bg-transparent border-none">
                Edit
              </button>
              <button type="button" class="bg-transparent border-none">
                Delete
              </button>
            </v-list>
          </v-menu>
        </div>
        <ul class="pl-0 mb-0 list-unstyled">
          <li>
            <span class="text-black"> Joined Date: </span>
            01 Jun 2024
          </li>
          <li>
            <span class="text-black"> Email Address: </span>
            melvin&#64;trezo.com
          </li>
          <li>
            <span class="text-black"> Phone Number: </span>
            +1 555-445-5855
          </li>
          <li>
            <span class="text-black"> Location: </span>
            San Diego
          </li>
        </ul>
        <div class="socials-link">
          <a
            href="https://www.facebook.com/"
            class="facebook d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="twitter d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="linkedin d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            class="github d-inline-block position-relative rounded-circle text-center"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
        </div>
      </v-card>
    </v-col>
  </v-row>
  <Pagination
    items="12"
    class="pagination-content border-radius d-block bg-white border-0 shadow-none"
  />
</template>

<script>
import Pagination from "@/components/Common/Pagination.vue";

export default {
  name: "TeamMembers",
  components: {
    Pagination,
  },
};
</script>

<style lang="scss" scoped>
.team-member-card {
  .v-card-header {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-box {
      margin-right: 20px;
      margin-top: 0;

      i {
        top: 50%;
        left: 13px;
        font-size: 20px;
        position: absolute;
        transform: translateY(-50%);
        z-index: 1;
      }
      .input-search {
        height: 36px;
        font-size: 12px;
        padding-left: 38px;
      }
    }
  }
  .info {
    .v-img {
      width: 65px;
      height: 65px;
      margin-right: 12px;
      border: 2px solid var(--borderColor);
    }
    .title {
      font-size: 16px;
      margin-bottom: 6px;
    }
  }
  ul {
    margin-top: 15px;

    li {
      margin-bottom: 13px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .socials-link {
    margin-top: 20px;

    a {
      width: 28px;
      height: 28px;
      margin-right: 10px;
      color: var(--whiteColor);
      background-color: var(--primaryColor);

      i {
        left: 0;
        right: 0;
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
      }
      &:hover {
        transform: translateY(-4px);
      }
      &.facebook {
        background-color: #3a559f;
      }
      &.twitter {
        background-color: #03a9f4;
      }
      &.linkedin {
        background-color: #007ab9;
      }
      &.github {
        background-color: #000000;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .team-member-card {
    .v-card-header {
      display: block;
      margin-top: 12px;

      .d-flex {
        align-items: center !important;
      }
      .search-box {
        width: 150px;
        margin: {
          right: 10px;
          top: 0;
        }
        i {
          left: 10px;
          font-size: 18px;
        }
        .input-search {
          height: 32px;
          padding-left: 35px;
        }
      }
    }
    .info {
      .v-img {
        width: 60px;
        height: 60px;
      }
      .title {
        font-size: 14px;
      }
    }
    ul {
      margin-top: 12px;
    }
    .socials-link {
      margin-top: 15px;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .team-member-card {
    .v-card-header {
      display: flex;
      margin-top: 0;

      .search-box {
        width: 200px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .team-member-card {
    .info {
      .v-img {
        width: 60px;
        height: 60px;
      }
      .title {
        font-size: 15px;
      }
    }
  }
}
</style>
