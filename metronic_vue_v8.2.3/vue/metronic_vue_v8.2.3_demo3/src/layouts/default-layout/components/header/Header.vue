<template>
  <!--begin::Header-->
  <div
    id="kt_header"
    class="header align-items-stretch"
    :data-kt-sticky="isHeaderSticky"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}"
  >
    <!--begin::Container-->
    <div
      id="kt_header_container"
      :class="{
        'container-fluid': headerWidthFluid,
        'container-xxl': !headerWidthFluid,
      }"
      class="d-flex flex-stack flex-wrap gap-2"
    >
      <div class="d-flex d-lg-none align-items-center ms-n2 me-2">
        <!--begin::Aside mobile toggle-->
        <div class="btn btn-icon btn-active-icon-primary" id="kt_aside_toggle">
          <KTIcon icon-name="abstract-14" icon-clss="fs-1 mt-1" />
        </div>
        <!--end::Aside mobile toggle-->

        <!--begin::Logo-->
        <router-link to="/dashboard" class="d-flex align-items-center">
          <img
            alt="Logo"
            :src="getAssetPath('media/logos/demo3.svg')"
            class="theme-light-show h-20px"
          />
          <img
            alt="Logo"
            :src="getAssetPath('media/logos/demo3-dark.svg')"
            class="theme-dark-show h-20px"
          />
        </router-link>
        <!--end::Logo-->
      </div>

      <PageTitle />

      <!--begin::Wrapper-->
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
      >
        <!--begin::Navbar-->
        <div class="d-flex align-items-stretch" id="kt_header_nav">
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
import { computed, defineComponent } from "vue";
import KTTopbar from "@/layouts/default-layout/components/header/Topbar.vue";
import PageTitle from "@/layouts/default-layout/components/page-title/PageTitle.vue";
import KTMenu from "@/layouts/default-layout/components/header/Menu.vue";

import {
  asideDisplay,
  headerFixed,
  headerFixedOnMobile,
  headerLeft,
  headerWidthFluid,
} from "@/layouts/default-layout/config/helper";

export default defineComponent({
  name: "KTHeader",
  components: {
    KTTopbar,
    KTMenu,
    PageTitle,
  },
  setup() {
    const isHeaderSticky = computed(() => {
      if (window.innerWidth > 768) {
        return headerFixed.value;
      } else {
        return headerFixedOnMobile.value;
      }
    });

    return {
      headerWidthFluid,
      headerLeft,
      asideDisplay,
      isHeaderSticky,
      getAssetPath,
    };
  },
});
</script>
