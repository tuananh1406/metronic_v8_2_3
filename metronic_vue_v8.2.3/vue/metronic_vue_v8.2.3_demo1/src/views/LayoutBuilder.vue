<template>
  <!--begin::Layout Builder Notice-->
  <div class="card mb-10">
    <div class="card-body d-flex align-items-center py-8">
      <!--begin::Icon-->
      <div
        class="d-flex h-50px w-50px h-lg-80px w-lg-80px flex-shrink-0 flex-center position-relative align-self-start align-self-lg-center mt-3 mt-lg-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="text-primary h-75px w-75px h-lg-100px w-lg-100px position-absolute opacity-5"
        >
          <path
            fill="currentColor"
            d="M10.2,21.23,4.91,18.17a3.58,3.58,0,0,1-1.8-3.11V8.94a3.58,3.58,0,0,1,1.8-3.11L10.2,2.77a3.62,3.62,0,0,1,3.6,0l5.29,3.06a3.58,3.58,0,0,1,1.8,3.11v6.12a3.58,3.58,0,0,1-1.8,3.11L13.8,21.23A3.62,3.62,0,0,1,10.2,21.23Z"
          ></path>
        </svg>
        <KTIcon
          icon-name="wrench"
          icon-class="fs-2x fs-lg-3x text-primary position-absolute"
        />
      </div>
      <!--end::Icon-->

      <!--begin::Description-->
      <div class="ms-6">
        <p class="list-unstyled text-gray-600 fw-semibold fs-6 p-0 m-0">
          The layout builder will assist you in setting up your preferred layout
          for your project, generating a layout configuration, and previewing it
          in real-time. To preview the default layout configuration, simply
          empty your localStorage or press the 'Reset' button.
        </p>
      </div>
      <!--end::Description-->
    </div>
  </div>
  <!--end::Layout Builder Notice-->

  <div class="card mb-10">
    <!--begin::Header-->
    <div class="card-header card-header-stretch">
      <ul
        class="nav nav-stretch nav-line-tabs fw-semibold border-0"
        role="tablist"
        id="kt_layout_builder_tabs"
        ref="kt_layout_builder_tabs"
      >
        <li class="nav-item">
          <a
            class="nav-link cursor-pointer"
            :class="{ active: tabIndex === 'main' }"
            data-bs-toggle="tab"
            @click="setActiveTab($event)"
            data-tab-index="main"
            role="tab"
          >
            Main
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link cursor-pointer"
            :class="{ active: tabIndex === 'layout' }"
            data-bs-toggle="tab"
            @click="setActiveTab($event)"
            data-tab-index="layout"
            role="tab"
          >
            Layout
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link cursor-pointer"
            :class="{ active: tabIndex === 'sidebar' }"
            data-bs-toggle="tab"
            @click="setActiveTab($event)"
            data-tab-index="sidebar"
            role="tab"
          >
            Sidebar
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link cursor-pointer"
            :class="{ active: tabIndex === 'header' }"
            data-bs-toggle="tab"
            @click="setActiveTab($event)"
            data-tab-index="header"
            role="tab"
          >
            Header
          </a>
        </li>
      </ul>
    </div>
    <!--end::Header-->

    <!--begin::Form-->
    <form class="form" id="kt_layout_builder_form" @submit="submit($event)">
      <!--begin::Body-->
      <div class="card-body">
        <div class="tab-content pt-3" id="kt_tabs">
          <div
            class="tab-pane"
            :class="{ active: tabIndex === 'main' }"
            id="kt_builder_main"
          >
            <!--begin::Row-->
            <div class="row">
              <!--begin::Col-->
              <div class="col-lg-6 pe-lg-15">
                <!--begin::Form group-->
                <div class="form-group">
                  <!--begin::Heading-->
                  <div class="mb-6">
                    <h4 class="fw-bold text-gray-900">Theme Mode</h4>
                    <div class="fw-semibold text-muted fs-7 d-block lh-1">
                      Enjoy Dark &amp; Light modes.
                    </div>
                  </div>
                  <!--end::Heading-->
                  <!--begin::Options-->
                  <div
                    class="row"
                    data-kt-buttons="true"
                    data-kt-buttons-target=".form-check-image,.form-check-input"
                    data-kt-initialized="1"
                  >
                    <!--begin::Col-->
                    <div class="col-6">
                      <!--begin::Option-->
                      <label
                        class="form-check-image form-check-success"
                        :class="[themeMode === 'light' && 'active']"
                      >
                        <!--begin::Image-->
                        <div class="form-check-wrapper">
                          <img
                            :src="
                              getAssetPath('media/misc/layout/demo1-light.png')
                            "
                            class="mw-100"
                            alt=""
                          />
                        </div>
                        <!--end::Image-->
                        <!--begin::Check-->
                        <div
                          class="form-check form-check-custom form-check-solid form-check-sm form-check-success"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            :checked="themeMode === 'light'"
                            value="light"
                            name="theme_mode"
                            @change="onThemeModeChange"
                          />
                          <!--begin::Label-->
                          <div class="form-check-label text-gray-700">
                            Light
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Check-->
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Col-->
                    <!--begin::Col-->
                    <div class="col-6">
                      <!--begin::Option-->
                      <label
                        class="form-check-image form-check-success"
                        :class="[themeMode === 'dark' && 'active']"
                      >
                        <!--begin::Image-->
                        <div class="form-check-wrapper">
                          <img
                            :src="
                              getAssetPath('media/misc/layout/demo1-dark.png')
                            "
                            class="mw-100"
                            alt=""
                          />
                        </div>
                        <!--end::Image-->
                        <!--begin::Check-->
                        <div
                          class="form-check form-check-custom form-check-solid form-check-sm form-check-success"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            :checked="themeMode === 'dark'"
                            value="dark"
                            name="theme_mode"
                            @change="onThemeModeChange"
                          />
                          <!--begin::Label-->
                          <div class="form-check-label text-gray-700">Dark</div>
                          <!--end::Label-->
                        </div>
                        <!--end::Check-->
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Options-->
                </div>
                <!--end::Form group-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
            <!--begin::Separator-->
            <div class="separator separator-dashed my-6"></div>
            <!--end::Separator-->
            <!--begin::Form group-->
            <div class="form-group">
              <!--begin::Heading-->
              <div class="d-flex flex-column mb-4">
                <h4 class="fw-bold text-gray-900">Width Mode</h4>
                <div class="fs-7 fw-semibold text-muted">
                  Page width options
                </div>
              </div>
              <!--end::Heading-->
              <!--begin::Options-->
              <div class="d-flex">
                <!--begin::Check-->
                <div
                  class="form-check form-check-custom form-check-success form-check-solid form-check-sm me-7"
                >
                  <input
                    v-model="config.general.pageWidth"
                    class="form-check-input"
                    type="radio"
                    value="default"
                    id="kt_builder_page_width_default"
                  />
                  <!--begin::Label-->
                  <label
                    class="form-check-label text-gray-700 fw-bold text-nowrap"
                    for="kt_builder_page_width_default"
                    >Default</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Check-->
                <!--begin::Check-->
                <div
                  class="form-check form-check-custom form-check-success form-check-solid form-check-sm me-7"
                >
                  <input
                    v-model="config.general.pageWidth"
                    class="form-check-input"
                    type="radio"
                    value="fluid"
                    id="kt_builder_page_width_fluid"
                  />
                  <!--begin::Label-->
                  <label
                    class="form-check-label text-gray-700 fw-bold text-nowrap"
                    for="kt_builder_page_width_fluid"
                    >Fluid</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Check-->
                <!--begin::Check-->
                <div
                  class="form-check form-check-custom form-check-success form-check-solid form-check-sm me-7"
                >
                  <input
                    v-model="config.general.pageWidth"
                    class="form-check-input"
                    type="radio"
                    value="fixed"
                    id="kt_builder_page_width_fixed"
                  />
                  <!--begin::Label-->
                  <label
                    class="form-check-label text-gray-700 fw-bold text-nowrap"
                    for="kt_builder_page_width_fixed"
                    >Fixed</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Check-->
              </div>
              <!--end::Options-->
            </div>
            <!--end::Form group-->
            <!--begin::Separator-->
            <div class="separator separator-dashed my-6"></div>
            <!--end::Separator-->
            <!--begin::Form group-->
            <div class="form-group d-flex flex-stack">
              <!--begin::Heading-->
              <div class="d-flex flex-column">
                <h4 class="fw-bold text-gray-900">Keenicons Style</h4>
                <div>
                  <span class="fs-7 fw-semibold text-muted"
                    >Select global UI icons style.</span
                  >{{ " " }}
                  <a
                    class="fw-semibold"
                    href="https://preview.keenthemes.com/html/metronic/docs/icons/keenicons"
                    target="_blank"
                    >Learn more</a
                  >
                </div>
              </div>
              <!--end::Heading-->
              <!--begin::Options-->
              <div
                class="d-flex flex-stack gap-3 mw-lg-600px"
                data-kt-buttons="true"
                data-kt-buttons-target=".form-check-image,.form-check-input"
                data-kt-initialized="1"
              >
                <!--begin::Option-->
                <label
                  :class="config.general.iconsType === 'duotone' && 'active'"
                  class="form-check-image form-check-success w-100 parent-active parent-hover"
                >
                  <!--begin::Image-->
                  <div
                    class="form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4"
                  >
                    <KTIcon
                      icon-type="duotone"
                      icon-name="picture"
                      icon-class="fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700"
                    />
                    <span
                      class="fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700"
                      >Duotone</span
                    >
                  </div>
                  <!--end::Image-->
                  <!--begin::Check-->
                  <div
                    style="
                      visibility: hidden;
                      height: 0;
                      width: 0;
                      overflow: hidden;
                    "
                  >
                    <input
                      v-model="config.general.iconsType"
                      class="form-check-input"
                      type="radio"
                      value="duotone"
                      :checked="config.general.iconsType === 'duotone'"
                    />
                  </div>
                  <!--end::Check-->
                </label>
                <!--end::Option-->
                <!--begin::Option-->
                <label
                  :class="config.general.iconsType === 'outline' && 'active'"
                  class="form-check-image form-check-success w-100 parent-active parent-hover"
                >
                  <!--begin::Image-->
                  <div
                    class="form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4"
                  >
                    <i
                      class="ki-outline ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700"
                    ></i>
                    <span
                      class="fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700"
                      >Outline</span
                    >
                  </div>
                  <!--end::Image-->
                  <!--begin::Check-->
                  <div
                    style="
                      visibility: hidden;
                      height: 0;
                      width: 0;
                      overflow: hidden;
                    "
                  >
                    <input
                      v-model="config.general.iconsType"
                      class="form-check-input"
                      type="radio"
                      value="outline"
                      name="outline"
                      :checked="config.general.iconsType === 'outline'"
                    />
                  </div>
                  <!--end::Check-->
                </label>
                <!--end::Option-->
                <!--begin::Option-->
                <label
                  :class="config.general.iconsType === 'solid' && 'active'"
                  class="form-check-image form-check-success w-100 parent-active parent-hover"
                >
                  <!--begin::Image-->
                  <div
                    class="form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4"
                  >
                    <i
                      class="ki-solid ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700"
                    ></i>
                    <span
                      class="fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700"
                      >Solid</span
                    >
                  </div>
                  <!--end::Image-->
                  <!--begin::Check-->
                  <div
                    style="
                      visibility: hidden;
                      height: 0;
                      width: 0;
                      overflow: hidden;
                    "
                  >
                    <input
                      v-model="config.general.iconsType"
                      class="form-check-input"
                      type="radio"
                      value="solid"
                      name="solid"
                      :checked="config.general.iconsType === 'solid'"
                    />
                  </div>
                  <!--end::Check-->
                </label>
                <!--end::Option-->
              </div>
              <!--end::Options-->
            </div>
            <!--end::Form group-->
            <!--begin::Separator-->
            <div class="separator separator-dashed my-6"></div>
            <!--end::Separator-->
            <!--begin::Form group-->
            <div class="form-group d-flex flex-stack">
              <!--begin::Heading-->
              <div class="d-flex flex-column">
                <h4 class="fw-bold text-gray-900">Menu Icon</h4>
                <div class="fs-7 fw-semibold text-muted">
                  Sidebar menu icon options
                </div>
              </div>
              <!--end::Heading-->
              <!--begin::Option-->
              <div class="d-flex justify-content-end">
                <!--begin::Check-->
                <div
                  class="form-check form-check-custom form-check-success form-check-solid me-7"
                  data-bs-toggle="tooltip"
                  data-kt-initialized="1"
                >
                  <input
                    v-model="config.sidebar.default.menu.iconType"
                    class="form-check-input w-20px h-20px"
                    type="radio"
                    value="bootstrap"
                    id="kt_builder_icon_svg"
                  />
                  <!--begin::Label-->
                  <label
                    class="form-check-label text-gray-700 fw-bold text-nowrap"
                    for="kt_builder_icon_svg"
                    >Bootstrap</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Check-->
                <!--begin::Check-->
                <div
                  class="form-check form-check-custom form-check-success form-check-solid me-7"
                  data-bs-toggle="tooltip"
                  data-kt-initialized="1"
                >
                  <input
                    v-model="config.sidebar.default.menu.iconType"
                    class="form-check-input w-20px h-20px"
                    type="radio"
                    value="keenthemes"
                    id="kt_builder_icon_font"
                  />
                  <!--begin::Label-->
                  <label
                    class="form-check-label text-gray-700 fw-bold text-nowrap"
                    for="kt_builder_icon_font"
                    >Keenthemes</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Check-->
              </div>
              <!--end::Option-->
            </div>
            <!--end::Form group-->
          </div>

          <div
            class="tab-pane"
            :class="{ active: tabIndex === 'layout' }"
            id="kt_builder_layout"
          >
            <!--begin::Heading-->
            <div class="mb-6">
              <h4 class="fw-bold text-gray-900">Layouts</h4>
              <span class="fw-semibold text-muted fs-7 lh-1"
                >4 main layout options.</span
              >
            </div>
            <!--end::Heading-->
            <!--begin::Options-->
            <div
              class="row gy-5"
              data-kt-buttons="true"
              data-kt-buttons-target=".form-check-image:not(.disabled),.form-check-input:not([disabled])"
              data-kt-initialized="1"
            >
              <!--begin::Col-->
              <div class="col-lg-3">
                <!--begin::Option-->
                <label
                  :class="[layoutType === 'dark-sidebar' && 'active']"
                  class="form-check-image form-check-success"
                >
                  <!--begin::Image-->
                  <div class="form-check-wrapper">
                    <img
                      :src="getAssetPath('media/misc/layout/dark-sidebar.png')"
                      class="mw-100"
                      alt=""
                    />
                  </div>
                  <!--end::Image-->
                  <!--begin::Check-->
                  <div
                    class="form-check form-check-custom form-check-success form-check-sm form-check-solid"
                  >
                    <input
                      v-model="layoutType"
                      class="form-check-input"
                      type="radio"
                      value="dark-sidebar"
                      name="layoutType"
                    />
                    <!--begin::Label-->
                    <div class="form-check-label text-gray-800">
                      Dark Sidebar
                    </div>
                    <!--end::Label-->
                  </div>
                  <!--end::Check-->
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-lg-3">
                <!--begin::Option-->
                <label
                  :class="[layoutType === 'light-sidebar' && 'active']"
                  class="form-check-image form-check-success"
                >
                  <!--begin::Image-->
                  <div class="form-check-wrapper">
                    <img
                      :src="getAssetPath('media/misc/layout/light-sidebar.png')"
                      class="mw-100"
                      alt=""
                    />
                  </div>
                  <!--end::Image-->
                  <!--begin::Check-->
                  <div
                    class="form-check form-check-custom form-check-success form-check-sm form-check-solid"
                  >
                    <input
                      v-model="layoutType"
                      class="form-check-input"
                      type="radio"
                      value="light-sidebar"
                      name="layoutType"
                    />
                    <!--begin::Label-->
                    <div class="form-check-label text-gray-800">
                      Light Sidebar
                    </div>
                    <!--end::Label-->
                  </div>
                  <!--end::Check-->
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-lg-3">
                <!--begin::Option-->
                <label
                  :class="[layoutType === 'dark-header' && 'active']"
                  class="form-check-image form-check-success"
                >
                  <!--begin::Image-->
                  <div class="form-check-wrapper">
                    <img
                      :src="getAssetPath('media/misc/layout/dark-header.png')"
                      class="mw-100"
                      alt=""
                    />
                  </div>
                  <!--end::Image-->
                  <!--begin::Check-->
                  <div
                    class="form-check form-check-custom form-check-success form-check-sm form-check-solid"
                  >
                    <input
                      v-model="layoutType"
                      class="form-check-input"
                      type="radio"
                      value="dark-header"
                      name="layoutType"
                    />
                    <!--begin::Label-->
                    <div class="form-check-label text-gray-800">
                      Dark Header
                    </div>
                    <!--end::Label-->
                  </div>
                  <!--end::Check-->
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-lg-3">
                <!--begin::Option-->
                <label
                  :class="[layoutType === 'light-header' && 'active']"
                  class="form-check-image form-check-success"
                >
                  <!--begin::Image-->
                  <div class="form-check-wrapper">
                    <img
                      :src="getAssetPath('media/misc/layout/light-header.png')"
                      class="mw-100"
                      alt=""
                    />
                  </div>
                  <!--end::Image-->
                  <!--begin::Check-->
                  <div
                    class="form-check form-check-custom form-check-success form-check-sm form-check-solid"
                  >
                    <input
                      v-model="layoutType"
                      class="form-check-input"
                      type="radio"
                      value="light-header"
                      name="layoutType"
                    />
                    <!--begin::Label-->
                    <div class="form-check-label text-gray-800">
                      Light Header
                    </div>
                    <!--end::Label-->
                  </div>
                  <!--end::Check-->
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Options-->
          </div>

          <div
            class="tab-pane"
            :class="{ active: tabIndex === 'sidebar' }"
            id="kt_builder_sidebar"
          >
            <!--begin::Form group-->
            <div class="form-group d-flex flex-stack">
              <!--begin::Heading-->
              <div class="d-flex flex-column">
                <h4 class="fw-bold text-gray-900">Minimize</h4>
                <div class="fs-7 fw-semibold text-muted">
                  Sidebar minimize mode
                </div>
              </div>
              <!--end::Heading-->
              <!--begin::Option-->
              <div class="d-flex justify-content-end">
                <!--begin::Check-->
                <div
                  class="form-check form-check-custom form-check-solid form-check-success form-switch"
                >
                  <input
                    v-model="config.sidebar.default.minimize.desktop.enabled"
                    class="form-check-input w-45px h-30px"
                    type="checkbox"
                    value="true"
                    id="kt_builder_sidebar_minimize_desktop_enabled"
                  />
                  <!--begin::Label-->
                  <label
                    class="form-check-label text-gray-700 fw-bold"
                    for="kt_builder_sidebar_minimize_desktop_enabled"
                    data-bs-toggle="tooltip"
                    data-kt-initialized="1"
                    >Minimize Toggle</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Check-->
                <!--begin::Check-->
                <div
                  class="form-check form-check-custom form-check-solid form-check-success form-switch ms-10"
                >
                  <input
                    v-model="config.sidebar.default.minimize.desktop.hoverable"
                    class="form-check-input w-45px h-30px"
                    type="checkbox"
                    value="true"
                    id="kt_builder_sidebar_minimize_desktop_hoverable"
                  />
                  <!--begin::Label-->
                  <label
                    class="form-check-label text-gray-700 fw-bold"
                    for="kt_builder_sidebar_minimize_desktop_hoverable"
                    data-bs-toggle="tooltip"
                    data-kt-initialized="1"
                    >Hoverable</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Check-->
                <!--begin::Check-->
                <div
                  class="form-check form-check-custom form-check-solid form-check-success form-switch ms-10"
                >
                  <input
                    v-model="config.sidebar.default.minimize.desktop.default"
                    class="form-check-input w-45px h-30px"
                    type="checkbox"
                    value="true"
                    id="kt_builder_sidebar_minimize_desktop_default"
                  />
                  <!--begin::Label-->
                  <label
                    class="form-check-label text-gray-700 fw-bold"
                    for="kt_builder_sidebar_minimize_desktop_default"
                    data-bs-toggle="tooltip"
                    data-kt-initialized="1"
                    >Default Minimized</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Check-->
              </div>
              <!--end::Option-->
            </div>
            <!--end::Form group-->
          </div>

          <div
            class="tab-pane"
            :class="{ active: tabIndex === 'header' }"
            id="kt_builder_header"
          >
            <div
              class="tab-pane active show"
              id="kt_builder_header"
              role="tabpanel"
            >
              <!--begin::Form group-->
              <div class="form-group d-flex flex-stack">
                <!--begin::Heading-->
                <div class="d-flex flex-column">
                  <h4 class="fw-bold text-gray-900">Fixed</h4>
                  <div class="fs-7 fw-semibold text-muted">
                    Fixed toolbar mode
                  </div>
                </div>
                <!--end::Heading-->
                <!--begin::Option-->
                <div class="d-flex justify-content-end">
                  <!--begin::Check-->
                  <div
                    class="form-check form-check-custom form-check-solid form-check-success form-switch me-10"
                  >
                    <input
                      v-model="config.header.default.fixed.desktop"
                      class="form-check-input w-45px h-30px"
                      type="checkbox"
                      value="true"
                      id="kt_builder_header_fixed_desktop"
                    />
                    <!--begin::Label-->
                    <label
                      class="form-check-label text-gray-700 fw-bold"
                      for="kt_builder_header_fixed_desktop"
                      >Desktop Mode</label
                    >
                    <!--end::Label-->
                  </div>
                  <!--end::Check-->
                  <!--begin::Check-->
                  <div
                    class="form-check form-check-custom form-check-solid form-check-success form-switch"
                  >
                    <input
                      v-model="config.header.default.fixed.mobile"
                      class="form-check-input w-45px h-30px"
                      type="checkbox"
                      value="true"
                      id="kt_builder_header_fixed_mobile"
                    />
                    <!--begin::Label-->
                    <label
                      class="form-check-label text-gray-700 fw-bold"
                      for="kt_builder_header_fixed_mobile"
                      >Mobile Mode</label
                    >
                    <!--end::Label-->
                  </div>
                  <!--end::Check-->
                </div>
                <!--end::Option-->
              </div>
              <!--end::Form group-->
              <!--begin::Separator-->
              <div class="separator separator-dashed my-6"></div>
              <!--end::Separator-->
              <!--begin::Form group-->
              <div class="form-group d-flex flex-stack">
                <!--begin::Heading-->
                <div class="d-flex flex-column">
                  <h4 class="fw-bold text-gray-900">Page Title</h4>
                  <div class="fs-7 fw-semibold text-muted">
                    Page title layout options
                  </div>
                </div>
                <!--end::Heading-->
                <!--begin::Option-->
                <div class="d-flex justify-content-end">
                  <!--begin::Check-->
                  <div
                    class="form-check form-check-custom form-check-solid form-check-success form-check-sm me-10"
                  >
                    <input
                      v-model="config.pageTitle.direction"
                      class="form-check-input"
                      type="radio"
                      value="column"
                      id="kt_builder_page_title_direction_column"
                    />
                    <!--begin::Label-->
                    <label
                      class="form-check-label text-gray-700 fw-bold"
                      for="kt_builder_page_title_direction_column"
                      data-bs-toggle="tooltip"
                      data-kt-initialized="1"
                      >Column</label
                    >
                    <!--end::Label-->
                  </div>
                  <!--end::Check-->
                  <!--begin::Check-->
                  <div
                    class="form-check form-check-custom form-check-solid form-check-success"
                  >
                    <input
                      v-model="config.pageTitle.direction"
                      class="form-check-input"
                      type="radio"
                      value="row"
                      id="kt_builder_page_title_direction_row"
                    />
                    <!--begin::Label-->
                    <label
                      class="form-check-label text-gray-700 fw-bold"
                      for="kt_builder_page_title_direction_row"
                      data-bs-toggle="tooltip"
                      data-kt-initialized="1"
                      >Row</label
                    >
                    <!--end::Label-->
                  </div>
                  <!--end::Check-->
                </div>
                <!--end::Option-->
              </div>
              <!--end::Form group-->
            </div>
          </div>
        </div>
      </div>
      <!--end::Body-->

      <!--begin::Footer-->
      <div class="card-footer py-6">
        <div class="row">
          <div class="col-lg-9">
            <button
              type="submit"
              id="kt_layout_builder_preview"
              class="btn btn-primary me-2"
            >
              <span class="indicator-label"> Preview </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>

            <button
              @click="reset($event)"
              type="button"
              id="kt_layout_builder_reset"
              class="btn btn-active-light btn-color-muted fw-semibold"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <!--end::Footer-->
    </form>
    <!--end::Form-->
  </div>

  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Heading-->
      <h1 class="anchor fw-bold mb-5" id="overview">Generated configuration</h1>
      <!--end::Heading-->
      <div class="py-5">
        This config is used as a <b>{{ themeName }}</b> layout config, you can
        update default values inside file
        <code>src/layouts/default-layout/config/DefaultLayoutConfig.ts</code>
      </div>
      <CodeHighlighter lang="json">{{ config }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import { config, layout, themeMode } from "@/layouts/default-layout/config/helper";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { themeName } from "@/core/helpers/system";
import { useThemeStore } from "@/stores/theme";
import { LS_CONFIG_NAME_KEY, useConfigStore } from "@/stores/config";

const LS_BUILDER_TAB_NAME =
  "layoutBuilderTabIndex_" + import.meta.env.VITE_APP_DEMO;

export default defineComponent({
  name: "layout-builder",
  components: {
    CodeHighlighter,
  },
  setup() {
    const storeTheme = useThemeStore();
    const storeBody = useConfigStore();
    const tabIndex = ref<string>("main");
    const layoutType = ref(layout.value);

    onMounted(() => {
      // set the tab from previous
      tabIndex.value = localStorage.getItem(LS_BUILDER_TAB_NAME) || "main";
    });

    /**
     * Reset config
     * @param e
     */
    const reset = (e: Event) => {
      e.preventDefault();
      // remove existing saved config
      localStorage.removeItem(LS_CONFIG_NAME_KEY);
      window.location.reload();
    };

    /**
     * Set active tab when the tab get clicked
     * @param e
     */
    const setActiveTab = (e: Event) => {
      const target = e.target as HTMLInputElement;

      tabIndex.value = target.getAttribute("data-tab-index") as string;
      // keep active tab
      localStorage.setItem(LS_BUILDER_TAB_NAME, tabIndex.value);
    };

    const onThemeModeChange = (e: Event) => {
      const target = e.target as HTMLInputElement;

      storeBody.setLayoutConfigProperty("general.mode", target.value);

      storeTheme.setThemeMode(target.value as "light" | "dark" | "system");

      // save new config to localStorage
      localStorage.setItem(LS_CONFIG_NAME_KEY, JSON.stringify(config.value));
    };

    /**
     * Submit form
     * @param event
     */
    const submit = (event: Event) => {
      event.preventDefault();

      storeBody.setLayoutConfigProperty("general.layout", layoutType);

      // save new config to localStorage
      localStorage.setItem(LS_CONFIG_NAME_KEY, JSON.stringify(config.value));
      window.location.reload();
    };

    return {
      tabIndex,
      config,
      reset,
      setActiveTab,
      submit,
      themeMode,
      themeName,
      layout,
      layoutType,
      onThemeModeChange,
      getAssetPath,
    };
  },
});
</script>