<template>
  <!--begin:Search form-->
  <form id="kt_devs_search_form" class="form mb-6">
    <div class="d-flex">
      <!--begin::Form control-->
      <input
        type="text"
        class="form-control flex-grow-1 me-5"
        placeholder="Enter search query"
        name="query"
      />
      <!--end::Form control-->

      <!--begin::Submit-->
      <button
        type="submit"
        id="kt_devs_ask_submit"
        class="btn btn-primary flex-shrink-0"
      >
        Search Again
      </button>
      <!--begin::Submit-->
    </div>
  </form>
  <!--end:Search form-->

  <!--begin:Search info-->
  <div class="fw-semibold fw-base text-gray-600">
    56 results found for keyword “Laravel”
  </div>
  <!--end:Search info-->

  <!--begin::Separator-->
  <div class="separator separator-dashed border-gray-300 my-6"></div>
  <!--end::Separator-->

  <Questions />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import LayoutService from "@/core/services/LayoutService";
import Questions from "@/components/devs/Questions.vue";
import { LS_CONFIG_NAME_KEY } from "@/stores/config";

export default defineComponent({
  name: "dev-search",
  components: {
    Questions,
  },
  setup() {
    onMounted(() => {
      if (!localStorage.getItem(LS_CONFIG_NAME_KEY)) {
        LayoutService.enableSidebar();
      }
    });

    onUnmounted(() => {
      if (!localStorage.getItem(LS_CONFIG_NAME_KEY)) {
        LayoutService.disableSidebar();
      }
    });
  },
});
</script>
