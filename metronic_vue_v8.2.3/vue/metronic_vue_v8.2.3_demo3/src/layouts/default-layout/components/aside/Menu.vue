<template>
  <!--begin::Menu wrapper-->
  <div
    id="kt_aside_menu_wrapper"
    ref="scrollElRef"
    class="w-100 hover-scroll-overlay-y d-flex pe-2"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-height="auto"
    data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper"
    data-kt-scroll-offset="100"
  >
    <!--begin::Menu-->
    <div
      class="menu menu-column menu-rounded menu-sub-indention menu-active-bg fw-semibold my-auto"
      id="#kt_aside_menu"
      data-kt-menu="true"
    >
      <template v-for="(item, i) in MainMenuConfig" :key="i">
        <template v-if="!item.pages">
          <div class="menu-item">
            <router-link
              v-if="item.route && item.heading"
              class="menu-link"
              active-class="active"
              :to="item.route"
            >
              <span
                v-if="item.keenthemesIcon || item.bootstrapIcon"
                class="menu-icon"
              >
                <i
                  v-if="asideMenuIcons === 'bootstrap'"
                  :class="item.bootstrapIcon"
                  class="bi fs-8"
                ></i>
                <KTIcon
                  v-else-if="asideMenuIcons === 'keenthemes'"
                  :icon-name="item.keenthemesIcon"
                  icon-class="fs-5"
                />
              </span>
              <span class="menu-title">{{ translate(item.heading) }}</span>
            </router-link>
          </div>
        </template>
        <template v-if="item.pages">
          <div
            v-if="item.sectionTitle && item.route"
            :class="{ show: hasActiveChildren(item.route) }"
            class="menu-item menu-accordion"
            data-kt-menu-sub="accordion"
            data-kt-menu-trigger="click"
          >
            <span class="menu-link">
              <span
                v-if="item.keenthemesIcon || item.bootstrapIcon"
                class="menu-icon"
              >
                <i
                  v-if="asideMenuIcons === 'bootstrap'"
                  :class="item.bootstrapIcon"
                  class="bi fs-8"
                ></i>
                <KTIcon
                  v-else-if="asideMenuIcons === 'keenthemes'"
                  :icon-name="item.keenthemesIcon"
                  icon-class="fs-5"
                />
              </span>
              <span class="menu-title">{{ translate(item.sectionTitle) }}</span>
              <span class="menu-arrow"></span>
            </span>
            <div
              :class="{ show: hasActiveChildren(item.route) }"
              class="menu-sub menu-sub-accordion"
            >
              <template v-for="(menuItem, j) in item.pages" :key="j">
                <template v-if="menuItem.heading">
                  <div class="menu-item">
                    <router-link
                      v-if="menuItem.route"
                      class="menu-link"
                      active-class="active"
                      :to="menuItem.route"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">{{
                        translate(menuItem.heading)
                      }}</span>
                    </router-link>
                  </div>
                </template>
                <div
                  v-if="menuItem.sectionTitle && menuItem.route"
                  :class="{ show: hasActiveChildren(menuItem.route) }"
                  class="menu-item menu-accordion"
                  data-kt-menu-sub="accordion"
                  data-kt-menu-trigger="click"
                >
                  <span class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate(menuItem.sectionTitle)
                    }}</span>
                    <span class="menu-arrow"></span>
                  </span>
                  <div
                    v-if="menuItem.route"
                    :class="{ show: hasActiveChildren(menuItem.route) }"
                    class="menu-sub menu-sub-accordion"
                  >
                    <template v-for="(item2, k) in menuItem.sub" :key="k">
                      <div v-if="item2.heading" class="menu-item">
                        <router-link
                          v-if="item2.route"
                          class="menu-link"
                          active-class="active"
                          :to="item2.route"
                        >
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span class="menu-title">{{
                            translate(item2.heading)
                          }}</span>
                        </router-link>
                      </div>
                      <div
                        v-if="item2.sectionTitle && item2.route"
                        :class="{ show: hasActiveChildren(item2.route) }"
                        class="menu-item menu-accordion"
                        data-kt-menu-sub="accordion"
                        data-kt-menu-trigger="click"
                      >
                        <span class="menu-link">
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span class="menu-title">{{
                            translate(item2.sectionTitle)
                          }}</span>
                          <span class="menu-arrow"></span>
                        </span>
                        <div
                          :class="{ show: hasActiveChildren(item2.route) }"
                          class="menu-sub menu-sub-accordion"
                        >
                          <template v-for="(item3, k) in item2.sub" :key="k">
                            <div v-if="item3.heading" class="menu-item">
                              <router-link
                                v-if="item3.route"
                                class="menu-link"
                                active-class="active"
                                :to="item3.route"
                              >
                                <span class="menu-bullet">
                                  <span class="bullet bullet-dot"></span>
                                </span>
                                <span class="menu-title">{{
                                  translate(item3.heading)
                                }}</span>
                              </router-link>
                            </div>
                          </template>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </template>

      <div class="menu-item">
        <a
          class="menu-link"
          href="https://preview.keenthemes.com/metronic8/vue/docs/base/utilities"
        >
          <span class="menu-icon">
            <i
              v-if="asideMenuIcons === 'bootstrap'"
              class="bi bi-arrow-right fs-8"
            ></i>
            <KTIcon
              v-if="asideMenuIcons === 'keenthemes'"
              icon-name="black-right"
              icon-class="fs-5"
            />
          </span>
          <span class="menu-title">{{ translate("components") }}</span>
        </a>
      </div>

      <div class="menu-item">
        <a
          class="menu-link"
          href="https://preview.keenthemes.com/metronic8/vue/docs/index"
        >
          <span class="menu-icon">
            <i
              v-if="asideMenuIcons === 'bootstrap'"
              class="bi bi-arrow-right fs-8"
            ></i>
            <KTIcon
              v-if="asideMenuIcons === 'keenthemes'"
              icon-name="black-right"
              icon-class="fs-5"
            />
          </span>
          <span class="menu-title">{{ translate("documentation") }}</span>
        </a>
      </div>

      <div class="menu-item">
        <a
          class="menu-link"
          href="https://preview.keenthemes.com/metronic8/vue/docs/getting-started/changelog"
        >
          <span class="menu-icon">
            <i
              v-if="asideMenuIcons === 'bootstrap'"
              class="bi bi-arrow-right fs-8"
            ></i>
            <KTIcon
              v-if="asideMenuIcons === 'keenthemes'"
              icon-name="black-right"
              icon-class="fs-5"
            />
          </span>
          <span class="menu-title"
            >{{ translate("changelog") }} v{{ version }}</span
          >
        </a>
      </div>
    </div>
    <!--end::Menu-->
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { version } from "@/core/helpers/system";
import { asideMenuIcons } from "@/layouts/default-layout/config/helper";
import MainMenuConfig from "@/layouts/default-layout/config/MainMenuConfig";

export default defineComponent({
  name: "kt-menu",
  components: {},
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const hasActiveChildren = (match: string) => {
      return route.path.indexOf(match) !== -1;
    };

    return {
      hasActiveChildren,
      MainMenuConfig,
      asideMenuIcons,
      version,
      translate,
      getAssetPath,
    };
  },
});
</script>
@/layouts/default-layout/config/MainMenuConfig@/layouts/default-layout/config/config