<template>
  <!-- /**
   * Renders the Education section of the resume.
   * 
   * @param {Array<Education>} educations - Array containing education information objects.
   * 
   * @typedef {Object} Education
   * @property {number} Education.id - Unique identifier for the education entry.
   * @property {string} Education.school - Name of the school or institution.
   * @property {string} Education.course - Course or program of study (optional).
   * @property {string} Education.date - Graduation date or period of attendance.
   */ -->
  <div class="section">
    <header class="resumeheader">Education</header>
    <ul v-if="educations">
      <li v-for="education in educations" :key="education.id">
        <h2>{{ education.school }}</h2>
        <h3>{{ education.course }}</h3>
        <h4>{{ education.date }}</h4>
      </li>
    </ul>
    <p v-else>No education data available.</p>
  </div>
</template>

<script>
/**
 * Vue component representing the Education section.
 */
export default {
  props: {
    /**
     * Array containing education information objects.
     * 
     * @type {Array<Education>}
     */
    educations: Array, // Define prop type as an array
  },
};
</script>
