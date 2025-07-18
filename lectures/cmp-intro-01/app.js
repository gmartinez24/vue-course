const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show'}}</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> 01234 5678 991</li>
            <li><strong>Email:</strong> manuel@localhost.com</li>
          </ul>
        </li>
        `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
