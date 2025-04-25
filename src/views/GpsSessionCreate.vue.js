import { GpsSessionTypeService } from '@/services/GpsSessionTypeService';
import { GpsSessionService } from '@/services/GpsSessionService';
import { useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
const router = useRouter();
const requestIsOngoing = ref(false);
const sessionTypeData = reactive({});
const service = new GpsSessionTypeService();
const fetchPageData = async () => {
    requestIsOngoing.value = true;
    try {
        const result = await service.getAllAsync();
        console.log(result.data);
        sessionTypeData.data = result.data;
        sessionTypeData.errors = result.errors;
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
const name = ref('');
const description = ref('');
const sessionType = ref('');
const paceMin = ref(0);
const paceMax = ref(0);
const error = ref(null);
const doCreateSession = async () => {
    // do create session
    const response = await GpsSessionService.createSession(name.value, description.value, sessionType.value);
    if (response.data) {
        router.push({ name: 'GpsSession' });
    }
    else {
        error.value = response.errors?.[0] || 'Creating session failed';
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    role: "main",
    ...{ class: "pb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-md-4 offset-md-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "alert alert-warning" },
        role: "alert",
    });
    (__VLS_ctx.error);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.doCreateSession) },
    id: "register",
    method: "post",
    novalidate: "novalidate",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-floating mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "form-label" },
    for: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    value: (__VLS_ctx.name),
    ...{ class: "form-control" },
    autocomplete: "name",
    'aria-required': "true",
    placeholder: "name",
    type: "text",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "form-label" },
    for: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
    value: (__VLS_ctx.description),
    ...{ class: "form-control" },
    id: "exampleFormControlTextarea1",
    rows: "3",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "form-floating mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "form-label" },
    for: "sessionType",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: (__VLS_ctx.sessionType),
    ...{ class: "form-control" },
    id: "sessionType",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    disabled: true,
    value: "",
});
for (const [type] of __VLS_getVForSourceType((__VLS_ctx.sessionTypeData.data))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (type.id),
        value: (type.id),
    });
    (type.name);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    id: "create-session",
    type: "submit",
    ...{ class: "w-100 btn btn-lg btn-primary" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
/** @type {__VLS_StyleScopedClasses['pb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['offset-md-4']} */ ;
/** @type {__VLS_StyleScopedClasses['alert']} */ ;
/** @type {__VLS_StyleScopedClasses['alert-warning']} */ ;
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['form-floating']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['form-label']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            sessionTypeData: sessionTypeData,
            name: name,
            description: description,
            sessionType: sessionType,
            error: error,
            doCreateSession: doCreateSession,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=GpsSessionCreate.vue.js.map