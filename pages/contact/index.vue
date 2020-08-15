<template>
  <section class="px-4 mt-20 mx-auto max-w-none w-4/5 leading-8">
    <h1 class="text-center mb-4 text-purple-700 dark:text-purple-500 font-extrabold text-4xl leading-tight">
      Contact Tyler Earls
    </h1>
    <p class="text-soft-black dark:text-white my-4 text-lg leading-normal">
      If you're interested in my coding work, my music, or want to say hello, please feel free to
      reach out.
    </p>
    <form
      id="contact"
      class="mx-auto bg-gray-100 rounded-md border border-soft-black w-full max-w-sm"
      method="get"
      enctype="text/plain"
    >
      <fieldset 
        class="px-4 py-2"
      >
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-purple-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="contactName"
            >
              Name
            </label>
            <input
              id="contactName"
              v-model="name.text"
              class="border border-soft-black rounded-sm"
              type="text"
              name="name"
              :placeholder="name.placeholder"
            >
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-purple-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="contactSubject"
            >Subject</label>
            <input
              id="contactSubject"
              v-model="subject.text"
              class="border border-soft-black rounded-sm"
              type="text"
              name="subject"
              :placeholder="subject.placeholder"
            >
          </div>
        </div>
        <div>
          <label
            class="block text-purple-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="contactMessage"
          >
            Message
          </label>
          <textarea
            id="contactMessage"
            v-model="message.text"
            class="border border-soft-black rounded-sm"
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

        <div>
          <ErrorMessage
            id="recaptcha-error"
            success-message="Thank you. I look forward to working with you!"
            :error-present="saveDisabled"
            :error-message="getErrorMessage()"
          />
          <a
            target="_blank"
            :href="generateMailToURL()"
            :class="{ disabled: saveDisabled, hover: !saveDisabled && hoveringMessage }"
            @mouseover="hoveringMessage = !saveDisabled"
            @mouseleave="hoveringMessage = false"
          >Send Message</a>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import ErrorMessage from "@/components/util/ErrorMessage.vue";

// constants i don't want watched in data object
const compactRecaptchaBreakPoint = 560;

export default {
  components: {
    VueRecaptcha,
    ErrorMessage
  },
  data() {
    return {
      recaptchaVerified: false,
      shouldCompactRecaptcha: false,
      hoveringMessage: false,
      errorLines: 0,
      name: {
        placeholder: "Name",
        text: "",
      },
      subject: {
        placeholder: "Freelance Hire Inquiry",
        text: ""
      },
      message: {
        placeholder: "Hey Tyler,\n\nMy name is _______.\nLet's build something awesome together.",
        text: "",
        error: false
      },
    };
  },
  computed: {
    saveDisabled() {
      return this.name.text.length === 0 || this.message.text.length === 0 || !this.recaptchaVerified;
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
      const compare = this.shouldCompactRecaptcha;
      this.shouldCompactRecaptcha = window.innerWidth <= compactRecaptchaBreakPoint;

      const isRecaptchaRedrawn = compare !== this.shouldCompactRecaptcha;
      if (isRecaptchaRedrawn) {
        this.removeRecaptchaContainer();
      }
    },
    getErrorMessage() {
      if (!this.recaptchaVerified) {
        return "Please verify that you're a human before sending.";
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
    }
  }
};
</script>

<style></style>
