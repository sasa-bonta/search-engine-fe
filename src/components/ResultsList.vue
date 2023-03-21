<template class="w-100">
  <v-list lines="three">
    <v-list-item
        v-for="item in list"
        :key="item.url"
        :title="item.title"
        :subtitle="item.description"
        @click="visitLink(item.url)"
    ></v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "ResultsList",

  setup() {
    let list = [
      {
        title: "Moldova - Wikipedia",
        url: "en.wikipedia.org/wiki/Moldova",
        description: "Moldova is a member state of the United Nations, the Council of Europe, the World Trade Organization, the Organization for Security and Cooperation in Europe, the GUAM Organization for Democracy and Economic Development, the Commonwealth of Independent States, the Organization of the Black Sea Economic Cooperation, and the Association Trio."
      },
      {
        title: "Moldova | History, Population, Map, Flag, Capital, & Facts",
        url: "www.britannica.com/place/Moldova",
        description: "Moldova is bounded by Ukraine to the north, east, and south and by Romania to the west. The bulk of the republic lies between the great meandering Prut and Dniester rivers. Britannica Quiz Countries of the World Relief Moldova lies to the east of the great arc of the Carpathian Mountains."
      },
      {
        title: "Moldova: Secret FSB document reveals Russia's 10-year plan to ...",
        url: "www.cnn.com/2023/03/16/europe/.../index.html",
        description: "The plan includes making Moldova dependent on imports of Russian gas and stirring up social conflict, as well as trying to block Moldova’s efforts to gain influence in the pro-Russian breakaway..."
      },
      {
        title: "Moldova - The World Factbook - Central Intelligence Agency",
        url: "www.cia.gov/the-world-factbook/countries/moldova",
        description: "Introduction Background A large portion of present day Moldovan territory became a province of the Russian Empire in 1812 and then unified with Romania in 1918 in the aftermath of World War I. This territory was then incorporated into the Soviet Union at the close of World War II."
      },
      {
        title: "As war rages in Ukraine, is Moldova on the brink of conflict?",
        url: "www.aljazeera.com/.../as-war-rages-in-ukraine-is-moldova-on-the-brink-of-conf...",
        description: "Moldova faces a “civil conflict”, pro-Russian forces say, while their pro-Western opponents call the crises a “hybrid war” instigated by Moscow to force the nation of 2.6 million back into ..."
      },
      {
        title: "Moldova prepares sanctions against about 25 people due to Russia's war ...",
        url: "news.yahoo.com/moldova-prepares-sanctions-against-25-164307956.html",
        description: "Moldova is preparing personal sanctions against several individuals in connection with Russia's war against Ukraine. The first decisions may be announced in a few weeks. Source: Nicu Popescu, Minister of Foreign Affairs and European Integration of Moldova Popescu said that Moldova has begun to join European sanctions against Russia gradually, in connection with its aggressive war against ..."
      },
      {
        title: "Moldavia - Wikipedia",
        url: "en.wikipedia.org/wiki/Moldavia",
        description: "An initially independent and later autonomous state, it existed from the 14th century to 1859, when it united with Wallachia ( Țara Românească) as the basis of the modern Romanian state; at various times, Moldavia included the regions of Bessarabia (with the Budjak ), all of Bukovina and Hertsa."
      },
      {
        title: "Moldova Maps & Facts - World Atlas",
        url: "www.worldatlas.com/maps/moldova",
        description: "Moldova is a small Eastern European country with an area of 33,846 km2 (13,068 sq mi) including the disputed territory of Transnistria. Excluding it, Moldova occupies an area of 29,683 km2 (11,461 sq mi). As observed on the physical map of Moldova, the country has a hilly terrain with a subtle slope south toward the Black Sea."
      },
      {
        title: "Moldova Seeks Answers as Putin's Plans Revealed",
        url: "www.newsweek.com/moldova-russia-ukraine-putin-plans-revealed-1787957",
        description: "Shor's party holds six seats in Moldova's 101-seat legislature. In February, Sandu accused Moscow of plotting to overthrow her government by using military-trained saboteurs disguised as civilians."
      },
      {
        title: "Moldova could be next on Putin's list. Here's why the country fears it ...",
        url: "www.cnn.com/2023/02/26/europe/.../index.html",
        description: "Moldova is a country at a crossroads between east and west. Its government and most of its citizens want closer ties to the EU, and the country achieved candidacy status last year."
      }
    ]

    function visitLink(link) {
      window.location = "https://" + link
    }

    return {
      list,
      visitLink,
    }
  }
}
</script>

<style scoped>

</style>