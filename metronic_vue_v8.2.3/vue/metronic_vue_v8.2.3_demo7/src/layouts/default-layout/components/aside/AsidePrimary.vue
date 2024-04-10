<template>
  <div
    class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto"
  >
    <div
      class="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10"
      id="kt_aside_logo"
    >
      <a href="#">
        <img
          alt="Logo"
          :src="getAssetPath('media/logos/demo7.svg')"
          class="h-30px"
        />
      </a>
    </div>

    <div
      class="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0"
      id="kt_aside_nav"
    >
      <div
        class="hover-scroll-y mb-10"
        data-kt-scroll="true"
        data-kt-scroll-activate="{default: false, lg: true}"
        data-kt-scroll-height="auto"
        data-kt-scroll-wrappers="#kt_aside_nav"
        data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
        data-kt-scroll-offset="0px"
      >
        <ul class="nav flex-column">
          <li
            @click="enableSecondarySidebar"
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            data-bs-original-title="Projects"
          >
            <a
              class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light active"
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_projects"
            >
              <KTIcon icon-name="element-11" icon-class="fs-2x" />
            </a>
          </li>

          <li
            @click="enableSecondarySidebar"
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            data-bs-original-title="Menu"
          >
            <a
              class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light"
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_menu"
            >
              <KTIcon icon-name="briefcase" icon-class="fs-2x" />
            </a>
          </li>

          <li
            @click="enableSecondarySidebar"
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            data-bs-original-title="Subscription"
          >
            <a
              class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light"
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_subscription"
            >
              <KTIcon icon-name="chart-simple" icon-class="fs-2x" />
            </a>
          </li>

          <li
            @click="enableSecondarySidebar"
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            data-bs-original-title="Tasks"
          >
            <a
              class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light"
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_tasks"
            >
              <KTIcon icon-name="shield-tick" icon-class="fs-2x" />
            </a>
          </li>

          <li
            @click="enableSecondarySidebar"
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            data-bs-original-title="Notifications"
          >
            <a
              class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light"
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_notifications"
            >
              <KTIcon icon-name="abstract-26" icon-class="fs-2x" />
            </a>
          </li>

          <li
            @click="enableSecondarySidebar"
            class="nav-item mb-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            data-bs-dismiss="click"
            data-bs-original-title="Authors"
          >
            <a
              class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light"
              data-bs-toggle="tab"
              href="#kt_aside_nav_tab_authors"
            >
              <KTIcon icon-name="add-files" icon-class="fs-2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="aside-footer d-flex flex-column align-items-center flex-column-auto"
      id="kt_aside_footer"
    >
      <div class="d-flex align-items-center mb-2">
        <div
          class="btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-kt-menu-flip="top-end"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="Quick links"
        >
          <KTIcon icon-name="element-plus" icon-class="fs-2 fs-lg-1" />
        </div>
        <KTQuickLinksMenu></KTQuickLinksMenu>
      </div>

      <div class="d-flex align-items-center mb-2">
        <div
          class="btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-kt-menu-flip="top-end"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="Notifications"
        >
          <KTIcon icon-name="element-11" icon-class="fs-2 fs-lg-1" />
        </div>
        <KTNotificationsMenu></KTNotificationsMenu>
      </div>

      <div class="d-flex align-items-center mb-3">
        <div
          class="btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-kt-menu-flip="top-end"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="Activity Logs"
          id="kt_activities_toggle"
        >
          <KTIcon icon-name="chart-simple" icon-class="fs-2 fs-lg-1" />
        </div>
      </div>

      <div
        class="d-flex align-items-center mb-10"
        id="kt_header_user_menu_toggle"
      >
        <div
          class="cursor-pointer symbol symbol-40px"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
          data-kt-menu-flip="top-end"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-dismiss="click"
          title="User profile"
        >
          <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="metronic" />
        </div>
        <KTUserMenu></KTUserMenu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTQuickLinksMenu from "@/layouts/default-layout/components/menus/QuickLinksMenu.vue";
import KTNotificationsMenu from "@/layouts/default-layout/components/menus/NotificationsMenu.vue";
import KTUserMenu from "@/layouts/default-layout/components/menus/UserAccountMenu.vue";

export default defineComponent({
  name: "kt-aside-primary",
  components: {
    KTQuickLinksMenu,
    KTNotificationsMenu,
    KTUserMenu,
  },
  setup() {
    const enableSecondarySidebar = () => {
      document.body.setAttribute("data-kt-aside-minimize", "off");
    };

    return {
      getAssetPath,
      enableSecondarySidebar,
    };
  },
});
</script>
