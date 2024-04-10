<template>
  <!--begin::Header-->
  <div id="kt_header" style="" class="header bg-body align-items-stretch">
    <!--begin::Container-->
    <div
      :class="{
        'container-fluid': headerWidthFluid,
        'container-xxl': !headerWidthFluid,
      }"
      class="d-flex align-items-stretch justify-content-between"
    >
      <!--begin::Aside mobile toggle-->
      <div
        class="d-flex align-items-center d-lg-none ms-n3 me-1"
        title="Show aside menu"
      >
        <div
          class="btn btn-icon btn-active-color-primary w-40px h-40px"
          id="kt_aside_toggle"
        >
          <KTIcon icon-name="abstract-14" icon-class="fs-1" />
        </div>
      </div>
      <!--end::Aside mobile toggle-->

      <!--begin::Mobile logo-->
      <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
        <a href="#" class="d-lg-none">
          <img
            alt="Logo"
            :src="getAssetPath('media/logos/demo4-mobile.svg')"
            class="h-25px"
          />
        </a>
      </div>
      <!--end::Mobile logo-->

      <div id="kt_toolbar_container" class="d-flex align-items-center">
        <KTPageTitle />
      </div>

      <!--begin::Wrapper-->
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
      >
        <!--begin::Navbar-->
        <div class="d-flex align-items-stretch" id="kt_header_menu_nav">
          <KTMenu></KTMenu>
        </div>
        <!--end::Navbar-->

        <!--begin::Topbar-->
        <div class="d-flex align-items-stretch flex-shrink-0">
          <KTTopbar></KTTopbar>
        </div>
        <!--end::Topbar-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTTopbar from "@/layouts/default-layout/components/header/Topbar.vue";
import KTPageTitle from "@/layouts/default-layout/components/page-title/PageTitle.vue";
import KTMenu from "@/layouts/default-layout/components/header/Menu.vue";

import {
  asideDisplay,
  headerLeft,
  headerWidthFluid,
} from "@/layouts/default-layout/config/helper";

export default defineComponent({
  name: "KTHeader",
  components: {
    KTTopbar,
    KTMenu,
    KTPageTitle,
  },
  setup() {
    return {
      headerWidthFluid,
      headerLeft,
      asideDisplay,
      getAssetPath,
    };
  },
});
</script>