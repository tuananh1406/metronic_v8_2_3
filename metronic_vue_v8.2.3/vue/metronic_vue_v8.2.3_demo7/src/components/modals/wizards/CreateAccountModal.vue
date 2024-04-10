<template>
  <!--begin::Modal - Create account-->
  <div
    class="modal fade"
    id="kt_modal_create_account"
    ref="modalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Title-->
          <h2>Create Account</h2>
          <!--end::Title-->

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y m-5">
          <CreateAccountHorizontalWizardStepper
            :close-hadler="closeModal"
          ></CreateAccountHorizontalWizardStepper>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Create project-->
</template>

<script setup lang="ts">
import CreateAccountHorizontalWizardStepper from "@/components/wizards/create-account-wizard/CreateAccountHorizontalWizardStepper.vue";
import { hideModal } from "@/core/helpers/modal";

import { ref } from "vue";

const modalRef = ref<HTMLElement | null>(null);

const closeModal = () => {
  hideModal(modalRef.value);
};
</script>
