<template>
  <section class="px-4 mt-20 mx-auto max-w-none w-4/5 leading-8">
    <h1 class="text-center mb-4 text-purple-700 dark:text-purple-500 font-extrabold text-4xl leading-tight">
      Contact Tyler Earls
    </h1>
    <p class="w-4/5 mx-auto text-justify text-soft-black dark:text-white my-4 text-lg md:text-xl leading-normal">
      If you're interested in my coding work, my music, or want to say hello, please feel free to
      reach out.
    </p>
    <form
      id="contact"
      class="form-boxshadow mx-auto my-8 bg-gray-200 dark:bg-gray-900 rounded-md w-full max-w-sm"
      method="get"
      enctype="text/plain"
      :action="generateMailToURL()"
    >
      <fieldset 
        class="px-4 py-2"
      >
        <div class="mb-2">
          <label
            class="block text-purple-700 dark:text-purple-500 font-bold mb-1 md:mb-0 pr-4"
            for="contactName"
          >
            Name
          </label>
          <input
            id="contactName"
            v-model="name.text"
            class="form-input w-full text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
            type="text"
            name="name"
            :placeholder="name.placeholder"
          >
        </div>

        <div class="mb-2">
          <label
            class="block text-purple-700 dark:text-purple-500 font-bold mb-1 md:mb-0 pr-4"
            for="contactSubject"
          >Subject</label>
          <input
            id="contactSubject"
            v-model="subject.text"
            class="form-input w-full text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
            type="text"
            name="subject"
            :placeholder="subject.placeholder"
          >
        </div>
        <div>
          <label
            class="block text-purple-700 dark:text-purple-500 font-bold mb-1 md:mb-0 pr-4"
            for="contactMessage"
          >
            Message<span> *</span>
          </label>
          <textarea
            id="contactMessage"
            v-model="message.text"
            class="form-textarea w-full h-32 mb-2 text-soft-black placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
            name="message"
            required
            :placeholder="message.placeholder"
            :class="{ 'error-field': message.error }"
            @input="message.error = false"
          />
        </div>

        <vue-recaptcha
          :key="shouldCompactRecaptcha + prefersDarkMode"
          sitekey="6LfWJbcUAAAAAAPyrhy_FrLb_2y3wuLIzl3dEtZx"
          :theme="prefersDarkMode ? 'dark' : 'light'"
          :size="shouldCompactRecaptcha ? 'compact' : 'normal'"
          :load-recaptcha-script="true"
          @verify="markRecaptchaVerified"
          @expired="resetRecaptcha"
        />

        <div class="relative">
          <ErrorMessage
            id="recaptcha-error"
            success-message="Thank you. I look forward to working with you!"
            :error-present="saveDisabled"
            :error-message="getErrorMessage()"
          />
          <div class="flex items-center">
            <input
              type="submit"
              value="Send Email"
              :disabled="saveDisabled"
              class="inline-block transition-padding bg-purple-700 dark:bg-purple-500 rounded-lg pl-2 pr-10 disabled:pr-2 my-2 text-white transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark disabled:opacity-75"
              :class="{ disabled: saveDisabled, 'submit-hover': !saveDisabled && hoveringMessage }"
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
import VueRecaptcha from "vue-recaptcha";
import ErrorMessage from "@/components/util/ErrorMessage";
import RightArrowIcon from "@/components/widgets/svg/RightArrowIcon";

export default {
  components: {
    VueRecaptcha,
    ErrorMessage,
    RightArrowIcon,
  },
  data() {
    return {
      recaptchaVerified: false,
      shouldCompactRecaptcha: false,
      hoveringMessage: false,
      errorLines: 0,
      name: {
        placeholder: "Captain Kirk",
        text: "",
      },
      subject: {
        placeholder: "Captain's Log",
        text: "",
      },
      message: {
        // placeholder: "Hey Tyler,\n\nMy name is _______.\nLet's do something awesome together.",
        placeholder: "Stardate 2713.5\n\nIn the distant reaches of our galaxy, we have made an astonishing discovery – Earth-type radio signals coming from a planet which apparently is an exact duplicate of the Earth.\n\nIt seems impossible, but there it is.",
        text: "",
        error: false,
      },
    };
  },
  computed: {
    saveDisabled() {
      return this.message.text.length === 0 || !this.recaptchaVerified;
    },
    prefersDarkMode() {
      return this.$store.state.prefersDarkMode;
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
      if (/div|iframe/i.test(lastChild.nodeName)) {
        lastChild.remove();
      }
    },
    checkCompactRecaptcha() {
      const compactRecaptchaBreakPoint = 560;
      const compare = this.shouldCompactRecaptcha;
      this.shouldCompactRecaptcha = window.innerWidth <= compactRecaptchaBreakPoint;

      const isRecaptchaRedrawn = compare !== this.shouldCompactRecaptcha;
      if (isRecaptchaRedrawn) {
        this.removeRecaptchaContainer();
      }
    },
    getErrorMessage() {
      if (!this.recaptchaVerified) {
        return "Please verify you're a human before sending.";
      }
      if (this.recaptchaVerified && this.message.text.length === 0) {
        this.message.error = true;
        return "Message cannot be blank.";
      }
      return "Sorry about that. Please try again.";
    },
    markRecaptchaVerified() {
      this.recaptchaVerified = true;
    },
    resetRecaptcha() {
      this.recaptchaVerified = false;
    },
    generateMailToURL() {
      if (this.saveDisabled) return false;
      // TODO: use name field somehow
      let mailToURL = "mailto:tyler.a.earls@gmail.com";
      mailToURL += `?body=${encodeURIComponent(this.message.text)}`; // add body
      if (this.subject.text.length > 0) {
        mailToURL += `&subject=${encodeURIComponent(this.subject.text)}`; // add subject if needed
      }
      return mailToURL;
    },
  },
};
</script>

<style>
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
.form-input:focus, .form-textarea:focus {
  
}
.form-boxshadow {
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}
html.dark-mode .form-boxshadow {
  /* box-shadow: 0 4px 6px 0 hsla(0, 100%, 100%, 0.4); */
  /* box-shadow: 0 4px 6px 0 rgba(255, 255, 255, 0.4); */
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
