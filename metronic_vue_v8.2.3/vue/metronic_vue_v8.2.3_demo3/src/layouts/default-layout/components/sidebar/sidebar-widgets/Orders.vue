<template>
  <div class="card card-flush card-p-0 card-reset mb-5">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0">
      <!--begin::Title-->
      <h3 class="card-title fw-bolder text-white fs-3">Latest Orders</h3>
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
        <Dropdown3 />
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
          <!--begin::Image-->
          <div class="symbol symbol-40px symbol-2by3 me-4">
            <img :src="item.image" alt="" class="mw-100" />
          </div>
          <!--end::Image-->

          <!--begin::Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
            <a href="#" class="text-white fw-bold text-hover-primary fs-6">
              {{ item.title }}
            </a>
            <span class="sidebar-text-muted fw-bold fs-7 my-1">
              {{ item.desc }}
            </span>
          </div>
          <!--end::Title-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end: Card Body-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "sidebar-widgets-orders",
  components: {
    Dropdown3,
  },
  setup() {
    const items = [
      {
        image: getAssetPath("media/stock/600x400/img-20.jpg"),
        title: "Premium Coffee",
        desc: "Arabica Specialty Brand",
      },
      {
        image: getAssetPath("media/stock/600x400/img-25.jpg"),
        title: "Light Sneakers",
        desc: "The Best Lightweight Sneakers",
      },
      {
        image: getAssetPath("media/stock/600x400/img-24.jpg"),
        title: "Red Boots",
        desc: "All Season Boots",
      },
      {
        image: getAssetPath("media/stock/600x400/img-19.jpg"),
        title: "Wall Decoration",
        desc: "Creative & Easy To Install",
      },
      {
        image: getAssetPath("media/stock/600x400/img-27.jpg"),
        title: "Home Confort",
        desc: "Smart Air Purifier",
      },
    ];

    return {
      items,
      getAssetPath,
    };
  },
});
</script>
