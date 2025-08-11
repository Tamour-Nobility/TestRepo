<template>
  <div class="row justify-content-center">
    <div class="col-xxl-3 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/user-60.jpg"
                  class="wh-65 rounded-circle border border-2"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2 position-relative top-2">
                <h4 class="fs-16 fw-semibold mb-1">Ava Turner</h4>
                <span>Team Leader</span>
              </div>
            </div>

            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                >
                  more_horiz
                </i>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="d-block py-2 px-3 text-center rounded-pill fw-medium text-secondary mb-3 bg-for-dark-mode"
            style="background-color: #f3e8ff"
          >
            Project Management
          </span>
          <span class="d-block text-center text-body mb-3">Team Members</span>
          <div class="d-flex flex-wrap justify-content-center mb-3">
            <NuxtLink to="/my-profile">
              <img
                src="~/assets/images/user-52.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-54.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-55.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-56.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
          </div>
          <div class="mb-4 pb-md-2">
            <div class="d-flex justify-content-between mb-2">
              <span class="fw-medium d-block">New Order</span>
              <span class="fw-medium d-block">85%</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 85%; height: 4px"
              ></div>
            </div>
          </div>
          <NuxtLink
            to="/project-management/project-overview"
            class="btn btn-outline-primary fw-medium w-100 py-2 rounded-3"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/user-61.jpg"
                  class="wh-65 rounded-circle border border-2"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2 position-relative top-2">
                <h4 class="fs-16 fw-semibold mb-1">Ethan Parker</h4>
                <span>Team Leader</span>
              </div>
            </div>

            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                  >more_horiz
                </i>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="d-block py-2 px-3 text-center rounded-pill fw-medium text-secondary mb-3 bg-for-dark-mode"
            style="background-color: #daebff"
            >eCommerce Theme</span
          >
          <span class="d-block text-center text-body mb-3">Team Members</span>
          <div class="d-flex flex-wrap justify-content-center mb-3">
            <NuxtLink to="/my-profile">
              <img
                src="~/assets/images/user-52.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-54.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-55.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-56.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
          </div>
          <div class="mb-4 pb-md-2">
            <div class="d-flex justify-content-between mb-2">
              <span class="fw-medium d-block">New Order</span>
              <span class="fw-medium d-block">45%</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 45%; height: 4px"
              ></div>
            </div>
          </div>
          <NuxtLink
            to="/project-management/project-overview"
            class="btn btn-outline-primary fw-medium w-100 py-2 rounded-3"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/user-62.jpg"
                  class="wh-65 rounded-circle border border-2"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2 position-relative top-2">
                <h4 class="fs-16 fw-semibold mb-1">Isabella</h4>
                <span>Team Leader</span>
              </div>
            </div>

            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                  >more_horiz</i
                >
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="d-block py-2 px-3 text-center rounded-pill fw-medium text-secondary mb-3 bg-for-dark-mode"
            style="background-color: #d8ffc8"
            >Shopify Theme Dev</span
          >
          <span class="d-block text-center text-body mb-3">Team Members</span>
          <div class="d-flex flex-wrap justify-content-center mb-3">
            <NuxtLink to="/my-profile">
              <img
                src="~/assets/images/user-52.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-54.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-55.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-56.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
          </div>
          <div class="mb-4 pb-md-2">
            <div class="d-flex justify-content-between mb-2">
              <span class="fw-medium d-block">New Order</span>
              <span class="fw-medium d-block">70%</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 70%; height: 4px"
              ></div>
            </div>
          </div>
          <NuxtLink
            to="/project-management/project-overview"
            class="btn btn-outline-primary fw-medium w-100 py-2 rounded-3"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/user-63.jpg"
                  class="wh-65 rounded-circle border border-2"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2 position-relative top-2">
                <h4 class="fs-16 fw-semibold mb-1">Thompson</h4>
                <span>Team Leader</span>
              </div>
            </div>

            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                  >more_horiz</i
                >
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="d-block py-2 px-3 text-center rounded-pill fw-medium text-secondary mb-3 bg-for-dark-mode"
            style="background-color: #ffe8d4"
            >Oito - HTM</span
          >
          <span class="d-block text-center text-body mb-3">Team Members</span>
          <div class="d-flex flex-wrap justify-content-center mb-3">
            <NuxtLink to="/my-profile">
              <img
                src="~/assets/images/user-52.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-54.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-55.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-56.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
          </div>
          <div class="mb-4 pb-md-2">
            <div class="d-flex justify-content-between mb-2">
              <span class="fw-medium d-block">New Order</span>
              <span class="fw-medium d-block">90%</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 90%; height: 4px"
              ></div>
            </div>
          </div>
          <NuxtLink
            to="/project-management/project-overview"
            class="btn btn-outline-primary fw-medium w-100 py-2 rounded-3"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/user-64.jpg"
                  class="wh-65 rounded-circle border border-2"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2 position-relative top-2">
                <h4 class="fs-16 fw-semibold mb-1">Lucas</h4>
                <span>Team Leader</span>
              </div>
            </div>

            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                  >more_horiz</i
                >
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="d-block py-2 px-3 text-center rounded-pill fw-medium text-secondary mb-3 bg-for-dark-mode"
            style="background-color: #d8ffc8"
            >Tanus - Template</span
          >
          <span class="d-block text-center text-body mb-3">Team Members</span>
          <div class="d-flex flex-wrap justify-content-center mb-3">
            <NuxtLink to="/my-profile">
              <img
                src="~/assets/images/user-52.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-54.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-55.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-56.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
          </div>
          <div class="mb-4 pb-md-2">
            <div class="d-flex justify-content-between mb-2">
              <span class="fw-medium d-block">New Order</span>
              <span class="fw-medium d-block">75%</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 75%; height: 4px"
              ></div>
            </div>
          </div>
          <NuxtLink
            to="/project-management/project-overview"
            class="btn btn-outline-primary fw-medium w-100 py-2 rounded-3"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/user-64.jpg"
                  class="wh-65 rounded-circle border border-2"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2 position-relative top-2">
                <h4 class="fs-16 fw-semibold mb-1">Morgan</h4>
                <span>Team Leader</span>
              </div>
            </div>

            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                  >more_horiz</i
                >
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="d-block py-2 px-3 text-center rounded-pill fw-medium text-secondary mb-3 bg-for-dark-mode"
            style="background-color: #f3e8ff"
            >Delft - TypeScript</span
          >
          <span class="d-block text-center text-body mb-3">Team Members</span>
          <div class="d-flex flex-wrap justify-content-center mb-3">
            <NuxtLink to="/my-profile">
              <img
                src="~/assets/images/user-52.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-54.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-55.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-56.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
          </div>
          <div class="mb-4 pb-md-2">
            <div class="d-flex justify-content-between mb-2">
              <span class="fw-medium d-block">New Order</span>
              <span class="fw-medium d-block">65%</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 65%; height: 4px"
              ></div>
            </div>
          </div>
          <NuxtLink
            to="/project-management/project-overview"
            class="btn btn-outline-primary fw-medium w-100 py-2 rounded-3"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/user-66.jpg"
                  class="wh-65 rounded-circle border border-2"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2 position-relative top-2">
                <h4 class="fs-16 fw-semibold mb-1">Sophia</h4>
                <span>Team Leader</span>
              </div>
            </div>

            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                  >more_horiz</i
                >
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="d-block py-2 px-3 text-center rounded-pill fw-medium text-secondary mb-3 bg-for-dark-mode"
            style="background-color: #daebff"
            >Trezo - Angular</span
          >
          <span class="d-block text-center text-body mb-3">Team Members</span>
          <div class="d-flex flex-wrap justify-content-center mb-3">
            <NuxtLink to="/my-profile">
              <img
                src="~/assets/images/user-52.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-54.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-55.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-56.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
          </div>
          <div class="mb-4 pb-md-2">
            <div class="d-flex justify-content-between mb-2">
              <span class="fw-medium d-block">New Order</span>
              <span class="fw-medium d-block">95%</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 95%; height: 4px"
              ></div>
            </div>
          </div>
          <NuxtLink
            to="/project-management/project-overview"
            class="btn btn-outline-primary fw-medium w-100 py-2 rounded-3"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="~/assets/images/user-67.jpg"
                  class="wh-65 rounded-circle border border-2"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2 position-relative top-2">
                <h4 class="fs-16 fw-semibold mb-1">Rodriguez</h4>
                <span>Team Leader</span>
              </div>
            </div>

            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                  >more_horiz</i
                >
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="d-block py-2 px-3 text-center rounded-pill fw-medium text-secondary mb-3 bg-for-dark-mode"
            style="background-color: #f3e8ff"
          >
            eLearniv - React
          </span>
          <span class="d-block text-center text-body mb-3">Team Members</span>
          <div class="d-flex flex-wrap justify-content-center mb-3">
            <NuxtLink to="/my-profile">
              <img
                src="~/assets/images/user-52.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-54.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-55.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
            <NuxtLink to="/my-profile" class="ms-m-15">
              <img
                src="~/assets/images/user-56.jpg"
                class="wh-40 rounded-circle border border-2"
                alt="user"
              />
            </NuxtLink>
          </div>
          <div class="mb-4 pb-md-2">
            <div class="d-flex justify-content-between mb-2">
              <span class="fw-medium d-block">New Order</span>
              <span class="fw-medium d-block">80%</span>
            </div>
            <div
              class="progress bg-primary bg-opacity-10"
              style="height: 4px"
              role="progressbar"
              aria-label="Primary example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-primary"
                style="width: 80%; height: 4px"
              ></div>
            </div>
          </div>
          <NuxtLink
            to="/project-management/project-overview"
            class="btn btn-outline-primary fw-medium w-100 py-2 rounded-3"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="col-lg-12">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <CommonPagination items="8" total="30" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Teams",
});
</script>
