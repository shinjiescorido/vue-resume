<template>
  <!-- /**
   * Renders the Skills section of the resume.
   * 
   * @param {Array<string>} skills - Array containing skill names as strings.
   */ -->
  <div class="section">
    <header class="resumeheader">Skills</header>
    <ul v-if="skills">
      <li v-for="skill in skills" :key="skill">
        {{ skill }}
      </li>
    </ul>
    <p v-else>No skills information available.</p>
  </div>
</template>

<script>
/**
 * Vue component representing the Skills section.
 */
export default {
  props: {
    /**
     * Array containing skill names as strings.
     * 
     * @type {Array<string>}
     */
    skills: Array, // Define prop type as an array
  },
};
</script>
