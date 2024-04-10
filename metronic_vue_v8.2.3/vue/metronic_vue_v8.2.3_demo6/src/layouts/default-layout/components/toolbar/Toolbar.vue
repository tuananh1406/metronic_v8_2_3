<template>
  <!--begin::Toolbar-->
  <div class="toolbar py-2" id="kt_toolbar">
    <!--begin::Container-->
    <div
      id="kt_toolbar_container"
      :class="{
        'container-fluid': toolbarWidthFluid,
        'container-xxl': !toolbarWidthFluid,
      }"
      class="d-flex flex-stack"
    >
      <PageTitle />

      <!--begin::Actions-->
      <div class="d-flex align-items-center flex-wrap">
        <!--begin::Wrapper-->
        <div class="flex-shrink-0 me-2">
          <ul class="nav">
            <li class="nav-item">
              <a
                class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light active fw-semibold fs-7 px-4 me-1"
                data-bs-toggle="tab"
                href="#"
                >Day</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-semibold fs-7 px-4 me-1"
                data-bs-toggle="tab"
                href=""
                >Week</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-semibold fs-7 px-4"
                data-bs-toggle="tab"
                href="#"
                >Year</a
              >
            </li>
          </ul>
        </div>
        <!--end::Wrapper-->

        <!--begin::Wrapper-->
        <div class="d-flex align-items-center">
          <!--begin::Actions-->
          <div class="d-flex align-items-center">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
              class="btn btn-sm btn-icon btn-color-primary btn-active-light btn-active-color-primary"
            >
              <KTIcon icon-name="add-files" icon-class="fs-2" />
            </button>
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Toolbar-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import PageTitle from "@/layouts/default-layout/components/page-title/PageTitle.vue";
import { toolbarWidthFluid } from "@/layouts/default-layout/config/helper";

export default defineComponent({
  name: "KToolbar",
  components: {
    PageTitle,
  },
  setup() {
    return {
      toolbarWidthFluid,
      getAssetPath,
    };
  },
});
</script>
