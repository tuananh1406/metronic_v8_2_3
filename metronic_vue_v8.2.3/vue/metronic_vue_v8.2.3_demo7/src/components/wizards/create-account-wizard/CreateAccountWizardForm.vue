<template>
  <!--begin::Form-->
  <form
    class="mx-auto mw-600px w-100 pt-15 pb-10"
    novalidate
    id="kt_create_account_form"
    @submit="handleStep"
  >
    <CreateAccountStep1></CreateAccountStep1>
    <CreateAccountStep2></CreateAccountStep2>
    <CreateAccountStep3></CreateAccountStep3>
    <CreateAccountStep4></CreateAccountStep4>
    <CreateAccountStep5></CreateAccountStep5>

    <!--begin::Actions-->
    <div class="d-flex flex-stack pt-15">
      <!--begin::Wrapper-->
      <div class="mr-2">
        <button
          type="button"
          class="btn btn-lg btn-light-primary me-3"
          data-kt-stepper-action="previous"
          @click="previousStep"
        >
          <KTIcon icon-name="arrow-left" icon-class="fs-4 me-1" />
          Back
        </button>
      </div>
      <!--end::Wrapper-->

      <!--begin::Wrapper-->
      <div>
        <button
          type="button"
          class="btn btn-lg btn-primary me-3"
          data-kt-stepper-action="submit"
          v-if="currentStepIndex === totalSteps - 1"
          @click="formSubmit()"
        >
          <span class="indicator-label">
            Submit
            <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" />
          </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>

        <button v-else type="submit" class="btn btn-lg btn-primary">
          Continue
          <KTIcon icon-name="arrow-right" icon-class="fs-4 ms-2 me-0" />
        </button>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Actions-->
  </form>
  <!--end::Form-->
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import { StepperComponent } from "@/assets/ts/components";
import { useForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import type {
  IStep1,
  IStep2,
  IStep3,
  IStep4,
  ICreateAccount,
} from "@/components/wizards/create-account-wizard/types";
import CreateAccountStep1 from "@/components/wizards/create-account-wizard/steps/CreateAccountStep1.vue";
import CreateAccountStep2 from "@/components/wizards/create-account-wizard/steps/CreateAccountStep2.vue";
import CreateAccountStep3 from "@/components/wizards/create-account-wizard/steps/CreateAccountStep3.vue";
import CreateAccountStep4 from "@/components/wizards/create-account-wizard/steps/CreateAccountStep4.vue";
import CreateAccountStep5 from "@/components/wizards/create-account-wizard/steps/CreateAccountStep5.vue";

interface Props {
  stepperEl: HTMLElement | null;
  closeHadler?: () => void | null;
}

const props = defineProps<Props>();

const stepperObj = ref<StepperComponent | null>(null);
const currentStepIndex = ref(0);

const formData = ref<ICreateAccount>({
  accountType: "personal",
  accountTeamSize: "50+",
  accountName: "",
  accountPlan: "1",
  businessName: "Keenthemes Inc.",
  businessDescriptor: "KEENTHEMES",
  businessType: "1",
  businessDescription: "",
  businessEmail: "corp@support.com",
  nameOnCard: "Max Doe",
  cardNumber: "4111 1111 1111 1111",
  cardExpiryMonth: "1",
  cardExpiryYear: "2",
  cardCvv: "123",
  saveCard: "1",
});

const formInitData = ref<ICreateAccount>(formData.value);

onMounted(() => {
  nextTick(() => {
    if (props.stepperEl) {
      stepperObj.value = StepperComponent.createInsance(props.stepperEl);
    }
  });
});

const createAccountSchema = [
  Yup.object({
    accountType: Yup.string().required().label("Account Type"),
  }),
  Yup.object({
    accountName: Yup.string().required().label("Account Name"),
  }),
  Yup.object({
    businessName: Yup.string().required().label("Business Name"),
    businessDescriptor: Yup.string().required().label("Shortened Descriptor"),
    businessType: Yup.string().required().label("Corporation Type"),
    businessEmail: Yup.string().required().label("Contact Email"),
  }),
  Yup.object({
    nameOnCard: Yup.string().required().label("Name On Card"),
    cardNumber: Yup.string().required().label("Card Number"),
    cardExpiryMonth: Yup.string().required().label("Expiration Month"),
    cardExpiryYear: Yup.string().required().label("Expiration Year"),
    cardCvv: Yup.string().required().label("CVV"),
  }),
];

// extracts the individual step schema
const currentSchema = computed(() => {
  return createAccountSchema[currentStepIndex.value];
});

const totalSteps = computed(() => {
  if (stepperObj.value) {
    return stepperObj.value.totalStepsNumber;
  } else {
    return 1;
  }
});

const { resetForm, handleSubmit } = useForm<IStep1 | IStep2 | IStep3 | IStep4>({
  validationSchema: currentSchema,
  initialValues: formData.value,
});

const previousStep = () => {
  currentStepIndex.value--;

  if (!stepperObj.value) {
    return;
  }

  stepperObj.value.goPrev();
};

const handleStep = handleSubmit((values) => {
  console.log(values);

  formData.value = {
    ...formData.value,
    ...values,
  };

  resetForm({
    values: {
      ...formData.value,
    },
  });

  currentStepIndex.value++;

  if (!stepperObj.value) {
    return;
  }

  stepperObj.value.goNext();
});

const formSubmit = () => {
  Swal.fire({
    text: "All is cool! Now you submit this form",
    icon: "success",
    buttonsStyling: false,
    confirmButtonText: "Ok, got it!",
    heightAuto: false,
    customClass: {
      confirmButton: "btn fw-semibold btn-light-primary",
    },
  }).then(() => {
    stepperObj.value?.goFirst();
    currentStepIndex.value = 0;

    resetForm({
      values: {
        ...formInitData.value,
      },
    });

    if (props.closeHadler) {
      props.closeHadler();
    }
  });
};
</script>
