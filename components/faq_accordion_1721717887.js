Vue.component('faq_accordion_1721717887', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Cooking Companion FAQ</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Get answers to common questions about our app for making foods.</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
      <div class="flex justify-center mt-6">
        <button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Free
        </button>
      </div>
    </div>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What kind of recipes does the app offer?",
          a: "Our app has an extensive library of recipes for all types of dishes - appetizers, main courses, desserts, and more. You'll find recipes for different cuisines, dietary needs, and skill levels."
        },
        {
          q: "Can I save my favorite recipes?",
          a: "Yes, you can easily save any recipe to your personal favorites list within the app. This allows quick access to the dishes you love to make."
        },
        {
          q: "Does the app include step-by-step instructions?",
          a: "Absolutely. Each recipe provides detailed, easy-to-follow step-by-step instructions along with photos or videos to guide you through the cooking process."
        },
        {
          q: "Can I adjust serving sizes?",
          a: "Yes, most recipes allow you to scale ingredient amounts up or down to adjust for different serving sizes based on your needs."
        },
        {
          q: "Is there a meal planning feature?",
          a: "Yes, our app includes a meal planning calendar that allows you to plan out meals for the week or month. You can easily add recipes and generate grocery lists."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});