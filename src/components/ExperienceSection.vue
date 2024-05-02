<template>
  <!-- /**
   * Renders the Experience section of the resume.
   * 
   * @param {Array<Experience>} experiences - Array containing experience information objects.
   * 
   * @typedef {Object} Experience
   * @property {number} Experience.id - Unique identifier for the experience entry.
   * @property {string} Experience.title - Job title or position held.
   * @property {string} Experience.company - Name of the company or organization.
   * @property {string} Experience.startDate - Start date of the experience.
   * @property {string} Experience.endDate - End date of the experience (optional).
   * @property {string} Experience.description - Brief description of the experience and responsibilities.
   */ -->
  <div class="section">
    <header class="resumeheader">Experience</header>
    <ul v-if="experiences">
      <li v-for="experience in experiences" :key="experience.id">
        <h2>{{ experience.position }}</h2>
        <h3>{{ experience.company }}</h3>
        <h4>{{ formatDate(experience.startDate)  }} - {{ formatDate(experience.endDate) }}</h4>
        <p>{{ experience.description }}</p>
      </li>
    </ul>
    <p v-else>No experience data available.</p>
  </div>
</template>

<script>
/**
 * Vue component representing the Experience section.
 */
export default {
  props: {
    /**
     * Array containing experience information objects.
     * 
     * @type {Array<Experience>}
     */
    experiences: Array, // Define prop type as an array
  },
  methods: {
    formatDate(value) {
      const date = new Date(value);
      return `${date.getMonth() + 1}/${date.getFullYear()}`; // Format as MM-YYYY
    }
  }
};
</script>
