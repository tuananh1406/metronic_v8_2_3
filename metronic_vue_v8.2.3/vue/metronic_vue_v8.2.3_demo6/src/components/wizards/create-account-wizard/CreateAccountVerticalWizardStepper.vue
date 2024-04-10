<template>
  <!--begin::Stepper-->
  <div
    class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
    id="kt_create_account_stepper"
    ref="createAccountStepperRef"
  >
    <!--begin::Aside-->
    <div
      class="card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9"
    >
      <!--begin::Wrapper-->
      <div class="card-body px-6 px-lg-10 px-xxl-15 py-20">
        <!--begin::Nav-->
        <div class="stepper-nav">
          <!--begin::Step 1-->
          <div class="stepper-item current" data-kt-stepper-element="nav">
            <div class="stepper-wrapper">
              <!--begin::Icon-->
              <div class="stepper-icon w-40px h-40px">
                <i class="stepper-check fas fa-check"></i>
                <span class="stepper-number">1</span>
              </div>
              <!--end::Icon-->

              <!--begin::Label-->
              <div class="stepper-label">
                <h3 class="stepper-title">Account Type</h3>

                <div class="stepper-desc fw-semibold">
                  Setup Your Account Details
                </div>
              </div>
              <!--end::Label-->
            </div>

            <!--begin::Line-->
            <div class="stepper-line h-40px"></div>
            <!--end::Line-->
          </div>
          <!--end::Step 1-->

          <!--begin::Step 2-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <div class="stepper-wrapper">
              <!--begin::Icon-->
              <div class="stepper-icon w-40px h-40px">
                <i class="stepper-check fas fa-check"></i>
                <span class="stepper-number">2</span>
              </div>
              <!--end::Icon-->

              <!--begin::Label-->
              <div class="stepper-label">
                <h3 class="stepper-title">Account Settings</h3>
                <div class="stepper-desc fw-semibold">
                  Setup Your Account Settings
                </div>
              </div>
              <!--end::Label-->
            </div>
            <!--begin::Line-->
            <div class="stepper-line h-40px"></div>
            <!--end::Line-->
          </div>
          <!--end::Step 2-->

          <!--begin::Step 3-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <div class="stepper-wrapper">
              <!--begin::Icon-->
              <div class="stepper-icon w-40px h-40px">
                <i class="stepper-check fas fa-check"></i>
                <span class="stepper-number">3</span>
              </div>
              <!--end::Icon-->

              <!--begin::Label-->
              <div class="stepper-label">
                <h3 class="stepper-title">Business Info</h3>
                <div class="stepper-desc fw-semibold">
                  Your Business Related Info
                </div>
              </div>
              <!--end::Label-->
            </div>

            <!--begin::Line-->
            <div class="stepper-line h-40px"></div>
            <!--end::Line-->
          </div>
          <!--end::Step 3-->

          <!--begin::Step 4-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <div class="stepper-wrapper">
              <!--begin::Icon-->
              <div class="stepper-icon w-40px h-40px">
                <i class="stepper-check fas fa-check"></i>
                <span class="stepper-number">4</span>
              </div>
              <!--end::Icon-->

              <!--begin::Label-->
              <div class="stepper-label">
                <h3 class="stepper-title">Billing Details</h3>
                <div class="stepper-desc fw-semibold">
                  Set Your Payment Methods
                </div>
              </div>
              <!--end::Label-->
            </div>

            <!--begin::Line-->
            <div class="stepper-line h-40px"></div>
            <!--end::Line-->
          </div>
          <!--end::Step 4-->

          <!--begin::Step 5-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <div class="stepper-wrapper">
              <!--begin::Icon-->
              <div class="stepper-icon w-40px h-40px">
                <i class="stepper-check fas fa-check"></i>
                <span class="stepper-number">5</span>
              </div>
              <!--end::Icon-->

              <!--begin::Label-->
              <div class="stepper-label">
                <h3 class="stepper-title">Completed</h3>
                <div class="stepper-desc fw-semibold">Woah, we are here</div>
              </div>
              <!--end::Label-->
            </div>
          </div>
          <!--end::Step 5-->
        </div>
        <!--end::Nav-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--begin::Aside-->

    <!--begin::Content-->
    <div class="card d-flex flex-row-fluid flex-center">
      <CreateAccountWizardForm
        :stepper-el="createAccountStepperRef"
        :close-hadler="props.closeHadler"
      />
    </div>
    <!--end::Content-->
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
