<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside overflow-visible bg-primary"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
  >
    <!--begin::Logo-->
    <div
      class="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-8"
      id="kt_aside_logo"
    >
      <router-link to="/dashboard">
        <img
          alt="Logo"
          :src="getAssetPath('media/logos/demo4.svg')"
          class="h-55px"
        />
      </router-link>
    </div>
    <!--end::Logo-->

    <!--begin::Nav-->
    <div
      class="aside-nav d-flex flex-column align-lg-center flex-column-fluid w-100 pt-5 pt-lg-0"
      id="kt_aside_nav"
    >
      <KTMenu />
    </div>
    <!--end::Nav-->

    <!--begin::Footer-->
    <div
      class="aside-footer d-flex flex-column align-items-center flex-column-auto"
      id="kt_aside_footer"
    >
      <!--begin::Menu-->
      <div class="mb-7">
        <button
          type="button"
          class="btn btm-sm btn-icon btn-color-white btn-active-color-primary btn-active-light"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
        >
          <KTIcon icon-name="element-11" icon-class="fs-2 fs-lg-1" />
        </button>
        <Dropdown2 />
      </div>
      <!--end::Menu-->
    </div>
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import KTMenu from "@/layouts/default-layout/components/aside/Menu.vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import { asideTheme } from "@/layouts/default-layout/config/helper";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
    Dropdown2,
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {
    const { t } = useI18n();

    return {
      asideTheme,
      t,
      getAssetPath,
    };
  },
});
</script>