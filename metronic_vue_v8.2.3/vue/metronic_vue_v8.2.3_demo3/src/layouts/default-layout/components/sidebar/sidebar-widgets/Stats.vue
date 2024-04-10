<template>
  <!--begin::Statistics Widget-->
  <div class="card card-flush card-p-0 card-reset mb-10">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0">
      <!--begin::Title-->
      <h3 class="card-title fw-bolder text-white fs-3">{{ title }}</h3>
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
        <Dropdown2 />
      </div>
      <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Row-->
      <div class="row g-5">
        <!--begin::Col-->
        <div class="col-6">
          <!--begin::Item-->
          <div
            class="sidebar-border-dashed d-flex flex-column justify-content-center rounded p-3 p-xxl-5"
          >
            <!--begin::Value-->
            <div class="text-white fs-2 fs-xxl-2x fw-bolder mb-1">
              {{ stat1Value }}
            </div>
            <!--begin::Value-->

            <!--begin::Label-->
            <div class="sidebar-text-muted fs-6 fw-bold">
              {{ stat1Label }}
            </div>
            <!--end::Label-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-6">
          <!--begin::Item-->
          <div
            class="sidebar-border-dashed d-flex flex-column justify-content-center rounded p-3 p-xxl-5"
          >
            <!--begin::Value-->
            <div class="text-white fs-2 fs-xxl-2x fw-bolder mb-1">
              {{ stat2Value }}
            </div>
            <!--begin::Value-->

            <!--begin::Label-->
            <div class="sidebar-text-muted fs-6 fw-bold">
              {{ stat2Label }}
            </div>
            <!--end::Label-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-6">
          <!--begin::Item-->
          <div
            class="sidebar-border-dashed d-flex flex-column justify-content-center rounded p-3 p-xxl-5"
          >
            <!--begin::Value-->
            <div class="text-white fs-2 fs-xxl-2x fw-bolder mb-1">
              {{ stat3Value }}
            </div>
            <!--begin::Value-->

            <!--begin::Label-->
            <div class="sidebar-text-muted fs-6 fw-bold">
              {{ stat3Label }}
            </div>
            <!--end::Label-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-6">
          <!--begin::Item-->
          <div
            class="sidebar-border-dashed d-flex flex-column justify-content-center rounded p-3 p-xxl-5"
          >
            <!--begin::Value-->
            <div class="text-white fs-2 fs-xxl-2x fw-bolder mb-1">
              {{ stat4Value }}
            </div>
            <!--begin::Value-->

            <!--begin::Label-->
            <div class="sidebar-text-muted fs-6 fw-bold">
              {{ stat4Label }}
            </div>
            <!--end::Label-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Statistics Widget-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "sidebar-widget-stats",
  components: {
    Dropdown2,
  },
  props: {
    title: String,
    stat1Label: String,
    stat1Value: String,
    stat2Label: String,
    stat2Value: String,
    stat3Label: String,
    stat3Value: String,
    stat4Label: String,
    stat4Value: String,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
