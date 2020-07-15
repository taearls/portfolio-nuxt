<template>
  <section id="web-projects">
    <h2 class="project-title">
      {{ project.name }}
    </h2>

    <div class="project-container">
      <div class="project-image-container">
        <a
          class="screenshot-link"
          :rel="project.analytics ? 'external' : 'noreferrer'"
          target="_blank"
          :href="project.analytics ? getAnalyticsLink(project.href, project.analytics) : project.href"
          :style="{cursor: project.cursorStyle}"
        >
          <client-only>
            <cld-image
              :alt="project.alt"
              :public-id="`${project.cloudinaryID}`"
              class="project-image"
            >
              <cld-transformation
                width="400"
              />
            </cld-image>
          </client-only>
        </a>
        <a
          class="portfolio-link"
          target="_blank"
          rel="noreferrer"
          :href="project.href"
          v-html="project.tagline"
        />
      </div>
      <div>
        <p
          class="project-description"
          v-html="project.description"
        />
      </div>
    </div>
    <br>

    <template v-if="index !== projectCount">
      <hr class="line-break clear">
      <br>
    </template>
    <template v-else>
      <div class="clear" />
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
  methods: {
    getAnalyticsLink(link, analyticsObject) {
      const {source, medium, campaign} = analyticsObject;
      return `${link}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/global.scss";

#web-projects {
  h1 {
    margin-bottom: 20px;
  }
  .project-container {
    max-width: 80vw;
    margin: 20px auto;
  }
  .italic {
    font-style: italic;
  }
  .portfolio-link {
    display: block;
    color: $red;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    width: 75%;
    margin: 0 auto;
    &:hover {
      color: $lightblue;
      transition: 0.2s ease;
    }
  }
  .project-image-container {
    float: left;
    width: 50%;
    margin: 0 10px;
    margin-bottom: 20px;
    height: max-content;
    .portfolio-screenshot {
      margin: 7px auto;
      height: auto;
      display: block;
    }
    .screenshot-link {
      img {
        margin: 5px 20px;
        width: calc(100% - 40px);
      }
    }
  }
  .project-title, .skill-title {
    margin-bottom: 10px;
    font-weight: bold;
    color: $red;
    text-align: center;
  }
  .project-description {
    margin-bottom: 10px;
  }
  .line-break {
    margin-top: 15px;
    border: 0;
    height: 1px;
    margin-left: 11vw;
    margin-right: 11vw;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), $red, rgba(0, 0, 0, 0));
  }
}
</style>