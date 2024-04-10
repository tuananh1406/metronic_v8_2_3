<template>
  <div class="card card-flush card-p-0 card-reset mb-5">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0">
      <!--begin::Title-->
      <h3 class="card-title fw-bolder text-white fs-3">Latest Tasks</h3>
      <!--end::Title-->

      <!--begin::Toolbar-->
      <div class="card-toolbar">
        <button
          type="button"
          class="btn btn-icon btn-icon-white btn-active-color-primary me-n4"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="bottom-end"
        >
          <KTIcon icon-name="category" icon-class="fs-2" />
        </button>
        <Dropdown1 />
      </div>
      <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-0">
      <template v-for="(item, index) in items" :key="index">
        <!--begin::Item-->
        <div
          class="d-flex flex-nowrap align-items-center"
          :class="items.length - 1 !== index ? 'mb-7' : ''"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-50px me-5">
            <span class="symbol-label sidebar-bg-muted">
              <KTIcon
                :icon-name="item.icon"
                :icon-class="`fs-2x text-${item.color}`"
              />
            </span>
          </div>
          <!--end::Symbol-->

          <!--begin::Text-->
          <div class="d-flex flex-column">
            <a href="#" class="text-white text-hover-primary fs-6 fw-bolder">{{
              item.title
            }}</a>

            <span class="sidebar-text-muted fw-bold">{{
              item.description
            }}</span>
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";

export default defineComponent({
  name: "sidebar-widget-tasks",
  components: {
    Dropdown1,
  },
  setup() {
    const items = [
      {
        icon: "abstract-26",
        color: "success",
        title: "Project Briefing",
        description: "Project Manager",
      },
      {
        icon: "pencil",
        color: "warning",
        title: "Concept Design",
        description: "Art Director",
      },
      {
        icon: "message-text-2",
        color: "primary",
        title: "Functional Logics",
        description: "Lead Developer",
      },
      {
        icon: "disconnect",
        color: "danger",
        title: "Development",
        description: "DevOps",
      },
      {
        icon: "security-user",
        color: "info",
        title: "Testing",
        description: "QA Managers",
      },
    ];

    return {
      items,
      getAssetPath,
    };
  },
});
</script>
