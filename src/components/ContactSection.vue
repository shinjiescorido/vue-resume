<template>
  <!-- /**
   * Renders the Contact section of the resume.
   * 
   * @param {Array<Contact>} contacts - Array containing contact information objects.
   * 
   * @typedef {Object} Contact
   * @property {number} Contact.id - Unique identifier for the contact.
   * @property {string} Contact.name - Name of the contact.
   * @property {string} Contact.company - Company name of the contact (optional).
   * @property {string} Contact.role - Role of the contact within the company (optional).
   * @property {string} Contact.email - Email address of the contact.
   * @property {string} Contact.mobile - Mobile phone number of the contact (optional).
   */ -->
  <div class="section">
    <header class="resumeheader">Contact</header>
    <ul v-if="contacts">
      <li v-for="contact in contacts" :key="contact.id">
        <p>
          {{ contact.name }}<br />
          {{ contact.company }} | {{ contact.role }} <br />
          {{ contact.email }}<br />
          {{ contact.mobile }}
        </p>
      </li>
    </ul>
    <p v-else>No contacts information available.</p>
  </div>
</template>

<script>
/**
 * Vue component representing the Contact section.
 */
export default {
  props: {
    /**
     * Array containing contact information objects.
     * 
     * @type {Array<Contact>}
     */
    contacts: Array, // Define prop type as an object
  },
};
</script>
