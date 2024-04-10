<template>
  <!--begin::Menu wrapper-->
  <div
    class="header-menu align-items-stretch"
    data-kt-drawer="true"
    data-kt-drawer-name="header-menu"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
    data-kt-swapper="true"
    data-kt-swapper-mode="prepend"
    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
  >
    <!--begin::Menu-->
    <div
      class="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-state-primary menu-title-gray-600 menu-arrow-gray-500 fw-semibold fs-6 my-5 my-lg-0 px-2 px-lg-0 align-items-stretch"
      id="#kt_header_menu"
      data-kt-menu="true"
    >
      <template v-for="(item, i) in MainMenuConfig" :key="i">
        <template v-if="!item.pages">
          <div v-if="item.heading" class="menu-item me-lg-1">
            <router-link
              v-if="item.route"
              class="menu-link"
              :to="item.route"
              active-class="active"
            >
              <span class="menu-title">{{ translate(item.heading) }}</span>
            </router-link>
          </div>
        </template>
        <template v-if="item.pages">
          <div
            v-if="item.sectionTitle"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-start"
            class="menu-item menu-lg-down-accordion me-lg-1"
          >
            <span
              v-if="item.route"
              class="menu-link py-3"
              :class="{ active: hasActiveChildren(item.route) }"
            >
              <span class="menu-title">{{ translate(item.sectionTitle) }}</span>
              <span class="menu-arrow d-lg-none"></span>
            </span>
            <div
              class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
            >
              <template v-for="(menuItem, j) in item.pages" :key="j">
                <div
                  v-if="menuItem.sectionTitle"
                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                  data-kt-menu-placement="right-start"
                  class="menu-item menu-lg-down-accordion"
                >
                  <span
                    v-if="menuItem.route"
                    class="menu-link py-3"
                    :class="{ active: hasActiveChildren(menuItem.route) }"
                  >
                    <span class="menu-icon">
                      <i
                        v-if="headerMenuIcons === 'bootstrap'"
                        :class="menuItem.bootstrapIcon"
                        class="bi fs-3"
                      ></i>
                      <KTIcon
                        v-if="headerMenuIcons === 'keenthemes'"
                        :icon-name="menuItem.keenthemesIcon"
                        icon-class="fs-2"
                      />
                    </span>
                    <span class="menu-title">{{
                      translate(menuItem.sectionTitle)
                    }}</span>
                    <span class="menu-arrow"></span>
                  </span>
                  <div
                    class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px"
                  >
                    <template v-for="(menuItem1, k) in menuItem.sub" :key="k">
                      <div
                        v-if="menuItem1.sectionTitle"
                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        class="menu-item menu-lg-down-accordion"
                      >
                        <span
                          v-if="menuItem1.route"
                          class="menu-link py-3"
                          :class="{
                            active: hasActiveChildren(menuItem1.route),
                          }"
                        >
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span class="menu-title">{{
                            translate(menuItem1.sectionTitle)
                          }}</span>
                          <span class="menu-arrow"></span>
                        </span>
                        <div
                          class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px"
                        >
                          <template
                            v-for="(menuItem2, l) in menuItem1.sub"
                            :key="l"
                          >
                            <div class="menu-item">
                              <router-link
                                v-if="menuItem2.route && menuItem2.heading"
                                class="menu-link py-3"
                                active-class="active"
                                :to="menuItem2.route"
                              >
                                <span class="menu-bullet">
                                  <span class="bullet bullet-dot"></span>
                                </span>
                                <span class="menu-title">{{
                                  translate(menuItem2.heading)
                                }}</span>
                              </router-link>
                            </div>
                          </template>
                        </div>
                      </div>
                      <div v-if="menuItem1.heading" class="menu-item">
                        <router-link
                          v-if="menuItem1.route"
                          class="menu-link"
                          active-class="active"
                          :to="menuItem1.route"
                        >
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span class="menu-title">{{
                            translate(menuItem1.heading)
                          }}</span>
                        </router-link>
                      </div>
                    </template>
                  </div>
                </div>
                <div v-if="menuItem.heading" class="menu-item">
                  <router-link
                    v-if="menuItem.route"
                    class="menu-link"
                    active-class="active"
                    :to="menuItem.route"
                  >
                    <span class="menu-icon">
                      <KTIcon icon-name="element-8" icon-class="fs-2" />
                    </span>
                    <span class="menu-title">{{
                      translate(menuItem.heading)
                    }}</span>
                  </router-link>
                </div>
              </template>
            </div>
          </div>
        </template>
      </template>

      <div
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion me-lg-1"
      >
        <span class="menu-link py-3">
          <span class="menu-title">{{ translate("resources") }}</span>
          <span class="menu-arrow d-lg-none"></span>
        </span>
        <div
          class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px"
        >
          <div class="menu-item">
            <a
              class="menu-link py-3"
              href="https://preview.keenthemes.com/metronic8/vue/docs/base/utilities"
            >
              <span class="menu-icon">
                <i
                  v-if="headerMenuIcons === 'bootstrap'"
                  class="bi bi-box fs-3"
                ></i>
                <KTIcon
                  v-if="headerMenuIcons === 'keenthemes'"
                  icon-name="rocket"
                  icon-class="fs-2"
                />
              </span>
              <span class="menu-title">{{ translate("components") }}</span>
            </a>
          </div>
          <div class="menu-item">
            <a
              class="menu-link py-3"
              href="https://preview.keenthemes.com/metronic8/vue/docs/index"
            >
              <span class="menu-icon">
                <i
                  v-if="headerMenuIcons === 'bootstrap'"
                  class="bi bi-card-text fs-3"
                ></i>
                <KTIcon
                  v-if="headerMenuIcons === 'keenthemes'"
                  icon-name="abstract-26"
                  icon-class="fs-2"
                />
              </span>
              <span class="menu-title">{{ translate("documentation") }}</span>
            </a>
          </div>
          <div class="menu-item">
            <a
              class="menu-link py-3"
              href="https://preview.keenthemes.com/metronic8/vue/docs/getting-started/changelog"
            >
              <span class="menu-icon">
                <i
                  v-if="headerMenuIcons === 'bootstrap'"
                  class="bi bi-journal-code fs-3"
                ></i>
                <KTIcon
                  v-if="headerMenuIcons === 'keenthemes'"
                  icon-name="code"
                  icon-class="fs-2"
                />
              </span>
              <span class="menu-title"
                >{{ translate("changelog") }} v{{ version }}</span
              >
            </a>
          </div>
        </div>
      </div>

      <div
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion me-lg-1"
      >
        <span class="menu-link py-3">
          <span class="menu-title">{{ translate("megaMenu") }}</span>
          <span class="menu-arrow d-lg-none"></span>
        </span>
        <div
          class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-600px p-5 p-lg-5"
          style=""
        >
          <!--begin:Row-->
          <div class="row" data-kt-menu-dismiss="true">
            <!--begin:Col-->
            <div class="col-lg-4 border-left-lg-1">
              <div class="menu-inline menu-column menu-active-bg">
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
              </div>
            </div>
            <!--end:Col-->
            <!--begin:Col-->
            <div class="col-lg-4 border-left-lg-1">
              <div class="menu-inline menu-column menu-active-bg">
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
              </div>
            </div>
            <!--end:Col-->
            <!--begin:Col-->
            <div class="col-lg-4 border-left-lg-1">
              <div class="menu-inline menu-column menu-active-bg">
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
              </div>
            </div>
            <!--end:Col-->
          </div>
          <!--end:Row-->
        </div>
      </div>
      <!--end::Menu-->
    </div>
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import MainMenuConfig from "@/layouts/default-layout/config/MainMenuConfig";
import { headerMenuIcons } from "@/layouts/default-layout/config/helper";
import { version } from "@/core/helpers/system";

export default defineComponent({
  name: "KTMenu",
  components: {},
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();

    const hasActiveChildren = (match: string) => {
      return route.path.indexOf(match) !== -1;
    };

    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    return {
      hasActiveChildren,
      headerMenuIcons,
      MainMenuConfig,
      translate,
      version,
      getAssetPath,
    };
  },
});
</script>
@/layouts/default-layout/config/MainMenuConfig@/layouts/default-layout/config/config