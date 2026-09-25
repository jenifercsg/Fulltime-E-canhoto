import './assets/main.css'
import { installI18n } from './locales/index.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/aura-light-green/theme.css';
import Button from 'primevue/button';
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import FileUpload from 'primevue/fileupload';
import InputNumber from 'primevue/inputnumber';
import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import Badge from 'primevue/badge';
import ProgressBar from 'primevue/progressbar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Dialog from 'primevue/dialog';

const app = createApp(App);
app.use(PrimeVue);
installI18n(app);

app.use(router)
app.use(createPinia())

app.component('Stepper', Stepper)
app.component('StepperPanel', StepperPanel)
app.component('InputNumber', InputNumber)
app.component('InputText', InputText)
app.component('AutoComplete', AutoComplete)
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('Badge', Badge)
app.component('ProgressBar', ProgressBar)
app.component('FileUpload', FileUpload)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('Dialog', Dialog)


app.mount('#app')
