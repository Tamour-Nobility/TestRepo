<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen w-100 p-lg-5">
      <div class="modal-content">
        <div class="modal-header border-0 p-4 p-md-5 pb-0">
          <h1 class="modal-title fs-24" id="exampleModalLabel">
            Create Campaigns
          </h1>
          <button
            type="button"
            class="btn-close campaigns-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4 p-md-5">
          <ul
            class="tabs create-campaigns-tabs d-flex flex-wrap justify-content-between gap-2 list-unstyled pb-0"
          >
            <li
              :class="['tab', { active: activeTab === 'campaignDetails' }]"
              @click="setActiveTab('campaignDetails')"
            >
              <button class="nav-link fs-12 fw-medium text-secondary border-0">
                CAMPAIGN DETAILS
              </button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'creativeUploads' }]"
              @click="setActiveTab('creativeUploads')"
            >
              <button class="nav-link fs-12 fw-medium text-secondary border-0">
                CREATIVE UPLOADS
              </button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'audiences' }]"
              @click="setActiveTab('audiences')"
            >
              <button class="nav-link fs-12 fw-medium text-secondary border-0">
                AUDIENCES
              </button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'budgetEstimates' }]"
              @click="setActiveTab('budgetEstimates')"
            >
              <button class="nav-link fs-12 fw-medium text-secondary border-0">
                BUDGET ESTIMATES
              </button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'completed' }]"
              @click="setActiveTab('completed')"
            >
              <button class="nav-link fs-12 fw-medium text-secondary border-0">
                COMPLETED
              </button>
            </li>
            <li
              :class="['tab', { active: activeTab === 'viewCampaign' }]"
              @click="setActiveTab('viewCampaign')"
            >
              <button class="nav-link fs-12 fw-medium text-secondary border-0">
                VIEW CAMPAIGN
              </button>
            </li>
          </ul>

          <div class="tab-content-wrap">
            <div
              class="tab-contents back-none"
              v-show="activeTab === 'campaignDetails'"
            >
              <form
                class="campaign-stepper-content m-auto"
                style="max-width: 625px"
              >
                <h3 class="fs-18 mb-3 mb-md-5">Campaign Details</h3>

                <div class="mb-5">
                  <label class="fw-semibold mb-2">
                    Campaign Name
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control bg-border-color h-55 fs-16"
                    placeholder="Christmas Eve"
                  />
                </div>
                <div class="mb-5">
                  <label class="fw-semibold mb-2">
                    Company Logo
                    <span class="text-danger">*</span>
                  </label>
                  <AvatarPreview />
                  <span class="fs-14 d-block mt-4">
                    Allowed file types: png, jpg, jpeg. Max size: 1 MB
                  </span>
                </div>
                <div class="mb-5">
                  <label class="fw-semibold mb-2">
                    Campaign Goal <span class="text-danger">*</span>
                  </label>

                  <label
                    for="radio5"
                    class="custom-radio style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      checked
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio5"
                    />
                    <div class="radio-content">
                      <span class="fw-medium text-secondary mb-1 d-block">
                        Get more visitors
                      </span>
                      <p>Increase impression traffic onto the platform</p>
                    </div>
                  </label>
                  <label
                    for="radio6"
                    class="custom-radio style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio6"
                    />
                    <div class="radio-content">
                      <span class="fw-medium text-secondary mb-1 d-block">
                        Get more messages on chat
                      </span>
                      <p>Increase community interaction and communication</p>
                    </div>
                  </label>
                  <label
                    for="radio7"
                    class="custom-radio style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio7"
                    />
                    <div class="radio-content">
                      <span class="fw-medium text-secondary mb-1 d-block">
                        Get more calls
                      </span>
                      <p>
                        Boost telecommunication feedback to provide precise and
                        accurate information
                      </p>
                    </div>
                  </label>
                  <label
                    for="radio8"
                    class="custom-radio style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio8"
                    />
                    <div class="radio-content">
                      <span class="fw-medium text-secondary mb-1 d-block">
                        Get more likes
                      </span>
                      <p>
                        Increase positive interactivity on social media
                        platforms
                      </p>
                    </div>
                  </label>
                  <label
                    for="radio9"
                    class="custom-radio style-two mb-3 pb-3 border-bottom"
                  >
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio"
                      id="radio9"
                    />
                    <div class="radio-content">
                      <span class="fw-medium text-secondary mb-1 d-block">
                        Lead generation
                      </span>
                      <p>Collect contact information for potential customers</p>
                    </div>
                  </label>
                </div>
              </form>
            </div>

            <div class="tab-contents" v-show="activeTab === 'creativeUploads'">
              <form
                class="campaign-stepper-content m-auto"
                style="max-width: 625px"
              >
                <h3 class="fs-18 mb-4">Upload Files</h3>

                <div class="mb-5 only-file-upload">
                  <div
                    class="d-flex align-items-center position-relative z-1 bg-border-color p-4 rounded-2"
                    style="border: 2px dashed #5da8ff"
                  >
                    <div class="flex-shrink-0">
                      <img src="@/assets/images/upload.png" alt="upload" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-16">
                        Drop campaign files here or click to upload.
                      </h4>
                      <p>Upload upto 12 files, max size each file: 5MB.</p>
                    </div>
                    <label
                      class="position-absolute top-0 bottom-0 start-0 end-0 cursor"
                      id="upload-container"
                    >
                      <input
                        class="form__file bottom-0"
                        id="upload-files"
                        type="file"
                        multiple
                      />
                    </label>
                  </div>
                  <div id="files-list-container"></div>
                </div>

                <h3 class="fs-18 mb-4">Uploaded Files</h3>

                <div class="mb-5">
                  <div
                    class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/pdf.png"
                          style="width: 35px"
                          alt="pdf"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="fs-16 mb-0">Campaign Requirements</h4>
                        <p>Increase impression traffic onto the platform</p>
                      </div>
                    </div>

                    <div class="dropdown action-opt">
                      <button
                        class="btn p-2 bg-border-color"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>Edit</span>
                        <i data-feather="chevron-down"></i>
                      </button>
                      <ul
                        class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                      >
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="edit"></i>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="eye"></i>
                            View
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="trash"></i>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/doc.png"
                          style="width: 35px"
                          alt="doc"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="fs-16 mb-0">
                          Campaign’s mission and vision
                        </h4>
                        <p>Increase impression traffic onto the platform</p>
                      </div>
                    </div>

                    <div class="dropdown action-opt">
                      <button
                        class="btn p-2 bg-border-color"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>Edit</span>
                        <i data-feather="chevron-down"></i>
                      </button>
                      <ul
                        class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                      >
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="edit"></i>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="eye"></i>
                            View
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="trash"></i>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/xl4.png"
                          style="width: 35px"
                          alt="xl4"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="fs-16 mb-0">Campaign Banner</h4>
                        <p>Increase impression traffic onto the platform</p>
                      </div>
                    </div>

                    <div class="dropdown action-opt">
                      <button
                        class="btn p-2 bg-border-color"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>Edit</span>
                        <i data-feather="chevron-down"></i>
                      </button>
                      <ul
                        class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                      >
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="edit"></i>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="eye"></i>
                            View
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="trash"></i>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom pb-4 mb-4"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/jpg.png"
                          style="width: 35px"
                          alt="pdf"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h4 class="fs-16 mb-0">Campaign Image</h4>
                        <p>Increase impression traffic onto the platform</p>
                      </div>
                    </div>

                    <div class="dropdown action-opt">
                      <button
                        class="btn p-2 bg-border-color"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>Edit</span>
                        <i data-feather="chevron-down"></i>
                      </button>
                      <ul
                        class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                      >
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="edit"></i>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="eye"></i>
                            View
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:;">
                            <i data-feather="trash"></i>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="tab-contents" v-show="activeTab === 'audiences'">
              <div
                class="campaign-stepper-content m-auto"
                style="max-width: 625px"
              >
                <h3 class="fs-18 mb-4">Configure Audiences</h3>

                <div class="mb-5">
                  <label class="fw-semibold mb-3">Gender</label>
                  <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <label for="radio" class="custom-radio">
                        <input
                          checked
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio"
                        />
                        <div class="radio-content">
                          <span class="fw-medium text-secondary">All</span>
                        </div>
                      </label>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <label for="radio2" class="custom-radio">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio2"
                        />
                        <div class="radio-content">
                          <span class="fw-medium text-secondary">Male</span>
                        </div>
                      </label>
                    </div>
                    <div class="col-sm-4">
                      <label for="radio3" class="custom-radio">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio3"
                        />
                        <div class="radio-content">
                          <span class="fw-medium text-secondary">Female</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="fw-semibold mb-3">Age</label>
                  <div class="d-flex justify-content-between mb-1">
                    <span
                      id="min-value"
                      class="d-block text-black fw-medium fs-13"
                    >
                      ${{ minAge }}
                    </span>
                    <span
                      id="max-value"
                      class="d-block text-black fw-medium fs-13"
                    >
                      ${{ maxAge }}
                    </span>
                  </div>
                  <input type="range" v-model="minAge" @change="updateRange" />
                </div>

                <div class="mb-5">
                  <label class="fw-semibold mb-3">Location</label>
                  <div class="form-group mb-4">
                    <div
                      class="tag-container p-1 rounded-3 form-control h-auto p-0 bg-border-color"
                      id="tagContainer"
                      style="border: 2px dashed #5da8ff"
                    >
                      <input
                        type="text"
                        id="tagInput"
                        class="form-control h-60 border-0 bg-border-color"
                        placeholder="Type and press Enter"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="fw-semibold mb-3">Media</label>
                  <div class="form-group mb-4">
                    <div
                      class="tag-container p-1 rounded-3 form-control h-auto p-0 bg-border-color"
                      id="MediaContainer"
                      style="border: 2px dashed #5da8ff"
                    >
                      <input
                        type="text"
                        id="MediaInput"
                        class="form-control h-60 border-0 bg-border-color"
                        placeholder="Type and press Enter"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="fw-semibold mb-3">Add Team Member</label>
                  <div class="form-group mb-4">
                    <div
                      class="tag-container p-1 rounded-3 form-control h-auto p-0 bg-border-color"
                      id="AddTeamMemberContainer"
                      style="border: 2px dashed #5da8ff"
                    >
                      <input
                        type="text"
                        id="AddTeamMemberInput"
                        class="form-control h-60 border-0 bg-border-color"
                        placeholder="Type and press Enter"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-contents" v-show="activeTab === 'budgetEstimates'">
              <form
                class="campaign-stepper-content m-auto"
                style="max-width: 625px"
              >
                <h3 class="fs-18 mb-4">Budget Estimates</h3>

                <div class="mb-5">
                  <label class="fw-semibold mb-3">Budgets Estimates</label>
                  <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <label for="radio4" class="custom-radio">
                        <input
                          checked
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio4"
                        />
                        <div class="radio-content">
                          <span class="fw-medium text-secondary mb-1 d-block">
                            Continuous Duration
                          </span>
                          <p>
                            Your Ad will run continuously for a daily budget.
                          </p>
                        </div>
                      </label>
                    </div>
                    <div class="col-sm-6">
                      <label for="radio10" class="custom-radio">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="radio"
                          id="radio10"
                        />
                        <div class="radio-content">
                          <span class="fw-medium text-secondary mb-1 d-block">
                            Fixed Duration
                          </span>
                          <p>Your Ad will run only specified dates only.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="fw-semibold mb-3">Daily Budget</label>
                  <div class="d-flex justify-content-between mb-1">
                    <span
                      id="min-value"
                      class="d-block text-black fw-medium fs-13"
                    >
                      ${{ minBudget }}
                    </span>
                    <span
                      id="max-value"
                      class="d-block text-black fw-medium fs-13"
                    >
                      ${{ maxBudget }}
                    </span>
                  </div>
                  <input
                    type="range"
                    max="5000"
                    data-from="1000"
                    v-model="minBudget"
                    @change="updateBudget"
                  />
                </div>
              </form>
            </div>

            <div class="tab-contents" v-show="activeTab === 'completed'">
              <div
                class="campaign-stepper-content m-auto text-center mb-5"
                style="max-width: 625px"
              >
                <div class="mb-4">
                  <img
                    src="@/assets/images/interface-welcome.png"
                    alt="interface-welcome"
                  />
                </div>

                <h3 class="fs-24 mb-3">Campaign Completed!</h3>
                <p class="mx-auto mb-4" style="max-width: 463px">
                  You will receive an email with with the summary of your newly
                  created campaign!
                </p>

                <div
                  class="d-flex flex-wrap justify-content-center gap-2 gap-sm-4"
                >
                  <button class="btn btn-secondary">
                    Create New Campaign
                    <i class="ri-arrow-right-line text-white"></i>
                  </button>
                  <button class="btn btn-primary">
                    View Campaign <i class="ri-arrow-right-line text-white"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="tab-contents" v-show="activeTab === 'viewCampaign'">
              <div class="campaign-stepper-content">
                <div class="d-flex align-items-center mb-4 mb-md-5">
                  <div class="flex-shrink-0">
                    <img src="@/assets/images/christmas.png" alt="christmas" />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3 class="fs-24">Christmas Eve</h3>
                    <span class="fs-16 fw-medium"
                      >From 10 Oct - 15 Oct, 24</span
                    >
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-4">
                    <div class="card border p-4 bg-border-color rounded-3 mb-4">
                      <div
                        class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
                      >
                        <h4 class="fs-18 mb-0">Campaign Goal:</h4>

                        <div class="dropdown action-opt">
                          <button
                            class="btn bg-transparent p-0"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i data-feather="more-horizontal"></i>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                          >
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="clock"></i>
                                Today
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="eye"></i>
                                View
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="trash"></i>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h4 class="fw-medium fs-14">Get more visitors</h4>
                      <p>Increase impression traffic onto the platform</p>
                    </div>
                    <div class="card border p-4 bg-border-color rounded-3 mb-4">
                      <div
                        class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
                      >
                        <h4 class="fs-18 mb-0">Team Members:</h4>

                        <div class="dropdown action-opt">
                          <button
                            class="btn bg-transparent p-0"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i data-feather="more-horizontal"></i>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                          >
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="clock"></i>
                                Today
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="eye"></i>
                                View
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="trash"></i>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul
                        class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3"
                      >
                        <li>
                          <button
                            class="border-0 p-2 bg-body-bg d-flex align-items-center rounded-2"
                          >
                            <img
                              src="@/assets/images/user-90.png"
                              class="border border-white rounded-circle"
                              alt="user"
                            />
                            <span class="fw-medium ms-2 text-secondary"
                              >Jonathon Ronan</span
                            >
                          </button>
                        </li>
                        <li>
                          <button
                            class="border-0 p-2 bg-body-bg d-flex align-items-center rounded-2"
                          >
                            <img
                              src="@/assets/images/user-91.png"
                              class="border border-white rounded-circle"
                              alt="user"
                            />
                            <span class="fw-medium ms-2 text-secondary"
                              >Walter White</span
                            >
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card border p-4 bg-border-color rounded-3 mb-4">
                      <div
                        class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
                      >
                        <h4 class="fs-18 mb-0">Audiences</h4>

                        <div class="dropdown action-opt">
                          <button
                            class="btn bg-transparent p-0"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i data-feather="more-horizontal"></i>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                          >
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="clock"></i>
                                Today
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="eye"></i>
                                View
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="trash"></i>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul class="ps-0 mb-0 list-unstyled">
                        <li class="border-bottom pb-2 mb-2 border-body-bg">
                          <span class="text-secondary fw-medium">Gender:</span>
                          All
                        </li>
                        <li class="border-bottom pb-2 mb-2 border-body-bg">
                          <span class="text-secondary fw-medium"
                            >Age Range:</span
                          >
                          18-60
                        </li>
                        <li class="border-bottom pb-2 mb-2 border-body-bg">
                          <span class="text-secondary fw-medium"
                            >Location:</span
                          >
                          Canada, USA
                        </li>
                        <li>
                          <span class="text-secondary fw-medium">Media:</span
                          >Facebook, Instagram
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card border p-4 bg-border-color rounded-3 mb-4">
                      <div
                        class="d-flex justify-content-between align-items-center border-bottom border-body-bg pb-3 mb-3"
                      >
                        <h4 class="fs-18 mb-0">Uploaded Files</h4>

                        <div class="dropdown action-opt">
                          <button
                            class="btn bg-transparent p-0"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i data-feather="more-horizontal"></i>
                          </button>
                          <ul
                            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                          >
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="clock"></i>
                                Today
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="eye"></i>
                                View
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="javascript:;">
                                <i data-feather="trash"></i>
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom border-body-bg pb-4 mb-4"
                      >
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/pdf.png"
                              style="width: 35px"
                              alt="pdf"
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h4 class="fs-16 mb-0">Campaign Requirements</h4>
                            <p>Increase impression traffic onto the platform</p>
                          </div>
                        </div>

                        <button
                          class="bg-white rounded-circle border-0"
                          style="width: 30px; height: 30px"
                        >
                          <i class="ri-download-2-line text-primary fs-16"></i>
                        </button>
                      </div>
                      <div
                        class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom border-body-bg pb-4 mb-4"
                      >
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/doc.png"
                              style="width: 35px"
                              alt="doc"
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h4 class="fs-16 mb-0">
                              Campaign’s mission and vision
                            </h4>
                            <p>Increase impression traffic onto the platform</p>
                          </div>
                        </div>

                        <button
                          class="bg-white rounded-circle border-0"
                          style="width: 30px; height: 30px"
                        >
                          <i class="ri-download-2-line text-primary fs-16"></i>
                        </button>
                      </div>
                      <div
                        class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom border-body-bg pb-4 mb-4"
                      >
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/xl4.png"
                              style="width: 35px"
                              alt="xl4"
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h4 class="fs-16 mb-0">Campaign Banner</h4>
                            <p>Increase impression traffic onto the platform</p>
                          </div>
                        </div>

                        <button
                          class="bg-white rounded-circle border-0"
                          style="width: 30px; height: 30px"
                        >
                          <i class="ri-download-2-line text-primary fs-16"></i>
                        </button>
                      </div>
                      <div
                        class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
                      >
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0">
                            <img
                              src="@/assets/images/jpg.png"
                              style="width: 35px"
                              alt="pdf"
                            />
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <h4 class="fs-16 mb-0">Campaign Image</h4>
                            <p>Increase impression traffic onto the platform</p>
                          </div>
                        </div>

                        <button
                          class="bg-white rounded-circle border-0"
                          style="width: 30px; height: 30px"
                        >
                          <i class="ri-download-2-line text-primary fs-16"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation buttons -->
            <div
              class="buttons d-flex justify-content-between m-auto"
              style="max-width: 625px"
            >
              <button
                @click="previousTab"
                class="btn btn-secondary"
                :disabled="activeTab === 'campaignDetails'"
              >
                <i class="ri-arrow-left-line text-white"></i> Back
              </button>
              <button
                @click="nextTab"
                class="btn btn-primary"
                :disabled="activeTab === 'viewCampaign'"
              >
                Continue <i class="ri-arrow-right-line text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import AvatarPreview from "./AvatarPreview.vue";

