<template>
  <section class="prose mx-auto dark:text-white">
    <h1 class="text-center">
      Contact Tyler Earls
    </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic inventore dolorem atque cumque, beatae iusto dolores, harum quae provident tempore animi quas iure maiores eligendi sunt enim recusandae ex voluptas.</p>
    <form
      id="contact"
      class="w-full max-w-sm"
      method="get"
      enctype="text/plain"
    >
      <fieldset>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name
            </label>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
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
          </div>
        </div>
        
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
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
        </div>
        <div>
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
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

        <div>
          <error-message
            id="recaptcha-error"
            success-message="Thank you. I look forward to working with you!"
            :error-present="saveDisabled"
            :error-message="getErrorMessage()"
          />
          <a
            target="_blank"
            :href="generateMailToURL()"
            :class="{disabled: saveDisabled, hover: !saveDisabled && hoveringMessage}"
            @mouseover="hoveringMessage = !saveDisabled"
            @mouseleave="hoveringMessage = false;"
          >Send Message</a>
        </div>
      </fieldset>
    </form>
    
    
    <!-- <form class="w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" type="checkbox">
      <span class="text-sm">
        Send me your newsletter!
      </span>
    </label>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
    </div>
  </div>
</form> -->
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
