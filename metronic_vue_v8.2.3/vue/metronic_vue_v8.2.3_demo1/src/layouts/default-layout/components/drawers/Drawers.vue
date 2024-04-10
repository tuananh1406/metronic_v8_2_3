<template>
  <KTMessengerDrawer />
  <KTActivityDrawer />
  <KTToolButtons />
  <KTHelpDrawer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTMessengerDrawer from "@/layouts/default-layout/components/extras/MessengerDrawer.vue";
import KTActivityDrawer from "@/layouts/default-layout/components/drawers/ActivityDrawer.vue";
import KTHelpDrawer from "@/layouts/default-layout/components/extras/HelpDrawer.vue";
import KTToolButtons from "@/layouts/default-layout/components/extras/ToolButtons.vue";

export default defineComponent({
  name: "global-drawers",
  components: {
    KTMessengerDrawer,
    KTActivityDrawer,
    KTHelpDrawer,
    KTToolButtons,
  },
});
</script>
