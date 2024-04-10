<template>
  <!--begin::Popular Questions-->
  <div class="card bg-light mb-5 mb-lg-10 shadow-none border-0">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0">
      <!--begin::Title-->
      <h3 class="card-title fw-bold text-gray-900 fs-3">Latest Tutorials</h3>
      <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-0">
      <template v-for="(tutorial, i) in tutorials" :key="i">
        <!--begin::Item-->
        <div class="d-flex" :class="[tutorials.length - 1 !== i && 'mb-5']">
          <!--begin::Arrow-->
          <KTIcon icon-name="right-square" icon-class="fs-2 mt-0 me-2" />
          <!--end::Arrow-->

          <!--begin::Title-->
          <router-link
            to="/apps/devs/question"
            class="text-gray-700 text-hover-primary fs-6 fw-semibold"
          >
            {{ tutorial }}
          </router-link>
          <!--end::Title-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end: Card Body-->
  </div>
  <!--end::Popular Questions-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-latest-tutorials",
  components: {},
  setup() {
    const tutorials = ref([
      "How to use customize Metronoc's SASS",
      "How to change web font globally",
      "How to setup dark mode",
      "Metronic file structure and build tools",
      "Metronic integration with Blazor server side",
    ]);

    return {
      tutorials,
      getAssetPath,
    };
  },
});
</script>
