<template>
  <!--begin::Header-->
  <div class="card-header border-0 pt-5">
    <h3 class="card-title align-items-start flex-column">
      <span class="card-label fw-bold text-gray-900">Tasks Overview</span>
    </h3>
  </div>
  <!--end::Header-->

  <!--begin::Body-->
  <div class="card-body pt-5">
    <template v-for="(item, index) in items" :key="index">
      <!--begin::Item-->
      <div
        :class="{ 'mb-7': items.length - 1 !== index }"
        class="d-flex align-items-center"
      >
        <!--begin::Symbol-->
        <div class="symbol symbol-50px me-5">
          <span :class="`bg-light-${item.color}`" class="symbol-label">
            <KTIcon
              :icon-name="item.icon"
              :icon-class="`text-${item.color} fs-2x`"
            />
          </span>
        </div>
        <!--end::Symbol-->

        <!--begin::Text-->
        <div class="d-flex flex-column">
          <a href="#" class="text-gray-900 text-hover-primary fs-6 fw-bold">{{
            item.title
          }}</a>

          <span class="text-muted fw-semibold">{{ item.description }}</span>
        </div>
        <!--end::Text-->
      </div>
      <!--end::Item-->
    </template>
  </div>
  <!--end::Body-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-tasks-overview",
  components: {},
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
      {
        icon: "file-up",
        color: "success",
        title: "HTML, CSS Coding",
        description: "Art Director",
      },
      {
        icon: "chart-pie-4",
        color: "danger",
        title: "ReactJS Developer",
        description: "Web, UI/UX Design",
      },
    ];

    return {
      items,
    };
  },
});
</script>
