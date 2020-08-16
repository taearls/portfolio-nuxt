<template>
  <section class="mx-auto">
    <h2
      class="text-center mb-8 text-purple-700 dark:text-purple-500"
      style="font-weight: 700;
    font-size: 1.5em;"
    >
      {{ project.name }}
    </h2>
    <div class="clearfix">
      <div class="mx-auto text-center w-4/5 mb-2 sm:mb-0 sm:w-1/2 sm:float-left sm:clearfix sm:mr-4">
        <div>
          <a
            :rel="project.analytics ? 'external' : 'noreferrer'"
            target="_blank"
            :href="project.analytics !== null ? getAnalyticsLink(project.href, project.analytics) : project.href"
            :style="{cursor: project.cursorStyle}"
          >
            <client-only>
              <cld-image
                :alt="project.alt"
                :public-id="`${project.cloudinaryID}`"
              >
                <cld-transformation
                  width="400"
                />
              </cld-image>
            </client-only>
          </a>
        </div>
        <a
          class="block text-purple-700 dark:text-purple-500"
          target="_blank"
          rel="noreferrer"
          :href="project.href"
        >
          <span class="text-purple-700 dark:text-purple-500">{{ project.tagline }}</span> {{ project.emoji }}
        </a>
      </div>
      <div>
        <p
          class="px-2 sm:px-0 text-soft-black dark:text-white text-justify text-lg leading-7"
          v-html="project.description"
        />
      </div>
    </div>
    <template v-if="index !== projectCount">
      <hr class="line-break mt-12 mb-8">
    </template>
    <template v-else>
      <br>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    projectCount: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    const projectLinks = document.querySelectorAll(".project-link");
    for (let i = 0; i < projectLinks.length; i++) {
      const projectLink = projectLinks[i];
      projectLink.addEventListener("focus", this.addFocusStyleToParent);
      projectLink.addEventListener("blur", this.removeFocusStyleFromParent);
    }
  },
  destroyed() {
    const projectLinks = document.querySelectorAll(".project-link");
    for (let i = 0; i < projectLinks.length; i++) {
      const projectLink = projectLinks[i];
      projectLink.removeEventListener("focus", this.addFocusStyleToParent);
      projectLink.removeEventListener("blur", this.removeFocusStyleFromParent);
    }
  },
  methods: {
    addFocusStyleToParent(e) {
      e.target.parentElement.style.outline = "2px dotted #FAFD51";
    },
    removeFocusStyleFromParent(e) {
      e.target.parentElement.style.outline = "";
    },
    getAnalyticsLink(link, utmObject) {
      const {source, medium, campaign} = utmObject;
      return `${link}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
    },
  }
};
</script>

<style>
.line-break {
  border: 0;
  height: 1px;
  margin-left: 11vw;
  margin-right: 11vw;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(203, 213, 224), rgba(0, 0, 0, 0));
}
</style>
