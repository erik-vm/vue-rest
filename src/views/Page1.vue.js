import { onMounted, reactive, ref } from 'vue';
import { GpsLocationTypeService } from '../services/GpsLocationTypeService';
const requestIsOngoing = ref(false);
const data = reactive({});
const service = new GpsLocationTypeService();
const fetchPageData = async () => {
    requestIsOngoing.value = true;
    try {
        const result = await service.getAllAsync();
        console.log(result.data);
        data.data = result.data;
        data.errors = result.errors;
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
    finally {
        requestIsOngoing.value = false;
    }
};
onMounted(async () => {
    await fetchPageData();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
(__VLS_ctx.requestIsOngoing == true ? 'ongoing' : 'done');
if (__VLS_ctx.data.data) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: "table table-striped" },
    });
    for (const [item, key] of __VLS_getVForSourceType((__VLS_ctx.data.data))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            key: (key),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.id);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.description);
    }
}
/** @type {__VLS_StyleScopedClasses['table']} */ ;
/** @type {__VLS_StyleScopedClasses['table-striped']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            requestIsOngoing: requestIsOngoing,
            data: data,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Page1.vue.js.map