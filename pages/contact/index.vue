<template>
  <section class="prose mx-auto">
    <h1 class="text-center">
      Contact Tyler Earls
    </h1>
    <br>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic inventore dolorem atque cumque, beatae iusto dolores, harum quae provident tempore animi quas iure maiores eligendi sunt enim recusandae ex voluptas.</p>
    <form
      id="contact"
      class="vue-form"
      method="get"
      enctype="text/plain"
    >
      <fieldset>
        <div>
          <label
            class="label"
            for="contactSubject"
          >Subject: </label>
          <input
            id="contactSubject"
            v-model="subject.text"
            type="text"
            name="subject"
            required
            :maxlength="subject.maxlength"
            :placeholder="subject.placeholder"
          >
          <span class="counter">{{ subject.text.length }} / {{ subject.maxlength }}</span>
        </div>
        <div>
          <label
            class="label"
            for="contactMessage"
          >Message: </label>
          <textarea
            id="contactMessage"
            v-model="message.text"
            class="message"
            name="message"
            required
            :maxlength="message.maxlength"
            :placeholder="message.placeholder"
            :class="{'error-field': message.error}"
            @input="message.error = false;"
          />
          <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
        </div>

        <vue-recaptcha
          :key="shouldCompactRecaptcha"
          sitekey="6LfWJbcUAAAAAAPyrhy_FrLb_2y3wuLIzl3dEtZx"
          theme="dark"
          :size="shouldCompactRecaptcha ? 'compact' : 'normal'"
          :load-recaptcha-script="true"
          @verify="markRecaptchaVerified"
          @expired="resetRecaptcha"
        />

        <div style="margin: 0;">
          <error-message
            id="recaptcha-error"
            success-message="Thank you. I look forward to working with you!"
            :error-present="saveDisabled"
            :error-message="getErrorMessage()"
          />
          <a
            target="_blank"
            :href="generateMailToURL()"
            :class="{disabled: saveDisabled, 'hover': !saveDisabled && hoveringMessage}"
            @mouseover="hoveringMessage = !saveDisabled"
            @mouseleave="hoveringMessage = false;"
          >Send Message</a>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import ErrorMessage from "../../components/renderless/ErrorMessage.vue";

// constants i don't want watched in data object
const compactRecaptchaBreakPoint = 560;

export default {
  components: {
    VueRecaptcha,
    ErrorMessage,
  },
  data() {
    return {
      recaptchaVerified: false,
      shouldCompactRecaptcha: false,
      hoveringMessage: false,
      errorLines: 0,
      message: {
        placeholder:
                    "Hey Tyler,\n\nMy name is _______.\nLet's build something awesome together.",
        text: "",
        maxlength: 500,
        error: false,
      },
      subject: {
        placeholder: "Freelance Hire Inquiry",
        text: "",
        maxlength: 50,
      },
    };
  },
  computed: {
    saveDisabled() {
      return this.message.text.length === 0 || !this.recaptchaVerified;
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
      } if (this.recaptchaVerified && this.message.text.length === 0) {
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
</style>
