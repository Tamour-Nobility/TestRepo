<template>
  <div class="row">
    <div class="col-lg-4 col-md-12">
      <v-card
        class="chat-sidebar-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0 fw-medium">Messages</h5>
        </div>
        <div class="chat-sidebar-content">
          <form class="search-box position-relative">
            <label>
              <i class="material-symbols-outlined"> search </i>
            </label>
            <input type="text" class="input-search" placeholder="Search" />
          </form>
          <v-tabs v-model="tab" bg-color="white">
            <v-tab value="one">All Message</v-tab>
            <v-tab value="two">Group Chat</v-tab>
            <v-tab value="three">Contacts</v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <div class="chat-users-list">
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user31.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Sarah Smith
                        </span>
                        <span class="d-block text-success"> Typing... </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block"> Just Now </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user6.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Michael Johnson
                        </span>
                        <span class="attachment d-block text-body">
                          <i class="ri-file-text-line"></i>
                          Attachment...
                        </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 10:20 AM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user7.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Emily Brown
                        </span>
                        <span class="voice d-block text-body">
                          <i class="ri-mic-line"></i>
                          Voice message
                        </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 9:30 AM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user8.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          David Martinez
                        </span>
                        <span class="d-block text-body">
                          Excellent work...
                        </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 3:20 PM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user9.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Jessica Taylor
                        </span>
                        <span class="d-block text-body"> Hello! Mr.. 🔥 </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 12:00 AM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user10.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Christopher Lee
                        </span>
                        <span class="d-block text-body"> Very good... </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 8:30 PM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user11.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Amanda Rodriguez
                        </span>
                        <span class="d-block text-body"> That’s cool... </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 2:20 PM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user12.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Daniel Garcia
                        </span>
                        <span class="d-block text-body"> Good morning!😀 </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 10:00 PM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user13.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Jennifer Thomas
                        </span>
                        <span class="d-block text-body"> Hi John! </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 11:10 AM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user14.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Elizabeth Clark
                        </span>
                        <span class="d-block text-body"> Sounds good... </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 12:30 PM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user15.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          William Lewis
                        </span>
                        <span class="d-block text-body"> How are you?😐 </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 11:20 AM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user16.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Michelle King
                        </span>
                        <span class="d-block text-body"> Good evening! </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 10:40 PM </span>
                    </div>
                  </div>
                </div>
              </v-tabs-window-item>

              <v-tabs-window-item value="two">
                <div class="btn">
                  <button>+ Create New Group</button>
                </div>
                <div class="chat-users-list">
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/products/product1.jpg"
                          class="rounded-circle"
                          alt="group-image"
                        />
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          UI/UX Designer Group
                        </span>
                        <span class="d-block text-body">
                          Divan: Sure I’ll submit the file...
                        </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> Just Now </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/products/product2.jpg"
                          class="rounded-circle"
                          alt="group-image"
                        />
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Web Development Group
                        </span>
                        <span class="d-block">
                          Divan:
                          <span class="text-success text-body">Typing...</span>
                        </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 10:20 AM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/products/product3.jpg"
                          class="rounded-circle"
                          alt="group-image"
                        />
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Discussion Group
                        </span>
                        <span class="d-block text-body">
                          Divan: Great ! 🔥
                        </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block text-body"> 9:30 AM </span>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/products/product4.jpg"
                          class="rounded-circle"
                          alt="group-image"
                        />
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Design Group
                        </span>
                        <span class="d-block"> Olivia: Hello! Mr.. </span>
                      </div>
                    </div>
                    <div class="info">
                      <span class="time d-block"> 12:00 AM </span>
                    </div>
                  </div>
                </div>
              </v-tabs-window-item>

              <v-tabs-window-item value="three">
                <div class="chat-users-list">
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user31.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Sarah Smith
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user6.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Michael Johnson
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user7.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Emily Brown
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user8.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          David Martinez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user9.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Jessica Taylor
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user10.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Christopher Lee
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user11.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Amanda Rodriguez
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user12.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Daniel Garcia
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user13.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Jennifer Thomas
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user14.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Elizabeth Clark
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user15.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          William Lewis
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="single-user-item cursor-pointer d-flex align-items-center justify-space-between"
                  >
                    <div class="user d-flex align-items-center">
                      <div class="img position-relative">
                        <v-img
                          src="@/assets/images/users/user16.jpg"
                          class="rounded-circle"
                          alt="user-image"
                        />
                        <span class="active-status off"></span>
                      </div>
                      <div class="title">
                        <span class="d-block fw-semibold text-black">
                          Michelle King
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </div>
      </v-card>
    </div>
    <div class="col-lg-8 col-md-12">
      <v-card
        class="chat-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="chat-card-content">
          <div
            class="chat-header d-sm-flex align-items-center justify-space-between"
          >
            <div class="user d-flex align-items-center">
              <div class="img position-relative">
                <v-img
                  src="@/assets/images/users/user31.jpg"
                  class="rounded-circle"
                  alt="user-image"
                />
                <span class="active-status"></span>
              </div>
              <div class="title">
                <span class="d-block text-black fw-semibold">
                  Sarah Smith
                </span>
                <span class="d-block"> Active Now </span>
              </div>
            </div>
            <div class="buttons-list">
              <button>
                <i class="material-symbols-outlined"> call </i>
              </button>
              <button>
                <i class="material-symbols-outlined"> videocam </i>
              </button>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <button class="t-0" v-bind="props">
                    <i class="ri-more-fill"></i>
                  </button>
                </template>
                <v-list class="menu-content">
                  <button type="button" class="bg-transparent border-none">
                    Mute Chat
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Delete
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Block
                  </button>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div class="border-top"></div>
          <span class="d-block current-time"> 2023-11-10 09:15 AM </span>
          <div class="chat-body">
            <ul class="list-unstyled mb-0 mt-0">
              <li class="position-relative">
                <v-img
                  src="@/assets/images/users/user31.jpg"
                  width="35"
                  class="rounded-circle user"
                  alt="user"
                />
                <div class="message">
                  <div>
                    <p>
                      Hey Olivia, have you had a chance to check out the new
                      admin dashboard?
                    </p>
                  </div>
                  <div>
                    <p>
                      Oh, they've got this Kanban board for task management. You
                      can drag and drop tasks between columns – it's so
                      intuitive. Makes managing tasks a breeze. 🔥
                    </p>
                  </div>
                </div>
                <span class="time d-block text-body"> 09:10 AM </span>
              </li>
              <li class="position-relative right">
                <!-- <v-img src="@/assets/images/admin.png" width="35" class="rounded-circle user" alt="user" /> -->
                <div class="message">
                  <div>
                    <p>Oh, you mean the one for project management?</p>
                  </div>
                </div>
                <span class="time d-block text-body"> 09:20 AM </span>
              </li>
              <li class="position-relative">
                <v-img
                  src="@/assets/images/users/user31.jpg"
                  width="35"
                  class="rounded-circle user"
                  alt="user"
                />
                <div class="message">
                  <div>
                    <p>
                      Yeah, that's the one! It's got a sleek Material Design,
                      and the features are pretty robust.
                    </p>
                  </div>
                </div>
                <span class="time d-block text-body"> 09:20 AM </span>
              </li>
              <li class="position-relative right">
                <!-- <v-img src="@/assets/images/admin.png" width="35" class="rounded-circle user" alt="user" /> -->
                <div class="message">
                  <div>
                    <p>Nice! What features are you finding interesting?</p>
                  </div>
                </div>
                <span class="time d-block text-body"> 09:21 AM </span>
              </li>
              <li class="position-relative">
                <v-img
                  src="@/assets/images/users/user31.jpg"
                  width="35"
                  class="rounded-circle user"
                  alt="user"
                />
                <div class="message">
                  <div>
                    <p>
                      Well, it has a project overview with all the key metrics
                      on the landing page – project
                    </p>
                  </div>
                </div>
                <span class="time d-block text-body"> 09:22 AM </span>
              </li>
              <li class="position-relative right">
                <!-- <v-img src="@/assets/images/admin.png" width="35" class="rounded-circle user" alt="user" /> -->
                <div class="message">
                  <div>
                    <p>
                      That sounds handy. How about the task management features?
                    </p>
                  </div>
                </div>
                <span class="time d-block text-body"> 09:25 AM </span>
              </li>
              <li class="position-relative">
                <v-img
                  src="@/assets/images/users/user31.jpg"
                  width="35"
                  class="rounded-circle user"
                  alt="user"
                />
                <div class="message">
                  <div>
                    <p>
                      Oh, they've got this Kanban board for task management. You
                      can drag and drop tasks between columns – it's so
                      intuitive.
                    </p>
                  </div>
                </div>
                <span class="time d-block text-body"> 09:30 AM </span>
              </li>
              <li class="position-relative right">
                <!-- <v-img src="@/assets/images/admin.png" width="35" class="rounded-circle user" alt="user" /> -->
                <div class="message">
                  <div>
                    <p>Sweet! What about team collaboration?</p>
                  </div>
                </div>
                <span class="time d-block text-body"> 09:31 AM </span>
              </li>
            </ul>
          </div>
          <div class="chat-footer border-radius d-md-flex align-items-center">
            <div class="buttons-list d-flex align-items-center">
              <button>
                <i class="material-symbols-outlined"> sentiment_satisfied </i>
              </button>
              <button>
                <i class="material-symbols-outlined"> attach_file </i>
              </button>
              <button>
                <i class="material-symbols-outlined"> mic_none </i>
              </button>
              <button>
                <i class="material-symbols-outlined"> image </i>
              </button>
            </div>
            <form class="position-relative">
              <div class="trezo-form-group">
                <v-text-field label="Type your message" required></v-text-field>
              </div>
              <button>
                <i class="material-symbols-outlined"> send </i>
              </button>
            </form>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Chat",
  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="scss" scoped>
