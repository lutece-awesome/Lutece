import Vue from 'vue';
import {
	Vuetify, // required
	VApp, // required
	VTextarea,
	VSwitch,
	VNavigationDrawer,
	VGrid,
	VToolbar,
	VList,
	VBtn,
	VAvatar,
	VCard,
	VMenu,
	VIcon,
	VAutocomplete,
	VDataTable,
	VPagination,
	VTabs,
	VSelect,
	VTextField,
	VForm,
	VDivider,
	VProgressLinear,
	VSnackbar,
	VDataIterator,
	transitions,
} from 'vuetify';
import { Resize } from 'vuetify/es5/directives';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
	components: {
		VTextarea,
		VSwitch,
		VApp,
		VNavigationDrawer,
		VGrid,
		VToolbar,
		VList,
		VBtn,
		VAvatar,
		VCard,
		VMenu,
		VIcon,
		VAutocomplete,
		VDataTable,
		VPagination,
		VTabs,
		VSelect,
		VTextField,
		VForm,
		VDivider,
		VProgressLinear,
		VSnackbar,
		VDataIterator,
		transitions,
	},
	directives: {
		Resize,
	},
	iconfont: 'mdi',
	theme: {
		primary: colors.blue.darken1,
		secondary: colors.blue.darken2,
		accent: colors.pink.base,
	},
});
