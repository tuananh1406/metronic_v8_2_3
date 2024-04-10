<template>
  <!--begin::Header-->
  <div id="kt_header" class="header align-items-stretch">
    <!--begin::Container-->
    <div
      class="d-flex align-items-stretch justify-content-between"
      :class="{
        'container-fluid': headerWidthFluid,
        'container-xxl': !headerWidthFluid,
      }"
    >
      <!--begin::Brand-->
      <div
        class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 w-lg-225px me-5"
      >
        <!--begin::Aside mobile toggle-->
        <div
          class="btn btn-icon btn-active-icon-primary ms-n2 me-2 d-flex d-lg-none"
          id="kt_aside_toggle"
        >
          <KTIcon icon-name="abstract-14" icon-class="fs-1" />
        </div>
        <!--end::Aside mobile toggle-->

        <!--begin::Logo-->
        <a href="#">
          <img
            alt="Logo"
            :src="getAssetPath('media/logos/demo5.svg')"
            class="d-none d-lg-inline h-30px"
          />
          <img
            alt="Logo"
            :src="getAssetPath('media/logos/demo5-mobile.svg')"
            class="d-lg-none h-25px"
          />
        </a>
        <!--end::Logo-->
      </div>
      <!--end::Brand-->

      <!--begin::Wrapper-->
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
      >
        <!--begin::Navbar-->
        <div class="d-flex align-items-stretch" id="kt_header_nav">
          <KTMenu />
        </div>
        <!--end::Navbar-->

        <KTTopbar />
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