.chat-sidebar-card {
  .v-card-header {
    margin-bottom: 20px;

    h5 {
      font-size: 16px;
    }
  }
  .chat-sidebar-content {
    .search-box {
      i {
        top: 50%;
        left: 13px;
        font-size: 18px;
        position: absolute;
        color: var(--blackColor);
        transform: translateY(-50%);
      }
      .input-search {
        height: 40px;
        font-size: 12px;
        padding-left: 38px;
      }
    }
    .v-slide-group {
      margin-top: 20px;

      .v-slide-group__container {
        .v-slide-group__content {
          .v-btn {
            margin-right: 33px;
            padding: 0 0 8px;
            height: 25px;
            text-transform: initial;
            color: var(--bodyColor);
            font-weight: 500;
            letter-spacing: 0;
            &:last-child {
              margin-right: 0;
            }
            &.v-tab-item--selected {
              color: var(--primaryColor);
            }
          }
        }
      }
    }
    .v-tabs--density-default {
      --v-tabs-height: auto !important;
      border-bottom: 1px solid #eceef2;
    }
    .v-card-text {
      padding: 0;
      margin-right: -25px;
    }
    .chat-users-list {
      overflow-y: scroll;
      height: 820px;
      padding: {
        right: 25px;
        top: 20px;
      }
      &::-webkit-scrollbar {
        width: 2px;
        height: 2px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 50px;
        background-color: var(--whiteColor);
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: #b5c3d7;
      }
      .single-user-item {
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eceef2;

        .user {
          .img {
            margin-right: 10px;

            .v-img {
              width: 35px;
              margin-bottom: -3px;
            }
            .active-status {
              right: 0;
              bottom: 0;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              position: absolute;
              background: #37d80a;
              border: 2px solid var(--whiteColor);

              &.off {
                background: #fe7a36;
              }
            }
          }
          .title {
            span {
              &:not(:first-child) {
                margin-top: 5px;
                font-size: 12px;
              }
              &.voice,
              &.attachment {
                position: relative;
                padding-left: 16px;

                i {
                  left: 0;
                  top: 50%;
                  margin-top: -0.5px;
                  position: absolute;
                  transform: translateY(-50%);
                }
              }
            }
          }
        }
        .info {
          text-align: end;

          .time {
            font-size: 12px;
          }
        }
        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom-width: 0;
        }
      }
    }
    .btn {
      padding-right: 25px;
      margin-top: 20px;

      button {
        width: 100%;
        height: auto;
        display: block;
        min-width: auto;
        border-radius: 0;
        padding: 14px 22px;
        color: var(--whiteColor);
        background-color: var(--primaryColor);
        font: {
          size: 16px;
          weight: 500;
        }
      }
    }
  }
}
.chat-card {
  .chat-card-content {
    .chat-header {
      .user {
        .img {
          margin-right: 15px;

          .v-img {
            width: 75px;
            margin-bottom: -3px;
          }
          .active-status {
            right: 5px;
            bottom: 5px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            background: #37d80a;
            border: 2px solid var(--whiteColor);

            &.off {
              background: #fe7a36;
            }
          }
        }
        .title {
          span {
            &:nth-child(1) {
              font-size: 16px;
            }
            &:not(:first-child) {
              font-size: 14px;
            }
          }
        }
      }
      .buttons-list {
        button {
          padding: 0;
          height: auto;
          min-width: auto;
          border-radius: 0;
          margin-left: 15px;
          color: var(--bodyColor);

          i {
            font-size: 16px;
            color: var(--bodyColor);
            font-weight: 900;
          }
          &.t-0 {
            position: relative;
            top: -3px;
          }
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
    .border-top {
      border-color: #eceef2;
      margin: {
        top: 20px;
        bottom: 18px;
      }
    }
    .current-time {
      padding-bottom: 18px;
      font-size: 12px;
    }
    .chat-body {
      transform: rotate(180deg);
      margin-right: -25px;
      overflow-y: scroll;
      direction: rtl;
      height: 703px;

      &::-webkit-scrollbar {
        width: 2px;
        height: 2px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 50px;
        background-color: var(--whiteColor);
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: #b5c3d7;
      }
      ul {
        flex-direction: column-reverse;
        justify-content: flex-end;
        display: flex;
        padding: {
          left: 25px;
          right: 0;
        }
        li {
          transform: rotate(180deg);
          padding-left: 45px;
          direction: ltr;
          width: 90%;

          .user {
            top: 0;
            left: 0;
            position: absolute;
          }
          .message {
            text-align: start;

            p {
              padding: 10px 15px;
              display: inline-block;
              background-color: #f6f7f9;
              border-radius: 0 7px 7px 7px;
            }
            div {
              margin-bottom: 5px;

              &:last-child {
                margin-bottom: 0;
              }
            }
          }
          .time {
            font-size: 12px;
            text-align: start;
            margin: {
              bottom: 20px;
              top: 7px;
            }
          }
          &.right {
            text-align: end;
            margin-left: auto;
            padding: {
              left: 0;
              right: 0;
              // right: 45px;
            }
            .user {
              left: auto;
              right: 0;
            }
            .message {
              text-align: end;

              p {
                color: var(--whiteColor);
                border-radius: 7px 0 7px 7px;
                background-color: var(--primaryColor) !important;
              }
            }
            .time {
              text-align: end;
            }
          }
        }
      }
    }
    .chat-footer {
      padding: 20px;
      background-color: #f6f7f9;

      .buttons-list {
        top: 2px;
        position: relative;
        margin-right: 20px;

        button {
          padding: 0;
          height: auto;
          min-width: auto;
          border-radius: 0;
          margin-left: 10px;
          display: inline-block;
          color: var(--bodyColor);
          transition: var(--transition);

          i {
            font-size: 16px;
          }
          &:hover {
            color: var(--primaryColor);
          }
          &:first-child {
            margin-left: 0;
          }
        }
      }
      form {
        flex: 1 1 auto;
        padding-right: 70px;

        button {
          right: 0;
          top: 50%;
          padding: 0;
          width: 55px;
          height: 55px;
          min-width: auto;
          border-radius: 3px;
          position: absolute;
          display: inline-block;
          color: var(--whiteColor);
          transform: translateY(-50%);
          background-color: var(--primaryColor);

          i {
            left: 0;
            right: 0;
            top: 50%;
            margin-top: 2px;
            position: absolute;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .chat-sidebar-card {
    .v-card-header {
      margin-bottom: 17px;

      h5 {
        font-size: 15px;
      }
    }
    .chat-sidebar-content {
      .search-box {
        i {
          left: 12px;
          font-size: 17px;
        }
        .input-search {
          height: 38px;
          padding-left: 35px;
        }
      }
      .chat-users-list {
        height: 476px;
        padding: {
          right: 17px;
          top: 17px;
        }
      }
      .btn {
        padding-right: 17px;
        margin-top: 17px;

        button {
          padding: 13px 22px;
          font-size: 13px;
        }
      }
    }
  }
  .chat-card {
    .chat-card-content {
      .chat-header {
        .user {
          .img {
            margin-right: 13px;

            .v-img {
              width: 65px;
            }
            .active-status {
              right: 4px;
              bottom: 4px;
            }
          }
          .title {
            span {
              &:nth-child(1) {
                font-size: 15px;
              }
              &:not(:first-child) {
                font-size: 13px;
              }
            }
          }
        }
        .buttons-list {
          margin-top: 15px;
        }
      }
      .border-top {
        margin: {
          top: 12px;
          bottom: 13px;
        }
      }
      .current-time {
        padding-bottom: 13px;
      }
      .chat-body {
        margin-right: -17px;
        height: 650px;

        ul {
          padding: {
            left: 17px;
          }
          li {
            width: 100%;

            .message {
              p {
                padding: 10px;
              }
            }
            .time {
              margin-bottom: 17px;
            }
            &.right {
              padding: {
                // right: 17px;
              }
            }
          }
        }
      }
      .chat-footer {
        padding: 17px;

        .buttons-list {
          top: 0;
          margin: {
            right: 0;
            bottom: 12px;
          }
        }
        form {
          padding-right: 0;

          button {
            top: 0;
            width: 50px;
            height: 50px;
            margin-top: 15px;
            position: relative;
            transform: translateY(0);
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .chat-sidebar-card {
    .v-card-header {
      margin-bottom: 20px;
    }
    .chat-sidebar-content {
      .chat-users-list {
        padding: {
          right: 20px;
          top: 20px;
        }
      }
      .btn {
        padding-right: 20px;
        margin-top: 20px;
      }
    }
  }
  .chat-card {
    .chat-card-content {
      .chat-header {
        .buttons-list {
          margin-top: 0;
        }
      }
      .chat-body {
        margin-right: -20px;

        ul {
          padding: {
            left: 20px;
          }
          li {
            .time {
              margin-bottom: 20px;
            }
            &.right {
              padding: {
                // right: 20px;
              }
            }
          }
        }
      }
      .chat-footer {
        padding: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .chat-sidebar-card {
    .chat-sidebar-content {
      .chat-users-list {
        height: 559px;
      }
      .btn {
        button {
          font-size: 14px;
        }
      }
    }
  }
  .chat-card {
    .chat-card-content {
      .chat-body {
        height: 650px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .chat-sidebar-card {
    .chat-sidebar-content {
      .chat-users-list {
        height: 720px;
      }
      .btn {
        button {
          font-size: 15px;
        }
      }
    }
  }
  .chat-card {
    .chat-card-content {
      .chat-body {
        height: 603px;
      }
    }
  }
}
</style>
