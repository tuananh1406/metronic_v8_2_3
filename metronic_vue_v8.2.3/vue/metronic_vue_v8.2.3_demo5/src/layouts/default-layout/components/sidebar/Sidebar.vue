<template>
  <!--begin::Sidebar-->
  <div
    class="sidebar p-5 px-lg-0 py-lg-11"
    data-kt-drawer="true"
    data-kt-drawer-name="sidebar"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="275px"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_sidebar_toggle"
  >
    <SidebarSearch />

    <LatestTutorials />

    <PopularQuestions />
  </div>
  <!--end::Sidebar-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarSearch from "@/layouts/default-layout/components/sidebar/SidebarSearch.vue";
import LatestTutorials from "@/layouts/default-layout/components/sidebar/LatestTutorials.vue";
import PopularQuestions from "@/layouts/default-layout/components/sidebar/PopularQuestions.vue";

export default defineComponent({
  name: "kt-component",
  components: {
    SidebarSearch,
    LatestTutorials,
    PopularQuestions,
  },
});
</script>
