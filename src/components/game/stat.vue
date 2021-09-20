<template>
 <table class="table-fixed">
  <thead>
    <tr>
      <th class="w-1/2 ...">Title</th>
      <th class="w-1/4 ...">Author</th>
      <th class="w-1/4 ...">Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Intro to CSS</td>
      <td>Adam</td>
      <td>858</td>
    </tr>
    <tr class="bg-blue-200">
      <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td>Adam</td>
      <td>112</td>
    </tr>
    <tr>
      <td>Intro to JavaScript</td>
      <td>Chris</td>
      <td>1,280</td>
    </tr>
  </tbody>
</table>
  <router-link to="/game/home" type="router-link " class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <PlusIconSolid class="h-5 w-5" aria-hidden="true" />Назад
  </router-link >


</template>

<script>
import { PlusIcon as PlusIconSolid } from '@heroicons/vue/solid'


export default {
 components: {
    PlusIconSolid,

  },
}
</script>

<style>

</style>

