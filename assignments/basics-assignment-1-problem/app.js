const app = Vue.createApp({
  data() {
    return {
      name: "Grant Martinez",
      age: 22,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    };
  },
  methods: {
    favNum() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
