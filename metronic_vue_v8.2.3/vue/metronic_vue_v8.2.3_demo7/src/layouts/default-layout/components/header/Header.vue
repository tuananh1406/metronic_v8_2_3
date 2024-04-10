<template>
  <!--begin::Header-->
  <div
    id="kt_header"
    class="header"
    :data-kt-sticky="isHeaderSticky"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}"
  >
    <!--begin::Container-->
    <div
      class="d-flex align-items-center justify-content-between"
      :class="{
        'container-fluid': headerWidthFluid,
        'container-xxl': !headerWidthFluid,
      }"
      id="kt_header_container"
    >
      <PageTitle />

      <!--begin::Wrapper-->
      <div class="d-flex d-lg-none align-items-center ms-n2 me-2">
        <!--begin::Aside mobile toggle-->
        <div class="btn btn-icon btn-active-icon-primary" id="kt_aside_toggle">
          <KTIcon icon-name="abstract-14" icon-class="fs-2x" />
        </div>
        <!--end::Aside mobile toggle-->

        <!--begin::Logo-->
        <a href="#" class="d-flex align-items-center">
          <img
            alt="Logo"
            :src="getAssetPath('media/logos/demo7.svg')"
            class="h-30px"
          />
        </a>
        <!--end::Logo-->
      </div>
      <!--end::Wrapper-->

      <KTTopbar></KTTopbar>
    </div>
    <!--end::Container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent } from "vue";
import KTTopbar from "@/layouts/default-layout/components/header/Topbar.vue";
import PageTitle from "@/layouts/default-layout/components/toolbar/PageTitle.vue";
import {
  headerFixed,
  headerFixedOnMobile,
  headerWidthFluid,
} from "@/layouts/default-layout/config/helper";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";

export default defineComponent({
  name: "KTHeader",
  components: {
    KTIcon,
    KTTopbar,
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
      isHeaderSticky,
      getAssetPath,
    };
  },
});
</script>