export default defineComponent({
  name: "CreateCampaignsModal",
  components: {
    AvatarPreview,
  },
  setup() {
    const activeTab = ref("campaignDetails");
    const minAge = ref(10);
    const maxAge = ref(100);
    const minBudget = ref(1000);
    const maxBudget = ref(5000);

    function updateRange() {
      if (minAge.value > maxAge.value) {
        [minAge.value, maxAge.value] = [maxAge.value, minAge.value];
      }
    }
    function updateBudget() {
      if (minBudget.value > maxBudget.value) {
        [minBudget.value, maxBudget.value] = [maxBudget.value, minBudget.value];
      }
    }
    watch([minAge, maxAge, minBudget, maxBudget], () => {
      updateRange();
      updateBudget();
    });

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    const previousTab = () => {
      if (activeTab.value === "creativeUploads") {
        activeTab.value = "campaignDetails";
      }
      if (activeTab.value === "audiences") {
        activeTab.value = "creativeUploads";
      }
      if (activeTab.value === "budgetEstimates") {
        activeTab.value = "audiences";
      }
      if (activeTab.value === "completed") {
        activeTab.value = "budgetEstimates";
      }
      if (activeTab.value === "viewCampaign") {
        activeTab.value = "completed";
      }
    };

    const nextTab = () => {
      if (activeTab.value === "completed") {
        activeTab.value = "viewCampaign";
      }
      if (activeTab.value === "budgetEstimates") {
        activeTab.value = "completed";
      }
      if (activeTab.value === "audiences") {
        activeTab.value = "budgetEstimates";
      }
      if (activeTab.value === "creativeUploads") {
        activeTab.value = "audiences";
      }
      if (activeTab.value === "campaignDetails") {
        activeTab.value = "creativeUploads";
      }
    };

    const initializeFileUpload = () => {
      const multipleEvents = (
        element: HTMLElement | null,
        eventNames: string,
        // eslint-disable-next-line no-undef
        listener: EventListener
      ) => {
        if (!element) return;
        const events = eventNames.split(" ");
        events.forEach((event) => {
          element.addEventListener(event, listener, false);
        });
      };

      const fileUpload = () => {
        const INPUT_FILE =
          document.querySelector<HTMLInputElement>("#upload-files");
        const INPUT_CONTAINER =
          document.querySelector<HTMLElement>("#upload-container");
        const FILES_LIST_CONTAINER = document.querySelector<HTMLElement>(
          "#files-list-container"
        );
        const FILE_LIST: { name: string; url: string }[] = [];

        if (!INPUT_FILE || !INPUT_CONTAINER || !FILES_LIST_CONTAINER) return;

        // Add hover or active effects
        multipleEvents(INPUT_FILE, "click dragstart dragover", () => {
          INPUT_CONTAINER.classList.add("active");
        });

        multipleEvents(INPUT_FILE, "dragleave dragend drop change", () => {
          INPUT_CONTAINER.classList.remove("active");
        });

        // Handle file input change
        INPUT_FILE.addEventListener("change", () => {
          const files = [...(INPUT_FILE.files || [])];
          FILE_LIST.length = 0; // Clear the list on new file selection

          files.forEach((file) => {
            const fileURL = URL.createObjectURL(file);
            const fileName = file.name;
            FILE_LIST.push({ name: fileName, url: fileURL });
          });

          // Render file list
          FILES_LIST_CONTAINER.innerHTML = "";
          FILE_LIST.forEach((addedFile) => {
            const content = `
              <div class="form__files-container">
                <span class="form__text">${addedFile.name}</span>
                <div>
                  <a class="form__icon" href="${addedFile.url}" target="_blank" title="Preview">&#128065;</a>
                  <a class="form__icon" href="${addedFile.url}" title="Download" download>&#11123;</a>
                </div>
              </div>
            `;
            FILES_LIST_CONTAINER.insertAdjacentHTML("beforeend", content);
          });
        });
      };

      fileUpload();
    };

    onMounted(() => {
      initializeFileUpload();
    });

    return {
      activeTab,
      setActiveTab,
      previousTab,
      nextTab,
      minAge,
      maxAge,
      updateRange,
      minBudget,
      maxBudget,
      updateBudget,
    };
  },
});
</script>

<style lang="scss" scoped>
.tab-contents {
  input {
    width: 100%;
  }
}
</style>
