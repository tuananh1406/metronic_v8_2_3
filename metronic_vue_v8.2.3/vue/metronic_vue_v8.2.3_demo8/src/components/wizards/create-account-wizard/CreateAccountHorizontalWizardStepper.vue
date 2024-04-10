<template>
  <!--begin::Stepper-->
  <div
    class="stepper stepper-links d-flex flex-column"
    id="kt_create_account_stepper"
    ref="createAccountStepperRef"
  >
    <!--begin::Nav-->
    <div class="stepper-nav py-5 mt-5">
      <!--begin::Step 1-->
      <div class="stepper-item current" data-kt-stepper-element="nav">
        <h3 class="stepper-title">Account Type</h3>
      </div>
      <!--end::Step 1-->

      <!--begin::Step 2-->
      <div class="stepper-item" data-kt-stepper-element="nav">
        <h3 class="stepper-title">Account Info</h3>
      </div>
      <!--end::Step 2-->

      <!--begin::Step 3-->
      <div class="stepper-item" data-kt-stepper-element="nav">
        <h3 class="stepper-title">Business Info</h3>
      </div>
      <!--end::Step 3-->

      <!--begin::Step 4-->
      <div class="stepper-item" data-kt-stepper-element="nav">
        <h3 class="stepper-title">Billing Details</h3>
      </div>
      <!--end::Step 4-->

      <!--begin::Step 5-->
      <div class="stepper-item" data-kt-stepper-element="nav">
        <h3 class="stepper-title">Completed</h3>
      </div>
      <!--end::Step 5-->
    </div>
    <!--end::Nav-->

    <CreateAccountWizardForm
      :stepper-el="createAccountStepperRef"
      :close-hadler="props.closeHadler"
    />
  </div>
  <!--end::Stepper-->
</template>

<script setup lang="ts">
import { ref } from "vue";
import CreateAccountWizardForm from "@/components/wizards/create-account-wizard/CreateAccountWizardForm.vue";

interface Props {
  closeHadler?: () => void;
}

const props = defineProps<Props>();

const createAccountStepperRef = ref<HTMLElement | null>(null);
</script>
