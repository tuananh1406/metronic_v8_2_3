<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '225px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
  >
    <!--begin::Aside nav-->
    <div
      class="hover-scroll-overlay-y my-5 my-lg-5 w-100 ps-4 ps-lg-0 pe-4 me-1"
      id="kt_aside_menu_wrapper"
      data-kt-scroll="true"
      data-kt-scroll-activate="{default: false, lg: true}"
      data-kt-scroll-height="auto"
      data-kt-scroll-dependencies="#kt_header"
      data-kt-scroll-wrappers="#kt_aside"
      data-kt-scroll-offset="5px"
    >
      <!--begin::Menu-->
      <div
        class="menu menu-column menu-active-bg menu-hover-bg menu-title-gray-700 fs-6 menu-rounded w-100"
        id="#kt_aside_menu"
        data-kt-menu="true"
      >
        <!--begin::Heading-->
        <div class="menu-item">
          <div class="menu-content pb-2">
            <span class="menu-section text-muted text-uppercase fs-7 fw-bold"
              >Public</span
            >
          </div>
        </div>
        <!--end::Heading-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" active-class="active" class="menu-link">
            <span class="menu-title">All Questions</span>
            <span class="menu-badge">6,234</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link
            to="/apps/devs/search"
            active-class="active"
            class="menu-link"
          >
            <span class="menu-title">Search</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link
            to="/apps/devs/tag"
            active-class="active"
            class="menu-link"
          >
            <span class="menu-title">Tags</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link
            to="/apps/devs/ask"
            active-class="active"
            class="menu-link"
          >
            <span class="menu-title">Ask Question</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Heading-->
        <div class="menu-item pt-5">
          <div class="menu-content pb-2">
            <span class="menu-section text-muted text-uppercase fs-7 fw-bold"
              >My Activity</span
            >
          </div>
        </div>
        <!--end::Heading-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" class="menu-link">
            <span class="menu-title">My Questions</span>
            <span class="menu-badge">24</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" class="menu-link">
            <span class="menu-title">Resolved</span>
            <span class="menu-badge">120</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" class="menu-link">
            <span class="menu-title">Enrolled</span>
            <span class="menu-badge">10</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" class="menu-link">
            <span class="menu-title">Saved</span>
            <span class="menu-badge">6</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Heading-->
        <div class="menu-item pt-5">
          <div class="menu-content pb-2">
            <span class="menu-section text-muted text-uppercase fs-7 fw-bold"
              >Categories</span
            >
          </div>
        </div>
        <!--end::Heading-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" class="menu-link">
            <span class="menu-title">Metronic Admin</span>
            <span class="menu-badge">1,400</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" class="menu-link">
            <span class="menu-title">Backend Integration</span>
            <span class="menu-badge">235</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" class="menu-link">
            <span class="menu-title">Suggestions</span>
            <span class="menu-badge">25</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" class="menu-link">
            <span class="menu-title">Pre-sale Questions</span>
            <span class="menu-badge">145</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item">
          <router-link to="/dashboard" class="menu-link">
            <span class="menu-title">Laravel Starter Kit</span>
            <span class="menu-badge">750</span>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Collapse-->
        <div class="collapse" id="kt_aside_categories_more">
          <!--begin::Menu item-->
          <div class="menu-item">
            <router-link to="/dashboard" class="menu-link">
              <span class="menu-title">Blazor Integration</span>
              <span class="menu-badge">100</span>
            </router-link>
          </div>
          <!--end::Menu item-->

          <!--begin::Menu item-->
          <div class="menu-item">
            <router-link to="/dashboard" class="menu-link">
              <span class="menu-title">Django Dashboard</span>
              <span class="menu-badge">90</span>
            </router-link>
          </div>
          <!--end::Menu item-->

          <!--begin::Menu item-->
          <div class="menu-item">
            <router-link to="/dashboard" class="menu-link">
              <span class="menu-title">Rails CRUD</span>
              <span class="menu-badge">14</span>
            </router-link>
          </div>
          <!--end::Menu item-->

          <!--begin::Menu item-->
          <div class="menu-item">
            <router-link to="/dashboard" class="menu-link">
              <span class="menu-title">.NET Starter Kit</span>
              <span class="menu-badge">30</span>
            </router-link>
          </div>
          <!--end::Menu item-->
        </div>
        <!--end::Collapse-->

        <!--begin::Heading-->
        <div class="menu-item">
          <div class="menu-link">
            <router-link
              to="/dashboard"
              class="menu-title text-muted fs-7"
              id="kt_aside_categories_toggle"
              data-bs-toggle="collapse"
              data-bs-target="#kt_aside_categories_more"
            >
              More Categories
            </router-link>
          </div>
        </div>
        <!--end::Heading-->
      </div>
      <!--end::Menu-->
    </div>
    <!--end::Aside nav-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "KTAside",
  components: {},
  setup() {
    const { t } = useI18n();

    return {
      t,
      getAssetPath,
    };
  },
});
</script>
