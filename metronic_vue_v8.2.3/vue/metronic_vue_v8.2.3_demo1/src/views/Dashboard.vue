<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
    <!--begin::Col-->
    <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
      <Widget1
        className="h-md-50 mb-5 mb-xl-10"
        description="Active Projects"
        bgColor="#F1416C"
        :bgImage="getAssetPath('media/patterns/vector-1.png')"
      />

      <Widget2
        className="h-md-50 mb-5 mb-xl-10"
        :icon="false"
        stats="357"
        description="Professionals"
        labelColor="dark"
        textColor="gray-300"
      />
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
      <Widget3 className="h-md-50 mb-5 mb-xl-10" :chartSize="70" />

      <Widget4 className="h-lg-50" />
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xxl-6">
      <Widget5 className="h-md-100" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row gx-5 gx-xl-10">
    <!--begin::Col-->
    <div class="col-xxl-6 mb-5 mb-xl-10">
      <Widget6 className="h-xl-100" height="275px" />
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6 mb-5 mb-xl-10">
      <Widget7 className="h-xl-100" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
    <!--begin::Col-->
    <div class="col-xxl-6">
      <Widget8
        className="h-xl-100"
        :image="getAssetPath('media/stock/600x600/img-65.jpg')"
      />
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <Widget9 className="h-lg-100" :height="300" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
    <!--begin::Col-->
    <div class="col-xl-4">
      <MixedWidget5
        widget-classes="card-xl-stretch mb-xl-8 h-md-100"
        chart-color="primary"
        chart-height="150"
      ></MixedWidget5>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-8">
      <Widget10 className="h-md-100" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Widget1 from "@/components/dashboard-default-widgets/Widget1.vue";
import Widget2 from "@/components/dashboard-default-widgets/Widget2.vue";
import Widget3 from "@/components/dashboard-default-widgets/Widget3.vue";
import Widget4 from "@/components/dashboard-default-widgets/Widget4.vue";
import Widget5 from "@/components/dashboard-default-widgets/Widget5.vue";
import Widget6 from "@/components/dashboard-default-widgets/Widget6.vue";
import Widget7 from "@/components/dashboard-default-widgets/Widget7.vue";
import Widget8 from "@/components/dashboard-default-widgets/Widget8.vue";
import Widget9 from "@/components/dashboard-default-widgets/Widget9.vue";
import Widget10 from "@/components/dashboard-default-widgets/Widget10.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";

export default defineComponent({
  name: "main-dashboard",
  components: {
    Widget1,
    Widget2,
    Widget3,
    Widget4,
    Widget5,
    Widget6,
    Widget7,
    Widget8,
    Widget9,
    Widget10,
    MixedWidget5,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
