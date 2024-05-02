<template>
  <!-- /**
   * Renders the main resume component with various sections.
   * 
   * Emits a `mousemove` event when the mouse is moved over the component.
   */ -->
  <div id="resumewrap">
    <div id="light" class="light-element" :style="{ top: lightPosition.top + 'px', left: lightPosition.left + 'px' }"></div>

    <div class="text-container" align="left">
      <AboutSection v-if="about" :about="about" />
      <ExperienceSection v-if="resume && resume.experiences" :experiences="resume.experiences" />
      <EducationSection v-if="resume && resume.education" :educations="resume.education" />
      <ContactSection v-if="resume && resume.contacts" :contacts="resume.contacts" />
      <SkillSection v-if="resume && resume.skills" :skills="resume.skills" />
    </div>
  </div>
</template>

<script>
/**
 * Vue component representing the main resume page.
 */
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import SkillSection from "@/components/SkillSection.vue";

export default {
  components: {
    AboutSection,
    ExperienceSection,
    EducationSection,
    ContactSection,
    SkillSection,
  },
  data() {
    return {
      /**
       * Object containing resume data fetched from API.
       */
      resume: null,
      /**
       * Object containing basic information about the person (extracted from resume data).
       */
      about: null,
      /**
       * Object representing the position of the light element.
       */
      lightPosition: {
        top: 0,
        left: 0,
      },
    };
  },
  mounted() {
    window.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  },
  created() {
    this.fetchResume();
  },

  methods: {
  /**
   * Fetches resume data from the API endpoint specified in `process.env.VUE_APP_API_URL`.
   * Updates the component's `resume` and `about` data upon successful retrieval.
   * Logs an error message to the console if fetching fails.
   * 
   * @returns {Promise<void>}
   */
    async fetchResume() {
    try {
      const response = await fetch(process.env.VUE_APP_API_URL);
      const data = await response.json();
      console.log('DATA=>', data);
      this.resume = data;
      this.about = {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
      };
    } catch (error) {
      console.error('Error fetching resume:', error);
    }
  },
  /**
   * Handles mouse movement events within the component.
   * Updates the `lightPosition` data based on the mouse's position.
   * 
   * @param {MouseEvent} event - The mouse move event object.
   */
  handleMouseMove(event) {
    this.lightPosition.top = event.pageY - 250;
    this.lightPosition.left = event.pageX - 300;
  },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/ResumePage.vue.scss";
</style>
