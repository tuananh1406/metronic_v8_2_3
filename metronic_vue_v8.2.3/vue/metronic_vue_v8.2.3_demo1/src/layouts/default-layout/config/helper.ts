import { computed } from "vue";
import { useConfigStore } from "@/stores/config";
import { ThemeModeComponent } from "@/assets/ts/layout";

/**
 * Returns layout config
 */
export const config = computed(() => {
  return useConfigStore().config;
});

/**
 * Returns theme mode
 */
export const themeMode = computed(() => {
  if (useConfigStore().getLayoutConfig("general.mode") === "system") {
    return ThemeModeComponent.getSystemMode();
  }
  return useConfigStore().getLayoutConfig("general.mode");
});

/**
 * Returns the actual theme configuration mode
 */
export const themeConfigValue = computed(() => {
  return useConfigStore().getLayoutConfig("general.mode")
    ? (useConfigStore().getLayoutConfig("general.mode") as
        | "system"
        | "dark"
        | "light")
    : "system";
});

/**
 * Set the sidebar display
 */
export const displaySidebar = computed(() => {
  return useConfigStore().getLayoutConfig("sidebar.display");
});

/**
 * Sidebar toggle
 */
export const sidebarToggleDisplay = computed(() => {
  return useConfigStore().getLayoutConfig(
    "sidebar.default.minimize.desktop.enabled"
  );
});

/**
 * Check if footer container is fluid
 */
export const footerWidthFluid = computed(() => {
  return useConfigStore().getLayoutConfig("footer.container") === "fluid";
});

/**
 * Footer display
 */
export const footerDisplay = computed(() => {
  return useConfigStore().getLayoutConfig("footer.display");
});

/**
 * Check if header container is fluid
 */
export const headerWidthFluid = computed(() => {
  return (
    useConfigStore().getLayoutConfig("header.default.container") === "fluid"
  );
});

/**
 * Header display
 */
export const headerDisplay = computed(() => {
  return useConfigStore().getLayoutConfig("header.display");
});

/**
 * Returns header left part type
 */
export const headerLeft = computed(() => {
  return useConfigStore().getLayoutConfig("header.left");
});

/**
 * Returns header desktop fixed
 */
export const headerDesktopFixed = computed(() => {
  return useConfigStore().getLayoutConfig("header.default.fixed.desktop");
});

/**
 * Returns header mobile fixed
 */
export const headerMobileFixed = computed(() => {
  return useConfigStore().getLayoutConfig("header.default.fixed.mobile");
});

/**
 * Sidebar display
 */
export const sidebarDisplay = computed(() => {
  return useConfigStore().getLayoutConfig("sidebar.display");
});

/**
 * Layout type
 */
export const layout = computed(() => {
  return useConfigStore().getLayoutConfig("general.layout");
});

/**
 * Check if toolbar width is fluid
 */
export const toolbarWidthFluid = computed(() => {
  return useConfigStore().getLayoutConfig("toolbar.container") === "fluid";
});

/**
 * Set the toolbar display
 */
export const toolbarDisplay = computed(() => {
  return useConfigStore().getLayoutConfig("toolbar.display");
});

/**
 * Check if container width is fluid
 */
export const contentWidthFluid = computed(() => {
  return useConfigStore().getLayoutConfig("content.container") === "fluid";
});

/**
 * Check if the sidebar menu is enabled
 */
export const sidebarEnabled = computed(() => {
  return !!useConfigStore().getLayoutConfig("aside.display");
});

/**
 * Set the sidebar theme
 */
export const sidebarTheme = computed(() => {
  return useConfigStore().getLayoutConfig("aside.theme");
});

/**
 * Set the subheader display
 */
export const subheaderDisplay = computed(() => {
  return useConfigStore().getLayoutConfig("toolbar.display");
});

/**
 * Set the sidebar menu icon type
 */
export const sidebarMenuIcons = computed(() => {
  return useConfigStore().getLayoutConfig("sidebar.default.menu.iconType");
});

/**
 * Light theme logo image
 */
export const themeLightLogo = computed(() => {
  return useConfigStore().getLayoutConfig("main.logo.light");
});

/**
 * Dark theme logo image
 */
export const themeDarkLogo = computed(() => {
  return useConfigStore().getLayoutConfig("main.logo.dark");
});

/**
 * Set the header menu icon type
 */
export const headerMenuIcons = computed(() => {
  return useConfigStore().getLayoutConfig("header.default.menu.iconType");
});

/**
 * Set the header menu display
 */
export const headerMenuDisplay = computed(() => {
  return useConfigStore().getLayoutConfig("header.default.menu.display");
});

/**
 * Page title display
 */
export const pageTitleDisplay = computed(() => {
  return useConfigStore().getLayoutConfig("pageTitle.display");
});

/**
 * Page title breadcrumb display
 */
export const pageTitleBreadcrumbDisplay = computed(() => {
  return useConfigStore().getLayoutConfig("pageTitle.breadcrumb");
});

/**
 * Page title direction display
 */
export const pageTitleDirection = computed(() => {
  return useConfigStore().getLayoutConfig("pageTitle.direction");
});

/**
 * Scrolltop display
 */
export const scrolltopDispaly = computed(() => {
  return useConfigStore().getLayoutConfig("scrolltop.display");
});

/**
 * Illustrations set
 */
export const illustrationsSet = computed(() => {
  return useConfigStore().getLayoutConfig("illustrations.set");
});
