<template>
  <section class="mx-auto">
    <h2 class="text-center">
      {{ project.name }}
    </h2>
    <div class="clearfix">
      <div class="mx-auto text-center w-4/5 mb-4 md:w-1/2 md:float-left md:clearfix md:mr-4">
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
          class="block my-2"
          target="_blank"
          rel="noreferrer"
          :href="project.href"
          v-html="project.tagline"
        />
      </div>
      <div>
        <p
          class="px-2 prose-lg"
          v-html="project.description"
        />
      </div>
    </div>
    <template v-if="index !== projectCount">
      <hr class="line-break">
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
  margin-top: 15px;
  border: 0;
  height: 1px;
  margin-left: 11vw;
  margin-right: 11vw;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(203, 213, 224), rgba(0, 0, 0, 0));
}
/*
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
  .project-tagline-link {
    display: block;
    color: $red;
    font-size: 18px;
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
    .project-link {
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
  
}

@media (max-width: $XL) {
  #web-projects {
    .project-container {
      max-width: 100%;
      display: flex;
      flex-flow: column;
      .project-image-container {
        width: 100%;
        float: none;
        margin: 0 auto;
        .project-link img {
          display: block;
          margin: 0 auto;
          margin-bottom: 4px;
          width: 80%;
        }
      }
    }
    .project-tagline-link {
      margin-bottom: 8px;
    }
    .project-link-container {
      width: 80%;
      margin: 0 auto;
    }
  }
} */
</style>
