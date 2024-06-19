import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const routes = [
	{ path: "/", component: HomeView },
	{
		path: "/tugas1",
    component: HomeView,
		beforeEnter(to, from, next) {
      window.open("https://abilla-project-cv.netlify.app", '_blank');
		},
	},
	{
		path: "/tugas2",
    component: HomeView,
		beforeEnter(to, from, next) {
      window.open("https://abillaasbebrianti-223510226-tugas2.netlify.app", '_blank');
		},
	},
	{
		path: "/tugas3",
    component: HomeView,
		beforeEnter(to, from, next) {
      window.open("https://abilla-223510226-tgs3.netlify.app", '_blank');
		},
	},
	{
		path: "/tugas4",
    component: HomeView,
		beforeEnter(to, from, next) {
      window.open("https://abilla-223510226tgs4.netlify.app", '_blank');
		},
	},
	{
		path: "/tugas5",
    component: HomeView,
		beforeEnter(to, from, next) {
      window.open("https://abilla-223510226-tgs5.netlify.app", '_blank');
		},
	},
	{
		path: "/tugas6",
    component: HomeView,
		beforeEnter(to, from, next) {
      window.open("https://abillatgs6-4a.netlify.app", '_blank');
		},
	},
	{ path: "/tugas7", component: HomeView },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
