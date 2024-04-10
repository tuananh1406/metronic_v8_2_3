<template>
  <div
    v-if="asideSecondaryDisplay"
    class="aside-secondary d-flex flex-row-fluid"
  >
    <div class="aside-workspace my-5 p-5" id="kt_aside_wordspace">
      <div class="d-flex h-100 flex-column">
        <div
          class="flex-column-fluid hover-scroll-y"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_aside_wordspace"
          data-kt-scroll-dependencies="#kt_aside_secondary_footer"
          data-kt-scroll-offset="0px"
        >
          <div class="tab-content">
            <div
              class="tab-pane fade active show"
              id="kt_aside_nav_tab_projects"
              role="tabpanel"
            >
              <div class="m-0">
                <div class="d-flex mb-10">
                  <div
                    id="kt_header_search"
                    class="d-flex align-items-center w-lg-400px"
                    data-kt-search-keypress="true"
                    data-kt-search-min-length="2"
                    data-kt-search-enter="enter"
                    data-kt-search-layout="menu"
                    data-kt-menu-trigger="auto"
                    data-kt-menu-permanent="true"
                    data-kt-menu-placement="bottom-start"
                    data-kt-menu-flip="bottom"
                    data-kt-search="true"
                  >
                    <form
                      data-kt-search-element="form"
                      class="w-100 position-relative mb-5 mb-lg-0"
                      autocomplete="off"
                    >
                      <input type="hidden" />

                      <KTIcon
                        icon-name="magnifier"
                        icon-class="fs-2 fs-lg-1 text-gray-500 position-absolute top-50 translate-middle-y ms-5"
                      />

                      <input
                        type="text"
                        class="form-control form-control-solid ps-15"
                        name="search"
                        value=""
                        placeholder="Search..."
                        data-kt-search-element="input"
                      />

                      <span
                        class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                        data-kt-search-element="spinner"
                      >
                        <span
                          class="spinner-border h-15px w-15px align-middle text-gray-500"
                        ></span>
                      </span>

                      <span
                        class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                        data-kt-search-element="clear"
                      >
                        <KTIcon
                          icon-name="cross"
                          icon-class="fs-2 fs-lg-1 me-0"
                        />
                      </span>
                    </form>

                    <div
                      data-kt-search-element="content"
                      class="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden"
                      data-kt-menu="true"
                      style=""
                    >
                      <div data-kt-search-element="wrapper">
                        <div data-kt-search-element="results" class="d-none">
                          <div class="scroll-y mh-200px mh-lg-350px">
                            <h3
                              class="fs-5 text-muted m-0 pb-5"
                              data-kt-search-element="category-title"
                            >
                              Users
                            </h3>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <img
                                  :src="getAssetPath('media/avatars/300-6.jpg')"
                                  alt=""
                                />
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold"
                                  >Karina Clark</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >Marketing Manager</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <img
                                  :src="getAssetPath('media/avatars/300-2.jpg')"
                                  alt=""
                                />
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold"
                                  >Olivia Bold</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >Software Engineer</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <img
                                  :src="getAssetPath('media/avatars/300-9.jpg')"
                                  alt=""
                                />
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold">Ana Clark</span>
                                <span class="fs-7 fw-semibold text-muted"
                                  >UI/UX Designer</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <img
                                  :src="
                                    getAssetPath('media/avatars/300-14.jpg')
                                  "
                                  alt=""
                                />
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold"
                                  >Nick Pitola</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >Art Director</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <img
                                  :src="
                                    getAssetPath('media/avatars/300-11.jpg')
                                  "
                                  alt=""
                                />
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold"
                                  >Edward Kulnic</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >System Administrator</span
                                >
                              </div>
                            </a>

                            <h3
                              class="fs-5 text-muted m-0 pt-5 pb-5"
                              data-kt-search-element="category-title"
                            >
                              Customers
                            </h3>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                    class="w-20px h-20px"
                                    :src="
                                      getAssetPath(
                                        '/media/svg/brand-logos/volicity-9.svg'
                                      )
                                    "
                                    alt=""
                                  />
                                </span>
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold"
                                  >Company Rbranding</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >UI Design</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                    class="w-20px h-20px"
                                    :src="
                                      getAssetPath(
                                        '/media/svg/brand-logos/tvit.svg'
                                      )
                                    "
                                    alt=""
                                  />
                                </span>
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold"
                                  >Company Re-branding</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >Web Development</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                    class="w-20px h-20px"
                                    :src="
                                      getAssetPath(
                                        '/media/svg/misc/infography.svg'
                                      )
                                    "
                                    alt=""
                                  />
                                </span>
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold"
                                  >Business Analytics App</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >Administration</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                    class="w-20px h-20px"
                                    :src="
                                      getAssetPath(
                                        '/media/svg/brand-logos/leaf.svg'
                                      )
                                    "
                                    alt=""
                                  />
                                </span>
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold"
                                  >EcoLeaf App Launch</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >Marketing</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                    class="w-20px h-20px"
                                    :src="
                                      getAssetPath(
                                        '/media/svg/brand-logos/tower.svg'
                                      )
                                    "
                                    alt=""
                                  />
                                </span>
                              </div>

                              <div
                                class="d-flex flex-column justify-content-start fw-semibold"
                              >
                                <span class="fs-6 fw-semibold"
                                  >Tower Group Website</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >Google Adwords</span
                                >
                              </div>
                            </a>

                            <h3
                              class="fs-5 text-muted m-0 pt-5 pb-5"
                              data-kt-search-element="category-title"
                            >
                              Projects
                            </h3>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="document"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <span class="fs-6 fw-semibold"
                                  >Si-Fi Project by AU Themes</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >#45670</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="chart-simple"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <span class="fs-6 fw-semibold"
                                  >Shopix Mobile App Planning</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >#45690</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="message-text-2"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <span class="fs-6 fw-semibold"
                                  >Finance Monitoring SAAS Discussion</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >#21090</span
                                >
                              </div>
                            </a>

                            <a
                              href="#"
                              class="d-flex text-gray-900 text-hover-primary align-items-center mb-5"
                            >
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="profile-circle"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <span class="fs-6 fw-semibold"
                                  >Dashboard Analitics Launch</span
                                >
                                <span class="fs-7 fw-semibold text-muted"
                                  >#34560</span
                                >
                              </div>
                            </a>
                          </div>
                        </div>

                        <div class="mb-4" data-kt-search-element="main">
                          <div class="d-flex flex-stack fw-semibold mb-5">
                            <span class="text-muted fs-6 me-2"
                              >Recently Searched</span
                            >

                            <div
                              class="d-flex"
                              data-kt-search-element="toolbar"
                            >
                              <div
                                data-kt-search-element="preferences-show"
                                class="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 aside-toggle"
                                title="Show search preferences"
                              >
                                <KTIcon
                                  icon-name="setting-2"
                                  icon-class="fs-1"
                                />
                              </div>

                              <div
                                data-kt-search-element="advanced-options-form-show"
                                class="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Show more search options"
                              >
                                <KTIcon icon-name="down" icon-class="fs-2" />
                              </div>
                            </div>
                          </div>

                          <div class="scroll-y mh-200px mh-lg-325px">
                            <div class="d-flex align-items-center mb-5">
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="phone"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <a
                                  href="#"
                                  class="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                  >BoomApp by Keenthemes</a
                                >
                                <span class="fs-7 text-muted fw-semibold"
                                  >#45789</span
                                >
                              </div>
                            </div>

                            <div class="d-flex align-items-center mb-5">
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="chart-simple"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <a
                                  href="#"
                                  class="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                  >"Kept API Project Meeting</a
                                >
                                <span class="fs-7 text-muted fw-semibold"
                                  >#84050</span
                                >
                              </div>
                            </div>

                            <div class="d-flex align-items-center mb-5">
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="chart"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <a
                                  href="#"
                                  class="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                  >"KPI Monitoring App Launch</a
                                >
                                <span class="fs-7 text-muted fw-semibold"
                                  >#84250</span
                                >
                              </div>
                            </div>

                            <div class="d-flex align-items-center mb-5">
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="chart-simple-2"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <a
                                  href="#"
                                  class="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                  >Project Reference FAQ</a
                                >
                                <span class="fs-7 text-muted fw-semibold"
                                  >#67945</span
                                >
                              </div>
                            </div>

                            <div class="d-flex align-items-center mb-5">
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="sms"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <a
                                  href="#"
                                  class="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                  >"FitPro App Development</a
                                >
                                <span class="fs-7 text-muted fw-semibold"
                                  >#84250</span
                                >
                              </div>
                            </div>

                            <div class="d-flex align-items-center mb-5">
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="bank"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <a
                                  href="#"
                                  class="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                  >Shopix Mobile App</a
                                >
                                <span class="fs-7 text-muted fw-semibold"
                                  >#45690</span
                                >
                              </div>
                            </div>

                            <div class="d-flex align-items-center mb-5">
                              <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <KTIcon
                                    icon-name="chart"
                                    icon-class="fs-2 text-primary"
                                  />
                                </span>
                              </div>

                              <div class="d-flex flex-column">
                                <a
                                  href="#"
                                  class="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                  >"Landing UI Design" Launch</a
                                >
                                <span class="fs-7 text-muted fw-semibold"
                                  >#24005</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-search-element="empty"
                          class="text-center d-none"
                        >
                          <div class="pt-10 pb-10">
                            <KTIcon
                              icon-name="search-list"
                              icon-class="fs-4x opacity-50"
                            />
                          </div>

                          <div class="pb-15 fw-semibold">
                            <h3 class="text-gray-600 fs-5 mb-2">
                              No result found
                            </h3>
                            <div class="text-muted fs-7">
                              Please try again with a different query
                            </div>
                          </div>
                        </div>
                      </div>

                      <form
                        data-kt-search-element="advanced-options-form"
                        class="pt-1 d-none"
                      >
                        <h3 class="fw-semobold text-gray-900 mb-7">
                          Advanced Search
                        </h3>

                        <div class="mb-5">
                          <input
                            type="text"
                            class="form-control form-control-sm form-control-solid"
                            placeholder="Contains the word"
                            name="query"
                          />
                        </div>

                        <div class="mb-5">
                          <div class="nav-group nav-group-fluid">
                            <label>
                              <input
                                type="radio"
                                class="btn-check"
                                name="type"
                                value="has"
                                checked
                              />
                              <span
                                class="btn btn-sm btn-color-muted btn-active btn-active-primary"
                                >All</span
                              >
                            </label>

                            <label>
                              <input
                                type="radio"
                                class="btn-check"
                                name="type"
                                value="users"
                              />
                              <span
                                class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                                >Users</span
                              >
                            </label>

                            <label>
                              <input
                                type="radio"
                                class="btn-check"
                                name="type"
                                value="orders"
                              />
                              <span
                                class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                                >Orders</span
                              >
                            </label>

                            <label>
                              <input
                                type="radio"
                                class="btn-check"
                                name="type"
                                value="projects"
                              />
                              <span
                                class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                                >Projects</span
                              >
                            </label>
                          </div>
                        </div>

                        <div class="mb-5">
                          <input
                            type="text"
                            name="assignedto"
                            class="form-control form-control-sm form-control-solid"
                            placeholder="Assigned to"
                            value=""
                          />
                        </div>

                        <div class="mb-5">
                          <input
                            type="text"
                            name="collaborators"
                            class="form-control form-control-sm form-control-solid"
                            placeholder="Collaborators"
                            value=""
                          />
                        </div>

                        <div class="mb-5">
                          <div class="nav-group nav-group-fluid">
                            <label>
                              <input
                                type="radio"
                                class="btn-check"
                                name="attachment"
                                value="has"
                                checked
                              />
                              <span
                                class="btn btn-sm btn-color-muted btn-active btn-active-primary"
                                >Has attachment</span
                              >
                            </label>

                            <label>
                              <input
                                type="radio"
                                class="btn-check"
                                name="attachment"
                                value="any"
                              />
                              <span
                                class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                                >Any</span
                              >
                            </label>
                          </div>
                        </div>

                        <div class="mb-5">
                          <select
                            name="timezone"
                            aria-label="Select a Timezone"
                            data-control="select2"
                            data-placeholder="date_period"
                            class="form-select form-select-sm form-select-solid select2-hidden-accessible"
                            data-select2-id="select2-data-1-r6vx"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option
                              value="next"
                              data-select2-id="select2-data-3-rtyr"
                            >
                              Within the next
                            </option>
                            <option value="last">Within the last</option>
                            <option value="between">Between</option>
                            <option value="on">On</option></select
                          ><span
                            class="select2 select2-container select2-container--bootstrap5"
                            dir="ltr"
                            data-select2-id="select2-data-2-bnkb"
                            style="width: 100%"
                            ><span class="selection"
                              ><span
                                class="select2-selection select2-selection--single form-select form-select-sm form-select-solid"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-timezone-ek-container"
                                aria-controls="select2-timezone-ek-container"
                                ><span
                                  class="select2-selection__rendered"
                                  id="select2-timezone-ek-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Within the next"
                                  >Within the next</span
                                ><span
                                  class="select2-selection__arrow"
                                  role="presentation"
                                  ><b
                                    role="presentation"
                                  ></b></span></span></span
                            ><span
                              class="dropdown-wrapper"
                              aria-hidden="true"
                            ></span
                          ></span>
                        </div>

                        <div class="row mb-8">
                          <div class="col-6">
                            <input
                              type="number"
                              name="date_number"
                              class="form-control form-control-sm form-control-solid"
                              placeholder="Lenght"
                              value=""
                            />
                          </div>

                          <div class="col-6">
                            <select
                              name="date_typer"
                              aria-label="Select a Timezone"
                              data-control="select2"
                              data-placeholder="Period"
                              class="form-select form-select-sm form-select-solid select2-hidden-accessible"
                              data-select2-id="select2-data-4-hptq"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option
                                value="days"
                                data-select2-id="select2-data-6-ez49"
                              >
                                Days
                              </option>
                              <option value="weeks">Weeks</option>
                              <option value="months">Months</option>
                              <option value="years">Years</option></select
                            ><span
                              class="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-5-c0pc"
                              style="width: 100%"
                              ><span class="selection"
                                ><span
                                  class="select2-selection select2-selection--single form-select form-select-sm form-select-solid"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabindex="0"
                                  aria-disabled="false"
                                  aria-labelledby="select2-date_typer-vk-container"
                                  aria-controls="select2-date_typer-vk-container"
                                  ><span
                                    class="select2-selection__rendered"
                                    id="select2-date_typer-vk-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Days"
                                    >Days</span
                                  ><span
                                    class="select2-selection__arrow"
                                    role="presentation"
                                    ><b
                                      role="presentation"
                                    ></b></span></span></span
                              ><span
                                class="dropdown-wrapper"
                                aria-hidden="true"
                              ></span
                            ></span>
                          </div>
                        </div>

                        <div class="d-flex justify-content-end">
                          <button
                            type="reset"
                            class="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                            data-kt-search-element="advanced-options-form-cancel"
                          >
                            Cancel
                          </button>
                          <a
                            href="#"
                            class="btn btn-sm fw-bold btn-primary"
                            data-kt-search-element="advanced-options-form-search"
                            >Search</a
                          >
                        </div>
                      </form>

                      <form
                        data-kt-search-element="preferences"
                        class="pt-1 d-none"
                      >
                        <h3 class="fw-semobold text-gray-900 mb-7">
                          Search Preferences
                        </h3>

                        <div class="pb-4 border-bottom">
                          <label
                            class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
                          >
                            <span
                              class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
                              >Projects</span
                            >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="1"
                              checked
                            />
                          </label>
                        </div>

                        <div class="py-4 border-bottom">
                          <label
                            class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
                          >
                            <span
                              class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
                              >Targets</span
                            >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="1"
                              checked
                            />
                          </label>
                        </div>

                        <div class="py-4 border-bottom">
                          <label
                            class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
                          >
                            <span
                              class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
                              >Affiliate Programs</span
                            >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="1"
                            />
                          </label>
                        </div>

                        <div class="py-4 border-bottom">
                          <label
                            class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
                          >
                            <span
                              class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
                              >Referrals</span
                            >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="1"
                              checked
                            />
                          </label>
                        </div>

                        <div class="py-4 border-bottom">
                          <label
                            class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
                          >
                            <span
                              class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
                              >Users</span
                            >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="1"
                            />
                          </label>
                        </div>

                        <div class="d-flex justify-content-end pt-7">
                          <button
                            type="reset"
                            class="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                            data-kt-search-element="preferences-dismiss"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            class="btn btn-sm fw-bold btn-primary"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="flex-shrink-0 ms-2">
                    <button
                      type="button"
                      class="btn btn-icon btn-bg-light btn-active-icon-primary btn-color-gray-500"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-flip="top-end"
                    >
                      <KTIcon icon-name="filter" icon-class="fs-2" />
                    </button>

                    <Dropdown1></Dropdown1>
                  </div>
                </div>

                <div class="m-0">
                  <h1 class="text-gray-800 fw-semibold mb-6 mx-5">Projects</h1>

                  <div class="mb-10">
                    <a
                      href="#"
                      class="custom-list d-flex align-items-center px-5 py-4"
                    >
                      <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                            :src="
                              getAssetPath('media/svg/brand-logos/bebo.svg')
                            "
                            class="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>

                      <div class="d-flex flex-column flex-grow-1">
                        <h5
                          class="custom-list-title fw-semibold text-gray-800 mb-1"
                        >
                          Briviba SaaS
                        </h5>

                        <span class="text-gray-500 fw-semibold">By James</span>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="custom-list d-flex align-items-center px-5 py-4"
                    >
                      <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                            :src="
                              getAssetPath('media/svg/brand-logos/vimeo.svg')
                            "
                            class="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>

                      <div class="d-flex flex-column flex-grow-1">
                        <h5
                          class="custom-list-title fw-semibold text-gray-800 mb-1"
                        >
                          Vine Quick Reports
                        </h5>

                        <span class="text-gray-500 fw-semibold">By Andres</span>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="custom-list d-flex align-items-center px-5 py-4"
                    >
                      <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                            :src="
                              getAssetPath(
                                '/media/svg/brand-logos/kickstarter.svg'
                              )
                            "
                            class="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>

                      <div class="d-flex flex-column flex-grow-1">
                        <h5
                          class="custom-list-title fw-semibold text-gray-800 mb-1"
                        >
                          KC Account CRM
                        </h5>

                        <span class="text-gray-500 fw-semibold"
                          >By Keenthemes</span
                        >
                      </div>
                    </a>

                    <a
                      href="#"
                      class="custom-list d-flex align-items-center px-5 py-4"
                    >
                      <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                            :src="
                              getAssetPath('media/svg/brand-logos/balloon.svg')
                            "
                            class="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>

                      <div class="d-flex flex-column flex-grow-1">
                        <h5
                          class="custom-list-title fw-semibold text-gray-800 mb-1"
                        >
                          Baloon SaaS
                        </h5>

                        <span class="text-gray-500 fw-semibold"
                          >By SIA Team</span
                        >
                      </div>
                    </a>

                    <a
                      href="#"
                      class="custom-list d-flex align-items-center px-5 py-4"
                    >
                      <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                            :src="
                              getAssetPath(
                                '/media/svg/brand-logos/infography.svg'
                              )
                            "
                            class="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>

                      <div class="d-flex flex-column flex-grow-1">
                        <h5
                          class="custom-list-title fw-semibold text-gray-800 mb-1"
                        >
                          Most Cloudy UMC
                        </h5>

                        <span class="text-gray-500 fw-semibold">By Andrei</span>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="custom-list d-flex align-items-center px-5 py-4"
                    >
                      <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                            :src="
                              getAssetPath('media/svg/brand-logos/disqus.svg')
                            "
                            class="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>

                      <div class="d-flex flex-column flex-grow-1">
                        <h5
                          class="custom-list-title fw-semibold text-gray-800 mb-1"
                        >
                          Disqus Forum
                        </h5>

                        <span class="text-gray-500 fw-semibold"
                          >By Disqus Inc.</span
                        >
                      </div>
                    </a>

                    <a
                      href="#"
                      class="custom-list d-flex align-items-center px-5 py-4"
                    >
                      <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                            :src="
                              getAssetPath('media/svg/brand-logos/plurk.svg')
                            "
                            class="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>

                      <div class="d-flex flex-column flex-grow-1">
                        <h5
                          class="custom-list-title fw-semibold text-gray-800 mb-1"
                        >
                          Proove Quick CRM
                        </h5>

                        <span class="text-gray-500 fw-semibold"
                          >By Proove Limited</span
                        >
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_menu"
              role="tabpanel"
            >
              <KTMenu></KTMenu>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_subscription"
              role="tabpanel"
            >
              <!--begin::Subscription-->
              <div class="mx-5">
                <!--begin::Container-->
                <div class="text-center pt-10 mb-20">
                  <!--begin::Title-->
                  <h2 class="fs-2 fw-bold mb-7">My Subscription</h2>
                  <!--end::Title-->

                  <!--begin::Description-->
                  <p class="text-gray-500 fs-4 fw-semibold mb-10">
                    There are no customers added yet.<br />
                    Kickstart your CRM by adding a your first customer
                  </p>
                  <!--end::Description-->

                  <!--begin::Action-->
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_upgrade_plan"
                    >Upgrade Plan</a
                  >
                  <!--end::Action-->
                </div>
                <!--end::Container-->

                <!--begin::Illustration-->
                <div class="text-center px-4">
                  <img
                    class="mw-100 mh-300px"
                    alt=""
                    :src="getIllustrationsPath('18.png')"
                  />
                </div>
                <!--end::Illustration-->
              </div>
              <!--end::Subscription-->
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_tasks"
              role="tabpanel"
            >
              <KTTasksOverview></KTTasksOverview>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_notifications"
              role="tabpanel"
            >
              <KTNotifications></KTNotifications>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_authors"
              role="tabpanel"
            >
              <KTAuthors></KTAuthors>
            </div>
          </div>
        </div>

        <div class="flex-column-auto pt-10 px-5" id="kt_aside_secondary_footer">
          <a
            href="https://preview.keenthemes.com/metronic8/vue/docs/index"
            class="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
            data-bs-toggle="tooltip"
            data-bs-custom-class="tooltip-dark"
            data-bs-trigger="hover"
            data-bs-offset="0,5"
            data-bs-dismiss-="click"
          >
            <span class="btn-label">{{ t("docsAndComponents") }}</span>
            <KTIcon icon-name="document" icon-class="btn-icon fs-4 ms-2" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <button
    v-if="asideSecondaryDisplay && minimizationEnabled"
    :class="{ active: minimizedAsideSecondary }"
    class="btn btn-sm btn-icon bg-body btn-color-gray-700 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex mb-5"
    data-kt-toggle="true"
    data-kt-toggle-state="active"
    data-kt-toggle-target="body"
    data-kt-toggle-name="aside-minimize"
    style="margin-bottom: 1.35rem"
  >
    <KTIcon icon-name="arrow-left" icon-class="fs-2 rotate-180" />
  </button>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import KTMenu from "@/layouts/default-layout/components/aside/Menu.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import KTTasksOverview from "@/layouts/default-layout/components/aside/tabs/TasksOverview.vue";
import KTAuthors from "@/layouts/default-layout/components/aside/tabs/Authors.vue";
import KTNotifications from "@/layouts/default-layout/components/aside/tabs/Notifications.vue";
import {
  asideSecondaryDisplay,
  minimizationEnabled,
  minimizedAsideSecondary,
} from "@/layouts/default-layout/config/helper";

export default defineComponent({
  name: "kt-aside-secondary",
  components: {
    KTMenu,
    Dropdown1,
    KTTasksOverview,
    KTAuthors,
    KTNotifications,
  },
  setup() {
    const { t } = useI18n();

    return {
      minimizedAsideSecondary,
      asideSecondaryDisplay,
      minimizationEnabled,
      getIllustrationsPath,
      t,
      getAssetPath,
    };
  },
});
</script>
