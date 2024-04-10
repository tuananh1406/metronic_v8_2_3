<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-center flex-shrink-0">
    <!--begin::Search-->
    <div class="d-flex align-items-stretch ms-1 ms-lg-3">
      <KTSearch></KTSearch>
    </div>
    <!--end::Search-->

    <!--begin::Activities-->
    <div class="d-flex align-items-center ms-3 ms-lg-4">
      <!--begin::drawer toggle-->
      <div
        class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px position-relative"
        id="kt_activities_toggle"
      >
        <KTIcon icon-name="notification-bing" icon-class="fs-1" />
      </div>
      <!--end::drawer toggle-->
    </div>
    <!--end::Activities-->

    <!--begin::Chat-->
    <div class="d-flex align-items-center ms-3 ms-lg-4">
      <!--begin::Menu wrapper-->
      <div
        class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px position-relative"
        id="kt_drawer_chat_toggle"
      >
        <KTIcon icon-name="message-text-2" icon-class="fs-1" />

        <span
          class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
        >
        </span>
      </div>
      <!--end::Menu wrapper-->
    </div>
    <!--end::Chat-->

    <!--begin::Theme mode-->
    <div class="d-flex align-items-center ms-3 ms-lg-4">
      <!--begin::Menu toggle-->
      <a
        href="#"
        class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px"
        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <KTIcon
          icon-name="night-day"
          icon-class="theme-light-show fs-2 fs-md-1"
        />
        <KTIcon icon-name="moon" icon-class="theme-dark-show fs-2 fs-md-1" />
      </a>
      <!--begin::Menu toggle-->
      <KTThemeModeSwitcher></KTThemeModeSwitcher>
    </div>
    <!--end::Theme mode-->

    <div class="d-flex align-items-center ms-3 ms-lg-4 d-xxl-none">
      <button
        class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px2"
        id="kt_sidebar_toggler"
      >
        <KTIcon icon-name="setting-2" icon-class="fs-1" />
      </button>
    </div>
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTSearch from "@/layouts/default-layout/components/search/Search.vue";
import KTThemeModeSwitcher from "@/layouts/default-layout/components/theme-mode/ThemeModeSwitcher.vue";

export default defineComponent({
  name: "layout-topbar",
  components: {
    KTSearch,
    KTThemeModeSwitcher,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
