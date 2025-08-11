<template>
  <div class="row">
    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">New York</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-5.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$18,000</h3>
            <span
              class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
            >
              Sale
            </span>
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary">
              location_on
            </span>
            <span class="ms-1">35 Prince Consort Road</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  bed
                </span>
                <span class="ms-2">6 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  bathtub
                </span>
                <span class="ms-2">5 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  square_foot
                </span>
                <span class="ms-2">1800 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-1.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Harold Cook</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">London</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-6.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$220,000</h3>
            <span
              class="text-primary bg-primary bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
            >
              Rent
            </span>
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary">
              location_on
            </span>
            <span class="ms-1">58 Gateway Road Portland</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  bed
                </span>
                <span class="ms-2">8 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  bathtub
                </span>
                <span class="ms-2">6 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  square_foot
                </span>
                <span class="ms-2">2000 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-2.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Debra Sisk</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">France</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-7.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$350,000</h3>
            <span
              class="text-danger bg-danger bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
            >
              Sold
            </span>
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary">
              location_on
            </span>
            <span class="ms-1">18 Chemin Challet</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  bed
                </span>
                <span class="ms-2">6 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  bathtub
                </span>
                <span class="ms-2">5 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger">
                  square_foot
                </span>
                <span class="ms-2">1800 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-3.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Harold Cook</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">Australia</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-9.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$158,000</h3>
            <span
              class="text-primary bg-primary bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
              >Rent</span
            >
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary"
              >location_on</span
            >
            <span class="ms-1">51 Decca Road GUNN</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bed</span
                >
                <span class="ms-2">8 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bathtub</span
                >
                <span class="ms-2">8 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >square_foot</span
                >
                <span class="ms-2">2000 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-5.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Steven Bryant</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">Italy</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-10.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$99,000</h3>
            <span
              class="text-danger bg-danger bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
              >Sold</span
            >
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary"
              >location_on</span
            >
            <span class="ms-1">35 Vicolo Tre Marchetti</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bed</span
                >
                <span class="ms-2">6 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bathtub</span
                >
                <span class="ms-2">5 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >square_foot</span
                >
                <span class="ms-2">1500 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-6.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Jannie James</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">Germany</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-11.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$110,000</h3>
            <span
              class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
              >Sale</span
            >
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary"
              >location_on</span
            >
            <span class="ms-1">Ansbacher Strasse 44</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bed</span
                >
                <span class="ms-2">10 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bathtub</span
                >
                <span class="ms-2">10 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >square_foot</span
                >
                <span class="ms-2">2500 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-7.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Larry Greenberg</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">Poland</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-12.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$150,500</h3>
            <span
              class="text-primary bg-primary bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
              >Rent</span
            >
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary"
              >location_on</span
            >
            <span class="ms-1">Czerwonych Beretów 124</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bed</span
                >
                <span class="ms-2">6 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bathtub</span
                >
                <span class="ms-2">5 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >square_foot</span
                >
                <span class="ms-2">1800 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-8.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Kara Spangler</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">Norway</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-13.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$120,000</h3>
            <span
              class="text-primary bg-primary bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
              >Rent</span
            >
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary"
              >location_on</span
            >
            <span class="ms-1">Moeneveien 228 VARTEIG</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bed</span
                >
                <span class="ms-2">5 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bathtub</span
                >
                <span class="ms-2">5 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >square_foot</span
                >
                <span class="ms-2">1400 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-9.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Benjamin Dinh</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">Netherland</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-14.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$190,000</h3>
            <span
              class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
              >Sale</span
            >
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary"
              >location_on</span
            >
            <span class="ms-1">Overburgkade 23</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bed</span
                >
                <span class="ms-2">6 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bathtub</span
                >
                <span class="ms-2">6 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >square_foot</span
                >
                <span class="ms-2">1900 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-10.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Jane Wright</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">Spain</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-15.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$155,000</h3>
            <span
              class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
              >Sale</span
            >
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary"
              >location_on</span
            >
            <span class="ms-1">Paseo Junquera, 98</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bed</span
                >
                <span class="ms-2">6 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bathtub</span
                >
                <span class="ms-2">5 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >square_foot</span
                >
                <span class="ms-2">1800 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-11.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Kirk Jensen</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">Hungary</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-16.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$340,000</h3>
            <span
              class="text-danger bg-danger bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
              >Sold</span
            >
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary"
              >location_on</span
            >
            <span class="ms-1">8985 Becsvölgye Nyár utca</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bed</span
                >
                <span class="ms-2">10 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bathtub</span
                >
                <span class="ms-2">10 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >square_foot</span
                >
                <span class="ms-2">2500 sqft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-12.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Harold Cook</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-xl-6 col-xxl-4">
      <div class="card border-0 rounded-3 bg-white property-list-hover mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
          >
            <RouterLink
              to="/real-estate/property-overview"
              class="text-decoration-none"
            >
              <h3 class="mb-0">Potugal</h3>
            </RouterLink>

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

          <RouterLink
            to="/real-estate/property-overview"
            class="text-decoration-none d-block mb-4"
          >
            <img
              src="@/assets/images/property-8.png"
              class="rounded-2"
              alt="property"
            />
          </RouterLink>

          <div class="d-flex justify-content-between mb-3">
            <h3 class="mb-0 text-danger">$250,000</h3>
            <span
              class="text-success bg-success bg-opacity-10 d-inline-block fs-12 px-2 rounded-2"
              >Sale</span
            >
          </div>
          <div class="d-flex align-items-center mb-3">
            <span class="material-symbols-outlined fs-20 text-primary"
              >location_on</span
            >
            <span class="ms-1">Largo Prazeres 32</span>
          </div>
          <ul
            class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-2 gap-md-4 border-top border-bottom py-2 mb-4"
          >
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bed</span
                >
                <span class="ms-2">6 Bed</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >bathtub</span
                >
                <span class="ms-2">5 Bath</span>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-18 text-danger"
                  >square_foot</span
                >
                <span class="ms-2">1800 qft</span>
              </div>
            </li>
          </ul>

          <div
            class="d-flex flex-wrap gap-2 justify-content-between align-items-center"
          >
            <RouterLink
              to="/real-estate/agent-overview"
              class="d-flex align-items-center text-decoration-none"
            >
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/user-4.jpg"
                  style="width: 40px; height: 40px"
                  class="rounded-circle border border-white"
                  alt="user"
                />
              </div>
              <div class="flex-grow-1 ms-2">
                <h4 class="mb-0 fs-16 fw-semibold">Judith Brooks</h4>
                <span class="fs-13 text-body">Owner</span>
              </div>
            </RouterLink>
            <RouterLink
              to="/real-estate/property-overview"
              class="text-primary fs-15 text-decoration-none read"
            >
              View More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-12">
      <div class="card border-0 bg-white p-4 mb-4 rounded-3">
        <Pagination total="30" items="12" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";
import Pagination from "@/components/Common/Pagination.vue";

export default defineComponent({
  name: "PropertyList",
  components: {
    Pagination,
  },
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>
