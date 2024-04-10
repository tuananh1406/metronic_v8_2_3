<template>
  <!--begin::Activities drawer-->
  <div
    id="kt_activities"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="activities"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_activities_toggle"
    data-kt-drawer-close="#kt_activities_close"
  >
    <CalendarApp1 />
  </div>
  <!--end::Activities drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import CalendarApp1 from "@/components/calendar/CalendarApp1.vue";

export default defineComponent({
  name: "kt-activity-drawer",
  components: {
    CalendarApp1,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
