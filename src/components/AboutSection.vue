<template>
  <!-- /**
   * Renders the About section of the resume.
   * 
   * @param {Object} about - Data object containing information about the person.
   *  - {string} about.name - Name of the person.
   *  - {string} about.mobile - Mobile phone number.
   *  - {string} about.email - Email address.
   */ -->
  <div class="about-container">
    <header class="resumeheader">{{ about.name }}</header>
    <p>{{ about.mobile }} | {{ about.email }}</p>
    <p>
      Experienced Node.js Developer with over a decade of expertise in designing, developing, and deploying web applications and services across diverse applications. Passionate about driving innovation and improving user experiences. Seeking challenging opportunities to apply my skills and contribute to the advancement of web application development.
    </p>
  </div>
</template>

<script>
/**
 * Vue component representing the About section.
 */
export default {
  props: {
    /**
     * Data object containing information about the person.
     * 
     * @typedef {Object} AboutData
     * @property {string} AboutData.name - Name of the person.
     * @property {string} AboutData.mobile - Mobile phone number.
     * @property {string} AboutData.email - Email address.
     */
    about: Object, // Define prop type as an object
  },
};
</script>

<style scoped>
/* Add your styles for the About section here */
</style>
