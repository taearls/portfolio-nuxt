<template>
  <section class="mx-auto mt-12">
    <h2
      class="text-center font-bold text-2xl mb-8 text-purple-700 dark:text-purple-500"
    >
      {{ project.name }}
    </h2>
    <div class="clearfix mb-8">
      <div class="mx-auto text-center w-4/5 mb-2 sm:mb-0 sm:w-1/2 sm:float-left sm:clearfix sm:mr-4">
        <div>
          <a
            class="block rounded-sm focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
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
                  quality="auto"
                />
              </cld-image>
            </client-only>
          </a>
        </div>
        <a
          class="block rounded-sm mt-1 text-purple-700 dark:text-purple-500 focus:outline-none focus:shadow-outline-light dark-focus:shadow-outline-dark"
          target="_blank"
          rel="noreferrer"
          :href="project.href"
        >
          <span class="text-purple-700 md:text-lg dark:text-purple-500">{{ project.tagline }}</span> {{ project.emoji }}
        </a>
      </div>
      <div>
        <p
          v-for="(description, descriptionIndex) in project.descriptions"
          :key="`${project.name}-description-${descriptionIndex}`"
          class="my-4 px-2 sm:px-0 text-soft-black dark:text-white text-justify text-lg md:text-xl leading-7"
          v-html="description"
        />
      </div>
    </div>
    <template v-if="index !== projectCount">
      <hr class="line-break">
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
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
  methods: {
    // for some reason, adding Record<string, string> throws a lint error that Record is undefined
    // probably until upgrading to vue 3 for real.
    getAnalyticsLink(link: string, utmObject: any): string {
      const { source, medium, campaign } = utmObject;
      return `${link}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
    },
  },
});
</script>

<style scoped>
.line-break {
  border: 0;
  height: 1px;
  margin-left: 11vw;
  margin-right: 11vw;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(203, 213, 224), rgba(0, 0, 0, 0));
}
</style>
