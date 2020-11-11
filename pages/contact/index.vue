<template>
  <section class="px-4 mt-20 mx-auto max-w-none w-4/5 leading-8">
    <h1 class="text-center mb-4 text-purple-700 dark:text-purple-500 font-extrabold text-4xl leading-tight">
      Contact Tyler Earls
    </h1>
    <p class="w-full max-w-lg mx-auto text-justify text-soft-black dark:text-white my-4 text-lg md:text-xl leading-normal">
      If you're interested in hiring me for coding work, my music, or just want to say hello—I'd love to hear from you. I'm a voracious learner, and nothing is too nerdy or niche for my taste.
    </p>
    <p class="w-full max-w-lg mx-auto text-justify text-soft-black dark:text-white my-4 text-lg md:text-xl leading-normal">
      The best way to reach me is by completing the form below. 
    </p>
    <form
      id="contact"
      class="form-boxshadow mx-auto my-8 bg-gray-200 dark:bg-gray-900 rounded-md w-full max-w-sm"
      method="POST"
      enctype="text/plain"
      @submit.prevent="submitEmail"
    >
      <fieldset 
        class="px-4 py-2"
      >
        <div>
          <label
            class="block text-purple-700 dark:text-purple-500 font-bold mb-1 md:mb-0 pr-4"
            for="contactName"
          >
            Name<span> *</span>
          </label>
          <input
            id="contactName"
            v-model.trim="name.text"
            :style="$v.name.text.$error ? 'margin: 0' : ''"
            class="form-input w-full mb-2 text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
            type="text"
            name="name"
            :placeholder="name.placeholder"
            @input="$v.name.text.$reset(); isUserTyping = true;"
            @blur="$v.name.text.$touch(); isUserTyping = false;"
          >
          <p
            v-if="$v.name.text.$error"
            class="error-message"
          >
            Please enter your name.
          </p>
        </div>

        <div 
          class="flex flex-col"
          :class="{'mb-2': !$v.email.text.$error}"
        >
          <label
            class="block text-purple-700 dark:text-purple-500 font-bold mb-1 md:mb-0 pr-4"
            for="contactEmail"
          >
            Email<span> *</span>
          </label>
          <input
            id="contactEmail"
            v-model.trim="email.text"
            class="form-input w-full text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
            type="email"
            name="email"
            required
            placeholder="beammeup@scotty.com"
            @input="$v.email.text.$reset(); isUserTyping = true;"
            @blur="$v.email.text.$touch(); isUserTyping = false;"
          >
          <p
            v-if="$v.email.text.$dirty && !$v.email.text.required"
            class="error-message"
          >
            Please enter your email.
          </p>
          <p
            v-if="$v.email.text.$dirty && !$v.email.text.emailValidationRegex"
            class="error-message"
          >
            Please enter a valid email address.
          </p>
        </div>

        <div>
          <label
            class="block text-purple-700 dark:text-purple-500 font-bold mb-1 md:mb-0 pr-4"
            for="contactSubject"
          >Subject</label>
          <input
            id="contactSubject"
            v-model.trim="subject.text"
            class="form-input w-full mb-2 text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
            type="text"
            name="subject"
            :placeholder="subject.placeholder"
          >
        </div>
        <div 
          class="flex flex-col"
          :class="{'mb-4': !$v.message.text.$error}"
        >
          <label
            class="block text-purple-700 dark:text-purple-500 font-bold mb-1 md:mb-0 pr-4"
            for="contactMessage"
          >
            Message<span> *</span>
          </label>
          <textarea
            id="contactMessage"
            v-model.trim="message.text"
            class="form-textarea w-full h-32 text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
            name="message"
            required
            :placeholder="message.placeholder"
            @input="$v.message.text.$reset(); isUserTyping = true;"
            @blur="$v.message.text.$touch(); isUserTyping = false;"
          />
          <p
            v-if="$v.message.text.$error"
            class="error-message"
          >
            Please enter a message.
          </p>
        </div>
        <vue-recaptcha
          :key="shouldCompactRecaptcha + prefersDarkMode"
          sitekey="6LfWJbcUAAAAAAPyrhy_FrLb_2y3wuLIzl3dEtZx"
          :theme="prefersDarkMode ? 'dark' : 'light'"
          :size="shouldCompactRecaptcha ? 'compact' : 'normal'"
          :load-recaptcha-script="true"
          @verify="recaptchaVerified = true"
          @expired="recaptchaVerified = false"
        />

        <div class="relative">
          <p 
            v-if="!saveDisabled"
            class="success-message"
          >
            Thank you. I look forward to working with you!
          </p>
          <client-only>
            <loading-state v-if="requestState === 'loading'" />
          </client-only>
          <p
            v-if="requestState === 'success'"
            class="success-message"
          >
            Success! I'll be in touch shortly.
          </p>
          <p
            v-if="requestState === 'error'"
            class="error-message"
          >
            There was an error sending your message. Please try again.
          </p>

          <div class="flex items-center">
            <input
              type="submit"
              value="Send Email"
              :disabled="saveDisabled"
              class="inline-block my-2 text-white transition-colors transition-padding ease-in-out duration-200 bg-purple-700 dark:bg-purple-500 rounded-lg pl-2 pr-10 disabled:pr-2 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
              :class="{'submit-hover': !saveDisabled && hoveringMessage }"
              @mouseover="hoveringMessage = !saveDisabled"
              @mouseleave="hoveringMessage = false"
            >
            <transition name="draw">
              <RightArrowIcon 
                v-if="!saveDisabled"
                style="margin-left: -32px;"
              />
            </transition>
          </div>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script>
