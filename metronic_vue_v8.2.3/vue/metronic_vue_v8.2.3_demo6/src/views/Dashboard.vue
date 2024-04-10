<template>
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        icon-name="basket"
        color="danger"
        icon-color="white"
        title="Shopping Cart"
        description="Lands, Houses, Ranchos, Farms"
      />
    </div>

    <div class="col-xl-4">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        icon-name="cheque"
        color="primary"
        icon-color="white"
        title="Appartments"
        description="Flats, Shared Rooms, Duplex"
      />
    </div>

    <div class="col-xl-4">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        icon-name="chart-simple-3"
        color="success"
        icon-color="white"
        title="Sales Stats"
        description="50% Increased for FY20"
      />
    </div>
  </div>

  <div class="row gy-5 g-xl-8">
    <div class="col-xl-4">
      <MixedWidget3
        widget-classes="card-xl-stretch mb-xl-8"
        chart-color="primary"
        chart-height="150"
      />
    </div>

    <div class="col-xl-4">
      <MixedWidget4
        widget-classes="card-xl-stretch"
        chart-height="225"
        chart-color="primary"
      />
    </div>

    <div class="col-xl-4">
      <MixedWidget5
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        chart-color="danger"
        chart-height="150"
      />
    </div>
  </div>

  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-4">
      <ListsWidget7 widget-classes="card-xxl-stretch" />
    </div>

    <div class="col-xxl-8">
      <TablesWidget9 widget-classes="card-xxl-stretch mb-5 mb-xl-8" />
    </div>
  </div>

  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <ListsWidget4 widget-classes="card-xl-stretch mb-xl-8" />
    </div>

    <div class="col-xl-4">
      <ListsWidget5 widget-classes="card-xl-stretch mb-xl-8" />
    </div>

    <div class="col-xl-4">
      <ListsWidget3 widget-classes="card-xl-stretch mb-5 mb-xl-8" />
    </div>
  </div>

  <div class="g-5 gx-xxl-8">
    <TablesWidget10 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";
import MixedWidget3 from "@/components/widgets/mixed/Widget3.vue";
import MixedWidget4 from "@/components/widgets/mixed/Widget4.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
import ListsWidget7 from "@/components/widgets/lists/Widget7.vue";
import TablesWidget9 from "@/components/widgets/tables/Widget9.vue";
import ListsWidget4 from "@/components/widgets/lists/Widget4.vue";
import ListsWidget5 from "@/components/widgets/lists/Widget5.vue";
import ListsWidget3 from "@/components/widgets/lists/Widget3.vue";
import TablesWidget10 from "@/components/widgets/tables/Widget10.vue";

export default defineComponent({
  name: "dashboard-main",
  components: {
    StatisticsWidget5,
    MixedWidget3,
    MixedWidget4,
    MixedWidget5,
    ListsWidget7,
    TablesWidget9,
    ListsWidget4,
    ListsWidget5,
    ListsWidget3,
    TablesWidget10,
  },
});
</script>
