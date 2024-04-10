<template>
  <div class="card-header border-0">
    <h3 class="card-title fw-bold text-gray-900">Notifications</h3>
  </div>

  <div class="card-body pt-0">
    <template v-for="(item, index) in list" :key="index">
      <!--begin::Item-->
      <div
        :class="['mb-7' && list.length - 1 !== index, `bg-light-${item.color}`]"
        class="d-flex align-items-center rounded p-5 mb-7"
      >
        <!--begin::Icon-->
        <KTIcon
          :icon-name="item.icon"
          :icon-class="`text-${item.color} fs-1 me-5`"
        />
        <!--end::Icon-->

        <!--begin::Title-->
        <div class="flex-grow-1 me-2">
          <a href="#" class="fw-bold text-gray-800 text-hover-primary fs-6">{{
            item.title
          }}</a>

          <span class="text-muted fw-semibold d-block">{{ item.text }}</span>
        </div>
        <!--end::Title-->

        <!--begin::Lable-->
        <span :class="`text-${item.color}`" class="fw-bold py-1">{{
          item.number
        }}</span>
        <!--end::Lable-->
      </div>
      <!--end::Item-->
    </template>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-notifications",
  components: {},
  setup() {
    const list = ref([
      {
        color: "warning",
        icon: "abstract-26",
        title: "Group lunch celebration",
        text: "Due in 2 Days",
        number: "+28%",
      },
      {
        color: "primary",
        icon: "file-added",
        title: "Navigation optimization",
        text: "Due in 2 Days",
        number: "+50%",
      },
      {
        color: "danger",
        icon: "message-text-2",
        title: "Humbert Bresnen",
        text: "Due in 5 Days",
        number: "-27%",
      },
      {
        color: "info",
        icon: "briefcase",
        title: "Air B & B - Real Estate",
        text: "Due in 8 Days",
        number: "+21%",
      },
      {
        color: "primary",
        icon: "arrows-loop",
        title: "B & Q - Food Company",
        text: "Due in 6 Days",
        number: "+12%",
      },
      {
        color: "danger",
        icon: "pencil",
        title: "Nexa - Next generation",
        text: "Due in 4 Days",
        number: "+34%",
      },
    ]);

    return {
      list,
      getAssetPath,
    };
  },
});
</script>