// NOTE: not converting this to TS until I can fully migrate to vue 3. 
// the type inferences are all fucked.
import { mapState } from "vuex";
import VueRecaptcha from "vue-recaptcha";
import axios from "axios";
import { required, email as emailValidationRegex } from "vuelidate/lib/validators";

import RightArrowIcon from "@/components/widgets/svg/RightArrowIcon.vue";
import LoadingState from "@/components/util/requestStates/LoadingState.vue";

// TODO: convert to enum
const RequestState = {
  idle: "idle",
  loading: "loading",
  success: "success",
  error: "error",
};

export default {
  components: {
    VueRecaptcha,
    RightArrowIcon,
    LoadingState,
  },
  data() {
    return {
      recaptchaVerified: false,
      shouldCompactRecaptcha: false,
      hoveringMessage: false,
      errorLines: 0,
      isUserTyping: false,
      name: {
        placeholder: "Captain Kirk",
        text: "",
      },
      email: {
        placeholder: "beammeup@scotty.com",
        text: "",
      },
      subject: {
        placeholder: "Captain's Log",
        text: "",
      },
      message: {
        placeholder: "Stardate 2713.5\n\nIn the distant reaches of our galaxy, we have made an astonishing discovery—Earth-type radio signals coming from a planet which apparently is an exact duplicate of the Earth.\n\nIt seems impossible, but there it is.",
        text: "",
      },
      requestState: RequestState.idle,
    };
  },
  validations: {
    name: {
      text: {
        required,
      },
    },
    email: {
      text: {
        required,
        emailValidationRegex,
      },
    },
    message: {
      text: {
        required,
      },
    },
  },
  computed: {
    ...mapState([
      "prefersDarkMode",
    ]),
    saveDisabled() {
      return (
        this.requestState !== RequestState.idle ||
        !this.recaptchaVerified || 
        this.isUserTyping ||
        !this.$v.name.text.required ||
        !this.$v.email.text.required ||
        !this.$v.email.text.emailValidationRegex ||
        !this.$v.message.text.required
      );
    },
    mailToURL() {
      let mailToURL = "";
      if (process.env.NODE_ENV === "development") {
        mailToURL = "http://localhost:3000/send";
      } else if (process.env.NODE_ENV === "production") {
        mailToURL = "https://tyler-shared-email-service.herokuapp.com/send";
      }
      return mailToURL;
    },
    emailBody() {
      return {
        name: this.name.text,
        subject: this.subject.text, 
        message: this.message.text,
        to: this.email.text,
      };
    },
  },
  mounted() {
    // check on initial mount, add event listener to recheck when window resized
    this.checkCompactRecaptcha();
    window.addEventListener("resize", this.checkCompactRecaptcha);
  },
  destroyed() {
    // remove resize event listener, remove stale recaptcha container
    window.removeEventListener("resize", this.checkCompactRecaptcha);
    this.removeRecaptchaContainer();
  },
  methods: {
    removeRecaptchaContainer() {
      // grab the container that is appended to the DOM from recaptcha script & remove it
      const { lastChild } = document.body;

      // make sure the last child is a div or an iframe before removing
      // so scripts don't get removed inadvertently
      if (lastChild != null && /div|iframe/i.test(lastChild.nodeName)) {
        lastChild.remove();
      }
    },
    checkCompactRecaptcha() {
      const compactRecaptchaBreakPoint = 560;
      const oldShouldCompactRecaptcha = this.shouldCompactRecaptcha;
      this.shouldCompactRecaptcha = window.innerWidth <= compactRecaptchaBreakPoint;

      const isRecaptchaRedrawn = oldShouldCompactRecaptcha !== this.shouldCompactRecaptcha;
      if (isRecaptchaRedrawn) {
        this.removeRecaptchaContainer();
      }
    },
    submitEmail() {
      const vm = this;
      this.requestState = RequestState.loading;
      // show loading state, success state, failed state
      axios.post(
        vm.mailToURL, 
        vm.emailBody
      )
      .then(response => {
        if (response.status === 200) {
          this.requestState = RequestState.success;
        } else {
          this.requestState = RequestState.error;
        }
      })
      .catch(error => {
        console.log(`error: ${error}`);
        this.requestState = RequestState.error;
      });
    },
  },
};
</script>

<style scoped>
.error-message {
  @apply text-red-700 font-semibold;
}
html.dark-mode .error-message {
  @apply text-red-500;
}
.success-message {
  @apply text-green-500 font-semibold;
}
html.dark-mode .success-message {
  @apply text-green-400;
}
.disabled {
  @apply cursor-not-allowed;
}
.submit-hover {
  @apply cursor-pointer;
}
.transition-padding {
  transition: padding 500ms ease;
}
.form-input {
  @apply appearance-none p-2 text-base leading-6 rounded-md;
}
.form-textarea {
  @apply appearance-none p-2 text-base leading-6 rounded-md;
}
.form-boxshadow {
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}

/* transitions */
.draw-enter-active {
  /* opacity: 1; */
  display: block;
  transition: all 500ms ease 100ms;
}
.draw-leave-active {
  opacity: 0;
  display: none;
  transition: all 300ms ease;
}
.draw-enter,
.draw-leave-to {
  opacity: 0;
}
</style>
